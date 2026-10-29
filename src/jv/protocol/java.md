# Java Data Cache

<!-- xmcl-auto-fallback -->
::: info Bagean iki durung kasedhiya ing Basa Jawa
Konten ditampilake ing Basa Inggris. Yen sampeyan pengin mbantu nerjemahake, monggo gabung ing repositori [xmcl-page ing GitHub](https://github.com/voxelum/xmcl-page).
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