# Format de stockage des instances

> Rédaction en cours

XMCL, similaire à MultiMC, stocke des informations pour chaque instance.

Ces informations sont stockées dans le [répertoire de données XMCL](/fr/guide/manage#xmcl-cache-and-database)：

<!-- ```bash
.
├─ instances
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
``` -->

```sh
Répertoire de données XMCL
└─ 📜instances.json # Fichier de configuration d'instance globale
```

Ainsi que le [répertoire de données de jeu XMCL](/fr/guide/manage#minecraft-related-data)：

```sh
Répertoire de données de jeu XMCL
└─📂instances # Contient des fichiers pour les instances
  ├─📂instance-a
  │ └─ 📜instance.json # Fichier de configuration pour l'instance A
  └─ 📂instance-b
    └─ 📜instance.json # Fichier de configuration pour l'instance B
```

## Format du fichier de Configuration Globale

Ici, nous supposons que vos données XMCL sont stockées dans `/path/to/xmcl`.

```json5
{
     // Ceci est la dernière instance sélectionnée. Le launcher sélectionnera celle-ci lors de son lancement.
     "selectedInstance": "/chemin/vers/xmcl/instances/instance-a",
     // Il s'agit d'une liste en cache de toutes les instances. Les chemins d'instances externes importés seront également stockés ici. Ils seront indisponibles si le launcher est supprimé.
     "instances": [
         "/path/to/xmcl/instances/instance-a",
         "/path/to/xmcl/instances/instance-b",
         // Instances externes
         "/external/.minecraft"
     ]
}
```

## Fichier de configuration de l'instance

Supposons que vous en ayez créé un dans `/path/to/xmcl/instances/mc.hypixel.com`.

```json5
{
     // C'est le nom affiché dans le launcher
     "name": "mc.hypixel.com",
     // Non implémenté actuellement. Définit la résolution du jeu d'instance
     "resolution": { "width": 800, "height": 400, "fullscreen": false },
     // Mémoire minimale
     "minMemory": 0,
     // Mémoire maximale
     "maxMemory": 0,
     // Paramètres de démarrage supplémentaires JVM
     "vmOptions": [],
     // Paramètres de démarrage supplémentaires MC
     "mcOptions": [],
     "url": "",
     // URL de l'icône de l'instance
     "icon": "",
     // Indique si XMCL affichera une fenêtre de journal (log) après le lancement
     "showLog": false,
     // Indique s'il faut masquer le launcher après le lancement
     "hideLauncher": true,
     // Version requise pour l'instance, une chaîne de caractères vide représente non requis
     "runtime": {
        "minecraft": "1.16.3",
        "forge": "",
        "liteloader": "",
        "fabricLoader": "",
        "yarn": "",
        "optifine": "",
        "quiltLoader": ""
    },
     // Chemin Java, vide représente la détection automatique
     "java": "",
     // Version de lancement spécifiée manuellement, vide représente un calcul basé sur l'exécution
     "version": "",
     // Adresse du serveur, si présente le launcher se connectera directement à ce serveur
     "server": { "host": "mc.hypixel.net", "port": 25565 },
     // Auteur du modpack
     "auteur": "ci010",
     // Description
     "description": "",
     "lastAccessDate": 1661774086015,
     "creationDate": 1602514422594,
     "modpackVersion": "",
     "fileApi": "",
     "tags": [],
     "assignMemory": false,
     // S'il faut lancer rapidement
     "fastLaunch": false
}

```