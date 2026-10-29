# Java Data Cache

<!-- xmcl-auto-fallback -->
::: info यह अनुभाग अभी तक हिन्दी में उपलब्ध नहीं है
सामग्री अंग्रेजी में प्रदर्शित की जा रही है। यदि आप अनुवाद में मदद करना चाहते हैं, तो कृपया [GitHub पर xmcl-page रिपॉजिटरी](https://github.com/voxelum/xmcl-page) में योगदान दें।
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