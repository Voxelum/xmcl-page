
### Tech Stack & Some Background

Here we have a overview of the toolchain & runtime of this project

For the whole project, we have

- [Node.js >=20](https://nodejs.org/). The core libraries base environment.
- [Electron 29](https://electron.atom.io). The actual runtime of the launcher.
- [pnpm](https://pnpm.io/). Used for monorepo package management.
- [TypeScript](https://www.typescriptlang.org/). The whole project uses as much TypeScript as possible.

For main process (Electron), we have

- [esbuild](https://esbuild.github.io/). We use esbuild to build our main process TypeScript.

For renderer side, which is the pure front-end

- [Vue](https://vuejs.org). Used to build user interfaces.
- [Vite](https://vitejs.dev/). Used as our build system.
- [Vuetify](https://vuetifyjs.com/). Used as a component library.
- [Vue Composition API](https://github.com/vuejs/composition-api). The bridge for compositional API for Vue 2. Once the Vuetify upgrade to the Vue 3, the Vue will be upgraded and this will be removed.

### Project structure and design

![diagram](../../assets/diagram.svg)

See [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Voxelum/x-minecraft-launcher) for detail design. It should cover 90% cases!

## Contribute

Highly recommend to use the VSCode to open the project.

### Getting Started

#### Clone

Clone the project with submodule flag `--recurse-submodules`.

```bash
git clone --recurse-submodules https://github.com/Voxelum/x-minecraft-launcher
```

If you forget to add `--recurse-submodules` flag, you need to initialize & update the git submodule manually.

```bash
git submodule init
git submodule update
```

#### Install

Install the project using [pnpm](https://pnpm.io):

```
pnpm install
```

<details>
  <summary> 解决中国国内安装依赖（如 Electron）太慢的办法 </summary>

  打开你的 git bash，在 `pnpm i` 前面加上 `registry=https://registry.npm.taobao.org electron_mirror="https://npm.taobao.org/mirrors/electron/"`。使用国内阿里提供的 npm 以及 Electron 的镜像。

  最终输入的 command 也就是

  ```bash
  registry=https://registry.npm.taobao.org electron_mirror="https://npm.taobao.org/mirrors/electron/" pnpm i
  ```
</details>

#### Set Environment Variables

You should set the `CURSEFORGE_API_KEY` by creating a `.env` file under `xmcl-electron-app`. This `.env` file is added in `.gitignore` file.

:::warning REMEMBER
**DO NOT LEAK YOUR CURSEFORGE API KEY**
:::

#### Start Launcher

Then you can run the launcher

#### For VSCode

Go `Run and Debug` section, use the profile `Electron: Main (launch)` to start the electron. (Hot key F5)

#### For non VSCode

Open one terminal

```bash
# Start a dev server for UI
npm run dev:renderer
```

Open another terminal

``` bash
# Start watching main process code
npm run dev:main
```

#### Code "Hot" Change

You have code change, and you want to update the change to the running launcher instance.

##### For Browser process

The Vite provide hot reload, it should update automatically. If something went wrong, you can refresh the browser by `Ctrl+R`.

##### For Main process

If you use VSCode to launch the launcher, after you changed the code, you can press the reload button on VSCode debugger.

If you don't use VSCode to launch, it should close Electron and reload automatically.

### Found something wrong in launcher core

The launcher core is in [separated project](https://github.com/voxelum/minecraft-launcher-core-node) written in TypeScript.

Please open issue there if you identify any issue related to it.

### VSCode debugger

The project includes VSCode debugger configs. You can add breakpoint on line and debug. Currently, VSCode debugger method only supports debug on main process.

(You can use Chrome Devtools for renderer process anyway)

We have two options now:

1. Electron: Main (launch)
2. Electron: Main (attach)

If you use the first one to launch, it will automatically attach the debugger to the instance.


### Commit your code

This project follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/). In short, the first line of your commit message should be:

```
commit type: commit description
```

There are several avaiable commit type: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`, `test`.

Refer from [this gist](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716):

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

**Your commit will be rejected if you do not follow these rules.**

### How To Build

The current launcher require to run 2 commands to build

First, you need to build the frontend code:

```bash
pnpm build:renderer
```

Unless the code under `xmcl-keystone-ui` changed, you don't need to build this again.

Then, you can build Electron bundling with frontend you just build:

```bash
pnpm build
```
