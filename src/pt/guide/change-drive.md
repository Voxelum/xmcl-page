# Como Mover o XMCL & Dados do Jogo para Outro Drive

Ao instalar o X Minecraft Launcher ou baixar muitas versões do Minecraft, mods, pacotes de recursos e shaders, o drive do sistema (`C:`) pode rapidamente ficar sem espaço.

Este guia explica como **mover o aplicativo do launcher** e **relocar os dados do jogo Minecraft** para um drive secundário (como `D:` ou `E:`).

:::tip Recomendação Rápida
Se você só quer liberar espaço em disco no `C:`, você só precisa **[Mudar o Diretório de Dados do Jogo](#1-relocando-os-dados-do-jogo-minecraft-recomendado)** dentro do XMCL. Os dados do jogo (mods, saves, versões) representam 99% do espaço utilizado!
:::

---

## 1. Relocando os Dados do Jogo Minecraft (Recomendado)

O XMCL permite armazenar todos os arquivos pesados do Minecraft (versões, mods, instâncias, pacotes de recursos, assets) em qualquer drive sem reinstalar o launcher.

### Passos para Mudar o Diretório de Dados:
1. Inicie o **X Minecraft Launcher**.
2. Abra as **Configurações** (clique no ícone de engrenagem ⚙️ no canto inferior esquerdo).
3. Vá em **Configurações Globais** -> **Geral / Armazenamento**.
4. Encontre a configuração **Diretório de Dados / Caminho**.
5. Clique em **Procurar** / **Mudar Caminho** e selecione uma pasta no drive desejado (ex: `D:\XMCL-Data` ou `E:\MinecraftData`).
6. Confirme a seleção. O XMCL usará automaticamente o novo local para todas as instâncias, mods e downloads atuais e futuros do Minecraft!

---

## 2. Movendo o Binário do Aplicativo do Launcher

Dependendo de qual formato de pacote você usou para instalar o XMCL, mover o executável do launcher requer métodos diferentes:

### Opção A: Pacote ZIP Portátil
- **Características**: Totalmente portátil e independente.
- **Como mover**:
  1. Feche o XMCL se estiver em execução.
  2. Simplesmente copie ou recorte e cole a pasta `XMCL` extraída de `C:\` para o novo drive (ex: `D:\Games\XMCL`).
  3. Execute `xmcl.exe` diretamente do novo diretório. Você pode criar um atalho na área de trabalho a partir do `xmcl.exe`.

### Opção B: AppX / AppInstaller Online / WinGet
- **Por que a cópia simples não funciona**: AppX, AppInstaller e WinGet instalam o XMCL como um pacote Windows sandboxed em caminhos de sistema protegidos (`C:\Program Files\WindowsApps` e `%LocalAppData%\Packages`). Copiar manualmente essas pastas no Explorador de Arquivos causará erros de permissão do Windows.
- **Como mover usando as Configurações do Windows**:
  1. Pressione `Win + I` para abrir as **Configurações do Windows**.
  2. Navegue até **Aplicativos** -> **Aplicativos instalados** (ou *Apps e recursos*).
  3. Pesquise por **X Minecraft Launcher**.
  4. Clique nos três pontos `...` ao lado do XMCL e selecione **Mover**.
  5. Selecione o drive de destino (ex: `D:`) na lista suspensa e clique em **Mover**. O Windows transferirá de forma limpa o binário do aplicativo e seus dados do sandbox para o drive selecionado.

:::tip Mudar o Local Padrão de Instalação AppX do Windows
Para fazer futuros aplicativos AppX / WinGet instalarem em outro drive por padrão:
Abra **Configurações** -> **Sistema** -> **Armazenamento** -> **Configurações avançadas de armazenamento** -> **Onde o novo conteúdo é salvo** -> Mude *Novos aplicativos serão salvos em:* para o drive `D:`.
:::

### Opção C: macOS (DMG)
- Arraste `X Minecraft Launcher.app` de `/Aplicativos` para qualquer volume de disco conectado, ou mantenha o app em `/Aplicativos` enquanto muda o Diretório de Dados do Jogo dentro das configurações do launcher para um drive externo.

### Opção D: Linux (AppImage / Flatpak / Deb / RPM)
- Para **AppImage**, simplesmente mova o arquivo `.AppImage` para qualquer partição montada (ex: `/media/data/XMCL.AppImage`).
- Para **Deb / RPM / Flatpak**, os binários do sistema permanecem nos caminhos padrão do sistema, mas todos os assets pesados do jogo podem ser direcionados para outro drive usando a **Seção 1**.
