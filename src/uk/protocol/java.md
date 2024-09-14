# Кеш даних Java

XMCL кешує всю знайдену java в JSON-файл, який зберігається в [каталозі даних xmcl](/uk/guide/manage#xmcl-cache-and-database).

```sh
каталог даних xmcl
└─ java.json # Кеш даних Java
```

## Java Cache JSON Format

```json5
{
    "all": [
        {
            // Шлях до виконуваного файлу
            "path": "path/to/java",
            // Кешована версія
            "version": "11.0.6",
            // Основний номер версії
            "majorVersion": 11,
            // Чи є він доступним і виконуваним
            "valid": true
        },
    ]
}
```