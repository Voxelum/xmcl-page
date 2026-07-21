# Глобальные настройки

> В разработке

Глобальные данные хранятся в [xmcl data directory](/en/guide/manage#xmcl-cache-and-database).

```sh
xmcl data directory
└─ setting.json # файл конфигурации пользователя
```

## Global Settings JSON Format

```json5
{
    // Текущий выбранный язык
    "locale": "en",
    // Не включено
    "autoInstallOnAppQuit": false,
    // Не включено
    "autoDownload": false,
    // Не включено
    "allowPrerelease": false,
    // Список известных API-интерфейсов BMCL
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
    // Предпочтительный BCML API, пустой означает автоматический выбор
    "apiSetsPreference": "",
    // URL-адрес локального прокси-сервера
    "httpProxy": "http://127.0.0.1:7890",
    // Следует ли использовать прокси-сервер
    "httpProxyEnabled": true,
    // Тема, светлая или темная
    "theme": "dark",
    // Максимальное количество HTTP-сокетов для загрузки
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
    // Следует ли включать активность Discord
    "discordPresence": true,
    // Следует ли включать режим разработчика
    "developerMode": false,
    // Максимальное количество HTTP-сокетов для запросов API
    "maxAPISockets": 16
}
```