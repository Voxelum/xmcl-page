# 微软登录、基岩版与 Java 版区别及正版授权问题排查

本指南将详细解释 XMCL 中微软账户的登录流程、为什么会出现 **“failed to exchange Xbox token”**（或提示未购买）、为什么游戏会进入**演示模式（Demo Mode）**、**基岩版（手机/主机）与 Java 版（PC）**的关键区别，以及常见登录问题的解决方法。

---

## 🔑 1. 使用微软账户登录

若要使用官方 Minecraft 正版授权登录，请按照以下步骤操作：

1. 点击右上角的用户头像（或**“管理账户”**）打开账户管理面板：

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. 点击**“添加账户”**，选择 **Microsoft**，并按提示完成登录：

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **设备代码登录（Device Code）：**  
> 如果您不想在启动器内置窗口中输入密码，可以勾选**“设备代码登录”**。XMCL 会生成一个 8 位代码；只需在浏览器中打开 [microsoft.com/link](https://microsoft.com/link)，输入代码即可完成授权。

---

## 🔍 2. 微软三步验证流程

登录时，启动器需要通过三个独立的验证阶段：

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 三步握手流程：</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">第 1 步</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">微软 OAuth 验证</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">校验账号密码</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">第 2 步</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Xbox Live 服务</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">获取 Xbox 玩家档案</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ 常见失败点</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">第 3 步 (Token 交换)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Mojang Java 版授权</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">校验 PC Java 正版</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    若第 3 步失败，登录将报错 <strong>"failed to exchange Xbox token"</strong>（或提示未购买），或者游戏启动后进入<strong>演示模式（Demo Mode）</strong>。这表示 Mojang 验证服务器未在此微软账号中找到有效的 <strong>Minecraft: Java 版</strong> 授权。
  </p>
</div>

---

## 🛑 3. 核心误区：基岩版 vs. Java 版区别（最常见原因）

**XMCL 是 Minecraft: Java 版（PC / Windows / macOS / Linux）启动器。**

许多玩家在手机或主机上购买了游戏，尝试在 XMCL 中登录时会失败：

| 购买渠道与平台 | 拥有的版本 | XMCL 是否支持？ | 失败原因说明 |
| :--- | :--- | :--- | :--- |
| 📱 **手机版（iOS / Android / Google Play）** | 基岩版 (Bedrock) | ❌ 否 | 手机版授权不包含 PC 上的 Java 版。 |
| 🎮 **PlayStation 4 / 5 主机版** | 基岩版 (Bedrock) | ❌ 否 | PSN 商店购买仅限主机使用。 |
| 🎮 **Xbox One / Series X\|S 主机版** | 基岩版 (Bedrock) | ❌ 否 | 主机版购买无法转移到 PC Java 版。 |
| 🕹️ **Nintendo Switch 掌机版** | 基岩版 (Bedrock) | ❌ 否 | 任天堂 eShop 购买仅限 Switch 使用。 |
| 💻 **PC（Minecraft: Java 与基岩版捆绑包）** | Java 版 + 基岩版 | ✅ **是** | 官方完全支持！ |
| 🟢 **PC Game Pass / Ultimate 订阅** | Java 版 + 基岩版 | ✅ **是** | 订阅期内完全支持。 |

> ⚠️ **重要提示：**  
> 如果您之前仅在**手机**、**iPad**、**PS5/PS4**、**Xbox 主机**或 **Switch** 上购买过 Minecraft，Mojang 官方验证系统将确认该微软账号**没有 Java 版所有权**。  
> 若想在 PC 上体验 Java 版，您需要在 [Minecraft.net](https://www.minecraft.net/) 购买 **“Minecraft: Java & Bedrock Edition for PC”** 捆绑包，或开通 **PC Game Pass**。

---

## 🛠 4. 常见登录故障排查

### 原因 A：微软账号下没有 Java 版授权

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Mojang 未查询到已购记录</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">微软账号已成功验证，但 Mojang 数据库显示该账号未持有 PC Java 版许可证。</p>
  </div>
</div>

#### 解决方法：
* **前往官网核对：** 访问 [Minecraft.net](https://www.minecraft.net/) 并登录该微软账号，查看个人档案是否显示 Java 版游戏名，还是显示“立即购买”。
* **核对订单记录：** 打开 [account.microsoft.com/billing/orders](https://account.microsoft.com/billing/orders) 查看历史订单，确认购买的是 PC 捆绑包还是移动/主机版本。
* **确认邮箱地址：** 避免误登学校、工作单位或未购游戏的备用微软邮箱。
* **Game Pass 会员状态：** 若通过订阅游玩，请确认 PC Game Pass 是否在有效期内。

---

### 原因 B：未开通或未初始化 Xbox Live 玩家代号

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">账号缺少 Xbox Gamertag</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">新创建的微软账号或从未使用过 Xbox 服务的账号可能尚未创建玩家档案，导致无法下发令牌。</p>
  </div>
</div>

#### 解决方法：
1. 访问 [Xbox.com](https://www.xbox.com/) 官网。
2. 点击右上角**登录**。
3. 按照页面提示同意条款并设置一个 **玩家代号（Gamertag）**。
4. 等待 1~2 分钟同步后，回到 XMCL 重新登录。

---

### 原因 C：网络受限与 DNS 污染

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">无法连接至 Mojang 或 Xbox 认证服务器</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">由于本地网络、运营商路由限制或防火墙阻止，电脑无法正常与 <code>api.minecraftservices.com</code> 建立通信。</p>
  </div>
</div>

#### 解决方法：
* **使用网络加速工具或 VPN：** 在登录前开启加速或稳定代理。
* **在 XMCL 中配置网络代理：**
  1. 点击左下角**设置**（齿轮图标）。
  2. 进入**网络设置**。
  3. 填入您的代理服务器地址（支持 HTTP/HTTPS/SOCKS5）。
* **检查 hosts 文件：** 确保系统 hosts 文件中没有恶意或失效的 `mojang.com` 重定向规则。

---

## 🎮 没有购买正版？

如果您目前尚未购买正版，您依然可以通过**离线模式**或第三方皮肤站畅玩游戏和自建模组服。

👉 **[查看完整教程：无正版游玩指南（离线模式与第三方皮肤站）](./offline-mode)**
