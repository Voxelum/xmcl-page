# 安装指南

XMCL 为 Windows、macOS 和 Linux 提供了多种安装方式。

:::tip 实用指南
- 💾 **需要将启动器或游戏数据移动到 D: 或 E: 盘？** 请阅读 [磁盘迁移指南](./change-drive.md)。
- 🧱 **想玩 Minecraft 基岩版（Windows 10/11）？** 请阅读 [基岩版指南](./bedrock.md)。
:::

---

## Windows

为 Windows 提供多种安装方式：

### 1. APPX & AppInstaller 联网下载 — 推荐
- **APPX** 是 Windows 10/11 的现代沙盒应用程序包格式。应用程序会在隔离环境中运行。卸载后，缓存和注册表更改也会被移除干净。
- **AppInstaller** 会通过微软安全的交付渠道自动下载和更新 APPX 软件包，并支持 **增量更新**。

### 2. 便携式 ZIP 软件包
- 无需安装，也不需要管理员权限。
- 可以将压缩包解压到任意位置（例如 `D:\Games\XMCL`），然后直接运行 `xmcl.exe`。
- 适合存放在 USB 设备或其他磁盘分区中。

### 3. 在 Windows 7 / 8 / 8.1 上运行（VxKex 扩展内核）

:::warning 重要兼容性须知
现代版本的 XMCL 基于 **Electron 43 / Chromium 130+** 构建。Chromium 和微软已 **正式停止对 Windows 7、8 和 8.1 的支持**。启动器**无法直接运行**在这些旧版 Windows 上。
:::

:::details 使用 VxKex 扩展内核的替代方案
你可以使用非官方的 **VxKex** 扩展内核在 Windows 7 / 8 上运行 XMCL：

1. 下载并安装 [VxKex-NEXT](https://github.com/YuZhouRen86/VxKex-NEXT)。
2. 右键点击 `xmcl.exe` -> **属性** -> **VxKex** 选项卡。
3. 勾选 **"为此程序启用 VxKex NEXT"** and **"报告其他版本的 Windows"**，然后应用设置。

**Windows 7/8 上支持和不支持的功能：**
- ✅ **单人游戏（Java 版）** — 配合适当的 Java 运行时（Java 8 / 17 / 21）可以正常运行。
- ❌ **P2P WebRTC 多人游戏** — 不支持（需要 Windows 10+ 的网络 API）。
- ❌ **基岩版（UWP）** — 不支持（需要 Windows 10/11 的 UWP 框架）。
:::

---

## macOS

### DMG 软件包
1. 下载并打开 `.dmg` 文件。
2. 将 **XMCL.app** 拖动到你的 **Applications**（应用程序） 文件夹中。

:::warning Gatekeeper 放行指南
要解除 macOS 对未签名应用程序的警告，请在终端中运行以下命令：

```sh
sudo xattr -c /Applications/X\ Minecraft\ Launcher.app
```
:::

---

## Linux

### AppImage
- 适用于各种 Linux 发行版（Ubuntu、Fedora、Arch 等）的通用二进制程序。
- 使用 `chmod +x XMCL.AppImage` 将其标记为可执行，然后运行。

---

## 游戏数据目录选择

首次设置时，XMCL 会提示你选择一个 **游戏数据目录**。
- 建议选择一个专用文件夹（例如 `D:\XMCL-Data`）。
- 详细信息请参阅 [数据管理指南](./manage.md) 和 [磁盘迁移指南](./change-drive.md)。
