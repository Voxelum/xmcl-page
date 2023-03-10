

# Update Guide

> Under construction

Because the launcher is still in the `beta` stage, data backup is particularly important... Here we will introduce how to solve problems encountered during updates and how to backup if you want to reinstall.

## APPX update requires reinstallation

Because the old version launcher of the `APPX` format has expired certificates, when upgrading from the old version to the new version, it will require uninstalling the old version. In this case, please backup your XMCL data folder.

Suppose `foo` is your username:

::: code-group
```[Windows (APPX)]
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
```
:::

You can copy it out and put it on the desktop. After reinstallation, the new version of XMCL should have the following file path:

::: code-group
```[Windows (APPX)]
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```
:::

Just put your backup files back in.

## APPX update failed

The APPX update should also open a folder, where there is a downloaded `xmcl.appinstaller` file. You can manually double-click this file to install the update.

## Other updates require reinstallation

This situation does not actually require backup, because only `APPX` will clear XMCL's data files. Of course, you can back up if you want to, and the data files will be located in the following locations:

::: code-group
```[Windows]
%AppData%\xmcl
```
```sh [macOS]
~/Library/Application Support/xmcl
```
```sh [Linux]
~/.config/xmcl
```
:::

## Other version updates failed

Just redownload it...