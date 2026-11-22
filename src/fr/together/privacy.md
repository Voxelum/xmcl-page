---
title: Politique de confidentialité de XMCL Together
description: Comment XMCL Together traite les données de compte, de facturation, d'intelligence artificielle et de multijoueur conformément au RGPD, à la Loi Informatique et Libertés et aux lois internationales sur la protection des données.
---

# Politique de confidentialité de XMCL Together

**Date d'entrée en vigueur : 22 novembre 2026 · Version : P4-2026-11-22**

La présente politique explique comment **CI010**, agissant en tant qu'exploitant individuel sous les noms Voxelum et XMCL (« XMCL Together », « nous », « notre »), traite vos données lorsque vous utilisez un compte XMCL Together, des services payants ou des fonctionnalités en ligne associées sur [xmcl.app](https://xmcl.app). Elle ne régit pas les services indépendants que vous choisissez de connecter, tels que Microsoft, Mojang, des serveurs d'authentification tiers, Modrinth ou CurseForge.

---

## 1. Informations que nous traitons

### Site web Together et télémétrie des services
Les pages et services Together utilisent Microsoft Azure Application Insights configuré en **mode sans cookie** (`disableCookiesUsage: true`), hébergé dans **Azure East Asia (Hong Kong)**, pour enregistrer des pages vues anonymes, des actions de service, des attributs approximatifs de réseau/appareil et des événements de diagnostic. Le site web stocke uniquement un seul cookie local strictement nécessaire (`nf_lang`) pour mémoriser votre préférence de langue. La télémétrie du lanceur open source gratuit est régie séparément par l'[Avis de confidentialité du projet open source XMCL](../privacy).

### Comptes et authentification
Lorsque vous créez ou utilisez un compte XMCL Together, nous traitons les identifiants de compte, les identifiants des fournisseurs d'authentification, les métadonnées de session et de jeton d'actualisation (refresh token), les autorisations accordées (scopes), les horodatages et la télémétrie de sécurité destinée à prévenir les attaques par rejeu ou l'utilisation abusive de comptes. Nous ne recevons ni ne stockons **jamais** vos mots de passe Microsoft ou d'autres comptes tiers.

### Facturation et abonnements
Nous traitons les soldes de compte, les informations de devise et de taux, les commandes, l'état des abonnements, les périodes de quota, les totaux d'utilisation, les remboursements, les litiges, les identifiants d'idempotence et les journaux d'audit. **Waffo Pancake** traite directement les données de carte bancaire et de paiement. XMCL reçoit uniquement les références de transaction, le statut, le montant, la devise et les événements webhook signés, et ne reçoit ni ne stocke jamais les numéros complets de carte ou les cryptogrammes visuels (CVC/CVV).

### Fonctionnalités d'intelligence artificielle (IA)
Si vous utilisez une fonctionnalité d'IA, nous traitons la requête (prompt), le contenu de la conversation, le modèle sélectionné et le contexte du lanceur que vous choisissez de fournir (tel que le nom de l'instance, les versions du jeu et du chargeur, la page sélectionnée ou le chemin local de l'instance). Les requêtes sont transmises à nos fournisseurs d'IA configurés, actuellement **Agnes** et, si nécessaire, **DeepSeek**. Nous mesurons le nombre de jetons (tokens) et la consommation pondérée de quota à des fins de facturation et de prévention des abus. Nous n'utilisons pas vos requêtes ou résultats pour entraîner un modèle propre à XMCL.

> **Avertissement relatif aux fournisseurs d'IA tiers :** Les fournisseurs d'IA externes (Agnes, DeepSeek) traitent les contenus des requêtes selon leurs propres politiques de confidentialité et conditions d'utilisation. Nous configurons les intégrations afin de demander des modes « sans entraînement » (no-training) lorsque cela est pris en charge, mais nous ne pouvons garantir les pratiques internes de traitement des données des fournisseurs d'API externes. Ne soumettez pas de données personnelles sensibles, de mots de passe ou d'informations confidentielles dans vos requêtes d'IA.

### Multijoueur, signalisation et TURN (connectivité pair-à-pair / P2P)
Les fonctionnalités Together et RTC traitent les identifiants de compte et de session, les métadonnées de routage de salon/pairs, les adresses IP, les horodatages, les identifiants d'accès TURN ainsi que les volumes agrégés de trafic entrant/sortant. **Cloudflare** fournit l'infrastructure de périphérie (edge), de signalisation, de relais TURN et d'analyse du trafic.

> **Consentement à l'exposition de l'adresse IP en P2P :** La connectivité pair-à-pair (P2P) révèle par nature votre adresse IP publique à l'autre pair au sein de la session multijoueur. En utilisant les fonctionnalités P2P, vous reconnaissez et consentez explicitement à cette divulgation technique de données nécessaire à l'établissement d'une connexion directe. La signalisation XMCL achemine uniquement les métadonnées de connexion et n'enregistre aucun contenu vocal, vidéo ou de jeu Minecraft.

### Assistance et communications communautaires
Si vous nous contactez, nous traitons les coordonnées, les références de compte ou de transaction, les diagnostics et le contenu des messages que vous soumettez. N'envoyez pas de mots de passe, de jetons d'accès, de données complètes de carte bancaire ou de données personnelles sensibles sans rapport avec votre demande.

---

## 2. Finalités et bases légales

Nous traitons les données afin de :
- fournir, authentifier, sécuriser et dépanner les services XMCL Together ;
- gérer les abonnements, les soldes, les quotas, les paiements, les remboursements et le service client ;
- acheminer les connexions multijoueur et mesurer la consommation de bande passante TURN ;
- générer les réponses d'IA demandées et comptabiliser les quotas d'IA ;
- prévenir la fraude, les attaques par rejeu, les abus et les incidents de sécurité ;
- respecter nos obligations comptables, fiscales, réglementaires, liées aux réseaux de paiement et au règlement des litiges.

**Bases légales (RGPD / Loi Informatique et Libertés / UK GDPR / International) :**
- **Exécution du contrat (art. 6, par. 1, point b) du RGPD) :** fourniture des comptes, abonnements, services d'IA et services multijoueur que vous demandez ;
- **Obligation légale (art. 6, par. 1, point c) du RGPD) :** conservation des pièces financières, fiscales et d'audit de paiement ;
- **Intérêts légitimes (art. 6, par. 1, point f) du RGPD) :** sécurisation de l'infrastructure, prévention de la fraude et des abus, et diagnostics opérationnels sans cookie ;
- **Consentement explicite (art. 6, par. 1, point a) du RGPD) :** requêtes d'IA optionnelles, exposition de l'adresse IP en P2P et transferts transfrontaliers lorsque le consentement est requis par la loi.

---

## 3. Sous-traitants et transferts internationaux de données

Nous ne partageons que ce qui est raisonnablement nécessaire avec les fournisseurs d'infrastructures et de services suivants :

| Destinataire | Finalité et catégories de données | Régions de traitement | Politique de confidentialité |
| :--- | :--- | :--- | :--- |
| **Waffo Pancake** | Paiement en ligne (checkout), lutte contre la fraude, remboursements, webhooks (métadonnées de transaction et de paiement) | Mondial / États-Unis / Singapour | Fournie lors du paiement |
| **Cloudflare** | Workers, CDN, protection DDoS, signalisation WebRTC, relais TURN (métadonnées IP, de session et de trafic) | Réseau Edge mondial / États-Unis | [Confidentialité Cloudflare](https://www.cloudflare.com/privacypolicy/) |
| **Microsoft Azure** | Hébergement, stockage de base de données, Application Insights sans cookie (données de compte, de facturation et de diagnostic) | Hong Kong (Asie de l'Est), États-Unis, UE | [Confidentialité Microsoft](https://privacy.microsoft.com/privacystatement) |
| **Vercel & GitHub** | Diffusion du site web, versions publiées, suivi des anomalies et sécurité | États-Unis / Réseau Edge mondial | [Vercel](https://vercel.com/legal/privacy-policy) / [GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Agnes & DeepSeek** | Génération de réponses IA (requêtes, contexte de conversation, paramètres du modèle) | Mondial / Chine (RPC) / États-Unis | Politiques des fournisseurs |

- **Garanties de transfert :** Les transferts transfrontaliers en dehors de l'EEE, du Royaume-Uni ou de la Suisse reposent sur les Clauses Contractuelles Types de l'UE (CCT / art. 46 du RGPD), l'accord britannique UK IDTA/Addendum, le chiffrement TLS en transit et une minimisation stricte des données.
- **Conséquences d'un refus :** La fourniture des données de compte, de paiement et de routage transfrontalier est nécessaire au fonctionnement de XMCL Together. Si vous refusez ce traitement ou ce transfert transfrontalier, vous pouvez toujours utiliser le lanceur XMCL open source gratuit hors ligne, mais les fonctionnalités hébergées XMCL Together ne seront pas disponibles.
- **Absence de vente de données :** Nous ne vendons **pas** de données personnelles et ne les partageons pas à des fins de publicité comportementale intercontextuelle.

---

## 4. Durées de conservation

Nous appliquons des durées de conservation strictes :
- **Télémétrie opérationnelle, métriques d'utilisation de l'IA et mesures TURN :** conservées pendant une **durée maximale de 90 jours**, puis définitivement supprimées ou anonymisées de manière irréversible.
- **Données de compte et de session :** conservées tant que le compte est actif, plus **30 jours** après la suppression du compte à des fins de récupération et de règlement des litiges.
- **Écritures comptables financières, événements de paiement, remboursements et journaux d'audit :** conservés pendant **5 à 7 ans** (et jusqu'aux durées légales impératives applicables) afin de respecter nos obligations comptables, fiscales et liées aux réseaux de paiement, même après la clôture du compte.
- Les sauvegardes chiffrées sont purgées selon les cycles normaux de rotation.

---

## 5. Vos choix et vos droits légaux

### Droits généraux, RGPD, Loi Informatique et Libertés, UK GDPR et droits internationaux
Vous pouvez :
- désactiver les fonctionnalités en ligne optionnelles ou déconnecter des services tiers ;
- gérer le cookie `nf_lang` via votre navigateur ;
- résilier le renouvellement de Together Home à tout moment depuis l'interface de votre compte (avec effet à la fin de la période payée en cours) ;
- demander l'accès, la rectification, l'effacement (« droit à l'oubli »), la limitation du traitement, la portabilité des données, vous opposer au traitement ou définir des directives relatives au sort de vos données après votre décès ;
- retirer votre consentement à tout moment sans affecter la licéité du traitement antérieur ;
- introduire une réclamation auprès de votre autorité nationale de protection des données, notamment en France auprès de la **CNIL** ([https://www.cnil.fr](https://www.cnil.fr)), au Royaume-Uni auprès de l'ICO ([ico.org.uk](https://ico.org.uk)) ou auprès de votre autorité de contrôle locale.

### Droits à la vie privée en Californie et dans les États américains (CCPA / CPRA)
XMCL ne vend **pas** de données personnelles et ne les partage pas à des fins de publicité comportementale intercontextuelle. Les résidents de Californie et des États américains disposant de lois applicables (VA, CO, CT, UT, TX, OR, etc.) ont le droit de savoir, d'accéder, de supprimer, de corriger des données inexactes et d'exercer ces droits sans discrimination.

---

## 6. Sécurité

Nous mettons en œuvre des sessions à portée limitée, des contrôles d'accès selon le principe du moindre privilège, le chiffrement TLS en transit, des webhooks de paiement signés, une protection contre les attaques par rejeu, l'isolement des secrets et une surveillance continue. Aucun système en ligne n'est totalement exempt de risques ; vous êtes responsable de la protection de votre appareil, de vos sessions et de vos identifiants tiers.

---

## 7. Mineurs et conditions d'âge

- **Services payants et comptes :** Les comptes XMCL Together et les fonctionnalités payantes nécessitent d'avoir au moins **18 ans** (ou l'âge de la majorité légale dans votre juridiction), ou de disposer du consentement vérifiable d'un parent ou d'un tuteur légal.
- **Majorité numérique (Loi Informatique et Libertés) et COPPA :** En France, l'âge du consentement numérique est de **15 ans**. Nous ne collectons pas sciemment de données personnelles auprès de mineurs de moins de **15 ans** en France (ou de moins de 13 ans aux États-Unis/Royaume-Uni, ou en deçà de l'âge local applicable de 14 à 16 ans dans d'autres pays de l'UE) sans consentement parental vérifiable. Les parents ou tuteurs légaux peuvent contacter [cijhn@hotmail.com](mailto:cijhn@hotmail.com) pour une suppression rapide.

---

## 8. Modifications, langue faisant foi et clause de non-responsabilité

- **Modifications :** Nous publierons les mises à jour ici avec une nouvelle date d'entrée en vigueur et une nouvelle version, et nous fournirons un préavis pour les modifications substantielles lorsque la loi l'exige.
- **Langue faisant foi :** En cas de divergence entre une version traduite et la version anglaise, la version anglaise prévaut dans la mesure permise par le droit impératif local.
- **Clause de non-responsabilité Minecraft :** XMCL est un projet indépendant et n'est ni affilié, ni sponsorisé, ni approuvé par Microsoft Corporation ou Mojang Studios.

---

## 9. Contact

**Exploitant / Contact relatif à la protection des données (CI010) :**
- Demandes générales, facturation, remboursements, questions juridiques et confidentialité : [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- Signalement de vulnérabilités : [GitHub private vulnerability reporting](https://github.com/voxelum/x-minecraft-launcher/security)
- Assistance communautaire : [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

Veuillez n'inclure que la référence de compte ou de transaction strictement nécessaire pour localiser votre dossier. Nous pouvons vous demander de vérifier la propriété du compte avant de traiter votre demande.
