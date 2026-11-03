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
     `asked` écarte les questions déjà posées : on ne repose jamais deux
     fois la même question dans un même test. Si la banque d'un niveau
     est épuisée, le test s'arrête (voir submit). */
  function pickItems(code, level, asked) {
    var pool = poolFor(code, level);
    if (!pool.length) return [];
    var seen = (asked || []).map(function (a) { return a.item; });
    pool = pool.filter(function (i) { return seen.indexOf(i) === -1; });
    var reading = shuffle(pool.filter(function (i) { return i.skill === "reading"; }));
    var rest = shuffle(pool.filter(function (i) { return i.skill !== "reading"; }));
    var out = [];
    if (reading.length) out.push(reading.shift());
    while (out.length < 3 && rest.length) out.push(rest.shift());
    while (out.length < 3 && reading.length) out.push(reading.shift());
    return shuffle(out);
  }

  /* ---------- Test adaptatif ----------
     Principe : 3 questions par niveau. 2 bonnes réponses ou plus → on monte.
     0 ou 1 → on descend. On s'arrête en haut (C2 validé) ou en bas (A1 échoué).
     9 à 18 questions en général ; moins si la banque d'un niveau est épuisée. */
  function newTest(code, startLevel) {
    var idx = Math.max(0, LEVELS.indexOf(startLevel || "A2"));
    var t = {
      code: code,
      level: idx,
      queue: null,
      qi: 0,
      asked: [],
      correctAtLevel: 0,
      passed: [],
      failed: [],
      finished: false,
      finalLevel: null
    };
    t.queue = pickItems(t.code, LEVELS[idx]);
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
      if (!t.finished && change) {
        t.level += change === "up" ? 1 : -1;
        t.queue = pickItems(t.code, LEVELS[t.level], t.asked);
        t.qi = 0;
        t.correctAtLevel = 0;
        // Banque épuisée pour ce niveau : on préfère arrêter plutôt que de
        // reposer les mêmes questions ou de juger un palier sur un seul item.
        if (t.queue.length < 2) {
          t.finished = true;
          t.finalLevel = lastPassed;
        }
      }
    }
    // Plafond : 18 questions, quel que soit le nombre d'aller-retours.
    if (!t.finished && t.asked.length >= 18) {
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
