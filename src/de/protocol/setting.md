# Globale Einstellungen

> In Arbeit

Globale Daten werden im [XMCL-Datenverzeichnis](/de/guide/manage#xmcl-cache-and-database) gespeichert.

```sh
xmcl data directory
└─ setting.json # Benutzereinstellungsdatei
```

## JSON-Format der globalen Einstellungen

```json5
{
    // Die aktuell ausgewählte Sprache
    "locale": "en",
    // Nicht aktiviert
    "autoInstallOnAppQuit": false,
    // Nicht aktiviert
    "autoDownload": false,
    // Nicht aktiviert
    "allowPrerelease": false,
    // Liste bekannter BMCL APIs
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
    // Bevorzugte BCML API, leer = automatische Auswahl
    "apiSetsPreference": "",
    // Lokale Proxy-URL
    "httpProxy": "http://127.0.0.1:7890",
    // Proxy verwenden?
    "httpProxyEnabled": true,
    // Theme: light oder dark
    "theme": "dark",
    // Maximale Anzahl HTTP-Sockets für Downloads
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
    // Aktiviert Discord-Präsenz
    "discordPresence": true,
    // Aktiviert den Entwicklermodus
    "developerMode": false,
    // Maximale HTTP-Sockets für API-Anfragen
    "maxAPISockets": 16
}
```
