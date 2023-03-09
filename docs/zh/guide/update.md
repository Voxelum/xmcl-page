# 更新指南

> 施工中

因为启动器尚在 `beta` 阶段，因此数据备份尤为重要……这里会介绍一下更新遇到问题了如何解决，若想重装如何备份。

## APPX 更新需要重装

因为 `APPX` 格式的旧版本启动器证书过期了，从旧版本升级到新版时会要求卸载旧版本。这种情况下请备份你的 XMCL 数据文件夹。

::: code-group
```[Windows (APPX)]
C:\Users\foo\AppData\Local\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
```
:::

你可以把它复制出来，放到桌面上。重装后 XMCL 新版的文件路径应该在

::: code-group
```[Windows (APPX)]
C:\Users\foo\AppData\Local\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
```
:::

把你备份的文件重新放进去就好了。

## APPX 更新失败

APPX 更新应该会同时打开一个文件夹，其中会有下载好的 `xmcl.appinstaller` 文件。你可以手动双击这个文件来安装更新。

## 其他更新需要重装

这种情况其实不需要备份，因为只有 `APPX` 才会清理掉 XMCL 的数据文件。当然你想备份也可以，数据文件会放在如下位置：

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

## 其他版本更新失败

重新下载吧……

