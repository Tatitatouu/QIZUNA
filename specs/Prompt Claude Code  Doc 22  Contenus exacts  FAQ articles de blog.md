# CONTENUS À INSÉRER — qizuna.fr
Colle ces contenus exactement là où le Doc 1/2 indique "Insérer FAQ_XXX" ou dans les fichiers MDX.

---

# PARTIE 1 — FAQ DES PAGES DE SERVICE

## FAQ_LOGICIEL — /developpement-logiciel-sur-mesure

**Q : Quelle est la différence entre un logiciel sur mesure et un SaaS ?**
Un SaaS est un logiciel générique conçu pour le plus grand nombre. Un logiciel sur mesure est développé spécifiquement pour vos processus métier : il s'adapte à votre organisation, pas l'inverse. Il n'y a pas d'abonnement mensuel, pas de fonctionnalités inutiles, et vous en êtes propriétaire.

**Q : Combien coûte un développement logiciel sur mesure ?**
Le coût dépend de la complexité fonctionnelle, des intégrations nécessaires et du niveau de finition attendu. Un premier projet démarre généralement entre 15 000 € et 50 000 €. Nous établissons un devis détaillé après un cadrage gratuit de votre besoin.

**Q : Combien de temps faut-il pour développer un logiciel sur mesure ?**
Un logiciel simple (5 à 10 écrans, une base de données) prend entre 2 et 4 mois. Un projet plus complexe avec des intégrations tierces peut prendre 6 à 12 mois. Nous travaillons en sprints agiles de 2 semaines pour vous livrer des résultats visibles rapidement.

**Q : Serons-nous dépendants de Qizuna après la livraison ?**
Non. Nous livrons le code source complet, documenté, sans lock-in technologique. Vous pouvez reprendre le projet en interne ou le confier à une autre équipe à tout moment. Nous proposons également une maintenance optionnelle si vous souhaitez continuer à travailler avec nous.

**Q : Pouvez-vous reprendre un logiciel existant développé par une autre équipe ?**
Oui. Nous commençons par un audit technique pour évaluer l'état du code, identifier la dette technique et proposer un plan de reprise. C'est souvent plus rapide et moins coûteux qu'une réécriture complète.

---

## FAQ_MOBILE — /developpement-application-mobile

**Q : Vaut-il mieux développer une app native ou cross-platform ?**
Pour la majorité des projets, React Native (cross-platform) est le meilleur compromis : une seule base de code pour iOS et Android, des performances proches du natif, et un coût de développement réduit. Le natif pur (Swift/Kotlin) est recommandé uniquement pour des apps très exigeantes en performance (jeux, réalité augmentée).

**Q : Combien coûte le développement d'une application mobile ?**
Une application mobile simple (authentification, quelques écrans, API REST) démarre autour de 20 000 €. Une app complexe avec paiement intégré, géolocalisation ou fonctionnalités temps réel peut dépasser 60 000 €. Nous établissons un devis précis après cadrage gratuit.

**Q : Gérez-vous la publication sur l'App Store et le Google Play ?**
Oui. Nous gérons l'intégralité du processus de publication : création des comptes développeur si nécessaire, préparation des assets (icônes, screenshots), soumission et suivi de validation. Nous vous formons également à la gestion des mises à jour.

**Q : Combien de temps faut-il pour développer une application mobile ?**
Entre 3 et 6 mois pour une application standard. Nous travaillons en sprints agiles avec des démos régulières pour valider chaque étape avec vous.

**Q : Pouvez-vous faire évoluer une application mobile existante ?**
Oui. Nous reprenons des projets existants après un audit technique. Que ce soit pour corriger des bugs, améliorer les performances ou ajouter de nouvelles fonctionnalités, nous nous adaptons à votre base de code existante.

---

## FAQ_AUDIT — /audit-technique

**Q : Qu'est-ce qu'un audit technique et à quoi ça sert ?**
Un audit technique est une analyse approfondie de votre application ou logiciel existant. Il permet d'identifier les problèmes de performance, les failles de sécurité, la dette technique accumulée et les risques architecturaux. Le résultat est un rapport détaillé avec des recommandations priorisées et un plan d'action chiffré.

**Q : Dans quels cas faut-il réaliser un audit technique ?**
Un audit est recommandé avant une refonte, quand l'application devient lente ou instable, avant une levée de fonds (due diligence technique), lors d'un changement d'équipe de développement, ou simplement pour avoir une vision claire de l'état de votre patrimoine logiciel.

**Q : Combien de temps dure un audit technique ?**
Entre 5 et 15 jours selon la taille et la complexité de l'application. Nous vous remettons un rapport écrit avec une présentation orale des conclusions.

**Q : Que contient le rapport d'audit ?**
Le rapport comprend : une synthèse exécutive (accessible aux non-techniciens), une analyse détaillée par domaine (performance, sécurité, architecture, qualité du code), une matrice de risques, et un plan d'action priorisé avec estimations de charge.

**Q : Pouvez-vous aussi réaliser les corrections après l'audit ?**
Oui. L'audit peut être suivi d'une mission de remédiation. Nous établissons un devis séparé pour les corrections, en priorisant les actions à fort impact. Vous restez libre de confier les corrections à votre équipe interne si vous le souhaitez.

---

# PARTIE 2 — ARTICLES DE BLOG (fichiers MDX)

## Fichier : content/blog/saas-vs-logiciel-sur-mesure.mdx

```mdx
---
title: "SaaS ou logiciel sur mesure : que choisir pour votre entreprise ?"
description: "SaaS ou développement sur mesure : comment faire le bon choix pour votre entreprise ? Comparatif complet des coûts, avantages et cas d'usage."
date: "2024-02-15"
slug: "saas-vs-logiciel-sur-mesure"
canonical: "https://qizuna.fr/blog/saas-vs-logiciel-sur-mesure"
---

Quand une entreprise cherche à digitaliser un processus métier, la question revient toujours : faut-il adopter un SaaS existant ou investir dans un développement sur mesure ? Les deux options ont leurs mérites — tout dépend de votre situation.

## Ce qu'est un SaaS (et ses limites)

Un SaaS (Software as a Service) est un logiciel hébergé dans le cloud, accessible par abonnement. Salesforce, HubSpot, Notion, Jira : ce sont des SaaS. Leurs avantages sont réels : déploiement immédiat, pas de maintenance à gérer, coût initial faible.

Mais leurs limites apparaissent rapidement dès que vos besoins deviennent spécifiques :

- **Fonctionnalités figées** : vous vous adaptez au logiciel, pas l'inverse
- **Coût cumulatif** : un abonnement à 200 €/mois représente 24 000 € sur 10 ans
- **Dépendance fournisseur** : si l'éditeur augmente ses prix ou ferme, vous êtes bloqué
- **Intégrations limitées** : connecter un SaaS à vos outils internes est souvent complexe et coûteux

## Ce qu'apporte un logiciel sur mesure

Un logiciel développé sur mesure est conçu spécifiquement pour vos processus. Il fait exactement ce dont vous avez besoin — ni plus, ni moins.

Les avantages principaux :

- **Adapté à vos workflows** : pas de compromis sur vos processus métier
- **Propriété totale** : vous êtes propriétaire du code source
- **Pas d'abonnement** : un investissement unique, pas une charge récurrente
- **Évolutif** : vous ajoutez des fonctionnalités quand vous en avez besoin
- **Intégrable** : connexion native avec vos outils existants (ERP, CRM, etc.)

## Comment choisir ?

| Critère | SaaS | Sur mesure |
|---|---|---|
| Budget initial | Faible | Élevé |
| Coût sur 5 ans | Élevé (abonnements) | Faible (maintenance) |
| Adaptation à vos besoins | Partielle | Totale |
| Délai de déploiement | Immédiat | 2 à 6 mois |
| Propriété du code | Non | Oui |
| Dépendance fournisseur | Forte | Nulle |

**Choisissez un SaaS si** : votre besoin est standard, votre budget est limité, et vous avez besoin d'une solution immédiate.

**Choisissez le sur mesure si** : votre processus est différenciant, vous avez des contraintes d'intégration fortes, ou vous prévoyez une utilisation sur plus de 3 ans.

## Notre recommandation

Pour la majorité des PME avec des processus métier spécifiques, le logiciel sur mesure devient rentable dès 3 à 4 ans d'utilisation. Au-delà, chaque année d'utilisation est un gain net par rapport aux abonnements SaaS.

Vous hésitez entre les deux options ? [Parlons de votre projet](/developpement-logiciel-sur-mesure) — nous vous aidons à faire le bon choix sans parti pris.
```

---

## Fichier : content/blog/cout-developpement-logiciel-sur-mesure.mdx

```mdx
---
title: "Combien coûte un développement logiciel sur mesure en 2024 ?"
description: "Prix d'un développement logiciel sur mesure : fourchettes réalistes, facteurs qui influencent le coût, et comment optimiser votre budget."
date: "2024-03-01"
slug: "cout-developpement-logiciel-sur-mesure"
canonical: "https://qizuna.fr/blog/cout-developpement-logiciel-sur-mesure"
---

C'est la question que tout le monde pose en premier — et à laquelle personne ne veut répondre clairement. Voici une réponse honnête, avec des fourchettes réalistes et les facteurs qui font varier le prix.

## Les fourchettes de prix en France

| Type de projet | Fourchette | Exemples |
|---|---|---|
| Application simple | 10 000 € – 25 000 € | Outil interne, formulaire complexe, tableau de bord |
| Application métier | 25 000 € – 60 000 € | CRM sur mesure, plateforme de gestion, SaaS simple |
| Logiciel complexe | 60 000 € – 150 000 € | ERP, marketplace, plateforme multi-tenant |
| Projet enterprise | 150 000 € + | Systèmes critiques, haute disponibilité, conformité réglementaire |

Ces fourchettes correspondent à des développements réalisés en France par une agence spécialisée. Les tarifs offshore sont inférieurs, mais impliquent des risques de qualité et de communication à ne pas sous-estimer.

## Les 5 facteurs qui font varier le coût

### 1. Le nombre de fonctionnalités
C'est le facteur principal. Chaque fonctionnalité a un coût de développement, de test et de maintenance. Un périmètre bien défini en amont évite les dérives budgétaires.

### 2. La complexité des intégrations
Connecter votre logiciel à des outils tiers (ERP, CRM, API bancaire, système de paiement) représente souvent 20 à 30 % du budget total.

### 3. Le niveau d'exigence UX/UI
Un design soigné avec des animations, une expérience utilisateur travaillée et des tests utilisateurs coûte plus cher qu'une interface fonctionnelle standard.

### 4. Les contraintes de sécurité et conformité
RGPD, HDS (hébergement de données de santé), PCI-DSS (paiement) : chaque contrainte réglementaire ajoute du temps de développement et d'audit.

### 5. La maintenance et les évolutions
Prévoir un budget de maintenance annuel de 15 à 20 % du coût initial est une bonne pratique. Cela couvre les mises à jour de sécurité, les corrections de bugs et les petites évolutions.

## Comment optimiser votre budget

**Priorisez un MVP** : commencez par les fonctionnalités essentielles, livrez rapidement, puis itérez. C'est moins risqué et vous permet de valider l'usage réel avant d'investir davantage.

**Rédigez un cahier des charges précis** : plus votre besoin est documenté, plus le devis sera précis et moins vous aurez de mauvaises surprises.

**Évitez le moins-disant** : un devis 40 % moins cher qu'un autre cache souvent une sous-estimation volontaire, une équipe offshore ou une qualité de code insuffisante.

## Ce que comprend notre devis

Chez Qizuna, chaque devis inclut : cadrage fonctionnel, développement, tests (TDD), documentation technique, déploiement et une période de garantie. Pas de coûts cachés.

[Demandez un devis gratuit](/developpement-logiciel-sur-mesure) — nous répondons sous 24h.
```

---

## Fichier : content/blog/react-native-vs-flutter.mdx

```mdx
---
title: "React Native vs Flutter : quel framework choisir pour votre app mobile ?"
description: "Comparatif React Native vs Flutter en 2024 : performances, écosystème, courbe d'apprentissage. Quel framework choisir pour votre projet mobile ?"
date: "2024-03-15"
slug: "react-native-vs-flutter"
canonical: "https://qizuna.fr/blog/react-native-vs-flutter"
---

React Native (Meta) et Flutter (Google) sont les deux frameworks cross-platform dominants pour le développement d'applications mobiles. Les deux permettent de cibler iOS et Android avec une seule base de code — mais leurs approches sont très différentes.

## React Native en bref

React Native utilise JavaScript/TypeScript et le paradigme React. Il compile vers des composants natifs réels — ce qui signifie que l'UI utilise les vrais composants iOS et Android, pas des équivalents simulés.

**Points forts :**
- Écosystème JavaScript mature (npm, millions de packages)
- Courbe d'apprentissage faible pour les équipes web React
- Hot reload rapide en développement
- Large communauté et support Meta + Microsoft

**Points faibles :**
- Performances légèrement inférieures à Flutter sur les animations complexes
- Dépendance au bridge JS/natif (en cours de résolution avec la nouvelle architecture)
- Fragmentation des packages tiers

## Flutter en bref

Flutter utilise le langage Dart et dessine lui-même chaque pixel de l'interface via son propre moteur de rendu (Skia/Impeller). L'UI est identique sur iOS et Android — ce qui est un avantage pour la cohérence visuelle, mais signifie que l'app ne ressemble pas aux apps natives.

**Points forts :**
- Performances excellentes, même sur les animations complexes
- UI pixel-perfect identique sur toutes les plateformes
- Compilation AOT (Ahead of Time) pour des démarrages rapides
- Cible aussi le web et le desktop

**Points faibles :**
- Dart est un langage peu répandu (courbe d'apprentissage)
- Taille des apps plus importante
- L'UI ne ressemble pas aux composants natifs iOS/Android

## Comparatif synthétique

| Critère | React Native | Flutter |
|---|---|---|
| Langage | JavaScript / TypeScript | Dart |
| Performances | Très bonnes | Excellentes |
| UI native | Oui | Non (rendu custom) |
| Courbe d'apprentissage | Faible (si React connu) | Moyenne |
| Écosystème | Très large | En croissance |
| Taille de l'app | Légère | Plus lourde |
| Communauté | Très large | Large |

## Notre recommandation

**Choisissez React Native si** : votre équipe maîtrise déjà React/JavaScript, vous avez besoin d'intégrations natives complexes, ou vous développez en parallèle une application web.

**Choisissez Flutter si** : les performances et la cohérence visuelle sont prioritaires, vous partez de zéro sans contrainte technologique, ou vous ciblez aussi le desktop.

Chez Qizuna, nous travaillons principalement avec React Native — notre expertise web React nous permet de partager du code et des compétences entre les projets web et mobile, ce qui réduit les coûts et les délais.

[Parlons de votre projet mobile](/developpement-application-mobile) — nous vous conseillons le meilleur choix selon votre contexte.
```
