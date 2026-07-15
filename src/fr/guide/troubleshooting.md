# Résolution des Problèmes d'Installation et de Lancement

Si vous rencontrez des difficultés lors de l'installation de Minecraft, de chargeurs de mods (Forge/Fabric/NeoForge/Quilt), de mods, de modpacks, de shaders ou lors du lancement du jeu, ce guide vous aidera à identifier et résoudre le problème étape par étape.

---

## 🌐 1. Le Téléchargement Échoue ou Reste Bloqué (Problèmes de Réseau)

### Symptômes
* Le téléchargement de fichiers Minecraft, de ressources, de bibliothèques ou de chargeurs de mods s'arrête à `0%`.
* Le lanceur affiche des erreurs de délai d'attente ou de connexion (`CONNECTION_TIMED_OUT`, `NAME_NOT_RESOLVED`, `HTTP_STATUS 504`).

### Solution

:::tip Utiliser un serveur miroir (Mirror)
Si les serveurs officiels de Mojang ou des chargeurs de mods sont surchargés ou bloqués dans votre région, vous pouvez basculer vers un serveur miroir alternatif :
1. Cliquez sur **Paramètres** (icône d'engrenage) dans la barre latérale gauche.
2. Faites défiler vers le bas jusqu'à la section **Paramètres réseau**.
3. Recherchez l'option **Source de téléchargement / Miroir** (Download Source / Mirror).
4. Remplacez le paramètre **Par défaut** par **BMCLAPI** ou **MCBBS** (des miroirs fiables qui dupliquent les fichiers officiels).
:::

:::info Paramètres Proxy
Si l'accès à certains serveurs est restreint dans votre réseau, vous pouvez configurer un proxy directement dans le lanceur :
1. Allez dans **Paramètres** -> **Paramètres réseau** et recherchez la section Proxy.
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

## 🔍 3. Mod Présent sur le Site CurseForge mais Absent de la Recherche du Lanceur

### Symptômes
* Vous recherchez un mod dans le lanceur, mais il indique "Aucun résultat trouvé", alors que le mod est bien visible sur le site officiel de CurseForge.

### Cause
CurseForge permet aux auteurs de mods de **désactiver l'accès API tiers** pour leurs créations. Lorsque cette option est désactivée, l'API CurseForge (utilisée par XMCL pour rechercher et récupérer les mods) a interdiction de renvoyer le mod dans les résultats de recherche.

### Solution
1. Ouvrez votre navigateur Web et accédez à la page du mod sur [CurseForge](https://www.curseforge.com/minecraft/search).
2. Cliquez sur **Download** pour enregistrer le fichier `.jar` sur votre ordinateur.
3. Ouvrez XMCL et sélectionnez votre instance active.
4. **Glissez-déposez** le fichier `.jar` téléchargé directement dans la fenêtre du lanceur. XMCL l'installera automatiquement dans le dossier `mods` de l'instance sélectionnée.

---

## 📦 4. Les Modpacks Importés "Disparaissent" ou Semblent Vides

### Symptômes
* Vous glissez-déposez un fichier de modpack `.zip` ou `.mrpack` dans le lanceur, mais vous ne le trouvez pas dans votre profil de jeu actuel, ou la liste des mods apparaît vide.

### Cause
1. **Création d'une Nouvelle Instance** : XMCL ne fusionne pas les modpacks dans votre profil actif. À la place, il crée une **toute nouvelle Instance** (profil) dédiée à ce modpack.
2. **Téléchargements en Arrière-plan** : Pour économiser de l'espace, les fichiers de modpack ne contiennent pas les mods `.jar` physiques (ils contiennent uniquement des métadonnées). Après l'importation, XMCL lance une tâche en arrière-plan pour télécharger tous les mods requis. Tant que cette tâche n'est pas terminée, la liste des mods peut sembler vide.

### Solution
1. **Changer d'instance** : Cliquez sur le menu de la barre latérale ou sur le sélecteur de profil pour voir toutes les instances. Recherchez la nouvelle instance nommée d'après le modpack importé et sélectionnez-la.
2. **Vérifier le gestionnaire de tâches** : Cliquez sur l'icône de tâche (en haut à droite du lanceur) pour vérifier si le téléchargement du modpack est toujours en cours. Attendez que le téléchargement soit terminé avant de lancer le jeu.

---

## 🔄 5. Boucle Infinie de Fichiers Corrompus (Erreur de Somme de Contrôle)

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

## ☕ 6. Le Jeu Plante Immédiatement (Mauvaise Version de Java)

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

## 📑 7. Le Lanceur ne S'ouvre Pas ou Affiche un Écran Noir

### Symptômes
* Double-cliquer sur l'icône du lanceur ne produit aucun effet.
* La fenêtre du lanceur s'ouvre mais reste entièrement noire.

### Solution
Vous pouvez consulter les fichiers journaux pour déterminer la cause de l'erreur :
1. Navigiez vers le dossier de données XMCL sur votre système :
   * **Windows :** `%appdata%\xmcl`
   * **macOS :** `~/Library/Application Support/xmcl`
   * **Linux :** `~/.config/xmcl`
2. Ouvrez le dossier `logs` et recherchez le fichier le plus récent nommé `main.log`.

---

## 📋 8. Générer un Rapport de Diagnostic (Première Étape Recommandée)

Avant de rechercher manuellement les fichiers journaux bruts, nous vous recommandons vivement de générer un **Rapport de Diagnostic** dans le lanceur. Cela regroupera tous les journaux du lanceur, du jeu et les informations sur votre système dans un dossier unique, permettant aux développeurs ou à la communauté de vous aider beaucoup plus rapidement.

### Comment générer un rapport :
1. Cliquez sur le menu **Aide & Commentaires** dans l'en-tête du lanceur.
2. Cliquez sur **Générer le rapport** (Generate Report) pour regrouper les diagnostics et les journaux du lanceur.

   <video src="/guidephoto/Generate%20Report.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

---

## 📑 9. Comment Analyser les Journaux (Logs) du Lanceur et du Jeu

Si vous préférez chercher les fichiers journaux manuellement, ils vous indiqueront précisément ce qui pose problème. Voici comment les localiser et résoudre les erreurs de plantage courantes.

### 🔍 Comment Trouver les Journaux (Logs)

Selon que le problème provient du lanceur ou du jeu, vous devez consulter différents journaux :

#### A. Journaux du Lanceur (`main.log`)
Pour les plantages du lanceur, les échecs de téléchargement, les erreurs réseau ou les problèmes de connexion :
- **Windows :** Appuyez sur `Win + R`, saisissez `%appdata%\xmcl\logs` et appuyez sur Entrée.
- **macOS :** Allez dans `~/Library/Application Support/xmcl/logs`.
- **Linux :** Allez dans `~/.config/xmcl/logs`.
- Recherchez le fichier le plus récent nommé `main.log`.

#### B. Journaux du Jeu (`latest.log` & Rapports de Plantage)
Pour les conflits de mods, les plantages de Minecraft, les problèmes de performances ou les erreurs Java :
- Ouvrez le tableau de bord de l'instance dans le lanceur.
- Cliquez sur l'icône de **Dossier** en haut à droite pour ouvrir son répertoire.
- Allez dans le dossier `logs` et ouvrez `latest.log`.
- Si le jeu a planté et s'est fermé, allez dans le dossier `crash-reports` et recherchez le fichier `.txt` le plus récent (nommé sous le format `crash-YYYY-MM-DD_HH.MM.SS-client.txt`).

---

### 🛠 Analyser les Journaux & Corriger les Erreurs Courantes

Ouvrez le fichier journal dans n'importe quel éditeur de texte (comme le Bloc-notes) et recherchez les erreurs suivantes (utilisez `Ctrl + F` pour chercher) :

#### 🔴 Cas 1 : Mémoire Insuffisante (Out of Memory)
- **Ce qu'il faut chercher :** `java.lang.OutOfMemoryError: Java heap space` ou code de sortie `Exit code: -805306369`.
- **Explication :** Vous n'avez pas alloué assez de mémoire RAM pour charger tous les mods installés.
- **Comment corriger :**
  1. Ouvrez les paramètres de l'instance (icône d'engrenage à côté du bouton "Jouer").
  2. Faites défiler jusqu'à la section **Java**.
  3. Augmentez la **Mémoire Min** et **Mémoire Max** (par exemple, attribuez au maximum `4096` ou `6144` Mo).

#### 🔴 Cas 2 : Incompatibilité de Mods ou Dépendances Manquantes
- **Ce qu'il faut chercher :** `Mixin transformation failed`, `DependencyResolutionException` ou des lignes comme `Requires mod 'fabric' (version X or later), but only version Y is installed`.
- **Explication :** Un de vos mods nécessite un autre mod complémentaire qui est absent, ou deux mods entrent en conflit.
- **Comment corriger :** Lisez attentivement la ligne d'erreur, elle indique généralement le nom du mod manquant. Téléchargez-le et placez-le dans le dossier `mods`, ou mettez à jour le mod en conflit.

#### 🔴 Cas 3 : Incompatibilité de Java
- **Ce qu'il faut chercher :** `java.lang.UnsupportedClassVersionError: ... has been compiled by a more recent version of the Java Runtime`.
- **Explication :** Vous lancez Minecraft ou un modpack avec une version de Java incompatible (par exemple, utiliser Java 8 pour Minecraft 1.20).
- **Comment corriger :** Ouvrez les paramètres de l'instance, allez à la section **Java**, et cliquez sur **Installer Java** pour télécharger automatiquement la version recommandée.

#### 🔴 Cas 4 : Plantage du Pilote Graphique
- **Ce qu'il faut chercher :** `GLFW error 65542: WGL: The driver does not seem to support OpenGL` ou `Pixel format not accelerated`.
- **Explication :** Vos pilotes graphiques sont obsolètes ou absents, ou le jeu s'exécute sur le processeur graphique intégré (CPU) au lieu de votre carte graphique dédiée (GPU).
- **Comment corriger :** Mettez à jour vos pilotes graphiques depuis le site officiel du constructeur (NVIDIA, AMD ou Intel). Sur PC portable, forcez l'utilisation du GPU hautes performances dans les paramètres d'affichage système.

---

### ❓ Que faire si vous ne comprenez pas les Journaux ?

Si vous avez lu les journaux et ne trouvez toujours pas l'origine du plantage, aucun problème ! La communauté XMCL est là pour vous guider sur nos différentes plateformes :

#### 1. Rejoignez notre Serveur Discord Officiel
- Obtenez de l'aide rapidement de la part des développeurs et de joueurs expérimentés.
- Rejoindre via : **[Invitation Discord officiel](https://discord.gg/W5XVwYY7GQ)**
- **Comment demander :** Allez dans le salon **#feedback-and-idea** et téléchargez votre rapport de diagnostic ou votre journal de plantage.
- Voici un aperçu de notre salon d'entraide :
  
  <img src="/guidephoto/Discord-feedback.gif" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

#### 2. Demandez sur Reddit
- Vous pouvez poser vos questions sur notre forum communautaire :
- Visiter : **[Subreddit r/XMCL](https://www.reddit.com/r/XMCL/)**

#### 3. Ouvrez un ticket (Issue) sur GitHub
- Si vous pensez avoir rencontré un bug lié au fonctionnement du lanceur, vous pouvez soumettre un rapport.
- Soumettre ici : **[XMCL GitHub Issues](https://github.com/Voxelum/x-minecraft-launcher/issues)**
- Copiez-collez le contenu de votre rapport ou vos journaux de plantage dans la description pour que l'équipe puisse reproduire et corriger le bug.
