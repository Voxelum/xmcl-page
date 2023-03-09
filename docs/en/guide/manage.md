# Data Storage

The data of XMCL is divided into 2 parts

1. XMCL as chromium-generated cache, database, etc.
2. Minecraft related data

## XMCL cache and database

The XMCL cache itself is stored in the system appdata path, which varies from platform to platform. If your username is `foo`, then the data will be stored in the

::: code-group
```[Windows]
C:\Users\foo\AppData\Roaming\xmcl
```
```[Windows (APPX)
C:\Users\foo\AppData\Local\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
```
```sh [macOS]
~/Library/Application Support/xmcl
```
```sh [Linux]
~/.config/xmcl
```
:::

:::warning Note
Do not delete the files here unless you know what you are doing
:::

Here you will find some `json` files for storing various configurations, and the database will also be stored here.

- The [user data](... /protocol/user.md). Stores the user's account, skin links, etc. Stored in `/user.json` file.
- [global configuration](. /protocol/setting.md). Global settings, such as language, proxy URL, download node, etc. Stored in the `/settings.json` file.
- [instance cache](. /protocol/instance.md). Records the path to the last selected instance, and has been the path to all known instances. Stored in the `/instances.json` file.
- [Java cache](. /protocol/java.md). Records the detected Java paths, version information, etc. Stored in the `/java.json` file.
- [resources database](... /protocol/resources.md). Metadata of the resource file, such as parsed mod information, etc. The storage format is `leveldb`, which is stored in the `/resources-v2` folder.
- [logs](... /protocol/logs.md). XMCL history log. Stored in the `/logs` folder

## Minecraft related data

I'm sure you know the structure of Minecraft's data directory very well.
XMCL's data directory is slightly different than Minecraft's.

<script setup>
import CentraProjectTree from '../../../src/components/CentraProjectTree.vue'
</script>

<CentraProjectTree />

Most of the content is actually the same as Minecraft, where `instances` contains all the instance files.
