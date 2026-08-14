# Contributing to XMCL

Thank you for your interest in contributing to XMCL! This guide provides an overview of the technical stack, monorepo architecture, development environment setup, editor configurations (**VS Code**, **Zed Editor**, **Neovim / Vim**, **Helix**, **JetBrains**), debugging workflows, testing procedures, and submission standards.

---

## 1. Tech Stack & Infrastructure

XMCL is built as a modular monorepo powered by modern web and desktop technologies:

### Global Core & Monorepo
- **[Node.js](https://nodejs.org/) (>= 20)**: Main runtime environment.
- **[pnpm](https://pnpm.io/)**: Monorepo package manager using `pnpm` workspaces.
- **[TypeScript](https://www.typescriptlang.org/) (v5.9+)**: Strict static typing across all modules.

### Main Process (Electron Backend)
- **[Electron 43](https://electronjs.org/)**: Desktop application container.
- **[esbuild](https://esbuild.github.io/)**: High-performance bundler for main process TypeScript code.
- **Native Modules**: `node-datachannel` (WebRTC P2P multiplayer), `@xmcl/windows-utils`.

### Renderer Process (Frontend UI)
- **[Vue 3](https://vuejs.org/)**: Progressive framework for user interfaces (Composition API `<script setup>`).
- **[Vite](https://vitejs.dev/)**: Lightning-fast frontend build tool and HMR dev server.
- **[Vuetify 3](https://vuetifyjs.com/)**: Material Design component library.

### Testing & Code Quality
- **[Vitest](https://vitest.dev/)**: Unit testing framework.
- **[Oxlint](https://oxc.rs/)**: High-performance JavaScript/TypeScript linter.

---

## 2. Monorepo Directory Structure

```sh
x-minecraft-launcher
 ├─ 📂 packages/               # Core independent TypeScript packages
 │   ├─ 📂 core/               # Game launching, version parsing, Java resolution
 │   ├─ 📂 installer/          # Downloads, Minecraft/Forge/Fabric/NeoForge installers
 │   ├─ 📂 curseforge/         # CurseForge API integration
 │   ├─ 📂 modrinth/           # Modrinth API integration
 │   ├─ 📂 user/               # Yggdrasil & Authlib-injector authentication
 │   └─ 📂 wrtc-multiplayer/   # WebRTC DataChannel P2P multiplayer networking
 ├─ 📂 xmcl-runtime/           # Backend services & IPC controllers (JavaService, InstanceService, etc.)
 ├─ 📂 xmcl-runtime-api/       # Shared TypeScript interfaces & IPC event contracts
 ├─ 📂 xmcl-keystone-ui/       # Vue 3 / Vite frontend user interface
 └─ 📂 xmcl-electron-app/      # Electron main process entry point & native app packaging
```

---

## 3. Getting Started & Local Setup

### Step 1: Clone the Repository
Clone with submodules using the `--recurse-submodules` flag:
```sh
git clone --recurse-submodules https://github.com/Voxelum/x-minecraft-launcher.git
cd x-minecraft-launcher
```

### Step 2: Install Dependencies
Install all workspace dependencies using `pnpm`:
```sh
pnpm install
```

### Step 3: Configure Environment Variables
Create a `.env` file inside `xmcl-electron-app/.env` to configure CurseForge API access:
```ini
CURSEFORGE_API_KEY=your_curseforge_api_key_here
```

:::warning Security Notice
Never commit your `.env` file or leak your `CURSEFORGE_API_KEY` in public commits or Pull Requests.
:::

---

## 4. Code Editors Setup & Development Workflows

XMCL supports a wide variety of modern code editors. Choose your editor below for setup instructions, LSP configuration, and development task execution:

::: code-group
```markdown [VS Code]
### Visual Studio Code Setup

VS Code provides out-of-the-box integration with integrated launch debuggers.

1. **Recommended Extensions**:
   - Vue Language Features (Volar) (`Vue.volar`)
   - TypeScript Vue Plugin (`Vue.vscode-typescript-vue-plugin`)
   - i18n Ally (`lokalise.i18n-ally`)
2. **Launching Dev Mode**:
   - Press `F5` or go to **Run and Debug** -> select `Electron: Main (launch)`.
   - VS Code will automatically launch Vite dev server and attach the node debugger to the main process with full breakpoint support.
```

```json [Zed Editor]
// Zed Editor Setup (.zed/tasks.json)
// Zed is a high-performance GPU-accelerated editor built in Rust.

// 1. Install Extensions:
// Open Zed Extensions (Cmd+Shift+X / Ctrl+Shift+X) and install "Vue" and "YAML".

// 2. Add Project Tasks (.zed/tasks.json):
// Create a file at `.zed/tasks.json` in the root folder:
[
  {
    "label": "Run XMCL Dev Launcher",
    "command": "pnpm dev",
    "use_new_terminal": true,
    "allow_concurrent_runs": false
  },
  {
    "label": "Run Linter",
    "command": "pnpm lint",
    "use_new_terminal": true
  },
  {
    "label": "Run Tests",
    "command": "pnpm test",
    "use_new_terminal": true
  }
]

// 3. Run Tasks in Zed:
// Press `Cmd+Shift+P` / `Ctrl+Shift+P` -> type `task: spawn` -> select `Run XMCL Dev Launcher`.
```

```lua [Neovim / Vim]
-- Neovim (NVIM) Setup
-- Configured via nvim-lspconfig for Vue 3 + TypeScript monorepos.

-- 1. LSP Configuration (vtsls / volar / yamlls):
local lspconfig = require('lspconfig')

-- Vue 3 Volar setup
lspconfig.volar.setup({
  filetypes = { 'typescript', 'javascript', 'javascriptreact', 'typescriptreact', 'vue' },
  init_options = {
    vue = {
      hybridMode = false,
    },
  },
})

-- YAML Language Server
lspconfig.yamlls.setup({
  settings = {
    yaml = { validate = true, completion = true },
  },
})

-- 2. Running Dev Server in Neovim:
-- Open internal terminal buffer:
-- :terminal pnpm dev
-- Or use toggleterm.nvim (:ToggleTerm)

-- 3. Debugging Main Process (nvim-dap):
-- Configure nvim-dap node debugger to attach to port 9229 or launch `pnpm dev:main`.
```

```toml [Helix Editor]
# Helix Editor Setup (.helix/languages.toml)

# Create `.helix/languages.toml` in repository root:

[[language]]
name = "vue"
auto-format = true
language-servers = ["volar", "vtsls"]

[[language]]
name = "typescript"
auto-format = true
language-servers = ["vtsls"]

[[language]]
name = "yaml"
auto-format = true
language-servers = ["yaml-language-server"]

# Running dev server from Helix:
# Open terminal split or external terminal and run `pnpm dev`.
```

```markdown [JetBrains / WebStorm]
### JetBrains IDEs (WebStorm / IntelliJ IDEA)

1. **Install Plugins**: Ensure **Vue.js**, **Tailwind CSS**, and **i18n Ally** plugins are enabled.
2. **Create Run Configuration**:
   - Go to **Run** -> **Edit Configurations** -> **+** -> **npm**.
   - Set **Command**: `run`
   - Set **Scripts**: `dev`
   - Click **Apply** and **OK**.
3. Press `Shift+F10` (or click Play icon) to start XMCL in dev mode.
```
:::

---

## 5. Testing, Linting & Building

### Running Code Linter
```sh
pnpm lint
```

### Running Unit Tests
```sh
pnpm test
```

### Building Production Bundles
```sh
# 1. Build frontend UI bundle
pnpm build:renderer

# 2. Package Electron app distribution
pnpm build
```

---

## 6. Commit Message Standards (Conventional Commits)

This repository strictly enforces [Conventional Commits](https://www.conventionalcommits.org/). Your commit message must follow this format:

```
<type>: <short description>
```

### Available Commit Types:
- `feat`: A new feature for users.
- `fix`: A bug fix for users.
- `docs`: Documentation updates.
- `style`: Code formatting (no logic changes).
- `refactor`: Code refactoring without changing functionality.
- `perf`: Performance improvements.
- `test`: Adding or updating tests.
- `chore`: Build script or dependency updates.

**Example**:
```sh
git commit -m "feat: add support for NeoForge modpack installation"
```
