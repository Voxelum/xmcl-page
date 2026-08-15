# Solução de Problemas de Instalação & Inicialização

Se você encontrar problemas ao instalar o Minecraft, mod loaders (Forge/Fabric/NeoForge/Quilt), mods, modpacks ou shaders, ou se o jogo falhar ao iniciar, este guia ajudará você a resolver passo a passo.

---

## 🌐 1. Download Falha ou Trava (Problemas de Rede)

### Sintomas
* O download do Minecraft, assets, bibliotecas ou Forge/Fabric fica parado em `0%`.
* O launcher exibe erros de timeout ou conexão (`CONNECTION_TIMED_OUT`, `NAME_NOT_RESOLVED`, `HTTP_STATUS 504`).

### Soluções

:::tip Tente um Mirror de Download
Se os servidores oficiais da Mojang ou Forge estiverem lentos ou bloqueados pelo seu provedor de internet, você pode mudar para um mirror:
1. Clique em **Configurações** (ícone de engrenagem) na barra lateral esquerda.
2. Role até a seção **Configurações de Rede**.
3. Encontre a configuração **Fonte de Download / Mirror**.
4. Mude de **Padrão** para **BMCLAPI** ou **MCBBS** (mirrors altamente confiáveis que copiam os assets oficiais).
:::

:::info Configure um Proxy
Se você está atrás de um firewall ou em uma região com acesso restrito à internet, configure um proxy no launcher:
1. Em **Configurações** -> **Configurações de Rede**, encontre as opções de proxy.
2. Configure seu endereço de proxy SOCKS5 ou HTTP.
3. Teste a conexão.
:::

---

## 📦 2. Download de Mod / Modpack Falha (Restrição da API do CurseForge)

### Sintomas
* Ao baixar um modpack ou mod do CurseForge, alguns mods falham ao baixar e exibem um ícone de aviso.
* Uma mensagem avisa sobre "downloads de terceiros restritos".

### Causa
Alguns autores de mods no CurseForge desativam os downloads via API de launchers de terceiros para forçar jogadores a visitar sua página.

### Solução
O XMCL lida com isso permitindo que você baixe manualmente os arquivos ausentes:
1. Veja os detalhes da tarefa de download no gerenciador de tarefas do launcher (canto superior direito).
2. Clique no link fornecido ao lado do mod com falha para abrir sua página de download no navegador.
3. Baixe o arquivo `.jar` manualmente pelo navegador.
4. **Arraste e solte** o arquivo `.jar` baixado diretamente na janela do launcher (ou coloque na pasta `mods/` da instância).
5. O XMCL o identificará automaticamente e retomará/completará a instalação.

---

## 🔄 3. Loop Infinito de Corrupção de Arquivo (Incompatibilidade de Checksum)

### Sintomas
* O launcher fica baixando continuamente uma biblioteca ou arquivo de asset, dizendo que está corrompido.
* O jogo falha ao iniciar porque a validação falha repetidamente.

### Causa
Um download de arquivo foi interrompido e um arquivo parcial corrompido está travado no seu cache, impedindo o launcher de substituí-lo corretamente.

### Solução
1. Encontre o caminho do arquivo corrompido mostrado nos diagnósticos ou logs do launcher (ex: `libraries/org/lwjgl/...`).
2. Abra a pasta de dados da instância (clique no ícone de pasta no canto superior direito do painel da instância).
3. Navegue até o caminho especificado no erro e **exclua a pasta que contém** a biblioteca/asset corrompida.
4. Clique em **Reparar** ou reinicie o processo de inicialização. O launcher baixará uma cópia nova e limpa.

---

## ☕ 4. Jogo Crasha Instantaneamente (Versão Java Incompatível)

### Sintomas
* O jogo inicia mas crasha imediatamente com código de saída `1` ou `-1`.
* O log diz `UnsupportedClassVersionError` ou "Java not found".

### Causa
Cada versão do Minecraft requer uma versão específica de Java (JDK). Usar a versão errada fará o jogo crashar.

### Solução
O XMCL tem um gerenciador de Java automático que baixa as versões corretas do JDK para você.

:::warning Matriz de Compatibilidade Java
Certifique-se de que sua instância está usando a versão correta de Java:
* **Minecraft 1.12.2 e mais antigos:** Java 8
* **Minecraft 1.16 - 1.17:** Java 16 / 17
* **Minecraft 1.18 - 1.20.4:** Java 17
* **Minecraft 1.20.5+:** Java 21
:::

#### Como gerenciar o Java no XMCL:
1. Vá nas configurações da instância (ícone de engrenagem ao lado do botão Jogar).
2. Olhe na seção **Java**.
3. Clique na caixa de seleção. O XMCL listará todas as versões de Java detectadas no seu sistema e destacará as compatíveis.
4. Se você não tem a versão correta de Java, clique em **Instalar Java** para deixar o launcher baixar a versão ideal automaticamente.

---

## 📑 5. Launcher Não Abre ou Tela Preta

### Sintomas
* Clicar duas vezes no launcher não faz nada.
* A janela do launcher abre mas permanece completamente preta.

### Solução
Você pode encontrar os arquivos de log para ver o que está causando o crash:
1. Vá ao diretório de dados do aplicativo local:
   * **Windows:** `%appdata%\xmcl`
   * **macOS:** `~/Library/Application Support/xmcl`
   * **Linux:** `~/.config/xmcl`
2. Abra a pasta `logs` e procure o arquivo `main.log` mais recente.

---

## 🔍 6. Mod Está no Site do CurseForge mas Não Aparece na Busca do Launcher

### Sintomas
* Você busca um mod dentro do launcher, mas ele diz "Nenhum resultado encontrado", mesmo sendo visível no site oficial do CurseForge.

### Causa
O CurseForge permite que autores de mods **desativem o acesso de API de terceiros** para seus mods. Quando desativado, a API do CurseForge (que o XMCL usa para buscar mods) é proibida de retornar o mod nos resultados de busca.

### Solução
1. Abra seu navegador e acesse a página do mod no [CurseForge](https://www.curseforge.com/minecraft/search).
2. Clique em **Download** para salvar o arquivo `.jar` no seu computador.
3. Abra o XMCL e selecione sua instância ativa.
4. **Arraste e solte** o arquivo `.jar` baixado diretamente na janela do launcher. O XMCL o instalará automaticamente na pasta `mods` da instância selecionada.

---

## 📦 7. Modpacks Importados "Somem" ou Parecem Vazios

### Sintomas
* Você arrasta e solta um arquivo `.zip` ou `.mrpack` de modpack no launcher, mas não consegue encontrá-lo no seu perfil atual, ou a lista de mods aparece vazia.

### Causa
1. **Criação de Nova Instância**: O XMCL não mescla modpacks no seu perfil ativo. Em vez disso, cria uma **nova Instância** (perfil) completamente para aquele modpack.
2. **Tarefas de Download em Segundo Plano**: Os arquivos de modpack não contêm os arquivos `.jar` reais dos mods para economizar espaço (contêm apenas metadados). Após importar, o XMCL inicia uma tarefa em segundo plano para baixar todos os mods. Até que essa tarefa termine, a lista de mods pode parecer vazia.

### Solução
1. **Mude de Instância**: Clique no menu da barra lateral ou seletor de perfil para ver todas as instâncias. Procure por uma nova instância com o nome do modpack importado e selecione-a.
2. **Verifique o Gerenciador de Tarefas**: Clique no ícone de Tarefas (canto superior direito do launcher) para verificar se a tarefa de download do modpack ainda está em execução. Aguarde o download ser concluído antes de iniciar o jogo.

---

## 📋 8. Gerar um Relatório de Diagnóstico (Primeiro Passo Recomendado)

Antes de procurar arquivos de log manualmente, recomendamos gerar um **Relatório de Diagnóstico** dentro do launcher. Isso compila todos os logs do launcher, logs do jogo e informações do ambiente do sistema em um único pacote, permitindo que a comunidade ou desenvolvedores te ajudem muito mais rápido.

### Como Gerar um Relatório:
1. Clique no menu **Ajuda & Feedback** no cabeçalho do launcher.
2. Clique em **Gerar Relatório** para empacotar os diagnósticos e logs do launcher.

   <img src="/guidephoto/Generate%20Report.gif" alt="Gerar Relatório" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;">

---

## 📑 9. Como Analisar Logs do Launcher & do Jogo

Se preferir encontrar os logs manualmente, eles mostrarão exatamente o que está acontecendo. Veja como localizá-los e entender cenários comuns de crash.

### 🔍 Como Encontrar os Logs

Dependendo se é um erro do launcher ou um crash do jogo, você precisará verificar logs diferentes:

#### A. Logs do Launcher (`main.log`)
Para crashes do launcher, falhas de download, erros de rede ou problemas de login:
- **Windows:** Pressione `Win + R`, digite `%appdata%\xmcl\logs` e pressione Enter.
- **macOS:** Navegue até `~/Library/Application Support/xmcl/logs`.
- **Linux:** Vá para `~/.config/xmcl/logs`.
- Encontre o arquivo mais recente chamado `main.log`.

#### B. Logs do Jogo (`latest.log` & Relatórios de Crash)
Para conflitos de mods, crashes do Minecraft, problemas de desempenho ou erros de Java:
- Abra o card da instância no launcher.
- Clique no ícone de **Pasta** no canto superior direito do painel da instância para abrir seu diretório.
- Vá para a pasta `logs` e abra `latest.log`.
- Se o jogo crashou e fechou, vá para a pasta `crash-reports` e procure o arquivo `.txt` mais recente (nomeado como `crash-AAAA-MM-DD_HH.MM.SS-client.txt`).

---

### 🛠 Como Analisar Logs & Corrigir Erros Comuns

Abra o arquivo de log em qualquer editor de texto (como o Bloco de Notas) e procure pelos seguintes erros (você pode usar `Ctrl + F` para buscar):

#### 🔴 Caso 1: Erro de Memória Insuficiente
- **O que procurar:** `java.lang.OutOfMemoryError: Java heap space` ou `Exit code: -805306369`.
- **Explicação:** Você não alocou RAM suficiente para o jogo carregar todos os mods.
- **Como corrigir:**
  1. Abra as configurações da instância (ícone de engrenagem ao lado do botão Jogar).
  2. Role para baixo até a seção **Java**.
  3. Aumente a **Memória Mínima** e a **Memória Máxima** (ex: defina Memória Máxima para `4096` ou `6144` MB).

#### 🔴 Caso 2: Incompatibilidade de Mod ou Dependências Ausentes
- **O que procurar:** `Mixin transformation failed`, `DependencyResolutionException`, ou linhas como `Requires mod 'fabric' (version X or later), but only version Y is installed`.
- **Explicação:** Um dos seus mods requer outro mod (dependência) que está ausente, ou dois mods são incompatíveis entre si.
- **Como corrigir:** Leia a linha de erro cuidadosamente. Geralmente nomeia o mod ausente. Baixe e coloque o arquivo jar do mod ausente na pasta `mods`, ou atualize o mod conflitante para uma versão compatível.

#### 🔴 Caso 3: Versão Java Incompatível
- **O que procurar:** `java.lang.UnsupportedClassVersionError: ... has been compiled by a more recent version of the Java Runtime`.
- **Explicação:** Você está executando uma versão do Minecraft ou modpack com uma versão Java incompatível (ex: usando Java 8 para Minecraft 1.20).
- **Como corrigir:** Abra as configurações da instância, vá para a seção **Java**, e clique em **Instalar Java** para baixar a versão Java recomendada para aquela versão específica do Minecraft.

#### 🔴 Caso 4: Crash do Driver da Placa de Vídeo
- **O que procurar:** `GLFW error 65542: WGL: The driver does not seem to support OpenGL` ou `Pixel format not accelerated`.
- **Explicação:** Os drivers da sua placa de vídeo estão desatualizados, ausentes, ou o jogo está rodando na GPU integrada do CPU em vez da GPU dedicada.
- **Como corrigir:** Atualize os drivers gráficos para a versão mais recente no site oficial do fabricante (NVIDIA, AMD ou Intel). Para notebooks, certifique-se de que o launcher está rodando na GPU de alto desempenho nas configurações do sistema.

---

### ❓ O Que Fazer se Não Conseguir Entender os Logs?

Se você olhou pelos logs/relatórios e ainda não sabe o que está causando o crash, não se preocupe! A comunidade do XMCL está aqui para ajudar em várias plataformas:

#### 1. Entre no Nosso Servidor Discord Oficial
- Obtenha ajuda imediata de desenvolvedores e jogadores experientes.
- Entre em: **[Link do Servidor Discord](https://discord.gg/W5XVwYY7GQ)**
- **Como perguntar:** Vá para o canal **#feedback-and-idea** e faça upload do seu relatório de diagnóstico ou arquivo de log de crash.
- Veja esta ilustração do nosso canal de feedback:
  
  <img src="/guidephoto/Discord-feedback.gif" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

#### 2. Pergunte no Reddit
- Você pode postar seus problemas e perguntar à comunidade no nosso subreddit:
- Visite: **[Subreddit r/XMCL](https://www.reddit.com/r/XMCL/)**

#### 3. Abra uma Issue no GitHub
- Se você acredita ter encontrado um bug no próprio launcher, pode registrar um relatório de bug.
- Envie aqui: **[Issues do XMCL no GitHub](https://github.com/Voxelum/x-minecraft-launcher/issues)**
- Cole o conteúdo do seu relatório ou logs dentro da descrição da issue para que os desenvolvedores possam depurá-la.
