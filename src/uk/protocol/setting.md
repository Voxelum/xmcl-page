# Глобальні налаштування

> У розробці

Глобальні дані зберігаються в [xmcl data directory](/en/guide/manage#xmcl-cache-and-database).

```sh
xmcl data directory
└─ setting.json # файл конфігурації користувача
```

## Глобальні налаштування Формат JSON

```json5
{
    // Поточна обрана мова
    "locale": "en",
    // Не включено
    "autoInstallOnAppQuit": false,
    // Не включено
    "autoDownload": false,
    // Не включено
    "allowPrerelease": false,
    // Список відомих API-інтерфейсів BMCL
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
    // Переважний BCML API, порожній означає автоматичний вибір
    "apiSetsPreference": "",
    // URL-адреса локального проксі-сервера
    "httpProxy": "http://127.0.0.1:7890",
    // Чи слід використовувати проксі-сервер
    "httpProxyEnabled": true,
    // Тема, світла чи темна
    "theme": "dark",
    // Максимальна кількість HTTP-сокетів для завантаження
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
    // Чи варто вмикати активність Discord
    "discordPresence": true,
    // Чи варто вмикати режим розробника
    "developerMode": false,
    // Максимальна кількість HTTP-сокетів для запитів API
    "maxAPISockets": 16
}
```