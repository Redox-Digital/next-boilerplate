This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Quick arborescence understanding

The project is organized in the following way:

1. Node Modules
   Contains all the modules installed with npm install.

2. Public
   Contains the index.html file. This file is the entry point of the project. It contains the root div of the where the react app is mounted.

3. Pages
   Contains all the pages of the website.

4. Components
   Contains all the components of the project.

5. Styles
   Contains all SASS styling files. The folder's organization is inspired by [ITCSS](https://developer.helpscout.com/seed/glossary/itcss/).

# Commit message format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

## Example

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

References:

- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html

---

# 📦 Composants réutilisables et leurs variations

Développement en cours.

## 🔗 Navigation & Layout

### [ ] `Header.tsx` (barre de navigation)

- **Positionnement** : Fixe en haut / Sticky au scroll / Transparente puis colorée au scroll
- **Style de menu** : Classique (horizontal) / Hamburger menu (mobile) / Sidebar (vertical)
- **Logo placement** : Gauche / Centre / Dans le menu
- **Navigation** : Menu avec sous-menus / Mega-menu / Menu minimaliste

### [ ] `Footer.tsx` (pied de page)

- **Structure** : 2 colonnes / 3 colonnes / Centré
- **Liens** : Icônes sociales / Menu secondaire / Newsletter
- **Affichage** : Clair / Sombre / Minimaliste

## 🖼 Sections

### [ ] `Hero.tsx` (bandeau d’intro)

- **Médias** : Image fixe / Vidéo en fond / Diaporama
- **Texte** : Centré / À gauche / À droite
- **Bouton CTA** : Simple / Double (ex: "Voir plus" + "Contact")
- **Effets** : Parallax / Zoom au scroll / Flou dynamique

### [ ] `FeatureSection.tsx` (présentation de points clés)

- **Disposition** : Liste verticale / Grille 2 ou 3 colonnes / Icônes + texte
- **Affichage des icônes** : Cercle coloré / Outline / Sans icône
- **Style** : Fond coloré / Bords arrondis / Contenu encadré

### [ ] `Testimonial.tsx` (témoignages)

- **Affichage** : Slider / Grid / Une seule citation
- **Format** : Avec photo / Sans photo / Avatar circulaire
- **Style de citation** : Texte seul / Avec guillemets stylisés / Bloc coloré

### [ ] `CallToAction.tsx` (bandeau avec bouton)

- **Disposition** : Centré / Image à gauche, texte à droite / Full-width
- **Arrière-plan** : Uni / Dégradé / Image floue
- **Boutons** : Un seul CTA / Deux CTAs / Bouton + lien secondaire

## 🗂 Listes & Cartes

### [ ] `Card.tsx` (affichage d’un élément)

- **Disposition** : Image en haut / Image à gauche / Full-width
- **Effets** : Ombre au hover / Légère rotation / Zoom sur l’image
- **Bouton** : Avec / Sans / Texte en lien

### [ ] `ProjectCard.tsx` (pour portfolio)

- **Affichage** : Image seule / Image + titre + catégorie / Avec un extrait de texte
- **Animation** : Overlay au hover / Zoom / Diaporama au survol

### [ ] `BlogCard.tsx` (affichage d’article)

- **Format** : Liste en colonne / Grille 2 ou 3 colonnes / Carte large
- **Éléments affichés** : Date / Catégorie / Auteur / Nombre de commentaires
- **Mise en page** : Titre seul / Titre + extrait / Image + titre

## ⚡ Interactivité

### [ ] `Accordion.tsx` (FAQ, contenu déroulant)

- **Icônes d’expansion** : `+ / -` / `▶ / ▼`
- **Animation** : Slide / Fade-in / Expansion immédiate
- **Mode** : Un seul élément ouvert à la fois / Plusieurs ouverts simultanément

### [ ] `Tabs.tsx` (onglets)

- **Position des onglets** : Haut / Gauche (vertical) / En bas
- **Style** : Contours arrondis / Soulignement au hover / Cartes

### [ ] `Modal.tsx` (fenêtre pop-up)

- **Fond** : Clair / Sombre / Semi-transparent
- **Fermeture** : Bouton / Clic en dehors / Échappement clavier
- **Animation** : Slide-in / Fade-in / Zoom-in

### [ ] `Carousel.tsx` (slider d’images)

- **Navigation** : Flèches / Points / Swipe mobile
- **Défilement** : Auto / Manuel / Boucle infinie
- **Format** : Images plein écran / Cartes empilées / Aperçus latéraux

## 📞 Formulaires

### [ ] `ContactForm.tsx` (formulaire de contact)

- **Champs** : Nom / Email / Message / Sujet en option
- **Validation** : En live / Après soumission
- **Affichage** : Simple colonne / 2 colonnes

### [ ] `NewsletterForm.tsx` (inscription newsletter)

- **Affichage** : Champ email + bouton / Popup / Barre fixe
- **Design** : Carré / Rond / Bordure soulignée

---

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Export to static

You can export your Next.js app to static HTML, which can be run standalone without the need of a Node.js server.

First, kill your development server if it's running

```bash
Ctrl + C
```

Then, run the build command:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The static files can be found in the `out` folder and directly uploaded to your web host.
