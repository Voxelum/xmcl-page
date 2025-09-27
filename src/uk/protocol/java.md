# Кеш даних Java

XMCL кешує всі знайдені установки Java у JSON-файлі, який зберігається в [каталозі даних XMCL](/uk/guide/manage#xmcl-cache-and-database).

```sh
xmcl data directory
└─ java.json # файл кешу Java
```

## Формат JSON кешу Java

```json5
{
    "all": [
        {
            // Шлях до виконуваного файлу
            "path": "path/to/java",
            // Закешована версія
            "version": "11.0.6",
            // Номер основної версії
            "majorVersion": 11,
            // Чи доступний і виконується
            "valid": true
        }
    ]
}
```
