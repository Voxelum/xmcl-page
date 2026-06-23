# Configuration d'Agnes AI

Ce guide vous aide à configurer l'Agent IA intégré dans XMCL.

::: tip Agnes AI is free
**Agnes AI est entièrement gratuit.** Il vous suffit de créer une clé API gratuite — aucun paiement, abonnement ou carte de crédit n'est requis.
:::

Après avoir complété cette page, vous devriez être capable de :

- ouvrir la boîte de dialogue de l'Agent IA ;
- diagnostiquer les rapports de plantage avec l'agent intégré ;
- exécuter les outils de l'agent (activation de mod, installation, recherche/édition de configuration, etc.).

## Ce dont vous avez besoin

- La dernière version de XMCL.
- Un accès Internet.
- Une clé API Agnes AI gratuite.

## Étape 1 : Obtenez votre clé API Agnes AI

1. Ouvrez le portail développeur d'Agnes AI.
2. Créez ou connectez-vous à votre compte.
3. Créez une clé API.
4. Copiez et conservez la clé en toute sécurité.

![Page de la console Agnes AI montrant où créer/copier la clé API.](create-and-copy.webp)

## Étape 2 : Ouvrir les paramètres de l'agent XMCL

1. Ouvrez XMCL.
2. Allez dans **Paramètres -> Général**.
3. Activez le **Mode développeur**.
4. Faites défiler jusqu'à la section **Agent IA**.

![Paramètres généraux de XMCL avec le Mode développeur et la section Agent IA mis en évidence](general-setting.webp)

## Étape 3 : Remplir les champs de l'agent

Dans les paramètres de l'**Agent IA** :

- **Clé API** : collez votre clé Agnes.
- **Modèle** : conservez la valeur par défaut sauf indication contraire.
- **Point de terminaison (Endpoint)** : conservez la valeur par défaut sauf indication contraire.

Point de terminaison Agnes par défaut :

```text
https://apihub.agnes-ai.com/v1/chat/completions
```

![Formulaire de l'Agent IA avec les champs Clé API / Modèle / Point de terminaison et des exemples de valeurs](general-setting.webp)

## Étape 4 : Vérifier le fonctionnement

1. Appuyez sur `Ctrl/Cmd + Shift + A` pour ouvrir la boîte de dialogue de l'Agent.
2. Envoyez un message simple tel que : `list my installed mods`.
3. Confirmez que l'assistant répond sans erreur de configuration.

## Dépannage

### L'agent ne s'ouvre pas

- Confirmez que le **Mode développeur** est activé.
- Redémarrez XMCL une fois après avoir activé le Mode développeur.

### L'avertissement "Non configuré" apparaît toujours

- Vérifiez à nouveau la clé API (pas d'espaces supplémentaires ni de retours à la ligne).
- Assurez-vous que le point de terminaison est accessible depuis votre réseau.

### Échec de la requête / 401 / 403

- La clé API est invalide, expirée ou n'a pas d'autorisation.
- Régénérez la clé dans le portail Agnes et collez-la à nouveau.

### Délai d'attente de la requête dépassé (Timeout)

- Vérifiez le pare-feu/proxy.
- Réessayez avec le point de terminaison par défaut.

## Notes de sécurité

- Traitez les clés API comme des mots de passe.
- Ne partagez pas de captures d'écran contenant votre clé.
- Renouvelez vos clés si vous soupçonnez une fuite.
