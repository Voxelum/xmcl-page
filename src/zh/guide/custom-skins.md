# 自定义皮肤指南 (Ely.by / LittleSkin)

本指南将解释为什么在 XMCL 中，来自 Ely.by 或 LittleSkin 等第三方皮肤站的自定义皮肤默认可能无法显示，探讨 Minecraft Java 版皮肤渲染的工作原理，并介绍如何正确进行配置。

---

## Minecraft Java 版皮肤渲染工作原理

在默认情况下，Minecraft Java 版客户端会向 Mojang 官方会话服务器请求加载您的皮肤。其渲染流程如下：

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 250" width="100%" style="max-width: 600px; font-family: system-ui, -apple-system, sans-serif; margin: 20px auto; display: block;">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8"/>
    </marker>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
    <linearGradient id="grayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4b5563" />
      <stop offset="100%" stop-color="#1f2937" />
    </linearGradient>
  </defs>

  <!-- Node 1: Client -->
  <rect x="200" y="10" width="200" height="40" rx="8" fill="url(#blueGrad)" />
  <text x="300" y="34" fill="#ffffff" font-size="14" font-weight="600" text-anchor="middle">Minecraft 客户端</text>

  <!-- Arrow down to check -->
  <line x1="300" y1="50" x2="300" y2="80" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />

  <!-- Node 2: Check Decision -->
  <rect x="180" y="90" width="240" height="40" rx="8" fill="url(#grayGrad)" stroke="#4b5563" stroke-width="1" />
  <text x="300" y="114" fill="#f3f4f6" font-size="13" font-weight="500" text-anchor="middle">是否启用自定义 Yggdrasil？</text>

  <!-- Branch Left: No -->
  <path d="M 240 130 L 140 180" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />
  <text x="170" y="152" fill="#ef4444" font-size="12" font-weight="600" text-anchor="middle">否</text>

  <!-- Branch Right: Yes -->
  <path d="M 360 130 L 460 180" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />
  <text x="430" y="152" fill="#10b981" font-size="12" font-weight="600" text-anchor="middle">是</text>

  <!-- Node 3: Mojang (Left) -->
  <rect x="20" y="190" width="240" height="50" rx="8" fill="#1f2937" stroke="#374151" stroke-width="1.5" />
  <text x="140" y="210" fill="#f3f4f6" font-size="13" font-weight="600" text-anchor="middle">Mojang 官方会话服务器</text>
  <text x="140" y="228" fill="#9ca3af" font-size="11" text-anchor="middle">textures.minecraft.net</text>

  <!-- Node 4: Custom (Right) -->
  <rect x="340" y="190" width="240" height="50" rx="8" fill="#1f2937" stroke="#10b981" stroke-width="1.5" />
  <text x="460" y="210" fill="#f3f4f6" font-size="13" font-weight="600" text-anchor="middle">自定义皮肤站服务器</text>
  <text x="460" y="228" fill="#10b981" font-size="11" font-weight="500" text-anchor="middle">Ely.by / LittleSkin</text>
</svg>

---

## 为什么 XMCL 默认不显示这些皮肤

在其他启动器（如 **Legacy Launcher** 或 **ElyPrism**）中：
* **Legacy Launcher** 会自动修改游戏内部的 `authlib.jar` 包或强制静默运行自定义 Java Agent 代理，即使玩家使用普通的离线（本地）账号，启动器也会直接通过玩家 ID 强行到 Ely.by 匹配并拉取皮肤，这存在安全隐患。
* **ElyPrism** 是 Prism Launcher 的一个修改分支，出厂即专门针对 Ely.by 生态进行了硬编码配置。

**XMCL** 则是一款干净、开源的启动器。在未获得您授权前，它**绝对不会**修改您的任何游戏源文件，也绝对不会将您的流量强制重定向至任何第三方皮肤服务器。

---

## 如何在 XMCL 中配置并显示第三方皮肤

您可以通过以下两种方法之一在 XMCL 中设置并启用自定义皮肤。

### 方法 1：添加第三方联机/登录账号（推荐）

在启动器中不使用简单的离线/本地账号名登录，而是直接添加您在 Ely.by 或 LittleSkin 的官方账号。这样启动器在启动游戏时就会自动启用 **Authlib-Injector**：

1. 点击启动器侧边栏的 **账户**（Accounts）图标。
2. 点击 **添加账户**。
3. 选择 **Ely.by** 或 **Yggdrasil**（对于 LittleSkin，输入其 Yggdrasil API 地址：`https://littleskin.cn/api/yggdrasil`）。
4. 输入您的第三方账户凭据完成登录。
5. 在您的版本设置中，确保 **禁用 Authlib Injector**（Disable Authlib Injector）选项处于 **关闭** 状态。

#### 底层工作原理
当您点击启动时，XMCL 会自动在 Java 启动参数中追加 `authlib-injector` 代理并挂载对应的 API Root 地址：

```cmd
java -javaagent:authlib-injector.jar=https://authserver.ely.by/api/ -jar ...
```

---

### 方法 2：使用 CustomSkinLoader 模组

如果您希望继续使用本地（离线）角色名，但又想让游戏加载 Ely.by 或 LittleSkin 的皮肤，则必须在游戏实例中安装 **CustomSkinLoader** 模组。

1. 在您的游戏实例中安装模组加载器（Forge、Fabric 或 Quilt）。
2. 在 XMCL 的模组下载选项卡中搜索并下载 **CustomSkinLoader** 模组。
3. 运行一次游戏以生成默认配置。游戏目录下会生成配置文件 `minecraft/CustomSkinLoader/CustomSkinLoader.json`。
4. 打开该 JSON 配置文件，配置皮肤源列表：

```json
{
  "enable": true,
  "loadTypes": ["Mojang", "ElyBy", "LittleSkin"],
  "skinList": [
    { "type": "Mojang" },
    { "type": "Yggdrasil", "apiRoot": "https://authserver.ely.by/api/" },
    { "type": "Yggdrasil", "apiRoot": "https://littleskin.cn/api/yggdrasil/" }
  ]
}
```
5. CustomSkinLoader 会根据您当前的离线角色名从上述配置的皮肤站拉取相应皮肤，您和其他安装了对应模组/配置的联机玩家就可以互相看到皮肤了！
