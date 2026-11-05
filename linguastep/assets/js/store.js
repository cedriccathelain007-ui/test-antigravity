/* LinguaStep — stockage local (localStorage) avec repli mémoire.
   Tout reste sur l'appareil de l'utilisateur : aucune donnée envoyée. */
window.Store = (function () {
  var KEY = "linguastep.v1";
  var memory = null;
  var canPersist = true;

  function defaults() {
    return {
      version: 1,
      profile: { name: "", lang: "", createdAt: new Date().toISOString() },
      settings: { theme: "auto", scale: 1 },
      langs: {}
    };
  }

  function safeParse(raw) {
    try { return JSON.parse(raw); } catch (e) { return null; }
  }

  function read() {
    if (memory) return memory;
    var data = null;
    try {
      var raw = window.localStorage.getItem(KEY);
      data = raw ? safeParse(raw) : null;
    } catch (e) {
      canPersist = false;
    }
    memory = merge(defaults(), data || {});
    return memory;
  }

  function merge(base, saved) {
    var out = base;
    if (!saved || typeof saved !== "object") return out;
    if (saved.profile) out.profile = Object.assign(out.profile, saved.profile);
    if (saved.settings) out.settings = Object.assign(out.settings, saved.settings);
    if (saved.langs) out.langs = saved.langs;
    return out;
  }

  function write() {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(memory));
    } catch (e) {
      canPersist = false;
    }
  }

  function langState(code) {
    var db = read();
    if (!db.langs[code]) {
      db.langs[code] = {
        assessment: null,
        xp: 0,
        streak: { count: 0, last: null },
        lessons: {},
        review: [],
        recent: []
      };
    }
    if (!db.langs[code].recent) db.langs[code].recent = [];
    return db.langs[code];
  }

  /* Mémoire des questions déjà vues, par langue : sert au renouvellement
     des tests. On garde les plus récentes. Le plafond dépasse la taille de
     la plus grosse banque (576 questions en anglais) : ainsi une question ne
     revient pas tant qu'il reste des questions neuves dans le niveau. */
  var RECENT_CAP = 700;

  function getRecent(code) {
    return (langState(code).recent || []).slice();
  }

  function addRecent(code, ids) {
    var st = langState(code);
    var list = st.recent || [];
    (ids || []).forEach(function (id) {
      if (id && list.indexOf(id) === -1) list.push(id);
    });
    if (list.length > RECENT_CAP) list = list.slice(list.length - RECENT_CAP);
    st.recent = list;
    write();
    return list.length;
  }

  function touchStreak(code) {
    var st = langState(code);
    var today = new Date().toISOString().slice(0, 10);
    if (st.streak.last === today) return st.streak;
    var y = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    st.streak.count = st.streak.last === y ? st.streak.count + 1 : 1;
    st.streak.last = today;
    write();
    return st.streak;
  }

  function addXp(code, amount) {
    var st = langState(code);
    st.xp = (st.xp || 0) + amount;
    write();
    return st.xp;
  }

  function setAssessment(code, assessment) {
    var st = langState(code);
    st.assessment = assessment;
    write();
  }

  function saveLesson(code, lessonId, score, total) {
    var st = langState(code);
    var prev = st.lessons[lessonId];
    var best = prev ? Math.max(prev.score, score) : score;
    st.lessons[lessonId] = {
      score: best,
      total: total,
      done: score / total >= 0.6,
      attempts: (prev ? prev.attempts : 0) + 1,
      date: new Date().toISOString()
    };
    write();
    return st.lessons[lessonId];
  }

  function addReview(code, item) {
    var st = langState(code);
    var exists = st.review.some(function (r) {
      return r.lessonId === item.lessonId && r.idx === item.idx;
    });
    if (!exists) {
      item.due = new Date(Date.now() + 86400000).toISOString();
      st.review.push(item);
      write();
    }
  }

  function removeReview(code, lessonId, idx) {
    var st = langState(code);
    st.review = st.review.filter(function (r) {
      return !(r.lessonId === lessonId && r.idx === idx);
    });
    write();
  }

  function reset() {
    memory = defaults();
    try { window.localStorage.removeItem(KEY); } catch (e) {}
    write();
  }

  function exportJSON() { return JSON.stringify(read(), null, 2); }

  function importJSON(text) {
    var data = safeParse(text);
    if (!data || typeof data !== "object" || !data.profile) throw new Error("Fichier invalide");
    memory = merge(defaults(), data);
    write();
    return memory;
  }

  function applySettings() {
    var s = read().settings;
    var scale = Number(s.scale) || 1;
    document.documentElement.style.setProperty("--scale", scale);
    var theme = s.theme || "auto";
    var dark = theme === "dark" ||
      (theme === "auto" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }

  return {
    read: read,
    write: write,
    langState: langState,
    getRecent: getRecent,
    addRecent: addRecent,
    touchStreak: touchStreak,
    addXp: addXp,
    setAssessment: setAssessment,
    saveLesson: saveLesson,
    addReview: addReview,
    removeReview: removeReview,
    reset: reset,
    exportJSON: exportJSON,
    importJSON: importJSON,
    applySettings: applySettings,
    canPersist: function () { return canPersist; }
  };
})();
