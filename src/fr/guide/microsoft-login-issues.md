# Problèmes de Connexion Microsoft (failed to exchange Xbox token)

Ce guide vous expliquera pourquoi vous pouvez rencontrer l'erreur **"failed to exchange Xbox token"** (échec de l'échange du jeton Xbox) lors de la connexion à votre compte Microsoft dans XMCL, quelles en sont les causes et comment y remédier.

---

## 🔍 Comment fonctionne le processus d'authentification

Pour lancer une copie sous licence de Minecraft, le lanceur doit vérifier votre identité sur trois niveaux de sécurité distincts :

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 Échange de clés d'authentification :</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">ÉTAPE 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Connexion Microsoft</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Vérifie le mot de passe</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">ÉTAPE 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Services Xbox Live</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Obtient le Gamertag</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ Échec ici</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">ÉTAPE 3 (Échange)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Jeton Minecraft</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Vérifie la licence</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    L'erreur <strong>"failed to exchange Xbox token"</strong> signifie que l'Étape 1 et l'Étape 2 ont réussi, mais que les serveurs d'authentification de Mojang ont rejeté l'échange à l'Étape 3.
  </p>
</div>

---

## 🛠 Trois causes principales et leurs solutions

### 1. Pas de licence Minecraft sur ce compte

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Cause : Les serveurs de Mojang n'ont pas trouvé le jeu acheté</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">C'est la raison la plus courante. Vous vous êtes connecté à un compte Microsoft, mais Mojang indique que ce compte spécifique ne possède pas de licence pour Minecraft Java Edition.</p>
  </div>
</div>

#### Comment y remédier :
* **Vérifier l'achat :** Connectez-vous sur [Minecraft.net](https://www.minecraft.net/) avec votre compte Microsoft et vérifiez votre profil. Assurez-vous que vous voyez l'option de téléchargement plutôt qu'une invite d'achat.
* **Vérifier le statut du Game Pass :** Si vous jouez via le **Xbox Game Pass**, assurez-vous que votre abonnement est actif et que vous vous connectez avec le compte Microsoft exact associé à l'abonnement.
* **Vérifier l'adresse e-mail :** Assurez-vous de ne pas vous connecter avec un autre compte Microsoft (comme un e-mail professionnel ou scolaire) à la place du compte personnel qui possède le jeu.

---

### 2. Profil Xbox Live inexistant

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Cause : Compte Microsoft non activé sur Xbox Live</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Vous avez créé un compte Microsoft mais n'avez jamais utilisé les services Xbox Live. Les serveurs de connexion ne peuvent pas générer de jeton d'accès car le compte n'a pas de Gamertag unique.</p>
  </div>
</div>

#### Comment y remédier :
1. Rendez-vous sur le site officiel [Xbox.com](https://www.xbox.com/).
2. Cliquez sur **Se connecter** en haut à droite.
3. Si vous êtes invité à créer un profil Xbox, **acceptez le contrat et configurez un Gamertag** (pseudo unique).
4. Attendez 1 à 2 minutes pour la synchronisation des serveurs, puis lancez XMCL et réessayez de vous connecter.

---

### 3. Blocages réseau et restrictions de routage de votre FAI

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Cause : Connexion bloquée vers les serveurs de Mojang ou de Microsoft</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">En raison de blocages régionaux de FAI, de pare-feu locaux ou de configurations DNS incorrectes, votre PC ne peut pas se connecter à `api.minecraftservices.com` ou aux serveurs Xbox Live.</p>
  </div>
</div>

#### Comment y remédier :
* **Utiliser un VPN :** Connectez-vous à un VPN stable avant de tenter de vous connecter. Cela contourne les problèmes de routage réseau.
* **Configurer un proxy dans XMCL :**
  1. Ouvrez les **Paramètres** (icône d'engrenage sur la barre latérale gauche).
  2. Allez dans **Paramètres Réseau**.
  3. Saisissez l'adresse de votre proxy actif (les protocoles HTTP, HTTPS et SOCKS5 sont pris en charge).
* **Réinitialiser votre fichier hosts** :
  Assurez-vous que votre fichier hosts (`C:\Windows\System32\drivers\etc\hosts`) ne contient aucune règle de redirection vers `mojang.com` ou `minecraftservices.com`. Nettoyez-le si nécessaire.

---

## 📋 Tableau de diagnostic rapide

| Symptôme de l'erreur | Cause probable | Première étape de résolution |
| :--- | :--- | :--- |
| Erreur juste après avoir saisi l'e-mail/mot de passe | Compte Microsoft verrouillé ou invalide | Réinitialiser le mot de passe sur Microsoft.com |
| Erreur **"failed to exchange Xbox token"** | Pas de licence Minecraft / Pas de profil Xbox | Créer un Gamertag sur Xbox.com ou acheter le jeu |
| Erreur **"Failed to connect to server"** | Blocages réseau / Problèmes DNS | Se connecter à un VPN ou configurer un proxy dans XMCL |
