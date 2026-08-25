# Guida a XMCL Together: Multiplayer Cloud, Hosting Server e Risoluzione Pagamenti

**XMCL Together** è una piattaforma di servizi online e cloud creata appositamente per XMCL. Risolve le difficoltà principali di Minecraft con mod: **giocare con gli amici superando firewall e CGNAT, avviare server cloud economici senza pagare per l'inattività e usufruire dell'assistenza IA per i crash.**

---

## 🌟 1. Cos'è XMCL Together?

![Panoramica di XMCL Together](/guidephoto/xmcl%20together.png)

Giocare a Minecraft con mod insieme agli amici presenta spesso ostacoli: restrizioni del provider (CGNAT), inoltro porte sul router e costosi abbonamenti mensili (20–40 \$) che si pagano anche a server spento.

XMCL Together offre tre funzionalità essenziali:

### 1. Rete globale di relay ad alta velocità (300+ nodi Cloudflare)
Nelle partite P2P LAN, se la connessione diretta è bloccata dal router, Together instrada automaticamente il traffico tramite i **relay Cloudflare**, garantendo un ping basso senza configurazioni manuali.

### 2. Server cloud «Pay-As-You-Play» (Pagamento a consumo)
Basta pagare canoni mensili completi per server inattivi:
* **Canone base minimo**: Mantiene salvati il mondo, l'IP del server e i mod in modo permanente.
* **Calcolo fatturato solo online**: Si paga solo per le ore effettive di gioco (0,06 \$ – 0,12 \$ / ora).
* **Pausa immediata**: Metti in pausa il server a fine sessione per azzerare i costi orari.

### 3. Copilota IA per la diagnostica integrato
Ogni piano Together include un assistente IA per analizzare i crash log, trovare i conflitti tra mod e ottimizzare i parametri di memoria JVM.

---

## 📊 2. Panoramica dei piani

| Piano | Prezzo | Destinazione d'uso | Specifiche |
| :--- | :--- | :--- | :--- |
| 🏠 **Together Home** | **\$2.99** / mese | Hosting sul proprio PC | 20 GB di traffico relay + Assistente IA |
| 🏕️ **Together Camp** | **\$4** / mese + **\$0.06** / h | 2–4 Amici (Vanilla+ / mod leggeri) | 4 GiB RAM, 2/4 vCPU, 32 GiB NVMe |
| 🏡 **Together Lodge** *(Consigliato)* | **\$6** / mese + **\$0.09** / h | 4–6 Amici (Modpack pesanti) | 6 GiB RAM, 3/6 vCPU, 48 GiB NVMe |
| 🏰 **Together Village** | **\$8** / mese + **\$0.12** / h | 6–10 Amici (Grandi modpack tecnici) | 8 GiB RAM, 4/8 vCPU, 64 GiB NVMe |

👉 **[Consulta i piani sul portale Together](/it/together/)**

---

## 💳 3. Risoluzione degli errori di pagamento e restrizioni regionali

Durante l'acquisto di un piano o la ricarica del saldo, potrebbe verificarsi un errore di pagamento:

![Risoluzione errore di pagamento](/guidephoto/errortoghether1.png)

### Perché il pagamento fallisce?
1. **Restrizioni regionali del gateway di pagamento**: Il nostro processore internazionale (Creem) adotta rigorosi controlli antifrode. Se il tuo IP appartiene a una regione non supportata, la transazione viene rifiutata.
2. **Blocchi bancari per pagamenti esteri**: La tua banca potrebbe bloccare le transazioni internazionali online o i cambi valuta automatici.
3. **Blocco dei frame 3D Secure**: Alcuni provider internet bloccano gli script di autenticazione bancaria.

---

### 🛠️ Come risolvere l'errore di pagamento:

#### Passaggio 1: Usa una connessione VPN stabile
Se il gateway non si carica o blocca la transazione per posizione geografica:
1. Attiva una **VPN** affidabile e connettiti a una regione supportata (**Germania, Regno Unito, Stati Uniti o un paese UE**).
2. Ricarica la [pagina di pagamento di XMCL Together](/it/together/) con la VPN attiva.
3. Completa la transazione con la carta.

#### Passaggio 2: Abilita acquisti online all'estero & 3D Secure
* Nella tua app bancaria, assicurati che i **«Pagamenti online internazionali»** siano abilitati e che i massimali siano adeguati.
* Verifica che l'approvazione 3D Secure sia attiva.

#### Passaggio 3: Prova in modalità incognito
Cancella la cache o apri la pagina in una finestra anonima con la VPN attiva.

---

## 🛡️ 4. Sicurezza, privacy e rimborso

* **Certificazione PCI-DSS**: XMCL non memorizza mai numeri di carte o credenziali bancarie.
* **Rimborso del saldo entro 7 giorni**: Come specificato nei [Termini di servizio](/it/together/terms), il saldo inutilizzato può essere rimborsato su richiesta entro 7 giorni.
* **Conformità GDPR**: Piena conformità con il [GDPR europeo](/it/together/privacy). I registri tecnici vengono conservati per un massimo di 90 giorni.

---

## 💬 5. Hai bisogno di supporto?

Per ulteriori chiarimenti o problemi sui pagamenti:
* 💬 **Discord ufficiale**: [discord.gg/W5XVwYY7GQ](https://discord.gg/W5XVwYY7GQ)
* 📧 **Email del supporto**: `cijhn@hotmail.com`
