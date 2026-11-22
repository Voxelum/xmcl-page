---
title: Aviso de Privacidade do Projeto Open-Source XMCL
description: Aviso de privacidade do site e do launcher open-source XMCL, em conformidade com a LGPD (Brasil), o RGPD (Portugal/UE), o UK GDPR e as normas internacionais de proteção de dados.
---

# Aviso de Privacidade do Projeto Open-Source XMCL

**Data de vigência: 22 de novembro de 2026 · Versão: OP3-2026-11-22**

Este aviso abrange o site público do XMCL ([xmcl.app](https://xmcl.app)) e o launcher gratuito e de código aberto XMCL. Ele não abrange recursos pagos, contas, cobrança, IA ou serviços de sinalização/TURN para multijogador fornecidos pelo XMCL Together, que são regidos separadamente pela [Política de Privacidade do XMCL Together](./together/privacy).

---

## 1. Controlador de Dados e Contato

O XMCL é um projeto independente de código aberto operado por **CI010** e pela comunidade de colaboradores Voxelum.
- **Privacidade e Assuntos Jurídicos (Encarregado / Contato):** [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- **Repositório de Código-Fonte:** [github.com/voxelum/x-minecraft-launcher](https://github.com/voxelum/x-minecraft-launcher)
- **Relato de Vulnerabilidades de Segurança:** [GitHub Security Advisories](https://github.com/voxelum/x-minecraft-launcher/security)
- **Suporte da Comunidade:** [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

---

## 2. Informações Tratadas e Minimização de Dados

O XMCL segue princípios rigorosos de minimização e necessidade de dados:

### Site Público (xmcl.app)
- **Análise Agregada sem Cookies:** Utilizamos o Microsoft Azure Application Insights configurado em **modo sem cookies** (`disableCookiesUsage: true`), com ingestão hospedada no **Microsoft Azure Ásia Oriental (Hong Kong)**, para registrar visualizações anônimas de páginas, seleções de download, atributos gerais de rede/dispositivo e user-agents do navegador. Nenhum cookie de análise ou rastreamento entre sites é gravado no seu dispositivo.
- **Cookie Estritamente Necessário:** Armazenamos apenas um único cookie funcional local (`nf_lang`), estritamente necessário para lembrar sua preferência de idioma da interface. Não utilizamos cookies de marketing, publicidade ou rastreamento comportamental de terceiros.

### Launcher de Código Aberto
- **Telemetria e Diagnósticos Opcionais (Opt-in):** A telemetria de diagnóstico vem **desativada por padrão**. Somente se você ativar expressamente a telemetria nas configurações do launcher (Opt-in), o launcher poderá tratar:
  - Um identificador pseudônimo de instalação/dispositivo gerado aleatoriamente;
  - Eventos do ciclo de vida do aplicativo (inicialização do jogo, códigos de saída normais/de erro, versão do aplicativo);
  - Tipo de provedor de autenticação (por exemplo, Microsoft ou identificador de autenticação offline);
  - Especificações básicas do ambiente de execução (sistema operacional, versão do runtime Java, arquitetura da CPU);
  - Logs de erro/travamento e rastreamentos de pilha (stack traces).
- **Saneamento e Credenciais:** Os diagnósticos de falhas têm caminhos de arquivos sensíveis, nomes de usuário e tokens de sistema removidos sempre que viável. Nós **nunca** tratamos nem armazenamos senhas, credenciais ou tokens de sessão das suas contas Microsoft/Mojang.

---

## 3. Retenção de Dados

Evitamos prazos indefinidos de retenção:
- Todos os logs de telemetria, registros de erros de diagnóstico e métricas de desempenho são retidos por, no **máximo, 90 dias**, após os quais são excluídos permanentemente ou anonimizados de forma irreversível.
- Relatos públicos no rastreador de problemas do GitHub permanecem disponíveis conforme as políticas da plataforma GitHub e a governança do repositório até serem resolvidos ou excluídos.

---

## 4. Suboperadores e Transferências Internacionais de Dados

O XMCL utiliza provedores globais de infraestrutura para fornecer downloads, páginas web e diagnósticos opcionais:

| Provedor | Função e Dados Tratados | Regiões de Processamento | Política de Privacidade |
| :--- | :--- | :--- | :--- |
| **Microsoft Azure (Application Insights)** | Análise web sem cookies, diagnósticos opcionais do launcher | Hong Kong (Ásia Oriental), Estados Unidos, UE | [Privacidade Microsoft](https://privacy.microsoft.com/privacystatement) |
| **Cloudflare** | CDN, roteamento de borda, proteção contra DDoS | Rede de Borda Global / Estados Unidos | [Privacidade Cloudflare](https://www.cloudflare.com/privacypolicy/) |
| **GitHub** | Hospedagem de código-fonte, lançamentos, rastreador de problemas | Estados Unidos | [Privacidade GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Vercel** | Hospedagem e entrega do site | Estados Unidos / Borda Global | [Privacidade Vercel](https://vercel.com/legal/privacy-policy) |

- **Salvaguardas de Transferência Internacional:** Quando dados técnicos são transferidos para fora do Brasil, do Espaço Econômico Europeu (EEE), do Reino Unido ou da Suíça, adotamos Cláusulas Contratuais Padrão aprovadas pela Comissão Europeia (SCCs), o Acordo Internacional de Transferência de Dados do Reino Unido (IDTA), salvaguardas previstas no Art. 33 da LGPD e criptografia em trânsito.
- **Direito de Recusa:** Você pode recusar a transferência internacional de diagnósticos do launcher simplesmente mantendo a telemetria desativada (seu estado padrão).
- **Não Venda de Dados:** Nunca vendemos dados pessoais nem os compartilhamos para publicidade comportamental entre contextos.

---

## 5. Disposições Regionais e Direitos Legais

### Brasil (LGPD — Lei nº 13.709/2018)
- **Bases Legais (Art. 7º LGPD):** Consentimento (Art. 7º, I) para telemetria opcional de diagnóstico; Legítimo Interesse (Art. 7º, IX) para segurança da infraestrutura, disponibilidade e análise agregada sem cookies.
- **Crianças e Adolescentes (Art. 14 LGPD):** O tratamento de dados pessoais de crianças requer consentimento específico e em destaque dado por pelo menos um dos pais ou pelo responsável legal.
- **Seus Direitos (Art. 18 LGPD):** Você tem direito à confirmação da existência de tratamento, acesso aos dados, correção de dados incompletos, inexatos ou desatualizados, anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos, portabilidade, eliminação dos dados tratados com consentimento, informação sobre compartilhamento, informação sobre a possibilidade de não fornecer consentimento e revogação do consentimento a qualquer momento.
- **Autoridade Supervisora:** Você pode peticionar à **Autoridade Nacional de Proteção de Dados (ANPD)** em [gov.br/anpd](https://www.gov.br/anpd).

### Portugal, União Europeia e EEE (RGPD / GDPR)
- **Bases Legais:** Consentimento (Art. 6.º, n.º 1, alínea a) do RGPD) para telemetria opcional de diagnóstico; Interesses Legítimos (Art. 6.º, n.º 1, alínea f) do RGPD) para segurança da infraestrutura, disponibilidade e análise agregada sem cookies.
- **Idade de Consentimento Digital:** Em **Portugal**, a idade de consentimento digital é de **13 anos** (nos termos da Lei n.º 58/2019); noutros Estados-Membros da UE, entre 13 e 16 anos. Menores abaixo desse limite necessitam do consentimento dos titulares das responsabilidades parentais.
- **Os Seus Direitos:** Nos termos dos Artigos 15.º a 22.º do RGPD, tem o direito de acesso, retificação, apagamento («direito a ser esquecido»), limitação do tratamento, portabilidade dos dados, oposição, retirada do consentimento a qualquer momento e apresentação de reclamação junto da autoridade de controlo — em Portugal, a **Comissão Nacional de Proteção de Dados (CNPD)** em [cnpd.pt](https://www.cnpd.pt).

### Reino Unido (UK GDPR) e Estados Unidos (COPPA, CCPA / CPRA)
- **Reino Unido:** Regulado pelo UK GDPR e DPA 2018 (idade de consentimento digital: **13 anos**). Autoridade supervisora: ICO em [ico.org.uk](https://ico.org.uk).
- **EUA (COPPA e CCPA / CPRA):** O XMCL não é direcionado a crianças menores de 13 anos e não vende nem compartilha informações pessoais para publicidade comportamental. Pais ou responsáveis podem contatar [cijhn@hotmail.com](mailto:cijhn@hotmail.com) para exclusão imediata.

### Outras Jurisdições
- Respeitamos direitos equivalentes dos titulares de dados nos termos das leis locais aplicáveis em todo o mundo.

---

## 6. Como Exercer os Seus Direitos

Para exercer os seus direitos de acesso, retificação, eliminação, portabilidade ou revogação de consentimento, contate **CI010** pelo e-mail **[cijhn@hotmail.com](mailto:cijhn@hotmail.com)**.

---

## 7. Idioma Prevalente e Isenção de Responsabilidade

- **Idioma Prevalente:** As traduções deste aviso são fornecidas para conveniência. Em caso de divergência entre uma versão traduzida e a versão em inglês, prevalece a versão em inglês na medida permitida pela legislação local imperativa.
- **Aviso sobre Minecraft e Mojang:** O XMCL é um projeto independente de software livre e de código aberto e não é afiliado, autorizado, patrocinado ou endossado pela Microsoft Corporation ou pela Mojang Studios.
