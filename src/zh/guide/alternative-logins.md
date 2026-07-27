# 离线模式与第三方登录

本指南将说明如何在没有正版 Minecraft 账号的情况下，利用离线模式、开发者模式及第三方皮肤与登录服务游玩 XMCL。

---

## 离线模式与第三方登录 (无需正版 Microsoft 账号)

如果您不持有官方正版 Microsoft 账号，或是处于没有网络的环境下需要与本地局域网联机，XMCL 同样提供了极具弹性的第三方和离线登录方案。

### 方案 A：离线本地游玩 (开发者模式)

**开发者模式**（Developer Mode）允许您在本地自定义任何玩家名字，且无需密码直接脱机进入游戏。

1. 点击右上角打开账户管理器。
2. 点击 **“添加账户”**（Add Account）。
3. 选择其中的 **开发者**（Developer）模式：

   <img src="/guidephoto/developer-mode.png" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

4. 输入任意您想要的玩家名字并确认。
5. 现在即可运行游戏。**注意：** 离线账户只允许进入关闭了正版验证（即服务端 `online-mode=false`）的联机服务器，并且您的皮肤外观将是 Minecraft 默认的基础外观。

---

### 方案 B：自定义皮肤平台 (Yggdrasil 接口服务)

如果您希望在进入服务器后展示您在特定皮肤站配置的个性皮肤，XMCL 原生支持通过 Yggdrasil 协议登录第三方平台（如 **LittleSkin**、**Ely.by** 或自建皮肤站）。

1. 前往账户管理器，点击 **添加账户**。
2. 选择您要登录的平台（例如 **LittleSkin**，或者使用 **Yggdrasil** 并填写自建站的 API 接口 URL）。
3. 输入您在该第三方平台注册的邮箱及密码：

   <img src="/guidephoto/reg-account.png" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

4. 启动器将自动从对应服务站抓取您的头像、皮肤配置以及外置授权信息。
