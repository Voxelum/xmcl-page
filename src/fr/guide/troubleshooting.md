# Résolution des Problèmes d'Installation & de Lancement

Si vous rencontrez des problèmes lors de l'installation de Minecraft, de lanceurs de mods (Forge/Fabric/NeoForge/Quilt), de mods, de modpacks, de shaders, ou si le jeu ne démarre pas, ce guide vous aidera à les résoudre étape par étape.

---

## 🌐 1. Le Téléchargement Échoue ou Reste Bloqué (Problèmes Réseau)

### Symptômes
* Le téléchargement de Minecraft, d'assets, de bibliothèques ou de Forge/Fabric reste bloqué à `0%`.
* Le lanceur affiche des erreurs de connexion ou de délai d'attente dépassé (`CONNECTION_TIMED_OUT`, `NAME_NOT_RESOLVED`, `HTTP_STATUS 504`).

### Solutions

:::tip Essayer un miroir de téléchargement
Si les serveurs officiels de Mojang ou Forge sont lents ou bloqués par votre fournisseur d'accès Internet, vous pouvez passer sur un serveur miroir :
1. Cliquez sur **Paramètres** (icône d'engrenage) dans la barre latérale gauche.
2. Faites défiler jusqu'à la section **Paramètres Réseau**.
3. Recherchez l'option **Source de téléchargement / Miroir** (Download Source / Mirror).
4. Basculez de **Par défaut** à **BMCLAPI** ou **MCBBS** (des miroirs fiables qui fournissent des copies des fichiers officiels).
:::

:::info Configurer un proxy
Si vous êtes derrière un pare-feu, vous pouvez configurer un proxy directement dans le lanceur :
1. Dans **Paramètres** -> **Paramètres Réseau**, recherchez les options de proxy.
2. Saisissez l'adresse de votre serveur proxy SOCKS5 ou HTTP.
3. Testez la connexion.
:::

---

## 📦 2. Échec du Téléchargement de Mod / Modpack (Restriction CurseForge API)

### Symptômes
* Lors du téléchargement d'un modpack ou d'un mod depuis CurseForge, le téléchargement échoue et un symbole d'avertissement s'affiche.
* Un message vous avertit d'une restriction sur les téléchargements tiers ("Restricted third-party downloads").

### Cause
Certains auteurs de mods sur CurseForge désactivent le téléchargement via l'API pour les lanceurs tiers afin de forcer les joueurs à visiter leur page Web officielle.

### Solution
XMCL vous permet de télécharger manuellement les fichiers manquants :
1. Ouvrez les détails de la tâche ayant échoué dans le gestionnaire de tâches du lanceur (en haut à droite).
2. Cliquez sur le lien situé à côté du mod en échec pour ouvrir sa page de téléchargement dans votre navigateur Web.
3. Téléchargez le fichier `.jar` manuellement depuis votre navigateur.
4. **Glissez-déposez** le fichier `.jar` téléchargé directement dans la fenêtre du lanceur (ou placez-le dans le dossier `mods` de l'instance).
5. XMCL détectera automatiquement le fichier et finalisera l'installation.

---

## 🔄 3. Boucle Infinie de Fichiers Corrompus (Erreur de Somme de Contrôle)

### Symptômes
* Le lanceur télécharge en boucle le même fichier de bibliothèque ou d'asset, indiquant qu'il est corrompu.
* Le jeu ne se lance pas car la validation des fichiers échoue de manière répétée.

### Cause
Le téléchargement d'un fichier a été interrompu et un fichier partiel corrompu est verrouillé dans le cache local, empêchant le lanceur de le remplacer correctement.

### Solution
1. Recherchez le chemin du fichier corrompu indiqué dans les messages de diagnostic ou les fichiers journaux du lanceur (par exemple, `libraries/org/lwjgl/...`).
2. Ouvrez le dossier de données de votre instance (cliquez sur l'icône de dossier en haut à droite de l'écran d'accueil de l'instance).
3. Naviguez vers le chemin indiqué dans le message d'erreur et **supprimez le dossier** contenant le fichier corrompu.
4. Cliquez sur **Réparer** (Repair) ou relancez le jeu. Le lanceur téléchargera une nouvelle copie intacte.

---

## ☕ 4. Le Jeu Plante Immédiatement (Mauvaise Version de Java)

### Symptômes
* Le jeu se lance mais plante immédiatement avec le code d'erreur `1` ou `-1`.
* Les fichiers journaux affichent `UnsupportedClassVersionError` ou "Java introuvable".

### Cause
Chaque version de Minecraft nécessite une version spécifique de Java (JDK). L'utilisation d'une version incorrecte entraînera le plantage du jeu.

### Solution
XMCL dispose d'un gestionnaire Java automatique qui télécharge les versions compatibles de JDK pour vous.

:::warning Matrice de Compatibilité Java
Assurez-vous que votre instance utilise la bonne version de Java :
* **Minecraft 1.12.2 et versions antérieures :** Java 8
* **Minecraft 1.16 - 1.17 :** Java 16 / 17
* **Minecraft 1.18 - 1.20.4 :** Java 17
* **Minecraft 1.20.5+ :** Java 21
:::

#### Comment choisir la version de Java dans XMCL :
1. Ouvrez les paramètres de l'instance (icône d'engrenage à côté du bouton "Jouer").
2. Recherchez la section **Java**.
3. Cliquez sur le champ de sélection. XMCL affichera toutes les versions de Java installées sur votre système et mettra en évidence les versions compatibles.
4. Si vous n'avez pas la bonne version, cliquez sur **Installer Java** pour que le lanceur télécharge automatiquement la version optimale.

---

## 📑 5. Le Lanceur ne S'ouvre Pas ou Affiche un Écran Noir

### Symptômes
* Double-cliquer sur l'icône du lanceur ne produit aucun effet.
* La fenêtre du lanceur s'ouvre mais reste entièrement noire.

### Solution
Vous pouvez consulter les fichiers journaux pour déterminer la cause de l'erreur :
1. Naviguez vers le dossier de données XMCL sur votre système :
   * **Windows :** `%appdata%\xmcl`
   * **macOS :** `~/Library/Application Support/xmcl`
   * **Linux :** `~/.config/xmcl`
2. Ouvrez le dossier `logs` et recherchez le fichier le plus récent nommé `main.log`.
3. Envoyez ce fichier à l'équipe de développement sur Discord ou créez un ticket (Issue) sur GitHub pour obtenir de l'aide.
