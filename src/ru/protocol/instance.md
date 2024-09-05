# Формат хранения 

> В разработке....

XMCL, аналогично multimc, хранит информацию об экземпляре.

Эта информация хранится в [каталоге данных XMCL] (/ru/guide/manage#xmcl-cache-and-database):

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
XMCL data directory
└─ 📜instances.json # Файл конфигурации глобального экземпляра
```

А также [каталог игровых данных XMCL] (/ru/guide/manage#minecraft-related-data)：

```sh
XMCL game data directory
└─📂instances # Содержит файлы для экземпляров
  ├─📂instance-a
  │ └─ 📜instance.json # Конфигурационный файл для экземпляра A
  └─ 📂instance-b
    └─ 📜instance.json # Конфигурационный файл для экземпляра B
```

## Глобальный формат файла конфигурации

Здесь мы предполагаем, что ваши данные XMCL хранятся в файле `/path/to/xmcl`.


```json5
{
    // Это последний выбранный экземпляр. Программа запуска выберет его при запуске.
    "selectedInstance": "/path/to/xmcl/instances/instance-a",
    // Это кэшированный список всех экземпляров. Здесь также будут сохранены пути к импортированным внешним экземплярам. Они будут недоступны, если программа запуска будет удалена.
    "instances": [
        "/path/to/xmcl/instances/instance-a",
        "/path/to/xmcl/instances/instance-b",
        // Внешние экземпляры
        "/external/.minecraft"
    ]
}
```

## Файл конфигурации экземпляра

Предположим, вы создали его в `/path/to/xmcl/instances/mc.hypixel.com`.

```json5
{
    // Это имя отображается в лаунчере
    "name": "mc.hypixel.com",
    // В данный момент не включен. Устанавливает разрешение для игры в экземпляре
    "resolution": { "width": 800, "height": 400, "fullscreen": false },
    // Минимум памяти
    "minMemory": 0,
    // Максимум памяти
    "maxMemory": 0,
    // Дополнительные параметры запуска JVM
    "vmOptions": [],
    // Дополнительные параметры запуска MC
    "mcOptions": [],
    "url": "",
    // URL-адрес значка экземпляра
    "icon": "",
    // Будет ли XMCL отображать окно журнала после запуска
    "showLog": false,
    // Следует ли скрывать программу запуска после запуска
    "hideLauncher": true,
    // Требуемая версия, например, пустая строка означает, что она не требуется
    "runtime": {
        "minecraft": "1.16.3",
        "forge": "",
        "liteloader": "",
        "fabricLoader": "",
        "yarn": "",
        "optifine": "",
        "quiltLoader": ""
    },
    // Java путь, пустой представляет собой автоматическое определение
    "java": "",
    // Указанная вручную версия запуска, пустая представляет собой вычисление, основанное на времени выполнения
    "version": "",
    // Адрес сервера, при наличии которого программа запуска подключится непосредственно к этому серверу
    "server": { "host": "mc.hypixel.net", "port": 25565 },
    // Автор модпака
    "author": "ci010",
    // Описание
    "description": "",
    "lastAccessDate": 1661774086015,
    "creationDate": 1602514422594,
    "modpackVersion": "",
    "fileApi": "",
    "tags": [],
    "assignMemory": false,
    // Стоит ли запускать быстро
    "fastLaunch": false
}

```