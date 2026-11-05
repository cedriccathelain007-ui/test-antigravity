/* LinguaStep — moteur pédagogique : test adaptatif, correction, calculs.
   Logique pure, sans accès au DOM (testable séparément). */
window.Engine = (function () {
  var LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

  var LEVEL_INFO = {
    A1: { label: "Découverte", short: "Débutant", desc: "Mots et phrases du quotidien." },
    A2: { label: "Survie", short: "Élémentaire", desc: "Échanges simples et concrets." },
    B1: { label: "Seuil", short: "Intermédiaire", desc: "Débrouille en situation professionnelle." },
    B2: { label: "Avancé", short: "Avancé", desc: "Argumente et travaille en autonomie." },
    C1: { label: "Autonome", short: "Courant", desc: "S'exprime avec aisance et nuance." },
    C2: { label: "Maîtrise", short: "Expert", desc: "Précision proche de la langue maternelle." }
  };

  var SKILLS = [
    { key: "grammar", label: "Grammaire" },
    { key: "vocab", label: "Vocabulaire" },
    { key: "reading", label: "Compréhension" }
  ];

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function norm(s) {
    return String(s == null ? "" : s)
      .toLowerCase()
      .replace(/[’‘`]/g, "'")
      .replace(/[.!?]+$/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function poolFor(code, level) {
    var c = window.COURSES && window.COURSES[code];
    if (!c || !c.test || !c.test[level]) return [];
    return c.test[level];
  }

  /* Sélection des 3 questions d'un palier : une compréhension écrite
     (si la banque en contient) + deux autres, tirées au hasard.
     `asked` écarte les questions déjà posées dans le test en cours.
     `recent` contient les identifiants déjà vus lors des tests précédents :
     on pioche d'abord dans les questions neuves, puis on complète avec les
     anciennes si la banque est trop petite. Résultat : à chaque nouveau test,
     l'apprenant voit des questions différentes tant que la réserve le permet. */
  /* Taille du test anglais. Une personne connaît approximativement son niveau
     et commence par celui-là : le test creuse donc ce niveau au lieu de faire
     gravir des paliers. 48 questions au même niveau, notées sur 20 (0,42 point
     par bonne réponse) : 36 bonnes réponses = 15/20, 24 = 10/20.
     Le test s'arrête après cette série unique et ne déplace le niveau que d'un
     cran, vers le haut ou vers le bas. */
  var EN_SERIES = 48;

  function drawN(pool, n) {
    var reading = shuffle(pool.filter(function (i) { return i.skill === "reading"; }));
    var rest = shuffle(pool.filter(function (i) { return i.skill !== "reading"; }));
    var out = [];
    if (reading.length) out.push(reading.shift());
    while (out.length < n && rest.length) out.push(rest.shift());
    while (out.length < n && reading.length) out.push(reading.shift());
    return out;
  }

  /* Les bonnes réponses sont souvent écrites en première position dans les
     fichiers de contenu. On mélange donc l'ordre des propositions à chaque
     tirage : la position de la bonne réponse ne donne aucun indice. */
  function shuffleOptions(item) {
    if (!item || !item.options || item.options.length < 2) return item;
    var order = shuffle(item.options.map(function (_, k) { return k; }));
    var copy = {};
    Object.keys(item).forEach(function (k) { copy[k] = item[k]; });
    copy.options = order.map(function (k) { return item.options[k]; });
    copy.a = order.indexOf(item.a);
    return copy;
  }

  function pickItems(code, level, asked, recent, count) {
    var n = count || 3;
    var pool = poolFor(code, level);
    if (!pool.length) return [];
    var seen = {};
    (asked || []).forEach(function (a) { if (a.item && a.item.id) seen[a.item.id] = true; });
    pool = pool.filter(function (i) { return !seen[i.id]; });
    var known = {};
    (recent || []).forEach(function (id) { known[id] = true; });
    var fresh = pool.filter(function (i) { return !known[i.id]; });
    var old = pool.filter(function (i) { return known[i.id]; });
    var out = drawN(fresh, n);
    if (out.length < n) out = out.concat(drawN(old, n - out.length).slice(0, n - out.length));
    return shuffle(out).map(shuffleOptions);
  }

  /* ---------- Test adaptatif ----------
     Autres langues : 3 questions par niveau, 2 bonnes réponses ou plus → on monte,
     sinon on descend. Plafond : 18 questions.

     Anglais : une série unique de 48 questions au niveau de départ, notée sur
     20. 15/20 ou plus → niveau supérieur d'un cran ; entre 10 et 14/20 → niveau
     confirmé ; moins de 10/20 → niveau inférieur d'un cran. Le test s'arrête
     toujours après cette série : on ne traverse pas plusieurs niveaux en une
     séance. */
  function newTest(code, startLevel, recent) {
    var idx = Math.max(0, LEVELS.indexOf(startLevel || "A2"));
    var t = {
      code: code,
      level: idx,
      startLevel: idx,
      queue: null,
      qi: 0,
      asked: [],
      recent: (recent || []).slice(),
      correctAtLevel: 0,
      passed: [],
      failed: [],
      finished: false,
      finalLevel: null,
      note: null
    };
    t.queue = pickItems(t.code, LEVELS[idx], [], t.recent, code === "en" ? EN_SERIES : 3);
    return t;
  }

  function currentItem(t) {
    if (!t || t.finished) return null;
    return t.queue[t.qi] || null;
  }

  function submit(t, choice) {
    var item = currentItem(t);
    if (!item) return null;
    var correct = choice === item.a;
    t.asked.push({ item: item, choice: choice, correct: correct });
    if (correct) t.correctAtLevel++;
    t.qi++;

    var change = null;
    var lastPassed = t.passed.length ? t.passed[t.passed.length - 1] : "A1";

    if (t.code === "en") {
      /* Série unique terminée : on calcule la note sur 20 et on tranche.
         48 questions valent 0,42 point chacune ; la note garde une décimale. */
      if (t.qi >= t.queue.length) {
        var note = Math.round((t.correctAtLevel / t.queue.length) * 200) / 10;
        t.note = note;
        if (note >= 15) {
          t.passed.push(LEVELS[t.level]);
          t.finalLevel = LEVELS[Math.min(t.level + 1, LEVELS.length - 1)];
        } else if (note >= 10) {
          /* Niveau confirmé : on ne bouge pas. */
          t.finalLevel = LEVELS[t.level];
        } else {
          t.failed.push(LEVELS[t.level]);
          t.finalLevel = LEVELS[Math.max(t.level - 1, 0)];
        }
        t.finished = true;
      }
    } else {
      /* Autres langues : palier de 3 questions, 2 bonnes réponses ou plus pour monter. */
      if (t.qi >= t.queue.length) {
        if (t.correctAtLevel >= 2) {
          t.passed.push(LEVELS[t.level]);
          lastPassed = LEVELS[t.level];
          if (t.level >= LEVELS.length - 1) {
            t.finished = true;
            t.finalLevel = "C2";
          } else {
            change = "up";
          }
        } else {
          t.failed.push(LEVELS[t.level]);
          if (t.level <= 0) {
            t.finished = true;
            t.finalLevel = lastPassed;
          } else {
            change = "down";
          }
        }
      }
    }

    if (!t.finished && change) {
      t.level += change === "up" ? 1 : -1;
      t.queue = pickItems(t.code, LEVELS[t.level], t.asked, t.recent, t.code === "en" ? EN_SERIES : 3);
      t.qi = 0;
      t.correctAtLevel = 0;
      if (t.queue.length < 2) {
        t.finished = true;
        t.finalLevel = lastPassed;
      }
    }

    // Plafond : 18 questions pour les autres langues. Le test anglais s'arrête
    // de lui-même à la fin de sa série unique.
    var cap = t.code === "en" ? EN_SERIES : 18;
    if (!t.finished && t.asked.length >= cap) {
      t.finished = true;
      t.finalLevel = lastPassed;
    }
    return { correct: correct, item: item, change: change, finished: t.finished };
  }

  function testResult(t) {
    var level = t.finalLevel || (t.passed.length ? t.passed[t.passed.length - 1] : "A1");
    var skills = {};
    t.asked.forEach(function (a) {
      var k = a.item.skill || "grammar";
      if (!skills[k]) skills[k] = { correct: 0, total: 0 };
      skills[k].total++;
      if (a.correct) skills[k].correct++;
    });
    var correct = t.asked.filter(function (a) { return a.correct; }).length;
    return {
      level: level,
      start: LEVELS[t.startLevel == null ? t.level : t.startLevel],
      passed: t.passed.slice(),
      failed: t.failed.slice(),
      skills: skills,
      asked: t.asked.map(function (a) {
        return {
          prompt: a.item.q,
          passage: a.item.passage || "",
          options: a.item.options,
          answer: a.item.options[a.item.a],
          choice: a.choice == null ? null : a.item.options[a.choice],
          correct: a.correct,
          why: a.item.why || "",
          skill: a.item.skill || "grammar"
        };
      }),
      total: t.asked.length,
      correct: correct,
      note: t.note == null ? null : t.note,
      date: new Date().toISOString(),
      reliability: "estimation indicative (± 1 niveau)"
    };
  }

  /* ---------- Correction des exercices ---------- */
  function checkExercise(ex, response) {
    if (!ex) return { correct: false, expected: "" };
    if (ex.type === "qcm") {
      return { correct: response === ex.a, expected: ex.options[ex.a] };
    }
    if (ex.type === "fill") {
      var accepted = ex.a || [];
      var ok = accepted.some(function (v) { return norm(v) === norm(response); });
      return { correct: ok, expected: accepted[0] };
    }
    if (ex.type === "order") {
      var target = norm(ex.a);
      var given = norm(Array.isArray(response) ? response.join(" ") : response);
      return { correct: target === given, expected: ex.a };
    }
    return { correct: false, expected: "" };
  }

  function skillScore(skills, key) {
    var s = skills && skills[key];
    if (!s || !s.total) return null;
    return Math.round((s.correct / s.total) * 100);
  }

  function weakestSkill(skills) {
    var best = null;
    SKILLS.forEach(function (s) {
      var v = skillScore(skills, s.key);
      if (v == null) return;
      if (!best || v < best.value) best = { key: s.key, label: s.label, value: v };
    });
    return best;
  }

  function barClass(pct) {
    if (pct == null) return "";
    if (pct >= 75) return "high";
    if (pct >= 50) return "mid";
    return "low";
  }

  function nextLevel(level) {
    var i = LEVELS.indexOf(level);
    return i >= 0 && i < LEVELS.length - 1 ? LEVELS[i + 1] : null;
  }

  return {
    LEVELS: LEVELS,
    LEVEL_INFO: LEVEL_INFO,
    SKILLS: SKILLS,
    shuffle: shuffle,
    norm: norm,
    newTest: newTest,
    currentItem: currentItem,
    submit: submit,
    testResult: testResult,
    checkExercise: checkExercise,
    skillScore: skillScore,
    weakestSkill: weakestSkill,
    barClass: barClass,
    nextLevel: nextLevel
  };
})();
