# WebRTC негізіндегі Minecraft желілік хаттамасы

Бұл мақала WebRTC арқылы әртүрлі жергілікті желілер арасында сыртқы VPN бағдарламаларынсыз немесе бағыттауышта порттарды қолмен бағыттаусыз (port-forwarding) желілік ойын ойнауға мүмкіндік беретін Minecraft лаунчерінің жүзеге асырылуын сипаттайды.

---

## 🌐 WebRTC дегеніміз не? Неліктен оны таңдаймыз?

WebRTC (Web Real-Time Communication) — нақты уақыттағы тікелей (peer-to-peer) байланыс технологиясы. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) анықтамасы бойынша:

> WebRTC (Web Real-Time Communications) — тікелей қосылымдар арқылы нақты уақытта байланыс орнатуға мүмкіндік беретін ашық бастапқы кодты технология.

WebRTC бастапқыда веб-шолғыштар арасында нақты уақыттағы аудио және бейне ағындарын беру үшін жасалғанымен, оның негізгі архитектурасы ойын лаунчерлері үшін пайдаланушылар арасында тікелей, кідірісі төмен деректер арналарын орнатуға өте қолайлы.

### Желілік ойынды жүзеге асыру әдістерін салыстыру

Келесі кестеде желілік ойынды іске асырудың үш әдісі салыстырылған:

| Сипаттама | WebRTC | Жеке тесік бұрғылау (қолмен іске асыру) | Үшінші тарап VPN / бағдарламалары (мысалы, Hamachi, Radmin) |
| :--- | :--- | :--- | :--- |
| **Кастомизация** | **Жоғары** | **Ең жоғары** | - |
| **Әзірлеу қиындығы** | **Орташа-Төмен** | **Өте жоғары** | **Өте төмен** |
| **Ыңғайлылық** | **Өте жақсы** | **Өте жақсы** | **Орташа** |

---

## 📑 Хаттама мәліметтері мен негізгі ұғымдар

Хаттама негізінен үш бөліктен тұрады:
1. **Қосылымды орнату**: NAT-тан өтуді келісу үшін сессия сипаттамаларымен (SDP) алмасу.
2. **Метадеректер арнасы**: Бөлме әрекеттерін, ойыншылар туралы ақпаратты және LAN ойынының мәртебесін беруге арналған басқару арнасы.
3. **Minecraft туннельдеу**: Ойынның TCP трафигін сенімді WebRTC екілік деректер арналары ішінде тасымалдау.

### Негізгі ұғымдар

*   **PeerConnection**: Екі ойыншы арасында орнатылған қосылым. NAT-тан өтуді, ICE-кандидаттарды және шифрлауды басқарады.
*   **DataChannel**: `PeerConnection` ішіндегі екі жақты деректер арнасы. Бір P2P қосылымында бірнеше деректер арнасы болуы мүмкін (мысалы, біреуі метадеректер үшін және әрбір ойын қосылымы үшін бір-бірден).
*   **SDP Description**: Қолдау көрсетілетін кодектер, қосылым параметрлері және кандидаттардың мекенжайлары туралы ақпаратты қамтитын сессия сипаттамасы протоколының (Session Description Protocol) мәтіні.
*   **ICEServer (STUN/TURN)**:
    *   **STUN**: Пайдаланушының сыртқы IP мекенжайын және NAT түрін анықтау үшін қолданылады. Көптеген тегін қоғамдық STUN серверлері бар (мысалы, Google немесе Tencent).
    *   **TURN**: Ретранслятор сервер (мысалы, екі ойыншы да симметриялы NAT артында болғанда). Трафикті ретрансляциялау сервер өткізу қабілетін талап етеді.

---

## 🔄 Желілік ойынды жүзеге асыру схемасы

Нақты уақыттағы тікелей байланысты іске асырудың толық қадамдары төменде көрсетілген:

<div style="margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
<h3 style="margin-top: 0; margin-bottom: 16px; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1); display: flex; align-items: center; gap: 8px;">
<span>🔄 Қосылым және деректер ағынының реттілігі</span>
</h3>
<div style="display: flex; flex-direction: column; gap: 16px;">
<!-- Step 1 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">1</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Сигнал алмасу және бөлмені баптау</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
<strong>Хост</strong> сигналдық серверге (Lobby) SDP Offer жібереді. <br/><strong>Қонақ</strong> ұсынысты алып, орнатады және хостқа SDP Answer қайтарады.
</p>
</div>
</div>
<!-- Arrow -->
<div style="margin-left: 14px; border-left: 2px dashed var(--vp-c-divider); height: 16px;"></div>
<!-- Step 2 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">2</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">NAT-тан өту және Hole Punching</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
Екі лаунчер де тікелей P2P қосылымын орнату үшін STUN/TURN көмегімен NAT-тан өтуді орындайды. Сенімді метадеректерді басқару арнасы ашылады.
</p>
</div>
</div>
<!-- Arrow -->
<div style="margin-left: 14px; border-left: 2px dashed var(--vp-c-divider); height: 16px;"></div>
<!-- Step 3 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">3</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">LAN ойынын анықтау</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
<strong>Minecraft хосты</strong> өзінің LAN әлемін таратады. Хост лаунчері бұл метадеректерді қонаққа жібереді.<br/><strong>Қонақ лаунчері</strong> жергілікті TCP проксиін іске қосады және оны қонақтың Minecraft клиентіне жалған LAN ойыны ретінде таратады.
</p>
</div>
</div>
<!-- Arrow -->
<div style="margin-left: 14px; border-left: 2px dashed var(--vp-c-divider); height: 16px;"></div>
<!-- Step 4 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">4</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Ойын трафигін туннельдеу</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
Қонақ клиенті проксиге қосылады. Қонақ лаунчері қосылымды жаңа екілік WebRTC DataChannel-ге бағыттайды. Хост лаунчері пакеттерді нақты Minecraft серверіне жеткізеді.
</p>
</div>
</div>
</div>
</div>

## 🔑 Пайдаланушылар арасында қосылым орнату

Қосылымдар Offer/Answer (Ұсыныс/Жауап) моделі арқылы орнатылады. Бастамашы лаунчер Offer жасайды, ал қабылдаушы Answer қайтарады.

### Бастамашы (Хост) ағыны

Бастамашы қосылым құрады, метадеректер арнасын қосады және SDP ұсынысын жасайды:

```ts
// "id" мақсатты пирдің бірегей сессия ID-ін білдіреді
async function initiateConnection(id: string) {
    const connection = new PeerConnection(id, {
        iceServers: [
            { urls: "stun:stun.qq.com" }
        ],
        iceTransportPolicy: 'all'
    });

    // Басқару командаларына арналған метадеректер арнасын құрамыз
    const channel = connection.createDataChannel("metadata", {
        ordered: true,
        protocol: 'metadata'
    });

    // Жергілікті сипаттама / ICE-кандидаттардың өзгеруін тыңдаймыз
    connection.onLocalDescription((description) => {
        // Бұл SDP offer-ды сигналдық сервер арқылы қабылдаушыға жібереміз
        sendDescription(id, description);
    });

    // Егер WebRTC кітапханасы ұсынысты қолмен жасауды талап етсе:
    const offer = await connection.createOffer();
    await connection.setLocalDescription(offer);
}
```

### Қабылдаушы (Қонақ) ағыны

Қабылдаушы ұсынысты күтеді, оны қашықтағы сипаттама ретінде орнатады және жауап қайтарады:

```ts
async function onReceiveOffer(id: string, offer: Description) {
    const connection = new PeerConnection(id, {
        iceServers: [{ urls: "stun:stun.qq.com" }],
        iceTransportPolicy: 'all'
    });

    await connection.setRemoteDescription(offer);

    // Кіріс метадеректер арнасын тыңдаймыз
    connection.onDataChannel((channel) => {
        if (channel.protocol === 'metadata') {
            console.log("Метадеректер арнасы орнатылды!");
        }
    });

    connection.onLocalDescription((description) => {
        // SDP жауабын бастамашыға қайтарамыз
        sendDescription(id, description);
    });

    const answer = await connection.createAnswer();
    await connection.setLocalDescription(answer);
}
```

---

## ✉️ Метадеректер арнасындағы хабарлама пішімі

P2P қосылымы орнатылғаннан кейін метадеректер арнасы (`protocol: 'metadata'`) бөлме командаларын жіберу үшін пайдаланылады. Хабарлама пішімі UTF-8 кодтауындағы JSON мәтіні болып табылады:

```ts
interface Message {
    type: string;
    payload: any;
}
```

### 1. Жүрек соғысы хабарламалары (Ping/Pong)
Желінің кідірісін (пинг) өлшеу және NAT қосылымын белсенді ұстау үшін қолданылады.
- **`heartbeat-ping`** (Әр секунд сайын жіберіледі):
  ```json
  {
      "type": "heartbeat-ping",
      "payload": { "time": 1718000000000 }
  }
  ```
- **`heartbeat-pong`** (Сол уақыт белгісімен дереу қайтарылатын жауап):
  ```json
  {
      "type": "heartbeat-pong",
      "payload": { "time": 1718000000000 }
  }
  ```

### 2. Ойыншының жеке басы туралы хабарлама
Лоббиде аватарларды дұрыс көрсету үшін ойыншының профилін (пайдаланушы аты, UUID және скин/плащ сілтемелері) жібереді.
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

### 3. Ойын ақпаратын тарату (LAN)
Хост жергілікті Minecraft ойынын LAN желісінде жариялаған кезде жіберіледі.
```json
{
    "type": "lan",
    "payload": {
        "motd": "Steve's World",
        "port": 54321
    }
}
```

---

## 🎮 Minecraft-тың TCP трафигін DataChannel арқылы туннельдеу

Minecraft мультиплеер үшін TCP пайдаланатындықтан, ал WebRTC UDP арқылы жұмыс істейтіндіктен, лаунчер **жергілікті TCP-прокси** ретінде әрекет етеді.

### 1. Қонақтың TCP-проксиі (Қабылдаушы)
`lan` хабарламасын алған кезде, қонақтың лаунчері жергілікті TCP-серверді іске қосады:

```ts
function startGuestProxy(motd: string, remotePort: number) {
    const proxyServer = net.createServer((tcpSocket) => {
        // Бұл қосылым үшін сенімді реттелген екілік DataChannel құрамыз
        const gameChannel = peerConnection.createDataChannel(remotePort.toString(), {
            protocol: 'minecraft',
            ordered: true
        });

        // Жергілікті Minecraft-тан TCP деректерін WebRTC DataChannel-ге жібереміз
        tcpSocket.on('data', (data) => {
            gameChannel.sendBinary(data);
        });

        // WebRTC екілік деректерін жергілікті TCP сокетіне қайтарамыз
        gameChannel.onMessage((data) => {
            tcpSocket.write(Buffer.from(data));
        });

        tcpSocket.on('close', () => gameChannel.close());
        gameChannel.onClose(() => tcpSocket.destroy());
    });

    // Кез келген бос жергілікті портты тыңдаймыз
    proxyServer.listen(0, () => {
        const localPort = proxyServer.address().port;
        // Ойынды майнкрафттың мультиплеер тізімі көруі үшін осы портты жергілікті түрде таратамыз
        broadcastLanDiscovery(motd, localPort);
    });
}
```

### 2. Бастамашының туннель қабылдағышы (Хост)
Хост кіріс `minecraft` деректер арналарын тыңдайды және оларды нақты Minecraft ойынына бағыттайды:

```ts
peerConnection.onDataChannel((channel) => {
    if (channel.protocol === 'minecraft') {
        const actualGamePort = parseInt(channel.label);

        // Жергілікті Minecraft ойынымен тікелей TCP байланысын орнатамыз
        const gameSocket = net.createConnection({ port: actualGamePort });

        // Сокет пен арна арасында екілік деректерді жібереміз
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

## 📖 Қосымша және іске асыру ескертпелері

### LAN ойыны туралы ақпаратты тарату
Minecraft жергілікті желідегі ойындарды UDP multicast арқылы анықтайды. Лаунчер сервер туралы ақпаратты келесі форматта `224.0.2.60:4445` мекенжайына жібереді:
```
[MOTD]${motd}[/MOTD][AD]${port}[/AD]
```

### Сенімді деректерді беру
WebRTC деректер арналарын сенімділікті қамтамасыз ету үшін баптауға мүмкіндік береді (UDP арқылы TCP эмуляциясы). Әзірлеушілер ойын пакеттерінің жоғалуын болдырмау үшін құру кезінде **міндетті түрде** `ordered: true` орнатып, `maxPacketLifeTime` және `maxRetransmits` параметрлерін қалдыруы керек.

### WebRTC кітапханалары

Әртүрлі экосистемалар үшін ұсынылатын WebRTC жүзеге асырулары:
- **Go**: [pion/webrtc](https://github.com/pion/webrtc) (Серверлер үшін өте ұсынылады)
- **NodeJS**: [node-datachannel](https://github.com/murat-dogan/node-datachannel) (C++ биндингтері)
- **C/C++**: [libdatachannel](https://github.com/paullouisageneau/libdatachannel) (Жеңіл, GStreamer/WebRTC ауыр стектерін қажет етпейді)
- **Rust**: [datachannel-rs](https://github.com/lerouxrgd/datachannel-rs)
- **Java**: [webrtc-java](https://github.com/devopvoid/webrtc-java)
