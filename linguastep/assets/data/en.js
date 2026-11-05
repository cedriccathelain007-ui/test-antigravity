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
      },
      {
        id: "en-t-a1-13", skill: "grammar",
        q: "My office is ___ the second floor.",
        options: ["on", "in", "at", "to"],
        a: 0,
        why: "On + étage : on the second floor. At s'emploie pour un point précis (at the door)."
      },
      {
        id: "en-t-a1-14", skill: "grammar",
        q: "___ there a bank near here?",
        options: ["Is", "Are", "Do", "Have"],
        a: 0,
        why: "There is + singulier. Question : Is there a bank… ?"
      },
      {
        id: "en-t-a1-15", skill: "grammar",
        q: "I don't ___ a car.",
        options: ["have", "has", "am", "do"],
        a: 0,
        why: "Après don't, on met la base verbale : don't have."
      },
      {
        id: "en-t-a1-16", skill: "grammar",
        q: "She is ___ engineer.",
        options: ["an", "a", "the", "—"],
        a: 0,
        why: "An devant un son voyelle : an engineer. A devant un son consonne : a manager."
      },
      {
        id: "en-t-a1-17", skill: "grammar",
        q: "How much ___ this bag?",
        options: ["is", "are", "do", "does"],
        a: 0,
        why: "How much + be + nom singulier : How much is this bag?"
      },
      {
        id: "en-t-a1-18", skill: "grammar",
        q: "These ___ my colleagues.",
        options: ["are", "is", "am", "be"],
        a: 0,
        why: "These = pluriel → are. This = singulier → is."
      },
      {
        id: "en-t-a1-19", skill: "grammar",
        q: "___ you speak English?",
        options: ["Do", "Does", "Are", "Is"],
        a: 0,
        why: "Question au présent simple avec you : Do + sujet + base verbale."
      },
      {
        id: "en-t-a1-20", skill: "grammar",
        q: "The meeting is ___ Tuesday.",
        options: ["on", "in", "at", "to"],
        a: 0,
        why: "On + jour : on Tuesday. In + mois ou année, at + heure."
      },
      {
        id: "en-t-a1-21", skill: "grammar",
        q: "I go to work ___ train.",
        options: ["by", "with", "in", "on"],
        a: 0,
        why: "By + moyen de transport : by train, by bus, by car. À pied se dit on foot."
      },
      {
        id: "en-t-a1-22", skill: "grammar",
        q: "He ___ not work on Fridays.",
        options: ["does", "is", "do", "has"],
        a: 0,
        why: "Négation au présent simple, 3e personne : he does not work (doesn't work)."
      },
      {
        id: "en-t-a1-23", skill: "grammar",
        q: "There ___ a problem with the order.",
        options: ["is", "are", "have", "be"],
        a: 0,
        why: "There is + nom singulier (a problem)."
      },
      {
        id: "en-t-a1-24", skill: "grammar",
        q: "My manager ___ in Paris.",
        options: ["works", "work", "working", "is work"],
        a: 0,
        why: "3e personne du singulier au présent simple : works."
      },
      {
        id: "en-t-a1-25", skill: "grammar",
        q: "___ is the meeting? — At 10 a.m.",
        options: ["When", "Where", "Who", "What"],
        a: 0,
        why: "When = quand (temps). Where = où (lieu)."
      },
      {
        id: "en-t-a1-26", skill: "grammar",
        q: "We ___ a meeting every Monday.",
        options: ["have", "has", "are", "is"],
        a: 0,
        why: "We + have (base verbale). Has s'emploie seulement avec he, she, it."
      },
      {
        id: "en-t-a1-27", skill: "grammar",
        q: "The shop ___ at 8 a.m. and closes at 8 p.m.",
        options: ["opens", "open", "opening", "is open"],
        a: 0,
        why: "The shop = 3e personne du singulier → opens."
      },
      {
        id: "en-t-a1-28", skill: "grammar",
        q: "I work ___ Monday to Friday.",
        options: ["from", "at", "in", "on"],
        a: 0,
        why: "From … to … pour une plage de temps : from Monday to Friday."
      },
      {
        id: "en-t-a1-29", skill: "grammar",
        q: "___ you like a coffee? — Yes, please.",
        options: ["Would", "Do", "Are", "Have"],
        a: 0,
        why: "Would you like… ? sert à proposer poliment. Do you like… ? demande un goût, pas une proposition."
      },
      {
        id: "en-t-a1-30", skill: "grammar",
        q: "My sister works here. ___ name is Sarah.",
        options: ["Her", "His", "She", "Their"],
        a: 0,
        why: "Possessif féminin : her name. His = son (à lui)."
      },
      {
        id: "en-t-a1-31", skill: "grammar",
        q: "Can I ___ your pen, please?",
        options: ["borrow", "lend", "lending", "borrowing"],
        a: 0,
        why: "Borrow = emprunter (on reçoit). Lend = prêter (on donne). Après can, base verbale."
      },
      {
        id: "en-t-a1-32", skill: "vocab",
        q: "A person who buys things in a shop is a ___.",
        options: ["customer", "supplier", "manager", "driver"],
        a: 0,
        why: "Customer = client. Supplier = fournisseur ; manager = responsable."
      },
      {
        id: "en-t-a1-33", skill: "vocab",
        q: "The document you get after paying is a ___.",
        options: ["receipt", "quotation", "contract", "invoice"],
        a: 0,
        why: "Receipt = ticket de caisse, remis après paiement. Invoice = facture, envoyée avant ou après."
      },
      {
        id: "en-t-a1-34", skill: "vocab",
        q: "The person who leads the team is the ___.",
        options: ["manager", "client", "customer", "visitor"],
        a: 0,
        why: "Manager = responsable d'équipe."
      },
      {
        id: "en-t-a1-35", skill: "vocab",
        q: "How much does it ___?",
        options: ["cost", "pay", "spend", "buy"],
        a: 0,
        why: "Cost = coûter (le produit coûte). Pay et spend ont un sujet personnel."
      },
      {
        id: "en-t-a1-36", skill: "vocab",
        q: "Monday, Tuesday, ___.",
        options: ["Wednesday", "Thursday", "Friday", "Sunday"],
        a: 0,
        why: "Ordre des jours : Monday, Tuesday, Wednesday, Thursday, Friday."
      },
      {
        id: "en-t-a1-37", skill: "vocab",
        q: "Our products are on the ___.",
        options: ["shelves", "doors", "walls", "tills"],
        a: 0,
        why: "Shelf au pluriel = shelves (f devient ves). Les produits sont sur les étagères."
      },
      {
        id: "en-t-a1-38", skill: "vocab",
        q: "See you ___, at the same time.",
        options: ["tomorrow", "yesterday", "ago", "last"],
        a: 0,
        why: "Tomorrow = demain. Yesterday = hier ; ago et last renvoient au passé."
      },
      {
        id: "en-t-a1-39", skill: "vocab",
        q: "The shop is ___ today: it is a public holiday.",
        options: ["closed", "close", "closing", "closes"],
        a: 0,
        why: "Closed = fermé (adjectif). Close est le verbe : on ne dit pas the shop is close."
      },
      {
        id: "en-t-a1-40", skill: "vocab",
        q: "I'll send you an ___ with the details.",
        options: ["email", "email address", "letter post", "call"],
        a: 0,
        why: "Send an email = envoyer un courriel. Email address = l'adresse, pas le message."
      },
      {
        id: "en-t-a1-41", skill: "vocab",
        q: "The ___ on the label is four euros.",
        options: ["price", "cost", "value", "money"],
        a: 0,
        why: "Price = prix affiché sur l'étiquette. Cost = ce que cela coûte ; value = valeur."
      },
      {
        id: "en-t-a1-42", skill: "vocab",
        q: "It's 9 ___ and the shop is open.",
        options: ["o'clock", "hours", "time", "clock"],
        a: 0,
        why: "Heure pleine : 9 o'clock. Hours = des durées ; clock = l'horloge."
      },
      {
        id: "en-t-a1-43", skill: "reading",
        passage: "Notice: Mon-épicerie is closed on 1 May. We open again on 2 May at 8 a.m.",
        q: "When does the shop open again?",
        options: ["1 May at 8 a.m.", "2 May at 8 a.m.", "2 May at 7 p.m.", "1 May at 7 p.m."],
        a: 1,
        why: "Le texte dit : « We open again on 2 May at 8 a.m. »."
      },
      {
        id: "en-t-a1-44", skill: "reading",
        passage: "Business card: Paul Martin — Store Manager — Mon-épicerie Lille — 06 12 34 56 78.",
        q: "What is Paul's job?",
        options: ["Store manager", "Customer", "Driver", "Cashier"],
        a: 0,
        why: "La carte indique « Store Manager » sous son nom."
      },
      {
        id: "en-t-a1-45", skill: "reading",
        passage: "Hi, I'm at the station. I arrive at the shop at 9.30. See you soon. Marc",
        q: "Where is Marc now?",
        options: ["At the shop", "At the station", "At home", "At the bank"],
        a: 1,
        why: "« I'm at the station » : il est à la gare."
      },
      {
        id: "en-t-a1-46", skill: "reading",
        passage: "Price list: apples 2 € per kilo — bread 1.50 € — milk 1 €.",
        q: "How much is the bread?",
        options: ["1 €", "1.50 €", "2 €", "3 €"],
        a: 1,
        why: "Le bread est à 1.50 € sur la liste."
      },
      {
        id: "en-t-a1-47", skill: "reading",
        passage: "Sign on the door: Staff entrance. Please ring the bell.",
        q: "What must staff do?",
        options: ["Ring the bell", "Wait outside", "Call the manager", "Use the shop door"],
        a: 0,
        why: "Le panneau demande « Please ring the bell »."
      },
      {
        id: "en-t-a1-48", skill: "reading",
        passage: "Opening hours: Monday to Friday, 8 a.m. to 8 p.m. Saturday, 8 a.m. to 7 p.m. Sunday, closed.",
        q: "What time does the shop close on Saturday?",
        options: ["8 p.m.", "7 p.m.", "8 a.m.", "It is closed"],
        a: 1,
        why: "« Saturday, 8 a.m. to 7 p.m. » : fermeture à 19 h."
      },
      {
        id: "en-t-a1-49", skill: "grammar",
        q: "My sister ___ in a bank in the city centre.",
        options: ["work", "works", "working", "is work"],
        a: 1,
        why: "Présent simple, 3e personne du singulier : le verbe prend un -s (she works)."
      },
      {
        id: "en-t-a1-50", skill: "grammar",
        q: "___ there a lift in this building?",
        options: ["Is", "Are", "Do", "Does"],
        a: 0,
        why: "There is + singulier. La question se forme en inversant : Is there… ?"
      },
      {
        id: "en-t-a1-51", skill: "grammar",
        q: "She ___ a team meeting every Monday morning.",
        options: ["have", "has", "is", "having"],
        a: 1,
        why: "Have devient has à la 3e personne du singulier (she has)."
      },
      {
        id: "en-t-a1-52", skill: "grammar",
        q: "The shop opens ___ 8 o'clock.",
        options: ["at", "in", "on", "to"],
        a: 0,
        why: "At + heure : at 8 o'clock. In s'emploie pour un mois ou une année, on pour un jour."
      },
      {
        id: "en-t-a1-53", skill: "grammar",
        q: "The meeting is ___ Monday morning.",
        options: ["in", "on", "at", "for"],
        a: 1,
        why: "On + jour de la semaine : on Monday. On garde on avec morning quand le jour est précisé."
      },
      {
        id: "en-t-a1-54", skill: "grammar",
        q: "This is my ___ office. She works next door.",
        options: ["manager", "manager's", "managers", "manager of"],
        a: 1,
        why: "Le possessif 's marque l'appartenance : my manager's office = le bureau de ma responsable."
      },
      {
        id: "en-t-a1-55", skill: "grammar",
        q: "___ you like coffee or tea?",
        options: ["Do", "Are", "Does", "Is"],
        a: 0,
        why: "Présent simple avec you : Do + sujet + base verbale (Do you like…)."
      },
      {
        id: "en-t-a1-56", skill: "grammar",
        q: "He ___ not work on Fridays. He is off.",
        options: ["do", "does", "is", "are"],
        a: 1,
        why: "Négation au présent simple, 3e personne : he doesn't work (does not)."
      },
      {
        id: "en-t-a1-57", skill: "grammar",
        q: "How many people ___ in the shop?",
        options: ["work", "works", "working", "is work"],
        a: 0,
        why: "People est un pluriel : le verbe reste à la base verbale (people work)."
      },
      {
        id: "en-t-a1-58", skill: "grammar",
        q: "The printer is ___ the desk, next to the window.",
        options: ["on", "in", "at", "to"],
        a: 0,
        why: "On = sur une surface : on the desk. In = à l'intérieur de."
      },
      {
        id: "en-t-a1-59", skill: "grammar",
        q: "There ___ some milk in the fridge.",
        options: ["is", "are", "have", "be"],
        a: 0,
        why: "Milk est indénombrable : there is some milk, au singulier."
      },
      {
        id: "en-t-a1-60", skill: "grammar",
        q: "___ is the price of this printer?",
        options: ["How much", "How many", "What much", "How price"],
        a: 0,
        why: "How much s'emploie pour demander un prix ou une quantité indénombrable."
      },
      {
        id: "en-t-a1-61", skill: "vocab",
        q: "Choose the person who leads a team:",
        options: ["a manager", "a customer", "a delivery", "a receipt"],
        a: 0,
        why: "A manager = un responsable, une responsable. A customer = un client."
      },
      {
        id: "en-t-a1-62", skill: "vocab",
        q: "We pay a monthly ___ to use the software.",
        options: ["subscription", "salary", "signature", "shelf"],
        a: 0,
        why: "A subscription = un abonnement. A salary = un salaire."
      },
      {
        id: "en-t-a1-63", skill: "vocab",
        q: "Please ___ the document and send it back to me.",
        options: ["sign", "sing", "signed", "signal"],
        a: 0,
        why: "Sign = signer. Attention : sing = chanter, un faux ami auditif."
      },
      {
        id: "en-t-a1-64", skill: "vocab",
        q: "The opposite of 'expensive' is ___.",
        options: ["cheap", "rich", "large", "slow"],
        a: 0,
        why: "Cheap = bon marché. Rich = riche (personne), pas un prix."
      },
      {
        id: "en-t-a1-65", skill: "vocab",
        q: "You need a ___ to enter the building.",
        options: ["badge", "stamp", "coin", "map"],
        a: 0,
        why: "A badge = un badge, un insigne. A stamp = un timbre."
      },
      {
        id: "en-t-a1-66", skill: "vocab",
        q: "I ___ with the new plan.",
        options: ["agree", "accept", "approve", "accord"],
        a: 0,
        why: "Agree with = être d'accord avec. Accept et approve sont transitifs : accept the plan."
      },
      {
        id: "en-t-a1-67", skill: "vocab",
        q: "A ___ is the piece of paper that shows you paid.",
        options: ["receipt", "recipe", "quotation", "salary"],
        a: 0,
        why: "Receipt = reçu, ticket de caisse. Recipe = recette de cuisine : faux ami."
      },
      {
        id: "en-t-a1-68", skill: "vocab",
        q: "Choose the room where a team meets:",
        options: ["the meeting room", "the stockroom", "the checkout", "the car park"],
        a: 0,
        why: "The meeting room = la salle de réunion. The stockroom = la réserve."
      },
      {
        id: "en-t-a1-69", skill: "reading",
        passage: "Hi Tom, I'm in a meeting until 11 a.m. Can we speak at 2 p.m. instead? Thanks, Sarah.",
        q: "When can Sarah speak?",
        options: ["At 2 p.m.", "At 11 a.m.", "At 9 a.m.", "Tomorrow"],
        a: 0,
        why: "« Can we speak at 2 p.m. instead? » : elle propose 14 h."
      },
      {
        id: "en-t-a1-70", skill: "reading",
        passage: "Notice: the staff entrance is closed on Monday. Please use the main door.",
        q: "Which door do staff use on Monday?",
        options: ["The main door", "The staff entrance", "The back door", "No door"],
        a: 0,
        why: "« the staff entrance is closed on Monday. Please use the main door. »"
      },
      {
        id: "en-t-a1-71", skill: "reading",
        passage: "Order: 3 boxes of tea and 2 bags of coffee. Delivery: Thursday morning.",
        q: "What is delivered on Thursday?",
        options: ["Tea and coffee", "Only tea", "Only coffee", "Nothing"],
        a: 0,
        why: "La commande comprend le thé et le café ; la livraison est prévue jeudi."
      },
      {
        id: "en-t-a1-72", skill: "reading",
        passage: "The shop opens at 8 a.m. and closes at 8 p.m. from Monday to Saturday. It is closed on Sunday.",
        q: "When is the shop closed?",
        options: ["On Sunday", "On Saturday", "On Monday", "At 8 p.m."],
        a: 0,
        why: "« It is closed on Sunday » : fermé le dimanche."
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
      },
      {
        id: "en-t-a2-13", skill: "grammar",
        q: "I ___ to the supplier last week.",
        options: ["spoke", "speak", "have spoken", "speaking"],
        a: 0,
        why: "Last week = passé terminé → past simple. Speak est irrégulier : speak, spoke, spoken."
      },
      {
        id: "en-t-a2-14", skill: "grammar",
        q: "We ___ this supplier for five years.",
        options: ["know", "have known", "knew", "are knowing"],
        a: 1,
        why: "For + durée avec une situation qui continue → present perfect (have known)."
      },
      {
        id: "en-t-a2-15", skill: "grammar",
        q: "This delivery is ___ than the last one.",
        options: ["fast", "faster", "fastest", "more fast"],
        a: 1,
        why: "Comparatif de supériorité des adjectifs courts : fast → faster than."
      },
      {
        id: "en-t-a2-16", skill: "grammar",
        q: "It is the ___ shop in the city.",
        options: ["big", "bigger", "biggest", "most big"],
        a: 2,
        why: "Superlatif des adjectifs courts : the biggest (doublement du g)."
      },
      {
        id: "en-t-a2-17", skill: "grammar",
        q: "I ___ call you back in ten minutes.",
        options: ["will", "am", "do", "have"],
        a: 0,
        why: "Décision prise au moment où l'on parle : will + base verbale."
      },
      {
        id: "en-t-a2-18", skill: "grammar",
        q: "Look at the sky: it ___ rain.",
        options: ["is going to", "going to", "will to", "is go to"],
        a: 0,
        why: "Going to + infinitif pour une prévision fondée sur ce que l'on voit."
      },
      {
        id: "en-t-a2-19", skill: "grammar",
        q: "How ___ sugar do you take?",
        options: ["much", "many", "few", "a"],
        a: 0,
        why: "How much + indénombrable (sugar). How many + dénombrable pluriel."
      },
      {
        id: "en-t-a2-20", skill: "grammar",
        q: "We don't have ___ time before the meeting.",
        options: ["much", "many", "few", "a lot"],
        a: 0,
        why: "Time est indénombrable : not much time. Many s'emploie avec le pluriel."
      },
      {
        id: "en-t-a2-21", skill: "grammar",
        q: "You ___ show your badge at the entrance.",
        options: ["must", "must to", "are must", "have"],
        a: 0,
        why: "Must + base verbale, sans to : you must show."
      },
      {
        id: "en-t-a2-22", skill: "grammar",
        q: "I ___ work at 6 a.m. on Mondays.",
        options: ["have to", "has to", "must to", "am have to"],
        a: 0,
        why: "Have to exprime une obligation externe. Avec I, on emploie have to."
      },
      {
        id: "en-t-a2-23", skill: "grammar",
        q: "There is ___ milk in the fridge.",
        options: ["some", "any", "many", "a"],
        a: 0,
        why: "Phrase affirmative : some + indénombrable. Any s'emploie en négation et en question."
      },
      {
        id: "en-t-a2-24", skill: "grammar",
        q: "She is the person ___ handles complaints.",
        options: ["who", "which", "whose", "where"],
        a: 0,
        why: "Who reprend une personne sujet. Which reprend une chose."
      },
      {
        id: "en-t-a2-25", skill: "grammar",
        q: "If you ___ the form, we will process the order.",
        options: ["complete", "completes", "will complete", "completing"],
        a: 0,
        why: "First conditional : if + présent simple, will + infinitif. Jamais will après if."
      },
      {
        id: "en-t-a2-26", skill: "grammar",
        q: "I was ___ when you called.",
        options: ["driving", "drive", "drove", "driven"],
        a: 0,
        why: "Past continuous : was + verbe en -ing, action en cours dans le passé."
      },
      {
        id: "en-t-a2-27", skill: "grammar",
        q: "They ___ the shop in 2019.",
        options: ["opened", "open", "have opened", "opening"],
        a: 0,
        why: "Date passée précise (in 2019) → past simple, pas present perfect."
      },
      {
        id: "en-t-a2-28", skill: "grammar",
        q: "The meeting ___ at 9 and finished at 10.",
        options: ["started", "starts", "has started", "starting"],
        a: 0,
        why: "Récit au passé : les deux verbes sont au past simple (started, finished)."
      },
      {
        id: "en-t-a2-29", skill: "grammar",
        q: "Could you ___ me the price list?",
        options: ["send", "sending", "sent", "sends"],
        a: 0,
        why: "Après could, base verbale : could you send."
      },
      {
        id: "en-t-a2-30", skill: "grammar",
        q: "There aren't ___ chairs in the meeting room.",
        options: ["enough", "enough of", "many enough", "some"],
        a: 0,
        why: "Enough se place avant le nom : enough chairs. Assez de…"
      },
      {
        id: "en-t-a2-31", skill: "vocab",
        q: "We need to ___ the delivery for tomorrow morning.",
        options: ["arrange", "arrive", "attend", "announce"],
        a: 0,
        why: "Arrange a delivery = organiser une livraison. Arrive = arriver."
      },
      {
        id: "en-t-a2-32", skill: "vocab",
        q: "We offer a 10 % ___ on large orders.",
        options: ["discount", "price", "bill", "tax"],
        a: 0,
        why: "Discount = remise. Bill = note à payer ; tax = taxe."
      },
      {
        id: "en-t-a2-33", skill: "vocab",
        q: "The ___ for the project is Friday.",
        options: ["deadline", "dateline", "delay", "date"],
        a: 0,
        why: "Deadline = date limite. Delay = retard."
      },
      {
        id: "en-t-a2-34", skill: "vocab",
        q: "Please ___ in the form and return it to me.",
        options: ["fill", "write", "put", "make"],
        a: 0,
        why: "Fill in a form = remplir un formulaire (britannique ; américain : fill out)."
      },
      {
        id: "en-t-a2-35", skill: "vocab",
        q: "I'll ___ you up at the station at 8.",
        options: ["pick", "take", "put", "look"],
        a: 0,
        why: "Pick up = aller chercher quelqu'un. Take up = occuper ; look up = chercher une information."
      },
      {
        id: "en-t-a2-36", skill: "vocab",
        q: "We are out of ___: there is no coffee left.",
        options: ["stock", "price", "order", "bill"],
        a: 0,
        why: "Out of stock = en rupture de stock."
      },
      {
        id: "en-t-a2-37", skill: "vocab",
        q: "Can you ___ the invoice by Friday?",
        options: ["pay", "spend", "cost", "charge"],
        a: 0,
        why: "Pay an invoice = payer une facture. Spend s'emploie pour une dépense personnelle."
      },
      {
        id: "en-t-a2-38", skill: "vocab",
        q: "The ___ of the meeting is to plan the launch.",
        options: ["purpose", "profit", "product", "project"],
        a: 0,
        why: "Purpose = but, objectif. Profit = bénéfice."
      },
      {
        id: "en-t-a2-39", skill: "vocab",
        q: "He works the night ___ at the shop.",
        options: ["shift", "ship", "shelf", "site"],
        a: 0,
        why: "Shift = équipe, poste de travail (night shift = équipe de nuit)."
      },
      {
        id: "en-t-a2-40", skill: "vocab",
        q: "Please ___ me know if you can come.",
        options: ["let", "make", "do", "say"],
        a: 0,
        why: "Let me know = faites-moi savoir. On ne dit pas make me know."
      },
      {
        id: "en-t-a2-41", skill: "vocab",
        q: "I'm ___ for the marketing budget.",
        options: ["responsible", "response", "responsibility", "respond"],
        a: 0,
        why: "Be responsible for = être responsable de. Responsibility est le nom."
      },
      {
        id: "en-t-a2-42", skill: "vocab",
        q: "We need to ___ the meeting room for Thursday.",
        options: ["book", "borrow", "buy", "bring"],
        a: 0,
        why: "Book a room = réserver une salle."
      },
      {
        id: "en-t-a2-43", skill: "reading",
        passage: "Hi Nina, the order will arrive on Thursday morning. Please check the quantities before signing the delivery note. Thanks, Sam.",
        q: "What should Nina check?",
        options: ["The price", "The quantities", "The address", "The invoice"],
        a: 1,
        why: "« Please check the quantities before signing the delivery note »."
      },
      {
        id: "en-t-a2-44", skill: "reading",
        passage: "Staff training: Wednesday at 2 p.m., meeting room B. Bring your laptop.",
        q: "What should staff bring?",
        options: ["A laptop", "The delivery note", "A badge", "A form"],
        a: 0,
        why: "Le message dit : « Bring your laptop »."
      },
      {
        id: "en-t-a2-45", skill: "reading",
        passage: "We have moved the stockroom to the first floor. The old room is now the staff kitchen.",
        q: "What is on the first floor now?",
        options: ["The stockroom", "The kitchen", "The office", "The shop"],
        a: 0,
        why: "« We have moved the stockroom to the first floor » : c'est le nouvel emplacement."
      },
      {
        id: "en-t-a2-46", skill: "reading",
        passage: "Our new opening hours start on Monday: 8 a.m. to 9 p.m., from Monday to Saturday.",
        q: "When do the new hours start?",
        options: ["Monday", "Saturday", "Sunday", "Next month"],
        a: 0,
        why: "« Our new opening hours start on Monday »."
      },
      {
        id: "en-t-a2-47", skill: "reading",
        passage: "Invoice 204: 12 boxes of coffee, total 48 €. Payment within 30 days.",
        q: "How much is the invoice?",
        options: ["12 €", "30 €", "48 €", "204 €"],
        a: 2,
        why: "Le total indiqué est 48 €. 204 est le numéro de facture, 30 le délai de paiement."
      },
      {
        id: "en-t-a2-48", skill: "reading",
        passage: "Hi team, the lift is out of order until Friday. Please use the stairs.",
        q: "What is out of order?",
        options: ["The lift", "The stairs", "The door", "The till"],
        a: 0,
        why: "« the lift is out of order » : l'ascenseur est en panne."
      },
      {
        id: "en-t-a2-49", skill: "grammar",
        q: "We ___ the report yesterday afternoon.",
        options: ["finish", "finished", "finishes", "finishing"],
        a: 1,
        why: "Yesterday appelle le prétérit : finished (verbe régulier en -ed)."
      },
      {
        id: "en-t-a2-50", skill: "grammar",
        q: "She ___ to Birmingham last week.",
        options: ["goes", "went", "goed", "gone"],
        a: 1,
        why: "Prétérit irrégulier de go : went. Gone est le participe passé, utilisé avec have."
      },
      {
        id: "en-t-a2-51", skill: "grammar",
        q: "This office is ___ than the old one.",
        options: ["big", "bigger", "biggest", "more big"],
        a: 1,
        why: "Comparatif des adjectifs courts : big → bigger (doublement de la consonne)."
      },
      {
        id: "en-t-a2-52", skill: "grammar",
        q: "I ___ my emails yet. I'll do it after lunch.",
        options: ["didn't answer", "haven't answered", "don't answer", "am not answering"],
        a: 1,
        why: "Yet accompagne le present perfect : I haven't answered yet."
      },
      {
        id: "en-t-a2-53", skill: "grammar",
        q: "You ___ wear a badge in the warehouse. It's the rule.",
        options: ["must", "shouldn't", "can't", "might"],
        a: 0,
        why: "Must exprime une obligation : le port du badge est obligatoire."
      },
      {
        id: "en-t-a2-54", skill: "grammar",
        q: "We ___ meet the client tomorrow at 10.",
        options: ["are going to", "go", "going", "will going"],
        a: 0,
        why: "Going to + base verbale exprime un projet déjà décidé."
      },
      {
        id: "en-t-a2-55", skill: "grammar",
        q: "There isn't ___ time before the deadline.",
        options: ["many", "much", "few", "a lot"],
        a: 1,
        why: "Time est indénombrable : much. Many et few vont avec des noms dénombrables."
      },
      {
        id: "en-t-a2-56", skill: "grammar",
        q: "He is responsible ___ the budget.",
        options: ["of", "for", "to", "with"],
        a: 1,
        why: "Responsible for = responsable de. Responsible to = sous l'autorité de."
      },
      {
        id: "en-t-a2-57", skill: "grammar",
        q: "I ___ in this company for three years.",
        options: ["work", "worked", "have worked", "am working"],
        a: 2,
        why: "For + durée avec une situation qui continue : present perfect (have worked)."
      },
      {
        id: "en-t-a2-58", skill: "grammar",
        q: "The invoice ___ sent yesterday.",
        options: ["was", "were", "is", "be"],
        a: 0,
        why: "Passif au prétérit : l'invoice (singulier) was sent."
      },
      {
        id: "en-t-a2-59", skill: "grammar",
        q: "If it ___ tomorrow, we will cancel the visit.",
        options: ["rains", "will rain", "rained", "raining"],
        a: 0,
        why: "Premier conditionnel : if + présent simple, puis will + base verbale. Pas de will après if."
      },
      {
        id: "en-t-a2-60", skill: "grammar",
        q: "She speaks English ___ than her colleague.",
        options: ["good", "better", "best", "well"],
        a: 1,
        why: "Comparatif irrégulier de well : better."
      },
      {
        id: "en-t-a2-61", skill: "vocab",
        q: "A ___ is a plan showing when things will happen.",
        options: ["schedule", "salary", "signature", "shelf"],
        a: 0,
        why: "A schedule = un planning, un calendrier de travail."
      },
      {
        id: "en-t-a2-62", skill: "vocab",
        q: "We need to ___ the meeting until next week.",
        options: ["postpone", "post", "pose", "promote"],
        a: 0,
        why: "Postpone = reporter à plus tard. Promote = promouvoir."
      },
      {
        id: "en-t-a2-63", skill: "vocab",
        q: "Please find the report ___ to this email.",
        options: ["attached", "joined", "included", "closed"],
        a: 0,
        why: "Formule d'usage : please find attached… (veuillez trouver ci-joint)."
      },
      {
        id: "en-t-a2-64", skill: "vocab",
        q: "The ___ is the person who buys something.",
        options: ["customer", "manager", "supplier", "colleague"],
        a: 0,
        why: "A customer = un client. A supplier = un fournisseur."
      },
      {
        id: "en-t-a2-65", skill: "vocab",
        q: "Our ___ delivers the goods every Tuesday.",
        options: ["supplier", "customer", "employer", "accountant"],
        a: 0,
        why: "A supplier = un fournisseur, celui qui livre les marchandises."
      },
      {
        id: "en-t-a2-66", skill: "vocab",
        q: "I need to ___ a complaint about the delivery.",
        options: ["make", "do", "take", "say"],
        a: 0,
        why: "Make a complaint = déposer une réclamation. Do ne se combine pas avec complaint."
      },
      {
        id: "en-t-a2-67", skill: "grammar",
        q: "___ you ever been to Manchester?",
        options: ["Have", "Do", "Are", "Did"],
        a: 0,
        why: "Ever accompagne le present perfect d'expérience : Have you ever been… ?"
      },
      {
        id: "en-t-a2-68", skill: "vocab",
        q: "A ___ is the money paid to someone for their work.",
        options: ["salary", "invoice", "budget", "receipt"],
        a: 0,
        why: "A salary = un salaire. An invoice = une facture."
      },
      {
        id: "en-t-a2-69", skill: "reading",
        passage: "From: Paul. Subject: Friday's meeting. The meeting is moved from 9 a.m. to 10.30 a.m. because the room is being painted. Same agenda.",
        q: "Why is the meeting later?",
        options: ["The room is being painted", "Paul is away", "The agenda changed", "The client is late"],
        a: 0,
        why: "« because the room is being painted » : la salle est repeinte."
      },
      {
        id: "en-t-a2-70", skill: "reading",
        passage: "Stock report: tea 12 boxes (minimum 20). Coffee 40 bags (minimum 30). Order tea today.",
        q: "Which product must be ordered?",
        options: ["Tea", "Coffee", "Both", "Neither"],
        a: 0,
        why: "Le thé est sous le minimum (12 pour 20) ; le café est au-dessus (40 pour 30)."
      },
      {
        id: "en-t-a2-71", skill: "reading",
        passage: "Training: new staff spend two days on the shop floor with a mentor, then one day in the classroom.",
        q: "How long is the training?",
        options: ["Three days", "Two days", "One day", "One week"],
        a: 0,
        why: "Deux jours en magasin + un jour en salle = trois jours."
      },
      {
        id: "en-t-a2-72", skill: "reading",
        passage: "Email: I can't attend Thursday's call. Could you send me the notes? Best, Maria.",
        q: "What does Maria ask for?",
        options: ["The notes", "A new call", "The agenda", "A holiday"],
        a: 0,
        why: "« Could you send me the notes? » : elle demande le compte rendu."
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
      },
      {
        id: "en-t-b1-13", skill: "grammar",
        q: "Although the price was high, we ___ the order.",
        options: ["placed", "place", "placing", "are place"],
        a: 0,
        why: "Le récit est au passé (was) : placed. Although introduit une concession."
      },
      {
        id: "en-t-b1-14", skill: "grammar",
        q: "Despite ___ late, she finished the report.",
        options: ["arriving", "arrive", "arrived", "to arrive"],
        a: 0,
        why: "Despite + verbe en -ing (ou despite + nom). To et la base verbale sont impossibles."
      },
      {
        id: "en-t-b1-15", skill: "grammar",
        q: "The report ___ every Monday by the finance team.",
        options: ["is checked", "checks", "checking", "checked"],
        a: 0,
        why: "Passif au présent : is + participe passé, car le rapport subit l'action."
      },
      {
        id: "en-t-b1-16", skill: "grammar",
        q: "I ___ working here since 2020.",
        options: ["have been", "am", "was", "had"],
        a: 0,
        why: "Since + date de départ avec une action qui continue : present perfect continuous (have been working)."
      },
      {
        id: "en-t-b1-17", skill: "grammar",
        q: "We ___ the supplier tomorrow morning.",
        options: ["are meeting", "meet to", "meeting", "will met"],
        a: 0,
        why: "Rendez-vous fixé : présent continu à valeur de futur (are meeting)."
      },
      {
        id: "en-t-b1-18", skill: "grammar",
        q: "He asked me ___ I had sent the invoice.",
        options: ["if", "that", "what", "which"],
        a: 0,
        why: "Question indirecte fermée au discours indirect : if (ou whether)."
      },
      {
        id: "en-t-b1-19", skill: "grammar",
        q: "You ___ smoke in the stockroom: it is strictly forbidden.",
        options: ["mustn't", "don't have to", "mustn't to", "needn't to"],
        a: 0,
        why: "Mustn't = interdiction. Don't have to = absence d'obligation, ce n'est pas la même chose."
      },
      {
        id: "en-t-b1-20", skill: "grammar",
        q: "It's the shop ___ opened last month.",
        options: ["which", "who", "whose", "where"],
        a: 0,
        why: "Which reprend une chose (the shop). Who reprend une personne."
      },
      {
        id: "en-t-b1-21", skill: "grammar",
        q: "I'm looking forward to ___ from you.",
        options: ["hearing", "hear", "heard", "hears"],
        a: 0,
        why: "Look forward to + verbe en -ing : to est ici une préposition."
      },
      {
        id: "en-t-b1-22", skill: "grammar",
        q: "She suggested ___ the meeting to Friday.",
        options: ["moving", "move", "to move", "moved"],
        a: 0,
        why: "Suggest + verbe en -ing (suggest moving). On ne dit pas suggest to move."
      },
      {
        id: "en-t-b1-23", skill: "grammar",
        q: "We ___ have checked the address before sending.",
        options: ["should", "should to", "must to", "would to"],
        a: 0,
        why: "Should + have + participe passé exprime un regret ou un reproche sur le passé."
      },
      {
        id: "en-t-b1-24", skill: "grammar",
        q: "The order ___ yet.",
        options: ["hasn't arrived", "didn't arrive", "hasn't arrive", "not arrived"],
        a: 0,
        why: "Yet s'emploie avec le present perfect en anglais britannique : hasn't arrived yet."
      },
      {
        id: "en-t-b1-25", skill: "grammar",
        q: "If I ___ you, I would ask for a discount.",
        options: ["were", "am", "was being", "be"],
        a: 0,
        why: "Avec be au second conditionnel, on emploie were à toutes les personnes (If I were you)."
      },
      {
        id: "en-t-b1-26", skill: "grammar",
        q: "By the end of March last year, the team ___ the target.",
        options: ["had reached", "has reached", "reaches", "reaching"],
        a: 0,
        why: "By + date passée situe l'action avant un repère passé : past perfect (had reached)."
      },
      {
        id: "en-t-b1-27", skill: "grammar",
        q: "The new process is ___ than the old one.",
        options: ["more efficient", "efficienter", "most efficient", "efficient more"],
        a: 0,
        why: "Adjectif long : comparatif avec more (more efficient than)."
      },
      {
        id: "en-t-b1-28", skill: "grammar",
        q: "Neither the manager ___ the staff were informed.",
        options: ["nor", "or", "and", "but"],
        a: 0,
        why: "Corrélation neither … nor : ni l'un ni l'autre."
      },
      {
        id: "en-t-b1-29", skill: "grammar",
        q: "I'd rather ___ the meeting on Monday.",
        options: ["have", "having", "to have", "had"],
        a: 0,
        why: "Would rather + base verbale, sans to : I'd rather have."
      },
      {
        id: "en-t-b1-30", skill: "grammar",
        q: "The shop ___ if we don't fix the till.",
        options: ["will close", "closes will", "would close", "close"],
        a: 0,
        why: "First conditional : if + présent, will + infinitif. Ici la conséquence est will close."
      },
      {
        id: "en-t-b1-31", skill: "vocab",
        q: "The supplier will ___ the order on Friday.",
        options: ["confirm", "confirmation", "confirmed", "confirming"],
        a: 0,
        why: "Confirm = verbe (confirmer). Confirmation est le nom. Après will, base verbale."
      },
      {
        id: "en-t-b1-32", skill: "vocab",
        q: "We need to ___ into the cause of the delay.",
        options: ["look", "look after", "look up", "look for"],
        a: 0,
        why: "Look into = examiner, enquêter. Look after = s'occuper de ; look for = chercher."
      },
      {
        id: "en-t-b1-33", skill: "vocab",
        q: "Please ___ up the invoice by email.",
        options: ["follow", "follows", "following", "followed"],
        a: 0,
        why: "Follow up = relancer, faire le suivi. Après please, base verbale."
      },
      {
        id: "en-t-b1-34", skill: "vocab",
        q: "We have ___ out of coffee again.",
        options: ["run", "ran", "running", "runs"],
        a: 0,
        why: "Run out of = ne plus avoir. Au present perfect : have run out of."
      },
      {
        id: "en-t-b1-35", skill: "vocab",
        q: "She ___ a complaint about the delivery.",
        options: ["made", "did", "took", "gave"],
        a: 0,
        why: "Make a complaint = déposer une réclamation. On ne dit pas do a complaint."
      },
      {
        id: "en-t-b1-36", skill: "vocab",
        q: "We must ___ the deadline.",
        options: ["meet", "do", "arrive", "reach to"],
        a: 0,
        why: "Meet a deadline = respecter la date limite."
      },
      {
        id: "en-t-b1-37", skill: "vocab",
        q: "The manager will ___ the problem with the supplier.",
        options: ["deal with", "deal", "deal to", "deal for"],
        a: 0,
        why: "Deal with = traiter, régler un problème."
      },
      {
        id: "en-t-b1-38", skill: "vocab",
        q: "We need to ___ a decision by Friday.",
        options: ["make", "do", "have", "put"],
        a: 0,
        why: "Make a decision = prendre une décision. L'anglais britannique accepte aussi take a decision."
      },
      {
        id: "en-t-b1-39", skill: "vocab",
        q: "The company will ___ ten new staff next month.",
        options: ["take on", "take off", "take up", "take out"],
        a: 0,
        why: "Take on = recruter. Take off = décoller ; take up = occuper."
      },
      {
        id: "en-t-b1-40", skill: "vocab",
        q: "The report ___ the main risks.",
        options: ["outlines", "outline of", "outlining", "outlined by"],
        a: 0,
        why: "Outline = présenter les grandes lignes. Le sujet est the report : outlines."
      },
      {
        id: "en-t-b1-41", skill: "vocab",
        q: "Sales have ___ by 10 % this year.",
        options: ["increased", "increase", "increasing", "increases"],
        a: 0,
        why: "Present perfect : have + participe passé (increased)."
      },
      {
        id: "en-t-b1-42", skill: "vocab",
        q: "We are ___ with the current supplier.",
        options: ["dissatisfied", "dissatisfaction", "dissatisfy", "unsatisfy"],
        a: 0,
        why: "Be dissatisfied with = être mécontent de. Dissatisfaction est le nom."
      },
      {
        id: "en-t-b1-43", skill: "reading",
        passage: "The delivery scheduled for Tuesday will arrive on Thursday because of a transport issue. We apologise for the inconvenience.",
        q: "Why is the delivery late?",
        options: ["A transport issue", "A price change", "A missing order", "A public holiday"],
        a: 0,
        why: "« because of a transport issue » : la cause est le transport."
      },
      {
        id: "en-t-b1-44", skill: "reading",
        passage: "Since we introduced the online booking form, phone calls have fallen by half. The team now spends more time with customers in the shop.",
        q: "What has happened since the change?",
        options: ["Phone calls have fallen", "Sales have fallen", "The team is smaller", "Customers complain more"],
        a: 0,
        why: "« phone calls have fallen by half » : les appels ont diminué de moitié."
      },
      {
        id: "en-t-b1-45", skill: "reading",
        passage: "The new fridge is more efficient, but it is noisier. Staff have asked for it to be moved away from the tills.",
        q: "What do staff want?",
        options: ["To move the fridge", "To buy a new fridge", "To close the tills", "To work elsewhere"],
        a: 0,
        why: "« asked for it to be moved away from the tills » : ils veulent le déplacer."
      },
      {
        id: "en-t-b1-46", skill: "reading",
        passage: "Training on the new till system is compulsory for all staff. Sessions run on Tuesday and Thursday, 5–6 p.m.",
        q: "Who must attend the training?",
        options: ["All staff", "Managers only", "New staff only", "Cashiers only"],
        a: 0,
        why: "« compulsory for all staff » : la formation est obligatoire pour tout le personnel."
      },
      {
        id: "en-t-b1-47", skill: "reading",
        passage: "Our supplier has raised prices by 8 %. We are looking for a second supplier to keep our margins.",
        q: "Why are they looking for a second supplier?",
        options: ["To keep margins", "To open a shop", "To reduce staff", "To change products"],
        a: 0,
        why: "« to keep our margins » : pour préserver les marges."
      },
      {
        id: "en-t-b1-48", skill: "reading",
        passage: "The audit recommends locking the stockroom at night. Only the duty manager will hold the key.",
        q: "Who will have the key?",
        options: ["The duty manager", "All staff", "The supplier", "The auditor"],
        a: 0,
        why: "« Only the duty manager will hold the key »."
      },
      {
        id: "en-t-b1-49", skill: "grammar",
        q: "I ___ in Paris in 2019, then I moved to Lyon.",
        options: ["lived", "have lived", "live", "am living"],
        a: 0,
        why: "Date passée et situation terminée : prétérit. Le present perfect ne va pas avec une date précise."
      },
      {
        id: "en-t-b1-50", skill: "grammar",
        q: "She ___ for the company since 2020.",
        options: ["works", "worked", "has worked", "is working"],
        a: 2,
        why: "Since + point de départ, situation qui continue : present perfect (has worked)."
      },
      {
        id: "en-t-b1-51", skill: "grammar",
        q: "If I ___ more time, I would check every figure.",
        options: ["have", "had", "will have", "would have"],
        a: 1,
        why: "Deuxième conditionnel : if + prétérit, would + base verbale."
      },
      {
        id: "en-t-b1-52", skill: "grammar",
        q: "The report ___ by the finance team last week.",
        options: ["checked", "was checked", "is checked", "has checked"],
        a: 1,
        why: "Passif au prétérit : le rapport a été vérifié (was checked)."
      },
      {
        id: "en-t-b1-53", skill: "grammar",
        q: "He said he ___ the email the day before.",
        options: ["sends", "sent", "had sent", "will send"],
        a: 2,
        why: "Discours indirect au passé : le passé simple devient past perfect (had sent)."
      },
      {
        id: "en-t-b1-54", skill: "grammar",
        q: "We are looking forward ___ you next week.",
        options: ["to meet", "to meeting", "meeting", "meet"],
        a: 1,
        why: "Look forward to + verbe en -ing : to est ici une préposition."
      },
      {
        id: "en-t-b1-55", skill: "grammar",
        q: "The deadline is tight; ___, we should finish on time.",
        options: ["however", "although", "despite", "moreover"],
        a: 0,
        why: "However marque le contraste et peut ouvrir une proposition après un point-virgule."
      },
      {
        id: "en-t-b1-56", skill: "grammar",
        q: "This is the warehouse ___ we store the stock.",
        options: ["which", "where", "who", "when"],
        a: 1,
        why: "Where remplace un lieu : the warehouse where we store…"
      },
      {
        id: "en-t-b1-57", skill: "grammar",
        q: "The goods ___ yet. We are still waiting.",
        options: ["haven't arrived", "didn't arrive", "aren't arriving", "not arrived"],
        a: 0,
        why: "Yet + present perfect négatif : they haven't arrived yet."
      },
      {
        id: "en-t-b1-58", skill: "grammar",
        q: "If you ___ this button, the machine stops.",
        options: ["press", "will press", "pressed", "pressing"],
        a: 0,
        why: "Condition réelle : if + présent simple, puis présent simple pour la conséquence."
      },
      {
        id: "en-t-b1-59", skill: "grammar",
        q: "She is used ___ under pressure.",
        options: ["to work", "to working", "work", "working"],
        a: 1,
        why: "Be used to + -ing = avoir l'habitude de. Ne pas confondre avec used to + base verbale (autrefois)."
      },
      {
        id: "en-t-b1-60", skill: "grammar",
        q: "The company ___ twenty shops since 2015.",
        options: ["has opened", "have opened", "is opening", "was opening"],
        a: 0,
        why: "Since + present perfect. The company est singulier : has opened."
      },
      {
        id: "en-t-b1-61", skill: "vocab",
        q: "We need to ___ down the costs this year.",
        options: ["cut", "bring", "take", "put"],
        a: 0,
        why: "Cut down = réduire. Cut down on costs = réduire les coûts."
      },
      {
        id: "en-t-b1-62", skill: "vocab",
        q: "The project is behind ___ because of the strike.",
        options: ["schedule", "time", "plan", "clock"],
        a: 0,
        why: "Behind schedule = en retard sur le planning. Expression figée."
      },
      {
        id: "en-t-b1-63", skill: "vocab",
        q: "We need to ___ a meeting with the client.",
        options: ["set up", "put up", "take up", "turn up"],
        a: 0,
        why: "Set up a meeting = organiser une réunion. Turn up = arriver, se présenter."
      },
      {
        id: "en-t-b1-64", skill: "vocab",
        q: "We have to ___ the deadline, whatever happens.",
        options: ["meet", "reach", "arrive", "touch"],
        a: 0,
        why: "Meet a deadline = respecter une échéance. Reach s'emploie pour un objectif."
      },
      {
        id: "en-t-b1-65", skill: "vocab",
        q: "The team ___ a new product last month.",
        options: ["launched", "lunched", "lanced", "landed"],
        a: 0,
        why: "Launch = lancer (un produit). Lunch = déjeuner : faux ami."
      },
      {
        id: "en-t-b1-66", skill: "vocab",
        q: "I'll ___ you up to date after the call.",
        options: ["bring", "take", "make", "give"],
        a: 0,
        why: "Bring someone up to date = mettre quelqu'un au courant."
      },
      {
        id: "en-t-b1-67", skill: "vocab",
        q: "Sales have ___ by 12 % this year.",
        options: ["raised", "risen", "arisen", "lifted"],
        a: 1,
        why: "Rise est intransitif : sales have risen. Raise est transitif : raise prices."
      },
      {
        id: "en-t-b1-68", skill: "vocab",
        q: "We are ___ with the supplier about the delay.",
        options: ["in touch", "on touch", "at touch", "for touch"],
        a: 0,
        why: "Be in touch with = être en contact avec."
      },
      {
        id: "en-t-b1-69", skill: "reading",
        passage: "Memo: from 1 March, all expense claims must be submitted within 30 days. Claims received later will not be reimbursed.",
        q: "What happens to a claim sent after 30 days?",
        options: ["It is refused", "It is paid twice", "It is sent to finance", "Nothing changes"],
        a: 0,
        why: "« will not be reimbursed » : la note de frais n'est pas remboursée."
      },
      {
        id: "en-t-b1-70", skill: "reading",
        passage: "Survey: 62 % of staff said the new booking system saved them time; 21 % found it slower; 17 % saw no difference.",
        q: "What did most staff say?",
        options: ["It saved time", "It was slower", "It made no difference", "They never used it"],
        a: 0,
        why: "62 % est la majorité : « saved them time »."
      },
      {
        id: "en-t-b1-71", skill: "reading",
        passage: "Email: The client has asked for two changes: a later delivery date and a smaller first order. We can accept the date but not the quantity.",
        q: "Which request can we accept?",
        options: ["The later date", "The smaller order", "Both requests", "Neither request"],
        a: 0,
        why: "« We can accept the date but not the quantity »."
      },
      {
        id: "en-t-b1-72", skill: "reading",
        passage: "Notice: the lift will be out of service on Tuesday from 9 to 12. Please use the stairs. Deliveries should use the rear entrance.",
        q: "Where should deliveries go on Tuesday morning?",
        options: ["To the rear entrance", "To the lift", "To the main entrance", "Up the stairs"],
        a: 0,
        why: "« Deliveries should use the rear entrance » : l'entrée arrière."
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
        options: ["discuss", "discuss about", "discuss on", "discuss over"],
        a: 0,
        why: "Discuss + objet direct, sans préposition : c'est un faux ami de « discuter de »."
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
      },
      {
        id: "en-t-b2-13", skill: "grammar",
        q: "If we had left earlier, we ___ the train.",
        options: ["wouldn't have missed", "wouldn't miss", "hadn't missed", "won't miss"],
        a: 0,
        why: "Third conditional : if + had + participe, would have + participe (négatif : wouldn't have missed)."
      },
      {
        id: "en-t-b2-14", skill: "grammar",
        q: "The figures look wrong. They ___ checked before the meeting.",
        options: ["must have been", "must have", "must be checking", "must"],
        a: 0,
        why: "Déduction sur le passé au passif : must have been + participe passé."
      },
      {
        id: "en-t-b2-15", skill: "grammar",
        q: "She denied ___ the email.",
        options: ["sending", "send", "to send", "sent"],
        a: 0,
        why: "Deny + verbe en -ing : deny sending. On ne dit pas deny to send."
      },
      {
        id: "en-t-b2-16", skill: "grammar",
        q: "The proposal, ___ was submitted in June, is still under review.",
        options: ["which", "that", "what", "who"],
        a: 0,
        why: "Relative non restrictive entre virgules : which. That est impossible après une virgule."
      },
      {
        id: "en-t-b2-17", skill: "grammar",
        q: "No sooner had the report been published ___ the figures changed.",
        options: ["than", "then", "when", "that"],
        a: 0,
        why: "No sooner … than : dès que. Then indique la conséquence, pas la corrélation."
      },
      {
        id: "en-t-b2-18", skill: "grammar",
        q: "Had we invested earlier, we ___ more customers.",
        options: ["would have attracted", "would attract", "had attracted", "will attract"],
        a: 0,
        why: "Had we invested = If we had invested ; conséquence passée : would have + participe."
      },
      {
        id: "en-t-b2-19", skill: "grammar",
        q: "It's high time we ___ this process.",
        options: ["reviewed", "review", "to review", "reviewing"],
        a: 0,
        why: "It's high time + prétérit : cela exprime une urgence avec une action pas encore faite."
      },
      {
        id: "en-t-b2-20", skill: "grammar",
        q: "By next June, we ___ the new system.",
        options: ["will have installed", "will install", "have installed", "are installing"],
        a: 0,
        why: "Future perfect : action terminée avant une date future (by next June)."
      },
      {
        id: "en-t-b2-21", skill: "grammar",
        q: "The team ___ working on the project for six months when the client left.",
        options: ["had been", "has been", "was", "were"],
        a: 0,
        why: "Past perfect continuous : had been + -ing, durée avant un repère passé."
      },
      {
        id: "en-t-b2-22", skill: "grammar",
        q: "___ the bad weather, the launch went ahead.",
        options: ["In spite of", "Although", "Despite of", "Even"],
        a: 0,
        why: "In spite of + nom (ou -ing). Although introduit une proposition complète ; « despite of » n'existe pas."
      },
      {
        id: "en-t-b2-23", skill: "grammar",
        q: "Sales rose in the north, ___ fell in the south.",
        options: ["whereas", "although", "despite", "therefore"],
        a: 0,
        why: "Whereas marque le contraste entre deux propositions. Therefore exprime la conséquence."
      },
      {
        id: "en-t-b2-24", skill: "grammar",
        q: "The new system allows orders ___ faster.",
        options: ["to be processed", "processing", "process", "be processed"],
        a: 0,
        why: "Allow + objet + to be + participe passé (passif à l'infinitif)."
      },
      {
        id: "en-t-b2-25", skill: "grammar",
        q: "We would have signed the contract if the terms ___ clearer.",
        options: ["had been", "were", "have been", "are"],
        a: 0,
        why: "Third conditional : if + had been, would have + participe."
      },
      {
        id: "en-t-b2-26", skill: "grammar",
        q: "He is said ___ the best negotiator in the team.",
        options: ["to be", "be", "being", "that he is"],
        a: 0,
        why: "Structure passive de report : is said to be."
      },
      {
        id: "en-t-b2-27", skill: "grammar",
        q: "The warehouse ___ at weekends.",
        options: ["isn't staffed", "doesn't staff", "isn't staffing", "not staffed"],
        a: 0,
        why: "Passif négatif au présent : isn't + participe passé (staffed)."
      },
      {
        id: "en-t-b2-28", skill: "grammar",
        q: "I wish we ___ the contract more carefully.",
        options: ["had read", "read", "have read", "would read"],
        a: 0,
        why: "I wish + past perfect exprime un regret sur le passé : had read."
      },
      {
        id: "en-t-b2-29", skill: "grammar",
        q: "The more we automate, ___ the process becomes.",
        options: ["the faster", "the fast", "faster", "the fastest"],
        a: 0,
        why: "Comparatif corrélé : the more …, the faster …"
      },
      {
        id: "en-t-b2-30", skill: "grammar",
        q: "It is no use ___ about the delay now.",
        options: ["complaining", "complain", "to complain", "complained"],
        a: 0,
        why: "It is no use + verbe en -ing : cela ne sert à rien de…"
      },
      {
        id: "en-t-b2-31", skill: "vocab",
        q: "The two companies signed a ___ after six months of talks.",
        options: ["contract", "contact", "contrast", "contest"],
        a: 0,
        why: "Contract = contrat. Contact = contact : c'est un faux ami proche à l'écrit."
      },
      {
        id: "en-t-b2-32", skill: "vocab",
        q: "We need to ___ out the new pricing policy to all stores.",
        options: ["roll", "roll in", "roll up", "roll over"],
        a: 0,
        why: "Roll out = déployer progressivement. Roll up = enrouler ; roll over = reporter."
      },
      {
        id: "en-t-b2-33", skill: "vocab",
        q: "The supplier agreed to ___ the old packaging.",
        options: ["phase out", "phase in", "phase off", "phase up"],
        a: 0,
        why: "Phase out = supprimer progressivement. Phase in = introduire progressivement."
      },
      {
        id: "en-t-b2-34", skill: "vocab",
        q: "She ___ a proposal to reduce waste.",
        options: ["put forward", "put off", "put up", "put out"],
        a: 0,
        why: "Put forward = présenter une proposition. Put off = reporter."
      },
      {
        id: "en-t-b2-35", skill: "vocab",
        q: "We must ___ up the pros and cons before deciding.",
        options: ["weigh", "weight", "wait", "watch"],
        a: 0,
        why: "Weigh up = peser le pour et le contre. Weight est le nom (poids)."
      },
      {
        id: "en-t-b2-36", skill: "vocab",
        q: "The group will ___ its smaller stores next year.",
        options: ["take over", "take off", "take in", "take up"],
        a: 0,
        why: "Take over = reprendre, racheter une activité. Take off = décoller."
      },
      {
        id: "en-t-b2-37", skill: "vocab",
        q: "\"Actually, the meeting is on Thursday, not Tuesday.\" Which word can replace \"Actually\"?",
        options: ["In fact", "Currently", "Eventually", "At present"],
        a: 0,
        why: "Actually = en fait (faux ami). Currently = actuellement ; eventually = finalement."
      },
      {
        id: "en-t-b2-38", skill: "vocab",
        q: "The team ___ the survey in three regions.",
        options: ["carried out", "carried on", "carried off", "carried away"],
        a: 0,
        why: "Carry out = réaliser, mener à bien. Carry on = continuer."
      },
      {
        id: "en-t-b2-39", skill: "vocab",
        q: "The results were ___ our expectations.",
        options: ["below", "beneath", "under", "down"],
        a: 0,
        why: "Below expectations = en dessous des attentes. Beneath est plus concret (sous un objet)."
      },
      {
        id: "en-t-b2-40", skill: "vocab",
        q: "The manager asked for a ___ of the costs.",
        options: ["breakdown", "break down", "breaking", "breaks"],
        a: 0,
        why: "Breakdown (nom) = décomposition, ventilation. Break down est le verbe."
      },
      {
        id: "en-t-b2-41", skill: "vocab",
        q: "We are ___ to offer you a 5 % discount.",
        options: ["pleased", "pleasant", "pleasing", "pleasure"],
        a: 0,
        why: "Pleased = content, satisfait (pour une personne). Pleasant = agréable (pour une chose)."
      },
      {
        id: "en-t-b2-42", skill: "vocab",
        q: "The project is ___ schedule because of the strike.",
        options: ["behind", "after", "late", "under"],
        a: 0,
        why: "Behind schedule = en retard sur le planning. Ahead of schedule = en avance."
      },
      {
        id: "en-t-b2-43", skill: "reading",
        passage: "Customer satisfaction rose after we added a second checkout, while complaints about waiting times fell by a third. Staff, however, report more pressure at peak hours.",
        q: "What is the drawback?",
        options: ["More pressure at peak hours", "Fewer checkouts", "Lower satisfaction", "Longer queues"],
        a: 0,
        why: "« Staff, however, report more pressure at peak hours » : « however » introduit le point négatif."
      },
      {
        id: "en-t-b2-44", skill: "reading",
        passage: "Our contract with the current supplier ends in June. The purchasing team has shortlisted three alternatives, but none matches the current delivery times.",
        q: "What is the problem with the alternatives?",
        options: ["Their delivery times", "Their prices", "Their location", "Their size"],
        a: 0,
        why: "« none matches the current delivery times » : aucun n'égale les délais actuels."
      },
      {
        id: "en-t-b2-45", skill: "reading",
        passage: "The training budget has been cut by 15 %. Managers may now approve only courses directly linked to a current project.",
        q: "Which courses can managers approve?",
        options: ["Those linked to a current project", "All courses", "Only language courses", "No courses"],
        a: 0,
        why: "« only courses directly linked to a current project » : la restriction est explicite."
      },
      {
        id: "en-t-b2-46", skill: "reading",
        passage: "Because of new regulations, all invoices must now include the supplier's registration number. Invoices without it will be returned.",
        q: "What happens to invoices without the number?",
        options: ["They are returned", "They are paid late", "They are accepted", "They are archived"],
        a: 0,
        why: "« Invoices without it will be returned » : elles sont renvoyées."
      },
      {
        id: "en-t-b2-47", skill: "reading",
        passage: "The board approved the merger, subject to approval by the competition authority. The deal is expected to close in the autumn.",
        q: "What is still needed?",
        options: ["Approval by the competition authority", "Approval by staff", "A new board", "A bank loan"],
        a: 0,
        why: "« subject to approval by the competition authority » : sous réserve de cet accord."
      },
      {
        id: "en-t-b2-48", skill: "reading",
        passage: "Our online sales grew by 40 % last year while shop sales stayed flat. The company therefore plans to invest in the website rather than in new stores.",
        q: "Where will the company invest?",
        options: ["In the website", "In new stores", "In advertising", "In staff"],
        a: 0,
        why: "« invest in the website rather than in new stores »."
      },
      {
        id: "en-t-b2-49", skill: "grammar",
        q: "If we had checked the stock, we ___ the order.",
        options: ["wouldn't miss", "wouldn't have missed", "hadn't missed", "won't miss"],
        a: 1,
        why: "Troisième conditionnel : if + past perfect, would have + participe passé."
      },
      {
        id: "en-t-b2-50", skill: "grammar",
        q: "If I had taken the job in 2021, I ___ in London now.",
        options: ["would live", "would have lived", "will live", "lived"],
        a: 0,
        why: "Conditionnel mixte : condition passée (had taken), conséquence présente (would live now)."
      },
      {
        id: "en-t-b2-51", skill: "grammar",
        q: "The report ___ by Friday at the latest.",
        options: ["must finish", "must be finished", "must been finished", "must finishing"],
        a: 1,
        why: "Passif avec modal : must be + participe passé (must be finished)."
      },
      {
        id: "en-t-b2-52", skill: "grammar",
        q: "The delay ___ by the customs office.",
        options: ["is believed to cause", "is believed to have caused", "believes to cause", "is believing to cause"],
        a: 1,
        why: "Passif de report : is believed to have caused (on pense que le bureau des douanes a causé…)."
      },
      {
        id: "en-t-b2-53", skill: "grammar",
        q: "She asked me whether I ___ the figures.",
        options: ["check", "had checked", "have checked", "will check"],
        a: 1,
        why: "Question rapportée au passé : le verbe recule d'un temps (had checked)."
      },
      {
        id: "en-t-b2-54", skill: "grammar",
        q: "Not only ___ late, but he also forgot the slides.",
        options: ["he was", "was he", "he is", "is he"],
        a: 1,
        why: "Not only en tête de phrase impose l'inversion sujet-verbe : was he."
      },
      {
        id: "en-t-b2-55", skill: "grammar",
        q: "___ the bad weather, the event went ahead.",
        options: ["Despite", "Although", "However", "Whereas"],
        a: 0,
        why: "Despite + groupe nominal. Although et whereas introduisent une proposition complète."
      },
      {
        id: "en-t-b2-56", skill: "grammar",
        q: "We would rather the supplier ___ us before shipping.",
        options: ["informs", "informed", "would inform", "inform"],
        a: 1,
        why: "Would rather + prétérit pour exprimer un souhait sur le présent : we would rather he informed us."
      },
      {
        id: "en-t-b2-57", skill: "grammar",
        q: "By the time the client arrived, we ___ the presentation.",
        options: ["finished", "have finished", "had finished", "were finishing"],
        a: 2,
        why: "By the time + prétérit : l'action antérieure se met au past perfect (had finished)."
      },
      {
        id: "en-t-b2-58", skill: "grammar",
        q: "The contract, ___ was signed in May, expires next year.",
        options: ["that", "which", "what", "who"],
        a: 1,
        why: "Proposition relative non déterminative : on emploie which, jamais that, après une virgule."
      },
      {
        id: "en-t-b2-59", skill: "grammar",
        q: "Hardly ___ the meeting when the fire alarm rang.",
        options: ["we had started", "had we started", "we started", "have we started"],
        a: 1,
        why: "Hardly en tête de phrase entraîne l'inversion : hardly had we started…"
      },
      {
        id: "en-t-b2-60", skill: "grammar",
        q: "It is essential that every order ___ checked twice.",
        options: ["is", "be", "was", "will be"],
        a: 1,
        why: "Subjonctif obligatif après it is essential that : be checked."
      },
      {
        id: "en-t-b2-61", skill: "vocab",
        q: "We need to ___ the risks before signing.",
        options: ["assess", "assist", "assert", "assign"],
        a: 0,
        why: "Assess = évaluer. Assist = aider, assert = affirmer."
      },
      {
        id: "en-t-b2-62", skill: "vocab",
        q: "The team is working ___ a tight deadline.",
        options: ["to", "on", "at", "for"],
        a: 0,
        why: "Work to a deadline = travailler avec une échéance. On dit aussi work against a deadline."
      },
      {
        id: "en-t-b2-63", skill: "vocab",
        q: "We must ___ by the terms of the contract.",
        options: ["abide", "adhere", "comply", "follow"],
        a: 0,
        why: "Abide by = respecter. Adhere s'emploie avec to, comply avec with."
      },
      {
        id: "en-t-b2-64", skill: "vocab",
        q: "The manager ___ the blame on the supplier.",
        options: ["laid", "lied", "lay", "lain"],
        a: 0,
        why: "Lay the blame on = faire porter la faute à. Prétérit de lay : laid."
      },
      {
        id: "en-t-b2-65", skill: "vocab",
        q: "The figures are ___ with what we expected.",
        options: ["consistent", "persistent", "insistent", "resistant"],
        a: 0,
        why: "Consistent with = cohérent avec. Les trois autres adjectifs n'ont pas ce sens."
      },
      {
        id: "en-t-b2-66", skill: "vocab",
        q: "The team prepared a ___ plan before the launch.",
        options: ["contingency", "continuity", "convenience", "consistency"],
        a: 0,
        why: "A contingency plan = un plan de secours, prévu pour un imprévu."
      },
      {
        id: "en-t-b2-67", skill: "vocab",
        q: "The two departments have agreed to ___ resources.",
        options: ["pool", "pull", "push", "pack"],
        a: 0,
        why: "Pool resources = mettre des ressources en commun."
      },
      {
        id: "en-t-b2-68", skill: "vocab",
        q: "Her presentation was ___; nobody asked a question.",
        options: ["convincing", "convinced", "convicting", "conventional"],
        a: 0,
        why: "Convincing décrit ce qui convainc ; convinced décrit la personne convaincue."
      },
      {
        id: "en-t-b2-69", skill: "reading",
        passage: "Quarterly review: online sales grew by 18 %, while in-store sales fell by 4 %. The board has approved a second fulfilment centre, but only if the trend continues for two more quarters.",
        q: "What is the condition for the new centre?",
        options: ["The trend continues", "Sales fall further", "The board meets again", "Staff agree"],
        a: 0,
        why: "« only if the trend continues for two more quarters »."
      },
      {
        id: "en-t-b2-70", skill: "reading",
        passage: "Email: following your complaint, we have traced the error to a labelling fault at our depot. We are sending replacement stock today and waiving the delivery charge.",
        q: "What have they done?",
        options: ["Sent replacement stock", "Cancelled the order", "Charged for delivery", "Closed the depot"],
        a: 0,
        why: "« sending replacement stock today and waiving the delivery charge » : stock de remplacement, livraison offerte."
      },
      {
        id: "en-t-b2-71", skill: "reading",
        passage: "Report: the pilot reduced errors by 30 %, but the sample was small and limited to one region. Further testing is needed before a national roll-out.",
        q: "What does the report advise?",
        options: ["Further testing", "A national roll-out", "Stopping the pilot", "Changing region"],
        a: 0,
        why: "« Further testing is needed before a national roll-out »."
      },
      {
        id: "en-t-b2-72", skill: "reading",
        passage: "Minutes: the committee noted that the new rota had improved cover at weekends. However, two members questioned the cost, and a decision was postponed until June.",
        q: "Why was the decision postponed?",
        options: ["Cost concerns", "Poor weekend cover", "Missing members", "A new rota"],
        a: 0,
        why: "« two members questioned the cost » : la question du coût a repoussé la décision."
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
      },
      {
        id: "en-t-c1-13", skill: "grammar",
        q: "Only when the audit was complete ___ the true cost.",
        options: ["did we learn", "we learned", "we did learn", "learned we"],
        a: 0,
        why: "Only when + inversion de l'auxiliaire : did we learn (did + base verbale)."
      },
      {
        id: "en-t-c1-14", skill: "grammar",
        q: "Should you ___ further information, please contact me.",
        options: ["require", "requires", "required", "requiring"],
        a: 0,
        why: "Conditionnel formel sans if : Should you require = If you should require. Base verbale après should."
      },
      {
        id: "en-t-c1-15", skill: "grammar",
        q: "The recommendation ___ by the board is still under discussion.",
        options: ["made", "making", "make", "makes"],
        a: 0,
        why: "Proposition participiale au passif : made by the board = qui a été faite par le conseil."
      },
      {
        id: "en-t-c1-16", skill: "grammar",
        q: "Having ___ the report, she sent it to the client.",
        options: ["finished", "finish", "finishes", "finishing"],
        a: 0,
        why: "Having + participe passé marque une action antérieure : après avoir terminé."
      },
      {
        id: "en-t-c1-17", skill: "grammar",
        q: "The committee, ___ members were appointed in May, meets quarterly.",
        options: ["whose", "who", "which", "whom"],
        a: 0,
        why: "Whose marque l'appartenance : dont les membres."
      },
      {
        id: "en-t-c1-18", skill: "grammar",
        q: "The data ___ we based our conclusion were incomplete.",
        options: ["on which", "which", "that", "where"],
        a: 0,
        why: "Base something on something → on which. La préposition reste en tête."
      },
      {
        id: "en-t-c1-19", skill: "grammar",
        q: "Not until the invoice was paid ___ the order dispatched.",
        options: ["was", "were", "is", "did"],
        a: 0,
        why: "Not until en tête de phrase entraîne l'inversion : was the order dispatched (passif)."
      },
      {
        id: "en-t-c1-20", skill: "grammar",
        q: "The board recommended that the policy ___ reviewed annually.",
        options: ["be", "is", "was", "will be"],
        a: 0,
        why: "Subjonctif après recommend that : base verbale, au passif be reviewed."
      },
      {
        id: "en-t-c1-21", skill: "grammar",
        q: "The results were better ___ expected.",
        options: ["than", "that", "as", "from"],
        a: 0,
        why: "Comparatif : better than. On ne dit pas better that."
      },
      {
        id: "en-t-c1-22", skill: "grammar",
        q: "The contract is due ___ signed next week.",
        options: ["to be", "be", "being", "for"],
        a: 0,
        why: "Be due to be + participe passé : doit être signé."
      },
      {
        id: "en-t-c1-23", skill: "grammar",
        q: "There is little ___ can be done at this stage.",
        options: ["that", "which", "who", "what"],
        a: 0,
        why: "Après little, on emploie that comme relatif, pas which."
      },
      {
        id: "en-t-c1-24", skill: "grammar",
        q: "She is the only person ___ the details.",
        options: ["to know", "knowing", "knows", "know"],
        a: 0,
        why: "The only + nom + infinitif : the only person to know."
      },
      {
        id: "en-t-c1-25", skill: "grammar",
        q: "___ the deadline was tight, the team delivered on time.",
        options: ["Although", "Despite", "In spite", "However"],
        a: 0,
        why: "Although + proposition complète (sujet + verbe). Despite et in spite of introduisent un nom."
      },
      {
        id: "en-t-c1-26", skill: "grammar",
        q: "Not only ___ the deadline missed, but the budget was also exceeded.",
        options: ["was", "were", "did", "had"],
        a: 0,
        why: "Not only en tête de phrase entraîne l'inversion : was the deadline missed (passif)."
      },
      {
        id: "en-t-c1-27", skill: "grammar",
        q: "Hardly ___ the meeting started when the fire alarm rang.",
        options: ["had", "has", "did", "was"],
        a: 0,
        why: "Hardly … when, avec past perfect inversé : had the meeting started."
      },
      {
        id: "en-t-c1-28", skill: "grammar",
        q: "The more data we collect, the ___ the analysis becomes.",
        options: ["more reliable", "reliable", "most reliable", "reliably"],
        a: 0,
        why: "Comparatif corrélé : the more …, the more reliable …"
      },
      {
        id: "en-t-c1-29", skill: "grammar",
        q: "We would rather the decision ___ postponed.",
        options: ["were", "be", "is", "was"],
        a: 0,
        why: "Would rather + prétérit (were) pour exprimer un souhait sur le présent."
      },
      {
        id: "en-t-c1-30", skill: "grammar",
        q: "Of the two options, the second is ___ one.",
        options: ["the more expensive", "more expensive", "the most expensive", "most expensive"],
        a: 0,
        why: "Comparaison entre deux éléments : the more expensive one. Le superlatif sert pour trois éléments ou plus."
      },
      {
        id: "en-t-c1-31", skill: "vocab",
        q: "The team must ___ the risks before launch.",
        options: ["mitigate", "militate", "mediate", "migrate"],
        a: 0,
        why: "Mitigate = atténuer, réduire. Militate = plaider (militate against)."
      },
      {
        id: "en-t-c1-32", skill: "vocab",
        q: "We carried out due ___ on the supplier.",
        options: ["diligence", "diligent", "diligently", "indulgence"],
        a: 0,
        why: "Due diligence = audit préalable, vérifications approfondies."
      },
      {
        id: "en-t-c1-33", skill: "vocab",
        q: "The process was ___ to remove duplication.",
        options: ["streamlined", "stream", "streaming", "streams"],
        a: 0,
        why: "Streamline = simplifier, rationaliser un processus."
      },
      {
        id: "en-t-c1-34", skill: "vocab",
        q: "Staff ___ has fallen since the new manager arrived.",
        options: ["attrition", "attribution", "attention", "attitude"],
        a: 0,
        why: "Attrition = départs progressifs, usure des effectifs (staff attrition)."
      },
      {
        id: "en-t-c1-35", skill: "vocab",
        q: "We need a ___ plan in case the supplier fails.",
        options: ["contingency", "continuity", "convenience", "currency"],
        a: 0,
        why: "Contingency plan = plan de secours. Business continuity désigne la continuité d'activité."
      },
      {
        id: "en-t-c1-36", skill: "vocab",
        q: "The main ___ in the process is the manual approval.",
        options: ["bottleneck", "backlog", "bottle", "backup"],
        a: 0,
        why: "Bottleneck = goulot d'étranglement. Backlog = arriéré de tâches."
      },
      {
        id: "en-t-c1-37", skill: "vocab",
        q: "The company must comply ___ the new regulations.",
        options: ["with", "to", "for", "on"],
        a: 0,
        why: "Comply with = respecter une règle. On ne dit pas comply to."
      },
      {
        id: "en-t-c1-38", skill: "vocab",
        q: "The audit found several ___ of non-compliance.",
        options: ["instances", "instants", "insistence", "distances"],
        a: 0,
        why: "Instance = cas, occurrence. Instants = des instants (temps)."
      },
      {
        id: "en-t-c1-39", skill: "vocab",
        q: "The proposal was ___ on the grounds that it was too costly.",
        options: ["turned down", "turned up", "turned out", "turned in"],
        a: 0,
        why: "Turn down = refuser. Turn out = se révéler ; turn up = arriver."
      },
      {
        id: "en-t-c1-40", skill: "vocab",
        q: "This decision could have serious ___ for the whole group.",
        options: ["implications", "applications", "imitations", "invitations"],
        a: 0,
        why: "Implications = conséquences, répercussions."
      },
      {
        id: "en-t-c1-41", skill: "vocab",
        q: "The launch ___ with the holiday period.",
        options: ["coincided", "coincidence", "coinciding", "coincides"],
        a: 0,
        why: "Coincide with = coïncider avec. Le récit est au passé : coincided."
      },
      {
        id: "en-t-c1-42", skill: "vocab",
        q: "The report was ___ by an independent expert.",
        options: ["scrutinised", "scrutiny", "scrutinising", "scrutinise"],
        a: 0,
        why: "Scrutinise = examiner en détail. Scrutiny est le nom."
      },
      {
        id: "en-t-c1-43", skill: "reading",
        passage: "The consultation showed strong support for the plan among store managers, but resistance among warehouse staff, who fear longer shifts. The report suggests a phased rollout with a review after three months.",
        q: "What does the report suggest?",
        options: ["A phased rollout", "Cancelling the plan", "Longer shifts", "A new consultation"],
        a: 0,
        why: "« a phased rollout with a review after three months » : déploiement par étapes."
      },
      {
        id: "en-t-c1-44", skill: "reading",
        passage: "Although the new supplier is cheaper, its quality record is weaker: two deliveries were rejected last year. Procurement recommends a trial period with strict quality checks.",
        q: "Why is procurement cautious?",
        options: ["The quality record", "The price", "The location", "The delivery speed"],
        a: 0,
        why: "« its quality record is weaker » : deux livraisons refusées l'an dernier."
      },
      {
        id: "en-t-c1-45", skill: "reading",
        passage: "The company's carbon target covers its own stores but not its supply chain, which accounts for most emissions. Campaigners argue the target is therefore incomplete.",
        q: "What do campaigners criticise?",
        options: ["The scope of the target", "The cost of the target", "The speed of delivery", "The number of stores"],
        a: 0,
        why: "« the target is therefore incomplete » : le périmètre (scope) exclut la chaîne d'approvisionnement."
      },
      {
        id: "en-t-c1-46", skill: "reading",
        passage: "Remote staff report higher focus but fewer informal exchanges with colleagues. The HR team proposes monthly on-site days, without making attendance compulsory.",
        q: "What does HR propose?",
        options: ["Monthly on-site days", "Compulsory attendance", "Ending remote work", "Fewer meetings"],
        a: 0,
        why: "« proposes monthly on-site days, without making attendance compulsory »."
      },
      {
        id: "en-t-c1-47", skill: "reading",
        passage: "The merger would give the group a 35 % share of the local market. The regulator may require the sale of some stores before approving the deal.",
        q: "What might the regulator require?",
        options: ["The sale of some stores", "A price increase", "New management", "More staff"],
        a: 0,
        why: "« may require the sale of some stores before approving the deal »."
      },
      {
        id: "en-t-c1-48", skill: "reading",
        passage: "The pilot cut waiting times by half, but only in stores with two tills. In smaller stores, the equipment took up space needed for stock.",
        q: "Where did the pilot work less well?",
        options: ["In smaller stores", "In large stores", "In city centres", "Online"],
        a: 0,
        why: "« In smaller stores, the equipment took up space needed for stock »."
      },
      {
        id: "en-t-c1-49", skill: "grammar",
        q: "Were the figures ___ earlier, we could have avoided the penalty.",
        options: ["checked", "to check", "checking", "check"],
        a: 0,
        why: "Inversion conditionnelle : were + participe passé = if the figures had been checked."
      },
      {
        id: "en-t-c1-50", skill: "grammar",
        q: "Little ___ that the supplier was about to collapse.",
        options: ["we knew", "did we know", "we did know", "knew we"],
        a: 1,
        why: "Little en tête de phrase à sens négatif impose l'inversion : little did we know."
      },
      {
        id: "en-t-c1-51", skill: "grammar",
        q: "The board insisted that the report ___ before the meeting.",
        options: ["is circulated", "be circulated", "was circulated", "will circulate"],
        a: 1,
        why: "Insist that + subjonctif : be circulated."
      },
      {
        id: "en-t-c1-52", skill: "grammar",
        q: "Under no circumstances ___ the data be shared outside the company.",
        options: ["should", "shall", "would", "could"],
        a: 0,
        why: "Under no circumstances + inversion avec should : should the data be shared."
      },
      {
        id: "en-t-c1-53", skill: "grammar",
        q: "The proposal is said ___ the board's support.",
        options: ["to have won", "to win", "winning", "won"],
        a: 0,
        why: "Le fait est antérieur : is said to have won (on dit qu'elle a obtenu)."
      },
      {
        id: "en-t-c1-54", skill: "grammar",
        q: "___ the delay, the client has agreed to extend the deadline.",
        options: ["Given", "Whereas", "Unless", "Provided"],
        a: 0,
        why: "Given + groupe nominal = compte tenu de. Les autres mots introduisent une proposition."
      },
      {
        id: "en-t-c1-55", skill: "grammar",
        q: "Should you ___ any questions, please contact me.",
        options: ["have", "has", "having", "had"],
        a: 0,
        why: "Should + sujet + base verbale remplace if : should you have any questions = if you have any questions."
      },
      {
        id: "en-t-c1-56", skill: "grammar",
        q: "You ___ have told me earlier; I could have helped.",
        options: ["should", "would", "must", "can"],
        a: 0,
        why: "Should have + participe exprime le reproche : tu aurais dû me le dire plus tôt."
      },
      {
        id: "en-t-c1-57", skill: "grammar",
        q: "Not until the audit was complete ___ the extent of the losses.",
        options: ["did we realise", "we realised", "we did realise", "realised we"],
        a: 0,
        why: "Not until en tête de phrase entraîne l'inversion : did we realise."
      },
      {
        id: "en-t-c1-58", skill: "grammar",
        q: "He is reported ___ the country last night.",
        options: ["to leave", "to have left", "leaving", "left"],
        a: 1,
        why: "Le départ est antérieur au rapport : is reported to have left."
      },
      {
        id: "en-t-c1-59", skill: "grammar",
        q: "The sooner we start, ___ we will finish.",
        options: ["the earlier", "earlier", "the earliest", "early"],
        a: 0,
        why: "Comparatif corrélé : the sooner…, the earlier… (plus tôt nous commençons, plus tôt nous finissons)."
      },
      {
        id: "en-t-c1-60", skill: "grammar",
        q: "Hardly ever ___ such a clear report.",
        options: ["I have read", "have I read", "I read", "did I read"],
        a: 1,
        why: "Hardly ever, à sens négatif en tête de phrase, impose l'inversion : have I read."
      },
      {
        id: "en-t-c1-61", skill: "vocab",
        q: "The manager ___ the decision to the regional director.",
        options: ["deferred", "differed", "defined", "refined"],
        a: 0,
        why: "Defer a decision to someone = s'en remettre à quelqu'un pour décider. Differ = différer (être différent)."
      },
      {
        id: "en-t-c1-62", skill: "vocab",
        q: "The two offers are broadly ___.",
        options: ["comparable", "comparative", "compared", "comparison"],
        a: 0,
        why: "Comparable = comparable, que l'on peut comparer. Comparative = relatif à une comparaison."
      },
      {
        id: "en-t-c1-63", skill: "vocab",
        q: "We need to ___ out the details before the launch.",
        options: ["iron", "steel", "flat", "smooth"],
        a: 0,
        why: "Iron out the details = régler les détails, aplanir les difficultés."
      },
      {
        id: "en-t-c1-64", skill: "vocab",
        q: "The report ___ on the risks rather than the benefits.",
        options: ["dwells", "dwell", "dwelling", "dwelt"],
        a: 0,
        why: "Dwell on = insister sur, s'appesantir sur. Ici, présent simple, 3e personne : dwells."
      },
      {
        id: "en-t-c1-65", skill: "vocab",
        q: "Her remarks were ___ interpreted as a threat.",
        options: ["widely", "wide", "widen", "width"],
        a: 0,
        why: "Widely = largement, par beaucoup de gens. Wide est un adjectif."
      },
      {
        id: "en-t-c1-66", skill: "vocab",
        q: "The board is ___ to changing the policy so late in the year.",
        options: ["averse", "adverse", "averted", "avid"],
        a: 0,
        why: "Averse to = opposé à, peu enclin à. Adverse = défavorable."
      },
      {
        id: "en-t-c1-67", skill: "vocab",
        q: "The figures ___ the scale of the problem.",
        options: ["underline", "underlie", "undermine", "undergo"],
        a: 0,
        why: "Underline = souligner, mettre en évidence. Underlie = être à l'origine de."
      },
      {
        id: "en-t-c1-68", skill: "vocab",
        q: "The proposal was rejected ___ the grounds of cost.",
        options: ["on", "for", "at", "in"],
        a: 0,
        why: "On the grounds of = pour des raisons de. Expression figée avec on."
      },
      {
        id: "en-t-c1-69", skill: "reading",
        passage: "Tender notice: bids must be submitted in sealed envelopes by 12 noon on 14 April. Late bids, or bids sent by email, will not be considered.",
        q: "What is not accepted?",
        options: ["Bids by email", "Sealed envelopes", "Bids before noon", "Bids in April"],
        a: 0,
        why: "« bids sent by email … will not be considered »."
      },
      {
        id: "en-t-c1-70", skill: "reading",
        passage: "Review: the new layout increased basket size by 6 %, but staff reported more time spent restocking. The net effect on margin is unclear.",
        q: "What is unclear?",
        options: ["The effect on margin", "The basket size", "The restocking time", "The layout"],
        a: 0,
        why: "« The net effect on margin is unclear »."
      },
      {
        id: "en-t-c1-71", skill: "reading",
        passage: "Memo: rather than replace the ageing tills, management proposes to lease refurbished units for eighteen months, pending a decision on the new store format.",
        q: "Why lease rather than buy?",
        options: ["A decision is pending", "The tills are new", "The store is closing", "Staff prefer leasing"],
        a: 0,
        why: "« pending a decision on the new store format » : la décision n'est pas prise."
      },
      {
        id: "en-t-c1-72", skill: "reading",
        passage: "Study: teams given a written brief produced fewer errors than those briefed orally, although the difference narrowed when the oral briefing was followed by a written summary.",
        q: "When did the gap narrow?",
        options: ["With a written summary", "With oral briefing only", "With no brief at all", "With more staff"],
        a: 0,
        why: "« the difference narrowed when the oral briefing was followed by a written summary »."
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
      },
      {
        id: "en-t-c2-13", skill: "grammar",
        q: "___ it not been for the audit, the fraud would have gone unnoticed.",
        options: ["Had", "Were", "Should", "If"],
        a: 0,
        why: "Had it not been for = If it had not been for. Inversion du conditionnel passé."
      },
      {
        id: "en-t-c2-14", skill: "grammar",
        q: "Were it not ___ the deadline, we would extend the pilot.",
        options: ["for", "of", "to", "with"],
        a: 0,
        why: "Were it not for + nom = sans… La formule garde la préposition for."
      },
      {
        id: "en-t-c2-15", skill: "grammar",
        q: "Not until the report was leaked ___ aware of the risk.",
        options: ["did the public become", "the public became", "became the public", "the public did become"],
        a: 0,
        why: "Not until en tête de phrase : inversion avec l'auxiliaire did."
      },
      {
        id: "en-t-c2-16", skill: "grammar",
        q: "So severe ___ the shortage that orders were suspended.",
        options: ["was", "were", "it was", "had"],
        a: 0,
        why: "So + adjectif en tête de phrase entraîne l'inversion : So severe was the shortage…"
      },
      {
        id: "en-t-c2-17", skill: "grammar",
        q: "Such ___ the demand that the site crashed.",
        options: ["was", "were", "it", "had"],
        a: 0,
        why: "Such + inversion : Such was the demand that… (une telle demande que…)."
      },
      {
        id: "en-t-c2-18", skill: "grammar",
        q: "Far from ___ the issue, the report obscured it.",
        options: ["resolving", "resolve", "resolved", "to resolve"],
        a: 0,
        why: "Far from + verbe en -ing : loin de résoudre."
      },
      {
        id: "en-t-c2-19", skill: "grammar",
        q: "Little ___ he know that the deal would collapse.",
        options: ["did", "does", "had", "was"],
        a: 0,
        why: "Little en tête de phrase entraîne l'inversion : Little did he know (il était loin de se douter)."
      },
      {
        id: "en-t-c2-20", skill: "grammar",
        q: "Only by ___ the process can we cut delays.",
        options: ["simplifying", "simplify", "simplified", "to simplify"],
        a: 0,
        why: "By + verbe en -ing. L'inversion vient après le groupe introduit par Only."
      },
      {
        id: "en-t-c2-21", skill: "grammar",
        q: "The more the company expands, ___ control it has over quality.",
        options: ["the less", "the little", "less", "lesser"],
        a: 0,
        why: "Comparatif corrélé : the more …, the less …"
      },
      {
        id: "en-t-c2-22", skill: "grammar",
        q: "The figures ___, the board approved the budget.",
        options: ["having been checked", "having checked", "been checked", "checked"],
        a: 0,
        why: "Proposition participiale absolue au passif : les chiffres ayant été vérifiés."
      },
      {
        id: "en-t-c2-23", skill: "grammar",
        q: "It was not until 2024 ___ the policy changed.",
        options: ["that", "when", "which", "what"],
        a: 0,
        why: "Structure clivée : It was not until … that …"
      },
      {
        id: "en-t-c2-24", skill: "grammar",
        q: "The manager would sooner resign ___ accept the deal.",
        options: ["than", "then", "that", "as"],
        a: 0,
        why: "Would sooner … than : préférer … plutôt que de."
      },
      {
        id: "en-t-c2-25", skill: "grammar",
        q: "There ___ no further questions, the chair closed the meeting.",
        options: ["being", "was", "were", "is"],
        a: 0,
        why: "There being + nom : proposition participiale (comme il n'y avait plus de questions)."
      },
      {
        id: "en-t-c2-26", skill: "grammar",
        q: "The deal is ___ to fail unless the regulator intervenes.",
        options: ["bound", "bind", "binding", "bounded"],
        a: 0,
        why: "Be bound to + infinitif = être voué à, ne pas manquer de."
      },
      {
        id: "en-t-c2-27", skill: "grammar",
        q: "He objected to ___ treated as a junior partner.",
        options: ["being", "be", "to be", "been"],
        a: 0,
        why: "Object to + verbe en -ing ; ici au passif : being treated."
      },
      {
        id: "en-t-c2-28", skill: "grammar",
        q: "The scheme was abandoned ___ the cost to small stores.",
        options: ["owing to", "in order to", "so as to", "according to"],
        a: 0,
        why: "Owing to + nom exprime la cause. In order to introduit un but."
      },
      {
        id: "en-t-c2-29", skill: "grammar",
        q: "The launch went ahead, ___ planned.",
        options: ["as", "like", "that", "which"],
        a: 0,
        why: "As planned = comme prévu. Like ne s'emploie pas ainsi devant un participe passé."
      },
      {
        id: "en-t-c2-30", skill: "grammar",
        q: "Scarcely ___ the plan been approved when the funding was withdrawn.",
        options: ["had", "has", "did", "was"],
        a: 0,
        why: "Scarcely … when, avec past perfect inversé : had the plan been approved."
      },
      {
        id: "en-t-c2-31", skill: "vocab",
        q: "The costs were cut, but ___ the expense of quality.",
        options: ["at", "in", "on", "for"],
        a: 0,
        why: "At the expense of = aux dépens de."
      },
      {
        id: "en-t-c2-32", skill: "vocab",
        q: "The findings ___ the initial hypothesis.",
        options: ["bear out", "bear with", "bear up", "bear down"],
        a: 0,
        why: "Bear out = confirmer. Bear with = patienter ; bear up = tenir le coup."
      },
      {
        id: "en-t-c2-33", skill: "vocab",
        q: "The project fell short ___ expectations.",
        options: ["of", "on", "to", "for"],
        a: 0,
        why: "Fall short of = ne pas atteindre (un niveau, une attente)."
      },
      {
        id: "en-t-c2-34", skill: "vocab",
        q: "The delay ___ from a failure to plan.",
        options: ["stemmed", "stem", "stemming", "stems"],
        a: 0,
        why: "Stem from = découler de. Le récit est au passé : stemmed."
      },
      {
        id: "en-t-c2-35", skill: "vocab",
        q: "The decision was tantamount ___ a refusal.",
        options: ["to", "of", "for", "with"],
        a: 0,
        why: "Be tantamount to = équivaloir à."
      },
      {
        id: "en-t-c2-36", skill: "vocab",
        q: "On the face ___ it, the offer looks generous.",
        options: ["of", "on", "in", "at"],
        a: 0,
        why: "On the face of it = à première vue."
      },
      {
        id: "en-t-c2-37", skill: "vocab",
        q: "The proposal is still a ___ point among the partners.",
        options: ["moot", "mute", "mode", "mood"],
        a: 0,
        why: "A moot point = une question discutable, non tranchée."
      },
      {
        id: "en-t-c2-38", skill: "vocab",
        q: "By and ___, the new system has worked well.",
        options: ["large", "larger", "largely", "enlarge"],
        a: 0,
        why: "By and large = dans l'ensemble (expression figée)."
      },
      {
        id: "en-t-c2-39", skill: "vocab",
        q: "The change was, to all intents and ___, a merger.",
        options: ["purposes", "purpose", "purports", "proposals"],
        a: 0,
        why: "To all intents and purposes = en pratique, pour ainsi dire."
      },
      {
        id: "en-t-c2-40", skill: "vocab",
        q: "The regulator's decision gave ___ to a wave of complaints.",
        options: ["rise", "raise", "arise", "rose"],
        a: 0,
        why: "Give rise to = donner lieu à, susciter."
      },
      {
        id: "en-t-c2-41", skill: "vocab",
        q: "The company has been accused of greenwashing, ___ its sustainability claims.",
        options: ["notwithstanding", "nevertheless", "however", "therefore"],
        a: 0,
        why: "Notwithstanding + nom = malgré, en dépit de."
      },
      {
        id: "en-t-c2-42", skill: "vocab",
        q: "The report stops ___ of calling for a public inquiry.",
        options: ["short", "shortly", "shorts", "shortening"],
        a: 0,
        why: "Stop short of + -ing = s'arrêter juste avant de."
      },
      {
        id: "en-t-c2-43", skill: "reading",
        passage: "The review concludes that the scheme met its targets but at a cost the company can no longer sustain. It recommends keeping the pilot running at a reduced scale while alternative funding is sought.",
        q: "What does the review recommend?",
        options: ["Keeping a reduced pilot", "Ending the scheme", "Raising prices", "Expanding the scheme"],
        a: 0,
        why: "« keeping the pilot running at a reduced scale » : maintenir à échelle réduite."
      },
      {
        id: "en-t-c2-44", skill: "reading",
        passage: "Far from resolving the dispute, the announcement hardened positions on both sides. Negotiators now fear that a settlement is further away than ever.",
        q: "What was the effect of the announcement?",
        options: ["It hardened positions", "It settled the dispute", "It reduced costs", "It delayed the launch"],
        a: 0,
        why: "« the announcement hardened positions on both sides » : les positions se sont durcies."
      },
      {
        id: "en-t-c2-45", skill: "reading",
        passage: "The data are suggestive but not conclusive: the sample was small and drawn from a single region. The authors caution against generalising the findings.",
        q: "Why do the authors urge caution?",
        options: ["The sample was small", "The data were lost", "The region was rich", "The method was new"],
        a: 0,
        why: "« the sample was small and drawn from a single region » : échantillon limité."
      },
      {
        id: "en-t-c2-46", skill: "reading",
        passage: "Management presents the restructure as a response to market pressure. Staff representatives, by contrast, see it as a long-planned cost reduction that the crisis made easier to justify.",
        q: "How do staff representatives see the restructure?",
        options: ["As long-planned cost cutting", "As a market necessity", "As a temporary measure", "As a legal requirement"],
        a: 0,
        why: "« see it as a long-planned cost reduction » : réduction des coûts prévue de longue date."
      },
      {
        id: "en-t-c2-47", skill: "reading",
        passage: "The supplier's silence on the delay was, in the client's view, as good as an admission of fault. The contract allows termination after two missed deadlines.",
        q: "What does the contract allow?",
        options: ["Termination after two missed deadlines", "A price increase", "A shorter warranty", "Immediate payment"],
        a: 0,
        why: "« allows termination after two missed deadlines » : résiliation possible."
      },
      {
        id: "en-t-c2-48", skill: "reading",
        passage: "Whatever the merits of the argument, the board is unlikely to reverse a decision it took unanimously. The practical question is how to limit the damage.",
        q: "What is the board unlikely to do?",
        options: ["Reverse its decision", "Limit the damage", "Meet the staff", "Publish the minutes"],
        a: 0,
        why: "« the board is unlikely to reverse a decision it took unanimously »."
      },
      {
        id: "en-t-c2-49", skill: "grammar",
        q: "Had it not been for her intervention, the deal ___.",
        options: ["would collapse", "would have collapsed", "had collapsed", "collapses"],
        a: 1,
        why: "Condition passée inversée : had it not been for…, would have + participe passé."
      },
      {
        id: "en-t-c2-50", skill: "grammar",
        q: "Were the company to relocate, most staff ___.",
        options: ["would follow", "will follow", "followed", "had followed"],
        a: 0,
        why: "Were + sujet + to + infinitif = if the company relocated ; conséquence au conditionnel."
      },
      {
        id: "en-t-c2-51", skill: "grammar",
        q: "Such was the demand ___ we had to ration stock.",
        options: ["that", "which", "as", "so"],
        a: 0,
        why: "Such was… that… : la construction corrélative exige that."
      },
      {
        id: "en-t-c2-52", skill: "grammar",
        q: "It is high time the board ___ a decision.",
        options: ["makes", "made", "make", "will make"],
        a: 1,
        why: "It is high time + prétérit : made (souhait présent, nuance de reproche)."
      },
      {
        id: "en-t-c2-53", skill: "grammar",
        q: "No sooner ___ the email than the phone rang.",
        options: ["had I sent", "I had sent", "did I send", "I sent"],
        a: 0,
        why: "No sooner + inversion et past perfect : had I sent."
      },
      {
        id: "en-t-c2-54", skill: "grammar",
        q: "The committee recommended that the policy ___ reviewed annually.",
        options: ["is", "be", "was", "will be"],
        a: 1,
        why: "Recommend that + subjonctif : be reviewed."
      },
      {
        id: "en-t-c2-55", skill: "grammar",
        q: "___ he known the outcome, he would never have signed.",
        options: ["Had", "If", "Should", "Were"],
        a: 0,
        why: "Had he known = if he had known : inversion sans if au troisième conditionnel."
      },
      {
        id: "en-t-c2-56", skill: "grammar",
        q: "The survey, ___ findings were published in May, has prompted a review.",
        options: ["which", "whose", "of which", "that"],
        a: 1,
        why: "Whose marque l'appartenance : the survey whose findings… = les résultats du sondage."
      },
      {
        id: "en-t-c2-57", skill: "grammar",
        q: "Only after the audit ___ the extent of the losses.",
        options: ["did they realise", "they realised", "they did realise", "realised they"],
        a: 0,
        why: "Only after + inversion : did they realise."
      },
      {
        id: "en-t-c2-58", skill: "grammar",
        q: "He would sooner ___ than admit the error.",
        options: ["resign", "resigned", "resigning", "to resign"],
        a: 0,
        why: "Would sooner + base verbale : would sooner resign than admit."
      },
      {
        id: "en-t-c2-59", skill: "grammar",
        q: "The proposal is ___ to be approved before the summer.",
        options: ["likely", "probable", "possible", "maybe"],
        a: 0,
        why: "Likely to + infinitif. Probable et possible se construisent avec it is probable that…"
      },
      {
        id: "en-t-c2-60", skill: "grammar",
        q: "Rarely ___ a report so carefully argued.",
        options: ["has one read", "one has read", "did one read", "one read"],
        a: 0,
        why: "Rarely en tête de phrase, à sens négatif, impose l'inversion : has one read."
      },
      {
        id: "en-t-c2-61", skill: "vocab",
        q: "The merger was agreed, subject ___ regulatory approval.",
        options: ["to", "for", "of", "with"],
        a: 0,
        why: "Subject to = sous réserve de. Expression figée."
      },
      {
        id: "en-t-c2-62", skill: "vocab",
        q: "The findings ___ doubt on the earlier study.",
        options: ["cast", "put", "set", "place"],
        a: 0,
        why: "Cast doubt on = jeter le doute sur."
      },
      {
        id: "en-t-c2-63", skill: "vocab",
        q: "The company is ___ to expand into Asia.",
        options: ["poised", "paused", "posed", "proposed"],
        a: 0,
        why: "Poised to = sur le point de, en position de."
      },
      {
        id: "en-t-c2-64", skill: "vocab",
        q: "We must ___ any suggestion that the delay was deliberate.",
        options: ["refute", "refuse", "repute", "refuel"],
        a: 0,
        why: "Refute = réfuter, contester par l'argument. Refuse = refuser."
      },
      {
        id: "en-t-c2-65", skill: "vocab",
        q: "The report is ___ reading for anyone in procurement.",
        options: ["essential", "essentially", "essence", "essentiality"],
        a: 0,
        why: "Essential reading = lecture indispensable. Essentially est un adverbe."
      },
      {
        id: "en-t-c2-66", skill: "vocab",
        q: "Profits have ___ in recent years.",
        options: ["dwindled", "dwindling", "dwindle", "dwindles"],
        a: 0,
        why: "Present perfect : have + participe passé, dwindled (diminué progressivement)."
      },
      {
        id: "en-t-c2-67", skill: "vocab",
        q: "The chair ___ the meeting to a close.",
        options: ["drew", "draw", "drawn", "drawing"],
        a: 0,
        why: "Draw a meeting to a close = clore la réunion. Prétérit : drew."
      },
      {
        id: "en-t-c2-68", skill: "vocab",
        q: "Their argument rests ___ a single assumption.",
        options: ["on", "in", "at", "for"],
        a: 0,
        why: "Rest on = reposer sur."
      },
      {
        id: "en-t-c2-69", skill: "reading",
        passage: "The proposal was not so much rejected as deferred: the board asked for a costed implementation plan, which effectively postpones any decision until the autumn.",
        q: "What did the board do?",
        options: ["Deferred the decision", "Rejected the plan", "Approved the costs", "Cancelled the project"],
        a: 0,
        why: "« not so much rejected as deferred » : la décision est reportée, pas refusée."
      },
      {
        id: "en-t-c2-70", skill: "reading",
        passage: "Nothing in the minutes suggests the vote was contested; on the contrary, the dissent recorded came from a member who had missed the previous two meetings.",
        q: "What does the writer imply?",
        options: ["The dissent was not representative", "The vote was close", "The minutes are missing", "The member resigned"],
        a: 0,
        why: "L'opposition vient d'un membre absent aux deux réunions précédentes : elle n'est pas représentative."
      },
      {
        id: "en-t-c2-71", skill: "reading",
        passage: "For all its technical sophistication, the platform has yet to demonstrate that it reduces cost per order; until it does, adoption beyond the pilot remains unlikely.",
        q: "What is the main reservation?",
        options: ["No proven cost reduction", "Poor technology", "A limited pilot", "High adoption"],
        a: 0,
        why: "« has yet to demonstrate that it reduces cost per order » : l'économie n'est pas démontrée."
      },
      {
        id: "en-t-c2-72", skill: "reading",
        passage: "The supplier's assurance that delays were 'unforeseeable' sits uneasily with the warnings it received in January and again in March.",
        q: "What is questioned?",
        options: ["The supplier's explanation", "The warnings", "The contract", "The delay itself"],
        a: 0,
        why: "« sits uneasily with » : l'explication du fournisseur est mise en doute par les avertissements reçus."
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
