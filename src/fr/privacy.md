---
title: Politique de confidentialité du projet open-source XMCL
description: Informations relatives à la confidentialité du site web XMCL et du lanceur open-source, conformément au RGPD.
---

# Politique de confidentialité du projet open-source XMCL

**Date d'entrée en vigueur : 21 août 2026 · Version : OP2-2026-08-21**

La présente politique couvre le site public XMCL ([xmcl.app](https://xmcl.app)) et le lanceur gratuit et open-source XMCL. Elle ne s'applique pas aux fonctionnalités payantes, aux comptes, à la facturation, à l'IA ou aux services de relais multijoueur/TURN proposés par XMCL Together, qui sont régis séparément par la [Politique de confidentialité de XMCL Together](./together/privacy).

---

## 1. Responsable du traitement et contact

Le responsable du traitement est la communauté open-source XMCL / Voxelum sous la direction du développeur CI010.
- **Contact pour la protection des données :** [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- **Dépôt du code source :** [github.com/voxelum/x-minecraft-launcher](https://github.com/voxelum/x-minecraft-launcher)
- **Communauté de support :** [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

---

## 2. Données traitées et minimisation

Nous appliquons un principe rigoureux de minimisation des données :

### Site Web public (xmcl.app)
- **Mesures d'audience anonymisées :** Microsoft Azure Application Insights enregistre les pages vues anonymisées, les choix de téléchargement et les caractéristiques techniques générales du navigateur.
- **Cookies techniques :** Un cookie local est exclusivement utilisé pour mémoriser votre préférence linguistique. Aucun cookie publicitaire ou de suivi tiers n'est utilisé.

### Lanceur Open-Source
- **Télémétrie et diagnostics sur consentement explicite (Opt-in) :** La collecte de données de diagnostic est **désactivée par défaut**. Si vous l'activez explicitement dans les paramètres du lanceur, nous pouvons traiter :
  - Un identifiant d'installation/appareil pseudonymisé et aléatoire ;
  - Les événements de cycle de vie (lancement et arrêt du jeu, codes d'erreur) ;
  - Les spécifications techniques (système d'exploitation, version de Java, architecture processeur) ;
  - Les rapports d'erreurs et traces de pile (stack traces) avec masquage automatique des chemins d'accès locaux.
- **Protection des identifiants :** Nous ne collectons, ne traitons et ne stockons **jamais** vos mots de passe ou jetons d'accès Microsoft/Mojang.

---

## 3. Durée de conservation

Nous rejetons les durées de conservation indéterminées :
- Les données de télémétrie et les journaux de diagnostic sont conservés pendant une **durée maximale de 90 jours**, après quoi ils sont définitivement supprimés ou anonymisés de manière irréversible.
- Les signalements publics sur GitHub Issues demeurent soumis aux règles de la plateforme GitHub.

---

## 4. Transferts internationaux de données

- Le projet utilise des prestataires d'infrastructure cloud mondiaux (Microsoft Azure, Cloudflare, GitHub, Vercel).
- **Clauses contractuelles types (CCT / SCCs) :** Nous utilisons les Clauses contractuelles types approuvées par la Commission européenne afin de garantir un niveau de protection adéquat lors de tout transfert de données en dehors de l'Espace économique européen (EEE).
- **Absence de revente :** Nous ne vendons aucune donnée personnelle et ne les partageons pas à des fins publicitaires.

---

## 5. Âge de consentement et mineurs

- Conformément au RGPD et aux législations nationales, les personnes âgées d'au moins **15/16 ans** (ou 13 ans selon l'État membre) peuvent consentir de manière autonome.
- Pour les mineurs en dessous de cet âge, le consentement préalable des titulaires de l'autorité parentale est requis.

---

## 6. Vos droits (RGPD)

Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants :
1. **Droit d'accès**
2. **Droit de rectification**
3. **Droit à l'effacement (« droit à l'oubli »)**
4. **Droit à la limitation du traitement**
5. **Droit à la portabilité des données**
6. **Droit d'opposition**
7. **Droit de retirer votre consentement** à tout moment sans motif (en désactivant l'option dans les paramètres du lanceur).
8. **Droit d'introduire une réclamation** auprès de l'autorité de contrôle compétente (la CNIL en France : [cnil.fr](https://www.cnil.fr)).

Pour exercer vos droits, contactez-nous à : **cijhn@hotmail.com**.

---

## 7. Avertissement concernant Minecraft

XMCL est un projet open-source indépendant et n'est ni affilié à, ni approuvé par Microsoft Corporation ou Mojang Studios.
