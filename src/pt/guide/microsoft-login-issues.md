# Login da Microsoft, Bedrock vs Java e Problemas de Licença

Este guia detalha o funcionamento da autenticação da Microsoft no XMCL, por que ocorrem erros de login (como **«failed to exchange Xbox token»** ou não comprado), por que o jogo pode iniciar no **Modo de Demonstração (Demo Mode)**, a diferença fundamental entre **Bedrock Edition (celular/consoles)** e **Java Edition (PC)**, e como resolver problemas na conta.

---

## 🔑 1. Entrar com uma Conta Microsoft

Para entrar com sua licença oficial de Minecraft, siga estas etapas:

1. Clique no seu avatar (ou **«Gerenciar conta»**) no canto superior direito para abrir o Gerenciador de Contas:

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. Clique em **«Adicionar Conta»**, selecione **Microsoft** e prossiga com o login:

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **Login via Código de Dispositivo (Device Code):**  
> Se preferir não digitar sua senha no inicializador, marque **«Login via Código de Dispositivo»**. O XMCL gerará um código de 8 dígitos; acesse [microsoft.com/link](https://microsoft.com/link) no navegador para confirmar.

---

## 🔍 2. Processo de Verificação em 3 Etapas da Microsoft

Ao fazer login, o inicializador passa por três estágios independentes de verificação:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 As 3 etapas de verificação:</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">PASSO 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">OAuth Microsoft</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Verifica email e senha</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">PASSO 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Serviços Xbox Live</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Obtém a Gamertag</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ Falha frequente</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">PASSO 3 (Troca)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Licença Mojang Java</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Verifica posse no PC</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    Se o passo 3 falhar, o login retornará <strong>«failed to exchange Xbox token»</strong> ou o jogo iniciará no <strong>Modo de Demonstração</strong>. Isso indica que os servidores da Mojang não encontraram uma licença ativa de <strong>Minecraft: Java Edition</strong> associada a esta conta Microsoft.
  </p>
</div>

---

## 🛑 3. A confusão mais comum: Bedrock Edition vs. Java Edition

**O XMCL é um inicializador exclusivo para Minecraft: Java Edition (PC com Windows, macOS e Linux).**

Muitos jogadores adquirem o jogo no celular ou console e tentam entrar no XMCL:

| Plataforma da compra | Edição adquirida | Compatível com XMCL? | Explicação |
| :--- | :--- | :--- | :--- |
| 📱 **Celular / Tablet (iOS / Android / Google Play)** | Bedrock Edition | ❌ Não | Compras no celular não concedem acesso ao Java no PC. |
| 🎮 **Console PlayStation 4 / 5** | Bedrock Edition | ❌ Não | Compras na PSN são exclusivas do console. |
| 🎮 **Console Xbox One / Series X\|S** | Bedrock Edition | ❌ Não | Compras de console não se transferem para o Java de PC. |
| 🕹️ **Nintendo Switch** | Bedrock Edition | ❌ Não | Compras na Nintendo eShop são válidas apenas no Switch. |
| 💻 **PC (Pacote Minecraft: Java & Bedrock)** | Java & Bedrock | ✅ **Sim** | Totalmente compatível! |
| 🟢 **Assinatura PC Game Pass / Ultimate** | Java & Bedrock | ✅ **Sim** | Compatível enquanto a assinatura estiver ativa. |

> ⚠️ **Importante:**  
> Se você comprou Minecraft apenas no **celular**, **PlayStation**, **Xbox** ou **Nintendo Switch**, os servidores da Mojang indicarão que sua conta **não possui a Java Edition**.  
> Para jogar a edição oficial de Java no PC, é necessário adquirir o pacote **«Minecraft: Java & Bedrock Edition for PC»** no [Minecraft.net](https://www.minecraft.net/) ou possuir uma assinatura ativa do **PC Game Pass**.

---

## 🛠 4. Solução de Problemas de Login

### Causa A: Nenhuma licença Java Edition nesta conta

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Mojang não encontra licença de PC</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">A conta Microsoft foi autenticada, mas o banco de dados da Mojang não possui registro de compra da Java Edition.</p>
  </div>
</div>

#### Solução:
* **Verificar no Minecraft.net:** Acesse [Minecraft.net](https://www.minecraft.net/). Se aparecer «Comprar agora» em vez do seu nome de perfil Java, a conta não possui o jogo.
* **Histórico de pedidos:** Consulte [account.microsoft.com/billing/orders](https://account.microsoft.com/billing/orders) para checar qual edição foi comprada.
* **Verificar o email:** Verifique se não está usando um email escolar ou de trabalho em vez da conta pessoal correta.
* **Status do Game Pass:** Confirme se sua assinatura está ativa e contempla o PC.

---

### Causa B: Perfil Xbox Live ausente ou não configurado

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">A conta não possui Gamertag do Xbox</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Contas recém-criadas na Microsoft muitas vezes não possuem um perfil do Xbox Live ativo.</p>
  </div>
</div>

#### Solução:
1. Abra [Xbox.com](https://www.xbox.com/) no navegador.
2. Clique em **Entrar** no canto superior direito.
3. Aceite os termos e crie uma **Gamertag**.
4. Aguarde 1 a 2 minutos e tente entrar novamente no XMCL.

---

### Causa C: Bloqueios de rede e DNS

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Conexão bloqueada com servidores Mojang / Xbox</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Regras de firewall ou instabilidades de DNS impedem o contato com <code>api.minecraftservices.com</code>.</p>
  </div>
</div>

#### Solução:
* **Usar uma VPN:** Conecte-se a uma VPN estável antes de efetuar o login.
* **Configurar proxy no XMCL:** Em **Configurações** -> **Configurações de Rede**, preencha os dados do seu proxy (HTTP/HTTPS/SOCKS5).
* **Verificar arquivo hosts:** Garanta que não existam regras antigas de redirecionamento de `mojang.com` no arquivo hosts do sistema.

---

## 🎮 Não possui uma licença paga?

Se você não tem uma licença oficial no momento, pode jogar utilizando o **Modo Offline** ou redes comunitárias de skins.

👉 **[Guia completo: Jogar sem licença (Modo offline e contas alternativas)](./offline-mode)**
