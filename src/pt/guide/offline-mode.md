# Jogar sem Licença (Modo Offline e Contas Alternativas)

O XMCL é um inicializador de código aberto projetado para respeitar a liberdade dos jogadores. Se você não possui uma licença paga de Minecraft Java Edition no momento, ou se deseja testar modpacks offline sem se conectar aos servidores da Mojang, o XMCL oferece suporte completo ao **Modo Offline** e a redes comunitárias de skins.

---

## ⚙️ 1. Ativar o Modo Desenvolvedor

Para desbloquear contas offline e servidores de skins de terceiros, ative o **Modo Desenvolvedor** nas configurações:

1. Abra **Configurações** (ícone de engrenagem no canto inferior esquerdo).
2. Localize a opção **«Modo Desenvolvedor»** e **ATIVE-A**:

   ![Ativar Modo Desenvolvedor](/guidephoto/developer-mode.png)

Após a ativação, o Gerenciador de Contas exibirá opções adicionais de provedores de autenticação.

---

## 👥 2. Tipos de Contas Disponíveis

<div style="display: flex; flex-direction: column; gap: 14px; margin: 24px 0;">

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟢</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Modo Offline (Conta Local)</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Jogue sem conexão com servidores de autenticação. Basta inserir o nome de usuário desejado. Ideal para modo um jogador, testes locais de modpacks, partidas em LAN e servidores comunitários configurados com <code>online-mode=false</code>.
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟡</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">LittleSkin</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Servidor gratuito de autenticação e skins da comunidade com suporte a capas personalizadas.  
      Site: <a href="https://littleskin.cn" target="_blank" rel="noopener noreferrer">https://littleskin.cn</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🔵</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Ely.by</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Rede global de autenticação e skins com catálogo em nuvem e capas HD.  
      Site: <a href="https://ely.by" target="_blank" rel="noopener noreferrer">https://ely.by</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🌐</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Servidor Authlib-Injector / Yggdrasil Personalizado</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Conecte-se a qualquer servidor privado de autenticação por meio da URL padrão da API Yggdrasil.
    </p>
  </div>

</div>

---

## 🎮 3. Adicionar e Alternar Contas

1. Clique no ícone de perfil no canto superior direito para abrir o **Gerenciador de Contas**.
2. Clique em **«Adicionar Conta»**.
3. Escolha **Offline**, **LittleSkin**, **Ely.by** ou **Servidor Personalizado**.
4. Insira seu nome de usuário ou credenciais.
5. Clique na conta adicionada para defini-la como **Ativa**.

---

## 💡 4. Comparativo de Tipos de Conta

| Funcionalidade | Conta Microsoft (Oficial) | Conta Offline | LittleSkin / Ely.by |
| :--- | :--- | :--- | :--- |
| **Custo** | Paga (Licença Minecraft) | Gratuita | Gratuita |
| **Servidores Oficiais (Hypixel etc.)** | ✅ Sim | ❌ Não | ❌ Não |
| **Servidores Comunitários / LAN / P2P** | ✅ Sim | ✅ Sim (`online-mode=false`) | ✅ Sim |
| **Um Jogador e Modpacks** | ✅ Sim | ✅ Sim | ✅ Sim |
| **Skins e Capas Personalizadas** | ✅ Skins oficiais Mojang | ⚠️ Skin padrão | ✅ Skins e capas da rede |

---

## ❓ Perguntas Frequentes

### Posso entrar no Hypixel com uma conta Offline?
Não. Servidores públicos oficiais verificam a identidade dos jogadores diretamente com a Mojang (`online-mode=true`), o que requer uma conta Microsoft com a Java Edition comprada.

### Como jogar com amigos sem licença?
Você pode usar o recurso integrado **P2P Multiplayer / Compartilhamento LAN** no XMCL ou conectar-se a um servidor comunitário com `online-mode=false`.

👉 **[Problemas no login oficial da Microsoft? Acesse nosso guia de solução de problemas](./microsoft-login-issues)**
