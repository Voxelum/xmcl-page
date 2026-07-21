# Ustawienia globalne

> W budowie

Dane globalne są przechowywane w [katalogu danych XMCL](/pl/guide/manage#xmcl-cache-and-database).

```sh
xmcl data directory
└─ setting.json # plik konfiguracji użytkownika
```

## Format JSON ustawień globalnych

```json5
{
    // Aktualnie wybrany język
    "locale": "en",
    // Nie włączone
    "autoInstallOnAppQuit": false,
    // Nie włączone
    "autoDownload": false,
    // Nie włączone
    "allowPrerelease": false,
    // Lista znanych API BMCL
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
    // Preferowane API BCML, puste = automatyczny wybór
    "apiSetsPreference": "",
    // Lokalny adres proxy
    "httpProxy": "http://127.0.0.1:7890",
    // Czy używać proxy
    "httpProxyEnabled": true,
    // Motyw: light lub dark
    "theme": "dark",
    // Maksymalna liczba gniazd HTTP dla pobierania
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
    // Czy włączyć Discord presence
    "discordPresence": true,
    // Czy włączyć tryb programisty
    "developerMode": false,
    // Maksymalna liczba gniazd HTTP dla zapytań API
    "maxAPISockets": 16
}
```
