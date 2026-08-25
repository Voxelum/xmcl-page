# Guia do XMCL Together: Multijogador em Nuvem, Hospedagem e Solução de Pagamentos

O **XMCL Together** é uma plataforma de serviços em nuvem criada especificamente para o XMCL. Ela resolve as maiores dificuldades ao jogar Minecraft com mods: **jogar com amigos através de firewalls restritivos e CGNAT, hospedar servidores em nuvem econômicos sem pagar pelo tempo inativo e contar com IA para resolver erros.**

---

## 🌟 1. O que é o XMCL Together?

![Visão geral do XMCL Together](/guidephoto/xmcl%20together.png)

Jogar Minecraft modificado com amigos costuma ser complicado devido a conexões sem IP público (CGNAT), encaminhamento manual de portas no roteador e planos mensais caros (\$20–\$40) que cobram mesmo com o servidor desligado.

O XMCL Together atua em três recursos fundamentais:

### 1. Rede global de relay de alta velocidade (300+ nós Cloudflare)
Em partidas P2P LAN, se a conexão direta for bloqueada, o Together redireciona o tráfego automaticamente através dos **servidores de relay da Cloudflare**, oferecendo baixo ping sem mexer no roteador.

### 2. Servidores em nuvem «Pay-As-You-Play» (Pague pelo uso)
Esqueça mensalidades fixas para servidores desligados:
* **Taxa base baixa**: Mantém seu mundo, IP do servidor e mods salvos permanentemente.
* **Cobrança apenas online**: Pague apenas pelas horas reais em que estiver jogando (\$0.06 – \$0.12 / hora).
* **Pausa instantânea**: Pause o servidor ao terminar de jogar e os custos serão interrompidos imediatamente.

### 3. Copiloto de diagnóstico com IA integrado
Todos os planos incluem assistência por IA para analisar relatórios de crash, identificar conflitos de mods e recomendar parâmetros ideais de memória JVM.

---

## 📊 2. Visão Geral dos Planos

| Plano | Preço | Público Recomendado | Especificações |
| :--- | :--- | :--- | :--- |
| 🏠 **Together Home** | **\$2.99** / mês | Hospedar no próprio PC | 20 GB de tráfego relay + Assistente de IA |
| 🏕️ **Together Camp** | **\$4** / mês + **\$0.06** / h | 2–4 Amigos (Vanilla+ / mods leves) | 4 GiB RAM, 2/4 vCPU, 32 GiB NVMe |
| 🏡 **Together Lodge** *(Recomendado)* | **\$6** / mês + **\$0.09** / h | 4–6 Amigos (Modpacks pesados) | 6 GiB RAM, 3/6 vCPU, 48 GiB NVMe |
| 🏰 **Together Village** | **\$8** / mês + **\$0.12** / h | 6–10 Amigos (Grandes modpacks técnicos) | 8 GiB RAM, 4/8 vCPU, 64 GiB NVMe |

👉 **[Acessar o portal oficial do Together](/pt/together/)**

---

## 💳 3. Solução de Erros de Pagamento e Restrições Regionais

Ao tentar assinar um plano ou recarregar saldo, pode ocorrer um erro na finalização:

![Solução de erro de pagamento](/guidephoto/errortoghether1.png)

### Por que o pagamento falha?
1. **Restrições regionais do gateway de pagamento**: Nosso processador de pagamentos internacional (Creem) utiliza filtros antifraude rigorosos. Se o seu IP for de uma região não suportada, a transação será bloqueada.
2. **Bloqueio bancário para compras internacionais**: Seu banco pode bloquear transações online no exterior ou conversões automáticas de moeda.
3. **Bloqueio de scripts 3D Secure**: Alguns provedores de internet podem bloquear a janela de confirmação bancária.

---

### 🛠️ Como resolver o erro de pagamento:

#### Passo 1: Conectar-se usando uma VPN estável
Se a página de pagamento não carregar ou recusar a operação:
1. Ative uma **VPN** confiável e conecte-se a uma região suportada (**como Alemanha, Reino Unido, Estados Unidos ou outro país da UE**).
2. Atualize a [página de pagamento do XMCL Together](/pt/together/) com a VPN ativa.
3. Conclua o pagamento com cartão.

#### Passo 2: Habilitar compras internacionais e 3D Secure
* No aplicativo do seu banco, verifique se as **«Compras internacionais online»** estão ativas e se os limites são suficientes.
* Garanta que a verificação 3D Secure esteja funcionando.

#### Passo 3: Utilizar o modo anônimo
Limpe o cache ou abra uma janela privada com a VPN ativada.

---

## 🛡️ 4. Segurança, Privacidade e Reembolsos

* **Padrão PCI-DSS**: O XMCL nunca armazena números de cartão de crédito nem dados bancários.
* **Garantia de reembolso do saldo em 7 dias**: Conforme os [Termos de Serviço](/pt/together/terms), o saldo não utilizado pode ser reembolsado dentro de 7 dias após o depósito.
* **Conformidade de Privacidade**: Total conformidade com o [GDPR europeu](/pt/together/privacy). Logs técnicos são mantidos por no máximo 90 dias.

---

## 💬 5. Precisa de Suporte?

Se ainda tiver dúvidas sobre pagamento ou assinatura:
* 💬 **Discord oficial**: [discord.gg/W5XVwYY7GQ](https://discord.gg/W5XVwYY7GQ)
* 📧 **E-mail de suporte**: `cijhn@hotmail.com`
