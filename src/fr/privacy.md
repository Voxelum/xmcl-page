---
title: Avis de confidentialité du projet open source XMCL
description: Avis de confidentialité pour le site web XMCL et le lanceur open source, conforme au RGPD, à la Loi Informatique et Libertés, au UK GDPR, aux lois américaines COPPA/CCPA et aux normes internationales de protection des données.
---

# Avis de confidentialité du projet open source XMCL

**Date d'entrée en vigueur : 22 novembre 2026 · Version : OP3-2026-11-22**

Le présent avis couvre le site web public XMCL ([xmcl.app](https://xmcl.app)) ainsi que le lanceur XMCL gratuit et open source. Il ne couvre pas les fonctionnalités payantes, les comptes, la facturation, l'intelligence artificielle ou les services de signalisation/TURN multijoueur fournis par XMCL Together, qui sont régis séparément par la [Politique de confidentialité de XMCL Together](./together/privacy).

---

## 1. Responsable du traitement et contact

XMCL est un projet open source indépendant exploité par **CI010** et la communauté de contributeurs Voxelum.
- **Demandes relatives à la confidentialité et aux questions juridiques :** [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- **Dépôt du code source :** [github.com/voxelum/x-minecraft-launcher](https://github.com/voxelum/x-minecraft-launcher)
- **Signalement de vulnérabilités de sécurité :** [GitHub Security Advisories](https://github.com/voxelum/x-minecraft-launcher/security)
- **Assistance communautaire :** [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

---

## 2. Informations traitées et minimisation des données

XMCL applique strictement le principe de minimisation des données (art. 5, par. 1, point c) du RGPD) :

### Site web public (xmcl.app)
- **Mesure d'audience agrégée sans cookie :** Nous utilisons Microsoft Azure Application Insights configuré en **mode sans cookie** (`disableCookiesUsage: true`), avec ingestion hébergée dans **Microsoft Azure East Asia (Hong Kong)**, afin d'enregistrer des pages vues anonymes, des sélections de téléchargement, des attributs généraux de réseau/appareil et des agents utilisateurs (User-Agent) de navigateur. Aucun cookie d'analyse ni cookie de suivi intersites n'est déposé sur votre terminal.
- **Cookie strictement nécessaire :** Nous stockons uniquement un seul cookie fonctionnel local (`nf_lang`), strictement nécessaire pour mémoriser votre préférence de langue d'interface. Nous n'utilisons aucun cookie tiers de marketing, de publicité ou de suivi comportemental.

### Lanceur open source
- **Télémétrie et diagnostics optionnels (Opt-in) :** La télémétrie de diagnostic est **désactivée par défaut**. Uniquement si vous activez explicitement la télémétrie dans les paramètres du lanceur (consentement préalable), le lanceur peut traiter :
  - un identifiant d'installation/d'appareil pseudonyme généré aléatoirement ;
  - des événements du cycle de vie de l'application (lancement du jeu, codes de sortie normaux/d'erreur, version de l'application) ;
  - le type de fournisseur d'authentification (par exemple, identifiant d'authentification Microsoft ou hors ligne) ;
  - les caractéristiques de base de l'environnement d'exécution (système d'exploitation, version de Java, architecture du processeur) ;
  - les journaux de plantage (crash logs) et les traces d'exécution (stack traces).
- **Nettoyage et identifiants :** Les diagnostics de plantage sont expurgés, dans la mesure du possible, des chemins de fichiers sensibles, noms d'utilisateur et jetons système. Nous ne traitons ni ne stockons **jamais** vos mots de passe, identifiants ou jetons de session de compte Microsoft/Mojang.

---

## 3. Durée de conservation des données

Nous évitons toute conservation illimitée :
- Tous les journaux de télémétrie, rapports d'erreur de diagnostic et métriques de performance sont conservés pendant une **durée maximale de 90 jours**, après quoi ils sont définitivement supprimés ou anonymisés de manière irréversible.
- Les signalements publics sur le suivi des anomalies (issue tracker) de GitHub restent disponibles conformément aux politiques de la plateforme GitHub et à la gouvernance du dépôt jusqu'à leur résolution ou suppression.

---

## 4. Sous-traitants et transferts internationaux de données

XMCL fait appel à des fournisseurs d'infrastructures mondiaux pour fournir les téléchargements, les pages web et les diagnostics optionnels :

| Fournisseur | Rôle et données traitées | Régions de traitement | Politique de confidentialité |
| :--- | :--- | :--- | :--- |
| **Microsoft Azure (Application Insights)** | Mesure d'audience web sans cookie, diagnostics optionnels du lanceur | Hong Kong (Asie de l'Est), États-Unis, UE | [Confidentialité Microsoft](https://privacy.microsoft.com/privacystatement) |
| **Cloudflare** | CDN, routage en périphérie (edge), protection DDoS | Réseau Edge mondial / États-Unis | [Confidentialité Cloudflare](https://www.cloudflare.com/privacypolicy/) |
| **GitHub** | Hébergement du code source, versions publiées, suivi des anomalies | États-Unis | [Confidentialité GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Vercel** | Hébergement et diffusion du site web | États-Unis / Réseau Edge mondial | [Confidentialité Vercel](https://vercel.com/legal/privacy-policy) |

- **Garanties de transfert :** Lorsque des données techniques sont transférées en dehors de l'EEE, du Royaume-Uni ou de la Suisse, nous nous appuyons sur les Clauses Contractuelles Types (CCT / SCC) approuvées par la Commission européenne (art. 46 du RGPD), l'accord britannique UK IDTA / Addendum et des garanties légales équivalentes.
- **Droit de refus :** Vous pouvez refuser le transfert transfrontalier des diagnostics du lanceur en laissant simplement la télémétrie désactivée (son état par défaut).
- **Absence de vente de données :** Nous ne vendons jamais de données personnelles et ne les partageons pas à des fins de publicité comportementale intercontextuelle.

---

## 5. Dispositions régionales et droits légaux

### Union européenne, EEE et France (RGPD & Loi Informatique et Libertés)
- **Bases légales :** Consentement (art. 6, par. 1, point a) du RGPD) pour la télémétrie de diagnostic optionnelle ; intérêt légitime (art. 6, par. 1, point f) du RGPD) pour la sécurité de l'infrastructure, la disponibilité et la mesure d'audience agrégée sans cookie.
- **Majorité numérique :** En France, l'âge du consentement numérique est fixé à **15 ans** en application de la Loi Informatique et Libertés (art. 45) et de l'art. 8 du RGPD (13 à 16 ans selon les autres États membres de l'UE). Les mineurs en deçà de ce seuil doivent obtenir le consentement conjoint de leur parent ou tuteur légal.
- **Vos droits :** En vertu des articles 15 à 22 du RGPD et de la Loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement (« droit à l'oubli »), de limitation du traitement, de portabilité des données, d'opposition, du droit de définir des directives relatives au sort de vos données après votre décès, du droit de retirer votre consentement à tout moment, ainsi que du droit d'introduire une réclamation auprès de la **Commission Nationale de l'Informatique et des Libertés (CNIL)** à l'adresse [https://www.cnil.fr](https://www.cnil.fr) ou auprès de votre autorité nationale de contrôle.

### Royaume-Uni (UK GDPR & DPA 2018)
- Réglementé par le UK GDPR et le Data Protection Act 2018. Âge du consentement numérique : **13 ans**. Autorité de contrôle : UK Information Commissioner's Office (ICO) sur [ico.org.uk](https://ico.org.uk).

### États-Unis (COPPA, CCPA / CPRA et lois des États)
- **COPPA :** XMCL ne s'adresse pas aux enfants de moins de 13 ans. Nous ne collectons pas sciemment de données personnelles auprès d'enfants de moins de 13 ans. Les parents ou tuteurs peuvent contacter [cijhn@hotmail.com](mailto:cijhn@hotmail.com) pour demander une suppression rapide.
- **CCPA / CPRA et lois des États américains :** XMCL ne vend **pas** et ne partage pas de données personnelles à des fins de publicité comportementale intercontextuelle. Les résidents de Californie, Virginie, Colorado, Connecticut, Utah, Texas, Oregon et d'autres États dotés de lois applicables disposent du droit de savoir, d'accéder, de corriger, de supprimer leurs données et d'exercer ces droits sans discrimination.

### Autres juridictions
- Nous respectons les droits équivalents des personnes concernées en vertu des lois locales applicables dans le monde entier (y compris Brésil LGPD, Japon APPI, Corée du Sud PIPA, Chine PIPL, Taïwan PDPA, Turquie KVKK, Inde DPDP Act, Indonésie UU PDP, Vietnam Décret 13, Ukraine, Arabie saoudite/ÉAU PDPL).

---

## 6. Exercice de vos droits

Pour exercer vos droits d'accès, de rectification, d'effacement ou de retrait du consentement, veuillez contacter **CI010** à l'adresse **[cijhn@hotmail.com](mailto:cijhn@hotmail.com)**.

---

## 7. Langue faisant foi et clause de non-responsabilité

- **Langue faisant foi :** Les traductions du présent avis sont fournies pour votre commodité. En cas de divergence entre une version traduite et la version anglaise, la version anglaise prévaut dans la mesure permise par le droit impératif local.
- **Clause de non-responsabilité Minecraft et Mojang :** XMCL est un projet logiciel open source indépendant et n'est ni affilié, ni autorisé, ni sponsorisé, ni approuvé par Microsoft Corporation ou Mojang Studios.
