## Initial Installation

## Installation Formats

The launcher provides a variety of installation formats, some of which are more, and the features of **rare** or **special** formats will be highlighted here.

### APPX

APPX is an **installer** format provided by Windows 10 with virtualized/sandboxed running programs, and programs installed via APPX are run in a Windows sandbox.

The biggest perception for users is that such programs have their application `cache files`, `registry changes`, and other operations isolated -- when you uninstall the app, the `cache` and `registry changes` are deleted along with it.

:::info Good news
~~ Don't worry about programs shitting all over the registry anymore, although the only registry XMCL adds may be the file suffix association ~~
:::

AppX updates go through the [appinstaller](https://learn.microsoft.com/en-us/windows/msix/app-installer/auto-update-and-repair--overview#app- installer-file) mechanism. According to appinstaller's own [auto-update](https://learn.microsoft.com/en-us/windows/msix/app-installer/auto-update-and-repair--overview#automatic- updates) policy, XMCL will check for updates when the user **launches the application**, and will update it the next time it is launched if there are any updates.

:::tip Good news
APPX's automatic updates support **optimized delivery** for Windows, as well as **incremental updates** -- only what has changed is updated
:::

### AppImage

AppImage is a format for Linux applications that can be run on any Linux desktop without installation.AppImage files are executable and can be run simply by double-clicking or from a terminal.

It is the only non-installable application provided by XMCL (~~which actually doesn't want to support~~). Therefore, its update mechanism is different from all other formats, as it requires the user to download a new AppImage to update it.

### Other formats

All other installation formats currently support either [hot update] or electron-builder's own update mode after installation. This update mode is generally not a concern (~~ you can re-download it if you can't update it~~).

:::tip Hot update
Hot update means that the launcher replaces the core asar file (~30mb) by itself, no need to completely re-download the launcher
:::

## Choice of game data directory

During the initial installation, the user needs to select the `game data directory`, XMCL will place the downloaded `assets`, `libraries`, `versions`, etc. into this directory.

:::warning Note
As described in the bootstrap, it is not recommended to use the **original** Minecraft game directory as the XMCL data directory because of the special file structure of XMCL.
:::

Here it is recommended to choose a new folder as the `game data directory` for XMCL.

For more details about the structure of the game data directory, please see [Data Management Guide](/zh/guide/manage.md#minecraft-relevant-data).
