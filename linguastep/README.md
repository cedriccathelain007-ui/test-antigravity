# LinguaStep

Prototype de formation aux langues professionnelles : un test adaptatif A1 → C2,
puis un parcours par niveau, pour six langues (anglais, espagnol, allemand,
italien, portugais, français FLE).

**Application en ligne :** https://cedriccathelain007-ui.github.io/test-antigravity/linguastep/

## Ce que contient le dossier

```
index.html
assets/
  css/style.css
  js/store.js      stockage local, export/import JSON, mémoire des questions vues
  js/engine.js     moteur du test adaptatif et tirage aléatoire
  js/app.js        écrans et interactions
  data/languages.js
  data/en.js  es.js  de.js  it.js  pt.js  fr.js
```

## Fonctionnement

- Site **statique** : aucune installation, aucun serveur, aucune dépendance.
- Test adaptatif, jamais deux fois la même question dans un test. L'ordre des
  propositions est mélangé à chaque tirage.
  - **Anglais** : une série unique de 48 questions au niveau déclaré, notées sur
    20 (0,42 point par bonne réponse, note à une décimale). 36 bonnes réponses
    ou plus (15/20) : le niveau retenu est le niveau supérieur. 24 à 35 (10 à
    14/20) : niveau confirmé. Moins de 24 (moins de 10/20) : niveau inférieur.
    Le test s'arrête après cette série : on ne traverse pas plusieurs niveaux en
    une séance. Durée : environ 15 minutes.
  - **Autres langues** : 3 questions par palier, 2 bonnes réponses pour monter,
    sinon on descend. Plafond de 18 questions.
- **Tirage aléatoire et renouvellement** : les questions sont piochées au hasard
  et l'ordre des propositions change à chaque test. L'anglais compte **96
  questions par niveau (576 au total)** : un test en utilise 48, le suivant
  propose les 48 restantes, entièrement neuves ; à partir du troisième test, la
  sélection reprend les plus anciennes. Les cinq autres langues sont à 6
  questions par niveau (36 chacune) et gardent le renouvellement ; leur extension
  est prévue.
- **756 questions** de test au total, avec explication en français pour chaque
  réponse.
- 43 leçons et 185 exercices corrigés (QCM, complétion, remise en ordre).
- Progression enregistrée dans le navigateur (`localStorage`), avec export et
  import JSON. **Aucun compte, aucune donnée envoyée.**

## Version hors-ligne

Télécharger le dossier et ouvrir `index.html` par double-clic : l'application
fonctionne sans réseau. La progression locale est distincte de celle de la
version en ligne.

## Limites annoncées

- Niveau **indicatif** (± 1 niveau), test non certifiant.
- **Écrit seulement** : pas d'oral dans cette version.
- Contenu de démonstration, non relu par des locuteurs natifs.
- **Réserve anglaise** : 96 questions par niveau, dont 48 servent à un test.
  Deux tests entièrement neufs sont donc possibles d'affilée ; le troisième
  reprend des questions déjà vues.
