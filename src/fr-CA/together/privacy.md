---
title: Politique de confidentialité de XMCL Together
description: Comment XMCL Together traite les renseignements de compte, de facturation, d'intelligence artificielle et de multijoueur conformément à la LPRPDE (Canada), à la Loi 25 du Québec et aux lois internationales sur la protection des renseignements personnels.
---

# Politique de confidentialité de XMCL Together

**Date d'entrée en vigueur : 22 novembre 2026 · Version : P4-2026-11-22**

La présente politique explique comment **CI010**, agissant à titre d'exploitant individuel sous les noms Voxelum et XMCL (« XMCL Together », « nous », « notre »), recueille, utilise, communique et conserve vos renseignements personnels lorsque vous utilisez un compte XMCL Together, des services payants ou des fonctionnalités en ligne connexes sur [xmcl.app](https://xmcl.app). Elle ne régit pas les services indépendants que vous choisissez de connecter, tels que Microsoft, Mojang, des serveurs d'authentification tiers, Modrinth ou CurseForge.

**Responsable de la protection des renseignements personnels (Loi 25 du Québec / LPRPDE) :** CI010 — [cijhn@hotmail.com](mailto:cijhn@hotmail.com).

---

## 1. Renseignements que nous traitons

### Site Web Together et télémétrie des services
Les pages et services Together utilisent Microsoft Azure Application Insights configuré en **mode sans témoin (cookie)** (`disableCookiesUsage: true`), hébergé dans **Azure East Asia (Hong Kong)**, pour enregistrer des pages vues anonymes, des actions de service, des attributs approximatifs de réseau/appareil et des événements de diagnostic. Le site Web enregistre uniquement un seul témoin local strictement nécessaire (`nf_lang`) pour mémoriser votre préférence de langue. La télémétrie du lanceur open source gratuit est régie séparément par l'[Avis de confidentialité du projet open source XMCL](../privacy).

### Comptes et authentification
Lorsque vous créez ou utilisez un compte XMCL Together, nous traitons les identifiants de compte, les identifiants des fournisseurs d'authentification, les métadonnées de session et de jeton d'actualisation (refresh token), les autorisations accordées (scopes), les horodatages et la télémétrie de sécurité servant à prévenir les attaques par rejeu ou les abus de compte. Nous ne recevons ni ne conservons **jamais** vos mots de passe Microsoft ou d'autres comptes tiers.

### Facturation et abonnements
Nous traitons les soldes de compte, les renseignements de devise et de tarif, les commandes, l'état des abonnements, les périodes de quota, les totaux d'utilisation, les remboursements, les litiges, les identifiants d'idempotence et les registres d'audit. **Waffo Pancake** traite directement les renseignements de carte de paiement et de passage à la caisse. XMCL reçoit uniquement les références de transaction, le statut, le montant, la devise et les événements webhook signés, et ne reçoit ni ne conserve jamais les numéros complets de carte ni les codes de sécurité (CVC/CVV).

### Fonctionnalités d'intelligence artificielle (IA)
Si vous utilisez une fonctionnalité d'IA, nous traitons votre requête (prompt), le contenu de la conversation, le modèle choisi et le contexte du lanceur que vous choisissez de transmettre (comme le nom de l'instance, les versions du jeu et du chargeur, la page affichée ou le chemin local de l'instance). Les requêtes sont transmises à nos fournisseurs d'IA configurés, actuellement **Agnes** et, au besoin, **DeepSeek**. Nous mesurons le nombre de jetons (tokens) et la consommation pondérée de quota à des fins de facturation et de prévention des abus. Nous n'utilisons pas vos requêtes ou vos résultats pour entraîner un modèle propre à XMCL.

> **Avertissement concernant les fournisseurs d'IA tiers :** Les fournisseurs d'IA externes (Agnes, DeepSeek) traitent les données transmises selon leurs propres politiques de confidentialité et conditions d'utilisation. Nous configurons les intégrations pour demander des modes « sans entraînement » (no-training) lorsque pris en charge, mais nous ne pouvons garantir les pratiques internes des fournisseurs d'API externes. Ne soumettez pas de renseignements personnels sensibles, de mots de passe ni d'informations confidentielles dans vos requêtes d'IA.

### Multijoueur, signalisation et TURN (connectivité pair-à-pair / P2P)
Les fonctionnalités Together et RTC traitent les identifiants de compte et de session, les métadonnées de routage de salon/pairs, les adresses IP, les horodatages, les identifiants d'accès TURN et les volumes agrégés de trafic entrant/sortant. **Cloudflare** fournit l'infrastructure périphérique (edge), de signalisation, de relais TURN et d'analyse du trafic.

> **Consentement à l'exposition de l'adresse IP en P2P :** La connectivité pair-à-pair (P2P) révèle par nature votre adresse IP publique à l'autre pair au sein de la session multijoueur. En utilisant les fonctionnalités P2P, vous reconnaissez et consentez expressément à cette communication technique nécessaire à l'établissement d'une connexion directe. La signalisation XMCL achemine uniquement les métadonnées de connexion et n'enregistre aucun contenu vocal, vidéo ni de jeu Minecraft.

### Soutien et communications communautaires
Si vous communiquez avec nous, nous traitons les coordonnées, les références de compte ou de transaction, les diagnostics et le contenu des messages que vous nous transmettez. N'envoyez pas de mots de passe, de jetons d'accès, de renseignements complets de carte de paiement ni de renseignements personnels sensibles sans lien avec votre demande.

---

## 2. Finalités et fondements juridiques

Nous traitons les renseignements personnels pour :
- fournir, authentifier, sécuriser et dépanner les services XMCL Together ;
- gérer les abonnements, les soldes, les quotas, les paiements, les remboursements et le service à la clientèle ;
- acheminer les connexions multijoueur et mesurer la consommation de bande passante TURN ;
- générer les réponses d'IA demandées et comptabiliser les quotas d'IA ;
- prévenir la fraude, les attaques par rejeu, les abus et les incidents de sécurité ;
- respecter nos obligations comptables, fiscales, réglementaires, liées aux réseaux de paiement et au règlement des litiges.

**Fondements juridiques (LPRPDE / Loi 25 du Québec / RGPD / UK GDPR / International) :**
- **Consentement manifeste, libre et éclairé (LPRPDE / Loi 25 du Québec / art. 6(1)(a) RGPD) :** création de compte, requêtes d'IA facultatives, exposition de l'adresse IP en P2P et transferts hors Québec ou transfrontaliers lorsque le consentement est requis ;
- **Exécution du contrat (art. 6(1)(b) RGPD) :** prestation des comptes, abonnements, services d'IA et services multijoueur que vous demandez ;
- **Obligation légale (art. 6(1)(c) RGPD) :** conservation des pièces financières, fiscales et des registres d'audit de paiement ;
- **Intérêts légitimes (art. 6(1)(f) RGPD) :** sécurisation de l'infrastructure, prévention de la fraude et des abus, et diagnostics opérationnels sans témoin.

---

## 3. Fournisseurs de services et transferts hors Québec / internationaux

Nous ne communiquons que les renseignements raisonnablement nécessaires aux fournisseurs d'infrastructure et de services suivants. Ces renseignements peuvent être traités **à l'extérieur du Québec et du Canada** :

| Destinataire | Finalité et catégories de renseignements | Régions de traitement | Politique de confidentialité |
| :--- | :--- | :--- | :--- |
| **Waffo Pancake** | Passage à la caisse, détection de fraude, remboursements, webhooks (métadonnées de transaction et de paiement) | Mondial / États-Unis / Singapour | Fournie au paiement |
| **Cloudflare** | Workers, CDN, protection DDoS, signalisation WebRTC, relais TURN (métadonnées IP, de session et de trafic) | Réseau Edge mondial / États-Unis | [Confidentialité Cloudflare](https://www.cloudflare.com/privacypolicy/) |
| **Microsoft Azure** | Hébergement, stockage de base de données, Application Insights sans témoin (renseignements de compte, de facturation et de diagnostic) | Hong Kong (Asie de l'Est), États-Unis, UE | [Confidentialité Microsoft](https://privacy.microsoft.com/privacystatement) |
| **Vercel et GitHub** | Diffusion du site Web, versions publiées, suivi des anomalies et sécurité | États-Unis / Réseau Edge mondial | [Vercel](https://vercel.com/legal/privacy-policy) / [GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Agnes et DeepSeek** | Génération de réponses IA (requêtes, contexte de conversation, paramètres du modèle) | Mondial / Chine (RPC) / États-Unis | Politiques des fournisseurs |

- **Garanties applicables aux transferts hors Québec et internationaux :** Les transferts hors Québec, hors Canada ou hors EEE/Royaume-Uni/Suisse s'appuient sur une évaluation des risques et des garanties contractuelles et techniques adéquates (incluant le chiffrement TLS en transit, la minimisation stricte, les Clauses contractuelles types de l'UE [CCT / SCC], l'accord britannique UK IDTA/Addendum et les exigences de l'article 17 de la *Loi sur le secteur privé* du Québec).
- **Conséquences d'un refus :** La fourniture des renseignements de compte, de paiement et de routage transfrontalier est nécessaire au fonctionnement de XMCL Together. Si vous refusez ce traitement ou ce transfert hors Québec/Canada, vous pouvez toujours utiliser gratuitement le lanceur XMCL open source hors ligne, mais les fonctionnalités hébergées XMCL Together ne seront pas accessibles.
- **Aucune vente de renseignements :** Nous ne vendons **pas** de renseignements personnels et ne les partageons pas à des fins de publicité comportementale intercontextuelle.

---

## 4. Durées de conservation

Nous appliquons des délais de conservation stricts :
- **Télémétrie opérationnelle, métriques d'utilisation de l'IA et mesures TURN :** conservées pendant un **maximum de 90 jours**, puis détruites définitivement ou anonymisées de manière irréversible.
- **Renseignements de compte et de session :** conservés tant que le compte est actif, plus **30 jours** après la suppression du compte aux fins de récupération et de règlement des litiges.
- **Écritures comptables financières, événements de paiement, remboursements et registres d'audit :** conservés pendant **5 à 7 ans** afin de respecter les obligations légales comptables, fiscales (notamment en vertu des lois fiscales canadiennes et québécoises) et liées aux réseaux de paiement, même après la fermeture du compte.
- Les copies de sauvegarde chiffrées sont purgées selon les cycles normaux de rotation.

---

## 5. Vos choix et vos droits légaux

### Canada (LPRPDE / PIPEDA) et Québec (Loi 25)
Vous pouvez :
- désactiver les fonctionnalités en ligne facultatives ou déconnecter des services tiers ;
- gérer le témoin `nf_lang` dans les paramètres de votre navigateur ;
- annuler le renouvellement de Together Home en tout temps depuis l'interface de votre compte (avec effet à la fin de la période payée en cours) ;
- demander l'accès à vos renseignements personnels ainsi que leur rectification s'ils sont inexacts, incomplets ou équivoques ;
- demander la suppression ou la désindexation / cessation de diffusion de vos renseignements personnels lorsque la loi le prévoit (sous réserve des obligations légales de conservation financière) ;
- exercer votre **droit à la portabilité** au Québec afin d'obtenir vos renseignements personnels informatisés dans un format technologique structuré et couramment utilisé ;
- retirer votre consentement en tout temps, sans compromettre la légalité du traitement effectué antérieurement ;
- déposer une plainte auprès du **Commissariat à la protection de la vie privée du Canada (CPVP)** à [https://www.priv.gc.ca](https://www.priv.gc.ca) ou, au Québec, auprès de la **Commission d'accès à l'information du Québec (CAI)** à [https://www.cai.gouv.qc.ca](https://www.cai.gouv.qc.ca).

### Droits internationaux (RGPD, UK GDPR et CCPA / CPRA)
- **UE / EEE / Royaume-Uni :** Vous disposez également des droits d'accès, de rectification, d'effacement, de limitation, de portabilité, d'opposition et de plainte auprès de votre autorité de contrôle (dont l'ICO au Royaume-Uni à [ico.org.uk](https://ico.org.uk)).
- **Californie et États américains (CCPA / CPRA) :** XMCL ne vend **pas** de renseignements personnels et ne les partage pas à des fins de publicité comportementale intercontextuelle. Les résidents des États dotés de lois applicables bénéficient des droits de savoir, d'accès, de suppression, de rectification et de non-discrimination.

---

## 6. Sécurité

Nous mettons en place des sessions à portée limitée, des contrôles d'accès selon le principe du moindre privilège, le chiffrement TLS en transit, des webhooks de paiement signés, une protection contre les attaques par rejeu, l'isolement des secrets et une surveillance continue. En cas d'incident de confidentialité présentant un risque de préjudice sérieux, nous aviserons les personnes concernées et les autorités compétentes (CPVP / CAI) conformément à la LPRPDE et à la Loi 25 du Québec. Aucun système en ligne n'est totalement à l'abri des risques ; vous êtes responsable de protéger votre appareil, vos sessions et vos identifiants tiers.

---

## 7. Mineurs et conditions d'âge

- **Services payants et comptes :** La création d'un compte XMCL Together et l'utilisation des fonctionnalités payantes exigent d'avoir au moins **18 ans** (ou l'âge de la majorité légale dans votre province, territoire ou juridiction), ou de disposer du consentement vérifiable d'un parent ou tuteur légal.
- **Consentement numérique au Québec (Loi 25) et à l'international :** Au Québec, l'âge du consentement personnel en matière de protection des renseignements personnels est de **14 ans** ; pour tout mineur de moins de 14 ans, le consentement du titulaire de l'autorité parentale ou du tuteur est obligatoire. Nous ne recueillons pas sciemment de renseignements personnels auprès d'enfants en deçà de l'âge légal applicable (14 ans au Québec, 13 ans aux États-Unis/Royaume-Uni, 14 à 16 ans dans l'UE) sans consentement parental vérifiable. Les parents ou tuteurs peuvent écrire à [cijhn@hotmail.com](mailto:cijhn@hotmail.com) pour demander une suppression rapide.

---

## 8. Modifications, langue faisant foi et avis de non-responsabilité

- **Modifications :** Nous publierons les mises à jour ici avec une nouvelle date d'entrée en vigueur et un nouveau numéro de version, et fournirons un préavis pour les modifications importantes lorsque la loi l'exige.
- **Langue faisant foi :** La version française de la présente politique est fournie conformément à la *Charte de la langue française* du Québec. En cas de divergence entre une version traduite et la version anglaise, la version anglaise prévaut uniquement dans la mesure permise par le droit impératif local (sans restreindre les droits linguistiques impératifs applicables au Québec).
- **Avis concernant Minecraft :** XMCL est un projet indépendant et n'est ni affilié, ni commandité, ni approuvé par Microsoft Corporation ou Mojang Studios.

---

## 9. Coordonnées

**Exploitant / Responsable de la protection des renseignements personnels (CI010) :**
- Demandes générales, facturation, remboursements, questions juridiques et confidentialité : [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- Signalement de vulnérabilités : [GitHub private vulnerability reporting](https://github.com/voxelum/x-minecraft-launcher/security)
- Soutien communautaire : [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

Veuillez n'inclure que la référence de compte ou de transaction minimale nécessaire pour retrouver votre dossier. Nous pouvons vous demander de confirmer votre identité ou la propriété du compte avant de traiter votre demande.
