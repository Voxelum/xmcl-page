# Жаһандық параметрлер

> Құрылып жатыр

Жаһандық деректер [XMCL деректер каталогында](/kk/guide/manage#xmcl-cache-and-database) сақталады.

```sh
xmcl data directory
└─ setting.json # пайдаланушы баптауларының файлы
```

## Жаһандық параметрлердің JSON форматы

```json5
{
    // Ағымдағы таңдалған тіл
    "locale": "en",
    // Қосылмаған
    "autoInstallOnAppQuit": false,
    // Қосылмаған
    "autoDownload": false,
    // Қосылмаған
    "allowPrerelease": false,
    // Таныс BMCL API тізімі
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
    // Теңшелетін BCML API, бос болса автоматты түрде таңдалады
    "apiSetsPreference": "",
    // Жергілікті прокси URL
    "httpProxy": "http://127.0.0.1:7890",
    // Проксиді қолдану қажет пе
    "httpProxyEnabled": true,
    // Тақырып: light немесе dark
    "theme": "dark",
    // Жүктеу үшін ең көп HTTP сокеттер саны
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
    // Discord қатысуын қосу
    "discordPresence": true,
    // Әзірлеуші режимін қосу
    "developerMode": false,
    // API сұрауларына арналған ең көп HTTP сокеттер саны
    "maxAPISockets": 16
}
```
