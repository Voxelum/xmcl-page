# Кэш данных Java

XMCL кэширует всю найденную java в JSON-файл, который сохраняется в [каталоге данных xmcl](/ru/guide/manage#xmcl-cache-and-database).

```sh
xmcl data directory
└─ java.json # Кэш данных Java
```

## Java Cache JSON Format

```json5
{
    "all": [
        {
            // Путь к исполняемому файлу
            "path": "path/to/java",
            // Кэшированная версия
            "version": "11.0.6",
            // Основной номер версии
            "majorVersion": 11,
            // Является ли он доступным и исполняемым
            "valid": true
        },
    ]
}
```