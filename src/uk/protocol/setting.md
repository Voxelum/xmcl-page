# Глобальні налаштування

> У розробці

Глобальні дані зберігаються у [каталозі даних XMCL](/uk/guide/manage#xmcl-cache-and-database).

```sh
xmcl data directory
└─ setting.json # файл конфігурації користувача
```

## Формат JSON глобальних налаштувань

```json5
{
    // Поточна вибрана мова
    "locale": "en",
    // Не ввімкнено
    "autoInstallOnAppQuit": false,
    // Не ввімкнено
    "autoDownload": false,
    // Не ввімкнено
    "allowPrerelease": false,
    // Список відомих BMCL API
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
    // Бажане BCML API, порожнє означає авто-вибір
    "apiSetsPreference": "",
    // Локальний проксі URL
    "httpProxy": "http://127.0.0.1:7890",
    // Використовувати проксі?
    "httpProxyEnabled": true,
    // Тема: light або dark
    "theme": "dark",
    // Макс. кількість HTTP-сокетів для завантажень
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
    // Увімкнути Discord presence
    "discordPresence": true,
    // Увімкнути режим розробника
    "developerMode": false,
    // Макс. кількість HTTP-сокетів для запитів API
    "maxAPISockets": 16
}
```
