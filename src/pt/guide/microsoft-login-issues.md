# Problemas de Login Microsoft, Modo Demo & Licenciamento

Este guia explica como fazer login na sua conta Microsoft no XMCL, o que fazer se você encontrar o erro **"failed to exchange Xbox token"**, por que o Minecraft pode iniciar no **Modo Demo**, e como jogar sem uma licença paga usando logins alternativos.

---

## 🔑 1. Fazendo Login com uma Conta Microsoft

Para entrar e jogar com sua licença oficial do Minecraft, siga estes passos:

1. Clique no seu perfil/avatar (ou **"Gerenciar Conta"**) no canto superior direito para abrir o Gerenciador de Contas:

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. Clique em **"Adicionar Conta"**, escolha **Microsoft**, e prossiga com o login:

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **Entrar via Código de Dispositivo:**  
> Se não quiser digitar sua senha dentro do launcher, marque **"Login por Código de Dispositivo"**. O XMCL mostrará um código; basta visitar `microsoft.com/link` no seu navegador, digitar o código e confirmar o login.

---

## 🔍 2. Como Funciona a Autenticação Microsoft

Ao fazer login, o launcher deve verificar sua identidade em três camadas de autenticação separadas:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 Handshake de Autenticação:</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">PASSO 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Login Microsoft</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Verifica a Senha</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">PASSO 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Serviços Xbox Live</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Obtém o Gamertag</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ Falha Aqui</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">PASSO 3 (Exchange)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Token do Minecraft</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Verifica a Licença</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    Se o Passo 3 falhar, o login será rejeitado com <strong>"failed to exchange Xbox token"</strong>, ou o jogo iniciará no <strong>Modo Demo</strong>. Ambos os sintomas significam que os servidores de autenticação da Mojang não conseguiram verificar uma licença válida do Minecraft na sua conta Microsoft.
  </p>
</div>

---

## 🛠 3. Solucionando Problemas de Login Microsoft & Modo Demo

Se você possui o jogo mas encontra falhas de login ou a tela de Demo:

### Causa A: Sem Licença do Minecraft nesta Conta Microsoft

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Os servidores da Mojang não encontraram o jogo comprado</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Este é o motivo mais comum. Você fez login com sucesso, mas a Mojang informa que esta conta específica não possui o Minecraft Java Edition.</p>
  </div>
</div>

#### Como corrigir:
* **Verifique a Compra:** Faça login em [Minecraft.net](https://www.minecraft.net/) usando sua conta Microsoft e verifique se você vê a opção de download em vez de uma solicitação de compra.
* **Verifique o Status do Game Pass:** Se jogar via **Xbox Game Pass**, certifique-se de que sua assinatura está ativa e que você está fazendo login com a conta Microsoft exata associada à assinatura ativa.
* **Verifique o Email:** Certifique-se de não estar fazendo login com uma conta Microsoft diferente (como um email escolar ou corporativo) em vez da conta pessoal que possui a compra.

---

### Causa B: Perfil Xbox Live Ausente

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Conta Microsoft não ativada no Xbox Live</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Você criou uma conta Microsoft mas nunca inicializou os serviços do Xbox Live. Os servidores de login não conseguem gerar um token de acesso porque a conta não tem um Gamertag único.</p>
  </div>
</div>

#### Como corrigir:
1. Acesse o site oficial [Xbox.com](https://www.xbox.com/).
2. Clique em **Entrar** no canto superior direito.
3. Se solicitado a criar um perfil Xbox, **aceite o contrato e configure um Gamertag** (apelido único).
4. Aguarde 1-2 minutos para os servidores sincronizarem, depois abra o XMCL e tente fazer login novamente.

---

### Causa C: Bloqueios de Rede e Restrições de Roteamento do Provedor

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Conexão bloqueada com servidores Mojang ou Microsoft</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Devido a bloqueios regionais do provedor, firewalls locais ou configurações de DNS corrompidas, seu PC não consegue estabelecer conexão com `api.minecraftservices.com` ou servidores de login do Xbox Live.</p>
  </div>
</div>

#### Como corrigir:
* **Use uma VPN:** Conecte-se a uma VPN estável antes de tentar fazer login. Isso contorna o throttling do provedor e caminhos de roteamento bloqueados.
* **Configure o Proxy dentro do XMCL:**
  1. Abra as **Configurações** (ícone de engrenagem na barra lateral esquerda).
  2. Navegue até **Configurações de Rede**.
  3. Insira o endereço do seu servidor proxy ativo (protocolos HTTP, HTTPS e SOCKS5 são suportados).
* **Redefina seu arquivo hosts:** Certifique-se de que não há regras redirecionando `mojang.com` ou `minecraftservices.com` no arquivo hosts do sistema.

---

## 🆓 4. Jogando Sem Licença (Logins Alternativos)

Se você não possui uma cópia licenciada do Minecraft, pode jogar usando sistemas alternativos de login. O XMCL inclui um **Modo Desenvolvedor** para permitir jogo offline e serviços de autenticação de terceiros.

### Como Ativar o Modo Desenvolvedor:
1. Vá em **Configurações** (ícone de engrenagem na barra lateral esquerda).
2. Encontre a opção **"Modo Desenvolvedor"** e ative-a:

   ![Ativando o Modo Desenvolvedor](/guidephoto/developer-mode.png)

Após ativar, você verá opções adicionais de autenticação no Gerenciador de Contas ao adicionar uma conta:

### 🟢 Modo Offline
- Jogue **localmente** sem se conectar aos servidores da Mojang.
- Simplesmente escolha qualquer nome de usuário e comece a jogar em single-player ou mundos multijogador locais.

### 🟡 Littleskin
- Um servidor de autenticação e skin gratuito da comunidade.
- Permite usar skins personalizadas sem uma licença paga do Minecraft.
- Website: [https://littleskin.cn](https://littleskin.cn)

### 🔵 Ely.by
- Um banco de dados popular de skins e contas de terceiros.
- Suporta skins personalizadas, capas e é compatível com muitos servidores da comunidade.
- Website: [https://ely.by](https://ely.by)
