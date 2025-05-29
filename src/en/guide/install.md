# Installation Guide

The launcher provides multiple installation formats, some of which are less common. Here we will focus on introducing the **less common** or **special** format features.

## Windows

:::info
The recommended installation format for Windows users is `APPX` or `Online installation (appinstaller)`.
:::

### APPX

APPX is an **installation package** format provided by Windows 10 that allows programs to run in a virtualized/sandboxed environment. Programs installed through APPX will all run in the Windows sandbox.

The biggest benefit for users is that the application's `cache files`, `registry modifications`, and other operations will be isolated - when you uninstall the application, the `cache` and `registry modifications` will be deleted together.

:::info Good news
Don't worry about the program messing around in the registry, although XMCL's only registry addition may be file extension association.
:::

AppX is updated through the appinstaller mechanism. According to the [automatic update](https://learn.microsoft.com/en-us/windows/msix/app-installer/auto-update-and-repair--overview#automatic-updates) strategy built into appinstaller, XMCL checks for updates when the user **launches the application**, and if there is an update, it will update on the next launch.

:::tip Good news
APPX's automatic updates support Windows' **optimization delivery** and **incremental updates** - only updating changed content.
:::

### Online installation (appinstaller)

`appinstaller` is essentially the same as the `APPX` format. `appinstaller` itself is an `XML` text file that contains the `URL` of the `APPX`. When the installation interface pops up, it will attempt to download the `APPX` and install it. Therefore, its update mechanism is the same as APPX.

### Windows 7/8

Solution discovered and provided by [longteng](https://github.com/longteng-H)([bilibili](https://space.bilibili.com/1030667057))

:::details How to run XMCL on Windows systems below Windows 10
By default, XMCL does not support native Windows 7 operation. By installing the VxKex extended kernel to supplement the required runtime libraries, this provides a solution for users who are still on legacy systems. (Note: This method is also applicable to some software that cannot run normally on older systems)

1. Download and install the [VxKex-NEXT](https://github.com/YuZhouRen86/VxKex-NEXT) extended kernel. This is a domestic branch provided here.
2. Find X Minecraft Launcher.exe and enable VxKex for it. If you don't know how, please refer to the video tutorial: [Modern Apps on Windows 7 | Windows 7 Extended Kernel]( https://www.youtube.com/watch?v=zl7AsxtoPV8).

Check both "Enable VxKex NEXT for this program" and "Report other versions of Windows", then apply and confirm.

At this point, XMCL can run normally on Windows 7, and all functions except multiplayer work normally.
:::

## MacOS

:::warning
The mac user need to allow cracked software to be installed.
Since XMCL is not signed, you need to allow it to run in the system settings.
:::

### DMG

We only provide DMG format for MacOS users. The DMG format is a disk image format that is mounted as a virtual disk. After opening the DMG, drag the application to the `Applications` folder to install it.

To run the application, you need to allow the you can use the following command.

```sh
# allow software from any source
sudo spctl --master-disable
# clear the quarantine attribute
sudo xattr -c /Applications/X\ Minecraft\ Launcher.app
```

If you install the `X Minecraft Launcher.app` to other place, just use the path to replace the `/Applications/X\ Minecraft\ Launcher.app`.

## Linux

:::info
Linux has so many distributions that it is difficult to provide a universal installation method. Here we only mention the `AppImage`.
:::

### AppImage

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

For more information about the structure of the game data directory, please see the [Data Management Guide](/en/guide/manage.md#minecraft-related-data).