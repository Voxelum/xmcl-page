# Инстанция сақтау форматы

> Құрылыс alatt

XMCL Multimc сиякты инстанция туралы ақпаратты сақтайды.

Бұл ақпарат XMCL деректер каталогында сақталады: /kk/guide/manage#xmcl-cache-and-database

```sh
XMCL деректер каталогы
instances.json # Глобалдық инстанция конфигурация файлы
```

және XMCL ойын деректері каталогында:

```sh
XMCL ойын деректері каталогы
instances # Инстанциялар үшін файлдар бар
  instance-a
    instance.json # Инстанция A үшін конфигурация файлы
  instance-b
    instance.json # Инстанция B үшін конфигурация файлы
```

## Глобалдық конфигурация файлы форматы

Мысалы, сіздің XMCL деректеріңіз `/path/to/xmcl` жолында орналасқан деп есептейік.

```json5
{
    // Бұл соңғы таңдалған инстанция. Лаунчер іске қосылғанда осыны таңдайды.
    "selectedInstance": "/path/to/xmcl/instances/instance-a",
    // Бұл барлық инстанциялардың кэштелген тізімі. Сырттан импортталған инстанция жолдары да мұнда сақталады.
    "instances": [
        "/path/to/xmcl/instances/instance-a",
        "/path/to/xmcl/instances/instance-b",
        // Сыртқы инстанциялар
        "/external/.minecraft"
    ]
}
```

## Инстанция конфигурация файлы

Мысалы, `/path/to/xmcl/instances/mc.hypixel.com` жолында инстанция құрдыңыз делік.

```json5
{
    // Лаунчерде көрсетілетін атау
    "name": "mc.hypixel.com",
    // Қазіргі уақытта белсендірілмеген. Инстанцияның ойын ажыратымдылығын орнатады
    "resolution": { "width": 800, "height": 400, "fullscreen": false },
    // Мин. жад
    "minMemory": 0,
    // Макс. жад
    "maxMemory": 0,
    // JVM қосымша бастау параметрлері
    "vmOptions": [],
    // MC қосымша бастау параметрлері
    "mcOptions": [],
    "url": "",
    // Инстанция иконкасының URL-мекені
    "icon": "",
    // Іске қосқаннан кейін XMCL журнал терезесін көрсетуі
    "showLog": false,
    // Іске қосқаннан кейін лаунчерді жасыруы
    "hideLauncher": true,
    // Инстанция үшін қажетті нұсқалар, бос жол қажет емес екенін білдіреді
    "runtime": {
        "minecraft": "1.16.3",
        "forge": "",
        "liteloader": "",
        "fabricLoader": "",
        "yarn": "",
        "optifine": "",
        "quiltLoader": ""
    },
    // Java жолы, бос автоматты анықтауды білдіреді
    "java": "",
    // Қолмен көрсетілген бастау нұсқасы, бос runtime негізінде есептеледі
    "version": "",
    // Сервер мекен-жайы, көрсетілген жағдайда лаунчер тікелей осы серверге қосылады
    "server": { "host": "mc.hypixel.net", "port": 25565 },
    // Модпак авторы
    "author": "ci010",
    // Сипаттамасы
    "description": "",
    "lastAccessDate": 1661774086015,
    "creationDate": 1602514422594,
    "modpackVersion": "",
    "fileApi": "",
    "tags": [],
    "assignMemory": false,
    // Жылдам іске қосу
    "fastLaunch": false
}
```
