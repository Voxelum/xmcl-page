# Protocollo di gioco online per Minecraft basato su WebRTC

Questo articolo descrive un'implementazione del launcher per Minecraft che consente il gioco in rete tra diverse reti locali tramite WebRTC senza la necessità di software VPN esterno o il reindirizzamento manuale delle porte (port-forwarding) sul router.

---

## 🌐 Cos'è WebRTC? Perché sceglierlo?

WebRTC (Web Real-Time Communication) è una tecnologia di comunicazione in tempo reale peer-to-peer. Citazione da [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API):

> WebRTC (Web Real-Time Communications) è una tecnologia open source che consente la comunicazione in tempo reale tramite connessioni peer-to-peer.

Sebbene WebRTC sia stato originariamente progettato per lo streaming audio e video in tempo reale tra browser web, la sua architettura sottostante lo rende altamente adatto per i launcher di gioco per stabilire canali dati diretti a bassa latenza.

### Confronto dei metodi di gioco online

La tabella seguente confronta tre modi per implementare il gioco online:

| Caratteristica | WebRTC | Soluzione su misura (Custom Hole Punching) | Software / VPN di terze parti (es. Hamachi, Radmin) |
| :--- | :--- | :--- | :--- |
| **Personalizzazione** | **Alta** | **Massima** | - |
| **Difficoltà di sviluppo** | **Medio-Bassa** | **Molto Alta** | **Molto Bassa** |
| **Esperienza utente** | **Eccellente** | **Eccellente** | **Mediocre** |

---

## 📑 Dettagli del protocollo e concetti di base

Il protocollo si compone principalmente di tre parti:
1. **Configurazione della connessione**: Scambio di descrizioni di sessione (SDP) per negoziare l'evasione NAT.
2. **Canale dei metadati (Metadata)**: Canale di controllo per segnalare azioni della stanza, informazioni sul giocatore e stato del server LAN.
3. **Incapsulamento di Minecraft**: Trasmissione del traffico TCP del gioco all'interno di canali dati binari affidabili di WebRTC.

### Concetti chiave

*   **PeerConnection**: Rappresenta la connessione stabilita tra due giocatori. Gestisce l'evasione NAT, i candidati ICE e la crittografia.
*   **DataChannel**: Canale dati bidirezionale all'interno di una `PeerConnection`. Una connessione P2P può avere più canali (es. uno per i metadati e uno per ciascuna connessione di gioco attiva).
*   **SDP Description**: Stringa del protocollo di descrizione della sessione (Session Description Protocol) contenente dettagli sui codec, parametri di connessione e indirizzi candidati.
*   **ICEServer (STUN/TURN)**:
    *   **STUN**: Viene utilizzato per scoprire l'indirizzo IP pubblico del giocatore e il suo tipo di NAT. Sono ampiamente disponibili molti server STUN pubblici gratuiti (es. di Google o Tencent).
    *   **TURN**: Server di inoltro (Relay) utilizzato se la connessione diretta fallisce (es. entrambi i giocatori si trovano dietro NAT simmetrici). L'inoltro del traffico consuma larghezza di banda e richiede un server dedicato.

---

## 🔄 Flusso del protocollo e architettura di segnalazione

Il diagramma seguente illustra come viene coordinata la connessione P2P, viene eseguita l'evasione NAT e viene incapsulato in modo sicuro il traffico di gioco tra due client Minecraft:

<div style="margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
<h3 style="margin-top: 0; margin-bottom: 16px; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1); display: flex; align-items: center; gap: 8px;">
<span>🔄 Sequenza di connessione e flusso di dati</span>
</h3>
<div style="display: flex; flex-direction: column; gap: 16px;">
<!-- Step 1 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">1</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Segnalazione e configurazione della stanza</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
L'<strong>Host</strong> invia l'offerta SDP al server di segnalazione (Lobby). <br/>L'<strong>Ospite</strong> riceve l'offerta, la configura e restituisce una risposta SDP all'Host.
</p>
</div>
</div>
<!-- Arrow -->
<div style="margin-left: 14px; border-left: 2px dashed var(--vp-c-divider); height: 16px;"></div>
<!-- Step 2 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">2</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Evasione NAT e Hole Punching</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
Entrambi i launcher eseguono l'evasione NAT tramite STUN/TURN per stabilire una connessione P2P diretta. Viene aperto un canale di controllo dei metadati affidabile.
</p>
</div>
</div>
<!-- Arrow -->
<div style="margin-left: 14px; border-left: 2px dashed var(--vp-c-divider); height: 16px;"></div>
<!-- Step 3 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">3</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Rilevamento del gioco LAN</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
Il <strong>Minecraft Host</strong> trasmette il suo mondo LAN. Il launcher dell'host inoltra questi metadati all'Ospite.<br/>Il <strong>Launcher dell'Ospite</strong> avvia un proxy TCP locale e lo trasmette come un gioco LAN falso al client Minecraft dell'Ospite.
</p>
</div>
</div>
<!-- Arrow -->
<div style="margin-left: 14px; border-left: 2px dashed var(--vp-c-divider); height: 16px;"></div>
<!-- Step 4 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">4</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Incapsulamento del traffico di gioco</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
Il client ospite si connette al proxy. L'launcher dell'ospite mappa la connessione a un nuovo DataChannel binario di WebRTC. Il launcher dell'host inoltra i pacchetti al server reale di Minecraft.
</p>
</div>
</div>
</div>
</div>

## 🔑 Come stabilire connessioni tra utenti

Le connessioni vengono stabilite tramite il modello Offer/Answer (Offerta/Risposta). Il launcher iniziatore crea un'Offer e il ricevitore restituisce un'Answer.

### Flusso dell'iniziatore (Host)

L'iniziatore crea la PeerConnection, aggiunge il canale dei metadati e genera l'offerta SDP:

```ts
// "id" rappresenta l'identificatore univoco del peer di destinazione
async function initiateConnection(id: string) {
    const connection = new PeerConnection(id, {
        iceServers: [
            { urls: "stun:stun.qq.com" }
        ],
        iceTransportPolicy: 'all'
    });

    // Creare il canale dei metadati per i comandi di controllo
    const channel = connection.createDataChannel("metadata", {
        ordered: true,
        protocol: 'metadata'
    });

    // Ascoltare le modifiche alla descrizione locale / candidati ICE
    connection.onLocalDescription((description) => {
        // Inviare questa offerta SDP al ricevitore tramite il server di segnalazione
        sendDescription(id, description);
    });

    // Se la libreria WebRTC richiede la generazione manuale:
    const offer = await connection.createOffer();
    await connection.setLocalDescription(offer);
}
```

### Flusso del ricevitore (Ospite)

Il ricevitore attende l'offerta, la configura come descrizione remota e restituisce una risposta:

```ts
async function onReceiveOffer(id: string, offer: Description) {
    const connection = new PeerConnection(id, {
        iceServers: [{ urls: "stun:stun.qq.com" }],
        iceTransportPolicy: 'all'
    });

    await connection.setRemoteDescription(offer);

    // Ascoltare il canale dei metadati in arrivo
    connection.onDataChannel((channel) => {
        if (channel.protocol === 'metadata') {
            console.log("Canale dei metadati stabilito!");
        }
    });

    connection.onLocalDescription((description) => {
        // Inviare questa risposta SDP all'iniziatore
        sendDescription(id, description);
    });

    const answer = await connection.createAnswer();
    await connection.setLocalDescription(answer);
}
```

---

## ✉️ Formato di comunicazione del canale dei metadati

Una volta stabilita la connessione P2P, il canale dei metadati (`protocol: 'metadata'`) viene utilizzato per trasmettere i comandi della stanza. Il formato è una stringa JSON codificata in UTF-8:

```ts
interface Message {
    type: string;
    payload: any;
}
```

### 1. Messaggi di battito cardiaco (Ping/Pong)
Utilizzati per misurare la latenza di rete (Ping) e mantenere attiva l'associazione della porta NAT.
- **`heartbeat-ping`** (Inviato ogni secondo):
  ```json
  {
      "type": "heartbeat-ping",
      "payload": { "time": 1718000000000 }
  }
  ```
- **`heartbeat-pong`** (Risposta immediata con lo stesso timestamp):
  ```json
  {
      "type": "heartbeat-pong",
      "payload": { "time": 1718000000000 }
  }
  ```

### 2. Messaggio di identità del giocatore
Condivide il profilo del giocatore (nome utente, UUID e URL di skin/mantelli) per visualizzare gli avatar nella stanza.
```json
{
    "type": "identity",
    "payload": {
        "name": "Steve",
        "id": "e067c29e-29e2-498c-a1d2-e0d1655b3ff1",
        "textures": {
            "SKIN": {
                "url": "http://textures.minecraft.net/texture/...",
                "metadata": { "model": "slim" }
            }
        }
    }
}
```

### 3. Messaggio di rilevamento LAN di Minecraft
Inviato dall'host quando il client Minecraft locale pubblica la partita sulla rete locale.
```json
{
    "type": "lan",
    "payload": {
        "motd": "Mondo di Steve",
        "port": 54321
    }
}
```

---

## 🎮 Incapsulamento del traffico TCP di Minecraft su DataChannel

Poiché Minecraft utilizza TCP per le connessioni multiplayer, ma WebRTC opera su UDP, il launcher agisce come un **proxy TCP locale**.

### 1. Proxy TCP dell'ospite (Ricevitore)
Al ricevimento di un messaggio `lan`, il launcher dell'ospite crea un server TCP locale:

```ts
function startGuestProxy(motd: string, remotePort: number) {
    const proxyServer = net.createServer((tcpSocket) => {
        // Creare un canale dati binario ordinato e affidabile per questa connessione
        const gameChannel = peerConnection.createDataChannel(remotePort.toString(), {
            protocol: 'minecraft',
            ordered: true
        });

        // Inviare dati TCP dal Minecraft locale al canale dati WebRTC
        tcpSocket.on('data', (data) => {
            gameChannel.sendBinary(data);
        });

        // Scrivere dati binari WebRTC nel socket TCP locale
        gameChannel.onMessage((data) => {
            tcpSocket.write(Buffer.from(data));
        });

        tcpSocket.on('close', () => gameChannel.close());
        gameChannel.onClose(() => tcpSocket.destroy());
    });

    // Ascoltare su una porta locale casuale disponibile
    proxyServer.listen(0, () => {
        const localPort = proxyServer.address().port;
        // Trasmettere questa porta localmente in modo che il Minecraft locale la rilevi automaticamente
        broadcastLanDiscovery(motd, localPort);
    });
}
```

### 2. Ricevitore di tunnel dell'iniziatore (Host)
L'host ascolta i canali dati `minecraft` in arrivo e li reindirizza al gioco reale di Minecraft:

```ts
peerConnection.onDataChannel((channel) => {
    if (channel.protocol === 'minecraft') {
        const actualGamePort = parseInt(channel.label);

        // Aprire una connessione TCP diretta al gioco Minecraft locale
        const gameSocket = net.createConnection({ port: actualGamePort });

        // Unire i dati binari grezzi tra il socket e il canale
        gameSocket.on('data', (data) => {
            channel.sendBinary(data);
        });

        channel.onMessage((data) => {
            gameSocket.write(Buffer.from(data));
        });

        gameSocket.on('close', () => gameSocket.destroy());
        channel.onClose(() => gameSocket.destroy());
    }
});
```

---

## 📖 Appendice e note di implementazione

### Trasmissione di rilevamento LAN di Minecraft
Minecraft scopre le partite LAN ascoltando i pacchetti multicast. Il launcher trasmette le informazioni del server con il seguente formato:
```
[MOTD]${motd}[/MOTD][AD]${port}[/AD]
```
Este pacchetto deve essere inviato al gruppo multicast `224.0.2.60:4445`.

### Affidabilità di trasmissione
WebRTC consente di configurare i canali dati per garantire l'affidabilità (emulazione TCP su UDP). Gli sviluppatori **devono** impostare `ordered: true` e omettere `maxPacketLifeTime` e `maxRetransmits` per evitare la perdita di pacchetti.

### Librerie WebRTC consigliate
- **Go**: [pion/webrtc](https://github.com/pion/webrtc) (Molto consigliato per i server)
- **NodeJS**: [node-datachannel](https://github.com/murat-dogan/node-datachannel) (Associazioni C++ native)
- **C/C++**: [libdatachannel](https://github.com/paullouisageneau/libdatachannel) (Leggero, senza dipendenze complesse come GStreamer)
- **Rust**: [datachannel-rs](https://github.com/lerouxrgd/datachannel-rs)
- **Java**: [webrtc-java](https://github.com/devopvoid/webrtc-java)
