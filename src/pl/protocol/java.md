# Pamięć podręczna danych Java

XMCL buforuje wszystkie znalezione instalacje Java w pliku JSON, który jest zapisywany w [katalogu danych XMCL](/pl/guide/manage#xmcl-cache-and-database).

```sh
xmcl data directory
└─ java.json # plik cache Java
```

## Format JSON pamięci podręcznej Java

```json5
{
    "all": [
        {
            // Ścieżka do pliku wykonywalnego
            "path": "path/to/java",
            // Zbuforowana wersja
            "version": "11.0.6",
            // Numer głównej wersji
            "majorVersion": 11,
            // Czy jest dostępny i wykonywalny
            "valid": true
        }
    ]
}
```
