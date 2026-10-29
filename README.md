# Portfolio — Killian Nkounkou

Portfolio personnel, développé en HTML / CSS / JavaScript (sans framework,
sans dépendance à installer). Pensé pour être mis à jour facilement tout au
long du BTS SIO SLAM et au-delà.

**Démo en ligne :** à activer via GitHub Pages (voir plus bas) — l'URL sera
`https://killian-nkounkou.github.io/<nom-du-depot>/`

## Structure du projet

```
.
├── index.html                   # Page principale (structure du site)
├── veille-authentification.html # Article de veille technologique
├── style.css                    # Tout le design (couleurs, typographies, mise en page)
├── script.js                    # Construit la page à partir de data.js — ne pas modifier pour changer le contenu
├── data.js                      # ⭐ Contenu du site : profil, compétences, parcours, projets, veille
└── CV_Killian-Nkounkou.pdf      # CV (à ajouter dans le dépôt)
```

## Mettre à jour le contenu

Toutes les informations affichées (nom, bio, formation, compétences,
expériences, projets, veille technologique, contact) sont centralisées dans
**`data.js`**. C'est le seul fichier à modifier pour :

- Ajouter / retirer une compétence → modifier `skillGroups`
- Ajouter une formation → modifier `education`
- Ajouter une expérience → modifier `experience`
- **Ajouter un nouveau projet** → dupliquer un objet dans `projects` et
  remplir `title`, `period`, `description`, `stack`, et éventuellement
  `link` (démo) et `repo` (dépôt GitHub du projet)
- Changer le sujet de veille ou son résumé → modifier `veille`
- Mettre à jour email / téléphone / GitHub → modifier `profile`

Chaque section du fichier est commentée en français pour indiquer quoi
modifier. Aucune compétence en HTML/CSS n'est nécessaire pour ces mises à
jour : le site se reconstruit automatiquement à partir de ce fichier.

## Ajouter le CV

Placer le PDF du CV à la racine du dépôt sous le nom
`CV_Killian-Nkounkou.pdf` (ou modifier la valeur `cvFile` dans `data.js` si
le fichier est renommé). Le bouton « Télécharger le CV » de la page
d'accueil pointe automatiquement vers ce fichier.

## Ajouter un nouveau projet avec son propre dépôt

1. Créer le dépôt du projet sur GitHub.
2. Dans `data.js`, ajouter un objet dans `projects` avec `repo` pointant
   vers l'URL du dépôt, et `link` vers une démo en ligne si disponible
   (par exemple via GitHub Pages, Vercel ou Netlify).

## Mettre le site en ligne avec GitHub Pages (gratuit)

1. Pousser ce dossier dans un dépôt GitHub (public), par exemple nommé
   `portfolio`.
2. Sur GitHub : `Settings` → `Pages`.
3. Dans **Build and deployment**, choisir **Deploy from a branch**, puis la
   branche `main` et le dossier `/ (root)`.
4. Enregistrer. Le site est publié après quelques minutes à l'adresse
   `https://killian-nkounkou.github.io/portfolio/`.
5. À chaque `git push` sur `main`, le site se met à jour automatiquement.

### En local, avant de pousser

Pour prévisualiser les modifications avant de les publier, il suffit
d'ouvrir `index.html` dans un navigateur (double-clic), ou de lancer un
petit serveur local si le navigateur bloque certains scripts :

```bash
# Python (déjà installé sur la plupart des systèmes)
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Prochaines évolutions possibles

- Ajouter une page dédiée par projet (captures d'écran, README détaillé)
- Publier de nouvelles fiches de veille technologique au format de
  `veille-authentification.html`
- Ajouter un mode clair / sombre
- Internationaliser le contenu (FR/EN) si utile pour candidater à l'étranger

## Licence

Contenu personnel — libre de vous en inspirer pour votre propre portfolio,
sans réutiliser directement le CV ou les informations personnelles de
Killian Nkounkou.
