# 什么是模组加载器，为什么我需要它？

Minecraft 模组加载器（Mod Loader）是玩家与开发者扩展和丰富游戏必不可少的工具。

无论您是想为游戏添加真实的光影效果以彻底改变世界外观，还是想实现像 TikTok 和 YouTube 热门视频中那样极具视觉震撼的超远视距渲染，模组加载器都是您通往创意世界的大门。

例如，如果您想安装类似 Sildur's Shaders 的光影模组以获得逼真的光影效果，或者添加 "Distant Horizons" 模组来极大地拓宽您的视距，您都需要像 Fabric 或 Forge 这样的模组加载器来加载和管理这些修改。

**不过，或许您根本不需要在选择模组加载器上纠结太久——您想玩的模组本身会替您做好决定...**

在此文档中，我们将为您详细探讨目前主流的模组加载器与客户端优化修改版。它们各具特色，能完美满足您对模组玩法和游戏性能的不同追求。

---

## Minecraft Forge

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppForgePicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">Minecraft Forge</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">历史最悠久、历经沙场的 Minecraft 模组加载器。非常适合大型整合包以及与游戏内核深度交互的复杂模组。</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(147, 34, 255, 0.15); color: #a855f7; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">成熟的生态系统</span>
      <span style="background: rgba(147, 34, 255, 0.15); color: #a855f7; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">深度 API 交互</span>
      <span style="background: rgba(147, 34, 255, 0.15); color: #a855f7; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">广泛的兼容性</span>
    </div>
  </div>
</div>

*   **优点：** 积淀多年的开发社区带来了极其详尽的文档、教程以及庞大的模组资源。
*   **缺点：** 适配最新游戏版本的速度可能较慢；由于功能极其庞杂，可能会增加游戏加载的时间和内存消耗。

---

## Fabric

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppFabricPicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">Fabric</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">专为现代 Minecraft 版本设计的轻量级、模块化模组加载器。在运行性能、FPS 帧率以及快速版本更新上表现优异。</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">性能优化导向</span>
      <span style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">版本适配迅速</span>
      <span style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">轻量低消耗</span>
    </div>
  </div>
</div>

*   **优点：** 极低的性能开销、更快的游戏启动速度，且能极其迅速地适配游戏的新版本（非常适合加载光影和各类优化模组）。
*   **缺点：** 经典老旧版本的模组积累不如 Forge 丰富；对 Minecraft 早期版本的支持比较有限。

---

## NeoForge

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppNeoForgePicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">NeoForge</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">Forge 的现代分支版本。它将原有加载器的健壮性和庞大特性与最前沿的性能优化算法完美结合。</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(59, 130, 246, 0.15); color: #3b82f6; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">现代化 API</span>
      <span style="background: rgba(59, 130, 246, 0.15); color: #3b82f6; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">混合化优势</span>
      <span style="background: rgba(59, 130, 246, 0.15); color: #3b82f6; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">积极演进中</span>
    </div>
  </div>
</div>

*   **优点：** 经过重构的现代化干净代码库、大幅度改善的模组开发体验，以及紧贴社区实际性能需求的更新策略。
*   **缺点：** 作为一个新兴的生态系统，最初可用的兼容模组总数可能会少于经典版的 Forge。

---

## Quilt

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <QuiltIcon style="width: 48px; height: 48px; display: block;" />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">Quilt</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">由社区驱动的 Fabric 分支项目。在保留轻量化设计的同时，提供了更强悍的 API 扩展工具，并完美兼容绝大多数 Fabric 模组。</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(236, 72, 153, 0.15); color: #ec4899; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">兼容 Fabric</span>
      <span style="background: rgba(236, 72, 153, 0.15); color: #ec4899; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">创新功能</span>
      <span style="background: rgba(236, 72, 153, 0.15); color: #ec4899; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">高灵活性</span>
    </div>
  </div>
</div>

*   **优点：** 开箱即用支持绝大部分 Fabric 模组；为模组创作者提供了更具创造力的高级工具。
*   **缺点：** 仍处于快速的社区开发演进中，在向独立生态转变的过渡期内可能伴随轻微的不稳定性。

---

## OptiFine

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppOptifinePicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">OptiFine</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">传奇级的 Minecraft 优化模组。提供巨大的 FPS 提升、对 HD 材质和光影的支持，以及丰富的图形细节设置。</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(30, 58, 138, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">FPS 提升</span>
      <span style="background: rgba(30, 58, 138, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">光影支持</span>
      <span style="background: rgba(30, 58, 138, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">细节调优</span>
    </div>
  </div>
</div>

*   **优点：** 在旧版本 Minecraft 上拥有无可比拟的兼容性，是不安装其他任何辅助模组即可启用光影的最简便方式。
*   **缺点：** 闭源，这常常会导致它与许多现代的 Forge/Fabric 模组产生严重的兼容性冲突。

---

## LabyMod

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppLabymodPicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">LabyMod</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">功能丰富的 Minecraft 客户端修改版。它完全重构了用户界面，添加了各种实用的桌面小部件、动画和内置化妆道具。</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(15, 23, 42, 0.15); color: #22d3ee; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">自定义 HUD</span>
      <span style="background: rgba(15, 23, 42, 0.15); color: #22d3ee; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">客户端修改</span>
      <span style="background: rgba(15, 23, 42, 0.15); color: #22d3ee; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">个性化妆容</span>
    </div>
  </div>
</div>

*   **优点：** 模块化设计，内置了极其丰富的 PvP 工具、流畅的游戏内整合和高自由度的界面定制。
*   **缺点：** 主要面向多人游戏和 PvP；可能与部分大型全局地图/世界生成模组产生兼容性冲突。

---

## 对比

| 特性                   | Minecraft Forge                      | Fabric                         | NeoForge                                  | Quilt                             | OptiFine                            | LabyMod                            |
|------------------------|--------------------------------------|--------------------------------|-------------------------------------------|-----------------------------------|-------------------------------------|------------------------------------|
| **代码基础**           | 成熟且稳定                           | 轻量、模块化                    | 混合式：现代化Forge方法                    | 基于Fabric的轻量分叉              | 闭源且专有                          | 模块化客户端修改                   |
| **性能**               | 可能存在加载时间较长的问题             | 加载迅速，专注速度优化            | 力求在稳定性与速度之间取得平衡               | 优化加载速度，并附加额外功能          | 旧版本有显著 FPS 提升               | 极其平滑，优化 HUD 渲染            |
| **社区与支持**         | 庞大且长期活跃的社区                  | 快速扩展中的社区                  | 新兴社区，正在逐步扩大                       | 借助Fabric社区积累资源              | 传统优化模组，知晓度极高            | 专属的多人游戏社区                 |
| **模组兼容性**         | 广泛且成熟                           | 适合最新版本的模组                | 兼顾传统与现代模组支持                        | 兼容Fabric模组，并逐步独立           | 冲突较多（闭源）                    | 模块化基础，主打 PvP 配件          |
| **更新周期**           | 更新至新版本较慢                       | 快速响应最新版本               | 根据反馈逐步成熟                           | 模块化设计带来灵活更新              | 更新较慢，闭源发布                  | 紧跟 PvP 主流版本更新              |

---

## XMCL 中的模组加载器与模组管理

X Minecraft Launcher (XMCL) 提供了原生且深度集成的模组加载器安装与模组管理系统。您完全不需要手动去网上下载第三方的 `.jar` 或 `.exe` 安装包，更不需要阅读复杂的安装手册。

### 1. 模组加载器一键安装
在创建新的实例版本或者修改现有实例的配置时：
1. 展开实例的版本选择面板。
2. 选择您想要的游戏版本。
3. 勾选需要搭配的模组加载器（**Forge**, **Fabric**, **NeoForge**, **Quilt**）或优化修改版（**OptiFine**, **LabyMod**）。
4. 在您启动游戏时，XMCL 会自动检测、下载并为您配齐所有必须的运行库与底层依赖项。

### 2. 游戏内快捷搜索与下载
在实例的 **模组** 选项卡下，您可以直接搜索并极速下载来自 **Modrinth** 与 **CurseForge** 的庞大模组：
* **自动精确过滤：** XMCL 会依据您当前的实例版本和模组加载器，自动为您过滤掉不兼容的搜索结果，您只能看到完全适用的模组。
* **依赖项自动解析：** 如果某款模组依赖额外的底层库支持（如 *Fabric API* 或 *Architectury*），XMCL 会主动发现并引导您一键连同所有依赖项共同下载。

### 3. 便捷启用与卸载
* **模组一键开关：** 在模组列表中，您只需通过简单的拨动开关即可在游戏里启用或临时停用特定模组，免去了手动挪移模组文件夹内文件的烦恼。
* **一键同步更新：** 启动器会时刻自动检索当前所有已装模组的可升级版本，并醒目提示，帮助您一键升级至最新最稳版本。
