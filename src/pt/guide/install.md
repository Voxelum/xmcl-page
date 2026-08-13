# Guia de Instalação

O X Minecraft Launcher (XMCL) oferece múltiplos formatos de instalação para Windows, macOS e Linux.

:::tip Guias Úteis
- 💾 **Precisa mover o launcher ou os dados do jogo para o drive D: ou E:?** Leia o [Guia de Relocação de Drive](./change-drive.md).
- 🧱 **Quer jogar o Minecraft Bedrock Edition (Windows 10/11)?** Leia o [Guia do Bedrock Edition](./bedrock.md).
:::

---

## Windows

Várias opções de instalação estão disponíveis para Windows:

### 1. APPX & AppInstaller Online — Recomendado
- **APPX** é o formato moderno de pacote sandboxed do Windows 10/11. Os apps rodam em um ambiente isolado. Ao desinstalar, o cache e as alterações no registro são removidos de forma limpa.
- **AppInstaller** baixa e atualiza automaticamente o pacote APPX via canais seguros de entrega da Microsoft com suporte a **atualizações incrementais**.

### 2. Pacote ZIP Portátil
- Não requer instalação nem privilégios de administrador.
- Extraia o arquivo em qualquer lugar (ex: `D:\Games\XMCL`) e execute `xmcl.exe` diretamente.
- Ideal para pendrives ou partições em disco secundário.

### 3. Rodando no Windows 7 / 8 / 8.1 (VxKex Extended Kernel)

:::warning Aviso Importante de Compatibilidade
O XMCL moderno é construído com **Electron 43 / Chromium 130+**. O Chromium e a Microsoft **encerraram oficialmente todo o suporte para Windows 7, 8 e 8.1**. O launcher **não funcionará nativamente** em versões legadas do Windows por padrão.
:::

:::details Solução alternativa usando o VxKex Extended Kernel
Você pode rodar o XMCL no Windows 7 / 8 usando o **VxKex** unofficial extended kernel:

1. Baixe e instale o [VxKex-NEXT](https://github.com/YuZhouRen86/VxKex-NEXT).
2. Clique com o botão direito em `xmcl.exe` -> **Propriedades** -> aba **VxKex**.
3. Marque **"Habilitar VxKex NEXT para este programa"** e **"Reportar outras versões do Windows"**, depois aplique.

**O que funciona e o que não funciona no Windows 7/8:**
- ✅ **Singleplayer (Java Edition)** — Funciona normalmente com um runtime Java adequado (Java 8 / 17 / 21).
- ❌ **Multijogador P2P WebRTC** — Não suportado (requer APIs de rede do Windows 10+).
- ❌ **Bedrock Edition (UWP)** — Não suportado (requer o framework UWP do Windows 10/11).
:::

---

## macOS

### Pacote DMG
1. Baixe e abra o arquivo `.dmg`.
2. Arraste **X Minecraft Launcher.app** para a pasta **Aplicativos**.

:::warning Liberação do Gatekeeper
Para remover o aviso de aplicativo não assinado no macOS, execute este comando no Terminal:

```sh
sudo xattr -c /Applications/X\ Minecraft\ Launcher.app
```
:::

---

## Linux

### AppImage
- Binário universal para distribuições Linux (Ubuntu, Fedora, Arch, etc.).
- Marque como executável: `chmod +x XMCL.AppImage` e execute.

---

## Seleção do Diretório de Dados do Jogo

Durante a configuração inicial, o XMCL solicita um **Diretório de Dados do Jogo**.
- Recomenda-se escolher uma pasta dedicada (ex: `D:\XMCL-Data`).
- Para mais detalhes, veja o [Guia de Gerenciamento de Dados](./manage.md) e o [Guia de Relocação de Drive](./change-drive.md).
