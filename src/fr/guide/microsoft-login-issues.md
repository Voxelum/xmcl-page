# Guide de Connexion au Compte Microsoft & Mode Démo

Ce guide vous explique comment ajouter votre compte Microsoft à XMCL, comment fonctionne le processus d'authentification et comment résoudre les erreurs de connexion courantes telles que **"failed to exchange Xbox token"** ou le fait d'être bloqué en **Mode Démo**.

---

## 🔑 1. Comment Ajouter un Compte Microsoft

Pour jouer à Minecraft avec votre compte officiel, vous devez vous connecter :

1. Cliquez sur votre profil/avatar (ou **"Gérer le compte"**) en haut à droite pour ouvrir le gestionnaire de comptes :

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. Cliquez sur **"Ajouter un compte"**, choisissez **Microsoft**, puis procédez à la connexion :

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **Connexion via code d'appareil (Device Code) :**  
> Si vous ne souhaitez pas saisir votre mot de passe dans le lanceur, cochez la case **"Login by Device Code"** (Connexion par code d'appareil). XMCL affichera un code ; il vous suffira de visiter `microsoft.com/link` dans votre navigateur Web, de saisir le code et de confirmer la connexion.

---

## 🔍 2. Comment Fonctionne le Processus d'Authentification

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

## 🛠 3. Trois Causes Principales et Leurs Solutions

### 1. Pas de Licence Minecraft sur ce Compte

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

### 2. Le Compte n'a pas de Profil Xbox (Gamertag Manquant)

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👾
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Cause : Le compte Microsoft n'est pas configuré pour le jeu</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Votre compte Microsoft a besoin d'un profil Xbox Live lié pour récupérer les jetons Minecraft. Si vous venez d'acheter Minecraft ou si vous n'avez jamais lancé le jeu auparavant, ce profil n'est peut-être pas encore créé, ce qui mène au **Mode Démo**.</p>
  </div>
</div>

#### Comment y remédier :
1. Rendez-vous sur le site officiel [Xbox.com](https://www.xbox.com/).
2. Connectez-vous avec les identifiants de votre compte Microsoft.
3. Si vous y êtes invité, créez un profil Xbox Live gratuit (en choisissant votre Gamertag et votre avatar).
4. Une fois le profil créé, redémarrez XMCL et réessayez de vous connecter.

---

### 3. Erreurs Réseau ou Connexions Bloquées

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(59, 130, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #3b82f6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Cause : Problèmes de DNS ou restrictions réseau régionales</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Dans certaines régions (par exemple en Chine avec le Grand Pare-feu) ou avec certains fournisseurs d'accès Internet restrictifs, les connexions aux serveurs d'authentification Xbox Live ou Mojang peuvent être bloquées ou perturbées.</p>
  </div>
</div>

#### Comment y remédier :
* **Utilisez un VPN :** Si vous êtes dans un pays appliquant des restrictions Internet, utilisez un VPN pour terminer le processus d'authentification de Microsoft.
* **Changer de DNS :** Utilisez des serveurs DNS publics et rapides (comme Google DNS : `8.8.8.8` et `8.8.4.4` ou Cloudflare DNS : `1.1.1.1`).
* **Réessayer plus tard :** Les serveurs d'authentification de Microsoft peuvent être temporairement surchargés. Patientez quelques minutes et réessayez.

---

## 🚪 4. Mode Hors-ligne & Options de Connexion Alternatives (Jouer sans compte Microsoft)

Si vous ne possédez pas de compte Microsoft officiel, ou si vous préférez jouer hors-ligne sur un serveur privé local, XMCL propose d'autres méthodes de connexion.

### Option A : Mode Local / Jeu Hors-ligne (Mode Développeur)

Le **Mode Développeur** (Developer Mode) vous permet de jouer localement sans mot de passe en utilisant le pseudonyme de votre choix.

1. Ouvrez le gestionnaire de comptes en haut à droite.
2. Cliquez sur **"Ajouter un compte"** (Add Account).
3. Choisissez **Développeur** (Developer) parmi les options affichées :

   <img src="/guidephoto/developer-mode.png" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

4. Saisissez le pseudonyme souhaité et validez.
5. Vous pouvez désormais lancer Minecraft. **Note :** En mode hors-ligne, vous ne pouvez rejoindre que des serveurs configurés en mode non-sécurisé (`online-mode=false` dans les propriétés du serveur), et votre personnage utilisera l'apparence par défaut (skin de base).

---

### Option B : Plateformes d'Apparences Personnalisées (API Yggdrasil)

Si vous souhaitez utiliser un avatar personnalisé (skin) sur des serveurs privés, XMCL supporte des services d'authentification alternatifs comme **LittleSkin**, **Ely.by** ou d'autres serveurs Yggdrasil tiers.

1. Dans le gestionnaire de comptes, cliquez sur **Ajouter un compte**.
2. Sélectionnez la plateforme de votre choix (ex: **LittleSkin** ou **Yggdrasil** pour saisir l'URL d'une API personnalisée).
3. Entrez les identifiants de connexion associés à ce service externe :

   <img src="/guidephoto/reg-account.png" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

4. Le lanceur récupérera automatiquement vos skins et informations de profil directement depuis cette plateforme.
