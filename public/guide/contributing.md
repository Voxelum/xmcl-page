---
title: "Contributing Guide"
excerpt: "Learn how to contribute to XMCL development"
author: "XMCL Team"
date: "2025-01-15"
tags: ["contributing", "development", "advanced"]
slug: "contributing"
readTime: "15 min"
difficulty: "advanced"
---

# CONTRIBUTING

## TECH STACK & SOME BACKGROUND

Here we have an overview of the toolchain & runtime of this project.

For the whole project, we have:
- **Node.js >=20**. The core libraries base environment.
- **Electron 29**. The actual runtime of the launcher.
- **pnpm**. Used for monorepo package management.
- **TypeScript**. The whole project uses as much TypeScript as possible.

For main process (Electron), we have:
- **esbuild**. We use esbuild to build our main process TypeScript.

For renderer side, which is the pure front-end:
- **Vue**. Used to build user interfaces.
- **Vite**. Used as our build system.
- **Vuetify**. Used as a component library.
- **Vue Composition API**. The bridge for compositional API for Vue 2. Once the Vuetify upgrade to the Vue 3, the Vue will be upgraded and this will be removed.

## PROJECT STRUCTURE AND DESIGN

See for detail design. It should cover 90% cases!

## CONTRIBUTE

Highly recommend to use the VSCode to open the project.

## GETTING STARTED

### CLONE

Clone the project with submodule flag `--recurse-submodules`.

```bash
git clone --recurse-submodules https://github.com/Voxelum/x-minecraft-launcher
```

If you forget to add `--recurse-submodules` flag, you need to initialize & update the git submodule manually.

```bash
git submodule init
git submodule update
```

### INSTALL

Install the project using pnpm:

```bash
pnpm install
```

**For users in China:**

To solve the slow installation of dependencies (such as Electron) in China, open your git bash and add the following before `pnpm i`:

```bash
registry=https://registry.npm.taobao.org electron_mirror="https://npm.taobao.org/mirrors/electron/" pnpm i
```

This uses the domestic Alibaba npm and Electron mirrors.

### SET ENVIRONMENT VARIABLES

You should set the `CURSEFORGE_API_KEY` by creating a `.env` file under `xmcl-electron-app`. This `.env` file is added in `.gitignore` file.

:::warning
REMEMBER: DO NOT LEAK YOUR CURSEFORGE API KEY
:::

### START LAUNCHER

Then you can run the launcher.

#### FOR VSCODE

Go Run and Debug section, use the profile `Electron: Main (launch)` to start the electron. (Hot key F5)

#### FOR NON VSCODE

Open one terminal:

```bash
# Start a dev server for UI
npm run dev:renderer
```

Open another terminal:

```bash
# Start watching main process code
npm run dev:main
```

### CODE "HOT" CHANGE

You have code change, and you want to update the change to the running launcher instance.

#### FOR BROWSER PROCESS

The Vite provides hot reload, it should update automatically. If something went wrong, you can refresh the browser by Ctrl+R.

#### FOR MAIN PROCESS

If you use VSCode to launch the launcher, after you changed the code, you can press the reload button on VSCode debugger.

If you don't use VSCode to launch, it should close Electron and reload automatically.

## FOUND SOMETHING WRONG IN LAUNCHER CORE

The launcher core is in separated project written in TypeScript.

Please open issue there if you identify any issue related to it.

## VSCODE DEBUGGER

The project includes VSCode debugger configs. You can add breakpoint on line and debug. Currently, VSCode debugger method only supports debug on main process.

(You can use Chrome Devtools for renderer process anyway)

We have two options now:
1. **Electron: Main (launch)**
2. **Electron: Main (attach)**

If you use the first one to launch, it will automatically attach the debugger to the instance.

## COMMIT YOUR CODE

This project follows the conventional commits. In short, the first line of your commit message should be:

`commit type: commit description`

There are several available commit types: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`, `test`.

Refer from this gist:

> - **feat**: (new feature for the user, not a new feature for build script)
> - **fix**: (bug fix for the user, not a fix to a build script)
> - **docs**: (changes to the documentation)
> - **style**: (formatting, missing semi colons, etc; no production code change)
> - **refactor**: (refactoring production code, eg. renaming a variable)
> - **test**: (adding missing tests, refactoring tests; no production code change)
> - **chore**: (updating grunt tasks etc; no production code change)

Your commit will be rejected if you do not follow these rules.

## HOW TO BUILD

The current launcher requires running 2 commands to build.

First, you need to build the frontend code:

```bash
pnpm build:renderer
```

Unless the code under `xmcl-keystone-ui` changed, you don't need to build this again.

Then, you can build Electron bundling with frontend you just built:

```bash
pnpm build
```
