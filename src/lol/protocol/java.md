# Java Data Cache

<!-- xmcl-auto-fallback -->
::: info Dis cat scroll haz not been translated 2 LOLCAT yet!
Teh scroll iz in English. If u wanna help teh cat clowdr translate, chek [xmcl-page on GitHub](https://github.com/voxelum/xmcl-page).
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