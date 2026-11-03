/* Contenu — Français langue étrangère (fr). Niveau A1 à C2.
   Interface en français, exercices en français : public non francophone. */
window.COURSES = window.COURSES || {};

window.COURSES.fr = {
  code: "fr",

  test: {
    A1: [
      { id: "fr-t-a1-1", skill: "grammar", q: "Elle ___ au bureau à neuf heures.", options: ["arrive", "arrivent", "arriver", "arrives"], a: 0, why: "3e personne du singulier : arrive." },
      { id: "fr-t-a1-2", skill: "grammar", q: "___ deux salles de réunion au premier étage.", options: ["Il y a", "Il est", "C'est", "Ils ont"], a: 0, why: "Il y a = présence, forme invariable." },
      { id: "fr-t-a1-3", skill: "vocab", q: "Où achète-t-on du pain ?", options: ["À la bibliothèque", "À la boulangerie", "À la pharmacie", "Au garage"], a: 1, why: "La boulangerie vend du pain. La bibliothèque prête des livres." },
      { id: "fr-t-a1-4", skill: "reading", passage: "Bonjour, je m'appelle Léa. Je travaille dans un magasin à Lille. Je commence à 9 h et je finis à 17 h. Le samedi, je travaille jusqu'à 19 h.", q: "À quelle heure finit Léa le samedi ?", options: ["17 h", "19 h", "9 h", "18 h"], a: 1, why: "Le texte dit : « Le samedi, je travaille jusqu'à 19 h »." },
      { id: "fr-t-a1-5", skill: "grammar", q: "Nous ___ deux nouveaux magasins cette année.", options: ["ouvrons", "ouvre", "ouvrez", "ouvrent"], a: 0, why: "1re personne du pluriel : nous ouvrons." },
      { id: "fr-t-a1-6", skill: "vocab", q: "Avant de commander, envoyez-moi un ___ (prix proposé).", options: ["devis", "facture", "reçu", "salaire"], a: 0, why: "Devis = prix proposé avant la commande. Facture = à payer après." }
    ],
    A2: [
      { id: "fr-t-a2-1", skill: "grammar", q: "Hier, j'___ le rapport.", options: ["envoie", "ai envoyé", "envoyais", "enverrai"], a: 1, why: "Hier + action terminée → passé composé." },
      { id: "fr-t-a2-2", skill: "grammar", q: "Je travaille ici ___ trois ans.", options: ["depuis", "il y a", "pendant", "dans"], a: 0, why: "Depuis + durée qui continue (l'action dure encore)." },
      { id: "fr-t-a2-3", skill: "vocab", q: "Pour confirmer la réunion, il faut ___ l'e-mail.", options: ["répondre à", "répondre", "réponse", "réponds"], a: 0, why: "Répondre à + chose. Répondre à un e-mail." },
      { id: "fr-t-a2-4", skill: "reading", passage: "De : Camille. La réunion de mardi est reportée à jeudi, 10 h, même salle. Merci d'apporter les chiffres de ventes.", q: "Qu'est-ce qu'il faut apporter ?", options: ["Le contrat", "Les chiffres de ventes", "L'ordre du jour", "Un ordinateur"], a: 1, why: "« Merci d'apporter les chiffres de ventes »." },
      { id: "fr-t-a2-5", skill: "grammar", q: "Nous ___ le client demain matin.", options: ["rencontrerons", "rencontrons", "avons rencontré", "rencontrerions"], a: 0, why: "Futur simple : action à venir (demain)." },
      { id: "fr-t-a2-6", skill: "vocab", q: "Je travaille au service ___ : je gère les commandes.", options: ["achats", "acheter", "acheté", "achat"], a: 0, why: "Le service achats = service qui gère les commandes fournisseurs." }
    ],
    B1: [
      { id: "fr-t-b1-1", skill: "grammar", q: "Si j'___ plus de temps, je préparerais un meilleur exposé.", options: ["ai", "avais", "aurais", "aie"], a: 1, why: "Hypothèse irréelle : si + imparfait, conditionnel présent." },
      { id: "fr-t-b1-2", skill: "grammar", q: "Le nouveau processus ___ le mois dernier.", options: ["a été mis en place", "a mis en place", "met en place", "est en place"], a: 0, why: "Voix passive au passé composé : a été + participe passé." },
      { id: "fr-t-b1-3", skill: "vocab", q: "Le client était malade : nous avons dû ___ la réunion, elle n'aura pas lieu.", options: ["annuler", "reporter", "confirmer", "convoquer"], a: 0, why: "Annuler = supprimer. Reporter = déplacer à plus tard." },
      { id: "fr-t-b1-4", skill: "reading", passage: "Le nouveau système de stock fonctionne depuis mars. Depuis, les erreurs de commande ont baissé de 30 %. Cependant, l'équipe a encore besoin d'une formation.", q: "Quel problème reste-t-il ?", options: ["Les commandes sont en retard", "Le système coûte trop cher", "L'équipe a besoin de formation", "Les erreurs ont augmenté"], a: 2, why: "« Cependant » introduit le point négatif : la formation." },
      { id: "fr-t-b1-5", skill: "grammar", q: "Les factures ___ hier matin.", options: ["ont été envoyées", "ont envoyé", "a été envoyée", "sont envoyées"], a: 0, why: "Passif au passé composé, sujet féminin pluriel : ont été envoyées." },
      { id: "fr-t-b1-6", skill: "vocab", q: "Il faut ___ les coûts avant de signer le contrat.", options: ["détailler", "détail", "détaillé", "détaillant"], a: 0, why: "Détailler = présenter poste par poste. Après « il faut », infinitif." }
    ],
    B2: [
      { id: "fr-t-b2-1", skill: "grammar", q: "Si nous ___ la date limite, nous aurions perdu le contrat.", options: ["avons raté", "avions raté", "raterions", "ayons raté"], a: 1, why: "Irrée l du passé : si + plus-que-parfait, conditionnel passé." },
      { id: "fr-t-b2-2", skill: "grammar", q: "Le client a dit que la livraison ___ retardée.", options: ["sera", "serait", "est", "a été"], a: 1, why: "Discours indirect au passé : futur → conditionnel." },
      { id: "fr-t-b2-3", skill: "vocab", q: "Après trois heures de discussion, les deux services ont trouvé un ___.", options: ["compromis", "compétition", "compréhension", "complaisance"], a: 0, why: "Trouver un compromis = accord après concessions. Faux ami : « compromission » est péjoratif." },
      { id: "fr-t-b2-4", skill: "reading", passage: "Le magasin pilote a dépassé son objectif de ventes de 12 % au premier trimestre. Néanmoins, le conseil demande un examen complet avant d'étendre le modèle.", q: "Que veut le conseil ?", options: ["Fermer le magasin", "Étendre le modèle tout de suite", "Examiner les résultats avant d'étendre", "Réduire l'objectif"], a: 2, why: "« avant d'étendre le modèle » : l'examen vient d'abord." },
      { id: "fr-t-b2-5", skill: "grammar", q: "Le rapport ___ par le service juridique avant publication.", options: ["aurait dû être vérifié", "aurait dû vérifier", "devrait vérifier", "aurait vérifié"], a: 0, why: "Conditionnel passé au passif : aurait dû être + participe (c'est le rapport qui est vérifié)." },
      { id: "fr-t-b2-6", skill: "vocab", q: "Le fournisseur a accepté de ___ ses prix de 5 %.", options: ["baisser", "monter", "émettre", "élargir"], a: 0, why: "Baisser les prix = les réduire. Monter = augmenter." }
    ],
    C1: [
      { id: "fr-t-c1-1", skill: "grammar", q: "Il est essentiel que le rapport ___ remis vendredi.", options: ["est", "soit", "était", "sera"], a: 1, why: "Il est essentiel que + subjonctif." },
      { id: "fr-t-c1-2", skill: "grammar", q: "Bien qu'il ___ peu de temps, il a livré le projet.", options: ["a", "ait", "avait", "aurait"], a: 1, why: "Bien que + subjonctif." },
      { id: "fr-t-c1-3", skill: "vocab", q: "Son argument était ___ : il a convaincu les sceptiques.", options: ["convaincant", "obligatoire", "complaisant", "compétitif"], a: 0, why: "Convaincant = qui persuade." },
      { id: "fr-t-c1-4", skill: "reading", passage: "Le rapport soutient que le télétravail n'a pas réduit la productivité, mais admet que la collaboration informelle en a souffert. Il recommande donc un modèle hybride plutôt qu'un retour complet au bureau.", q: "Que recommande le rapport ?", options: ["Un retour complet au bureau", "Un modèle hybride", "La fin du télétravail", "Plus de réunions informelles"], a: 1, why: "« Il recommande donc un modèle hybride »." },
      { id: "fr-t-c1-5", skill: "grammar", q: "Rarement ___ un dossier aussi clair.", options: ["ai-je vu", "j'ai vu", "j'avais vu", "je vis"], a: 0, why: "Après « rarement » en tête de phrase, inversion du sujet : ai-je vu." },
      { id: "fr-t-c1-6", skill: "vocab", q: "La performance de l'équipe a été ___ par le manque de consignes claires.", options: ["freinée", "mesurée", "encouragée", "anticipée"], a: 0, why: "Freiner = ralentir, gêner le progrès." }
    ],
    C2: [
      { id: "fr-t-c2-1", skill: "grammar", q: "Non seulement il a dépassé le budget, ___ il a manqué la date limite.", options: ["mais encore", "et", "donc", "car"], a: 0, why: "Non seulement… mais encore : tournure d'insistance formelle." },
      { id: "fr-t-c2-2", skill: "grammar", q: "Quoi qu'il en ___, la décision est prise.", options: ["soit", "est", "sera", "fût"], a: 0, why: "Quoi qu'il en soit : subjonctif figé." },
      { id: "fr-t-c2-3", skill: "vocab", q: "La proposition a été rejetée ___ l'absence d'analyse des coûts.", options: ["faute de", "à force de", "au risque de", "en dépit de"], a: 0, why: "Faute de = par manque de." },
      { id: "fr-t-c2-4", skill: "reading", passage: "Loin d'être une simple réduction de coûts, la restructuration a été présentée comme une condition de l'investissement à long terme. Pourtant, la réticence du conseil à publier les chiffres a nourri les spéculations.", q: "Qu'est-ce qui a nourri les spéculations ?", options: ["La réduction de coûts", "L'investissement à long terme", "La réticence à publier les chiffres", "La restructuration"], a: 2, why: "« la réticence du conseil à publier les chiffres a nourri les spéculations »." },
      { id: "fr-t-c2-5", skill: "grammar", q: "Il n'est pas exclu que la direction ___ déjà informée.", options: ["ait été", "soit", "était", "sera"], a: 0, why: "Subjonctif passé au passif : qu'elle ait été informée (l'information est antérieure)." },
      { id: "fr-t-c2-6", skill: "vocab", q: "La décision a été prise ___ du comité financier, pas du conseil.", options: ["à la demande", "à défaut", "au risque", "à force"], a: 0, why: "À la demande de = sur demande de. À défaut de = faute de ; à force de = à cause de répétition." }
    ]
  },

  levels: {
    A1: {
      lessons: [{
        id: "fr-a1-l1",
        title: "Le présent des verbes en -er",
        goal: "Se présenter et décrire son travail.",
        rule: "Les verbes en <strong>-er</strong> (travailler, arriver, commencer) font : -e, -es, -e, -ons, -ez, -ent. <strong>Il y a</strong> présente un lieu ou une chose, sans changer au pluriel.",
        examples: [
          { t: "Elle travaille dans un magasin.", fr: "Elle travaille dans un magasin." },
          { t: "Nous commençons à neuf heures.", fr: "Nous commençons à neuf heures." },
          { t: "Il y a deux salles au premier étage.", fr: "Il y a deux salles au premier étage." }
        ],
        exercises: [
          { type: "fill", q: "Elle ___ (travailler) à Lyon.", a: ["travaille"], why: "3e personne du singulier : -e." },
          { type: "qcm", q: "___ deux salles au premier étage.", options: ["Il y a", "Il est", "C'est", "Ils ont"], a: 0, why: "Il y a = présence, invariable." },
          { type: "fill", q: "Nous ___ (commencer) à neuf heures.", a: ["commençons"], why: "Nous → -ons, avec cédille sous le c." },
          { type: "order", q: "Remettez les mots dans l'ordre.", tokens: ["Elle", "travaille", "dans", "un", "magasin"], a: "Elle travaille dans un magasin", why: "Sujet + verbe + complément." }
        ]
      }]
    },
    A2: {
      lessons: [{
        id: "fr-a2-l1",
        title: "Passé composé et imparfait",
        goal: "Raconter une action ou décrire une situation passée.",
        rule: "<strong>Passé composé</strong> : action ponctuelle et terminée (hier, lundi). <strong>Imparfait</strong> : description, habitude, décor (quand j'étais petit, avant).",
        examples: [
          { t: "Hier, j'ai envoyé le rapport.", fr: "Action ponctuelle." },
          { t: "Quand j'étais petit, je jouais au foot.", fr: "Habitude dans le passé." },
          { t: "Avant, elle habitait à Paris.", fr: "Situation qui a duré." }
        ],
        exercises: [
          { type: "qcm", q: "Hier, j'___ le rapport.", options: ["ai envoyé", "envoyais", "envoie", "enverrai"], a: 0, why: "Hier = action terminée → passé composé." },
          { type: "fill", q: "Quand j'étais petit, je ___ (jouer) au foot.", a: ["jouais"], why: "Habitude passée → imparfait." },
          { type: "qcm", q: "Avant, elle ___ à Paris.", options: ["a habité", "habitait", "habite", "habitera"], a: 1, why: "Description d'une situation passée → imparfait." },
          { type: "order", q: "Remettez les mots dans l'ordre.", tokens: ["J'ai", "envoyé", "le", "rapport", "hier"], a: "J'ai envoyé le rapport hier", why: "Passé composé : auxiliaire + participe passé." }
        ]
      }]
    },
    B1: {
      lessons: [{
        id: "fr-b1-l1",
        title: "L'hypothèse avec « si »",
        goal: "Formuler une condition irréelle dans le présent.",
        rule: "<strong>Si + imparfait, conditionnel présent.</strong> On l'utilise pour imaginer une situation différente de la réalité. On ne met jamais le conditionnel juste après si.",
        examples: [
          { t: "Si j'avais plus de temps, je préparerais un meilleur exposé.", fr: "Hypothèse irréelle." },
          { t: "Si tu voulais, nous pourrions commencer.", fr: "Condition + conséquence." },
          { t: "Il viendrait si tu l'invitais.", fr: "Même structure, ordre inversé." }
        ],
        exercises: [
          { type: "qcm", q: "Si j'___ plus de temps, je préparerais un meilleur exposé.", options: ["ai", "avais", "aurais", "aie"], a: 1, why: "Si + imparfait, jamais de conditionnel après si." },
          { type: "fill", q: "Si tu ___ (vouloir), nous pourrions commencer.", a: ["voulais"], why: "Imparfait de vouloir." },
          { type: "qcm", q: "Il viendrait si tu l'___.", options: ["invites", "invitais", "inviteras", "as invité"], a: 1, why: "Condition irréelle → imparfait." },
          { type: "order", q: "Remettez les mots dans l'ordre.", tokens: ["Si", "j'avais", "le", "temps", "je", "viendrais"], a: "Si j'avais le temps je viendrais", why: "Condition puis conséquence." }
        ]
      }]
    },
    B2: {
      lessons: [{
        id: "fr-b2-l1",
        title: "Le plus-que-parfait et le conditionnel passé",
        goal: "Exprimer un regret ou un passé imaginaire.",
        rule: "<strong>Si + plus-que-parfait, conditionnel passé.</strong> Exemple : si j'avais su, j'aurais prévenu. L'action ne s'est pas réalisée ; le résultat reste imaginaire.",
        examples: [
          { t: "Si nous avions raté la date limite, nous aurions perdu le contrat.", fr: "Regret / passé imaginaire." },
          { t: "Elle aurait réagi si elle avait su.", fr: "Condition au plus-que-parfait." },
          { t: "Nous aurions livré à temps si le fournisseur n'avait pas échoué.", fr: "Conséquence au conditionnel passé." }
        ],
        exercises: [
          { type: "qcm", q: "Si nous ___ la date limite, nous aurions perdu le contrat.", options: ["avons raté", "avions raté", "raterions", "ayons raté"], a: 1, why: "Si + plus-que-parfait." },
          { type: "fill", q: "Si elle ___ (savoir), elle aurait réagi.", a: ["avait su"], why: "Plus-que-parfait de savoir : avait su." },
          { type: "qcm", q: "Nous aurions livré à temps si le fournisseur n'___ pas.", options: ["a échoué", "avait échoué", "échouait", "échouerait"], a: 1, why: "La condition précède le résultat." },
          { type: "order", q: "Remettez les mots dans l'ordre.", tokens: ["Si", "j'avais", "su", "j'aurais", "prévenu"], a: "Si j'avais su j'aurais prévenu", why: "Plus-que-parfait + conditionnel passé." }
        ]
      }]
    },
    C1: {
      lessons: [{
        id: "fr-c1-l1",
        title: "Le subjonctif après « il faut que »",
        goal: "Formuler une obligation ou une concession formelle.",
        rule: "Après <strong>il faut que, il est essentiel que, bien que, avant que</strong>, on emploie le subjonctif : que je sois, que tu finisses, qu'il ait.",
        examples: [
          { t: "Il est essentiel que le rapport soit remis vendredi.", fr: "Obligation formelle." },
          { t: "Bien qu'il ait peu de temps, il a livré le projet.", fr: "Concession." },
          { t: "Il faut que tu finisses avant midi.", fr: "Obligation personnelle." }
        ],
        exercises: [
          { type: "qcm", q: "Il est essentiel que le rapport ___ remis vendredi.", options: ["est", "soit", "était", "sera"], a: 1, why: "Il est essentiel que + subjonctif (soit)." },
          { type: "qcm", q: "Bien qu'il ___ peu de temps, il a livré le projet.", options: ["a", "ait", "avait", "aurait"], a: 1, why: "Bien que + subjonctif." },
          { type: "fill", q: "Il faut que tu ___ (finir) avant midi.", a: ["finisses"], why: "Subjonctif présent de finir, 2e personne." },
          { type: "order", q: "Remettez les mots dans l'ordre.", tokens: ["Il", "faut", "que", "le", "rapport", "soit", "prêt"], a: "Il faut que le rapport soit prêt", why: "Il faut que + subjonctif." }
        ]
      }]
    },
    C2: {
      lessons: [{
        id: "fr-c2-l1",
        title: "Style formel et tournures soutenues",
        goal: "Écrire un rapport avec un registre soutenu.",
        rule: "Le registre formel utilise <strong>non seulement… mais encore</strong>, <strong>quoi qu'il en soit</strong>, <strong>faute de</strong> (+ nom) et la nominalisation (décider → la décision). Ces tournures densifient le propos.",
        examples: [
          { t: "Non seulement il a dépassé le budget, mais encore il a manqué la date limite.", fr: "Insistance formelle." },
          { t: "Quoi qu'il en soit, la décision est prise.", fr: "Concession figée." },
          { t: "Faute de données, la décision a été reportée.", fr: "Cause négative." }
        ],
        exercises: [
          { type: "qcm", q: "Non seulement il a dépassé le budget, ___ il a manqué la date limite.", options: ["mais encore", "et", "donc", "car"], a: 0, why: "Corrélation non seulement… mais encore." },
          { type: "qcm", q: "Quoi qu'il en ___, la décision est prise.", options: ["soit", "est", "sera", "fût"], a: 0, why: "Quoi qu'il en soit : subjonctif figé." },
          { type: "fill", q: "La décision a été reportée ___ de données. (1 mot)", a: ["faute"], why: "Faute de + nom = par manque de." },
          { type: "order", q: "Remettez les mots dans l'ordre.", tokens: ["Faute", "de", "données", "la", "décision", "a", "été", "reportée"], a: "Faute de données la décision a été reportée", why: "Tournure formelle de cause." }
        ]
      }]
    }
  }
};
