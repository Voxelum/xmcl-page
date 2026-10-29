# Global Settings

<!-- xmcl-auto-fallback -->
::: info यह अनुभाग अभी तक हिन्दी में उपलब्ध नहीं है
सामग्री अंग्रेजी में प्रदर्शित की जा रही है। यदि आप अनुवाद में मदद करना चाहते हैं, तो कृपया [GitHub पर xmcl-page रिपॉजिटरी](https://github.com/voxelum/xmcl-page) में योगदान दें।
:::

> Under construction

Global data is stored in [xmcl data directory](/en/guide/manage#xmcl-cache-and-database).

```sh
xmcl data directory
└─ setting.json # user configuration file
```

## Global Settings JSON Format

```json5
{
    // The current selected language
    "locale": "en",
    // Not enabled
    "autoInstallOnAppQuit": false,
    // Not enabled
    "autoDownload": false,
    // Not enabled
    "allowPrerelease": false,
    // List of known BMCL APIs
    "apiSets": [
        {
            "name": "mcbbs",
            "url": "https://download.mcbbs.net"
        },
        {
            "name": "bmcl",
            "url": "https://bmclapi2.bangbang93.com"
        }
    ],
    // Preferred BCML API, empty means auto select
    "apiSetsPreference": "",
    // Local proxy url
    "httpProxy": "http://127.0.0.1:7890",
    // Whether to use proxy
    "httpProxyEnabled": true,
    // Theme, light or dark
    "theme": "dark",
    // Max HTTP socket count for downloading
    "maxSockets": 16,
    "globalMinMemory": 0,
    "globalMaxMemory": 0,
    "globalAssignMemory": false,
    "globalVmOptions": [
        ""
    ],
    "globalMcOptions": [
        ""
    ],
    "globalFastLaunch": false,
    "globalHideLauncher": true,
    "globalShowLog": false,
    // Whether to enable Discord presence
    "discordPresence": true,
    // Whether to enable developer mode
    "developerMode": false,
    // Max HTTP socket count for API requests
    "maxAPISockets": 16
}
```