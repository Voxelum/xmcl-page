# Хранение данных

XMCL данные делятся на две части:

1. XMCL как кэш и база данных, сгенерированные chromium
2. Данные, связанные с Майнкрафтом

## XMCL кэш и база данных

Кэш, связанный с самим XMCL, хранится в системном пути appdata, который отличается на разных платформах.

::: code-group
```cmd [Windows]
%AppData%\xmcl
```
```cmd [Windows (APPX/appinstaller)]
# Version < 0.34
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
# Version >= 0.34 and < 0.40
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```
```sh [macOS]
~/Library/Application Support/xmcl
```
```sh [Linux]
~/.config/xmcl
```
:::

:::warning Note
Не удаляйте приведенные здесь файлы, если вы не знаете, что делаете.
:::

Здесь вы найдете несколько файлов "json", используемых для хранения различных конфигураций, и база данных также будет храниться здесь.

- [User data](../protocol/user.md). Хранит учетные записи пользователей, ссылки на скины и т.д. Хранится в файле `/user.json`.
- [Global settings](../protocol/setting.md). Глобальные настройки, такие как язык, URL-адрес прокси-сервера, узел загрузки и т.д. Хранятся в файле "/settings.json".
- [Instance cache](../protocol/instance.md). Записывает путь к последнему выбранному экземпляру и пути ко всем известным экземплярам. Хранится в файле `/instances.json`.
- [Java cache](../protocol/java.md). Записывает обнаруженные пути к Java, информацию о версии и т.д. Хранится в файле `/java.json`.
- [Resource database](../protocol/resources.md). Метаданные для файлов ресурсов, такие как проанализированная информация о модулях. Хранятся в формате `leveldb` в папке `/resources-v2`.
- [Logs](../protocol/logs.md). Архивные журналы XMCL. Хранятся в папке `/logs`.

## Данные, связанные с Minecraft

Я полагаю, вы хорошо знакомы со структурой каталогов данных Minecraft.
Каталог данных в XMCL немного отличается от каталога данных в Minecraft:

```sh
"Public Data folder"
└─ 📂mods # Общая папка модов для всех экземпляров
  └─ modA.jar # Конкретный файл мода, например, может связывать моды из него.
├─ 📂resourcepacks # Общая папка resourcepacks для всех экземпляров
├─ 📂shaderpacks # Общая папка shaderpacks для всех экземпляров
├─ 📂versions # Общая папка версий для всех экземпляров
├─ 📂assets # Общая папка ассетов для всех экземпляров
├─ 📂libraries # Папка общих библиотек для всех экземпляров
└─ 📂instances # Содержит экземпляры, созданные с помощью XMCL
```

Большая часть содержимого на самом деле такая же, как и в Minecraft, среди которых папка `instance` содержит все файлы экземпляров.