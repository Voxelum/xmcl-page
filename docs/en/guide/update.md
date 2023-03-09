# Update Guide

> Under Construction

Since the launcher is still in `beta` stage, it is especially important to back up the data ...... Here we will introduce how to solve the update problems and how to back up if you want to reinstall.

## APPX update needs to be reinstalled

Because the old version of the launcher certificate in `APPX` format has expired, upgrading from the old version to the new version will require uninstalling the old version. In this case, please backup your XMCL data folder.

::: code-group
```[Windows (APPX)]
C:\Users\foo\AppData\Local\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
:::

You can copy it out and put it on the desktop. After reinstallation the file path for the new version of XMCL should be in

::: code-group
```[Windows (APPX)
C:\Users\foo\AppData\Local\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
:::

Just put the file you backed up back in.

## APPX update failed

The APPX update should also open a folder with the downloaded `xmcl.appinstaller` file. You can double-click this file manually to install the update.

## Other updates need to be reinstalled

In this case you don't really need to backup, because only `APPX` will clean up the XMCL data files. Of course you can back up if you want, the data files will be placed in the following location.

::: code-group
```[Windows]
C:\Users\foo\AppData\Roaming\xmcl
```
```sh [macOS]
~/Library/Application Support/xmcl
```
```sh [Linux]
~/.config/xmcl
```
:::

## Other versions failed to update

Redownload it ......
