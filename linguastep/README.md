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
  - **Anglais** : 5 bonnes réponses au niveau courant font monter d'un cran,
    3 erreurs font descendre. Plafond de 30 questions.
  - **Autres langues** : 3 questions par palier, 2 bonnes réponses pour monter,
    sinon on descend. Plafond de 18 questions.
- **Tirage aléatoire et renouvellement** : les questions sont piochées au hasard
  dans une réserve, et l'application retient celles déjà vues pour ne pas les
  reposer. L'anglais dispose de **48 questions par niveau (288 au total)**, soit
  seize tests complets d'affilée sans répétition. Les cinq autres langues sont
  à 6 questions par niveau (36 chacune) ; leur extension est prévue.
- **468 questions** de test au total, avec explication en français pour chaque
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
