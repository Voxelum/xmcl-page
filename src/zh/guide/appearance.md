# 自定义外观与 CSS 样式指南

本指南将介绍如何自定义 XMCL 的用户界面，包括内置的色彩搭配、主题模式、背景效果（图片/视频/粒子）以及使用自定义 CSS 规则的高级样式定制。

---

## 1. 内置主题设置

您可以点击左侧边栏的 **设置**（齿轮图标），然后导航到 **外观** 选项卡来配置启动器的基础外观。

### 色彩搭配与主题
XMCL 允许您单独自定义以下色彩元素：
- **卡片颜色**：各个功能模块卡片及对话框的背景颜色。
- **顶栏颜色**：窗口标题栏及顶部拖拽区域的背景颜色。
- **侧边栏颜色**：左侧导航栏的背景颜色。
- **背景颜色**：主窗口的最底层背景颜色。
- **主要突出显示颜色**：活动图标、输入框聚焦外框、主操作按钮以及链接的颜色。
- **错误颜色**：警告、错误横幅和标志的颜色。

启动器包含了两种默认色彩方案：**浅色模式**（Light Mode）与 **深色模式**（Dark Mode）。

:::tip 独立设置
深色模式和浅色模式的颜色配置是独立保存的。在两种模式之间切换时，会自动加载您为该特定模式定制的色彩。
:::

---

### 背景效果与媒体
您可以通过三种不同的媒体选项来自定义启动器的主背景：

1. **图片**：将任何图片（PNG、JPG、WEBP）设置为背景。XMCL 会将图片数据复制并存储到其配置目录中，因此即使您删除了原始图片文件，背景也不会失效。
2. **视频**：使用本地 MP4/WEBM 视频文件作为动效背景。
   :::warning 路径依赖
   启动器仅保存背景视频的**绝对文件路径**。如果您移动、重命名或删除了该视频文件，背景设置将会失效并回退到默认颜色。
   :::
3. **粒子效果**：开启背景的动态粒子动效，如漂浮的星空、飘落的雪花或粒子网格。

---

## 2. 高级自定义 CSS 样式

XMCL 在 **外观** 设置选项卡的底部集成了一个自定义 CSS 编辑器。由于启动器界面是基于 **Vue 3** 和 **Vuetify 3** 构建的，因此您可以全局覆盖任何元素的样式。

为确保您的自定义样式能够正确覆盖 Vuetify 的默认样式，请编写具体的 CSS 选择器，并在与 Vuetify 默认规则冲突时使用 `!important`。

### 字体与抗锯齿优化
在根节点优化文本渲染并设定清晰的字体集：
```css
html, body, #app, .v-application {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  text-rendering: optimizeLegibility !important;
}
```

---

## 3. 覆盖 Vuetify 3 颜色变量（Tokens）

Vuetify 在根包装器上将核心颜色定义为原始 RGB 三元组（例如 `255, 255, 255`），以便计算不透明度。要在全局覆盖颜色变量，请在以下选择器中重新定义它们：

```css
.v-application,
.v-theme--dark,
.v-theme--light {
  --v-theme-background: 18, 18, 28;      /* 主窗口背景色 */
  --v-theme-surface: 25, 25, 35;          /* 卡片与对话框背景色 */
  --v-theme-on-surface: 255, 255, 255;    /* 正文文本颜色 */
  --v-theme-primary: 0, 122, 255;         /* 主要突出显示颜色 */
  --v-theme-on-primary: 255, 255, 255;    /* 突出显示按钮的文本颜色 */
  --v-theme-error: 255, 59, 48;           /* 错误横幅与徽章颜色 */
}
```

如果您想将默认页面的背景设为透明，从而完整展现您自定义的背景图片或视频：
```css
.v-main,
.v-main__wrap,
.v-container,
.v-layout,
.home-page,
.setting-page,
.multiplayer,
.absolute.z-0.h-full.w-full {
  background: transparent !important;
  background-color: transparent !important;
}
```

---

## 4. 核心组件 CSS 选择器参考

### 🖥️ 标题栏 / 窗口顶部栏
窗口标题栏使用 `.v-system-bar`，它包含窗口控制按钮和系统状态微标。
- **标题栏主容器**：`.v-system-bar`
- **控制按钮（最小化/最大化/关闭）**：`.system-btn` 或 `.v-system-bar .system-btn`
- **关闭按钮**：`.system-btn--close`
- **系统徽章（搜索、任务、帮助）**：`.system-bar-badge`
- **徽章内的热键文本**：`.palette-hotkey`

*示例：将窗口控制按钮重排至左侧，并使用 Flexbox 将其美化为 macOS 风格的红黄绿“三色红绿灯”：*
```css
.v-system-bar {
  flex-direction: row-reverse !important; /* 将按钮靠左排列 */
  justify-content: space-between !important;
}
.v-system-bar > span[role="group"] {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
}
/* 调整按钮顺序：关闭按钮（第3个子元素 -> 排序为1），最小化（1 -> 2），最大化（2 -> 3） */
.v-system-bar .system-btn.system-btn--close { order: 1 !important; background: #ff5f56 !important; }
.v-system-bar .system-btn:nth-child(1) { order: 2 !important; background: #ffbd2e !important; }
.v-system-bar .system-btn:nth-child(2) { order: 3 !important; background: #27c93f !important; }
```

### 🎛️ 导航侧边栏
左侧边栏包含您的角色档案、搜索快捷方式以及系统设置入口。
- **侧边栏主容器**：`.sidebar` 或 `[data-testid="app-sidebar"]`
- **元素列表容器**：`.sidebar-notch__container`
- **单个导航项按钮**：`.sidebar-notch-item`
- **处于激活状态的导航项**：`.sidebar-notch-item.router-link-active` 或 `.sidebar-notch-item--active`
- **返回按钮**：`.sidebar-back-btn` 或 `.system-bar-back-btn`

### 📦 卡片与对话框
- **卡片容器**：`.v-card`
- **卡片标题 / 对话框标题栏**：`.v-card-title`
- **卡片内容区域**：`.v-card-text`
- **底部操作按钮容器**：`.v-card-actions`
- **浮动弹出对话框**：`.v-dialog`
- **设置页面的分组卡片**：`.setting-page .v-card`

### 🔘 按钮
- **全局按钮类**：`.v-btn`
- **按钮样式变体**：`.v-btn--variant-flat`, `.v-btn--variant-elevated`, `.v-btn--variant-tonal`, `.v-btn--variant-outlined`
- **主要/动作按钮**：`.v-btn[color="primary"]`, `.v-btn.text-primary`, `[data-testid="login-submit"]`, `[data-testid="launch-button"]`
- **激活/选中状态**：`.v-btn.v-btn--active`, `.v-btn-toggle .v-btn--active`, `.v-btn[aria-pressed="true"]`
- **禁用按钮**：`.v-btn:disabled`, `.v-btn[disabled]`

### 📝 表单输入框与下拉菜单
- **输入框容器**：`.v-field`, `.v-text-field`, `textarea`
- **聚焦时边框高亮**：`.v-field--focused`, `.v-text-field:focus-within`
- **下拉列表框**：`.v-list`
- **下拉菜单单项**：`.v-list-item`
- **被选中的菜单单项**：`.v-list-item--active`

---

## 5. 高级 CSS 自定义技巧

### 💧 磨砂玻璃卡片 (Glassmorphism 效果)
创建一个带有顶部和左侧边缘 specular 高光线条的半透明磨砂玻璃卡片布局：

```css
.v-card {
  /* 渐变高光反射磨砂背景 */
  background: linear-gradient(135deg, 
                rgba(255, 255, 255, 0.16) 0%, 
                rgba(255, 255, 255, 0.07) 50%, 
                rgba(255, 255, 255, 0.0) 50.1%, 
                rgba(255, 255, 255, 0.03) 100%) !important;
  backdrop-filter: blur(25px) saturate(200%) contrast(90%) !important;
  -webkit-backdrop-filter: blur(25px) saturate(200%) contrast(90%) !important;
  
  /* 镜面边缘高光线条 */
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  border-top-color: rgba(255, 255, 255, 0.32) !important;
  border-left-color: rgba(255, 255, 255, 0.24) !important;
  
  /* 外阴影与内发光 */
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35), 
              inset 0 1px 1px rgba(255, 255, 255, 0.25) !important;
  border-radius: 16px !important;
}
```

### 🎨 自定义原生图标 (SVG 注入技术)
您无需修改 Vue 模版，直接通过 CSS 的 URL 编码 SVG 图标来替换启动器的原生图标：

```css
/* 1. 清理原生字形文字并定义容器尺寸 */
.sidebar-notch-item__icon,
.my-stuff-page .section-icon,
.badge-icon {
  font-size: 0 !important;
  width: 18px !important;
  height: 18px !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  display: inline-block !important;
}

/* 2. 将 SVG 代码注入为背景图片 */
/* 示例：为“设置”导航项按钮替换为自定义齿轮图标 */
[data-testid="nav-settings"] .sidebar-notch-item__icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3Cpath d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'/%3E%3C/svg%3E") !important;
}
```

### 💾 现代 macOS 风格滚动条
让页面滚动条契合现代 macOS 设计风格：
```css
::-webkit-scrollbar {
  width: 8px !important;
  height: 8px !important;
}
::-webkit-scrollbar-track {
  background: transparent !important;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.22) !important;
  border-radius: 10px !important;
  border: 2px solid transparent !important;
  background-clip: padding-box !important;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.35) !important;
}
```
