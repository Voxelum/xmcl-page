# Java деректер қорын кэштеу

XMCL табылған барлық Java нұсқаларын JSON файлға кэштейді; бұл файл [XMCL деректер каталогында](/kk/guide/manage#xmcl-cache-and-database) сақталады.

```sh
xmcl data directory
└─ java.json # Java кэш файлы
```

## Java кэшінің JSON форматы

```json5
{
    "all": [
        {
            // Орындаушы файлдың жолы
            "path": "path/to/java",
            // Кэштелген нұсқа
            "version": "11.0.6",
            // Негізгі нұсқа саны
            "majorVersion": 11,
            // Қолжетімді және орындауға жарамды ма
            "valid": true
        }
    ]
}
```
