# Guide des Skins Personnalisés (Ely.by / LittleSkin)

Ce guide vous expliquera pourquoi les skins personnalisés (provenant de services comme Ely.by ou LittleSkin) peuvent ne pas s'afficher par défaut dans XMCL par rapport à d'autres lanceurs, comment fonctionne le rendu des skins dans Minecraft Java, et comment le configurer correctement.

---

## Comment Fonctionne le Rendu des Skins dans Minecraft Java

Normalement, Minecraft Java obtient votre skin depuis le serveur de session officiel de Mojang. Le processus suit cette séquence :

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 250" width="100%" style="max-width: 600px; font-family: system-ui, -apple-system, sans-serif; margin: 20px auto; display: block;">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8"/>
    </marker>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
    <linearGradient id="grayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4b5563" />
      <stop offset="100%" stop-color="#1f2937" />
    </linearGradient>
  </defs>

  <!-- Node 1: Client -->
  <rect x="200" y="10" width="200" height="40" rx="8" fill="url(#blueGrad)" />
  <text x="300" y="34" fill="#ffffff" font-size="14" font-weight="600" text-anchor="middle">Client Minecraft</text>

  <!-- Arrow down to check -->
  <line x1="300" y1="50" x2="300" y2="80" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />

  <!-- Node 2: Check Decision -->
  <rect x="180" y="90" width="240" height="40" rx="8" fill="url(#grayGrad)" stroke="#4b5563" stroke-width="1" />
  <text x="300" y="114" fill="#f3f4f6" font-size="13" font-weight="500" text-anchor="middle">Serveur Yggdrasil actif ?</text>

  <!-- Branch Left: No -->
  <path d="M 240 130 L 140 180" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />
  <text x="170" y="152" fill="#ef4444" font-size="12" font-weight="600" text-anchor="middle">Non</text>

  <!-- Branch Right: Yes -->
  <path d="M 360 130 L 460 180" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />
  <text x="430" y="152" fill="#10b981" font-size="12" font-weight="600" text-anchor="middle">Oui</text>

  <!-- Node 3: Mojang (Left) -->
  <rect x="20" y="190" width="240" height="50" rx="8" fill="#1f2937" stroke="#374151" stroke-width="1.5" />
  <text x="140" y="210" fill="#f3f4f6" font-size="13" font-weight="600" text-anchor="middle">Serveur de Session Mojang</text>
  <text x="140" y="228" fill="#9ca3af" font-size="11" text-anchor="middle">textures.minecraft.net</text>

  <!-- Node 4: Custom (Right) -->
  <rect x="340" y="190" width="240" height="50" rx="8" fill="#1f2937" stroke="#10b981" stroke-width="1.5" />
  <text x="460" y="210" fill="#f3f4f6" font-size="13" font-weight="600" text-anchor="middle">Serveur de Skin Custom</text>
  <text x="460" y="228" fill="#10b981" font-size="11" font-weight="500" text-anchor="middle">Ely.by / LittleSkin</text>
</svg>

---

## Pourquoi les Skins ne S'affichent pas dans XMCL par Défaut

Dans d'autres lanceurs comme **Legacy Launcher** ou **ElyPrism** :
* **Legacy Launcher** modifie automatiquement la bibliothèque interne du jeu `authlib.jar` ou exécute un agent Java silencieux. Il recherche les skins de Ely.by pour tous les comptes hors ligne (locaux) par pseudonyme, contournant ainsi les vérifications de sécurité.
* **ElyPrism** est un fork de Prism Launcher pré-configuré spécifiquement pour l'écosystème Ely.by.

**XMCL** est un lanceur propre et open-source. Il ne modifiera **jamais** vos fichiers de jeu et ne redirigera pas vos données vers des serveurs de skins tiers sans votre autorisation explicite.

---

## Comment Configurer les Skins Personnalisés dans XMCL

Vous pouvez configurer des skins personnalisés en utilisant l'une des deux méthodes ci-dessous.

### Méthode 1 : Ajouter un Compte Tiers (Recommandé)

Au lieu d'utiliser un simple nom de compte hors ligne/local, ajoutez votre compte officiel Ely.by ou LittleSkin dans le lanceur. Cela active automatiquement **Authlib-Injector** :

1. Cliquez sur l'icône **Comptes** dans la barre latérale du lanceur.
2. Cliquez sur **Ajouter un compte**.
3. Choisissez **Ely.by** ou **Yggdrasil** (pour LittleSkin, entrez l'URL de leur API Yggdrasil : `https://littleskin.cn/api/yggdrasil`).
4. Connectez-vous avec vos identifiants.
5. Dans les paramètres de votre instance, assurez-vous que l'option **Désactiver Authlib Injector** est désactivée (**OFF**).

#### Comment cela fonctionne en arrière-plan
Lorsque vous lancez le jeu, XMCL ajoute automatiquement l'agent Java `authlib-injector` avec la racine de l'API personnalisée :

```cmd
java -javaagent:authlib-injector.jar=https://authserver.ely.by/api/ -jar ...
```

---

### Méthode 2 : Utiliser le Mod CustomSkinLoader

Si vous préférez jouer avec un compte local (hors ligne) mais souhaitez que votre jeu charge les skins depuis Ely.by ou LittleSkin, vous devez installer le mod **CustomSkinLoader**.

1. Installez un chargeur de mods (Forge, Fabric ou Quilt) dans votre instance.
2. Recherchez et téléchargez le mod **CustomSkinLoader** dans l'onglet de téléchargement des mods de XMCL.
3. Lancez le jeu une fois. Il créera un fichier de configuration dans `minecraft/CustomSkinLoader/CustomSkinLoader.json`.
4. Ouvrez la configuration JSON et configurez les serveurs de skins :

```json
{
  "enable": true,
  "loadTypes": ["Mojang", "ElyBy", "LittleSkin"],
  "skinList": [
    { "type": "Mojang" },
    { "type": "Yggdrasil", "apiRoot": "https://authserver.ely.by/api/" },
    { "type": "Yggdrasil", "apiRoot": "https://littleskin.cn/api/yggdrasil/" }
  ]
}
```
5. CustomSkinLoader interrogera ces réseaux de skins par pseudonyme et affichera les skins pour vous ainsi que pour tous les autres joueurs ayant configuré ce mod !
