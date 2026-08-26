# Giocare senza licenza (Modalità offline e account alternativi)

XMCL è un launcher open-source progettato per rispettare la libertà dei giocatori. Se al momento non possiedi una licenza a pagamento di Minecraft Java Edition, o se desideri provare modpack senza connessione ai server Mojang, XMCL offre il pieno supporto per la **Modalità Offline** e per le reti skin della community.

---

## ⚙️ 1. Abilitare la Modalità Sviluppatore

Per sbloccare account offline e server skin di terze parti, attiva la **Modalità sviluppatore** nelle impostazioni:

1. Apri **Impostazioni** (icona a forma di ingranaggio in basso a sinistra).
2. Individua l'opzione **«Modalità sviluppatore»** e impostala su **ATTIVATO**:

   ![Abilitare la Modalità Sviluppatore](/guidephoto/developer-mode.png)

Una volta attiva, Gestione account mostrerà opzioni di accesso aggiuntive.

---

## 👥 2. Tipi di account supportati

<div style="display: flex; flex-direction: column; gap: 14px; margin: 24px 0;">

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟢</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Modalità Offline (Account locale)</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Gioca senza connetterti ai server di autenticazione. Inserisci qualsiasi nome utente. Ideale per giocatore singolo, test locali di modpack, partite in LAN e server della community impostati con <code>online-mode=false</code>.
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟡</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">LittleSkin</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Server gratuito di autenticazione e skin della community con supporto per mantelli personalizzati.  
      Sito web: <a href="https://littleskin.cn" target="_blank" rel="noopener noreferrer">https://littleskin.cn</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🔵</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Ely.by</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Rete globale di autenticazione e skin con catalogo cloud e mantelli in alta definizione.  
      Sito web: <a href="https://ely.by" target="_blank" rel="noopener noreferrer">https://ely.by</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🌐</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Server Authlib-Injector / Yggdrasil personalizzato</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Collegati a qualsiasi server di autenticazione privato tramite URL standard dell'API Yggdrasil.
    </p>
  </div>

</div>

---

## 🎮 3. Aggiungere e cambiare account

1. Fai clic sull'icona del profilo in alto a destra per aprire **Gestione account**.
2. Fai clic su **«Aggiungi account»**.
3. Seleziona **Offline**, **LittleSkin**, **Ely.by** o **Server personalizzato**.
4. Inserisci il nome utente o le credenziali.
5. Fai clic sull'account per impostarlo come **Attivo**.

---

## 💡 4. Confronto tra tipi di account

| Funzionalità | Account Microsoft (Ufficiale) | Account Offline | LittleSkin / Ely.by |
| :--- | :--- | :--- | :--- |
| **Costo** | A pagamento (Licenza Minecraft) | Gratuito | Gratuito |
| **Server ufficiali (Hypixel ecc.)** | ✅ Sì | ❌ No | ❌ No |
| **Server della community / LAN / P2P** | ✅ Sì | ✅ Sì (`online-mode=false`) | ✅ Sì |
| **Giocatore singolo e modpack** | ✅ Sì | ✅ Sì | ✅ Sì |
| **Skin e mantelli personalizzati** | ✅ Skin ufficiali Mojang | ⚠️ Skin predefinita | ✅ Skin e mantelli della rete |

---

## ❓ Domande frequenti

### Posso entrare su Hypixel con un account Offline?
No. I server pubblici ufficiali verificano l'identità del giocatore direttamente con Mojang (`online-mode=true`), operazione che richiede un account Microsoft con Java Edition acquistata.

### Come posso giocare con gli amici senza licenza?
Puoi utilizzare la funzione integrata **P2P Multiplayer / Condivisione LAN** in XMCL o unirti a un server della community con `online-mode=false`.

👉 **[Problemi di accesso Microsoft? Consulta la guida alla risoluzione dei problemi](./microsoft-login-issues)**
