# 安装指南

启动器提供了多种安装格式，其中一些安装格式较为，在这里将着重介绍一下**少见**或**特殊**的格式特性。

## Windows

:::info
Windows 推荐使用 `APPX` 或 `在线安装 (appinstaller)` 安装
:::

### APPX

APPX 是 Windows 10 提供的一种带虚拟化/沙箱运行程序的**安装包**格式，通过 APPX 安装的程序都会在 Windows 沙箱中运行。

对于用户最大的感知就是，这种程序的应用`缓存文件`、`注册表修改`等操作都会被隔离 —— 你卸载这个应用的时候，`缓存`和`注册表修改`都会被一并删除。

:::info 好消息
~~不用担心程序在注册表里到处拉屎了，虽然XMCL唯一添加的注册表可能就是文件后缀关联~~
:::

AppX 的更新是走 [appinstaller](https://learn.microsoft.com/en-us/windows/msix/app-installer/auto-update-and-repair--overview#app-installer-file) 机制的。根据 appinstaller 自带的[自动更新](https://learn.microsoft.com/en-us/windows/msix/app-installer/auto-update-and-repair--overview#automatic-updates)策略，XMCL 会在用户**启动应用**时检查更新，若有更新则下次启动会更新。

:::tip 好消息
APPX 的自动更新支持 Windows 的**优化传递**，以及**增量更新** —— 只更新变化的内容
:::

### 在线安装 (appinstaller)

`appinstaller` 本质上和 `APPX` 格式相同，`appinstaller` 本身是个 `XML` 文本文件，里面保存着 `APPX` 的 `URL`。弹出安装界面时会尝试下载 `APPX` 并安装。因此其更新机制和 `APPX` 是相同的。

## MacOS

:::warning
Mac 用户需要允许安装破解软件。
由于 XMCL 未签名，您需要在系统设置中允许其运行。
:::

### DMG

我们仅为 MacOS 用户提供 DMG 格式。DMG 格式是一种磁盘映像格式，可以挂载为虚拟磁盘。打开 DMG 后，将应用程序拖到 `Applications` 文件夹中以进行安装。

但因为 XMCL 没有苹果的代码签名，你需要允许你的苹果系统安装任意来源的应用才能使用，安装后请打开终端输入以下命令：

```sh
# 允许来自任何来源的软件
sudo spctl --master-disable
# 清除隔离属性
sudo xattr -c /Applications/X\ Minecraft\ Launcher.app
```

如果您将 X Minecraft Launcher.app 安装到其他位置，只需使用该路径替换 `/Applications/X\ Minecraft\ Launcher.app`。

## Linux

:::info
Linux 的发行版太多了……这里只提一下 `AppImage` 格式，欢迎大家补充
:::

### AppImage

AppImage 是一种 Linux 应用程序的格式，它可以在任何 Linux 桌面上运行，而无需安装。AppImage 文件是可执行的，只需双击或从终端运行即可。

这是 XMCL 唯一提供的非安装式的程序 (~~其实是很不想支持的~~)。因此他的更新机制和其他的格式都不同，他需要用户自行下载一个新的 AppImage 来更新。

### 其他格式

目前其他的安装格式安装后，都要么支持[热更新]，要么支持 electron-builder 自带的更新方式。这种更新模式一般来说不需要太在意（~~更新不了也可以重新下~~）。

:::tip 热更新
热更新是指启动器自行替换核心的 asar 文件 (~30mb)，不需要完整重新下载启动器
:::

## 游戏数据目录的选择

在初次安装时，用户需要选择`游戏数据目录`。XMCL 将会把下载的 `assets`, `libraries`, `versions` 等放置到这个目录下。

:::warning 注意
而如同引导页描述的一样，因为 XMCL 的文件结构较为特殊，不建议使用**原始**的 Minecraft 游戏目录作为 XMCL 的数据目录。
:::

这里推荐选择一个新的文件夹作为 XMCL 的`游戏数据目录`。

关于游戏数据目录的结构，详情请看[数据管理指南](/zh/guide/manage.md#minecraft-相关数据)。
