# Jouer sans licence (Mode hors-ligne et comptes alternatifs)

XMCL est un lanceur libre et open-source conçu pour respecter la liberté des joueurs. Si vous ne possédez pas encore de licence payante Minecraft Java Edition, ou si vous souhaitez tester des modpacks hors-ligne sans vous connecter aux serveurs Mojang, XMCL prend entièrement en charge le **Mode Hors-ligne** et les réseaux de skins communautaires.

---

## ⚙️ 1. Activer le Mode Développeur

Pour débloquer les comptes hors-ligne et les serveurs de skins tiers, activez le **Mode Développeur** dans les paramètres :

1. Ouvrez les **Paramètres** (icône d'engrenage en bas à gauche de la barre latérale).
2. Localisez l'option **« Mode Développeur »** et basculez-la sur **ACTIVÉ** :

   ![Activer le Mode Développeur](/guidephoto/developer-mode.png)

Une fois activé, le Gestionnaire de comptes affichera des options d'authentification supplémentaires.

---

## 👥 2. Types de comptes disponibles

<div style="display: flex; flex-direction: column; gap: 14px; margin: 24px 0;">

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟢</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Mode Hors-ligne (Compte local)</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Jouez sans connexion aux serveurs d'authentification. Choisissez simplement un pseudo. Idéal pour le jeu en solo, les tests locaux de modpacks, les parties en LAN et les serveurs communautaires configurés avec <code>online-mode=false</code>.
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟡</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">LittleSkin</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Serveur d'authentification et de skins communautaire gratuit prenant en charge les skins personnalisés et les capes.  
      Site web : <a href="https://littleskin.cn" target="_blank" rel="noopener noreferrer">https://littleskin.cn</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🔵</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Ely.by</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Réseau mondial d'authentification et de skins tiers avec catalogue cloud et capes HD.  
      Site web : <a href="https://ely.by" target="_blank" rel="noopener noreferrer">https://ely.by</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🌐</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Serveur Authlib-Injector / Yggdrasil personnalisé</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Connectez-vous à n'importe quel serveur d'authentification privé via une URL d'API Yggdrasil standard.
    </p>
  </div>

</div>

---

## 🎮 3. Ajouter et changer de compte

1. Cliquez sur l'icône de profil en haut à droite pour ouvrir le **Gestionnaire de comptes**.
2. Cliquez sur **« Ajouter un compte »**.
3. Choisissez **Hors-ligne**, **LittleSkin**, **Ely.by** ou **Serveur personnalisé**.
4. Saisissez votre pseudo ou vos identifiants.
5. Cliquez sur le compte pour le définir comme **Actif**.

---

## 💡 4. Tableau comparatif des types de comptes

| Fonctionnalité | Compte Microsoft (Officiel) | Compte Hors-ligne | LittleSkin / Ely.by |
| :--- | :--- | :--- | :--- |
| **Coût** | Licence payante | Gratuit | Gratuit |
| **Serveurs officiels (Hypixel etc.)** | ✅ Oui | ❌ Non | ❌ Non |
| **Serveurs communautaires / LAN / P2P** | ✅ Oui | ✅ Oui (`online-mode=false`) | ✅ Oui |
| **Solo et modpacks** | ✅ Oui | ✅ Oui | ✅ Oui |
| **Skins et capes personnalisés** | ✅ Skins officiels | ⚠️ Skin par défaut | ✅ Skins et capes du réseau |

---

## ❓ Questions fréquentes

### Puis-je rejoindre Hypixel avec un compte Hors-ligne ?
Non. Les serveurs publics officiels vérifient l'identité des joueurs directement auprès de Mojang (`online-mode=true`), ce qui requiert un compte Microsoft possédant Java Edition.

### Comment jouer avec des amis sans licence officielle ?
Vous pouvez utiliser la fonction intégrée **P2P Multiplayer / Partage LAN** dans XMCL ou rejoindre un serveur communautaire avec `online-mode=false`.

👉 **[Des problèmes avec votre compte officiel ? Consultez le guide de dépannage Microsoft](./microsoft-login-issues)**
