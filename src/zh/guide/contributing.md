### 技术栈与项目背景

在这里，我们概述了这个项目使用的工具链与运行时。

对于整个项目，我们有：

- [Node.js >=20](https://nodejs.org/). 核心库基础环境。
- [Electron 29](https://electron.atom.io). 启动器实际的运行时。
- [pnpm](https://pnpm.io/). 用于 monorepo 包管理。
- [TypeScript](https://www.typescriptlang.org/). 整个项目将尽可能使用 TypeScript 代码。

对于主进程（Electron），我们使用：

- [esbuild](https://esbuild.github.io/). 使用 esbuild 来构建主进程的 TypeScript 代码。

对于渲染侧，这是纯前端的技术栈：

- [Vue](https://vuejs.org). 用于构建用户界面。
- [Vite](https://vitejs.dev/). 用作我们的构建工具。
- [Vuetify](https://vuetifyjs.com/). 用作我们的组件库。
- [Vue Composition API](https://github.com/vuejs/composition-api). Vue 2 的组合式 API 的桥梁。一旦 Vuetify 升级到 Vue 3，这将被删除。

### 项目结构与设计

![diagram](../../assets/diagram.svg)

可以查看 [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Voxelum/x-minecraft-launcher) 了解详细设计。它应该覆盖 90% 的情况！

## 贡献

我们强烈建议您使用 VSCode 打开项目。

### 开始

#### 克隆

用 git 克隆项目，需要使用 `--recurse-submodules` 选项：

```bash
git clone --recurse-submodules https://github.com/Voxelum/x-minecraft-launcher
```

如果您忘记添加 `--recurse-submodules` 标志，则需要手动初始化和更新 git 子模块：

```bash
git submodule init
git submodule update
```

#### 安装依赖

使用 [pnpm](https://pnpm.io) 安装项目：

```
pnpm install
```

<details>
  <summary> 解决中国国内安装依赖（如 Electron）太慢的办法 </summary>

  打开您的 git bash，在 `pnpm i` 前面加上 `registry=https://registry.npm.taobao.org electron_mirror="https://npm.taobao.org/mirrors/electron/"`。使用国内阿里提供的 npm 以及 Electron 的镜像。

  最终输入的 command 也就是

  ```bash
  registry=https://registry.npm.taobao.org electron_mirror="https://npm.taobao.org/mirrors/electron/" pnpm i
  ```
</details>

#### 设置环境变量
在`xmcl-electron-app`下创建`.env`文件来设置`CURSEFORGE_API_KEY`。`.env`文件已被添加到`.gitignore`文件中。

:::warning 注意
**请注意保护好你的 CURSEFORGE API KEY**
:::

#### 运行启动器

现在你可以运行开发版启动器了

#### 对于使用 VSCode 编辑器的开发者

进入 `Run and Debug` 菜单，使用配置文件 Electron: Main (launch) 来启动 Electron。（热键 F5）

#### 对于不使用 VSCode 编辑器的开发者

打开任一终端，执行命令：

```bash
# 开启一个 UI 的 dev server
npm run dev:renderer
```

打开另一终端，执行命令：

``` bash
# 开始监听主进程
npm run dev:main
```

#### 代码"热"更新

当你改了代码后，如何把把更新应用到正在跑的启动器中呢？

##### 对于浏览器进程

Vite 提供热重载，它会自动更新。如果出现问题，您可以通过 `Ctrl+R` 刷新浏览器。

##### 对于主进程

如果您使用 VSCode 启动启动器，则在更改代码后，您可以点击 VSCode 调试器上的 `reload` 按钮。

如果您不使用 VSCode 启动，则应该关闭 Electron 并重新启动。

### 在启动器核心中发现问题

启动器核心位于用 TypeScript 编写的[单独项目](https://github.com/voxelum/minecraft-launcher-core-node)中。

如果您发现任何与之相关的问题，请在此开启一个 Issue。

### VSCode 调试器

该项目包含了针对 VSCode 调试器的配置。您可以在线添加断点并进行调试。目前，VSCode 调试器方法仅支持在主进程上进行调试。

（无论如何，您都可以使用 Chrome DevTools 进行渲染进程）

我们现在有两个选择：

1. Electron: 主进程（启动）
2. Electron: 主进程 （附加方式）

如果您使用第一种方式启动，它会自动将调试器附加到实例。


### 提交你的代码

该项目遵循 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/)。简而言之，提交信息的第一行应该是：

```
commit type: commit description
```

有几种可用的提交类型：`feat`, `fix`, `refactor`, `style`, `docs`, `chore`, `test`.

参考自 [这个gist](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716):

> feat: (new feature for the user, not a new feature for build script)
>
> fix: (bug fix for the user, not a fix to a build script)
>
> docs: (changes to the documentation)
>
> style: (formatting, missing semi colons, etc; no production code change)
>
> refactor: (refactoring production code, eg. renaming a variable)
>
> test: (adding missing tests, refactoring tests; no production code change)
>
> chore: (updating grunt tasks etc; no production code change)

**如果您不遵守这些规则，您的提交将被拒绝。**

### 如何构建启动器

现在的启动器使用 2 个命令来构建

首先你需要先编译前端的代码：

```bash
pnpm build:renderer
```

除非你在 `xmcl-keystone-ui` 有新的改动，你已经不需再重新跑这个命令了。

然后你需要构建 Electron，将你刚刚构建的前端代码和 Electron 打包到一起：

```bash
pnpm build
```
