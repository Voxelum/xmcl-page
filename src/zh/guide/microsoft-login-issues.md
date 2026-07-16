# Microsoft 账号登录与演示模式指南

本指南将解释如何在 XMCL 中添加您的 Microsoft 账号，详细分析登录认证原理，以及快速解决 **"failed to exchange Xbox token"** 或卡在**演示模式（Demo Mode）**等常见登录故障。

---

## 🔑 1. 如何添加 Microsoft 账号

要使用您的官方正版账号登录并畅玩 Minecraft，请按照以下步骤操作：

1. 点击启动器右上角的个人头像/档案（或 **“管理账户”**），打开账户管理器：

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. 点击 **“添加账户”**，选择 **Microsoft**，然后按照屏幕指引完成登录：

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **通过设备代码登录（Device Code）：**  
> 如果您不想在启动器内直接输入账号密码，可以勾选 **“通过设备代码登录”**（Login by Device Code）。XMCL 会为您显示一个唯一的设备代码。只需使用您的网页浏览器访问 `microsoft.com/link`，输入该代码并确认，即可安全完成登录。

---

## 🔍 2. 详解登录认证原理

为了能顺利启动正版 Minecraft，启动器必须在三个不同的安全认证层级上依次验证您的身份：

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 身份验证握手机制：</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">步骤 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Microsoft 登录</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">核对账户密码</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">步骤 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Xbox Live 服务</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">获取玩家 Gamertag</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ 在此拦截</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">步骤 3 (兑换)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Minecraft 令牌</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">核对正版游戏授权</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    如果界面提示 <strong>"failed to exchange Xbox token"</strong>，说明步骤 1 和步骤 2 已成功完成，但在步骤 3 时，Mojang 官方验证服务器拒绝了兑换。
  </p>
</div>

---

## 🛠 3. 三大主因排查与解决办法

### 1. 当前 Microsoft 账号未拥有 Minecraft 游戏授权

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">起因：Mojang 校验服务器在其数据库中未查询到已购记录</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">这是最常见的情况。您的邮箱密码输入无误，但 Mojang 校验接口反馈称该 Microsoft 账号并不持有 Minecraft Java 版的正版许可证。</p>
  </div>
</div>

#### 如何解决：
* **检查游戏所有权：** 登录 [Minecraft.net 官网](https://www.minecraft.net/) 并查看个人资料页。确认您能直接看到下载游戏的按钮，而非提示您“立刻购买”。
* **确认 Game Pass 订阅状态：** 如果您是通过 **Xbox Game Pass (XGP)** 获取游戏，请确保您的 XGP 订阅依然有效，并且您登录的邮箱与订阅了 XGP 的 Microsoft 账号一致。
* **确认邮箱地址是否正确：** 部分玩家会无意中登录了工作、学校邮箱或备用 Microsoft 账号，请核对实际购买了正版游戏的账号邮箱。

---

### 2. 该 Microsoft 账号没有 Xbox Live 档案 (缺失 Gamertag)

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👾
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">起因：Microsoft 账号尚未注册游戏角色</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">您的 Microsoft 账号必须绑定一个有效的 Xbox Live 玩家档案以供拉取正版凭证。如果您是刚购买了游戏或从未运行过游戏，可能还未创建该档案，从而导致登录后卡在 <strong>“演示模式”</strong>。</p>
  </div>
</div>

#### 如何解决：
1. 访问 [Xbox Live 官网](https://www.xbox.com/)。
2. 使用您的 Microsoft 账号密码登录。
3. 按照指引免费注册一个 Xbox Live 账户（设定您的玩家代号 Gamertag 和头像）。
4. 注册成功后，重新启动 XMCL 启动器并重新登录账户。

---

### 3. 网络故障或连线被系统拦截

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(59, 130, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #3b82f6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">起因：DNS 污染或网络安全屏蔽</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">在特定地区或对于某些较为严格的网络运营商，连接到 Xbox Live 或 Mojang 验证服务器的通道可能会被防火墙阻断、污染，导致网络丢包或验证超时。</p>
  </div>
</div>

#### 如何解决：
* **使用 VPN/加速器：** 如果您所在的地区网络受到严格过滤，请打开网络加速器或 VPN，然后尝试完成 Microsoft 正版验证。
* **修改本地 DNS 服务：** 将您的系统 DNS 手动修改为快速、安全的公共 DNS（例如 Google DNS: `8.8.8.8` 和 `8.8.4.4`，或阿里 DNS: `223.5.5.5` / 腾讯 DNS: `119.29.29.29`）。
* **稍后重试：** Microsoft 校验服务器偶尔可能会出现波动。您可以稍等几分钟，网络通畅后再试。

---

## 🚪 4. 离线模式与第三方登录 (无需正版 Microsoft 账号)

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
