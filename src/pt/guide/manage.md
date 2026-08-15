# Gerenciamento de Dados e Armazenamento

A arquitetura de dados do X Minecraft Launcher (XMCL) é dividida em dois componentes distintos:

1. **Configurações do Sistema & Banco de Dados do XMCL** (configurações, contas, cache do marketplace).
2. **Dados do Jogo Minecraft** (versões, instâncias, mods, mundos, assets).

:::tip Relocar Armazenamento para Outro Drive
Sem espaço no drive `C:`? Você pode facilmente mover todo o Diretório de Dados do Jogo para o drive `D:` ou `E:`. Veja o [Guia de Relocação de Drive](./change-drive.md).
:::

---

## 1. Cache do Sistema & Banco de Dados do XMCL

:::tip 💡 Forma Mais Fácil de Abrir o Diretório de Dados
Você não precisa procurar manualmente em pastas ocultas do sistema! Dentro do launcher, vá em **Configurações ⚙️** -> **Configurações Globais** -> **Armazenamento** e clique em **"Abrir Diretório de Dados"**. O XMCL abrirá automaticamente a pasta exata no Explorador de Arquivos do Windows!
:::

### Caminhos Exatos das Pastas do Sistema por Tipo de Instalação:

Se estiver navegando manualmente no Explorador de Arquivos (pressione `Win + R` e cole o caminho correspondente):

#### 🔹 Opção 1: Instalação AppX / AppInstaller / WinGet (Mais Comum)
Os pacotes AppX rodam em um ambiente sandboxed no Windows 10/11. Seus dados são armazenados **NÃO no `Roaming` padrão do AppData**, mas dentro do sandbox do pacote Windows:
```cmd
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```
*(Caminho completo: `C:\Users\<Seu_Usuário>\AppData\Local\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl`)*

#### 🔹 Opção 2: Instalação EXE Padrão
```cmd
%AppData%\xmcl
```
*(Caminho completo: `C:\Users\<Seu_Usuário>\AppData\Roaming\xmcl`)*

#### 🔹 Opção 3: Pacote ZIP Portátil
Para o pacote ZIP portátil, os dados são armazenados diretamente na mesma pasta onde você extraiu o `XMCL` (junto com o `xmcl.exe`), ou no Diretório de Dados do Jogo selecionado.

#### 🔹 macOS & Linux:
- **macOS**: `~/Library/Application Support/xmcl`
- **Linux**: `~/.config/xmcl`

---

### Arquivos de Configuração Principais:
- **`user.json`** — Perfis de conta (Microsoft, Yggdrasil, Offline), tokens e links de skin.
- **`settings.json`** — Configuração global do launcher (caminho dos dados, idioma, tema, proxy, nós de download).
- **`instances.json`** — Registro de todas as instâncias criadas e a última instância selecionada.
- **`java.json`** — Cache das instalações de runtime Java detectadas.
- **`resources-v2/`** — Banco de dados LevelDB contendo metadados indexados de mods, pacotes de recursos e shaders.
- **`logs/`** — Logs de execução do launcher (`main.log`, `renderer.log`).

---

## 2. Diretório de Dados do Jogo Minecraft

Todos os arquivos pesados do jogo são armazenados dentro do **Diretório de Dados do Jogo**.

### Estrutura de Diretórios:

```sh
📂 Diretório de Dados do Jogo
 ├─ 📂 instances/        # Instâncias individuais do Minecraft
 │   ├─ 📂 Fabric-1.20/  # Pasta de instância específica
 │   │   ├─ 📂 saves/        # Arquivos de mundo para esta instância
 │   │   ├─ 📂 options.txt   # Configurações do jogo para esta instância
 │   │   ├─ 📂 screenshots/  # Capturas de tela
 │   │   └─ 📂 mods/         # Links físicos/simbólicos para mods compartilhados
 ├─ 📂 mods/             # Pool global de mods compartilhados
 ├─ 📂 resourcepacks/    # Pool de pacotes de recursos compartilhados
 ├─ 📂 shaderpacks/      # Pool de pacotes de shaders compartilhados
 ├─ 📂 versions/         # Versões do Minecraft baixadas (JAR, JSON)
 ├─ 📂 assets/           # Assets e texturas do jogo Minecraft
 ├─ 📂 libraries/        # Bibliotecas Java compartilhadas
 └─ 📂 modpacks/         # Modpacks salvos e exportados
```

---

## 3. Como o XMCL Economiza Espaço em Disco (Links Físicos)

1. Cada arquivo de mod é baixado **apenas uma vez** no pool global `mods/`.
2. Adicionar um mod a múltiplas instâncias cria um **link físico** leve na pasta dessa instância.
3. **Resultado**: 10 instâncias usando mods idênticos não ocupam espaço extra além de uma única instância!
