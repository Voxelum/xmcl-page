---
title: Informativa sulla privacy di XMCL Together
description: Come XMCL Together tratta i dati relativi ad account, fatturazione, intelligenza artificiale e servizi multigiocatore in conformità al GDPR, al Codice Privacy italiano e alle normative internazionali sulla protezione dei dati.
---

# Informativa sulla privacy di XMCL Together

**Data di entrata in vigore: 22 novembre 2026 · Versione: P4-2026-11-22**

La presente informativa spiega come **CI010**, operante in qualità di gestore individuale con le denominazioni Voxelum e XMCL («XMCL Together», «noi»), tratta i dati personali quando l'utente utilizza un account XMCL Together, servizi a pagamento o funzionalità online correlate su [xmcl.app](https://xmcl.app). Essa non disciplina i servizi indipendenti che l'utente sceglie di collegare, quali Microsoft, Mojang, server di autenticazione di terze parti, Modrinth o CurseForge.

---

## 1. Informazioni che trattiamo

### Sito web Together e telemetria del servizio
Le pagine e i servizi Together utilizzano Microsoft Azure Application Insights configurato in **modalità senza cookie** (`disableCookiesUsage: true`), ospitato in **Azure East Asia (Hong Kong)**, per registrare visualizzazioni di pagina anonime, azioni del servizio, attributi approssimativi di rete/dispositivo ed eventi diagnostici. Il sito web memorizza esclusivamente un unico cookie tecnico locale strettamente necessario (`nf_lang`) per la preferenza linguistica. La telemetria del launcher gratuito open source è disciplinata separatamente dall'[Informativa sulla privacy del progetto open source XMCL](../privacy).

### Account e autenticazione
Quando l'utente crea o utilizza un account XMCL Together, trattiamo identificativi dell'account, identificativi del provider di autenticazione, metadati di sessione e dei refresh token, autorizzazioni concesse (scope), marcature temporali e telemetria di sicurezza utilizzata per prevenire attacchi replay o abusi dell'account. Non riceviamo né memorizziamo **mai** password di Microsoft o di altri account di terze parti.

### Fatturazione e abbonamenti
Trattiamo saldi dell'account, informazioni su valute e tassi di cambio, ordini, stato dell'abbonamento, periodi di quota, totali di utilizzo, rimborsi, contestazioni, identificativi di idempotenza e registri di audit. **Waffo Pancake** tratta direttamente i dati delle carte di pagamento e del checkout. XMCL riceve esclusivamente riferimenti di transazione, stato, importo, valuta ed eventi webhook firmati, e non riceve né memorizza mai numeri completi di carta o codici di sicurezza (CVC/CVV).

### Funzionalità di intelligenza artificiale (IA)
Quando l'utente utilizza una funzionalità IA, trattiamo il prompt, il contenuto della conversazione, il modello selezionato e il contesto del launcher che l'utente sceglie di fornire (come nome dell'istanza, versioni del gioco e del loader, pagina selezionata o percorso locale dell'istanza). Le richieste sono trasmesse ai nostri fornitori IA configurati, attualmente **Agnes** e, ove necessario, **DeepSeek**. Misuriamo il conteggio dei token e l'utilizzo ponderato della quota a fini di fatturazione e prevenzione degli abusi. Non utilizziamo i prompt o gli output dell'utente per addestrare un modello proprietario di XMCL.

> **Avviso sui fornitori IA di terze parti:** I fornitori esterni di IA (Agnes, DeepSeek) trattano i contenuti delle richieste secondo le proprie informative sulla privacy e condizioni. Configuriamo le integrazioni per richiedere modalità «no-training» ove supportato, ma non possiamo garantire le prassi interne di trattamento dati dei fornitori API esterni. Non inserire dati personali sensibili, password o informazioni riservate nei prompt IA.

### Multigiocatore, segnalazione e TURN (connettività P2P)
Le funzionalità Together e RTC trattano identificativi di account e sessione, metadati di instradamento stanza/peer, indirizzi IP, marcature temporali, identificativi delle credenziali TURN e utilizzo aggregato di traffico in ingresso/uscita. **Cloudflare** fornisce l'infrastruttura edge, di segnalazione, di relay TURN e di analisi del traffico.

> **Consenso all'esposizione dell'indirizzo IP in P2P:** La connettività peer-to-peer (P2P) espone intrinsecamente l'indirizzo IP pubblico dell'utente all'altro peer nella sessione multigiocatore. Utilizzando le funzionalità P2P, l'utente riconosce e acconsente esplicitamente a tale comunicazione tecnica necessaria per stabilire una connessione diretta. La segnalazione XMCL instrada esclusivamente metadati di connessione e non registra voce, video o contenuti di gioco di Minecraft.

### Assistenza e comunicazioni con la community
Se l'utente ci contatta, trattiamo i recapiti, i riferimenti dell'account o della transazione, i dati diagnostici e il contenuto dei messaggi inviati. Non inviare password, token di accesso, dati completi di carte di pagamento o dati personali sensibili non pertinenti.

---

## 2. Finalità e basi giuridiche

Trattiamo i dati per:
- fornire, autenticare, proteggere e risolvere problemi tecnici dei servizi XMCL Together;
- gestire abbonamenti, saldi, quote, pagamenti, rimborsi e assistenza clienti;
- instradare connessioni multigiocatore e misurare il consumo di banda TURN;
- generare le risposte IA richieste e contabilizzare le quote IA;
- prevenire frodi, attacchi replay, abusi e incidenti di sicurezza;
- adempiere obblighi contabili, fiscali, legali, relativi ai circuiti di pagamento e alla gestione delle controversie.

**Basi giuridiche (GDPR / Codice Privacy / UK GDPR / LGPD / Internazionale):**
- **Esecuzione del contratto (art. 6, par. 1, lett. b) GDPR):** fornitura di account, abbonamenti, IA e servizi multigiocatore richiesti dall'utente;
- **Obbligo legale (art. 6, par. 1, lett. c) GDPR):** conservazione di registri finanziari, fiscali e di audit dei pagamenti;
- **Legittimo interesse (art. 6, par. 1, lett. f) GDPR):** sicurezza dell'infrastruttura, prevenzione di frodi/abusi e diagnostica operativa senza cookie;
- **Consenso esplicito (art. 6, par. 1, lett. a) GDPR):** prompt IA opzionali, esposizione dell'IP in P2P e trasferimenti transfrontalieri ove richiesto dalla legge.

---

## 3. Responsabili del trattamento e trasferimenti internazionali di dati

Condividiamo solo quanto ragionevolmente necessario con i seguenti fornitori di infrastrutture e servizi:

| Destinatario | Finalità e categorie di dati | Regioni di trattamento | Informativa privacy |
| :--- | :--- | :--- | :--- |
| **Waffo Pancake** | Checkout dei pagamenti, verifiche antifrode, rimborsi, eventi webhook (metadati di transazione e pagamento) | Globale / Stati Uniti / Singapore | Fornita al checkout |
| **Cloudflare** | Workers, CDN, protezione DDoS, segnalazione WebRTC, relay TURN (metadati IP, di sessione e di traffico) | Rete Edge globale / Stati Uniti | [Privacy Cloudflare](https://www.cloudflare.com/privacypolicy/) |
| **Microsoft Azure** | Hosting, archiviazione database, Application Insights senza cookie (dati di account, fatturazione e diagnostica) | Hong Kong (Asia orientale), Stati Uniti, UE | [Privacy Microsoft](https://privacy.microsoft.com/privacystatement) |
| **Vercel & GitHub** | Distribuzione del sito web, rilasci, supporto segnalazioni e sicurezza | Stati Uniti / Rete Edge globale | [Vercel](https://vercel.com/legal/privacy-policy) / [GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Agnes & DeepSeek** | Generazione di risposte IA (prompt, contesto della conversazione, parametri del modello) | Globale / Cina (RPC) / Stati Uniti | Informative dei fornitori |

- **Garanzie per i trasferimenti:** I trasferimenti transfrontalieri al di fuori dello SEE, del Regno Unito o della Svizzera si basano sulle Clausole Contrattuali Tipo UE (SCC ai sensi dell'art. 46 GDPR), sull'UK IDTA/Addendum, sulla cifratura TLS in transito e su una rigorosa minimizzazione dei dati.
- **Conseguenze del rifiuto:** Il conferimento dei dati di account, pagamento e instradamento transfrontaliero è necessario per il funzionamento di XMCL Together. In caso di rifiuto di tale trattamento o trasferimento, l'utente potrà comunque utilizzare il launcher gratuito open source XMCL in modalità offline, ma le funzionalità ospitate di XMCL Together non saranno disponibili.
- **Nessuna vendita di dati:** **Non** vendiamo dati personali né li condividiamo per pubblicità comportamentale cross-context.

---

## 4. Termini di conservazione

Applichiamo rigorosi limiti di conservazione:
- **Telemetria operativa, metriche di utilizzo IA e misurazioni TURN:** conservate per un **massimo di 90 giorni**, poi eliminate definitivamente o anonimizzate in modo irreversibile.
- **Dati dell'account e di sessione:** conservati finché l'account è attivo, più **30 giorni** dopo la cancellazione dell'account per recupero e gestione di eventuali contestazioni.
- **Registrazioni contabili finanziarie, eventi di pagamento, rimborsi e registri di audit:** conservati per **5–7 anni** (o per i termini imperativi previsti dalla normativa fiscale e civile applicabile) per adempiere obblighi contabili, fiscali e dei circuiti di pagamento, anche dopo la chiusura dell'account.
- I backup cifrati vengono eliminati secondo i normali cicli di rotazione.

---

## 5. Scelte e diritti legali dell'utente

### Diritti generali, GDPR, Codice Privacy, UK GDPR e internazionali
L'utente può:
- disattivare funzionalità online opzionali o scollegare servizi di terze parti;
- gestire il cookie `nf_lang` tramite il proprio browser;
- annullare il rinnovo di Together Home in qualsiasi momento dall'interfaccia dell'account (con effetto al termine del periodo già pagato);
- richiedere accesso, rettifica, cancellazione («diritto all'oblio»), limitazione del trattamento, portabilità dei dati o opporsi al trattamento;
- revocare il consenso in qualsiasi momento senza pregiudicare la liceità del trattamento basato sul consenso prestato prima della revoca;
- proporre reclamo alla propria autorità nazionale di controllo, in particolare in Italia al **Garante per la protezione dei dati personali** ([https://www.garanteprivacy.it](https://www.garanteprivacy.it)), nel Regno Unito all'ICO ([ico.org.uk](https://ico.org.uk)) o al proprio regolatore locale.

### Diritti sulla privacy in California e negli Stati USA (CCPA / CPRA)
XMCL **non** vende dati personali né li condivide per pubblicità comportamentale cross-context. I residenti della California e degli Stati USA con leggi applicabili sulla privacy (VA, CO, CT, UT, TX, OR, ecc.) hanno diritto di conoscere, accedere, cancellare, rettificare dati inesatti ed esercitare tali diritti senza discriminazioni.

---

## 6. Sicurezza

Adottiamo sessioni a scopo limitato, controlli di accesso basati sul privilegio minimo, cifratura TLS in transito, webhook di pagamento firmati, protezione anti-replay, isolamento dei segreti e monitoraggio continuo. Nessun sistema online è privo di rischi al 100%; l'utente è responsabile della protezione del proprio dispositivo, delle sessioni e delle credenziali di terze parti.

---

## 7. Minori e requisiti di età

- **Servizi a pagamento e account:** Per creare un account XMCL Together e utilizzare funzionalità a pagamento è necessario avere almeno **18 anni** (o la maggiore età nella propria giurisdizione), oppure disporre del consenso verificabile di un genitore o tutore legale.
- **Consenso digitale (Codice Privacy) e COPPA:** In Italia l'età per il consenso digitale è di **14 anni** (art. 2-quinquies del Codice Privacy). Non raccogliamo consapevolmente dati personali da minori di **14 anni** in Italia (o minori di 13 anni negli USA/Regno Unito, o al di sotto dell'età digitale locale applicabile di 14–16 anni in altri Paesi UE) senza consenso verificabile dei genitori. Genitori o tutori possono contattare [cijhn@hotmail.com](mailto:cijhn@hotmail.com) per la tempestiva cancellazione.

---

## 8. Modifiche, lingua prevalente ed esclusione di responsabilità

- **Modifiche:** Pubblicheremo gli aggiornamenti su questa pagina con una nuova data di entrata in vigore e una nuova versione, fornendo preavviso per le modifiche sostanziali ove richiesto dalla legge.
- **Lingua prevalente:** In caso di discrepanza tra una versione tradotta e la versione inglese, prevale la versione inglese nella misura consentita dalle norme imperative locali.
- **Esclusione di responsabilità Minecraft:** XMCL è un progetto indipendente e non è affiliato, sponsorizzato né approvato da Microsoft Corporation o Mojang Studios.

---

## 9. Contatti

**Gestore / Contatto per la privacy (CI010):**
- Richieste generali, fatturazione, rimborsi, questioni legali e privacy: [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- Segnalazioni di sicurezza: [GitHub private vulnerability reporting](https://github.com/voxelum/x-minecraft-launcher/security)
- Supporto della community: [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

Includere solo il riferimento minimo dell'account o della transazione necessario per individuare il record. Potremmo richiedere la verifica della titolarità dell'account prima di evadere una richiesta.
