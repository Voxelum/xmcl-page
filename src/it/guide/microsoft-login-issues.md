# Guida all'Accesso con Account Microsoft e Modalità Demo

Questa guida spiega come aggiungere il tuo account Microsoft a XMCL, come funziona il processo di autenticazione ufficiale e come risolvere gli errori di accesso comuni, come **"failed to exchange Xbox token"** o il problema del blocco in **Modalità Demo**.

---

## 🔑 1. Come aggiungere un Account Microsoft

Per giocare a Minecraft utilizzando il tuo account ufficiale, devi effettuare l'accesso:

1. Fai clic sul tuo profilo/avatar (o su **"Gestisci account"**) in alto a destra per aprire il gestore degli account:

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. Fai clic su **"Aggiungi account"**, seleziona **Microsoft** e procedi con l'accesso:

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **Accedere tramite codice del dispositivo (Device Code):**  
> Se non desideri digitare la password direttamente all'interno del launcher, puoi selezionare l'opzione **"Login by Device Code"** (Accedi tramite codice dispositivo). XMCL mostrerà un codice temporaneo. Collegati a `microsoft.com/link` dal tuo browser, inserisci il codice e conferma l'accesso.

---

## 🔍 2. Come funziona il processo di autenticazione

Per avviare una copia con licenza di Minecraft, il launcher deve verificare la tua identità attraverso tre livelli di sicurezza successivi:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 Negoziazione di autenticazione (Handshake):</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">PASSO 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Accesso Microsoft</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Verifica la password</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">PASSO 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Servizi Xbox Live</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Ottiene il Gamertag</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ Fallimento qui</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">PASSO 3 (Scambio)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Token Minecraft</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Verifica la licenza</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    L'errore <strong>"failed to exchange Xbox token"</strong> indica che il Passo 1 e il Passo 2 sono stati completati correttamente, ma i server di autenticazione di Mojang hanno rifiutato lo scambio del token al Passo 3.
  </p>
</div>

---

## 🛠 3. Tre cause principali e soluzioni

### 1. Nessuna licenza di Minecraft su questo account

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Causa: I server di Mojang non hanno trovato il gioco acquistato</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Questa è la causa più frequente. L'accesso all'account Microsoft è avvenuto correttamente, ma Mojang segnala al launcher che questo specifico account non possiede la licenza per Minecraft Java Edition.</p>
  </div>
</div>

#### Come risolvere:
* **Verificare l'acquisto:** Accedi con l'account Microsoft sul sito [Minecraft.net](https://www.minecraft.net/). Controlla se compare il pulsante per scaricare il gioco o se ti viene chiesto di acquistarlo.
* **Controllare lo stato del Game Pass:** Se giochi tramite **Xbox Game Pass**, assicurati che l'abbonamento sia attivo e che l'accesso avvenga tramite lo stesso account Microsoft associato al Game Pass.
* **Verificare l'indirizzo e-mail:** Assicurati di non aver effettuato l'accesso con un altro account Microsoft (ad esempio un account di lavoro o scolastico) al posto dell'account personale con cui è stato acquistato il gioco.

---

### 2. L'account Microsoft non possiede un profilo Xbox (Gamertag mancante)

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👾
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Causa: L'account Microsoft non è configurato per il gioco</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Il tuo account Microsoft necessita di un profilo Xbox Live collegato per poter ottenere i token di Minecraft. Se hai acquistato il gioco di recente o non lo hai mai avviato prima, il profilo potrebbe non essere ancora stato creato, causandone l'avvio in **Modalità Demo**.</p>
  </div>
</div>

#### Como risolvere:
1. Visita il sito ufficiale [Xbox.com](https://www.xbox.com/).
2. Accedi con le credenziali del tuo account Microsoft.
3. Se richiesto, crea un profilo Xbox Live gratuito (scegliendo il tuo Gamertag e un avatar).
4. Una volta creato il profilo, riavvia XMCL e prova a ripetere l'accesso.

---

### 3. Errori di rete o connessioni bloccate regionali

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(59, 130, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #3b82f6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Causa: Inconvenienti legati ai DNS o blocchi di rete locali</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">In alcune aree geografiche o con determinati provider internet restrittivi, le connessioni ai server di autenticazione Xbox Live o Mojang possono subire interruzioni o blocchi dovuti a firewall.</p>
  </div>
</div>

#### Come risolvere:
* **Usa una VPN:** Se ti trovi in una rete soggetta a filtri o blocchi, utilizza una VPN per completare l'autenticazione Microsoft.
* **Modifica i DNS:** Cambia i server DNS del tuo sistema con server pubblici e veloci (ad esempio, Google DNS: `8.8.8.8` e `8.8.4.4` o Cloudflare DNS: `1.1.1.1`).
* **Riprova più tardi:** I server di Microsoft potrebbero essere temporaneamente sovraccarichi. Attendi qualche minuto e riprova.

---

## 🚪 4. Modalità non in linea e accessi alternativi (Giocare senza account Microsoft)

Se non possiedi un account Microsoft ufficiale, desideri giocare senza connessione internet o utilizzi un server locale privato, XMCL offre metodi di accesso alternativi.

### Opzione A: Gioco in locale / Non in linea (Modalità Sviluppatore)

La **Modalità Sviluppatore** (Developer Mode) ti consente di giocare in locale senza connessione e senza password, potendo scegliere qualsiasi nome utente.

1. Apri il gestore degli account in alto a destra.
2. Fai clic su **"Aggiungi account"** (Add Account).
3. Seleziona la voce **Sviluppatore** (Developer):

   <img src="/guidephoto/developer-mode.png" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

4. Digita il nome utente desiderato e conferma.
5. Ora puoi avviare il gioco. **Nota:** Gli account non in linea consentono di accedere esclusivamente a server non protetti (ovvero configurati con `online-mode=false` nelle impostazioni del server) e la skin del personaggio sarà quella predefinita (Steve o Alex).

---

### Opzione B: Piattaforme di skin personalizzate (API Yggdrasil)

Se desideri mostrare il tuo avatar personalizzato (skin) all'interno di server privati, XMCL supporta servizi di autenticazione di terze parti come **LittleSkin**, **Ely.by** o server Yggdrasil personalizzati.

1. Nel gestore degli account, fai clic su **Aggiungi account**.
2. Scegli il servizio corrispondente (ad esempio, **LittleSkin** o l'opzione **Yggdrasil** per inserire l'URL di un'API personalizzata).
3. Inserisci le credenziali di accesso registrate sulla piattaforma esterna:

   <img src="/guidephoto/reg-account.png" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

4. Il launcher recupererà le skin e i dati del profilo direttamente dal server specificato.
