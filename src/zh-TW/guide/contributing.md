# 貢獻指南
### 技術棧與項目背景

在這裡，我們概述了這個項目使用的工具鏈與運行時。

對於整個項目，我們有：

- [Node.js >=20](https://nodejs.org/). 核心庫基礎環境。
- [Electron 29](https://electron.atom.io). 啟動器實際的運行時。
- [pnpm](https://pnpm.io/). 用於 monorepo 包管理。
- [TypeScript](https://www.typescriptlang.org/). 整個項目將盡可能使用 TypeScript 代碼。

對於主進程（Electron），我們使用：

- [esbuild](https://esbuild.github.io/). 使用 esbuild 來構建主進程的 TypeScript 代碼。

對於渲染側，這是純前端的技術棧：

- [Vue](https://vuejs.org). 用於構建用戶界面。
- [Vite](https://vitejs.dev/). 用作我們的構建工具。
- [Vuetify](https://vuetifyjs.com/). 用作我們的組件庫。
- [Vue Composition API](https://github.com/vuejs/composition-api). Vue 2 的組合式 API 的橋樑。一旦 Vuetify 升級到 Vue 3，這將被刪除。

### 項目結構與設計

![diagram](../../assets/diagram.svg)

可以查看 [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Voxelum/x-minecraft-launcher) 了解詳細設計。它應該覆蓋 90% 的情況！

## 貢獻

我們強烈建議您使用 VSCode 打開項目。

### 開始

#### 克隆

用 git 克隆項目，需要使用 `--recurse-submodules` 選項：

```bash
git clone --recurse-submodules https://github.com/Voxelum/x-minecraft-launcher
```

如果您忘記添加 `--recurse-submodules` 標誌，則需要手動初始化和更新 git 子模塊：

```bash
git submodule init
git submodule update
```

#### 安裝依賴

使用 [pnpm](https://pnpm.io) 安裝項目：

```
pnpm install
```

<details>
  <summary> 解決中國內地安裝依賴（如 Electron）太慢的辦法 </summary>

  打開您的 git bash，在 `pnpm i` 前面加上 `registry=https://registry.npm.taobao.org electron_mirror="https://npm.taobao.org/mirrors/electron/"`。使用內地阿里提供的 npm 以及 Electron 的鏡像。

  最終輸入的 command 也就是

  ```bash
  registry=https://registry.npm.taobao.org electron_mirror="https://npm.taobao.org/mirrors/electron/" pnpm i
  ```
</details>

#### 設置環境變數
在`xmcl-electron-app`下創建`.env`文件來設置`CURSEFORGE_API_KEY`。`.env`文件已被添加到`.gitignore`文件中。

:::warning 注意
**請注意保護好你的 CURSEFORGE API KEY**
:::

#### 運行啟動器

現在你可以運行開發版啟動器了

#### 對於使用 VSCode 編輯器的開發者

進入 `Run and Debug` 菜單，使用配置文件 Electron: Main (launch) 來啟動 Electron。（熱鍵 F5）

#### 對於不使用 VSCode 編輯器的開發者

打開任一終端，執行命令：

```bash
# 開啟一個 UI 的 dev server
npm run dev:renderer
```

打開另一終端，執行命令：

``` bash
# 開始監聽主進程
npm run dev:main
```
