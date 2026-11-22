---
title: Informativa sulla privacy del progetto open source XMCL
description: Informativa sulla privacy per il sito web XMCL e il launcher open source, conforme al GDPR UE, al Codice Privacy italiano, al UK GDPR, alle leggi statunitensi COPPA/CCPA e agli standard internazionali di protezione dei dati.
---

# Informativa sulla privacy del progetto open source XMCL

**Data di entrata in vigore: 22 novembre 2026 · Versione: OP3-2026-11-22**

La presente informativa riguarda il sito web pubblico di XMCL ([xmcl.app](https://xmcl.app)) e il launcher XMCL gratuito e open source. Non riguarda funzionalità a pagamento, account, fatturazione, intelligenza artificiale o servizi di segnalazione/TURN multigiocatore forniti da XMCL Together, disciplinati separatamente dall'[Informativa sulla privacy di XMCL Together](./together/privacy).

---

## 1. Titolare del trattamento e contatti

XMCL è un progetto open source indipendente gestito da **CI010** e dalla comunità di collaboratori Voxelum.
- **Richieste legali e sulla privacy:** [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- **Repository del codice sorgente:** [github.com/voxelum/x-minecraft-launcher](https://github.com/voxelum/x-minecraft-launcher)
- **Segnalazione di vulnerabilità di sicurezza:** [GitHub Security Advisories](https://github.com/voxelum/x-minecraft-launcher/security)
- **Supporto della community:** [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

---

## 2. Informazioni trattate e minimizzazione dei dati

XMCL applica rigorosi principi di minimizzazione dei dati (art. 5, par. 1, lett. c) GDPR):

### Sito web pubblico (xmcl.app)
- **Analisi aggregata senza cookie:** Utilizziamo Microsoft Azure Application Insights configurato in **modalità senza cookie** (`disableCookiesUsage: true`), con acquisizione ospitata in **Microsoft Azure East Asia (Hong Kong)**, per registrare visualizzazioni di pagina anonime, selezioni di download, attributi generali di rete/dispositivo e user-agent del browser. Sul dispositivo dell'utente non vengono installati cookie analitici né cookie di tracciamento cross-site.
- **Cookie strettamente necessario:** Memorizziamo esclusivamente un unico cookie tecnico locale (`nf_lang`), strettamente necessario per ricordare la preferenza di lingua dell'interfaccia. Non utilizziamo cookie di terze parti per marketing, pubblicità o profilazione comportamentale.

### Launcher open source
- **Telemetria e diagnostica opzionali (Opt-in):** La telemetria diagnostica è **disattivata per impostazione predefinita**. Solo qualora l'utente abiliti esplicitamente la telemetria nelle impostazioni del launcher (consenso esplicito), il launcher può trattare:
  - un identificativo pseudonimo di installazione/dispositivo generato casualmente;
  - eventi del ciclo di vita dell'applicazione (avvio del gioco, codici di uscita normali o di errore, versione dell'applicazione);
  - tipologia di provider di autenticazione (es. identificativo di autenticazione Microsoft o offline);
  - specifiche di base dell'ambiente di esecuzione (sistema operativo, versione del runtime Java, architettura della CPU);
  - registri di arresto anomalo (crash log) e stack trace.
- **Sanitizzazione e credenziali:** I dati diagnostici di crash vengono depurati, per quanto tecnicamente possibile, da percorsi di file sensibili, nomi utente e token di sistema. Non trattiamo né memorizziamo **mai** password, credenziali o token di sessione degli account Microsoft/Mojang.

---

## 3. Conservazione dei dati

Evitiamo tempi di conservazione indefiniti:
- Tutti i registri di telemetria, i report di errore diagnostici e le metriche di prestazione sono conservati per un **massimo di 90 giorni**, trascorsi i quali vengono eliminati definitivamente o anonimizzati in modo irreversibile.
- Le segnalazioni pubbliche sul sistema di tracciamento problemi (issue tracker) di GitHub restano disponibili secondo le policy della piattaforma GitHub e la governance del repository fino alla risoluzione o rimozione.

---

## 4. Responsabili del trattamento e trasferimenti internazionali di dati

XMCL si avvale di fornitori di infrastrutture globali per erogare download, pagine web e diagnostica opzionale:

| Fornitore | Ruolo e dati trattati | Regioni di trattamento | Informativa privacy |
| :--- | :--- | :--- | :--- |
| **Microsoft Azure (Application Insights)** | Analisi web senza cookie, diagnostica opzionale del launcher | Hong Kong (Asia orientale), Stati Uniti, UE | [Privacy Microsoft](https://privacy.microsoft.com/privacystatement) |
| **Cloudflare** | CDN, routing edge, protezione DDoS | Rete Edge globale / Stati Uniti | [Privacy Cloudflare](https://www.cloudflare.com/privacypolicy/) |
| **GitHub** | Hosting del codice sorgente, rilasci, issue tracker | Stati Uniti | [Privacy GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Vercel** | Hosting e distribuzione del sito web | Stati Uniti / Rete Edge globale | [Privacy Vercel](https://vercel.com/legal/privacy-policy) |

- **Garanzie per i trasferimenti:** Qualora dati tecnici siano trasferiti al di fuori dello SEE, del Regno Unito o della Svizzera, ci basiamo sulle Clausole Contrattuali Tipo (SCC) approvate dalla Commissione europea (art. 46 GDPR), sull'UK International Data Transfer Agreement (IDTA) / Addendum e su garanzie legali equivalenti.
- **Diritto di rifiuto:** È possibile rifiutare il trasferimento transfrontaliero della diagnostica del launcher semplicemente mantenendo disattivata la telemetria (stato predefinito).
- **Nessuna vendita di dati:** Non vendiamo mai dati personali né li condividiamo per pubblicità comportamentale cross-context.

---

## 5. Disposizioni regionali e diritti legali

### Unione Europea, SEE e Italia (GDPR e Codice Privacy)
- **Basi giuridiche:** Consenso (art. 6, par. 1, lett. a) GDPR) per la telemetria diagnostica opzionale; legittimo interesse (art. 6, par. 1, lett. f) GDPR) per sicurezza dell'infrastruttura, disponibilità e analisi aggregata senza cookie.
- **Età del consenso digitale:** In Italia l'età per il consenso digitale è pari a **14 anni** ai sensi dell'art. 2-quinquies del D.Lgs. 196/2003 (**Codice Privacy**) e dell'art. 8 del GDPR (13–16 anni negli altri Stati membri UE). I minori al di sotto di tale soglia necessitano del consenso o dell'autorizzazione di chi esercita la responsabilità genitoriale.
- **Diritti dell'interessato:** Ai sensi degli articoli 15–22 del GDPR e del Codice Privacy, l'utente ha diritto di accesso, rettifica, cancellazione («diritto all'oblio»), limitazione del trattamento, portabilità dei dati, opposizione, revoca del consenso in qualsiasi momento e di proporre reclamo al **Garante per la protezione dei dati personali** all'indirizzo [https://www.garanteprivacy.it](https://www.garanteprivacy.it) o alla propria autorità nazionale di controllo.

### Regno Unito (UK GDPR e DPA 2018)
- Disciplinato dal UK GDPR e dal Data Protection Act 2018. Età del consenso digitale: **13 anni**. Autorità di controllo: UK Information Commissioner's Office (ICO) su [ico.org.uk](https://ico.org.uk).

### Stati Uniti (COPPA, CCPA / CPRA e leggi statali)
- **COPPA:** XMCL non è rivolto a minori di 13 anni. Non raccogliamo consapevolmente dati personali di minori di 13 anni. Genitori o tutori possono contattare [cijhn@hotmail.com](mailto:cijhn@hotmail.com) per la tempestiva cancellazione.
- **CCPA / CPRA e leggi statali USA:** XMCL **non** vende né condivide dati personali per pubblicità comportamentale cross-context. I residenti di California, Virginia, Colorado, Connecticut, Utah, Texas, Oregon e altri Stati con normative applicabili hanno diritto di conoscere, accedere, rettificare, cancellare i propri dati ed esercitare tali diritti senza discriminazioni.

### Altre giurisdizioni
- Rispettiamo diritti equivalenti degli interessati ai sensi delle normative locali applicabili a livello mondiale (tra cui Brasile LGPD, Giappone APPI, Corea del Sud PIPA, Cina PIPL, Taiwan PDPA, Turchia KVKK, India DPDP Act, Indonesia UU PDP, Vietnam Decreto 13, Ucraina, Arabia Saudita/EAU PDPL).

---

## 6. Esercizio dei diritti

Per esercitare i diritti di accesso, rettifica, cancellazione o revoca del consenso, contattare **CI010** all'indirizzo **[cijhn@hotmail.com](mailto:cijhn@hotmail.com)**.

---

## 7. Lingua prevalente ed esclusione di responsabilità

- **Lingua prevalente:** Le traduzioni della presente informativa sono fornite per comodità. In caso di discrepanza tra una versione tradotta e la versione inglese, prevale la versione inglese nella misura consentita dalle norme imperative locali.
- **Esclusione di responsabilità Minecraft e Mojang:** XMCL è un progetto software open source indipendente e non è affiliato, autorizzato, sponsorizzato né approvato da Microsoft Corporation o Mojang Studios.
