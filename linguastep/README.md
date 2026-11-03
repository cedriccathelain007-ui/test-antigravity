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
  js/store.js      stockage local, export/import JSON
  js/engine.js     moteur du test adaptatif
  js/app.js        écrans et interactions
  data/languages.js
  data/en.js  es.js  de.js  it.js  pt.js  fr.js
```

## Fonctionnement

- Site **statique** : aucune installation, aucun serveur, aucune dépendance.
- Test adaptatif : 3 questions par palier, 2 bonnes réponses pour monter,
  sinon on descend. Plafond de 18 questions, jamais deux fois la même question.
- 6 langues × 6 niveaux × 6 questions = **216 questions** de test, avec
  explication en français pour chaque réponse.
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
