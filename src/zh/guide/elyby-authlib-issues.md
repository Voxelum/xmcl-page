# Ely.by Authlib 兼容性问题

本指南将说明在 XMCL 中启动较新版本的 Minecraft 时为何会出现 **“Ely.by Authlib 兼容性问题”** 警告，以及如何在实例或启动器设置中解决此问题。

---

## ⚠️ 为何会出现此警告？

使用 **Ely.by 账号** 登录时，XMCL 会自动加载 **Ely.by Authlib 替换文件**，以便从 Ely.by 服务器加载自定义皮肤并进行身份验证。

然而，对于较新的 Minecraft 版本（如 **1.20.5+** 或 **1.21.x**），Ely.by 的 Authlib 注入器可能尚未完全兼容 Mojang 最新代码，XMCL 检测到潜在不兼容时即会提示警告。

---

## 🛠 如何解决此问题

### 方法 1：在实例设置中禁用 Ely.by Authlib（推荐）

1. 打开 XMCL 并选择您的 Minecraft 实例。
2. 点击 **实例设置**（当前实例的齿轮图标）。
3. 找到 **“禁用 Ely.by Authlib”**（*Disable Ely.by Authlib*）选项。
4. 将开关切换为 **开启**（ON）。
5. 启动游戏即可正常游玩。

### 方法 2：全局禁用 Ely.by Authlib

1. 点击左侧边栏的 **设置** 齿轮图标。
2. 在全局设置中开启 **“禁用 Ely.by Authlib”**。
