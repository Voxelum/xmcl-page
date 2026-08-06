# Посібник розробника (Contributing) для X Minecraft Launcher

Дякуємо за ваш інтерес до розробки XMCL! Цей посібник містить повний огляд технологічного стеку, структури монорепозиторію, налаштування середовища розробки у різних редакторах коду (**VS Code**, **Zed Editor**, **Neovim / Vim**, **Helix**, **JetBrains**), методів налагодження (debug), тестування та стандартів відправки коду.

---

## 1. Стек технологій та інфраструктура

XMCL побудовано як модульний монорепозиторій на базі сучасного стеку:

### Ядро та Монорепозиторій
- **[Node.js](https://nodejs.org/) (>= 20)**: Основне середовище виконання.
- **[pnpm](https://pnpm.io/)**: Менеджер пакетів на базі pnpm workspaces.
- **[TypeScript](https://www.typescriptlang.org/) (v5.9+)**: Сувора статична типізація для всіх модулів.

### Main Process (Бекенд Electron)
- **[Electron 43](https://electronjs.org/)**: Контейнер робочого столу.
- **[esbuild](https://esbuild.github.io/)**: Надшвидкий бандлер для TypeScript коду main-процесу.
- **Нативні модулі**: `node-datachannel` (P2P WebRTC мережева гра), `@xmcl/windows-utils`.

### Renderer Process (Інтерфейс користувача)
- **[Vue 3](https://vuejs.org/)**: Фреймворк для побудови інтерфейсу (Composition API `<script setup>`).
- **[Vite](https://vitejs.dev/)**: Швидкий інструмент збірки та HMR dev-сервер.
- **[Vuetify 3](https://vuetifyjs.com/)**: Бібліотека компонентів Material Design.

### Тестування та перевірка коду
- **[Vitest](https://vitest.dev/)**: Фреймворк для юніт-тестування.
- **[Oxlint](https://oxc.rs/)**: Високопродуктивний лінтер для JavaScript/TypeScript.

---

## 2. Структура монорепозиторію

```sh
x-minecraft-launcher
 ├─ 📂 packages/               # Автономні TypeScript-пакети
 │   ├─ 📂 core/               # Запуск гри, парсинг версій, пошук Java
 │   ├─ 📂 installer/          # Завантажувачі та інсталятори Minecraft/Forge/Fabric/NeoForge
 │   ├─ 📂 curseforge/         # Інтеграція з API CurseForge
 │   ├─ 📂 modrinth/           # Інтеграція з API Modrinth
 │   ├─ 📂 user/               # Авторизація Yggdrasil & Authlib-injector
 │   └─ 📂 wrtc-multiplayer/   # Мережева гра P2P WebRTC DataChannel
 ├─ 📂 xmcl-runtime/           # Сервіси бекенду та IPC контролери (JavaService, InstanceService тощо)
 ├─ 📂 xmcl-runtime-api/       # Спільні інтерфейси TypeScript та IPC контракти
 ├─ 📂 xmcl-keystone-ui/       # Vue 3 / Vite інтерфейс користувача
 └─ 📂 xmcl-electron-app/      # Вхідна точка Electron та упаковка програми
```

---

## 3. Початок роботи та локальне налаштування

### Крок 1: Клонування репозиторію
Клонуйте репозиторій обов'язково з сабмодулями:
```sh
git clone --recurse-submodules https://github.com/Voxelum/x-minecraft-launcher.git
cd x-minecraft-launcher
```

### Крок 2: Встановлення залежностей
Встановіть усі залежності за допомогою `pnpm`:
```sh
pnpm install
```

### Крок 3: Налаштування змінних оточення
Створіть файл `.env` у папці `xmcl-electron-app/.env` для доступу до API CurseForge:
```ini
CURSEFORGE_API_KEY=ваш_ключ_api_curseforge
```

:::warning Попередження безпеки
Ніколи не додавайте файл `.env` до коммітів та не публікуйте ваш `CURSEFORGE_API_KEY` у відкритих PR.
:::

---

## 4. Налаштування редакторів коду та процес розробки

XMCL підтримує широке коло сучасних редакторів коду. Оберіть свій редактор нижче для отримання інструкцій з налаштування LSP та запуску тасків розробки:

::: code-group
```markdown [VS Code]
### Налаштування Visual Studio Code

VS Code забезпечує повну інтеграцію з налагоджувачем Electron.

1. **Рекомендовані розширення**:
   - Vue Language Features (Volar) (`Vue.volar`)
   - TypeScript Vue Plugin (`Vue.vscode-typescript-vue-plugin`)
   - i18n Ally (`lokalise.i18n-ally`)
2. **Запуск режиму розробки**:
   - Натисніть `F5` або перейдіть до **Run and Debug** -> виберіть `Electron: Main (launch)`.
   - VS Code автоматично запустить dev-сервер Vite та підключить точки зупинки (breakpoints) до main-процесу.
```

```json [Zed Editor]
// Налаштування Zed Editor (.zed/tasks.json)
// Zed — це надшвидкий редактор на Rust з графічним прискоренням.

// 1. Встановіть розширення:
// Натисніть Cmd+Shift+X / Ctrl+Shift+X та встановіть розширення "Vue" та "YAML".

// 2. Створіть файл тасків проєкту (.zed/tasks.json):
// Створіть файл `.zed/tasks.json` у корені репозиторію:
[
  {
    "label": "Запустити XMCL Dev Launcher",
    "command": "pnpm dev",
    "use_new_terminal": true,
    "allow_concurrent_runs": false
  },
  {
    "label": "Запустити Лінтер",
    "command": "pnpm lint",
    "use_new_terminal": true
  },
  {
    "label": "Запустити Тести",
    "command": "pnpm test",
    "use_new_terminal": true
  }
]

// 3. Запуск тасків у Zed:
// Натисніть `Cmd+Shift+P` / `Ctrl+Shift+P` -> введіть `task: spawn` -> виберіть `Запустити XMCL Dev Launcher`.
```

```lua [Neovim / Vim]
-- Налаштування Neovim (NVIM)
-- Конфігурація через nvim-lspconfig для проєктів Vue 3 + TypeScript.

-- 1. Налаштування LSP (vtsls / volar / yamlls):
local lspconfig = require('lspconfig')

-- Vue 3 Volar
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

-- 2. Запуск dev-сервера у Neovim:
-- Відкрийте внутрішній термінал:
-- :terminal pnpm dev
-- Або використовуйте toggleterm.nvim (:ToggleTerm)

-- 3. Налагодження Main-процесу (nvim-dap):
-- Налаштуйте nvim-dap для підключення до порту 9229 або запуску `pnpm dev:main`.
```

```toml [Helix Editor]
# Налаштування Helix Editor (.helix/languages.toml)

# Створіть файл `.helix/languages.toml` у корені репозиторію:

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

# Запуск розробки:
# Відкрийте термінал та виконайте `pnpm dev`.
```

```markdown [JetBrains / WebStorm]
### Налаштування JetBrains IDEs (WebStorm / IntelliJ IDEA)

1. **Плагіни**: Переконайтеся, що увімкнені плагіни **Vue.js**, **Tailwind CSS** та **i18n Ally**.
2. **Створення конфігурації запуску**:
   - Перейдіть до **Run** -> **Edit Configurations** -> **+** -> **npm**.
   - Встановіть **Command**: `run`
   - Встановіть **Scripts**: `dev`
   - Натисніть **Apply** та **OK**.
3. Натисніть `Shift+F10` (або зелену кнопку Play) для запуску XMCL.
```
:::

---

## 5. Перевірка коду, Тести та Збірка

### Перевірка лінтером (Oxlint)
```sh
pnpm lint
```

### Запуск юніт-тестів (Vitest)
```sh
pnpm test
```

### Створення фінальної збірки
```sh
# 1. Збірка фронтенду
pnpm build:renderer

# 2. Збірка пакету Electron
pnpm build
```

---

## 6. Стандарти коментарів коммітів (Conventional Commits)

У репозиторії суворо дотримуються правил [Conventional Commits](https://www.conventionalcommits.org/). Формат комміту:

```
<тип>: <короткий опис>
```

### Доступні типи коммітів:
- `feat`: Нова функціональність для користувача.
- `fix`: Виправлення помилки.
- `docs`: Зміни в документації.
- `style`: Форматування коду.
- `refactor`: Рефакторинг коду.
- `perf`: Поліпшення продуктивності.
- `test`: Додавання або оновлення тестів.
- `chore`: Оновлення скриптів збірки або залежностей.

**Приклад**:
```sh
git commit -m "feat: add support for NeoForge modpack installation"
```
