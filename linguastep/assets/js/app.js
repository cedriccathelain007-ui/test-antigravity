/* LinguaStep — interface et navigation (vanilla JS, sans dépendance). */
(function () {
  "use strict";

  var E = window.Engine;
  var LEVELS = E.LEVELS;
  var LEVEL_INFO = E.LEVEL_INFO;

  var S = {
    lang: null,
    tab: "evaluer",
    test: null,
    testUI: null,
    result: null,
    run: null,
    sheet: null,
    focus: null,
    start: "A2",
    lastRoute: null,
    openLevel: null
  };

  var LANG_BY = {};
  (window.LANGUAGES || []).forEach(function (l) { LANG_BY[l.code] = l; });

  /* ================= utilitaires ================= */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function meta(code) { return LANG_BY[code] || { code: code, name: code, native: "", flag: "🌐", note: "" }; }
  function courseOf(code) { return (window.COURSES || {})[code]; }
  function db() { return Store.read(); }
  function st(code) { return Store.langState(code || S.lang); }

  function readiness(code) {
    var c = courseOf(code);
    if (!c || !c.test) return { ok: false, missing: LEVELS.slice() };
    var missing = LEVELS.filter(function (lv) {
      return !(c.test[lv] && c.test[lv].length >= 3);
    });
    return { ok: missing.length === 0, missing: missing };
  }

  function fmtDate(iso) {
    try {
      return new Date(iso).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
    } catch (e) { return ""; }
  }

  var toastTimer = null;
  function toast(msg) {
    var t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }

  /* ================= routage ================= */
  function route() {
    var h = (location.hash || "").replace(/^#\/?/, "");
    var parts = h.split("/").filter(Boolean);
    if (!parts.length) return { name: S.lang ? "evaluer" : "welcome", args: [] };
    if (parts[0] === "evaluer" || parts[0] === "progresser") S.tab = parts[0];
    return { name: parts[0], args: parts.slice(1) };
  }

  function go(hash) {
    if (location.hash === hash) render();
    else location.hash = hash;
  }

  function render() {
    Store.applySettings();
    var r = route();

    if (r.name !== "welcome" && !S.lang) {
      location.hash = "#/";
      return;
    }

    var html = "";
    var title = "LinguaStep";

    switch (r.name) {
      case "welcome": html = viewWelcome(); break;
      case "evaluer":
      case "progresser": html = viewHome(); title = "Mon espace — LinguaStep"; break;
      case "test": html = viewTest(); title = "Évaluation — LinguaStep"; break;
      case "resultats": html = viewResults(); title = "Mes résultats — LinguaStep"; break;
      case "lecon": html = viewLesson(r.args[0], r.args[1], r.args[2]); title = "Leçon — LinguaStep"; break;
      case "revision": html = viewReview(); title = "Révisions — LinguaStep"; break;
      case "reglages": html = viewReglages(); title = "Réglages — LinguaStep"; break;
      default:
        html = '<div class="card"><h1>Page introuvable</h1><p><a href="#/evaluer">Revenir à l\'accueil</a></p></div>';
    }

    document.title = title;
    document.getElementById("topbar").innerHTML = r.name === "welcome" ? "" : topbar();
    var main = document.getElementById("main");
    main.innerHTML = '<div class="wrap page">' + html + '</div>';

    if (r.name !== S.lastRoute) {
      S.lastRoute = r.name;
      main.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    if (S.focus) {
      var el = document.querySelector(S.focus);
      if (el) el.focus({ preventScroll: false });
      S.focus = null;
    }
    renderSheet();
  }

  /* ================= éléments communs ================= */
  function topbar() {
    var l = meta(S.lang);
    var streak = S.lang ? (st().streak.count || 0) : 0;
    return '<div class="wrap topbar-in">' +
      '<a class="brand" href="#/evaluer">' +
        '<span class="brand-mark" aria-hidden="true">LS</span>' +
        '<span class="brand-name">LinguaStep<small>évaluer · progresser</small></span>' +
      '</a>' +
      '<div class="top-actions">' +
        '<button class="chip lang-chip" data-act="sheet" data-sheet="langues" aria-haspopup="dialog" title="Changer de langue">' +
          l.flag + ' <span>' + esc(l.name) + '</span> <span aria-hidden="true">▾</span></button>' +
        (streak ? '<span class="chip streak" title="Série de jours d\'apprentissage">🔥 <span>' + streak + '&nbsp;j</span></span>' : '') +
        '<button class="icon-btn" data-act="nav" data-to="reglages" aria-label="Réglages" title="Réglages">⚙</button>' +
      '</div></div>';
  }

  function tabsHTML() {
    return '<div class="tabs">' +
      '<button class="tab" aria-pressed="' + (S.tab === "evaluer") + '" data-act="tab" data-tab="evaluer">🎯 M\'évaluer</button>' +
      '<button class="tab" aria-pressed="' + (S.tab === "progresser") + '" data-act="tab" data-tab="progresser">📈 Progresser</button>' +
    '</div>';
  }

  function barsHTML(skills) {
    var rows = E.SKILLS.map(function (s) {
      var v = E.skillScore(skills, s.key);
      if (v == null) return "";
      return '<div class="bar-row"><span class="nm">' + s.label + '</span>' +
        '<span class="bar"><i class="' + E.barClass(v) + '" style="width:' + v + '%"></i></span>' +
        '<span class="vl">' + v + '%</span></div>';
    }).join("");
    return rows ? '<div class="bars">' + rows + '</div>' : "";
  }

  function levelMeta(level) { return LEVEL_INFO[level] || { label: level, short: "", desc: "" }; }

  /* ================= écran d'accueil ================= */
  function viewWelcome() {
    var cards = (window.LANGUAGES || []).map(function (l) {
      var ready = readiness(l.code).ok;
      var a = db().langs[l.code] && db().langs[l.code].assessment;
      return '<button class="lang-card" data-act="pickLang" data-code="' + l.code + '"' +
        (ready ? "" : ' title="Contenu en préparation"') + '>' +
        '<span class="flag" aria-hidden="true">' + l.flag + '</span>' +
        '<span class="nm">' + esc(l.name) + '</span>' +
        '<span class="nat">' + esc(l.native) + '</span>' +
        (a ? '<span class="done">Niveau estimé : ' + a.level + '</span>'
           : (ready ? '<span class="done tiny muted">Test disponible</span>' : '<span class="badge-soon">Bientôt</span>')) +
        '</button>';
    }).join("");

    return '<section class="hero">' +
      '<div class="hero-grid">' +
        '<div>' +
          '<span class="eyebrow">Prototype · démonstration</span>' +
          '<h1>Évaluez votre niveau.<br>Progressez vraiment.</h1>' +
          '<p class="lead">Un test qui s\'adapte à vous, puis un parcours de formation niveau par niveau. ' +
          'Six langues, du A1 au C2, avec les corrections expliquées à chaque étape.</p>' +
          '<div class="btn-row" style="margin-top:18px">' +
            '<a class="btn primary" href="#langues">Choisir ma langue</a>' +
            '<a class="btn ghost" href="#comment">Comment ça marche</a>' +
          '</div>' +
        '</div>' +
        '<div class="hero-art" aria-hidden="true">' +
          '<div class="float-card"><span class="lv lv-B1">B1</span><div><div class="k">Niveau estimé</div><div class="v">en quelques minutes</div></div></div>' +
          '<div class="float-card"><span class="lv lv-B2">B2</span><div><div class="k">Objectif atteint</div><div class="v">grâce au parcours</div></div></div>' +
          '<div class="float-card"><span aria-hidden="true">✓</span><div><div class="k">Corrections expliquées</div><div class="v">à chaque exercice</div></div></div>' +
        '</div>' +
      '</div>' +
    '</section>' +

    '<section id="langues" style="margin-top:30px">' +
      '<div class="row-between" style="margin-bottom:12px">' +
        '<h2 style="margin:0">Choisissez votre langue</h2>' +
        '<span class="tiny muted">6 langues · 6 niveaux</span>' +
      '</div>' +
      '<div class="lang-grid">' + cards + '</div>' +
    '</section>' +

    '<section id="comment" style="margin-top:34px">' +
      '<h2>Comment ça marche</h2>' +
      '<div class="steps">' +
        '<div class="step"><span class="n">1</span><div><span class="t">Un test adaptatif</span>' +
          '<span class="d">Les questions s\'enchaînent et la difficulté suit vos réponses : le test s\'arrête quand votre niveau est cerné.</span></div></div>' +
        '<div class="step"><span class="n">2</span><div><span class="t">Un parcours à votre niveau</span>' +
          '<span class="d">Des leçons courtes, une règle à la fois, avec des exercices tirés de situations professionnelles.</span></div></div>' +
        '<div class="step"><span class="n">3</span><div><span class="t">Des corrections utiles</span>' +
          '<span class="d">Chaque réponse est expliquée. Les erreurs reviennent dans une file de révision pour être retravaillées.</span></div></div>' +
      '</div>' +
    '</section>' +

    '<p class="note" style="margin-top:26px">Prototype pédagogique. Les résultats sont indicatifs et ne remplacent pas une certification officielle. ' +
    'Vos données restent sur cet appareil (aucun envoi).</p>';
  }

  /* ================= espace personnel ================= */
  function viewHome() {
    var l = meta(S.lang);
    return '<div class="row-between" style="margin-bottom:2px">' +
        '<div><span class="eyebrow">' + l.flag + ' ' + esc(l.name) + ' · ' + esc(l.note) + '</span>' +
        '<h1 style="margin:0">Mon espace</h1></div>' +
        '<button class="btn sm" data-act="sheet" data-sheet="langues">Changer de langue</button>' +
      '</div>' +
      tabsHTML() +
      (S.tab === "evaluer" ? viewEvaluer() : viewProgresser());
  }

  function viewEvaluer() {
    var a = st().assessment;
    var ready = readiness(S.lang);

    if (!ready.ok) {
      return '<div class="card pad-lg"><h2>Contenu en préparation</h2>' +
        '<p class="lead">La banque de questions de cette langue est en cours de rédaction. ' +
        'Les niveaux suivants sont à compléter : <strong>' + ready.missing.join(", ") + '</strong>.</p>' +
        '<p class="muted">En attendant, vous pouvez choisir une autre langue dans le sélecteur en haut de page.</p>' +
        '<div class="btn-row"><button class="btn" data-act="sheet" data-sheet="langues">Changer de langue</button></div></div>';
    }

    if (a) {
      var lm = levelMeta(a.level);
      return '<div class="card pad-lg">' +
        '<div class="result-hero">' +
          '<div class="level-big" aria-hidden="true">' + a.level + '</div>' +
          '<div>' +
            '<p class="eyebrow" style="margin-bottom:6px">Niveau estimé · ' + fmtDate(a.date) + '</p>' +
            '<h2 style="margin-bottom:4px">' + lm.label + ' — ' + lm.short + '</h2>' +
            '<p class="lead" style="margin-bottom:14px">' + lm.desc + '</p>' +
            '<div class="btn-row">' +
              '<button class="btn primary" data-act="toParcours">Continuer mon parcours</button>' +
              '<a class="btn" href="#/resultats">Voir le corrigé</a>' +
              '<button class="btn ghost" data-act="retest">Refaire le test</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<hr class="divider">' +
        '<h3>Profil par compétence</h3>' + barsHTML(a.skills) +
        '<p class="tiny muted" style="margin-top:10px">' + a.reliability + '. ' + a.correct + '/' + a.total + ' ' + (a.correct > 1 ? "réponses justes" : "réponse juste") + '.</p>' +
      '</div>' +
      '<div class="card soft" style="margin-top:16px"><h3>Prochaine étape</h3>' +
        '<p>Votre parcours commence au niveau <strong>' + a.level + '</strong>. Les leçons courtes ciblent en priorité votre point faible : ' +
        (E.weakestSkill(a.skills) ? '<strong>' + E.weakestSkill(a.skills).label.toLowerCase() + '</strong>' : 'les bases') + '.</p>' +
        '<div class="btn-row"><button class="btn primary" data-act="toParcours">Ouvrir le parcours</button></div></div>';
    }

    var choices = [
      { v: "A1", t: "Je débute", s: "Peu ou pas de connaissances" },
      { v: "A2", t: "Quelques bases", s: "Je comprends les phrases simples" },
      { v: "B1", t: "Je me débrouille", s: "Je gère les situations courantes" },
      { v: "B2", t: "Je suis à l'aise", s: "Je travaille déjà dans cette langue" }
    ].map(function (c) {
      return '<label class="choice"><input type="radio" name="start" value="' + c.v + '"' +
        (S.start === c.v ? " checked" : "") + '>' +
        '<span class="choice-body"><span class="ct">' + c.t + ' · ' + c.v + '</span><span class="cs">' + c.s + '</span></span></label>';
    }).join("");

    var isEn = S.lang === "en";
    return '<div class="card pad-lg">' +
        '<div class="row-between"><h2 style="margin:0">Évaluation adaptative</h2>' +
        '<span class="pill">' + (isEn ? "≈ 8 min · 3 à 30 questions" : "≈ 6 min · 9 à 18 questions en général") + '</span></div>' +
        '<p class="lead" style="margin-top:10px">Répondez sans dictionnaire. ' +
        (isEn
          ? "Le test ajuste la difficulté au fil des réponses : 5 bonnes réponses au même niveau font monter d’un cran, 3 erreurs font descendre. Le corrigé complet s’affiche à la fin."
          : "Le test ajuste la difficulté après trois questions : deux bonnes réponses ou plus et il monte d’un niveau, sinon il descend. Le corrigé complet s’affiche à la fin.") +
        '</p>' +
        '<fieldset style="margin-top:18px"><legend>Où en êtes-vous aujourd\'hui ?</legend>' +
        '<div class="choices">' + choices + '</div></fieldset>' +
        '<div class="btn-row" style="margin-top:20px">' +
          '<button class="btn primary" data-act="startTest">Démarrer l\'évaluation</button>' +
          '<span class="tiny muted">Le résultat reste une estimation (± 1 niveau).</span>' +
        '</div>' +
      '</div>' +
      '<div class="card soft" style="margin-top:16px">' +
        '<h3>Un test qui s\'adapte, pas un questionnaire figé</h3>' +
        '<div class="steps">' +
          '<div class="step"><span class="n">A1</span><div><span class="t">On démarre à votre niveau</span><span class="d">Vous indiquez votre point de départ, le test affine ensuite.</span></div></div>' +
          '<div class="step"><span class="n">' + (isEn ? "5" : "3") + '</span><div><span class="t">' + (isEn ? "Cinq justes pour monter" : "Trois questions par palier") + '</span><span class="d">' + (isEn ? "5 bonnes réponses au même niveau font monter d’un cran ; 3 erreurs font descendre." : "Le score du palier décide de la suite : montée ou descente.") + '</span></div></div>' +
          '<div class="step"><span class="n">✓</span><div><span class="t">Vous voyez vos erreurs</span><span class="d">Chaque question est corrigée et expliquée à la fin du test.</span></div></div>' +
          '<div class="step"><span class="n">↻</span><div><span class="t">Des questions renouvelées</span><span class="d">Elles sont tirées au hasard dans une réserve : d\'un test à l\'autre, vous ne revoyez pas les mêmes tant qu\'il en reste.</span></div></div>' +
        '</div>' +
      '</div>';
  }

  function viewProgresser() {
    var c = courseOf(S.lang);
    var a = st().assessment;
    var rec = a ? a.level : "A1";

    if (!c || !c.levels) {
      return '<div class="card pad-lg"><h2>Parcours en préparation</h2>' +
        '<p class="lead">Les leçons de cette langue ne sont pas encore disponibles dans cette version de démonstration.</p>' +
        '<p class="muted">Le moteur, la progression et les corrections fonctionnent : il ne manque que le contenu.</p></div>';
    }

    var openLevel = S.openLevel || rec;
    var totalDone = 0, totalLessons = 0;
    Object.keys(c.levels).forEach(function (lv) {
      var ls = (c.levels[lv] && c.levels[lv].lessons) || [];
      totalLessons += ls.length;
      totalDone += ls.filter(function (l) { return st().lessons[l.id] && st().lessons[l.id].done; }).length;
    });
    var pct = totalLessons ? Math.round((totalDone / totalLessons) * 100) : 0;
    var rev = st().review || [];

    var blocks = LEVELS.map(function (lv) {
      var box = c.levels[lv];
      var lessons = (box && box.lessons) || [];
      var done = lessons.filter(function (l) { return st().lessons[l.id] && st().lessons[l.id].done; }).length;
      var lm = levelMeta(lv);
      return '<details class="level-block" ' + (lv === openLevel ? "open" : "") + '>' +
        '<summary>' +
          '<span class="lv lv-' + lv + '">' + lv + '</span>' +
          '<span><span class="lvl-title">' + lm.label + '</span><br><span class="tiny muted">' + lm.desc + '</span></span>' +
          (lv === rec ? '<span class="pill">conseillé</span>' : '') +
          '<span class="lvl-meta">' + done + '/' + lessons.length + '</span>' +
          '<span class="chev" aria-hidden="true">›</span>' +
        '</summary>' +
        '<div class="level-body">' +
          (lessons.length
            ? lessons.map(function (les) { return lessonRow(les, lv); }).join("")
            : '<p class="muted tiny" style="padding:10px 0">Leçons en préparation pour ce niveau.</p>') +
        '</div>' +
      '</details>';
    }).join("");

    return '<div class="card" style="margin-bottom:16px">' +
        '<div class="row-between" style="margin-bottom:8px">' +
          '<div><span class="eyebrow" style="margin:0">Parcours ' + S.lang.toUpperCase() + '</span>' +
          '<strong>' + totalDone + ' / ' + totalLessons + ' leçons terminées</strong></div>' +
          '<span class="pill">' + (a ? "Niveau " + a.level : "Niveau à évaluer") + '</span>' +
        '</div>' +
        '<div class="pbar"><i style="width:' + pct + '%"></i></div>' +
        '<p class="tiny muted" style="margin-top:8px">Les niveaux ne sont pas verrouillés : vous pouvez choisir librement, le parcours conseillé suit votre évaluation.</p>' +
      '</div>' +
      (rev.length ? '<div class="card" style="margin-bottom:16px;border-left:4px solid var(--warn)">' +
        '<div class="row-between"><div><strong>' + rev.length + ' point' + (rev.length > 1 ? "s" : "") + ' à revoir</strong>' +
        '<p class="tiny muted" style="margin:2px 0 0">Les exercices manqués reviennent ici pour être retravaillés.</p></div>' +
        '<button class="btn primary" data-act="review">Réviser</button></div></div>' : '') +
      '<div class="levels">' + blocks + '</div>';
  }

  function lessonRow(lesson, lv) {
    var pr = st().lessons[lesson.id];
    var state = pr
      ? (pr.done ? '<span class="lr-state done">✓ ' + Math.round((pr.score / pr.total) * 100) + '%</span>'
                 : '<span class="lr-state">à consolider</span>')
      : '<span class="lr-state">Commencer ›</span>';
    return '<button class="lesson-row" data-act="lesson" data-level="' + lv + '" data-id="' + esc(lesson.id) + '">' +
      '<span class="lr-ico" aria-hidden="true">' + (pr && pr.done ? "✓" : "▸") + '</span>' +
      '<span class="grow"><span class="lr-t">' + esc(lesson.title) + '</span>' +
      '<span class="lr-s">' + esc(lesson.goal || "") + ' · ' + lesson.exercises.length + ' exercices</span></span>' +
      state + '</button>';
  }

  /* ================= évaluation ================= */
  function startTest(level) {
    if (!readiness(S.lang).ok) { toast("Contenu en préparation pour cette langue."); return; }
    S.test = E.newTest(S.lang, level || S.start || "A2", Store.getRecent(S.lang));
    S.testUI = { choice: null, checked: false };
    S.result = null;
    go("#/test");
  }

  function viewTest() {
    if (!S.test) {
      return '<div class="card empty"><div class="em-ico" aria-hidden="true">⏸</div>' +
        '<h2>Test interrompu</h2>' +
        '<p class="muted">La page a été rechargée : le test en cours n\'a pas été conservé. ' +
        'Les réponses déjà données ne sont pas enregistrées.</p>' +
        '<a class="btn primary" href="#/evaluer">Recommencer l\'évaluation</a></div>';
    }
    var t = S.test;
    var ui = S.testUI || { choice: null, checked: false };
    // Après validation, on garde la question répondue à l'écran : le moteur, lui,
    // est déjà passé à la suivante.
    var item = (ui.checked && ui.item) ? ui.item : E.currentItem(t);
    if (!item) {
      if (t.finished) {
        return '<div class="test-body"><div class="card pad-lg center">' +
          '<div class="em-ico" aria-hidden="true">🏁</div>' +
          '<h2>Évaluation terminée</h2>' +
          '<p class="lead">Vos ' + t.asked.length + ' réponses sont enregistrées. Le niveau est calculé sur l\'ensemble du parcours.</p>' +
          '<div class="btn-row" style="justify-content:center;margin-top:18px">' +
            '<button class="btn primary" data-act="tnext">Voir mon résultat</button></div>' +
          '</div></div>';
      }
      return '<div class="card"><p>Chargement…</p></div>';
    }
    var answered = t.asked.length;
    var questionNo = ui.checked ? answered : answered + 1;
    var total = S.lang === "en" ? 25 : 15;
    var pct = Math.min(96, Math.round((answered / total) * 100));

    var opts = item.options.map(function (o, i) {
      var state = "";
      if (ui.checked) {
        if (i === item.a) state = "ok";
        else if (i === ui.choice) state = "ko";
      } else if (ui.choice === i) state = "sel";
      return '<button class="opt" data-act="topt" data-i="' + i + '" data-state="' + state + '"' +
        (ui.checked ? " disabled" : "") + ' aria-pressed="' + (ui.choice === i) + '">' +
        '<span class="key" aria-hidden="true">' + String.fromCharCode(65 + i) + '</span>' +
        '<span>' + esc(o) + '</span></button>';
    }).join("");

    var feedback = "";
    if (ui.checked) {
      feedback = '<div class="feedback ' + (ui.correct ? "ok" : "ko") + '" aria-live="polite">' +
        '<div class="fb-t">' + (ui.correct ? "✓ Correct" : "✗ Réponse incorrecte") + '</div>' +
        '<div class="fb-b">' + (ui.correct ? "" : "Bonne réponse : <b>" + esc(item.options[item.a]) + "</b>. ") +
        esc(item.why || "") + '</div></div>';
    }

    return '<div class="test-body">' +
      '<div class="test-head">' +
        '<a class="btn sm ghost" href="#/evaluer">✕ Quitter</a>' +
        '<span class="tiny muted">Question ' + questionNo + ' · test adaptatif</span>' +
      '</div>' +
      '<div class="pbar thin" style="margin-bottom:22px"><i style="width:' + pct + '%"></i></div>' +
      '<div class="card pad-lg">' +
        '<p class="q-hint">' + (item.skill === "vocab" ? "Vocabulaire" : item.skill === "reading" ? "Compréhension écrite" : "Grammaire") +
        ' · choisissez une réponse</p>' +
        (item.passage ? '<blockquote class="passage">' + esc(item.passage) + '</blockquote>' : '') +
        '<div class="q-text">' + esc(item.q) + '</div>' +
        '<div class="opts">' + opts + '</div>' +
        feedback +
        '<div class="btn-row" style="margin-top:20px">' +
          (ui.checked
            ? '<button class="btn primary" data-act="tnext">' + (t.finished ? "Voir mon résultat" : "Question suivante") + '</button>'
            : '<button class="btn primary" data-act="tcheck">Valider</button>') +
        '</div>' +
      '</div>' +
      '<p class="tiny muted center" style="margin-top:14px">Le niveau n\'est pas affiché pendant le test : il est calculé à la fin, sur l\'ensemble des réponses.</p>' +
    '</div>';
  }

  function tCheck() {
    var t = S.test, ui = S.testUI;
    if (!t || !ui) return;
    if (ui.choice == null) { toast("Choisissez une réponse."); return; }
    var r = E.submit(t, ui.choice);
    if (!r) return;
    // Mémoire de renouvellement : la question ne reviendra pas au prochain test
    // tant que la réserve de questions neuves du niveau n'est pas épuisée.
    Store.addRecent(S.lang, [r.item.id]);
    S.testUI = { choice: ui.choice, checked: true, correct: r.correct, item: r.item };
    S.focus = '[data-act="tnext"]';
    render();
  }

  function tNext() {
    if (!S.test) return;
    if (S.test.finished) { finishTest(); return; }
    S.testUI = { choice: null, checked: false };
    render();
  }

  function finishTest() {
    var res = E.testResult(S.test);
    Store.setAssessment(S.lang, res);
    Store.addXp(S.lang, 20 + res.correct * 5);
    Store.touchStreak(S.lang);
    S.result = res;
    S.test = null;
    S.testUI = null;
    S.openLevel = res.level;
    go("#/resultats");
  }

  function viewResults() {
    var res = S.result || st().assessment;
    if (!res) {
      return '<div class="card empty"><div class="em-ico" aria-hidden="true">🎯</div><h2>Aucun résultat pour le moment</h2>' +
        '<p class="muted">Commencez par l\'évaluation adaptative pour situer votre niveau.</p>' +
        '<a class="btn primary" href="#/evaluer">Faire l\'évaluation</a></div>';
    }
    var lm = levelMeta(res.level);
    var weak = E.weakestSkill(res.skills);
    var next = E.nextLevel(res.level);

    var corrige = (res.asked || []).map(function (a, i) {
      return '<div class="correct-item">' +
        '<div class="qq">' + (i + 1) + '. ' + esc(a.prompt) + '</div>' +
        (a.passage ? '<div class="tiny muted" style="font-style:italic">« ' + esc(a.passage) + ' »</div>' : '') +
        '<div class="tiny">Votre réponse : <span class="' + (a.correct ? "aa" : "bb") + '">' + esc(a.choice || "—") + '</span>' +
        (a.correct ? "" : ' · Bonne réponse : <span class="aa">' + esc(a.answer) + '</span>') + '</div>' +
        (a.why ? '<div class="tiny muted" style="margin-top:2px">' + esc(a.why) + '</div>' : '') +
      '</div>';
    }).join("");

    return '<div class="card pad-lg">' +
      '<div class="result-hero">' +
        '<div class="level-big" aria-hidden="true">' + res.level + '</div>' +
        '<div>' +
          '<p class="eyebrow" style="margin-bottom:6px">Résultat de l\'évaluation</p>' +
          '<h1 style="margin-bottom:4px">' + lm.label + ' — ' + lm.short + '</h1>' +
          '<p class="lead">' + lm.desc + ' ' + res.correct + (res.correct > 1 ? ' réponses justes' : ' réponse juste') + ' sur ' + res.total + '.</p>' +
          '<p class="tiny muted">' + res.reliability + '. Test non certifiant.</p>' +
        '</div>' +
      '</div>' +
      '<hr class="divider">' +
      '<div class="row" style="align-items:flex-start;gap:30px">' +
        '<div class="grow" style="min-width:260px"><h2>Par compétence</h2>' + barsHTML(res.skills) + '</div>' +
        '<div class="grow" style="min-width:260px"><h2>À travailler en priorité</h2>' +
          '<p>' + (weak
            ? (weak.value >= 90
              ? (next
                ? 'Aucun point faible marqué : toutes vos compétences mesurées dépassent 90 %. Le niveau supérieur vous mettra davantage en difficulté.'
                : 'Aucun point faible marqué : toutes vos compétences mesurées dépassent 90 %. Le test s\'arrête à C2, faute de palier supérieur.')
              : 'Votre point le plus fragile est ' + (weak.label === "Vocabulaire" ? "le " : "la ") +
                '<strong>' + weak.label.toLowerCase() + '</strong> (' + weak.value + ' %). ' +
                'Le parcours commence par des rappels ciblés sur ce point.')
            : 'Continuez avec des leçons variées pour affiner le profil.') + '</p>' +
          '<p class="tiny muted">' + (next ? 'Niveau suivant : <strong>' + next + '</strong>' : '<strong>Dernier palier atteint (C2).</strong>') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="btn-row" style="margin-top:22px">' +
        '<button class="btn primary" data-act="toParcours">Commencer le parcours ' + res.level + '</button>' +
        '<button class="btn" data-act="retest">Refaire le test</button>' +
        '<button class="btn ghost" data-act="nav" data-to="evaluer">Retour</button>' +
      '</div>' +
    '</div>' +
    (corrige ? '<details class="disclosure" style="margin-top:16px"><summary>Voir le corrigé détaillé (' + res.total + ' questions)</summary>' +
      '<div class="disc-body"><div class="correct-list">' + corrige + '</div></div></details>' : '');
  }

  /* ================= formation ================= */
  function makeRun(mode, key, course, lesson, items) {
    var run = {
      mode: mode, key: key, code: S.lang,
      level: course.level, lessonId: course.id, title: course.title,
      items: items, i: 0, score: 0, xp: 0, saved: false, ui: null
    };
    S.run = run;
    initUI(run);
    return run;
  }

  function initUI(run) {
    run.ui = { checked: false, choice: null, text: "", correct: null, expected: "", order: null };
    var it = run.items[run.i];
    if (it && it.ex.type === "order") {
      var idxs = it.ex.tokens.map(function (_, i) { return i; });
      run.ui.order = { pool: E.shuffle(idxs), picked: [] };
    }
  }

  function viewLesson(code, level, id) {
    if (!code || !level || !id) return '<div class="card"><h1>Leçon introuvable</h1><a href="#/progresser">Retour au parcours</a></div>';
    if (code !== S.lang) { S.lang = code; db().profile.lang = code; Store.write(); }

    var c = courseOf(code);
    var lv = c && c.levels && c.levels[level];
    var lesson = lv && lv.lessons.filter(function (l) { return l.id === id; })[0];
    if (!lesson) {
      return '<div class="card"><h1>Leçon introuvable</h1><p class="muted">Ce contenu n\'existe pas ou plus.</p>' +
        '<a class="btn" href="#/progresser">Retour au parcours</a></div>';
    }

    var key = code + "|" + level + "|" + id;
    if (!S.run || S.run.key !== key || S.run.mode !== "lesson") {
      var items = lesson.exercises.map(function (ex, idx) {
        return { ex: ex, idx: idx, lessonTitle: lesson.title, result: null };
      });
      makeRun("lesson", key, { level: level, id: id, title: lesson.title }, lesson, items);
    }

    var run = S.run;
    if (run.i >= run.items.length) return runSummary(run, lesson, level);
    return runBody(run, lesson, level, false);
  }

  function runBody(run, lesson, level, isReview) {
    var it = run.items[run.i];
    var ex = it.ex;
    var ui = run.ui;
    var n = run.items.length;
    var pct = Math.round((run.i / n) * 100);

    var answer = "";
    if (ex.type === "qcm") {
      answer = '<div class="opts">' + ex.options.map(function (o, i) {
        var state = "";
        if (ui.checked) {
          if (i === ex.a) state = "ok";
          else if (i === ui.choice) state = "ko";
        } else if (ui.choice === i) state = "sel";
        return '<button class="opt" data-act="ropt" data-i="' + i + '" data-state="' + state + '"' +
          (ui.checked ? " disabled" : "") + ' aria-pressed="' + (ui.choice === i) + '">' +
          '<span class="key" aria-hidden="true">' + String.fromCharCode(65 + i) + '</span>' +
          '<span>' + esc(o) + '</span></button>';
      }).join("") + '</div>';
    } else if (ex.type === "fill") {
      answer = '<div class="answer-line">' +
        '<input class="input" id="fillInput" data-role="fill" autocomplete="off" autocapitalize="off" spellcheck="false"' +
        ' value="' + esc(ui.text) + '" placeholder="Votre réponse…"' + (ui.checked ? " disabled" : "") +
        ' aria-label="Votre réponse"></div>' +
        '<p class="tiny muted" style="margin-top:6px">Un seul mot ou un groupe de mots. L\'orthographe compte, la casse non.</p>';
    } else if (ex.type === "order") {
      var pool = ui.order.pool.filter(function (i) { return ui.order.picked.indexOf(i) === -1; });
      var picked = ui.order.picked;
      answer = '<div class="slot" aria-label="Phrase en construction">' +
        (picked.length
          ? picked.map(function (i) {
              return '<button class="token" data-act="untok" data-i="' + i + '"' + (ui.checked ? " disabled" : "") + '>' +
                esc(ex.tokens[i]) + '</button>';
            }).join("")
          : '<span class="ph">Cliquez sur les mots dans l\'ordre…</span>') +
        '</div>' +
        '<div class="tokens" style="margin-top:12px">' +
        (pool.length
          ? pool.map(function (i) {
              return '<button class="token" data-act="tok" data-i="' + i + '"' + (ui.checked ? " disabled" : "") + '>' +
                esc(ex.tokens[i]) + '</button>';
            }).join("")
          : '<span class="tiny muted">Tous les mots sont placés.</span>') +
        '</div>';
    }

    var feedback = "";
    if (ui.checked) {
      feedback = '<div class="feedback ' + (ui.correct ? "ok" : "ko") + '" aria-live="polite">' +
        '<div class="fb-t">' + (ui.correct ? "✓ Correct" : "✗ Pas tout à fait") + '</div>' +
        '<div class="fb-b">' +
          (ui.correct ? "" : "Réponse attendue : <b>" + esc(ui.expected) + "</b>. ") +
          esc(ex.why || "") +
        '</div></div>';
    }

    var ruleBox = '<details class="disclosure"' + (run.i === 0 ? " open" : "") + '>' +
      '<summary>Rappel de la règle</summary><div class="disc-body">' +
        '<div class="rule-box"><div class="rt">Règle</div><div>' + (lesson.rule || "") + '</div></div>' +
        '<ul class="ex">' + (lesson.examples || []).map(function (e) {
          return '<li><span class="en">' + esc(e.t) + '</span><span class="fr">' + esc(e.fr || "") + '</span></li>';
        }).join("") + '</ul>' +
      '</div></details>';

    return '<a class="tiny" href="' + (isReview ? "#/revision" : "#/progresser") + '">← ' + (isReview ? "Révisions" : "Parcours") + '</a>' +
      '<div class="row-between" style="margin:10px 0 6px">' +
        '<span class="lv lv-' + level + '">' + level + '</span>' +
        '<span class="tiny muted">' + (isReview ? "Révision" : "Leçon") + ' · exercice ' + (run.i + 1) + ' / ' + n + '</span>' +
      '</div>' +
      '<h1 style="margin-bottom:4px">' + esc(lesson.title) + '</h1>' +
      '<p class="lead" style="margin-bottom:12px">' + esc(lesson.goal || "") + '</p>' +
      '<div class="pbar thin" style="margin-bottom:18px"><i style="width:' + pct + '%"></i></div>' +
      ruleBox +
      '<div class="card" style="margin-top:16px">' +
        '<p class="q-hint">' + (ex.type === "qcm" ? "Choix unique" : ex.type === "fill" ? "Complétez la phrase" : "Remettez les mots dans l\'ordre") + '</p>' +
        '<div class="q-text">' + esc(ex.q) + '</div>' +
        answer +
        feedback +
        '<div class="btn-row" style="margin-top:18px">' +
          (ui.checked
            ? '<button class="btn primary" data-act="rnext">' + (run.i + 1 >= n ? "Terminer" : "Continuer") + '</button>'
            : '<button class="btn primary" data-act="rcheck">Valider</button>') +
        '</div>' +
      '</div>';
  }

  function rCheck() {
    var run = S.run;
    if (!run || run.ui.checked) return;
    var it = run.items[run.i];
    var ex = it.ex;
    var ui = run.ui;
    var resp;

    if (ex.type === "qcm") {
      resp = ui.choice;
      if (resp == null) { toast("Choisissez une réponse."); return; }
    } else if (ex.type === "fill") {
      resp = ui.text;
      if (!String(resp).trim()) { toast("Saisissez votre réponse."); return; }
    } else {
      resp = ui.order.picked.map(function (i) { return ex.tokens[i]; });
      if (!resp.length) { toast("Placez au moins un mot."); return; }
    }

    var r = E.checkExercise(ex, resp);
    ui.checked = true;
    ui.correct = r.correct;
    ui.expected = r.expected;
    it.result = r;
    if (r.correct) { run.score++; run.xp += 10; }
    S.focus = '[data-act="rnext"]';
    render();
  }

  function rNext() {
    var run = S.run;
    if (!run) return;
    if (!run.ui.checked) return;
    run.i++;
    if (run.i >= run.items.length) {
      finishRun(run);
    } else {
      initUI(run);
    }
    render();
  }

  function finishRun(run) {
    if (run.saved) return;
    run.saved = true;
    var total = run.items.length;
    var score = run.score;

    if (run.mode === "lesson") {
      Store.saveLesson(S.lang, run.lessonId, score, total);
      Store.addXp(S.lang, run.xp + (score === total ? 15 : 0));
      run.items.forEach(function (it) {
        if (it.result && it.result.correct) {
          Store.removeReview(S.lang, run.lessonId, it.idx);
        } else {
          Store.addReview(S.lang, { code: S.lang, level: run.level, lessonId: run.lessonId, idx: it.idx });
        }
      });
    } else {
      Store.addXp(S.lang, run.xp);
      run.items.forEach(function (it) {
        if (it.result && it.result.correct && it.ref) {
          Store.removeReview(S.lang, it.ref.lessonId, it.ref.idx);
        }
      });
    }
    Store.touchStreak(S.lang);
  }

  function runSummary(run, lesson, level) {
    var total = run.items.length;
    var score = run.score;
    var pct = total ? Math.round((score / total) * 100) : 0;
    var isReview = run.mode === "review";
    var msg = pct === 100 ? "Sans faute. Le point est acquis."
      : pct >= 60 ? "C'est en bonne voie. Les erreurs sont dans votre file de révision."
      : "À retravailler : relisez la règle, puis refaites la leçon.";

    var nextRef = isReview ? null : findNextLesson(S.lang, level, lesson.id);
    var remaining = isReview ? (st().review || []).length : 0;

    return '<div class="card pad-lg center">' +
      '<div class="level-big" style="margin:0 auto 14px;width:96px;height:96px;font-size:1.9rem">' + pct + '%</div>' +
      '<h1>' + (isReview ? "Révisions terminées" : "Leçon terminée") + '</h1>' +
      '<p class="lead" style="margin:0 auto 6px">' + score + ' / ' + total + ' exercices justes. ' + msg + '</p>' +
      '<p class="tiny muted">+' + run.xp + ' XP' + (isReview ? '' : ' · progression enregistrée') + '</p>' +
      (isReview && remaining ? '<p class="tiny" style="color:var(--warn);margin-top:8px">' + remaining + ' point(s) restent à revoir.</p>' : '') +
      '<div class="btn-row" style="justify-content:center;margin-top:22px">' +
        (isReview
          ? '<button class="btn primary" data-act="clearReview">Retour aux révisions</button>'
          : '<button class="btn primary" data-act="restart">Refaire cette leçon</button>' +
            (nextRef ? '<button class="btn" data-act="nextLesson" data-level="' + nextRef.level + '" data-id="' + esc(nextRef.id) + '">Leçon suivante →</button>' : '')) +
        '<a class="btn ghost" href="#/progresser">Retour au parcours</a>' +
      '</div>' +
      (isReview ? '' :
        '<div class="divider"></div><div class="row" style="justify-content:center">' +
        '<a class="tiny" href="#/revision">Voir mes points à revoir (' + (st().review || []).length + ')</a>' +
        '</div>') +
    '</div>';
  }

  function findNextLesson(code, level, lessonId) {
    var c = courseOf(code);
    if (!c || !c.levels) return null;
    var li = LEVELS.indexOf(level);
    var lessons = (c.levels[level] && c.levels[level].lessons) || [];
    var idx = -1;
    lessons.forEach(function (l, i) { if (l.id === lessonId) idx = i; });
    if (idx >= 0 && idx < lessons.length - 1) return { level: level, id: lessons[idx + 1].id };
    for (var i = li + 1; i < LEVELS.length; i++) {
      var ls = (c.levels[LEVELS[i]] && c.levels[LEVELS[i]].lessons) || [];
      if (ls.length) return { level: LEVELS[i], id: ls[0].id };
    }
    return null;
  }

  /* ================= révisions ================= */
  function resolveReview(ref) {
    var c = courseOf(ref.code || S.lang);
    var lv = c && c.levels && c.levels[ref.level];
    var lesson = lv && lv.lessons.filter(function (l) { return l.id === ref.lessonId; })[0];
    if (!lesson || !lesson.exercises[ref.idx]) return null;
    return { ex: lesson.exercises[ref.idx], idx: ref.idx, lessonTitle: lesson.title, result: null, ref: ref };
  }

  function viewReview() {
    if (S.run && S.run.mode === "review") {
      if (S.run.i >= S.run.items.length) {
        return runSummary(S.run, { title: "Révisions" }, S.run.level);
      }
      return runBody(S.run, { title: "Révisions ciblées", goal: "Les exercices que vous avez manqués.", rule: "Reprenez calmement : la correction s'affiche après validation.", examples: [] }, S.run.level, true);
    }

    var rev = st().review || [];
    if (!rev.length) {
      return '<div class="card empty"><div class="em-ico" aria-hidden="true">✨</div><h2>Rien à réviser</h2>' +
        '<p class="muted">Les exercices manqués apparaîtront ici automatiquement. Continuez votre parcours.</p>' +
        '<a class="btn primary" href="#/progresser">Aller au parcours</a></div>';
    }

    var items = rev.map(resolveReview).filter(Boolean);
    if (!items.length) {
      return '<div class="card"><h2>Révisions indisponibles</h2><p class="muted">Le contenu associé a changé.</p><a class="btn" href="#/progresser">Retour</a></div>';
    }

    var rows = items.map(function (it) {
      return '<div class="lesson-row" style="cursor:default">' +
        '<span class="lr-ico" aria-hidden="true">↻</span>' +
        '<span class="grow"><span class="lr-t">' + esc(it.lessonTitle) + '</span>' +
        '<span class="lr-s">' + esc(String(it.ex.q).slice(0, 90)) + (String(it.ex.q).length > 90 ? "…" : "") + '</span></span>' +
        '<span class="lr-state">' + (it.ref.level || "") + '</span></div>';
    }).join("");

    return '<div class="card pad-lg">' +
      '<p class="eyebrow">Révision espacée</p>' +
      '<h1>Vos points à revoir</h1>' +
      '<p class="lead">' + items.length + (items.length > 1 ? ' exercices manqués. ' : ' exercice manqué. ') + 'Une bonne réponse ' + (items.length > 1 ? 'les retire' : 'le retire') + ' de la liste ; une erreur ' + (items.length > 1 ? 'les y laisse' : 'le laisse') + '.</p>' +
      '<div class="btn-row" style="margin:16px 0 20px"><button class="btn primary" data-act="startReview">Commencer la révision</button>' +
      '<a class="btn ghost" href="#/progresser">Retour au parcours</a></div>' +
      '<div style="border-top:1px solid var(--line)">' + rows + '</div>' +
    '</div>';
  }

  function startReview() {
    var rev = st().review || [];
    var items = rev.map(resolveReview).filter(Boolean);
    if (!items.length) { toast("Rien à réviser."); return; }
    var run = {
      mode: "review", key: "review", code: S.lang, level: items[0].ref.level || "A2",
      lessonId: null, title: "Révisions", items: items, i: 0, score: 0, xp: 0, saved: false, ui: null
    };
    S.run = run;
    initUI(run);
    render();
  }

  /* ================= réglages ================= */
  function viewReglages() {
    var s = Store.read();
    var totalXp = 0, lessonsDone = 0;
    Object.keys(s.langs).forEach(function (code) {
      totalXp += s.langs[code].xp || 0;
      Object.keys(s.langs[code].lessons || {}).forEach(function (id) {
        if (s.langs[code].lessons[id].done) lessonsDone++;
      });
    });

    function themeChoice(v, label) {
      return '<label class="choice"><input type="radio" name="theme" value="' + v + '"' +
        (s.settings.theme === v ? " checked" : "") + '><span class="choice-body"><span class="ct">' + label + '</span></span></label>';
    }
    function scaleChoice(v, label) {
      return '<label class="choice"><input type="radio" name="scale" value="' + v + '"' +
        (Number(s.settings.scale) === v ? " checked" : "") + '><span class="choice-body"><span class="ct">' + label + '</span></span></label>';
    }

    return '<h1>Réglages</h1>' +
      '<div class="card" style="margin-bottom:16px"><h2>Profil</h2>' +
        '<label class="fld" for="nameInput">Prénom ou pseudo (facultatif)</label>' +
        '<div class="answer-line"><input class="input" id="nameInput" value="' + esc(s.profile.name) + '" placeholder="Ex. Camille" autocomplete="given-name">' +
        '<button class="btn" data-act="saveName">Enregistrer</button></div>' +
        '<p class="tiny muted" style="margin-top:8px">Utilisé uniquement pour personnaliser l\'affichage. Aucun compte, aucun serveur.</p>' +
      '</div>' +
      '<div class="card" style="margin-bottom:16px"><h2>Affichage</h2>' +
        '<fieldset><legend>Thème</legend><div class="choices">' + themeChoice("auto", "Automatique") + themeChoice("light", "Clair") + themeChoice("dark", "Sombre") + '</div></fieldset>' +
        '<fieldset style="margin-top:16px"><legend>Taille du texte</legend><div class="choices">' + scaleChoice(1, "Normale") + scaleChoice(1.1, "Grande") + scaleChoice(1.2, "Très grande") + '</div></fieldset>' +
      '</div>' +
      '<div class="card" style="margin-bottom:16px"><h2>Ma progression</h2>' +
        '<div class="kpi">' +
          '<div class="k"><b>' + totalXp + '</b><span>XP cumulés</span></div>' +
          '<div class="k"><b>' + lessonsDone + '</b><span>leçons validées</span></div>' +
          '<div class="k"><b>' + (st().review || []).length + '</b><span>points à revoir</span></div>' +
        '</div>' +
        '<div class="divider"></div>' +
        '<h3>Données</h3>' +
        '<p class="tiny muted">Votre progression est stockée dans ce navigateur. Exportez-la pour la conserver ou la transférer.</p>' +
        '<div class="btn-row"><button class="btn" data-act="export">Exporter (JSON)</button>' +
        '<button class="btn" data-act="importBtn">Importer</button>' +
        '<button class="btn danger" data-act="reset">Tout effacer</button></div>' +
        '<input type="file" id="importFile" accept="application/json,.json" hidden>' +
        (Store.canPersist() ? '' : '<p class="tiny" style="color:var(--warn);margin-top:10px">Le stockage local est bloqué par le navigateur : la progression sera perdue à la fermeture.</p>') +
      '</div>' +
      '<div class="card"><h2>À propos</h2>' +
        '<p>LinguaStep — prototype pédagogique (version 1.0). Test adaptatif et parcours de formation en six langues, du A1 au C2.</p>' +
        '<p class="tiny muted">Les résultats sont indicatifs et ne constituent pas une certification. Les contenus sont des exemples à faire relire par des locuteurs natifs avant diffusion. ' +
        'Aucune donnée personnelle n\'est transmise : tout fonctionne hors-ligne.</p>' +
      '</div>';
  }

  /* ================= sélecteur de langue (feuille) ================= */
  function renderSheet() {
    var root = document.getElementById("sheet");
    if (!S.sheet) { root.hidden = true; root.innerHTML = ""; return; }
    root.hidden = false;
    var cards = (window.LANGUAGES || []).map(function (l) {
      var ready = readiness(l.code).ok;
      var a = db().langs[l.code] && db().langs[l.code].assessment;
      var active = l.code === S.lang;
      return '<button class="lang-card" data-act="pickLang" data-code="' + l.code + '" aria-pressed="' + active + '"' +
        ' style="' + (active ? "border-color:var(--brand);background:var(--brand-soft)" : "") + '">' +
        '<span class="flag" aria-hidden="true">' + l.flag + '</span>' +
        '<span class="nm">' + esc(l.name) + (active ? " ✓" : "") + '</span>' +
        '<span class="nat">' + esc(l.native) + '</span>' +
        (a ? '<span class="done">Niveau ' + a.level + '</span>' : (ready ? "" : '<span class="badge-soon">Bientôt</span>')) +
        '</button>';
    }).join("");
    root.innerHTML = '<div class="sheet" role="dialog" aria-modal="true" aria-label="Choisir la langue">' +
      '<div class="sheet-head"><h2 style="margin:0">Choisir la langue</h2>' +
      '<button class="icon-btn" data-act="closeSheet" aria-label="Fermer">✕</button></div>' +
      '<div class="lang-grid">' + cards + '</div>' +
      '<p class="tiny muted" style="margin-top:14px">La progression est enregistrée séparément pour chaque langue.</p>' +
      '</div>';
    root.onclick = function (e) { if (e.target === root) closeSheet(); };
  }

  function closeSheet() {
    S.sheet = null;
    renderSheet();
    var btn = document.querySelector('[data-act="sheet"]');
    if (btn) btn.focus();
  }

  /* ================= événements ================= */
  function onClick(e) {
    var el = e.target.closest ? e.target.closest("[data-act]") : null;
    if (!el) return;
    var act = el.getAttribute("data-act");

    if (el.tagName === "A") e.preventDefault();

    switch (act) {
      case "nav":
        S.sheet = null;
        go("#/" + el.getAttribute("data-to"));
        break;
      case "tab":
        S.tab = el.getAttribute("data-tab");
        go("#/" + S.tab);
        break;
      case "sheet":
        S.sheet = el.getAttribute("data-sheet");
        renderSheet();
        var first = document.querySelector("#sheet .lang-card");
        if (first) first.focus();
        break;
      case "closeSheet":
        closeSheet();
        break;
      case "pickLang": {
        var code = el.getAttribute("data-code");
        S.lang = code;
        S.tab = "evaluer";
        S.run = null;
        S.test = null;
        S.result = null;
        S.openLevel = null;
        S.start = "A2";
        var data = db();
        data.profile.lang = code;
        Store.write();
        Store.langState(code);
        S.sheet = null;
        go("#/evaluer");
        setTimeout(function () { toast(meta(code).name + " sélectionné"); }, 80);
        break;
      }
      case "startTest":
        startTest(S.start);
        break;
      case "retest":
        startTest((st().assessment && st().assessment.level) || "A2");
        break;
      case "toParcours": {
        var a = st().assessment;
        S.openLevel = a ? a.level : "A1";
        S.tab = "progresser";
        go("#/progresser");
        break;
      }
      case "topt":
        if (S.testUI && !S.testUI.checked) {
          S.testUI.choice = Number(el.getAttribute("data-i"));
          render();
        }
        break;
      case "tcheck": tCheck(); break;
      case "tnext": tNext(); break;
      case "lesson": {
        var lv = el.getAttribute("data-level");
        var id = el.getAttribute("data-id");
        S.run = null;
        go("#/lecon/" + S.lang + "/" + lv + "/" + id);
        break;
      }
      case "ropt":
        if (S.run && !S.run.ui.checked) {
          S.run.ui.choice = Number(el.getAttribute("data-i"));
          render();
        }
        break;
      case "tok": {
        if (!S.run || S.run.ui.checked) break;
        var i = Number(el.getAttribute("data-i"));
        if (S.run.ui.order.picked.indexOf(i) === -1) S.run.ui.order.picked.push(i);
        render();
        break;
      }
      case "untok": {
        if (!S.run || S.run.ui.checked) break;
        var j = Number(el.getAttribute("data-i"));
        S.run.ui.order.picked = S.run.ui.order.picked.filter(function (x) { return x !== j; });
        render();
        break;
      }
      case "rcheck": rCheck(); break;
      case "rnext": rNext(); break;
      case "restart": {
        if (!S.run) break;
        S.run = null;
        var parts = location.hash.replace(/^#\//, "").split("/");
        go("#/lecon/" + parts[1] + "/" + parts[2] + "/" + parts[3]);
        break;
      }
      case "nextLesson": {
        var nl = el.getAttribute("data-level");
        var nid = el.getAttribute("data-id");
        S.run = null;
        go("#/lecon/" + S.lang + "/" + nl + "/" + nid);
        break;
      }
      case "review":
        S.run = null;
        go("#/revision");
        break;
      case "startReview":
        startReview();
        break;
      case "clearReview":
        S.run = null;
        render();
        break;
      case "saveName": {
        var input = document.getElementById("nameInput");
        var d = db();
        d.profile.name = (input.value || "").trim();
        Store.write();
        toast("Profil enregistré");
        break;
      }
      case "export": {
        var blob = new Blob([Store.exportJSON()], { type: "application/json" });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = "linguastep-progression.json";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
        toast("Export téléchargé");
        break;
      }
      case "importBtn": {
        var f = document.getElementById("importFile");
        if (f) f.click();
        break;
      }
      case "reset":
        if (window.confirm("Effacer toute la progression et les réglages de cet appareil ?")) {
          Store.reset();
          S.lang = null;
          S.run = null;
          S.test = null;
          S.result = null;
          Store.applySettings();
          go("#/");
          toast("Données effacées");
        }
        break;
    }
  }

  function onInput(e) {
    if (e.target && e.target.id === "fillInput" && S.run) {
      S.run.ui.text = e.target.value;
    }
  }

  function onKey(e) {
    if (e.key === "Escape" && S.sheet) { closeSheet(); return; }
    if (e.key === "Enter") {
      if (S.run && !S.run.ui.checked && e.target && e.target.id === "fillInput") {
        e.preventDefault();
        rCheck();
      }
    }
  }

  function onChange(e) {
    var t = e.target;
    if (!t) return;

    if (t.name === "start") {
      S.start = t.value;
    } else if (t.name === "theme") {
      var d = db();
      d.settings.theme = t.value;
      Store.write();
      Store.applySettings();
      toast("Thème appliqué");
    } else if (t.name === "scale") {
      var d2 = db();
      d2.settings.scale = Number(t.value);
      Store.write();
      Store.applySettings();
    } else if (t.id === "importFile") {
      var file = t.files && t.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          Store.importJSON(String(reader.result));
          S.lang = Store.read().profile.lang || null;
          Store.applySettings();
          toast("Progression importée");
          go("#/evaluer");
          render();
        } catch (err) {
          toast("Fichier invalide");
        }
      };
      reader.readAsText(file);
    }
  }

  /* ================= démarrage ================= */
  function init() {
    Store.applySettings();
    var savedLang = Store.read().profile.lang;
    if (savedLang && LANG_BY[savedLang]) S.lang = savedLang;

    document.addEventListener("click", onClick);
    document.addEventListener("input", onInput);
    document.addEventListener("keydown", onKey);
    document.addEventListener("change", onChange);
    window.addEventListener("hashchange", render);

    if (window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      if (mq.addEventListener) {
        mq.addEventListener("change", function () {
          if (Store.read().settings.theme === "auto") Store.applySettings();
        });
      }
    }

    render();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
