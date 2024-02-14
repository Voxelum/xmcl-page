# Installation Guide

The launcher provides multiple installation formats, some of which are less common. Here we will focus on introducing the **less common** or **special** format features.

## APPX

APPX is an **installation package** format provided by Windows 10 that allows programs to run in a virtualized/sandboxed environment. Programs installed through APPX will all run in the Windows sandbox.

The biggest benefit for users is that the application's `cache files`, `registry modifications`, and other operations will be isolated - when you uninstall the application, the `cache` and `registry modifications` will be deleted together.

:::info Good news
Don't worry about the program messing around in the registry, although XMCL's only registry addition may be file extension association.
:::

AppX is updated through the appinstaller mechanism. According to the [automatic update](https://learn.microsoft.com/en-us/windows/msix/app-installer/auto-update-and-repair--overview#automatic-updates) strategy built into appinstaller, XMCL checks for updates when the user **launches the application**, and if there is an update, it will update on the next launch.

:::tip Good news
APPX's automatic updates support Windows' **optimization delivery** and **incremental updates** - only updating changed content.
:::

## Online installation (appinstaller)

`appinstaller` is essentially the same as the `APPX` format. `appinstaller` itself is an `XML` text file that contains the `URL` of the `APPX`. When the installation interface pops up, it will attempt to download the `APPX` and install it. Therefore, its update mechanism is the same as APPX.

## AppImage

AppImage is a Linux application format that can run on any Linux desktop without installation. The AppImage file is executable, just double-click or run from the terminal.

This is the only non-installation program that XMCL provides (~~actually don't want to support it~~). Therefore, its update mechanism is different from other formats, and users need to download a new AppImage on their own to update.

## Other formats

Currently, other installation formats either support [hot updates] or support the update method provided by electron-builder. This update mode generally does not require too much attention (~~if you can't update, you can just download the launcher again~~).

:::tip Hot update
Hot update means that the launcher replaces the core asar file (~30mb) on its own, without the need for a complete re-download of the launcher.
:::

## Appendix: Choosing the Game Data Directory

During the initial installation, users need to choose the `Game Data Directory`. XMCL will place downloaded `assets`, `libraries`, `versions`, etc. in this directory.

:::warning Note
As mentioned on the setup page, due to the special file structure of XMCL, it is not recommended to use the **raw** Minecraft game directory as XMCL's data directory.
:::

Here, it is recommended to choose a new folder as XMCL's `Game Data Directory`.

For more information about the structure of the game data directory, please see the [Data Management Guide](/zh/guide/manage.md#minecraft-related-data).