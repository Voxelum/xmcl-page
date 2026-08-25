# Connexion Microsoft, Bedrock vs Java et problèmes de licence

Ce guide détaille le fonctionnement de l'authentification Microsoft dans XMCL, l'origine des erreurs de connexion (comme **« failed to exchange Xbox token »** ou non acheté), pourquoi le jeu se lance parfois en **Mode Démo (Demo Mode)**, la différence majeure entre **Bedrock Edition (mobile/consoles)** et **Java Edition (PC)**, ainsi que les solutions aux problèmes fréquents.

---

## 🔑 1. Se connecter avec un compte Microsoft

Pour vous connecter avec votre licence officielle Minecraft, suivez ces étapes :

1. Cliquez sur votre avatar (ou **« Gérer le compte »**) en haut à droite pour ouvrir le Gestionnaire de comptes :

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. Cliquez sur **« Ajouter un compte »**, sélectionnez **Microsoft** et suivez la procédure :

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **Connexion par code d'appareil (Device Code) :**  
> Si vous préférez ne pas saisir votre mot de passe dans le lanceur, cochez **« Connexion par code d'appareil »**. XMCL affichera un code à 8 chiffres ; rendez-vous sur [microsoft.com/link](https://microsoft.com/link) dans votre navigateur pour confirmer.

---

## 🔍 2. Fonctionnement de la vérification Microsoft en 3 étapes

Lors de la connexion, le lanceur communique avec trois serveurs de vérification successifs :

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 Les 3 étapes de vérification :</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">ÉTAPE 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">OAuth Microsoft</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Vérifie identifiant & mot de passe</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">ÉTAPE 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Services Xbox Live</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Obtient le Gamertag Xbox</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ Échec fréquent</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">ÉTAPE 3 (Échange)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Licence Mojang Java</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Vérifie la possession sur PC</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    Si l'étape 3 échoue, le lanceur renvoie l'erreur <strong>« failed to exchange Xbox token »</strong> ou le jeu se lance en <strong>Mode Démo</strong>. Cela signifie que Mojang ne trouve aucune licence active de <strong>Minecraft: Java Edition</strong> sur ce compte Microsoft.
  </p>
</div>

---

## 🛑 3. La confusion n°1 : Bedrock Edition vs. Java Edition

**XMCL est un lanceur dédié exclusivement à Minecraft: Java Edition (PC sous Windows, macOS et Linux).**

Beaucoup de joueurs tentent de se connecter après avoir acheté le jeu sur mobile ou console :

| Plateforme d'achat | Édition possédée | Compatible avec XMCL ? | Explication |
| :--- | :--- | :--- | :--- |
| 📱 **Mobile (iOS / Android / Google Play)** | Bedrock Edition | ❌ Non | L'achat mobile ne donne pas accès à l'édition Java sur PC. |
| 🎮 **Console PlayStation 4 / 5** | Bedrock Edition | ❌ Non | La licence PlayStation est restreinte à la console. |
| 🎮 **Console Xbox One / Series X\|S** | Bedrock Edition | ❌ Non | L'achat console ne se transfère pas sur PC Java. |
| 🕹️ **Nintendo Switch** | Bedrock Edition | ❌ Non | L'achat Nintendo eShop est réservé à la Switch. |
| 💻 **PC (Pack Minecraft: Java & Bedrock)** | Java & Bedrock | ✅ **Oui** | Entièrement pris en charge ! |
| 🟢 **Abonnement PC Game Pass / Ultimate** | Java & Bedrock | ✅ **Oui** | Pris en charge tant que l'abonnement est actif. |

> ⚠️ **Important :**  
> Si vous avez acheté Minecraft uniquement sur **téléphone**, **PlayStation**, **Xbox** ou **Switch**, les serveurs Mojang indiqueront que ce compte **ne possède pas Java Edition**.  
> Pour jouer à l'édition Java sur PC, vous devez posséder le pack **« Minecraft: Java & Bedrock Edition for PC »** sur [Minecraft.net](https://www.minecraft.net/) ou disposer d'un abonnement actif **PC Game Pass**.

---

## 🛠 4. Résolution des pannes courantes

### Cause A : Aucune licence Java Edition sur ce compte

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Mojang ne trouve pas de licence PC</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Le compte Microsoft est valide, mais la base de données Mojang ne contient aucun achat Java Edition pour ce compte.</p>
  </div>
</div>

#### Solution :
* **Vérifier sur Minecraft.net :** Connectez-vous sur [Minecraft.net](https://www.minecraft.net/). Si le site affiche « Acheter » au lieu de votre nom de profil Java, le compte ne possède pas le jeu.
* **Historique des commandes :** Rendez-vous sur [account.microsoft.com/billing/orders](https://account.microsoft.com/billing/orders) pour vérifier si l'achat concerne bien le pack PC.
* **Vérifier l'adresse e-mail :** Assurez-vous de ne pas utiliser un compte scolaire ou professionnel à la place de votre compte personnel.
* **Statut Game Pass :** Vérifiez que votre abonnement est actif et inclut le PC.

---

### Cause B : Profil Xbox Live manquant ou non initialisé

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Le compte n'a pas de Gamertag Xbox</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Les comptes récents n'ont parfois aucun profil Xbox Live associé, empêchant l'émission du jeton d'accès.</p>
  </div>
</div>

#### Solution :
1. Rendez-vous sur [Xbox.com](https://www.xbox.com/).
2. Cliquez sur **Se connecter** en haut à droite.
3. Acceptez les conditions et définissez un **Gamertag**.
4. Patientez 1 à 2 minutes avant de réessayer sur XMCL.

---

### Cause C : Restrictions réseau et blocages DNS

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Connexion bloquée vers Mojang / Xbox</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Un pare-feu ou un problème DNS empêche la communication avec <code>api.minecraftservices.com</code>.</p>
  </div>
</div>

#### Solution :
* **Utiliser un VPN :** Activez un VPN stable avant la connexion.
* **Configurer un proxy dans XMCL :** Dans les **Paramètres** -> **Paramètres réseau**, renseignez votre proxy (HTTP/HTTPS/SOCKS5).
* **Vérifier le fichier hosts :** Assurez-vous qu'aucune redirection de `mojang.com` n'est présente dans votre fichier hosts.

---

## 🎮 Vous ne possédez pas de licence ?

Si vous ne possédez pas encore de licence officielle, vous pouvez utiliser le **Mode Hors-ligne** ou des serveurs de skins communautaires.

👉 **[Guide complet : Jouer sans licence (Mode hors-ligne et comptes alternatifs)](./offline-mode)**
