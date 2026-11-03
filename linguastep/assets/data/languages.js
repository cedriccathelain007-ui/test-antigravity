/* Catalogue des langues proposées.
   Chaque langue a son fichier de contenu : assets/data/<code>.js
   Pour ajouter une langue : ajouter une entrée ici + créer le fichier de contenu
   + ajouter la balise <script> correspondante dans index.html. */
window.LANGUAGES = [
  { code: "en", name: "Anglais", native: "English", flag: "🇬🇧", note: "Langue des affaires internationale" },
  { code: "es", name: "Espagnol", native: "Español", flag: "🇪🇸", note: "Espagne et Amérique latine" },
  { code: "de", name: "Allemand", native: "Deutsch", flag: "🇩🇪", note: "Échanges industriels et techniques" },
  { code: "it", name: "Italien", native: "Italiano", flag: "🇮🇹", note: "Commerce et culture" },
  { code: "pt", name: "Portugais", native: "Português", flag: "🇵🇹", note: "Portugal, Brésil, Afrique lusophone" },
  { code: "fr", name: "Français", native: "Français", flag: "🇫🇷", note: "Français langue étrangère (FLE)" }
];

window.COURSES = window.COURSES || {};
