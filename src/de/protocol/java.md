# Java-Daten-Cache

XMCL speichert alle gefundenen Java-Installationen in einer JSON-Datei, die im [XMCL-Datenverzeichnis](/de/guide/manage#xmcl-cache-and-database) abgelegt wird.

```sh
xmcl data directory
└─ java.json # Java-Cache-Datei
```

## Java-Cache JSON-Format

```json5
{
    "all": [
        {
            // Pfad zur ausführbaren Datei
            "path": "path/to/java",
            // Zwischengespeicherte Version
            "version": "11.0.6",
            // Major-Versionsnummer
            "majorVersion": 11,
            // Ob es zugreifbar und ausführbar ist
            "valid": true
        }
    ]
}
```
