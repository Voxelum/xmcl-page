# Формат збереження інстанцій

> У процесі розробки

XMCL, подібно до MultiMC, зберігає інформацію про інстанції.

Ця інформація зберігається в каталозі даних XMCL: /uk/guide/manage#xmcl-cache-and-database

```sh
Каталог даних XMCL
instances.json # Глобальний файл конфігурації інстанцій
```

А також у каталозі ігрових даних XMCL:

```sh
Каталог ігрових даних XMCL
instances # Містить файли інстанцій
  instance-a
    instance.json # Файл конфігурації для інстанції A
  instance-b
    instance.json # Файл конфігурації для інстанції B
```

## Формат глобального конфігураційного файлу

Припустимо, ваші дані XMCL зберігаються в `/path/to/xmcl`.

```json5
{
    // Це остання вибрана інстанція. Лаунчер вибере її під час запуску.
    "selectedInstance": "/path/to/xmcl/instances/instance-a",
    // Це кешований список усіх інстанцій. Шляхи до зовнішніх імпортованих інстанцій також зберігатимуться тут.
    "instances": [
        "/path/to/xmcl/instances/instance-a",
        "/path/to/xmcl/instances/instance-b",
        // Зовнішні інстанції
        "/external/.minecraft"
    ]
}
```

## Файл конфігурації інстанції

Припустимо, ви створили одну в `/path/to/xmcl/instances/mc.hypixel.com`.

```json5
{
    // Назва, що відображається в лаунчері
    "name": "mc.hypixel.com",
    // Наразі не активовано. Встановлює роздільну здатність гри для інстанції
    "resolution": { "width": 800, "height": 400, "fullscreen": false },
    // Мінімальна пам'ять
    "minMemory": 0,
    // Максимальна пам'ять
    "maxMemory": 0,
    // Додаткові параметри запуску JVM
    "vmOptions": [],
    // Додаткові параметри запуску MC
    "mcOptions": [],
    "url": "",
    // URL піктограми інстанції
    "icon": "",
    // Чи показувати вікно журналу після запуску
    "showLog": false,
    // Чи приховувати лаунчер після запуску
    "hideLauncher": true,
    // Потрібна версія для інстанції, порожній рядок означає відсутність вимоги
    "runtime": {
        "minecraft": "1.16.3",
        "forge": "",
        "liteloader": "",
        "fabricLoader": "",
        "yarn": "",
        "optifine": "",
        "quiltLoader": ""
    },
    // Шлях до Java, порожній означає автоматичне виявлення
    "java": "",
    // Вручну вказана версія запуску, порожня означає обчислення на основі runtime
    "version": "",
    // Адреса сервера, якщо вказана, лаунчер підключиться безпосередньо до цього сервера
    "server": { "host": "mc.hypixel.net", "port": 25565 },
    // Автор модпаку
    "author": "ci010",
    // Опис
    "description": "",
    "lastAccessDate": 1661774086015,
    "creationDate": 1602514422594,
    "modpackVersion": "",
    "fileApi": "",
    "tags": [],
    "assignMemory": false,
    // Чи ввімкнути швидкий запуск
    "fastLaunch": false
}
```
