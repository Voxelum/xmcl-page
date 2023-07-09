# Cache de données Java

XMCL met en cache tous les Java trouvés dans un fichier JSON, qui est enregistré dans le [répertoire de données xmcl](/fr/guide/manage#xmcl-cache-and-database).

```sh
xmcl data directory
└─ java.json # fichier cache java
```

## Format JSON du cache Java

```json5
{
    "all": [
        {
            // Chemin du fichier exécutable
            "path": "path/to/java",
            // Version en cache
            "version": "11.0.6",
            // Numéro de version majeure
            "majorVersion": 11,
            // S'il est accessible et exécutable
            "valid": true
        },
    ]
}
```