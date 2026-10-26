# Instance storage format

<!-- xmcl-auto-fallback -->
::: info Questa sezione non è ancora disponibile in italiano
Il testo è visualizzato in inglese. Se desideri contribuire alla traduzione, puoi farlo nel repository [xmcl-page su GitHub](https://github.com/voxelum/xmcl-page).
:::

> Under construction

XMCL, similar to multimc, stores instance information.

This information is stored in the [XMCL data directory](/en/guide/manage#xmcl-cache-and-database)：

<!-- ```bash
.
├─ instances
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
``` -->

```sh
XMCL data directory
└─ 📜instances.json # Global instance configuration file
```

As well as the [XMCL game data directory](/en/guide/manage#minecraft-related-data)：

```sh
XMCL game data directory
└─📂instances # Contains files for instances
  ├─📂instance-a
  │ └─ 📜instance.json # Configuration file for instance A
  └─ 📂instance-b
    └─ 📜instance.json # Configuration file for instance B
```

## Global Configuration File Format

Here we assume your XMCL data is stored in `/path/to/xmcl`.

```json5
{
    // This is the last selected instance. The launcher will select this one when launched.
    "selectedInstance": "/path/to/xmcl/instances/instance-a",
    // This is a cached list of all instances. Imported external instances paths will also be stored here. They will be unavailable if the launcher is deleted.
    "instances": [
        "/path/to/xmcl/instances/instance-a",
        "/path/to/xmcl/instances/instance-b",
        // External instances
        "/external/.minecraft"
    ]
}
```

## Instance configuration file

Suppose you have created one in `/path/to/xmcl/instances/mc.hypixel.com`.

```json5
{
    // This is the name displayed in the launcher
    "name": "mc.hypixel.com",
    // Not currently enabled. Sets resolution of instance game
    "resolution": { "width": 800, "height": 400, "fullscreen": false },
    // Minimum memory
    "minMemory": 0,
    // Maximum memory
    "maxMemory": 0,
    // JVM extra startup parameters
    "vmOptions": [],
    // MC extra startup parameters
    "mcOptions": [],
    "url": "",
    // URL of instance icon
    "icon": "",
    // Whether XMCL will display a log window after launch
    "showLog": false,
    // Whether to hide the launcher after launch
    "hideLauncher": true,
    // Required version for instance, an empty string represents not required
    "runtime": {
        "minecraft": "1.16.3",
        "forge": "",
        "liteloader": "",
        "fabricLoader": "",
        "yarn": "",
        "optifine": "",
        "quiltLoader": ""
    },
    // Java path, empty represents auto detection
    "java": "",
    // Manually specified launch version, empty represents a calculation based on runtime 
    "version": "",
    // Server address, if present the launcher will connect directly to this server
    "server": { "host": "mc.hypixel.net", "port": 25565 },
    // Modpack author
    "author": "ci010",
    // Description
    "description": "",
    "lastAccessDate": 1661774086015,
    "creationDate": 1602514422594,
    "modpackVersion": "",
    "fileApi": "",
    "tags": [],
    "assignMemory": false,
    // Whether to launch quickly
    "fastLaunch": false
}

```