# Contribuindo com o X Minecraft Launcher (XMCL)

Obrigado pelo seu interesse em contribuir com o XMCL! Este guia fornece uma visão geral da stack tecnológica, arquitetura monorepo, configuração do ambiente de desenvolvimento, configurações de editores (**VS Code**, **Zed Editor**, **Neovim / Vim**, **Helix**, **JetBrains**), fluxos de debug, procedimentos de teste e padrões de submissão.

---

## 1. Stack Tecnológica & Infraestrutura

O XMCL é construído como um monorepo modular alimentado por tecnologias modernas de web e desktop:

### Core Global & Monorepo
- **[Node.js](https://nodejs.org/) (>= 20)**: Ambiente de runtime principal.
- **[pnpm](https://pnpm.io/)**: Gerenciador de pacotes do monorepo usando workspaces `pnpm`.
- **[TypeScript](https://www.typescriptlang.org/) (v5.9+)**: Tipagem estática rigorosa em todos os módulos.

### Processo Principal (Backend Electron)
- **[Electron 43](https://electronjs.org/)**: Container da aplicação desktop.
- **[esbuild](https://esbuild.github.io/)**: Bundler de alto desempenho para código TypeScript do processo principal.
- **Módulos Nativos**: `node-datachannel` (multijogador P2P WebRTC), `@xmcl/windows-utils`.

### Processo de Renderização (UI Frontend)
- **[Vue 3](https://vuejs.org/)**: Framework progressivo para interfaces de usuário (Composition API `<script setup>`).
- **[Vite](https://vitejs.dev/)**: Ferramenta de build frontend extremamente rápida e servidor HMR.
- **[Vuetify 3](https://vuetifyjs.com/)**: Biblioteca de componentes Material Design.

### Testes & Qualidade de Código
- **[Vitest](https://vitest.dev/)**: Framework de testes unitários.
- **[Oxlint](https://oxc.rs/)**: Linter JavaScript/TypeScript de alto desempenho.

---

## 2. Estrutura de Diretórios do Monorepo

```sh
x-minecraft-launcher
 ├─ 📂 packages/               # Pacotes TypeScript independentes do core
 │   ├─ 📂 core/               # Inicialização do jogo, parse de versões, resolução de Java
 │   ├─ 📂 installer/          # Downloads, instaladores do Minecraft/Forge/Fabric/NeoForge
 │   ├─ 📂 curseforge/         # Integração com a API do CurseForge
 │   ├─ 📂 modrinth/           # Integração com a API do Modrinth
 │   ├─ 📂 user/               # Autenticação Yggdrasil & Authlib-injector
 │   └─ 📂 wrtc-multiplayer/   # Rede P2P multiplayer WebRTC DataChannel
 ├─ 📂 xmcl-runtime/           # Serviços de backend & controladores IPC (JavaService, InstanceService, etc.)
 ├─ 📂 xmcl-runtime-api/       # Interfaces TypeScript compartilhadas & contratos de eventos IPC
 ├─ 📂 xmcl-keystone-ui/       # Interface de usuário frontend Vue 3 / Vite
 └─ 📂 xmcl-electron-app/      # Ponto de entrada do processo principal Electron & empacotamento nativo
```

---

## 3. Primeiros Passos & Configuração Local

### Passo 1: Clonar o Repositório
Clone com submódulos usando a flag `--recurse-submodules`:
```sh
git clone --recurse-submodules https://github.com/Voxelum/x-minecraft-launcher.git
cd x-minecraft-launcher
```

### Passo 2: Instalar Dependências
Instale todas as dependências do workspace usando `pnpm`:
```sh
pnpm install
```

### Passo 3: Configurar Variáveis de Ambiente
Crie um arquivo `.env` dentro de `xmcl-electron-app/.env` para configurar o acesso à API do CurseForge:
```ini
CURSEFORGE_API_KEY=sua_chave_api_curseforge_aqui
```

:::warning Aviso de Segurança
Nunca faça commit do seu arquivo `.env` ou vaze sua `CURSEFORGE_API_KEY` em commits públicos ou Pull Requests.
:::

---

## 4. Configuração de Editores de Código & Fluxos de Desenvolvimento

O XMCL suporta uma ampla variedade de editores de código modernos. Escolha seu editor abaixo para instruções de configuração, configuração de LSP e execução de tarefas de desenvolvimento:

::: code-group
```markdown [VS Code]
### Configuração do Visual Studio Code

O VS Code fornece integração nativa com debuggers integrados.

1. **Extensões Recomendadas**:
   - Vue Language Features (Volar) (`Vue.volar`)
   - TypeScript Vue Plugin (`Vue.vscode-typescript-vue-plugin`)
   - i18n Ally (`lokalise.i18n-ally`)
2. **Iniciando o Modo Dev**:
   - Pressione `F5` ou vá em **Executar e Depurar** -> selecione `Electron: Main (launch)`.
   - O VS Code iniciará automaticamente o servidor de desenvolvimento Vite e anexará o debugger node ao processo principal com suporte completo a breakpoints.
```

```json [Zed Editor]
// Configuração do Zed Editor (.zed/tasks.json)
// O Zed é um editor de alto desempenho acelerado por GPU construído em Rust.

// 1. Instale Extensões:
// Abra as Extensões do Zed (Cmd+Shift+X / Ctrl+Shift+X) e instale "Vue" e "YAML".

// 2. Adicione Tarefas do Projeto (.zed/tasks.json):
// Crie um arquivo em `.zed/tasks.json` na pasta raiz:
[
  {
    "label": "Executar XMCL Dev Launcher",
    "command": "pnpm dev",
    "use_new_terminal": true,
    "allow_concurrent_runs": false
  },
  {
    "label": "Executar Linter",
    "command": "pnpm lint",
    "use_new_terminal": true
  },
  {
    "label": "Executar Testes",
    "command": "pnpm test",
    "use_new_terminal": true
  }
]

// 3. Execute Tarefas no Zed:
// Pressione `Cmd+Shift+P` / `Ctrl+Shift+P` -> digite `task: spawn` -> selecione `Executar XMCL Dev Launcher`.
```

```lua [Neovim / Vim]
-- Configuração do Neovim (NVIM)
-- Configurado via nvim-lspconfig para monorepos Vue 3 + TypeScript.

-- 1. Configuração do LSP (vtsls / volar / yamlls):
local lspconfig = require('lspconfig')

-- Configuração Vue 3 Volar
lspconfig.volar.setup({
  filetypes = { 'typescript', 'javascript', 'javascriptreact', 'typescriptreact', 'vue' },
  init_options = {
    vue = {
      hybridMode = false,
    },
  },
})

-- Servidor de Linguagem YAML
lspconfig.yamlls.setup({
  settings = {
    yaml = { validate = true, completion = true },
  },
})

-- 2. Executando o Servidor Dev no Neovim:
-- Abra o buffer de terminal interno:
-- :terminal pnpm dev
-- Ou use toggleterm.nvim (:ToggleTerm)

-- 3. Depurando o Processo Principal (nvim-dap):
-- Configure o debugger node nvim-dap para anexar à porta 9229 ou iniciar `pnpm dev:main`.
```

```toml [Helix Editor]
# Configuração do Helix Editor (.helix/languages.toml)

# Crie `.helix/languages.toml` na raiz do repositório:

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

# Executando o servidor dev a partir do Helix:
# Abra o split de terminal ou terminal externo e execute `pnpm dev`.
```

```markdown [JetBrains / WebStorm]
### JetBrains IDEs (WebStorm / IntelliJ IDEA)

1. **Instale Plugins**: Certifique-se de que os plugins **Vue.js**, **Tailwind CSS** e **i18n Ally** estão habilitados.
2. **Crie uma Configuração de Execução**:
   - Vá em **Executar** -> **Editar Configurações** -> **+** -> **npm**.
   - Defina **Comando**: `run`
   - Defina **Scripts**: `dev`
   - Clique em **Aplicar** e **OK**.
3. Pressione `Shift+F10` (ou clique no ícone Play) para iniciar o XMCL no modo dev.
```
:::

---

## 5. Testes, Linting & Build

### Executando o Linter de Código
```sh
pnpm lint
```

### Executando Testes Unitários
```sh
pnpm test
```

### Criando Bundles de Produção
```sh
# 1. Criar bundle da UI frontend
pnpm build:renderer

# 2. Empacotar distribuição do app Electron
pnpm build
```

---

## 6. Padrões de Mensagem de Commit (Conventional Commits)

Este repositório aplica estritamente o padrão [Conventional Commits](https://www.conventionalcommits.org/). Sua mensagem de commit deve seguir este formato:

```
<tipo>: <descrição curta>
```

### Tipos de Commit Disponíveis:
- `feat`: Uma nova funcionalidade para usuários.
- `fix`: Uma correção de bug para usuários.
- `docs`: Atualizações de documentação.
- `style`: Formatação de código (sem alterações de lógica).
- `refactor`: Refatoração de código sem mudança de funcionalidade.
- `perf`: Melhorias de performance.
- `test`: Adição ou atualização de testes.
- `chore`: Atualizações de scripts de build ou dependências.

**Exemplo**:
```sh
git commit -m "feat: adicionar suporte para instalação de modpack NeoForge"
```
