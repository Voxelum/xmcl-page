# 无正版游玩指南（离线模式与第三方皮肤站）

XMCL 是一款充分尊重玩家自由的开源启动器。如果您目前尚未购买正版 Minecraft Java 版，或者希望在离线无网环境下测试模组整合包，XMCL 完整支持**离线模式**和主流第三方皮肤站。

---

## ⚙️ 1. 开启开发者模式

若要使用离线账户及第三方皮肤站，需要先在设置中启用**开发者模式**：

1. 点击左侧底栏的**设置**（齿轮图标）。
2. 找到**“开发者模式”**选项并**开启**：

   ![开启开发者模式](/guidephoto/developer-mode.png)

开启后，在账户管理器添加账户时将显示更多账户类型选项。

---

## 👥 2. 支持的账户类型

<div style="display: flex; flex-direction: column; gap: 14px; margin: 24px 0;">

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟢</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">离线模式 (Offline Mode)</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      无需连接官方服务器即可离线游玩。只需输入任意喜欢的游戏昵称。非常适合单人离线游戏、本地模组测试、局域网联机以及设置为 <code>online-mode=false</code> 的社区服务器。
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟡</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">LittleSkin 皮肤站</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      国内广受欢迎的免费皮肤和认证服务。支持自定义皮肤和披风，支持使用 CustomSkinLoader 模组与其他玩家互相看见皮肤。  
      官网：<a href="https://littleskin.cn" target="_blank" rel="noopener noreferrer">https://littleskin.cn</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🔵</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Ely.by 皮肤站</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      国际通用的第三方认证与皮肤网络，提供云端皮肤库与高清披风支持。  
      官网：<a href="https://ely.by" target="_blank" rel="noopener noreferrer">https://ely.by</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🌐</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">自定义 Authlib-Injector / Yggdrasil 认证服</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      支持填入任意符合 Yggdrasil 规范的第三方外置登录 API 地址。
    </p>
  </div>

</div>

---

## 🎮 3. 如何添加与切换账户

1. 点击启动器右上角的用户图标打开**账户管理器**。
2. 点击**“添加账户”**。
3. 选择 **离线模式**、**LittleSkin**、**Ely.by** 或 **自定义认证服**。
4. 输入用户名或对应凭证完成添加。
5. 点击该账户将其切换为**当前活跃账户**。

---

## 💡 4. 账户类型对比

| 功能特性 | 微软正版账户 | 离线账户 | LittleSkin / Ely.by |
| :--- | :--- | :--- | :--- |
| **费用** | 付费购买正版 | 免费 | 免费 |
| **官方正版服 (Hypixel 等)** | ✅ 支持 | ❌ 不支持 | ❌ 不支持 |
| **社区服 / LAN 联机 / P2P** | ✅ 支持 | ✅ 支持 (`online-mode=false`) | ✅ 支持 |
| **单人模组整合包** | ✅ 支持 | ✅ 支持 | ✅ 支持 |
| **自定义皮肤与披风** | ✅ 官方皮肤 | ⚠️ 默认皮肤 | ✅ 对应皮肤站皮肤与披风 |

---

## ❓ 常见问题

### 可以使用离线账号进入 Hypixel 等正版服吗？
不可以。官方商业服强制开启正版在线验证（`online-mode=true`），必须使用购买了 Java 版的微软账户登录。

### 无正版如何与好友联机？
您可以使用 XMCL 内置的 **P2P 联机 / 局域网分享** 功能，或加入关闭正版验证的社区服务器。

👉 **[遇到微软正版登录故障？查看微软登录故障排查指南](./microsoft-login-issues)**
