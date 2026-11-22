---
title: Política de Privacidade do XMCL Together
description: Como o XMCL Together trata dados de conta, cobrança, IA e serviços multijogador em conformidade com a LGPD (Brasil), o RGPD (Portugal/UE) e as leis internacionais de proteção de dados.
---

# Política de Privacidade do XMCL Together

**Data de vigência: 22 de novembro de 2026 · Versão: P4-2026-11-22**

Esta política explica como **CI010**, atuando como operador individual sob os nomes Voxelum e XMCL ("XMCL Together", "nós"), trata informações quando você utiliza uma conta XMCL Together, serviços pagos ou recursos online relacionados em [xmcl.app](https://xmcl.app). Ela não rege serviços independentes que você decida conectar, como Microsoft, Mojang, servidores de autenticação de terceiros, Modrinth ou CurseForge.

---

## 1. Informações que Tratamos

### Site do Together e Telemetria do Serviço
As páginas e serviços do Together utilizam o Microsoft Azure Application Insights configurado em **modo sem cookies** (`disableCookiesUsage: true`), hospedado no **Azure Ásia Oriental (Hong Kong)**, para registrar visualizações anônimas de páginas, ações do serviço, atributos aproximados de rede/dispositivo e eventos de diagnóstico. O site armazena apenas um único cookie local estritamente necessário (`nf_lang`) para sua preferência de idioma. A telemetria do launcher gratuito de código aberto é regida separadamente pelo [Aviso de Privacidade do Projeto Open-Source XMCL](../privacy).

### Contas e Autenticação
Quando você cria ou utiliza uma conta XMCL Together, tratamos identificadores de conta, identificadores do provedor de autenticação, metadados de sessão e de tokens de atualização (refresh tokens), escopos concedidos, carimbos de data/hora e telemetria de segurança usada para prevenir ataques de repetição (replay) ou abuso de conta. Nós **nunca** recebemos nem armazenamos senhas da sua conta Microsoft ou de outros provedores terceiros.

### Cobrança e Assinaturas
Tratamos saldos de conta, informações de moeda e tarifas, pedidos, estado da assinatura, períodos de franquia, totais de uso, reembolsos, disputas, identificadores de idempotência e registros de auditoria. A **Waffo Pancake** processa diretamente os dados de cartão de pagamento e finalização de compra. O XMCL recebe apenas referências de transação, status, valor, moeda e eventos webhook assinados, e nunca recebe nem armazena números completos de cartão ou códigos de segurança (CVC/CVV).

### Recursos de Inteligência Artificial (IA)
Quando você utiliza um recurso de IA, tratamos o comando (prompt), o conteúdo da conversa, o modelo selecionado e o contexto do launcher que você optar por fornecer (como nome da instância, versões do jogo e do loader, página selecionada ou caminho da instância local). As solicitações são transmitidas aos nossos provedores de IA configurados, atualmente **Agnes** e, quando necessário, **DeepSeek**. Medimos a contagem de tokens e o consumo ponderado da franquia para fins de faturamento e prevenção de abusos. Não utilizamos seus prompts nem suas respostas para treinar modelos próprios do XMCL.

> **Aviso sobre Provedores de IA Terceirizados:** Os provedores externos de IA (Agnes, DeepSeek) processam o conteúdo das solicitações segundo suas próprias políticas de privacidade e termos. Configuramos as integrações para solicitar modos de "não treinamento" ("no-training") sempre que suportados, mas não podemos garantir as práticas internas de tratamento de dados de provedores de API externos. Não envie dados pessoais sensíveis, senhas ou informações confidenciais em prompts de IA.

### Multijogador, Sinalização e TURN (Conectividade P2P)
Os recursos Together e RTC tratam identificadores de conta e sessão, metadados de roteamento de sala/par, endereços IP, carimbos de data/hora, identificadores de credenciais TURN e uso agregado de tráfego de entrada/saída. A **Cloudflare** fornece a infraestrutura de borda, sinalização, TURN e análise de tráfego.

> **Consentimento para Exposição de IP em P2P:** A conectividade ponto a ponto (P2P) revela inerentemente o seu endereço IP público ao outro participante da sessão multijogador. Ao utilizar recursos P2P, você reconhece e consente expressamente com essa divulgação técnica necessária para estabelecer a conexão direta. A sinalização do XMCL roteia apenas metadados de conexão e não grava voz, vídeo ou conteúdo de jogabilidade do Minecraft.

### Suporte e Comunicações com a Comunidade
Se você entrar em contato conosco, tratamos os dados de contato, referências de conta ou transação, diagnósticos e o conteúdo da mensagem enviada. Não envie senhas, tokens de acesso, dados completos de cartão de pagamento ou informações pessoais sensíveis não relacionadas.

---

## 2. Finalidades e Bases Legais

Tratamos informações para:
- fornecer, autenticar, proteger e solucionar problemas dos serviços XMCL Together;
- operar assinaturas, saldos, franquias, pagamentos, reembolsos e suporte ao cliente;
- rotear conexões multijogador e medir o consumo de largura de banda TURN;
- gerar respostas de IA solicitadas e contabilizar franquias de IA;
- prevenir fraudes, ataques de replay, abusos e incidentes de segurança;
- cumprir obrigações contábeis, fiscais, de redes de pagamento, legais e de resolução de disputas.

**Bases Legais (LGPD — Lei nº 13.709/2018 / RGPD — Portugal e UE / UK GDPR / Normas Internacionais):**
- **Execução de contrato (Art. 7º, V da LGPD / Art. 6.º, n.º 1, b) do RGPD):** fornecer contas, assinaturas, recursos de IA e multijogador solicitados por você;
- **Cumprimento de obrigação legal ou regulatória (Art. 7º, II da LGPD / Art. 6.º, n.º 1, c) do RGPD):** reter registros contábeis, fiscais e de auditoria de pagamentos;
- **Interesses legítimos (Art. 7º, IX da LGPD / Art. 6.º, n.º 1, f) do RGPD):** proteger a infraestrutura, prevenir fraudes/abusos e realizar diagnósticos operacionais sem cookies;
- **Consentimento expresso (Art. 7º, I da LGPD / Art. 6.º, n.º 1, a) do RGPD):** prompts opcionais de IA, exposição de IP em P2P e transferências internacionais quando exigido por lei.

---

## 3. Suboperadores e Transferências Internacionais de Dados

Compartilhamos apenas o estritamente necessário com os seguintes provedores de infraestrutura e serviços:

| Destinatário | Finalidade e Categorias de Dados | Regiões de Processamento | Política de Privacidade |
| :--- | :--- | :--- | :--- |
| **Waffo Pancake** | Checkout de pagamento, revisão antifraude, reembolsos, webhooks (metadados de transação e pagamento) | Global / Estados Unidos / Singapura | Fornecida no checkout |
| **Cloudflare** | Workers, CDN, proteção DDoS, sinalização WebRTC, relay TURN (IP, sessão e metadados de tráfego) | Borda Global / Estados Unidos | [Privacidade Cloudflare](https://www.cloudflare.com/privacypolicy/) |
| **Microsoft Azure** | Hospedagem, banco de dados, Application Insights sem cookies (dados de conta, cobrança e diagnóstico) | Hong Kong (Ásia Oriental), Estados Unidos, UE | [Privacidade Microsoft](https://privacy.microsoft.com/privacystatement) |
| **Vercel e GitHub** | Entrega do site, lançamentos, suporte a problemas e segurança | Estados Unidos / Borda Global | [Vercel](https://vercel.com/legal/privacy-policy) / [GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Agnes e DeepSeek** | Geração de respostas de IA (prompts, contexto da conversa, parâmetros do modelo) | Global / China (RPC) / Estados Unidos | Políticas dos provedores |

- **Salvaguardas de Transferência Internacional:** Transferências para fora do Brasil, do EEE, do Reino Unido ou da Suíça baseiam-se em Cláusulas Contratuais Padrão da UE (SCCs), no IDTA do Reino Unido, nas hipóteses do Art. 33 da LGPD, em criptografia TLS em trânsito e em rigorosa minimização de dados.
- **Consequências da Recusa:** O fornecimento de dados de conta, pagamento e roteamento internacional é necessário para operar o XMCL Together. Caso recuse esse tratamento ou a transferência internacional, você ainda poderá utilizar o launcher XMCL gratuito e de código aberto offline, mas os recursos hospedados do XMCL Together não estarão disponíveis.
- **Não Venda de Dados:** Nós **não** vendemos informações pessoais nem as compartilhamos para publicidade comportamental entre contextos.

---

## 4. Prazos de Retenção

Aplicamos limites estritos de retenção:
- **Telemetria operacional, métricas de uso de IA e medições de TURN:** retidos por, no **máximo, 90 dias**, sendo então excluídos permanentemente ou anonimizados de forma irreversível.
- **Dados de conta e sessão:** retidos enquanto a conta estiver ativa, acrescidos de **30 dias** após a exclusão da conta para fins de recuperação e resolução de disputas.
- **Lançamentos contábeis, eventos de pagamento, reembolsos e registros de auditoria:** retidos por **5 a 7 anos** para cumprir obrigações legais contábeis, fiscais e de redes de pagamento, mesmo após o encerramento da conta.
- Backups criptografados são descartados conforme cronogramas regulares de rotação.

---

## 5. Suas Escolhas e Direitos Legais

### Brasil (LGPD — Art. 18 da Lei nº 13.709/2018)
Você tem direito a:
- confirmar a existência de tratamento e acessar seus dados pessoais;
- corrigir dados incompletos, inexatos ou desatualizados;
- solicitar anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD;
- solicitar a portabilidade dos dados e a eliminação dos dados tratados com base no consentimento;
- obter informações sobre as entidades com as quais compartilhamos dados e revogar o consentimento a qualquer momento;
- apresentar petição ou reclamação à **ANPD (Autoridade Nacional de Proteção de Dados)** em [gov.br/anpd](https://www.gov.br/anpd).

### Portugal, UE / EEE (RGPD) e Outros Direitos Internacionais
Você pode:
- desativar recursos online opcionais ou desconectar serviços de terceiros;
- gerenciar o cookie `nf_lang` no seu navegador;
- cancelar a renovação do Together Home a qualquer momento pela interface da conta (com efeito ao final do período pago atual);
- solicitar acesso, retificação, apagamento («direito a ser esquecido»), limitação, portabilidade ou opor-se ao tratamento, bem como retirar o consentimento a qualquer momento;
- apresentar reclamação junto da autoridade de controlo competente — em Portugal, a **CNPD (Comissão Nacional de Proteção de Dados)** em [cnpd.pt](https://www.cnpd.pt); no Reino Unido, o **ICO** em [ico.org.uk](https://ico.org.uk).

### Direitos de Privacidade na Califórnia e Estados dos EUA (CCPA / CPRA)
O XMCL não vende informações pessoais nem as compartilha para publicidade comportamental e respeita os direitos de acesso, correção, exclusão e não discriminação aplicáveis.

---

## 6. Segurança

Implementamos sessões com escopo limitado, controle de acesso de privilégio mínimo, criptografia TLS em trânsito, webhooks de pagamento assinados, proteção contra replay, isolamento de segredos e monitoramento contínuo. Nenhum sistema online é 100% imune a riscos; você é responsável por proteger seu dispositivo, suas sessões e suas credenciais de terceiros.

---

## 7. Crianças, Adolescentes e Requisitos de Idade

- **Serviços Pagos e Contas:** Contas e recursos pagos do XMCL Together exigem que você tenha pelo menos **18 anos de idade** (ou a maioridade civil aplicável na sua jurisdição), ou possua **consentimento verificável de um dos pais ou responsável legal**.
- **Consentimento Digital (Brasil, Portugal e EUA):** Não coletamos intencionalmente dados pessoais de crianças sem o consentimento específico e verificável dos pais ou responsáveis legais, observando o Art. 14 da LGPD (Brasil), a idade de consentimento digital de **13 anos** em Portugal (Lei n.º 58/2019), 13–16 anos na UE e 13 anos nos EUA/Reino Unido (COPPA). Pais ou responsáveis podem contatar [cijhn@hotmail.com](mailto:cijhn@hotmail.com) para exclusão imediata.

---

## 8. Alterações, Idioma Prevalente e Isenção de Responsabilidade

- **Alterações:** Publicaremos atualizações nesta página com nova data de vigência e versão, fornecendo aviso prévio para alterações substanciais sempre que exigido por lei.
- **Idioma Prevalente:** Em caso de divergência entre uma versão traduzida e a versão em inglês, prevalece a versão em inglês na medida permitida pela legislação local imperativa.
- **Aviso sobre Minecraft:** O XMCL é um projeto independente e não é afiliado, patrocinado ou endossado pela Microsoft Corporation ou pela Mojang Studios.

---

## 9. Contato

**Operador / Contato de Privacidade (CI010):**
- Solicitações gerais, cobrança, reembolsos, assuntos jurídicos e privacidade: [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- Relatos de segurança: [Relato privado de vulnerabilidades no GitHub](https://github.com/voxelum/x-minecraft-launcher/security)
- Suporte da comunidade: [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

Inclua apenas a referência mínima de conta ou transação necessária para localizar seu registro. Podemos solicitar verificação de titularidade da conta antes de atender à solicitação.
