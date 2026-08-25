# Accesso Microsoft, Bedrock vs Java e problemi di licenza

Questa guida spiega il funzionamento dell'autenticazione Microsoft in XMCL, il motivo degli errori di accesso (come **«failed to exchange Xbox token»** o non acquistato), perché il gioco può avviarsi in **Modalità Demo (Demo Mode)**, la differenza fondamentale tra **Bedrock Edition (mobile/console)** e **Java Edition (PC)**, e come risolvere i problemi dell'account.

---

## 🔑 1. Accesso con account Microsoft

Per accedere con la licenza ufficiale di Minecraft:

1. Fai clic sul tuo avatar (o **«Gestisci account»**) in alto a destra per aprire Gestione account:

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. Fai clic su **«Aggiungi account»**, seleziona **Microsoft** e completa la procedura:

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **Accesso tramite codice dispositivo (Device Code):**  
> Se non vuoi inserire la password nel launcher, seleziona **«Accesso con codice dispositivo»**. XMCL mostrerà un codice a 8 cifre; aprilo su [microsoft.com/link](https://microsoft.com/link) nel browser per confermare.

---

## 🔍 2. La verifica Microsoft a 3 passaggi

Durante l'accesso, il launcher comunica con tre passaggi di autenticazione:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 I 3 passaggi di verifica:</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">PASSAGGIO 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">OAuth Microsoft</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Verifica email e password</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">PASSAGGIO 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Servizi Xbox Live</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Verifica Gamertag</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ Errore frequente</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">PASSAGGIO 3 (Scambio)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Licenza Mojang Java</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Verifica possesso su PC</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    Se il passaggio 3 fallisce, l'accesso restituirà l'errore <strong>«failed to exchange Xbox token»</strong> o il gioco si avvierà in <strong>Modalità Demo</strong>. Ciò significa che i server Mojang non trovano alcuna licenza di <strong>Minecraft: Java Edition</strong> associata a questo account Microsoft.
  </p>
</div>

---

## 🛑 3. L'errore più comune: Bedrock Edition vs. Java Edition

**XMCL è un launcher dedicato esclusivamente a Minecraft: Java Edition (PC con Windows, macOS e Linux).**

Molti giocatori acquistano Minecraft su cellulare o console e riscontrano errori di accesso su XMCL:

| Piattaforma di acquisto | Edizione posseduta | Compatibile con XMCL? | Spiegazione |
| :--- | :--- | :--- | :--- |
| 📱 **Mobile (iOS / Android / Google Play)** | Bedrock Edition | ❌ No | L'acquisto su smartphone non include Java Edition per PC. |
| 🎮 **Console PlayStation 4 / 5** | Bedrock Edition | ❌ No | La licenza PlayStation vale solo per la console. |
| 🎮 **Console Xbox One / Series X\|S** | Bedrock Edition | ❌ No | L'acquisto console non si trasferisce a Java su PC. |
| 🕹️ **Nintendo Switch** | Bedrock Edition | ❌ No | L'acquisto su Nintendo eShop è riservato a Switch. |
| 💻 **PC (Pacchetto Minecraft: Java & Bedrock)** | Java & Bedrock | ✅ **Sì** | Pienamente supportato! |
| 🟢 **Abbonamento PC Game Pass / Ultimate** | Java & Bedrock | ✅ **Sì** | Supportato finché l'abbonamento è attivo. |

> ⚠️ **Importante:**  
> Se hai acquistato Minecraft solo su **smartphone**, **PlayStation**, **Xbox** o **Switch**, i server Mojang segnaleranno che l'account **non possiede Java Edition**.  
> Per giocare all'edizione Java su PC è necessario acquistare il pacchetto **«Minecraft: Java & Bedrock Edition for PC»** su [Minecraft.net](https://www.minecraft.net/) oppure avere un abbonamento attivo a **PC Game Pass**.

---

## 🛠 4. Risoluzione dei problemi di accesso

### Causa A: Nessuna licenza Java Edition su questo account

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Mojang non trova una licenza per PC</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">L'account Microsoft è corretto, ma il database Mojang non rileva alcun acquisto di Java Edition.</p>
  </div>
</div>

#### Come risolvere:
* **Verifica su Minecraft.net:** Accedi a [Minecraft.net](https://www.minecraft.net/). Se vedi il pulsante "Acquista ora" invece del tuo nome profilo Java, questo account non possiede il gioco.
* **Cronologia ordini:** Controlla su [account.microsoft.com/billing/orders](https://account.microsoft.com/billing/orders) quale edizione hai acquistato.
* **Verifica indirizzo email:** Assicurati di non accedere con un'email scolastica o di lavoro.
* **Abbonamento Game Pass:** Verifica che il tuo abbonamento sia attivo e valido per PC.

---

### Causa B: Profilo Xbox Live mancante o non configurato

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">L'account non ha un Gamertag Xbox</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">I nuovi account Microsoft spesso non hanno un profilo Xbox Live attivo, impedendo il rilascio del token.</p>
  </div>
</div>

#### Come risolvere:
1. Visita [Xbox.com](https://www.xbox.com/).
2. Fai clic su **Accedi** in alto a destra.
3. Accetta le condizioni e scegli un **Gamertag**.
4. Attendi 1–2 minuti e riprova l'accesso in XMCL.

---

### Causa C: Blocchi di rete e DNS

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Connessione bloccata verso Mojang / Xbox</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Problemi di routing o DNS impediscono la comunicazione con <code>api.minecraftservices.com</code>.</p>
  </div>
</div>

#### Come risolvere:
* **Usa una VPN:** Connettiti a una VPN affidabile prima di accedere.
* **Configura il proxy in XMCL:** In **Impostazioni** -> **Impostazioni di rete**, inserisci il tuo proxy (HTTP/HTTPS/SOCKS5).
* **Controlla il file hosts:** Assicurati che non vi siano voci di reindirizzamento per `mojang.com` nel file hosts di sistema.

---

## 🎮 Non hai una licenza a pagamento?

Se non possiedi una licenza ufficiale, puoi giocare utilizzando la **Modalità Offline** o server skin di terze parti.

👉 **[Guida completa: Giocare senza licenza (Modalità offline e account alternativi)](./offline-mode)**
