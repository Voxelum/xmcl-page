# Java Data Cache

<!-- xmcl-auto-fallback -->
::: info এই বিভাগটি এখনও বাংলায় অনূদিত হয়নি
বিষয়বস্তু ইংরেজিতে প্রদর্শিত হচ্ছে। আপনি যদি অনুবাদে সহায়তা করতে চান, তবে অনুগ্রহ করে [GitHub-এ xmcl-page রিপোজিটরি](https://github.com/voxelum/xmcl-page)-তে অবদান রাখুন।
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