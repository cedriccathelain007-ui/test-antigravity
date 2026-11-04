/* Contenu — Anglais (en). Niveau A1 à C2.
   Chaque question de test : id, skill (grammar|vocab|reading), q, options, a (index), why.
   Chaque leçon : id, title, goal, rule (HTML simple), examples[{t,fr}], exercises[].
   Types d'exercice : qcm | fill | order. */
window.COURSES = window.COURSES || {};

window.COURSES.en = {
  code: "en",

  test: {
    A1: [
      {
        id: "en-t-a1-1", skill: "grammar",
        q: "She ___ to work by bus every day.",
        options: ["go", "goes", "going", "is go"],
        a: 1,
        why: "Présent simple, 3e personne du singulier : le verbe prend un -s (she goes)."
      },
      {
        id: "en-t-a1-2", skill: "vocab",
        q: "Choose the place where you buy food:",
        options: ["the library", "the supermarket", "the pharmacy", "the garage"],
        a: 1,
        why: "Supermarket = supermarché. Library = bibliothèque (faux ami avec « librairie »)."
      },
      {
        id: "en-t-a1-3", skill: "grammar",
        q: "There ___ two meeting rooms on this floor.",
        options: ["is", "are", "be", "have"],
        a: 1,
        why: "There are + nom pluriel (two meeting rooms)."
      },
      {
        id: "en-t-a1-4", skill: "reading",
        passage: "Hi, I'm Léa. I work in a small shop in Lille. I start at 9 a.m. and finish at 5 p.m. On Saturdays, I work until 7 p.m.",
        q: "What time does Léa finish on Saturdays?",
        options: ["5 p.m.", "7 p.m.", "9 a.m.", "6 p.m."],
        a: 1,
        why: "Le texte dit : « On Saturdays, I work until 7 p.m. »."
      },
      {
        id: "en-t-a1-5", skill: "grammar",
        q: "How ___ you spell your surname?",
        options: ["do", "does", "are", "is"],
        a: 0,
        why: "Question au présent simple avec you : do + sujet + base verbale (How do you spell…)."
      },
      {
        id: "en-t-a1-6", skill: "vocab",
        q: "Before we order, please send me a ___ (un devis).",
        options: ["quotation", "invoice", "receipt", "salary"],
        a: 0,
        why: "Quotation (ou quote) = devis. Invoice = facture ; receipt = ticket de caisse."
      },
      {
        id: "en-t-a1-7", skill: "grammar",
        q: "There isn't ___ milk left in the fridge.",
        options: ["some", "any", "a", "many"],
        a: 1,
        why: "À la forme négative, on emploie any : there isn't any milk. Some s'utilise à l'affirmative."
      },
      {
        id: "en-t-a1-8", skill: "vocab",
        q: "I'd like to ___ a table for four, please.",
        options: ["book", "buy", "open", "pay"],
        a: 0,
        why: "Book a table = réserver une table (usage britannique ; reserve se dit aussi)."
      },
      {
        id: "en-t-a1-9", skill: "grammar",
        q: "She ___ work on Sundays.",
        options: ["don't", "doesn't", "isn't", "not"],
        a: 1,
        why: "Négation au présent simple, 3e personne du singulier : doesn't + base verbale."
      },
      {
        id: "en-t-a1-10", skill: "vocab",
        q: "The shop opens ___ 8 a.m. every day.",
        options: ["at", "on", "in", "to"],
        a: 0,
        why: "At + heure précise (at 8 a.m.). On + jour, in + mois ou année."
      },
      {
        id: "en-t-a1-11", skill: "reading",
        passage: "Welcome to Mon-épicerie. We are open from Monday to Saturday, 8 a.m. to 8 p.m. On Sunday, we close at 1 p.m.",
        q: "What time does the shop close on Sunday?",
        options: ["8 p.m.", "1 p.m.", "8 a.m.", "6 p.m."],
        a: 1,
        why: "Le texte dit : « On Sunday, we close at 1 p.m. »."
      },
      {
        id: "en-t-a1-12", skill: "vocab",
        q: "Where do customers pay? At the ___.",
        options: ["tills", "shelves", "stockroom", "office"],
        a: 0,
        why: "Till = caisse (britannique). Aux États-Unis, on dit cash register."
      }
    ],

    A2: [
      {
        id: "en-t-a2-1", skill: "grammar",
        q: "I ___ in Lyon for three years. I still live there.",
        options: ["lived", "have lived", "live", "am living"],
        a: 1,
        why: "Present perfect avec for : l'action a commencé dans le passé et continue aujourd'hui."
      },
      {
        id: "en-t-a2-2", skill: "vocab",
        q: "Please ___ me the report by email before Friday.",
        options: ["say", "tell", "send", "speak"],
        a: 2,
        why: "Send = envoyer un document. Tell someone something, mais on envoie un fichier."
      },
      {
        id: "en-t-a2-3", skill: "grammar",
        q: "If it ___ tomorrow, we will work from home.",
        options: ["rains", "will rain", "rained", "raining"],
        a: 0,
        why: "First conditional : if + présent simple, will + infinitif. On ne met pas will après if."
      },
      {
        id: "en-t-a2-4", skill: "reading",
        passage: "From: Tom. The meeting on Tuesday is moved to Thursday at 10 a.m., same room. Please bring the sales figures.",
        q: "What should you bring to the meeting?",
        options: ["The contract", "The sales figures", "The new agenda", "A laptop"],
        a: 1,
        why: "Le message demande explicitement : « Please bring the sales figures »."
      },
      {
        id: "en-t-a2-5", skill: "grammar",
        q: "She has worked in this team ___ 2019.",
        options: ["since", "for", "from", "ago"],
        a: 0,
        why: "Since + point de départ (2019) ; for + durée (for three years)."
      },
      {
        id: "en-t-a2-6", skill: "vocab",
        q: "Could we ___ the meeting to Thursday? I'm away on Wednesday.",
        options: ["put off", "put on", "put out", "put up"],
        a: 0,
        why: "Put off = reporter. Put on = organiser ; put up = loger."
      },
      {
        id: "en-t-a2-7", skill: "grammar",
        q: "I ___ the report yesterday morning.",
        options: ["have sent", "sent", "send", "was sending"],
        a: 1,
        why: "Yesterday = moment précis et terminé → past simple (sent), pas present perfect."
      },
      {
        id: "en-t-a2-8", skill: "vocab",
        q: "We had to ___ the order because the item is out of stock.",
        options: ["cancel", "celebrate", "calculate", "copy"],
        a: 0,
        why: "Cancel = annuler. Out of stock = en rupture de stock."
      },
      {
        id: "en-t-a2-9", skill: "grammar",
        q: "There are ___ products on the shelf than yesterday.",
        options: ["less", "fewer", "few", "little"],
        a: 1,
        why: "Fewer + nom dénombrable pluriel. Less s'emploie avec l'indénombrable (less time)."
      },
      {
        id: "en-t-a2-10", skill: "vocab",
        q: "Could you ___ me a hand with these boxes?",
        options: ["give", "do", "make", "take"],
        a: 0,
        why: "Give someone a hand = donner un coup de main."
      },
      {
        id: "en-t-a2-11", skill: "reading",
        passage: "Hi Sam, the stock check is on Friday morning. Please print the inventory list and bring it to the back office. We start at 7 a.m., before the shop opens.",
        q: "What should Sam bring?",
        options: ["The stock order", "The inventory list", "The shop keys", "A coffee"],
        a: 1,
        why: "Le message dit : « Please print the inventory list and bring it »."
      },
      {
        id: "en-t-a2-12", skill: "vocab",
        q: "The delivery will arrive ___ Tuesday morning.",
        options: ["on", "in", "at", "by"],
        a: 0,
        why: "On + jour de la semaine (on Tuesday morning). By Tuesday = au plus tard mardi."
      }
    ],

    B1: [
      {
        id: "en-t-b1-1", skill: "grammar",
        q: "If I ___ more time, I would prepare a better presentation.",
        options: ["have", "had", "would have", "will have"],
        a: 1,
        why: "Second conditional : if + prétérit, would + infinitif (hypothèse irréelle dans le présent)."
      },
      {
        id: "en-t-b1-2", skill: "vocab",
        q: "The client was ill, so we had to ___ the meeting.",
        options: ["call off", "call on", "call up", "call for"],
        a: 0,
        why: "Call off = annuler. Call on = rendre visite ; call up = téléphoner."
      },
      {
        id: "en-t-b1-3", skill: "grammar",
        q: "The new process ___ last month.",
        options: ["was implemented", "implemented", "has implemented", "is implementing"],
        a: 0,
        why: "Voix passive au prétérit : was + participe passé, car le processus subit l'action."
      },
      {
        id: "en-t-b1-4", skill: "reading",
        passage: "Our new stock system went live in March. Since then, order errors have fallen by 30 %. However, the team still needs training on the reporting tool.",
        q: "What is the remaining problem?",
        options: ["Orders are late", "The system is too expensive", "The team needs training", "Errors have increased"],
        a: 2,
        why: "« However » introduit le point négatif : la formation sur l'outil de reporting reste à faire."
      },
      {
        id: "en-t-b1-5", skill: "grammar",
        q: "The invoices ___ yesterday, so the client has already paid.",
        options: ["were sent", "was sent", "sent", "are sent"],
        a: 0,
        why: "Passif au prétérit, sujet pluriel : were + participe passé. Le sujet subit l'action."
      },
      {
        id: "en-t-b1-6", skill: "vocab",
        q: "We need to ___ the costs before signing the contract.",
        options: ["break down", "break in", "break out", "break up"],
        a: 0,
        why: "Break down = décomposer, ventiler. Break out = éclater (conflit) ; break up = se séparer."
      },
      {
        id: "en-t-b1-7", skill: "grammar",
        q: "We ___ the stock when the lights went out.",
        options: ["were checking", "checked", "have checked", "check"],
        a: 0,
        why: "Action en cours interrompue par un événement court : past continuous (were checking) + past simple."
      },
      {
        id: "en-t-b1-8", skill: "vocab",
        q: "The supplier will ___ the missing items tomorrow.",
        options: ["deliver", "delivery", "delivering", "delivered"],
        a: 0,
        why: "Deliver = verbe ; delivery = nom. Après will, on met la base verbale."
      },
      {
        id: "en-t-b1-9", skill: "grammar",
        q: "The shop ___ open until 9 p.m., but now it closes at 7.",
        options: ["used to", "use to", "is used to", "was used"],
        a: 0,
        why: "Used to + infinitif exprime une habitude passée qui n'existe plus."
      },
      {
        id: "en-t-b1-10", skill: "vocab",
        q: "The team will ___ up the display before Friday.",
        options: ["set", "put", "take", "give"],
        a: 0,
        why: "Set up = installer, mettre en place. Put up = accrocher ; take up = occuper."
      },
      {
        id: "en-t-b1-11", skill: "reading",
        passage: "Since the new self-checkout tills were installed, queues at peak hours have shortened. Some customers, however, say they miss the help of a cashier when something goes wrong.",
        q: "What do some customers miss?",
        options: ["Lower prices", "The help of a cashier", "Faster tills", "The old shop"],
        a: 1,
        why: "« they miss the help of a cashier when something goes wrong »."
      },
      {
        id: "en-t-b1-12", skill: "grammar",
        q: "If we ___ the order today, it will arrive on Friday.",
        options: ["place", "placed", "will place", "placing"],
        a: 0,
        why: "First conditional : if + présent simple, will + infinitif. Jamais will après if."
      }
    ],

    B2: [
      {
        id: "en-t-b2-1", skill: "grammar",
        q: "If we ___ the deadline, we would have lost the contract.",
        options: ["missed", "had missed", "would miss", "have missed"],
        a: 1,
        why: "Third conditional : if + had + participe passé, would have + participe passé."
      },
      {
        id: "en-t-b2-2", skill: "vocab",
        q: "After three hours of discussion, the two departments reached a ___.",
        options: ["competition", "comprehension", "compromise", "compliance"],
        a: 2,
        why: "Reach a compromise = trouver un compromis. Attention aux faux amis : comprehension ≠ compréhension ici."
      },
      {
        id: "en-t-b2-3", skill: "grammar",
        q: "The client said the delivery ___ delayed.",
        options: ["will be", "would be", "is", "has been"],
        a: 1,
        why: "Discours indirect au passé : will devient would."
      },
      {
        id: "en-t-b2-4", skill: "reading",
        passage: "The pilot store exceeded its sales target by 12 % in the first quarter. Nevertheless, the board has asked for a full review before extending the model to other regions.",
        q: "What does the board want?",
        options: ["To close the pilot store", "To extend the model immediately", "To review the results before expanding", "To cut the sales target"],
        a: 2,
        why: "« before extending the model » : le conseil veut d'abord un examen complet."
      },
      {
        id: "en-t-b2-5", skill: "grammar",
        q: "The report ___ by the legal team before it was published.",
        options: ["should have been checked", "should check", "should be checking", "should have checked"],
        a: 0,
        why: "Passif au conditionnel passé : should have been + participe passé (le rapport est vérifié, pas le vérificateur)."
      },
      {
        id: "en-t-b2-6", skill: "vocab",
        q: "The supplier has agreed to ___ the price by 5 %.",
        options: ["bring down", "bring up", "bring in", "bring about"],
        a: 0,
        why: "Bring down = réduire. Bring up = soulever (un sujet) ; bring about = provoquer."
      },
      {
        id: "en-t-b2-7", skill: "grammar",
        q: "If she had checked the figures, we ___ the error earlier.",
        options: ["would spot", "would have spotted", "will spot", "had spotted"],
        a: 1,
        why: "Third conditional : if + had + participe passé, would have + participe passé."
      },
      {
        id: "en-t-b2-8", skill: "vocab",
        q: "We had to ___ back the launch because of a supply problem.",
        options: ["push", "pull", "put", "take"],
        a: 0,
        why: "Push back = reporter à plus tard. Pull back = se retirer ; take back = reprendre."
      },
      {
        id: "en-t-b2-9", skill: "grammar",
        q: "All deliveries ___ checked before they leave the warehouse.",
        options: ["must be", "must", "must to be", "have must"],
        a: 0,
        why: "Modal + be + participe passé (passif) : must be checked. Must est suivi de la base verbale."
      },
      {
        id: "en-t-b2-10", skill: "vocab",
        q: "The board will ___ the proposal next week.",
        options: ["discuss", "discuss about", "debate on", "argue"],
        a: 0,
        why: "Discuss + objet direct, sans about : c'est un faux ami de « discuter de »."
      },
      {
        id: "en-t-b2-11", skill: "reading",
        passage: "The new supplier offers lower prices, but its lead times are two weeks longer. The purchasing team therefore suggests a trial order before any long-term contract.",
        q: "What does the purchasing team suggest?",
        options: ["Signing immediately", "A trial order", "Refusing the supplier", "Increasing lead times"],
        a: 1,
        why: "« suggests a trial order before any long-term contract » : un essai avant l'engagement."
      },
      {
        id: "en-t-b2-12", skill: "grammar",
        q: "She asked me ___ the meeting had been postponed.",
        options: ["if", "that", "what", "weather"],
        a: 0,
        why: "Question indirecte fermée : if (ou whether, plus formel). Weather = météo, homophone."
      }
    ],

    C1: [
      {
        id: "en-t-c1-1", skill: "grammar",
        q: "Not only ___ the budget, but the team also missed the deadline.",
        options: ["they exceeded", "did they exceed", "they did exceed", "exceeded they"],
        a: 1,
        why: "Après Not only en tête de phrase, on inverse l'auxiliaire et le sujet : did they exceed."
      },
      {
        id: "en-t-c1-2", skill: "vocab",
        q: "Her argument was ___ : it convinced even the sceptics.",
        options: ["compelling", "compulsory", "complacent", "competitive"],
        a: 0,
        why: "Compelling = convaincant. Compulsory = obligatoire ; complacent = suffisant."
      },
      {
        id: "en-t-c1-3", skill: "grammar",
        q: "The manager insisted that the report ___ submitted by Friday.",
        options: ["is", "be", "was", "will be"],
        a: 1,
        why: "Subjonctif après insist that : base verbale invariable (be), usage formel britannique."
      },
      {
        id: "en-t-c1-4", skill: "reading",
        passage: "The report argues that remote work has not reduced productivity, but it concedes that informal collaboration has suffered. It therefore recommends a hybrid model rather than a full return to the office.",
        q: "What does the report recommend?",
        options: ["A full return to the office", "A hybrid model", "Ending remote work", "More informal meetings"],
        a: 1,
        why: "« it therefore recommends a hybrid model » : la recommandation est explicite."
      },
      {
        id: "en-t-c1-5", skill: "grammar",
        q: "Rarely ___ such a clear explanation of the problem.",
        options: ["have I heard", "I have heard", "did I heard", "I heard"],
        a: 0,
        why: "Après Rarely en tête de phrase, inversion sujet-auxiliaire au present perfect : have I heard."
      },
      {
        id: "en-t-c1-6", skill: "vocab",
        q: "The team's performance was ___ by the lack of a clear brief.",
        options: ["hampered", "harnessed", "handled", "harboured"],
        a: 0,
        why: "Hamper = entraver, gêner. Harness = exploiter ; harbour = nourrir (un sentiment)."
      },
      {
        id: "en-t-c1-7", skill: "grammar",
        q: "No sooner ___ the results than the client called.",
        options: ["had we published", "we had published", "we published", "did we published"],
        a: 0,
        why: "No sooner + had + sujet + participe passé … than : inversion après un adverbe négatif en tête."
      },
      {
        id: "en-t-c1-8", skill: "vocab",
        q: "The two proposals are ___; we cannot fund both.",
        options: ["mutually exclusive", "mutually beneficial", "widely available", "highly competitive"],
        a: 0,
        why: "Mutually exclusive = qui s'excluent l'un l'autre. Mutually beneficial = profitable aux deux."
      },
      {
        id: "en-t-c1-9", skill: "grammar",
        q: "Were the funding ___, the project would start in June.",
        options: ["approved", "approving", "approve", "to approve"],
        a: 0,
        why: "Conditionnel sans if : Were + sujet + participe passé (passif) = If the funding were approved."
      },
      {
        id: "en-t-c1-10", skill: "vocab",
        q: "The team managed to ___ the delay by working overtime.",
        options: ["make up for", "make off with", "make out", "make over"],
        a: 0,
        why: "Make up for = compenser. Make off with = emporter ; make out = distinguer."
      },
      {
        id: "en-t-c1-11", skill: "reading",
        passage: "The audit found no evidence of fraud, but it criticised the lack of segregation of duties: the same person orders stock and approves invoices. The report recommends splitting these tasks without delay.",
        q: "What does the audit criticise?",
        options: ["Fraud", "The lack of segregation of duties", "The cost of the audit", "Overtime"],
        a: 1,
        why: "« it criticised the lack of segregation of duties » : une même personne commande et valide."
      },
      {
        id: "en-t-c1-12", skill: "grammar",
        q: "It is essential that every complaint ___ within 48 hours.",
        options: ["be answered", "is answered", "will be answered", "answers"],
        a: 0,
        why: "Subjonctif après It is essential that : base verbale, ici au passif (be answered)."
      }
    ],

    C2: [
      {
        id: "en-t-c2-1", skill: "grammar",
        q: "Had we known about the supply issue, we ___ a contingency plan.",
        options: ["would prepare", "had prepared", "would have prepared", "will prepare"],
        a: 2,
        why: "Had we known = If we had known ; la conséquence est passée : would have + participe passé."
      },
      {
        id: "en-t-c2-2", skill: "vocab",
        q: "The proposal was rejected ___ the lack of a clear cost analysis.",
        options: ["on the grounds of", "for the purpose of", "by means of", "in the event of"],
        a: 0,
        why: "On the grounds of = pour le motif de, en raison de. Tournure formelle."
      },
      {
        id: "en-t-c2-3", skill: "grammar",
        q: "Little ___ that the decision would affect the whole team.",
        options: ["she knew", "did she know", "she did know", "knew she"],
        a: 1,
        why: "Après Little en tête de phrase, inversion avec l'auxiliaire : did she know."
      },
      {
        id: "en-t-c2-4", skill: "reading",
        passage: "Far from being a mere cost-cutting exercise, the restructure was presented as a condition for long-term investment. Yet the board's reluctance to publish the figures fuelled speculation among staff.",
        q: "What fuelled speculation among staff?",
        options: ["The cost-cutting exercise", "The long-term investment plan", "The board's refusal to publish figures", "The restructure itself"],
        a: 2,
        why: "« the board's reluctance to publish the figures fuelled speculation » : c'est la réticence à publier les chiffres."
      },
      {
        id: "en-t-c2-5", skill: "grammar",
        q: "Under no circumstances ___ the data be shared outside the team.",
        options: ["should", "must", "would", "could"],
        a: 0,
        why: "Après Under no circumstances, on inverse l'auxiliaire modal et le sujet : should the data be shared."
      },
      {
        id: "en-t-c2-6", skill: "vocab",
        q: "The decision was taken ___ the finance committee, not the board.",
        options: ["at the behest of", "on the verge of", "in the wake of", "by virtue of"],
        a: 0,
        why: "At the behest of = à la demande de. In the wake of = à la suite de ; by virtue of = en vertu de."
      },
      {
        id: "en-t-c2-7", skill: "grammar",
        q: "Only after the audit ___ the scale of the problem.",
        options: ["did we realise", "we realised", "we did realise", "realised we"],
        a: 0,
        why: "Only after + inversion de l'auxiliaire : did we realise (did + base verbale)."
      },
      {
        id: "en-t-c2-8", skill: "vocab",
        q: "The board's decision was ___ by the shareholders' concerns.",
        options: ["prompted", "promoted", "presumed", "prolonged"],
        a: 0,
        why: "Prompt = susciter, provoquer. Promote = promouvoir ; presume = supposer."
      },
      {
        id: "en-t-c2-9", skill: "grammar",
        q: "The figures, ___ were published late, had already been leaked.",
        options: ["which", "that", "what", "who"],
        a: 0,
        why: "Relative non restrictive (entre virgules) : which. That ne s'emploie pas après une virgule."
      },
      {
        id: "en-t-c2-10", skill: "vocab",
        q: "The proposal was watered ___ before it reached the board.",
        options: ["down", "off", "out", "up"],
        a: 0,
        why: "Water down = édulcorer, atténuer. Water off, out et up ne forment pas ces expressions."
      },
      {
        id: "en-t-c2-11", skill: "reading",
        passage: "The consultation revealed a paradox: staff welcomed the new tools but resented the pace of change. Management interpreted this as resistance, whereas the report reads it as a demand for training and time.",
        q: "How does the report interpret the staff reaction?",
        options: ["As resistance to change", "As a demand for training and time", "As support for management", "As indifference"],
        a: 1,
        why: "« whereas the report reads it as a demand for training and time » : « whereas » oppose deux lectures."
      },
      {
        id: "en-t-c2-12", skill: "grammar",
        q: "___ had the announcement been made than the shares fell.",
        options: ["No sooner", "Hardly", "Barely", "Scarcely"],
        a: 0,
        why: "No sooner … than. Hardly, barely et scarcely se construisent avec when."
      }
    ]
  },

  levels: {
    A1: {
      lessons: [
        {
          id: "en-a1-l1",
          title: "Le présent simple",
          goal: "Décrire une habitude de travail.",
          rule: "Le présent simple exprime une habitude ou un fait général. À la 3e personne du singulier (he, she, it), le verbe prend un <strong>-s</strong>. À la forme négative et interrogative, on utilise <strong>do / does</strong>.",
          examples: [
            { t: "She works in the Paris office.", fr: "Elle travaille au bureau de Paris." },
            { t: "They start at nine every morning.", fr: "Ils commencent à neuf heures chaque matin." },
            { t: "He doesn't use the shared drive.", fr: "Il n'utilise pas le drive partagé." }
          ],
          exercises: [
            {
              type: "qcm",
              q: "He ___ the weekly report every Monday.",
              options: ["prepare", "prepares", "is prepare", "preparing"],
              a: 1,
              why: "He → 3e personne du singulier : prepares."
            },
            {
              type: "fill",
              q: "Our team ___ (to meet) at 9 a.m. every day.",
              a: ["meets"],
              why: "Our team = it → meets. Le -s est obligatoire."
            },
            {
              type: "qcm",
              q: "They ___ use the new tool.",
              options: ["don't", "doesn't", "aren't", "not"],
              a: 0,
              why: "They → do not (don't) + verbe à l'infinitif."
            },
            {
              type: "order",
              q: "Remettez les mots dans l'ordre.",
              tokens: ["She", "doesn't", "work", "on", "Fridays"],
              a: "She doesn't work on Fridays",
              why: "Négation au présent simple : does not + base verbale, sans -s sur le verbe."
            },
            {
              type: "fill",
              q: "___ you speak German?",
              a: ["do"],
              why: "Question fermée au présent simple : Do + sujet + verbe."
            }
          ]
        },
        {
          id: "en-a1-l2",
          title: "Poser des questions simples",
          goal: "Demander une information en réunion.",
          rule: "Question fermée : <strong>do/does + sujet + verbe</strong>. Question ouverte : <strong>mot interrogatif + do/does + sujet + verbe</strong>. Avec le verbe <em>be</em>, on inverse simplement : <em>Are you…? / Is she…?</em>",
          examples: [
            { t: "When does the meeting start?", fr: "Quand la réunion commence-t-elle ?" },
            { t: "Where is the manager?", fr: "Où est le responsable ?" },
            { t: "Do you have a minute?", fr: "Avez-vous une minute ?" }
          ],
          exercises: [
            {
              type: "qcm",
              q: "___ does the meeting start?",
              options: ["What", "When", "Who", "Why"],
              a: 1,
              why: "On demande l'heure → When."
            },
            {
              type: "fill",
              q: "___ is the manager? — In office 3.",
              a: ["where"],
              why: "On demande le lieu → Where."
            },
            {
              type: "order",
              q: "Remettez les mots dans l'ordre.",
              tokens: ["Do", "you", "have", "a", "minute"],
              a: "Do you have a minute",
              why: "Auxiliaire do + sujet + verbe : l'ordre de la question."
            },
            {
              type: "qcm",
              q: "What ___ your job title?",
              options: ["are", "is", "do", "does"],
              a: 1,
              why: "Avec be, on inverse sujet et verbe : What is your job title?"
            },
            {
              type: "fill",
              q: "How ___ you spell your name?",
              a: ["do"],
              why: "Le verbe lexical spell a besoin de l'auxiliaire do."
            }
          ]
        }
      ]
    },

    A2: {
      lessons: [
        {
          id: "en-a2-l1",
          title: "Passé simple ou present perfect",
          goal: "Raconter une action passée sans confondre les deux temps.",
          rule: "Le <strong>passé simple</strong> situe l'action à un moment terminé et précis (yesterday, last week, in 2024). Le <strong>present perfect</strong> relie le passé au présent : bilan, expérience, ou action commencée qui continue (for, since, ever, already, yet).",
          examples: [
            { t: "I sent the report yesterday.", fr: "J'ai envoyé le rapport hier. (moment précis)" },
            { t: "I have sent the report.", fr: "J'ai envoyé le rapport. (il est parti, lien avec maintenant)" },
            { t: "She has worked here since 2021.", fr: "Elle travaille ici depuis 2021. (elle y est encore)" }
          ],
          exercises: [
            {
              type: "qcm",
              q: "I ___ the report yesterday.",
              options: ["send", "have sent", "sent", "was sending"],
              a: 2,
              why: "Yesterday = moment terminé → passé simple."
            },
            {
              type: "qcm",
              q: "She ___ here since 2021.",
              options: ["works", "is working", "has worked", "worked"],
              a: 2,
              why: "Since + date de début, action qui continue → present perfect."
            },
            {
              type: "fill",
              q: "We ___ (to finish) the audit last Friday.",
              a: ["finished"],
              why: "Last Friday = moment terminé → passé simple."
            },
            {
              type: "qcm",
              q: "I have ___ sent the email, so you can check your inbox.",
              options: ["yet", "already", "ago", "last"],
              a: 1,
              why: "Already = déjà, dans une phrase affirmative au present perfect."
            },
            {
              type: "order",
              q: "Remettez les mots dans l'ordre.",
              tokens: ["Have", "you", "ever", "worked", "abroad"],
              a: "Have you ever worked abroad",
              why: "Ever s'emploie dans les questions au present perfect pour demander une expérience."
            }
          ]
        },
        {
          id: "en-a2-l2",
          title: "Le futur : will et going to",
          goal: "Annoncer une décision ou une intention.",
          rule: "<strong>Will + infinitif</strong> : décision prise au moment où l'on parle, promesse, offre. <strong>Be going to + infinitif</strong> : intention déjà décidée, ou prévision fondée sur un indice visible.",
          examples: [
            { t: "The phone is ringing. I'll answer it.", fr: "Le téléphone sonne. Je réponds. (décision immédiate)" },
            { t: "We are going to open a new store in May.", fr: "Nous allons ouvrir un nouveau magasin en mai. (projet prévu)" },
            { t: "Look at those clouds. It's going to rain.", fr: "Regarde ces nuages. Il va pleuvoir. (indice visible)" }
          ],
          exercises: [
            {
              type: "qcm",
              q: "The phone is ringing. I ___ answer it.",
              options: ["am going to", "will", "would", "answer"],
              a: 1,
              why: "Décision prise sur le moment → will."
            },
            {
              type: "qcm",
              q: "We ___ launch the new store in May. The plan is approved.",
              options: ["will", "are going to", "would", "launch"],
              a: 1,
              why: "Intention déjà planifiée → be going to."
            },
            {
              type: "fill",
              q: "I ___ (to call) you back in ten minutes.",
              a: ["will call", "'ll call"],
              why: "Promesse → will + infinitif."
            },
            {
              type: "order",
              q: "Remettez les mots dans l'ordre.",
              tokens: ["We", "are", "going", "to", "open", "a", "new", "store"],
              a: "We are going to open a new store",
              why: "Be going to + infinitif : la forme complète."
            },
            {
              type: "qcm",
              q: "Look at those clouds. It ___ rain.",
              options: ["will", "is going to", "would", "shall"],
              a: 1,
              why: "Prévision fondée sur un indice visible → be going to."
            }
          ]
        }
      ]
    },

    B1: {
      lessons: [
        {
          id: "en-b1-l1",
          title: "Le conditionnel 2",
          goal: "Formuler une hypothèse irréelle dans le présent.",
          rule: "<strong>If + prétérit simple, would + infinitif.</strong> On l'utilise pour une situation imaginaire ou peu probable dans le présent. Avec le verbe <em>be</em>, on emploie <strong>were</strong> à toutes les personnes (If I were you…).",
          examples: [
            { t: "If I had more budget, I would hire a designer.", fr: "Si j'avais plus de budget, j'embaucherais un designer." },
            { t: "If I were you, I would ask for help.", fr: "À votre place, je demanderais de l'aide." },
            { t: "We would deliver faster if we simplified the process.", fr: "Nous livrerions plus vite si nous simplifiions le processus." }
          ],
          exercises: [
            {
              type: "qcm",
              q: "If I ___ more budget, I would hire a designer.",
              options: ["have", "had", "would have", "will have"],
              a: 1,
              why: "If + prétérit (had), conséquence avec would."
            },
            {
              type: "fill",
              q: "If she ___ (to know) the answer, she would tell us.",
              a: ["knew"],
              why: "Prétérit irrégulier : know → knew."
            },
            {
              type: "qcm",
              q: "We would deliver faster if we ___ the process.",
              options: ["simplify", "simplified", "will simplify", "would simplify"],
              a: 1,
              why: "La condition se met au prétérit, jamais au conditionnel."
            },
            {
              type: "order",
              q: "Remettez les mots dans l'ordre.",
              tokens: ["If", "I", "were", "you", "I", "would", "ask", "for", "help"],
              a: "If I were you I would ask for help",
              why: "Were pour toutes les personnes dans cette structure."
            },
            {
              type: "qcm",
              q: "What ___ you do in my position?",
              options: ["will", "would", "do", "did"],
              a: 1,
              why: "Hypothèse implicite (si vous étiez à ma place) → would."
            }
          ]
        },
        {
          id: "en-b1-l2",
          title: "La voix passive",
          goal: "Décrire un processus sans désigner l'auteur.",
          rule: "Passif = <strong>be (au temps voulu) + participe passé</strong>. On ajoute <em>by</em> + agent seulement si l'information est utile. Le passif met en avant l'action ou le résultat, pas celui qui agit : fréquent dans les rapports et comptes rendus.",
          examples: [
            { t: "The report is sent every Monday.", fr: "Le rapport est envoyé chaque lundi." },
            { t: "The new process was implemented last month.", fr: "Le nouveau processus a été mis en place le mois dernier." },
            { t: "The decision was taken by the board.", fr: "La décision a été prise par le conseil." }
          ],
          exercises: [
            {
              type: "qcm",
              q: "The report ___ every Monday.",
              options: ["is sent", "sends", "is sending", "sent"],
              a: 0,
              why: "Passif au présent : is + participe passé."
            },
            {
              type: "qcm",
              q: "The new process ___ last month.",
              options: ["implemented", "was implemented", "has implemented", "is implementing"],
              a: 1,
              why: "Passif au prétérit : was + participe passé."
            },
            {
              type: "fill",
              q: "The invoices ___ (to check) by the finance team every week.",
              a: ["are checked"],
              why: "Sujet pluriel + présent : are + participe passé."
            },
            {
              type: "order",
              q: "Remettez les mots dans l'ordre.",
              tokens: ["The", "decision", "was", "taken", "by", "the", "board"],
              a: "The decision was taken by the board",
              why: "By introduit l'agent, seulement s'il apporte une information."
            },
            {
              type: "qcm",
              q: "English ___ in many international meetings.",
              options: ["speaks", "is spoken", "is speaking", "spoke"],
              a: 1,
              why: "Le sujet subit l'action → passif is spoken."
            }
          ]
        },
        {
          id: "en-b1-l3",
          title: "Trois phrasal verbs de réunion",
          goal: "Utiliser call off, put off et follow up.",
          rule: "<strong>Call off</strong> = annuler. <strong>Put off</strong> = reporter à plus tard. <strong>Follow up</strong> = relancer, assurer le suivi. Ces verbes sont séparables : <em>call the meeting off</em> ou <em>call off the meeting</em>.",
          examples: [
            { t: "We called off the workshop because the client was ill.", fr: "Nous avons annulé l'atelier parce que le client était malade." },
            { t: "Can we put off the decision until Friday?", fr: "Pouvons-nous reporter la décision à vendredi ?" },
            { t: "I will follow up with the supplier tomorrow.", fr: "Je relancerai le fournisseur demain." }
          ],
          exercises: [
            {
              type: "qcm",
              q: "The client was ill, so we ___ the meeting.",
              options: ["called off", "called on", "called up", "called for"],
              a: 0,
              why: "Call off = annuler."
            },
            {
              type: "qcm",
              q: "Can we ___ the decision until Friday?",
              options: ["put on", "put off", "put up", "put out"],
              a: 1,
              why: "Put off = reporter."
            },
            {
              type: "fill",
              q: "I will ___ ___ the supplier tomorrow. (relancer)",
              a: ["follow up"],
              why: "Follow up = relancer, faire le suivi."
            },
            {
              type: "qcm",
              q: "The workshop has been ___ until next week.",
              options: ["put off", "put out", "called on", "taken off"],
              a: 0,
              why: "Passif + put off = reporté."
            },
            {
              type: "order",
              q: "Remettez les mots dans l'ordre.",
              tokens: ["We", "need", "to", "follow", "up", "on", "the", "action", "points"],
              a: "We need to follow up on the action points",
              why: "Follow up on + sujet = assurer le suivi de."
            }
          ]
        }
      ]
    },

    B2: {
      lessons: [
        {
          id: "en-b2-l1",
          title: "Le third conditional",
          goal: "Exprimer un regret ou un passé imaginaire.",
          rule: "<strong>If + had + participe passé, would have + participe passé.</strong> On parle d'une chose qui ne s'est pas produite dans le passé : le résultat est donc imaginaire.",
          examples: [
            { t: "If we had missed the deadline, we would have lost the contract.", fr: "Si nous avions raté la date limite, nous aurions perdu le contrat." },
            { t: "She would have joined the call if she had seen the invitation.", fr: "Elle aurait rejoint l'appel si elle avait vu l'invitation." },
            { t: "If I had known, I would have warned you.", fr: "Si j'avais su, je vous aurais prévenu." }
          ],
          exercises: [
            {
              type: "qcm",
              q: "If we ___ the deadline, we would have lost the contract.",
              options: ["missed", "had missed", "would miss", "have missed"],
              a: 1,
              why: "Condition passée : had + participe passé."
            },
            {
              type: "fill",
              q: "If they ___ (to send) the data earlier, we would have finished on time.",
              a: ["had sent"],
              why: "Had + participe passé (send → sent)."
            },
            {
              type: "qcm",
              q: "She would have joined the call if she ___ the invitation.",
              options: ["saw", "had seen", "would see", "sees"],
              a: 1,
              why: "La condition est antérieure au résultat → past perfect."
            },
            {
              type: "order",
              q: "Remettez les mots dans l'ordre.",
              tokens: ["If", "I", "had", "known", "I", "would", "have", "warned", "you"],
              a: "If I had known I would have warned you",
              why: "Condition au past perfect, conséquence avec would have + participe passé."
            },
            {
              type: "qcm",
              q: "We ___ the project on time if the supplier had not failed.",
              options: ["would deliver", "would have delivered", "had delivered", "delivered"],
              a: 1,
              why: "Conséquence imaginaire dans le passé → would have + participe passé."
            }
          ]
        },
        {
          id: "en-b2-l2",
          title: "Les connecteurs de contraste",
          goal: "Nuancer un argument dans un rapport.",
          rule: "<strong>Although</strong> + proposition (sujet + verbe). <strong>Despite / in spite of</strong> + nom ou verbe en -ing. <strong>However</strong> = toutefois, en début de phrase, suivi d'une virgule. <strong>Whereas</strong> = alors que, pour comparer deux faits.",
          examples: [
            { t: "Although the budget was limited, the team delivered.", fr: "Bien que le budget fût limité, l'équipe a livré." },
            { t: "Despite the delay, the client renewed the contract.", fr: "Malgré le retard, le client a renouvelé le contrat." },
            { t: "Sales rose in France, whereas they fell in Germany.", fr: "Les ventes ont augmenté en France, alors qu'elles ont baissé en Allemagne." }
          ],
          exercises: [
            {
              type: "qcm",
              q: "___ the delay, the client renewed the contract.",
              options: ["Although", "Despite", "However", "Whereas"],
              a: 1,
              why: "Despite + nom (the delay)."
            },
            {
              type: "qcm",
              q: "The plan was approved, ___ several risks remained.",
              options: ["although", "however", "despite", "whereas"],
              a: 0,
              why: "Although + proposition complète (several risks remained)."
            },
            {
              type: "fill",
              q: "___ the bad weather, the launch went well. (2 mots)",
              a: ["in spite of"],
              why: "In spite of + nom, équivalent de despite."
            },
            {
              type: "qcm",
              q: "Sales rose in France, ___ they fell in Germany.",
              options: ["although", "despite", "whereas", "however"],
              a: 2,
              why: "Whereas compare deux faits opposés."
            },
            {
              type: "order",
              q: "Remettez les mots dans l'ordre.",
              tokens: ["Although", "the", "budget", "was", "limited", "the", "team", "delivered"],
              a: "Although the budget was limited the team delivered",
              why: "Although introduit une proposition avec sujet et verbe."
            }
          ]
        }
      ]
    },

    C1: {
      lessons: [
        {
          id: "en-c1-l1",
          title: "L'inversion après une négation",
          goal: "Écrire une phrase formelle avec emphase.",
          rule: "Quand une expression négative ou restrictive ouvre la phrase (<strong>Not only, Rarely, Little, Never, Only after…</strong>), le sujet et l'auxiliaire sont inversés, comme dans une question. Sans auxiliaire, on ajoute do/does/did.",
          examples: [
            { t: "Not only did they exceed the budget, but they also missed the deadline.", fr: "Non seulement ils ont dépassé le budget, mais ils ont aussi raté la date limite." },
            { t: "Rarely have I read such a clear report.", fr: "J'ai rarement lu un rapport aussi clair." },
            { t: "Only after the audit did we understand the real cost.", fr: "Ce n'est qu'après l'audit que nous avons compris le coût réel." }
          ],
          exercises: [
            {
              type: "qcm",
              q: "Not only ___ the budget, but the team also missed the deadline.",
              options: ["they exceeded", "did they exceed", "they did exceed", "exceeded they"],
              a: 1,
              why: "Inversion : did + sujet + verbe."
            },
            {
              type: "qcm",
              q: "Rarely ___ such a clear report.",
              options: ["have I read", "I have read", "I have been reading", "have read I"],
              a: 0,
              why: "Inversion auxiliaire + sujet après Rarely."
            },
            {
              type: "fill",
              q: "Little ___ she know that the decision was final.",
              a: ["did"],
              why: "Sans auxiliaire, on ajoute did au prétérit."
            },
            {
              type: "order",
              q: "Remettez les mots dans l'ordre.",
              tokens: ["Never", "have", "we", "seen", "such", "a", "result"],
              a: "Never have we seen such a result",
              why: "Never en tête de phrase entraîne l'inversion."
            },
            {
              type: "qcm",
              q: "Only after the audit ___ the real cost.",
              options: ["we understood", "did we understand", "we did understand", "understood we"],
              a: 1,
              why: "Only after + inversion did + sujet + verbe."
            }
          ]
        },
        {
          id: "en-c1-l2",
          title: "Le subjonctif après insist, suggest, recommend",
          goal: "Formuler une recommandation formelle.",
          rule: "Après <strong>insist, suggest, recommend, demand, request + that</strong>, on emploie la base verbale pour toutes les personnes (I / he / they <em>be, contact, review</em>). C'est la norme en anglais britannique formel ; l'anglais courant accepte parfois <em>should</em> + verbe.",
          examples: [
            { t: "The manager insisted that the report be submitted by Friday.", fr: "Le responsable a insisté pour que le rapport soit remis vendredi." },
            { t: "I suggest that he contact the client directly.", fr: "Je suggère qu'il contacte directement le client." },
            { t: "The board recommended that the contract be reviewed.", fr: "Le conseil a recommandé que le contrat soit révisé." }
          ],
          exercises: [
            {
              type: "qcm",
              q: "The manager insisted that the report ___ by Friday.",
              options: ["is", "be", "was", "will be"],
              a: 1,
              why: "Subjonctif : be, invariable."
            },
            {
              type: "qcm",
              q: "I suggest that he ___ the client directly.",
              options: ["contacts", "contact", "contacted", "will contact"],
              a: 1,
              why: "Base verbale sans -s après suggest that."
            },
            {
              type: "fill",
              q: "The board recommended that the contract ___ (to be) reviewed.",
              a: ["be"],
              why: "Subjonctif du verbe be → be."
            },
            {
              type: "qcm",
              q: "It is essential that every invoice ___ checked twice.",
              options: ["is", "be", "was", "were"],
              a: 1,
              why: "It is essential that + subjonctif."
            },
            {
              type: "order",
              q: "Remettez les mots dans l'ordre.",
              tokens: ["We", "recommend", "that", "the", "team", "review", "the", "process"],
              a: "We recommend that the team review the process",
              why: "Review reste à la base verbale, même avec the team."
            }
          ]
        }
      ]
    },

    C2: {
      lessons: [
        {
          id: "en-c2-l1",
          title: "Conditionnel mixte et inversion",
          goal: "Maîtriser les formes avancées de l'hypothèse.",
          rule: "<strong>Conditionnel mixte</strong> : la condition porte sur le passé, la conséquence sur le présent (If + had + PP, would + infinitif) ou l'inverse. <strong>Forme littéraire</strong> : Had + sujet + PP remplace If + had + PP, sans <em>if</em>.",
          examples: [
            { t: "If we had started earlier, the store would be open now.", fr: "Si nous avions commencé plus tôt, le magasin serait ouvert aujourd'hui." },
            { t: "Had we known about the supply issue, we would have prepared a contingency plan.", fr: "Si nous avions su pour le problème d'approvisionnement, nous aurions préparé un plan de secours." },
            { t: "Had the client complained, we would have reacted immediately.", fr: "Si le client s'était plaint, nous aurions réagi immédiatement." }
          ],
          exercises: [
            {
              type: "qcm",
              q: "Had we known about the supply issue, we ___ a contingency plan.",
              options: ["would prepare", "had prepared", "would have prepared", "will prepare"],
              a: 2,
              why: "Had we known = If we had known ; conséquence passée → would have + PP."
            },
            {
              type: "qcm",
              q: "___ the team worked harder, we would not be in this situation.",
              options: ["Had", "If", "Should", "Were"],
              a: 0,
              why: "Inversion sans if : Had + sujet + PP."
            },
            {
              type: "fill",
              q: "If we ___ (to start) earlier, the store would be open now.",
              a: ["had started"],
              why: "Condition passée, conséquence présente : condition au past perfect."
            },
            {
              type: "qcm",
              q: "___ I been informed, I would have acted differently.",
              options: ["Had", "If", "Have", "Should"],
              a: 0,
              why: "Had I been = If I had been."
            },
            {
              type: "order",
              q: "Remettez les mots dans l'ordre.",
              tokens: ["Had", "the", "client", "complained", "we", "would", "have", "reacted"],
              a: "Had the client complained we would have reacted",
              why: "Inversion formelle : Had + sujet + participe passé."
            }
          ]
        },
        {
          id: "en-c2-l2",
          title: "Nominalisation et style formel",
          goal: "Densifier un rapport sans perdre le sens.",
          rule: "Le style professionnel remplace souvent un verbe ou un adjectif par un nom : <em>decide → decision</em>, <em>arrive → arrival</em>, <em>grow → growth</em>. Cela densifie la phrase, mais attention aux prépositions : <em>the implementation of</em>, <em>a growth in</em>, <em>a rise in</em>.",
          examples: [
            { t: "We implemented the process quickly. → The implementation of the process was quick.", fr: "Nous avons mis en place le processus rapidement. → La mise en place du processus a été rapide." },
            { t: "Sales grew by 4 %. → There was a growth of 4 % in sales.", fr: "Les ventes ont augmenté de 4 %. → Il y a eu une croissance de 4 % des ventes." },
            { t: "The team arrived on Monday. → The team's arrival on Monday…", fr: "L'équipe est arrivée lundi. → L'arrivée de l'équipe lundi…" }
          ],
          exercises: [
            {
              type: "qcm",
              q: "The ___ of the new process reduced costs.",
              options: ["implement", "implementation", "implemented", "implementing"],
              a: 1,
              why: "Après The, il faut un nom : implementation."
            },
            {
              type: "fill",
              q: "The ___ (to arrive) of the new stock system changed our routines.",
              a: ["arrival"],
              why: "Nom dérivé du verbe arrive → arrival."
            },
            {
              type: "qcm",
              q: "There was a ___ in sales after the campaign.",
              options: ["grow", "growing", "growth", "grown"],
              a: 2,
              why: "A growth in = une croissance de."
            },
            {
              type: "order",
              q: "Remettez les mots dans l'ordre.",
              tokens: ["The", "implementation", "of", "the", "new", "process", "reduced", "costs"],
              a: "The implementation of the new process reduced costs",
              why: "Nom + of + complément : structure typique du rapport."
            },
            {
              type: "qcm",
              q: "The team carried ___ a detailed analysis before the meeting.",
              options: ["on", "out", "up", "off"],
              a: 1,
              why: "Carry out = réaliser, mener. Révision des phrasal verbs."
            }
          ]
        }
      ]
    }
  }
};
