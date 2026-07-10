# Microsoft 登录问题 (failed to exchange Xbox token)

本指南将解释为什么在 XMCL 中登录 Microsoft 账户时可能会遇到 **"failed to exchange Xbox token"**（无法交换 Xbox 令牌）错误，以及快速排查并解决此问题的最佳方案。

---

## 🔍 详解登录认证原理

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

## 🛠 三大主因排查与解决办法

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

### 2. 未创建 Xbox Live 玩家档案（Gamertag）

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">起因：Microsoft 账号尚未在 Xbox Live 平台激活</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">虽然建立了 Microsoft 账号，但此前从未接触过任何 Xbox 生态的服务。验证服务器无法为缺失玩家昵称（Gamertag）的账号发放游戏登录令牌。</p>
  </div>
</div>

#### 如何解决：
1. 访问官方网页 [Xbox.com](https://www.xbox.com/)。
2. 点击右上角 **登录**（Sign In）按钮。
3. 若页面弹出激活提示，请 **接受相关协议并给自己设立一个玩家代号（Gamertag）**。
4. 创建完成后，静待 1 至 2 分钟以让服务器数据同步，接着重新打开 XMCL 尝试登录。

---

### 3. 网络通信被防火墙或宽带运营商拦截阻断

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">起因：本地主机至 Mojang 或 Microsoft 服务器的通信不畅</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">由于地区运营商网络波动、防范严密的防火墙或本地受损的 DNS 配置，您的设备无法顺利连通微软及 Mojang 的验证网关（例如 `api.minecraftservices.com`）。</p>
  </div>
</div>

#### 如何解决：
* **配合网络加速/VPN 服务：** 在尝试登录账号前开启网游加速器或使用稳定的网络代理，以绕过运营商的网络通信阻断或路由延迟。
* **直接在 XMCL 中配置代理服务：**
  1. 点击 XMCL 侧边栏左下角的 **设置** 图标（齿轮）。
  2. 定位到 **网络设置** 模块。
  3. 配置并开启您的 HTTP、HTTPS 或 SOCKS5 代理接口。
* **重置 hosts 系统映射文件：**
  检查您电脑上的 hosts 文件（路径通常为 `C:\Windows\System32\drivers\etc\hosts`），确保其中不含有将 `mojang.com` 或 `minecraftservices.com` 重定向至错误 IP 的恶意硬编码条目。如有，请直接将其整行删除。

---

## 📋 快速简明排查对照表

| 错误具体表征 | 极大概率原因 | 首选解决方案 |
| :--- | :--- | :--- |
| 输入账号密码后直接提示报错 | 账户被封禁、冻结或输入有误 | 前往 Microsoft.com 官方网重设您的密码 |
| 报 **"failed to exchange Xbox token"** 错误 | 无正版授权 / 缺少 Xbox 个人档案 | 到 Xbox.com 建立 Gamertag，或购买正版授权 |
| 报 **"Failed to connect to server"** 错误 | 通信阻断 / 运营商解析异常 | 开启网络代理、游戏加速服务，或配置 XMCL 内部代理 |
