# 🌐 ATWO DIGITAL AGENCY – Site Web Officiel

Bienvenue dans le dépôt du site vitrine d’ATWO DIGITAL AGENCY, une agence digitale créative au service de vos projets web.
💡 À propos

ATWO DIGITAL accompagne les marques, entreprises et institutions dans leur transformation digitale. De la stratégie à la réalisation, notre équipe conçoit des expériences sur-mesure : sites web, applications, identité visuelle, interfaces UI/UX et solutions interactives.
🎯 Objectifs du site

    Mettre en valeur notre savoir-faire et nos réalisations

    Offrir une vitrine claire et impactante de nos services

    Faciliter la prise de contact avec de futurs partenaires

    Renforcer notre positionnement en tant qu’agence innovante et engagée

✨ Ce qui rend ce site unique

    Design épuré, dynamique et responsive

    Parcours utilisateur fluide et immersif

    Mises en avant animées de projets clients

    Technologies modernes et performance optimisée

    Une plateforme évolutive pensée pour durer

🚀 Visitez notre univers : www.atwodigitalagency.fr

---------------------------------------------------------------------------------------------------------------------

# 🌐 ATWO DIGITAL AGENCY – Official Website

Welcome to the repository of ATWO DIGITAL AGENCY’s showcase website — a digital window into our creative universe.
💡 About Us

ATWO DIGITAL is a creative agency supporting brands, companies, and institutions in their digital transformation. From strategy to execution, we craft tailor-made experiences: websites, apps, visual identity, UI/UX design, and interactive solutions.
🎯 Website Goals

    Showcase our expertise and portfolio

    Present a clear and impactful overview of our services

    Make it easy for future clients and partners to get in touch

    Reinforce our positioning as an innovative and committed digital agency

✨ What Makes This Site Stand Out

    Clean, dynamic, and fully responsive design

    Smooth and immersive user experience

    Animated highlights of client projects

    Modern tech stack and optimized performance

    Scalable architecture designed for long-term evolution

🚀 Explore our world: www.atwodigitalagency.fr





# ATWO Digital Agency - Website Monorepo
```markdown
Ce repository contient un monorepo avec deux applications :

- `apps/frontend` : application frontend React avec Vite et TypeScript  
- `apps/backend` : application backend NestJS

```
--- 

## Structure du projet

```
website/
├─ apps/
│    ├─ frontend/   # React + Vite
│    └─ backend/    # NestJS backend
├─ package.json     # scripts communs et dépendances dev
└─ .gitignore

```

---

## Installation

Depuis la racine du repo, installe les dépendances :

```bash
npm install
````

Cela installera les dépendances pour la racine (notamment `concurrently`), et tu devras aussi installer celles des apps séparément si besoin :

```bash
npm --prefix apps/frontend install
npm --prefix apps/backend install
```

---

## Commandes

Lance le frontend uniquement :

```bash
npm run start:frontend
```

Lance le backend uniquement :

```bash
npm run start:backend
```

Lance les deux en même temps (pratique pour le dev) :

```bash
npm run start
```

---

## `.gitignore`

Le fichier `.gitignore` exclut les dossiers `node_modules` et `dist` dans chaque app.

---

## Structure détaillée des apps

### Frontend React

* Créé avec Vite + TypeScript
* Démarrage avec `npm run dev`

### Backend NestJS

* Créé avec Nest CLI
* Démarrage avec `npm run start:dev`

---

## Contribuer

* Crée une branche par fonctionnalité
* Fais des commits clairs
* Ouvre une Pull Request pour revue

---

## Contact

Pour toute question, contacte l’équipe ATWO Digital Agency `atwodigitalagency@gmail.com`.


