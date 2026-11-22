---
title: Avis de confidentialité du projet open source XMCL
description: Avis de confidentialité pour le site Web XMCL et le lanceur open source, conforme à la LPRPDE (Canada), à la Loi 25 du Québec, au RGPD, au UK GDPR, aux lois américaines COPPA/CCPA et aux normes internationales de protection des renseignements personnels.
---

# Avis de confidentialité du projet open source XMCL

**Date d'entrée en vigueur : 22 novembre 2026 · Version : OP3-2026-11-22**

Le présent avis couvre le site Web public XMCL ([xmcl.app](https://xmcl.app)) ainsi que le lanceur XMCL gratuit et open source. Il ne couvre pas les fonctionnalités payantes, les comptes, la facturation, l'intelligence artificielle ni les services de signalisation/TURN multijoueur fournis par XMCL Together, qui sont régis séparément par la [Politique de confidentialité de XMCL Together](./together/privacy).

---

## 1. Responsable de la protection des renseignements personnels et contact

XMCL est un projet open source indépendant exploité par **CI010** et la communauté de contributeurs Voxelum. Conformément à la *Loi sur la protection des renseignements personnels dans le secteur privé* (Loi 25 du Québec) et à la *Loi sur la protection des renseignements personnels et les documents électroniques* (LPRPDE / PIPEDA), le responsable de la protection des renseignements personnels est :

- **Responsable de la protection des renseignements personnels :** CI010
- **Courriel (confidentialité et questions juridiques) :** [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- **Dépôt du code source :** [github.com/voxelum/x-minecraft-launcher](https://github.com/voxelum/x-minecraft-launcher)
- **Signalement de vulnérabilités de sécurité :** [GitHub Security Advisories](https://github.com/voxelum/x-minecraft-launcher/security)
- **Soutien communautaire :** [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

---

## 2. Renseignements traités et minimisation

XMCL applique des principes stricts de minimisation des renseignements personnels :

### Site Web public (xmcl.app)
- **Mesure d'audience agrégée sans témoin (cookie) :** Nous utilisons Microsoft Azure Application Insights configuré en **mode sans témoin** (`disableCookiesUsage: true`), avec ingestion hébergée dans **Microsoft Azure East Asia (Hong Kong)**, afin d'enregistrer des pages vues anonymes, des sélections de téléchargement, des attributs généraux de réseau/appareil et des agents utilisateurs (User-Agent) de navigateur. Aucun témoin d'analyse ni témoin de suivi intersite n'est enregistré sur votre appareil.
- **Témoin strictement nécessaire :** Nous enregistrons uniquement un seul témoin fonctionnel local (`nf_lang`), strictement nécessaire pour mémoriser votre préférence de langue d'interface. Nous n'utilisons aucun témoin tiers de marketing, de publicité ou de suivi comportemental.

### Lanceur open source
- **Télémétrie et diagnostics facultatifs (adhésion volontaire / opt-in) :** La télémétrie de diagnostic est **désactivée par défaut**. Seulement si vous activez explicitement la télémétrie dans les paramètres du lanceur (consentement préalable), le lanceur peut traiter :
  - un identifiant d'installation/d'appareil pseudonyme généré aléatoirement ;
  - des événements du cycle de vie de l'application (lancement du jeu, codes de sortie normaux ou d'erreur, version de l'application) ;
  - le type de fournisseur d'authentification (par exemple, identifiant d'authentification Microsoft ou hors ligne) ;
  - les caractéristiques de base de l'environnement d'exécution (système d'exploitation, version de Java, architecture du processeur) ;
  - les journaux de plantage et traces d'exécution (stack traces).
- **Nettoyage et identifiants :** Les diagnostics de plantage sont expurgés, dans la mesure du possible, des chemins de fichiers sensibles, noms d'utilisateur et jetons système. Nous ne traitons ni ne conservons **jamais** vos mots de passe, identifiants ou jetons de session de compte Microsoft/Mojang.

---

## 3. Conservation des renseignements

Nous évitons toute conservation illimitée :
- Tous les journaux de télémétrie, rapports d'erreur de diagnostic et métriques de performance sont conservés pendant une **durée maximale de 90 jours**, après quoi ils sont détruits de façon définitive ou anonymisés de manière irréversible.
- Les signalements publics sur le suivi des anomalies (issue tracker) de GitHub demeurent accessibles conformément aux politiques de la plateforme GitHub et à la gouvernance du dépôt jusqu'à leur résolution ou suppression.

---

## 4. Fournisseurs de services et transferts hors Québec / internationaux

XMCL fait appel à des fournisseurs d'infrastructure mondiaux pour offrir les téléchargements, les pages Web et les diagnostics facultatifs. Ces renseignements techniques peuvent donc être communiqués et traités **à l'extérieur du Québec et du Canada** :

| Fournisseur | Rôle et renseignements traités | Régions de traitement | Politique de confidentialité |
| :--- | :--- | :--- | :--- |
| **Microsoft Azure (Application Insights)** | Mesure d'audience Web sans témoin, diagnostics facultatifs du lanceur | Hong Kong (Asie de l'Est), États-Unis, UE | [Confidentialité Microsoft](https://privacy.microsoft.com/privacystatement) |
| **Cloudflare** | CDN, routage périphérique (edge), protection DDoS | Réseau Edge mondial / États-Unis | [Confidentialité Cloudflare](https://www.cloudflare.com/privacypolicy/) |
| **GitHub** | Hébergement du code source, versions publiées, suivi des anomalies | États-Unis | [Confidentialité GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Vercel** | Hébergement et diffusion du site Web | États-Unis / Réseau Edge mondial | [Confidentialité Vercel](https://vercel.com/legal/privacy-policy) |

- **Garanties applicables aux transferts hors Québec et internationaux :** Avant de communiquer des renseignements personnels à l'extérieur du Québec, du Canada, de l'EEE, du Royaume-Uni ou de la Suisse, nous appliquons des mesures de protection contractuelles, techniques et organisationnelles adéquates (incluant le chiffrement TLS en transit, la minimisation des données, les Clauses contractuelles types de l'UE [CCT / SCC], l'accord britannique UK IDTA/Addendum et les garanties prévues à l'article 17 de la *Loi sur le secteur privé* du Québec).
- **Droit de refus :** Vous pouvez refuser le transfert transfrontalier des diagnostics du lanceur en laissant simplement la télémétrie désactivée (son état par défaut).
- **Aucune vente de renseignements :** Nous ne vendons jamais de renseignements personnels et ne les partageons pas à des fins de publicité comportementale intercontextuelle.

---

## 5. Dispositions propres au Canada, au Québec et aux autres juridictions

### Canada (LPRPDE / PIPEDA) et Québec (Loi 25)
- **Lois applicables :** Le traitement des renseignements personnels des résidents du Canada est régi par la *Loi sur la protection des renseignements personnels et les documents électroniques* (**LPRPDE / PIPEDA**) ainsi que par les lois provinciales essentiellement similaires applicables, notamment au Québec la *Loi sur la protection des renseignements personnels dans le secteur privé* (RLRQ, c. P-39.1, telle que modifiée par la **Loi 25**).
- **Âge du consentement au Québec :** Au Québec, le consentement à la collecte de renseignements personnels d'un mineur de **moins de 14 ans** doit être donné par le titulaire de l'autorité parentale ou le tuteur. Les mineurs de 14 ans et plus peuvent consentir eux-mêmes à la télémétrie technique facultative (les services payants XMCL Together demeurent soumis aux exigences de majorité légale décrites dans la politique Together).
- **Vos droits en vertu de la LPRPDE et de la Loi 25 :** Vous avez le droit :
  - d'accéder à vos renseignements personnels et d'en demander la rectification s'ils sont inexacts, incomplets ou équivoques ;
  - de retirer votre consentement en tout temps ;
  - au Québec, d'exercer votre **droit à la portabilité** (obtenir une copie de vos renseignements personnels informatisés dans un format technologique structuré et couramment utilisé) et votre **droit à la désindexation / cessation de diffusion** lorsque la loi le prévoit ;
  - d'être informé des décisions fondées exclusivement sur un traitement automatisé, le cas échéant (XMCL n'utilise pas de prise de décision automatisée produisant des effets juridiques sur le site public ou le lanceur open source) ;
  - de déposer une plainte auprès du **Commissariat à la protection de la vie privée du Canada (CPVP)** à l'adresse [https://www.priv.gc.ca](https://www.priv.gc.ca) ou, au Québec, auprès de la **Commission d'accès à l'information du Québec (CAI)** à l'adresse [https://www.cai.gouv.qc.ca](https://www.cai.gouv.qc.ca).

### Union européenne et EEE (RGPD)
- **Bases légales :** Consentement (art. 6(1)(a) RGPD) pour la télémétrie de diagnostic facultative ; intérêts légitimes (art. 6(1)(f) RGPD) pour la sécurité de l'infrastructure, la disponibilité et la mesure d'audience agrégée sans témoin.
- **Âge du consentement :** 16 ans (ou l'âge numérique applicable dans l'État membre, de 13 à 15 ans).
- **Vos droits :** Droits d'accès, de rectification, d'effacement, de limitation, de portabilité, d'opposition, de retrait du consentement et de plainte auprès de votre autorité de contrôle nationale.

### Royaume-Uni (UK GDPR et DPA 2018)
- Réglementé par le UK GDPR et le Data Protection Act 2018. Âge du consentement numérique : **13 ans**. Autorité de contrôle : UK Information Commissioner's Office (ICO) à [ico.org.uk](https://ico.org.uk).

### États-Unis (COPPA, CCPA / CPRA et lois des États)
- **COPPA :** XMCL ne s'adresse pas aux enfants de moins de 13 ans. Nous ne recueillons pas sciemment de renseignements personnels d'enfants de moins de 13 ans. Les parents ou tuteurs peuvent écrire à [cijhn@hotmail.com](mailto:cijhn@hotmail.com) pour demander une suppression rapide.
- **CCPA / CPRA et lois des États :** XMCL ne vend **pas** et ne partage pas de renseignements personnels à des fins de publicité comportementale intercontextuelle. Les résidents des États dotés de lois applicables disposent des droits de savoir, d'accès, de correction, de suppression et de non-discrimination.

### Autres juridictions
- Nous respectons les droits équivalents en vertu des lois locales applicables dans le monde entier (notamment Brésil LGPD, Japon APPI, Corée du Sud PIPA, Chine PIPL, Taïwan PDPA, Turquie KVKK, Inde DPDP Act, Indonésie UU PDP, Vietnam Décret 13, Ukraine, Arabie saoudite/ÉAU PDPL).

---

## 6. Exercice de vos droits

Pour exercer vos droits d'accès, de rectification, de suppression, de portabilité, de désindexation ou de retrait de consentement, veuillez communiquer avec le responsable de la protection des renseignements personnels (**CI010**) par courriel à **[cijhn@hotmail.com](mailto:cijhn@hotmail.com)**. Nous répondrons dans les délais prescrits par la loi applicable (généralement dans les 30 jours au Canada et au Québec).

---

## 7. Langue faisant foi et avis de non-responsabilité

- **Langue faisant foi :** La version française du présent avis est fournie en conformité avec la *Charte de la langue française* du Québec. En cas de divergence entre une version traduite et la version anglaise, la version anglaise prévaut uniquement dans la mesure permise par le droit impératif local (sans porter atteinte aux droits linguistiques impératifs reconnus aux résidents du Québec).
- **Avis concernant Minecraft et Mojang :** XMCL est un projet logiciel open source indépendant et n'est ni affilié, ni autorisé, ni commandité, ni approuvé par Microsoft Corporation ou Mojang Studios.
