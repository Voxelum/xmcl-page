# Guia do Minecraft Bedrock Edition

O X Minecraft Launcher (XMCL) suporta gerenciar, baixar e iniciar o **Minecraft Bedrock Edition** (também conhecido como *Edição Windows 10/11* ou *Edição UWP*).

Este guia explica como configurar o Bedrock Edition no XMCL, de onde vêm os downloads dos pacotes e a compatibilidade com sistemas operacionais.

---

## 1. Requisitos do Sistema & Configuração (Apenas Windows)

O Minecraft Bedrock Edition utiliza a arquitetura de pacotes UWP (Universal Windows Platform) do Windows (`Microsoft.MinecraftUWP`).

### Passo 1: Ativar o Modo Desenvolvedor do Windows
Para permitir que o XMCL alterne e registre pacotes de versão do Bedrock extraídos no seu sistema sem baixar novamente da Microsoft Store a cada vez:

1. Pressione `Win + I` para abrir as **Configurações do Windows**.
2. Vá em **Privacidade & Segurança** (ou *Sistema*) -> **Para desenvolvedores**.
3. Ative o **Modo Desenvolvedor** para **LIGADO**.
4. Confirme o prompt do Windows.

:::warning Requisito de Licença da Microsoft
Você deve possuir uma licença válida do **Minecraft Bedrock Edition** na sua conta Microsoft (ou ter baixado o Bedrock da Microsoft Store) para jogar as versões de lançamento completas. As builds Beta/Preview requerem uma conta Microsoft registrada no programa Insider Beta.
:::

---

## 2. Instalando & Iniciando Versões Bedrock no XMCL

1. Abra o **X Minecraft Launcher**.
2. Clique em **Criar Instância** ou abra as **Configurações da Instância**.
3. Mude o tipo de jogo / edição para **Bedrock Edition**.
4. No seletor de versão, navegue pela lista de builds de lançamento, beta ou preview disponíveis.
5. Clique em **Instalar**. O XMCL buscará o pacote da versão e o extrairá para sua pasta de dados local.
6. Clique em **Iniciar**. O XMCL registrará dinamicamente a versão com os serviços AppX do Windows e iniciará o jogo.

---

## 3. De Onde Vêm os Pacotes Bedrock?

Todos os arquivos de versão e metadados do Bedrock acessados pelo XMCL são obtidos diretamente da infraestrutura oficial:

- **Banco de Dados de Versões (`mrarm.io/r/w10-vdb`)**: Fornece uma lista indexada de GUIDs de versões públicas de lançamento e preview (Identidades de Atualização).
- **Downloads de Pacotes (`tlu.dl.delivery.mp.microsoft.com`)**: Os binários dos pacotes (`.appx`) são baixados diretamente da **CDN oficial do Windows Update da Microsoft**. O XMCL não hospeda nem redistribui arquivos do jogo.

---

## 4. Compatibilidade de Plataforma (Windows vs. macOS vs. Linux)

| Sistema Operacional | Status de Compatibilidade | Detalhes |
| :--- | :--- | :--- |
| 💻 **Windows 10 / 11** | ✅ **Totalmente Suportado** | Ambiente de runtime UWP nativo. A troca de versão e inicialização funcionam perfeitamente. |
| 🍎 **macOS** | ❌ **Não Suportado** | O Bedrock no XMCL depende de APIs AppX/UWP específicas do Windows (`Get-AppxPackage`). No macOS, jogue **Java Edition** nativamente ou use wrappers Android independentes fora do XMCL. |
| 🐧 **Linux** | ❌ **Não Suportado** | O gerenciamento de pacotes UWP é exclusivo do Windows. No Linux, jogue **Java Edition** nativamente ou use ferramentas independentes como `mcpelauncher` (APK Android) fora do XMCL. |

:::info Jogando no macOS & Linux
Se você está no macOS ou Linux, recomendamos fortemente jogar **Minecraft Java Edition** no XMCL, que é 100% multiplataforma, suporta milhares de mods, shaders personalizados e cross-play com servidores Java!
:::
