# Зберігання даних

Дані XMCL поділяються на дві частини:

1. Кеш та бази даних XMCL, створені Chromium
2. Дані, пов'язані з Minecraft

## Кеш і база даних XMCL

Кеш, пов'язаний з XMCL, зберігається в системному AppData шляху, який відрізняється в залежності від платформи.

::: code-group
```cmd [Windows]
%AppData%\xmcl
```
```cmd [Windows (APPX/appinstaller)]
# Версія < 0.34
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
# Версія >= 0.34 і < 0.40
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```
```sh [macOS]
~/Library/Application Support/xmcl
```
```sh [Linux]
~/.config/xmcl
```
:::

:::warning Увага
Не видаляйте файли тут, якщо ви не знаєте, що робите.
:::

Тут ви знайдете кілька `json` файлів для збереження різних налаштувань; також тут зберігається база даних.

- [Дані користувача](../protocol/user.md). Зберігає акаунти користувачів, посилання на скіни тощо. Зберігається в `/user.json`.
- [Глобальні налаштування](../protocol/setting.md). Глобальні налаштування, такі як мова, URL проксі, вузол завантаження тощо. Зберігається в `/settings.json`.
- [Кеш інстанцій](../protocol/instance.md). Записує останній вибраний шлях інстанції та всі відомі шляхи інстанцій. Зберігається в `/instances.json`.
- [Кеш Java](../protocol/java.md). Записує виявлені шляхи Java, інформацію про версії тощо. Зберігається в `/java.json`.
- [База ресурсів](../protocol/resources.md). Метадані для файлів ресурсів, наприклад інформація про моди. Зберігається у форматі `leveldb` в папці `/resources-v2`.
- [Логи](../protocol/logs.md). Історичні логи XMCL. Зберігаються в папці `/logs`.

## Дані, пов'язані з Minecraft

Припускаю, що ви добре знайомі зі структурою каталогу даних Minecraft.
Каталог даних XMCL трохи відрізняється від стандартного каталогу Minecraft:

```sh
"Public Data folder"
└─ 📂mods # Спільна папка mods для всіх інстанцій
  └─ modA.jar # Конкретний файл модифікації; інстанції можуть посилатися на моди тут
├─ 📂resourcepacks # Спільна папка resourcepacks для всіх інстанцій
├─ 📂shaderpacks # Спільна папка shaderpacks для всіх інстанцій
├─ 📂versions # Спільна папка versions для всіх інстанцій
├─ 📂assets # Спільна папка assets для всіх інстанцій
├─ 📂libraries # Спільна папка libraries для всіх інстанцій
└─ 📂instances # Містить інстанції, створені XMCL
```

Більшість вмісту фактично таке ж, як у Minecraft; папка `instances` містить всі файли інстанцій.
