# Java Data Cache

<!-- xmcl-auto-fallback -->
::: info Esta sección aún no está disponible en español
El contenido se muestra en inglés. Si deseas ayudar con la traducción, puedes colaborar en el repositorio de [xmcl-page en GitHub](https://github.com/voxelum/xmcl-page).
:::

XMCL caches all found java in a JSON file, which is saved in the [xmcl data directory](/en/guide/manage#xmcl-cache-and-database).

```sh
xmcl data directory
└─ java.json # java cache file
```

## Java Cache JSON Format

```json5
{
    "all": [
        {
            // Path of the executable file
            "path": "path/to/java",
            // Cached version
            "version": "11.0.6",
            // Major version number
            "majorVersion": 11,
            // Whether it is accessible and executable
            "valid": true
        },
    ]
}
```