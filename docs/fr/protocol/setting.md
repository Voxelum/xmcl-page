# Paramètres globaux

> Rédaction en cours

Les données globales sont stockées dans [xmcl data directory](/fr/guide/manage#xmcl-cache-and-database).

```sh
xmcl data directory
└─ setting.json # fichier de configuration utilisateur
```

## Paramètres globaux Format JSON

```json5
{
    // La langue actuellement sélectionnée
    "locale": "fr",
    // Pas activé
    "autoInstallOnAppQuit": false,
    // Pas activé
    "autoDownload": false,
    // Pas activé
    "allowPrerelease": false,
    // Liste des API BMCL connues
    "apiSets": [
        {
            "name": "mcbbs",
            "url": "https://download.mcbbs.net"
        },
        {
            "name": "bmcl",
            "url": "https://bmclapi2.bangbang93.com"
        }
    ],
     // API BCML préférée, vide signifie sélection automatique
     "apiSetsPreference": "",
     // URL du proxy local
     "httpProxy": "http://127.0.0.1:7890",
     // S'il faut utiliser un proxy
     "httpProxyEnabled": true,
     // Thème, clair ou foncé
     "theme": "dark",
     // Nombre maximum de sockets HTTP pour le téléchargement
     "maxSockets": 16,
    "globalMinMemory": 0,
    "globalMaxMemory": 0,
    "globalAssignMemory": false,
    "globalVmOptions": [
        ""
    ],
    "globalMcOptions": [
        ""
    ],
    "globalFastLaunch": false,
    "globalHideLauncher": true,
    "globalShowLog": false,
     // Activer ou non la présence riche de Discord
     "discordPresence": true,
     // Activer ou non le mode développeur
     "developerMode": false,
     // Nombre maximum de sockets HTTP pour les requêtes API
     "maxAPISockets": 16
}
```