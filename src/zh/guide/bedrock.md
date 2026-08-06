# Minecraft 基岩版（Bedrock Edition）指南

X Minecraft Launcher (XMCL) 支持管理、下载和启动 **Minecraft 基岩版**（即 *Windows 10/11 版* 或 *UWP 版*）。

本指南将介绍如何在 XMCL 中设置基岩版、包文件的来源以及跨平台兼容性。

---

## 1. 系统要求与设置（仅限 Windows）

Minecraft 基岩版使用 Windows UWP (Universal Windows Platform) 包架构 (`Microsoft.MinecraftUWP`)。

### 步骤 1：开启 Windows 开发者模式
为了允许 XMCL 在系统上切换并注册已解压的基岩版版本包，而无需每次都从 Microsoft Store 重新下载：

1. 按 `Win + I` 打开 **Windows 设置**。
2. 前往 **隐私和安全性**（或 *系统*）-> **开发者选项**。
3. 将 **开发者模式** 切换为 **开**。
4. 确认 Windows 提示。

:::warning Microsoft 许可证要求
您的 Microsoft 账户必须拥有有效的 **Minecraft 基岩版** 许可证（或已从 Microsoft Store 下载过基岩版）才能游玩完整正式版。Beta/Preview 版本需要注册了 Insider Beta 计划的 Microsoft 账户。
:::

---

## 2. 版本文件从何而来？

XMCL 访问的所有基岩版版本文件及元数据均直接获取自官方基础设施：

- **版本数据库 (`mrarm.io/r/w10-vdb`)**：提供官方公开正式版和 Preview 版本的 GUID（Update Identity）索引列表。
- **包下载 (`tlu.dl.delivery.mp.microsoft.com`)**：包文件 (`.appx`) 直接从 **Microsoft 官方 Windows Update Delivery CDN** 下载。XMCL 不托管或分发任何游戏文件。

---

## 3. 操作系统兼容性（Windows vs. macOS vs. Linux）

| 操作系统 | 兼容状态 | 详情 |
| :--- | :--- | :--- |
| 💻 **Windows 10 / 11** | ✅ **完全支持** | 原生 UWP 运行环境。版本切换与启动完美运行。 |
| 🍎 **macOS** | ❌ **不支持** | XMCL 中的基岩版依赖 Windows 独占的 AppX/UWP API (`Get-AppxPackage`)。在 macOS 上请原生游玩 **Java 版**。 |
| 🐧 **Linux** | ❌ **不支持** | UWP 包管理为 Windows 独占。在 Linux 上请原生游玩 **Java 版** 或使用第三方 `mcpelauncher` 工具（Android APK）。 |

:::info 在 macOS 和 Linux 上游玩
如果您使用的是 macOS 或 Linux，我们强烈推荐在 XMCL 中游玩 **Minecraft Java 版**，它 100% 跨平台，支持数以万计的 Mod、光影和服务器！
:::
