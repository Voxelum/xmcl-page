# Protocolo de juego en línea para Minecraft basado en WebRTC

Este artículo describe una implementación de lanzador para Minecraft que permite el juego en red entre diferentes redes locales a través de WebRTC sin necesidad de software VPN externo o redirección manual de puertos (port-forwarding).

---

## 🌐 ¿Qué es WebRTC? ¿Por qué elegirlo?

WebRTC (Web Real-Time Communication) es una tecnología de comunicación en tiempo real punto a punto (peer-to-peer). Cita de [MDN Web Docs](https://developer.mozilla.org/es/docs/Web/API/WebRTC_API):

> WebRTC (Web Real-Time Communications) es una tecnología de código abierto que permite la comunicación en tiempo real a través de conexiones punto a punto.

Aunque WebRTC se diseñó originalmente para la transmisión de audio y video en tiempo real entre navegadores web, su arquitectura subyacente la hace muy adecuada para que los lanzadores de juegos establezcan canales de datos directos y de baja latencia.

### Comparación de métodos de juego en línea

La siguiente tabla compara tres formas de implementar el juego en línea:

| Característica | WebRTC | Solución a medida (Custom Hole Punching) | Software / VPN de terceros (ej. Hamachi, Radmin) |
| :--- | :--- | :--- | :--- |
| **Personalización** | **Alta** | **Máxima** | - |
| **Dificultad de desarrollo** | **Media-Baja** | **Muy Alta** | **Muy Baja** |
| **Experiencia de usuario** | **Excelente** | **Excelente** | **Mediocre** |

---

## 📑 Detalles del protocolo y conceptos básicos

El protocolo consta principalmente de tres partes:
1. **Configuración de la conexión**: Intercambio de descripciones de sesión (SDP) para negociar la evasión de NAT.
2. **Canal de metadatos (Metadata)**: Canal de control para señalizar acciones de la sala, información del jugador y estado del servidor LAN.
3. **Tunelización de Minecraft**: Transmisión del tráfico TCP del juego dentro de canales de datos binarios confiables de WebRTC.

### Conceptos clave

*   **PeerConnection**: Representa la conexión establecida entre dos jugadores. Gestiona la evasión de NAT, los candidatos ICE y el cifrado.
*   **DataChannel**: Canal de datos bidireccional dentro de una `PeerConnection`. Una conexión P2P puede tener múltiples canales (ej. uno para metadatos y uno para cada conexión de juego activa).
*   **SDP Description**: Cadena del protocolo de descripción de sesión (Session Description Protocol) que contiene detalles de códecs, parámetros de conexión y direcciones candidatas.
*   **ICEServer (STUN/TURN)**:
    *   **STUN**: Se utiliza para descubrir la dirección IP pública del jugador y su tipo de NAT. Hay muchos servidores STUN públicos gratuitos disponibles (ej. de Google o Tencent).
    *   **TURN**: Servidor de retransmisión (Relay) utilizado si la conexión directa falla (ej. ambos están detrás de NAT simétricos). Retransmitir tráfico consume ancho de banda y suele requerir un servidor propio.

---

## 🔄 Flujo del protocolo y arquitectura de señalización

El siguiente diagrama ilustra cómo se coordina la conexión P2P, se realiza la evasión de NAT y se tuneliza de forma segura el tráfico del juego entre dos clientes de Minecraft:

<div style="margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
<h3 style="margin-top: 0; margin-bottom: 16px; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1); display: flex; align-items: center; gap: 8px;">
<span>🔄 Secuencia de conexión y flujo de datos</span>
</h3>
<div style="display: flex; flex-direction: column; gap: 16px;">
<!-- Step 1 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">1</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Señalización y configuración de sala</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
El <strong>Host</strong> envía la oferta SDP al servidor de señalización (Lobby). <br/>El <strong>Invitado</strong> obtiene la oferta, la configura y devuelve una respuesta SDP al Host.
</p>
</div>
</div>
<!-- Arrow -->
<div style="margin-left: 14px; border-left: 2px dashed var(--vp-c-divider); height: 16px;"></div>
<!-- Step 2 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">2</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Evasión de NAT y Hole Punching</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
Ambos lanzadores realizan la evasión de NAT mediante STUN/TURN para establecer una conexión P2P directa. Se abre un canal de control de metadatos confiable.
</p>
</div>
</div>
<!-- Arrow -->
<div style="margin-left: 14px; border-left: 2px dashed var(--vp-c-divider); height: 16px;"></div>
<!-- Step 3 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">3</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Detección del juego LAN</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
El <strong>Minecraft Host</strong> transmite su mundo LAN. El lanzador del host reenvía estos metadatos al Invitado.<br/>El <strong>Lanzador del Invitado</strong> crea un proxy TCP local y lo transmite como una partida LAN falsa al cliente de Minecraft del Invitado.
</p>
</div>
</div>
<!-- Arrow -->
<div style="margin-left: 14px; border-left: 2px dashed var(--vp-c-divider); height: 16px;"></div>
<!-- Step 4 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">4</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Tunelización del tráfico de juego</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
El cliente invitado se conecta al proxy. El lanzador del invitado asigna la conexión a un nuevo canal binario DataChannel de WebRTC. El lanzador del host reenvía los paquetes al servidor real de Minecraft.
</p>
</div>
</div>
</div>
</div>

## 🔑 Cómo establecer conexiones entre usuarios

Las conexiones se establecen mediante el modelo Offer/Answer (Oferta/Respuesta). El lanzador iniciador crea una Offer y el receptor devuelve una Answer.

### Flujo del iniciador (Host)

El iniciador crea la PeerConnection, añade el canal de metadatos y genera la oferta SDP:

```ts
// "id" representa el identificador único del par objetivo
async function initiateConnection(id: string) {
    const connection = new PeerConnection(id, {
        iceServers: [
            { urls: "stun:stun.qq.com" }
        ],
        iceTransportPolicy: 'all'
    });

    // Crear el canal de metadatos para comandos de control
    const channel = connection.createDataChannel("metadata", {
        ordered: true,
        protocol: 'metadata'
    });

    // Escuchar cambios en la descripción local / candidatos ICE
    connection.onLocalDescription((description) => {
        // Enviar esta oferta SDP al receptor a través del servidor de señalización
        sendDescription(id, description);
    });

    // Si la biblioteca WebRTC requiere generación manual:
    const offer = await connection.createOffer();
    await connection.setLocalDescription(offer);
}
```

### Flujo del receptor (Invitado)

El receptor espera la oferta, la configura como descripción remota y devuelve una respuesta:

```ts
async function onReceiveOffer(id: string, offer: Description) {
    const connection = new PeerConnection(id, {
        iceServers: [{ urls: "stun:stun.qq.com" }],
        iceTransportPolicy: 'all'
    });

    await connection.setRemoteDescription(offer);

    // Escuchar el canal de metadatos entrante
    connection.onDataChannel((channel) => {
        if (channel.protocol === 'metadata') {
            console.log("¡Canal de metadatos establecido!");
        }
    });

    connection.onLocalDescription((description) => {
        // Enviar esta respuesta SDP de vuelta al iniciador
        sendDescription(id, description);
    });

    const answer = await connection.createAnswer();
    await connection.setLocalDescription(answer);
}
```

---

## ✉️ Formato de comunicación del canal de metadatos

Una vez establecida la conexión P2P, el canal de metadatos (`protocol: 'metadata'`) se utiliza para transmitir comandos de la sala. El formato es una cadena JSON en UTF-8:

```ts
interface Message {
    type: string;
    payload: any;
}
```

### 1. Mensajes de latido (Ping/Pong)
Utilizados para medir la latencia de red (Ping) y mantener activa la asignación del puerto NAT.
- **`heartbeat-ping`** (Se envía cada segundo):
  ```json
  {
      "type": "heartbeat-ping",
      "payload": { "time": 1718000000000 }
  }
  ```
- **`heartbeat-pong`** (Respuesta inmediata con la misma marca de tiempo):
  ```json
  {
      "type": "heartbeat-pong",
      "payload": { "time": 1718000000000 }
  }
  ```

### 2. Mensaje de identidad del jugador
Comparte el perfil del jugador (nombre, UUID y URL de aspectos/capas) para mostrar los avatares en la sala.
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

### 3. Mensaje de detección de LAN de Minecraft
Enviado por el host cuando su cliente de Minecraft local publica la partida en la red local.
```json
{
    "type": "lan",
    "payload": {
        "motd": "Mundo de Steve",
        "port": 54321
    }
}
```

---

## 🎮 Tunelización del tráfico TCP de Minecraft sobre DataChannel

Debido a que Minecraft utiliza TCP para las conexiones multijugador, pero WebRTC opera sobre UDP, el lanzador actúa como un **proxy TCP local**.

### 1. Proxy TCP del invitado (Receptor)
Al recibir un mensaje `lan`, el lanzador del invitado crea un servidor TCP local:

```ts
function startGuestProxy(motd: string, remotePort: number) {
    const proxyServer = net.createServer((tcpSocket) => {
        // Crear un canal de datos binario ordenado y confiable para esta conexión
        const gameChannel = peerConnection.createDataChannel(remotePort.toString(), {
            protocol: 'minecraft',
            ordered: true
        });

        // Enviar datos TCP desde el Minecraft local hacia el canal de datos de WebRTC
        tcpSocket.on('data', (data) => {
            gameChannel.sendBinary(data);
        });

        // Escribir datos binarios de WebRTC de vuelta en el socket TCP local
        gameChannel.onMessage((data) => {
            tcpSocket.write(Buffer.from(data));
        });

        tcpSocket.on('close', () => gameChannel.close());
        gameChannel.onClose(() => tcpSocket.destroy());
    });

    // Escuchar en un puerto local aleatorio disponible
    proxyServer.listen(0, () => {
        const localPort = proxyServer.address().port;
        // Transmitir este puerto localmente para que el Minecraft local lo detecte automáticamente
        broadcastLanDiscovery(motd, localPort);
    });
}
```

### 2. Receptor de túnel del iniciador (Host)
El host escucha los canales de datos `minecraft` entrantes y los redirige a la partida real de Minecraft:

```ts
peerConnection.onDataChannel((channel) => {
    if (channel.protocol === 'minecraft') {
        const actualGamePort = parseInt(channel.label);

        // Abrir una conexión TCP directa a la partida de Minecraft local
        const gameSocket = net.createConnection({ port: actualGamePort });

        // Unir datos binarios sin procesar entre el socket y el canal
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

## 📖 Apéndice y notas de implementación

### Transmisión de detección LAN de Minecraft
Minecraft descubre partidas LAN escuchando paquetes multicast. El lanzador transmite la información del servidor con el siguiente formato:
```
[MOTD]${motd}[/MOTD][AD]${port}[/AD]
```
Este paquete debe enviarse al grupo de multicast `224.0.2.60:4445`.

### Confiabilidad de transmisión
WebRTC permite configurar los canales de datos para garantizar la confiabilidad (emulación TCP sobre UDP). Los desarrolladores **deben** establecer `ordered: true` y omitir `maxPacketLifeTime` y `maxRetransmits` para evitar la pérdida de paquetes.

### Bibliotecas WebRTC recomendadas
- **Go**: [pion/webrtc](https://github.com/pion/webrtc) (Muy recomendado para servidores)
- **NodeJS**: [node-datachannel](https://github.com/murat-dogan/node-datachannel) (Enlaces C++ nativos)
- **C/C++**: [libdatachannel](https://github.com/paullouisageneau/libdatachannel) (Ligero, sin dependencias complejas como GStreamer)
- **Rust**: [datachannel-rs](https://github.com/lerouxrgd/datachannel-rs)
- **Java**: [webrtc-java](https://github.com/devopvoid/webrtc-java)
