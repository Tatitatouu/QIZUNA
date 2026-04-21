# MISSION
Créer 4 pages de service SEO + structure blog sur le site Next.js de qizuna.fr.
Ne touche pas aux fichiers existants sauf mention explicite.

---

# CONTRAINTES GLOBALES
- Framework : Next.js App Router (adapter si Pages Router)
- Réutiliser les composants existants : boutons, cards, formulaire, navbar, footer
- Chaque page : `<title>`, `<meta description>`, `<link rel="canonical">`, balises Open Graph
- Pas de CSS inline — utiliser les classes Tailwind existantes
- Liens internes : composant `<Link>` de Next.js

---

# PARTIE 1 — 4 PAGES DE SERVICE

## PAGE 1 : /developpement-logiciel-sur-mesure

**Fichier :** `app/developpement-logiciel-sur-mesure/page.tsx`

**Métadonnées :**
```ts
export const metadata = {
  title: "Développement logiciel sur mesure | Qizuna",
  description: "Qizuna conçoit des logiciels sur mesure adaptés à vos processus métier. TDD, Clean Code, zéro lock-in. Devis gratuit.",
  alternates: { canonical: "https://qizuna.fr/developpement-logiciel-sur-mesure" },
  openGraph: { title: "Développement logiciel sur mesure | Qizuna", url: "https://qizuna.fr/developpement-logiciel-sur-mesure" }
}
```

**Structure HTML (dans l'ordre) :**
```
<h1> Développement logiciel sur mesure — des outils qui s'adaptent à vous
<h2> Un logiciel sur mesure, c'est quoi ?
  → 2 paragraphes : définition + avantages vs SaaS générique
<h2> Ce qu'on développe
  <h3> Applications métier internes
  <h3> Logiciels SaaS
  <h3> Outils de gestion et d'automatisation
  <h3> Intégrations et APIs
<h2> Notre méthode de développement
  <h3> Phase de cadrage (besoins, specs)
  <h3> Développement itératif (agile, sprints)
  <h3> Tests et qualité (TDD, code review)
  <h3> Livraison et maintenance
<h2> Nos technologies
  → Mention : React, Next.js, Node.js, PostgreSQL, Docker, AWS/OVH
<h2> Questions fréquentes
  → Insérer FAQ_LOGICIEL du Doc 2/2
<h2> Parlons de votre projet
  → Réutiliser le composant formulaire de contact existant
```

**Liens internes à inclure dans le contenu :**
- Vers `/` : "notre agence de développement web"
- Vers `/developpement-application-mobile` : "développement d'application mobile"
- Vers `/audit-technique` : "audit technique de votre existant"

---

## PAGE 2 : /developpement-application-mobile

**Fichier :** `app/developpement-application-mobile/page.tsx`

**Métadonnées :**
```ts
export const metadata = {
  title: "Agence développement application mobile | Qizuna",
  description: "Qizuna développe vos applications mobiles iOS et Android sur mesure. React Native, UX soignée, performances optimisées. Devis gratuit.",
  alternates: { canonical: "https://qizuna.fr/developpement-application-mobile" },
  openGraph: { title: "Agence développement application mobile | Qizuna", url: "https://qizuna.fr/developpement-application-mobile" }
}
```

**Structure HTML (dans l'ordre) :**
```
<h1> Agence développement application mobile — iOS & Android sur mesure
<h2> Pourquoi développer une application mobile sur mesure ?
  → 2 paragraphes : contexte mobile-first + avantages app native vs webapp
<h2> Nos applications mobiles
  <h3> Applications iOS (Swift, React Native)
  <h3> Applications Android (Kotlin, React Native)
  <h3> Applications cross-platform (React Native)
  <h3> Progressive Web Apps (PWA)
<h2> Notre processus de développement mobile
  <h3> UX/UI Design et prototypage
  <h3> Développement et tests
  <h3> Publication sur les stores (App Store, Google Play)
  <h3> Maintenance et évolutions
<h2> Nos technologies mobiles
  → Mention : React Native, Expo, Swift, Kotlin, Firebase, REST API
<h2> Questions fréquentes
  → Insérer FAQ_MOBILE du Doc 2/2
<h2> Parlons de votre projet
  → Réutiliser le composant formulaire de contact existant
```

**Liens internes à inclure dans le contenu :**
- Vers `/` : "agence de développement web"
- Vers `/developpement-logiciel-sur-mesure` : "logiciel sur mesure"
- Vers `/audit-technique` : "audit de votre application existante"

---

## PAGE 3 : /audit-technique

**Fichier :** `app/audit-technique/page.tsx`

**Métadonnées :**
```ts
export const metadata = {
  title: "Audit technique application web et mobile | Qizuna",
  description: "Qizuna audite votre application web ou mobile : performance, sécurité, dette technique, architecture. Rapport détaillé et plan d'action.",
  alternates: { canonical: "https://qizuna.fr/audit-technique" },
  openGraph: { title: "Audit technique application web et mobile | Qizuna", url: "https://qizuna.fr/audit-technique" }
}
```

**Structure HTML (dans l'ordre) :**
```
<h1> Audit technique — identifiez et corrigez les failles de votre application
<h2> Pourquoi réaliser un audit technique ?
  → 2 paragraphes : dette technique, sécurité, performance, préparation à la refonte
<h2> Ce que couvre notre audit
  <h3> Performance et temps de chargement
  <h3> Sécurité et vulnérabilités
  <h3> Architecture et dette technique
  <h3> Qualité du code et maintenabilité
  <h3> Infrastructure et hébergement cloud
<h2> Notre livrable
  → Description du rapport : synthèse exécutive + recommandations priorisées + plan d'action chiffré
<h2> Questions fréquentes
  → Insérer FAQ_AUDIT du Doc 2/2
<h2> Parlons de votre projet
  → Réutiliser le composant formulaire de contact existant
```

**Liens internes à inclure dans le contenu :**
- Vers `/` : "agence de développement web"
- Vers `/developpement-logiciel-sur-mesure` : "refonte de votre logiciel"
- Vers `/developpement-application-mobile` : "refonte de votre application mobile"

---

## PAGE 4 : /agence-developpement-web-mulhouse

**Fichier :** `app/agence-developpement-web-mulhouse/page.tsx`

**Métadonnées :**
```ts
export const metadata = {
  title: "Agence développement web Mulhouse | Qizuna",
  description: "Qizuna, agence de développement web basée à Mulhouse (68). Logiciels sur mesure, applications mobiles, audit technique. Certifiée France Num.",
  alternates: { canonical: "https://qizuna.fr/agence-developpement-web-mulhouse" },
  openGraph: { title: "Agence développement web Mulhouse | Qizuna", url: "https://qizuna.fr/agence-developpement-web-mulhouse" }
}
```

**Structure HTML (dans l'ordre) :**
```
<h1> Agence développement web à Mulhouse — Qizuna
<h2> Une agence digitale ancrée en Alsace
  → 2 paragraphes : localisation Pfastatt/Mulhouse, intervention locale + remote, certification France Num
<h2> Nos services à Mulhouse et en Alsace
  <h3> Développement web sur mesure
  <h3> Développement application mobile
  <h3> Audit technique
  <h3> Consulting et formation
<h2> Pourquoi choisir une agence locale ?
  → Avantages : réactivité, réunions en présentiel, connaissance du tissu économique local
<h2> Parlons de votre projet
  → Réutiliser le composant formulaire de contact existant
```

**Liens internes à inclure dans le contenu :**
- Vers `/` : "agence de développement web"
- Vers `/developpement-logiciel-sur-mesure` : "développement logiciel sur mesure"
- Vers `/developpement-application-mobile` : "développement application mobile"
- Vers `/audit-technique` : "audit technique"

---

# PARTIE 2 — STRUCTURE BLOG

## Arborescence à créer
```
app/
  blog/
    page.tsx               ← liste des articles
    [slug]/
      page.tsx             ← template article dynamique
content/
  blog/
    saas-vs-logiciel-sur-mesure.mdx
    cout-developpement-logiciel-sur-mesure.mdx
    react-native-vs-flutter.mdx
```

## Dépendances à installer
```bash
npm install next-mdx-remote gray-matter reading-time
```

## page.tsx — Liste des articles (`app/blog/page.tsx`)

**Métadonnées :**
```ts
export const metadata = {
  title: "Blog développement web et logiciel | Qizuna",
  description: "Conseils, guides et retours d'expérience sur le développement web, mobile et logiciel sur mesure par l'équipe Qizuna.",
  alternates: { canonical: "https://qizuna.fr/blog" }
}
```

**Logique :**
- Lire tous les fichiers `.mdx` dans `content/blog/`
- Extraire le frontmatter (title, date, description, slug)
- Afficher une grille de cards triées par date décroissante
- Chaque card : titre, description, date, lien vers `/blog/[slug]`

## page.tsx — Template article (`app/blog/[slug]/page.tsx`)

**Métadonnées dynamiques :**
```ts
export async function generateMetadata({ params }) {
  // Lire le frontmatter du fichier MDX correspondant au slug
  // Retourner title, description, canonical, openGraph
}
```

**Structure HTML de chaque article :**
```
<article>
  <header>
    <h1>{title du frontmatter}</h1>
    <p>Publié le {date} · {readingTime} min de lecture</p>
  </header>
  <div>{contenu MDX rendu}</div>
  <footer>
    → CTA : "Besoin d'un développement sur mesure ? Contactez-nous"
    → Lien vers la page de service la plus proche (selon l'article)
  </footer>
</article>
```

## Frontmatter requis pour chaque fichier MDX
```yaml
---
title: "Titre de l'article"
description: "Meta description (150-160 caractères)"
date: "YYYY-MM-DD"
slug: "nom-du-fichier-sans-extension"
canonical: "https://qizuna.fr/blog/nom-du-fichier-sans-extension"
---
```

---

# PARTIE 3 — MODIFICATIONS FICHIERS EXISTANTS

## Navbar
Ajouter les liens suivants dans le menu de navigation :
```
Services (dropdown) :
  - Développement logiciel → /developpement-logiciel-sur-mesure
  - Application mobile → /developpement-application-mobile
  - Audit technique → /audit-technique
Blog → /blog
```

## Homepage (`app/page.tsx` ou équivalent)
Dans la section "Nos services", ajouter un `<Link>` sur chaque service pointant vers sa page dédiée :
```
"Développement logiciel" → /developpement-logiciel-sur-mesure
"Application mobile" → /developpement-application-mobile
"Audit technique" → /audit-technique
```

## Sitemap (`app/sitemap.ts` ou `public/sitemap.xml`)
Ajouter toutes les nouvelles URLs :
```
https://qizuna.fr/developpement-logiciel-sur-mesure
https://qizuna.fr/developpement-application-mobile
https://qizuna.fr/audit-technique
https://qizuna.fr/agence-developpement-web-mulhouse
https://qizuna.fr/blog
https://qizuna.fr/blog/saas-vs-logiciel-sur-mesure
https://qizuna.fr/blog/cout-developpement-logiciel-sur-mesure
https://qizuna.fr/blog/react-native-vs-flutter
```
Si le sitemap est dynamique (sitemap.ts), faire en sorte qu'il lise automatiquement les fichiers MDX pour inclure les articles du blog.

---

# PARTIE 4 — CE QU'IL NE FAUT PAS TOUCHER
- Le design global (couleurs, typographie, spacing)
- Le composant formulaire de contact
- Le footer
- Les sections homepage non mentionnées dans le prompt homepage
- Les fichiers de configuration (next.config.js, tailwind.config.js, tsconfig.json)
