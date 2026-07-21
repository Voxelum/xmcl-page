# Сеткавы пратакол Minecraft на базе WebRTC

Гэты артыкул апісвае рэалізацыю лаўнчара для Minecraft, яка дазваляе гуляць па сетцы паміж рознымі лакальнымі сеткамі праз WebRTC без неабходнасці выкарыстання старонняга ПЗ для VPN або ручной налады пераадрасацыі партоў (port-forwarding).

---

## 🌐 Што такое WebRTC? Чаму менавіта ён?

WebRTC (Web Real-Time Communication) — гэта тэхналогія для аднарангавай (peer-to-peer) сувязі ў рэальным часе. Цытата з [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API):

> WebRTC (Web Real-Time Communications) — гэта тэхналогія з адкрытым зыходным кодам, яка дазваляе ажыццяўляць сувязь у рэальным часе праз аднарангавыя злучэнні.

Хаця WebRTC першапачаткова ствараўся для перадачы аўдыё- і відэапатокаў паміж браўзерамі, яго архітэктура выдатна падыходзіць для гульнявых лаўнчараў для ўстанаўлення прамых злучэнняў з нізкай затрымкай.

### Параўнанне метадаў рэалізацыі гульні па сетцы

У наступнай табліцы параўноўваюцца тры спосабы рэалізацыі сеткавай гульні:

| Характарыстыка | WebRTC | Уласная рэалізацыя (Custom Hole Punching) | Стороннія VPN / Праграмы (напр., Hamachi, Radmin) |
| :--- | :--- | :--- | :--- |
| **Кастамізацыя** | **High** | **Highest** | - |
| **Складанасць рэалізацыі** | **Low** | **High** | **Lowest** |
| **Зручнасць для карыстальніка** | **Dependent** | **Dependent** | **Requires admin** |

---

## 📑 Дэталі пратаколу і базавыя канцэпцыі

Пратакол складаецца з трох асноўных частак:
1. **Усталяванне злучэння**: Абмен апісаннямі сесій (SDP) для ўзгаднення абыходу NAT.
2. **Канал метаданых**: Кіруючы канал для сігналізацыі дзеянняў у пакоі, інфармацыі пра гульцоў і статус гульні.
3. **Тунэляванне Minecraft**: Перадача сырога TCP-трафіку гульні ўнутры надзейных бінарных каналаў дадзеных WebRTC.

### Асноўныя канцэпцыі

*   **PeerConnection**: Прадстаўляе злучэнне, усталяванае паміж двума гульцамі. Кіруе абыходам NAT, ICE-кандыдатамі і шыфраваннем.
*   **DataChannel**: Двухбаковы канал перадачы дадзеных унутры `PeerConnection`. Адно P2P-злучэнне можа мець некалькі каналаў дадзеных (напрыклад, адзін для метаданых і па адным на кожнае гульнявое падключэнне).
*   **SDP Description**: Радок пратаколу апісання сесіі (Session Description Protocol), які змяшчае інфармацыю пра падтрымоўваныя кодэкі, параметры злучэння і адрасы кандыдатаў.
*   **ICEServer (STUN/TURN)**:
    *   **STUN**: Выкарыстоўваецца для вызначэння публічнай IP-адрасы гульца і тыпу NAT. Даступна шмат бясплатных публічных STUN-сервераў (напрыклад, ад Google або Tencent).
    *   **TURN**: Сервер-рэтранслятар, які выкарыстоўваецца, калі прамое злучэнне немагчыма (напрыклад, абодва гульцы за сіметрычным NAT). Рэтрасляцыя трафіку патрабуе значнай прапускной здольнасці сервераў.

---

## 🔄 Схема працы пратаколу і архітэктура сігналізацыі

Наступная дыяграма ілюструе, як каардынуецца P2P-злучэнне, выконваецца абыход NAT і тунэлюецца гульнявы трафік паміж двума кліентамі Minecraft:

<div style="margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
<h3 style="margin-top: 0; margin-bottom: 16px; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1); display: flex; align-items: center; gap: 8px;">
<span>🔄 Паслядоўнасць падключэння і абмену дадзенымі</span>
</h3>
<div style="display: flex; flex-direction: column; gap: 16px;">
<!-- Step 1 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">1</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Сігналізацыя і пакой</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
<strong>Хост</strong> дасылае SDP Offer на сервер сігналізацыі (Lobby). <br/><strong>Госць</strong> атрымлівае Offer, усталёўвае яго і вяртае SDP Answer хосту.
</p>
</div>
</div>
<!-- Arrow -->
<div style="margin-left: 14px; border-left: 2px dashed var(--vp-c-divider); height: 16px;"></div>
<!-- Step 2 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">2</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Абыход NAT і Hole Punching</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
Абодва лаўнчары выконваюць абыход NAT з дапамогай STUN/TURN для ўсталявання прамога P2P-злучэння. Адкрываецца надзейны канал кіравання метададзенымі.
</p>
</div>
</div>
<!-- Arrow -->
<div style="margin-left: 14px; border-left: 2px dashed var(--vp-c-divider); height: 16px;"></div>
<!-- Step 3 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">3</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Выяўленне лакальнай гульні</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
<strong>Хост Minecraft</strong> трансліруе свой LAN-свет. Лаўнчар хоста перадае метададзеныя госцю.<br/><strong>Лаўнчар госця</strong> запускае лакальны проксі TCP і трансліруе яго як фэйкавую LAN-гульню лакальнаму кліенту Minecraft.
</p>
</div>
</div>
<!-- Arrow -->
<div style="margin-left: 14px; border-left: 2px dashed var(--vp-c-divider); height: 16px;"></div>
<!-- Step 4 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">4</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Тунэляванне гульнявога трафіку</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
Кліент госця падключаецца да проксі. Лаўнчар госця мапіць злучэнне на новы бінарны DataChannel WebRTC. Лаўнчар хоста перадае пакеты на рэальны сервер Minecraft.
</p>
</div>
</div>
</div>
</div>

## 🔑 Усталяванне злучэння паміж карыстальнікамі

Злучэнні ўсталёўваюцца з дапамогай мадэлі Offer/Answer (Прапанова/Адказ). Лаўнчар-ініцыятар стварае Offer, а атрымальнік вяртае Answer.

### Паток ініцыятара (Хост)

Ініцыятар стварае злучэнне, дадае канал метаданых і генеруе SDP-прапанову:

```ts
// "id" прадстаўляе унікальны ідэнтыфікатар мэтавага піра
async function initiateConnection(id: string) {
    const connection = new PeerConnection(id, {
        iceServers: [
            { urls: "stun:stun.qq.com" }
        ],
        iceTransportPolicy: 'all'
    });

    // Ствараем канал метаданых для кіруючых каманд
    const channel = connection.createDataChannel("metadata", {
        ordered: true,
        protocol: 'metadata'
    });

    // Слухаем лакальныя змены апісання / ICE-кандыдатаў
    connection.onLocalDescription((description) => {
        // Дасылаем гэты SDP offer атрымальніку праз сігнальны сервер
        sendDescription(id, description);
    });

    // Калі бібліятэка WebRTC патрабуе ручной генерацыі прапановы:
    const offer = await connection.createOffer();
    await connection.setLocalDescription(offer);
}
```

### Паток атрымальніка (Gosць)

Атрымальнік чакае прапанову, усталёўвае яе як аддаленае апісанне і вяртае адказ:

```ts
async function onReceiveOffer(id: string, offer: Description) {
    const connection = new PeerConnection(id, {
        iceServers: [{ urls: "stun:stun.qq.com" }],
        iceTransportPolicy: 'all'
    });

    await connection.setRemoteDescription(offer);

    // Слухаем уваходны канал метаданых
    connection.onDataChannel((channel) => {
        if (channel.protocol === 'metadata') {
            console.log("Канал метаданых усталяваны!");
        }
    });

    connection.onLocalDescription((description) => {
        // Дасылаем адказ SDP назад ініцыятару
        sendDescription(id, description);
    });

    const answer = await connection.createAnswer();
    await connection.setLocalDescription(answer);
}
```

---

## ✉️ Фармат сувязі ў канале метаданых

Пасля ўсталявання P2P-злучэння канал метаданых (`protocol: 'metadata'`) выкарыстоўваецца для перадачы каманд поваду. Фармат паведамленняў — гэта радок JSON у кодаванні UTF-8:

```ts
interface Message {
    type: string;
    payload: any;
}
```

### 1. Паведамленні серцабіцця (Ping/Pong)
Выкарыстоўваецца для вымярэння затрымкі сеткі (пінгу) і падтрымання сувязі NAT актыўнай.
- **`heartbeat-ping`** (Дасылаецца штосекундна):
  ```json
  {
      "type": "heartbeat-ping",
      "payload": { "time": 1718000000000 }
  }
  ```
- **`heartbeat-pong`** (Адказ, які вяртаецца неадкладна з той жа меткай часу):
  ```json
  {
      "type": "heartbeat-pong",
      "payload": { "time": 1718000000000 }
  }
  ```

### 2. Паведамленне пра ідэнтычнасць гульца
Перадае профіль гульца (імя карыстальніка, UUID і URL-адрасы скінаў/плашчоў), каб правільна адлюстроўваць аватары ў лобі.
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

### 3. Паведамленне пра выяўленне LAN гульні
Надсылаецца хостам, калі яго лакальны кліент Minecraft публікуе гульню ў лакальнай сетцы.
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

## 🎮 Тунэляванне TCP-трафіку Minecraft праз DataChannel

Паколькі Minecraft выкарыстоўвае TCP для падключэнняў да мультыплэеру, а WebRTC працуе праз UDP, лаўнчар выступае ў ролі **лакальнага TCP-проксі**.

### 1. TCP-проксі атрымальніка (Gosць)
Атрымаўшы паведамленне `lan`, лаўнчар госця запускае лакальны TCP-сервер:

```ts
function startGuestProxy(motd: string, remotePort: number) {
    const proxyServer = net.createServer((tcpSocket) => {
        // Ствараем надзейны ўпарадкаваны бінарны DataChannel для гэтага злучэння
        const gameChannel = peerConnection.createDataChannel(remotePort.toString(), {
            protocol: 'minecraft',
            ordered: true
        });

        // Перадаем дадзеныя TCP з лакальнага Minecraft у DataChannel WebRTC
        tcpSocket.on('data', (data) => {
            gameChannel.sendBinary(data);
        });

        // Передаем бінарныя дадзеныя WebRTC назад у лакальны сокет TCP
        gameChannel.onMessage((data) => {
            tcpSocket.write(Buffer.from(data));
        });

        tcpSocket.on('close', () => gameChannel.close());
        gameChannel.onClose(() => tcpSocket.destroy());
    });

    // Слухаем выпадковы вольны лакальны порт
    proxyServer.listen(0, () => {
        const localPort = proxyServer.address().port;
        // Трансліруем гэты порт лакальна, каб меню мультыплэеру Minecraft яго ўбачыла
        broadcastLanDiscovery(motd, localPort);
    });
}
```

### 2. Прымач тунэлю ініцыятара (Хост)
Хост слухае ўваходныя каналы дадзеных `minecraft` і перанакіроўвае іх на рэальную гульню Minecraft:

```ts
peerConnection.onDataChannel((channel) => {
    if (channel.protocol === 'minecraft') {
        const actualGamePort = parseInt(channel.label);

        // Адкрываем прамое TCP-злучэнне з лакальнай гульнёй Minecraft
        const gameSocket = net.createConnection({ port: actualGamePort });

        // Перадаем бінарныя дадзеныя паміж сокетам і каналам
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

## 📖 Дадатак і заўвагі да рэалізацыі

### Трансляцыя інфармацыі пра выяўленне LAN
Minecraft выяўляе гульні ў лакальнай сетцы з дапамогай UDP multicast. Лаўнчар трансліруе інфармацыю пра сервер у такім фармаце:
```
[MOTD]${motd}[/MOTD][AD]${port}[/AD]
```
Гэты пакет павінен быць адпраўлены на адрас мультыкаст-групы `224.0.2.60:4445`.

### Надзейная перадача дадзеных
WebRTC дазваляе наладжваць каналы дадзеных для гарантыі надзейнасці (эмуляцыя TCP праз UDP). Распрацоўшчыкі **павінны** усталяваць `ordered: true` і апусціць параметры `maxPacketLifeTime` і `maxRetransmits` падчас стварэння, каб прадухіліць страту пакетаў.

### Бібліятэкі WebRTC

Вось рэкамендаваныя рэалізацыі WebRTC для розных экасістэм:
- **Go**: [pion/webrtc](https://github.com/pion/webrtc) (Вельмі рэкамендуецца для сервераў)
- **NodeJS**: [node-datachannel](https://github.com/murat-dogan/node-datachannel) (C++ біндынгі)
- **C/C++**: [libdatachannel](https://github.com/paullouisageneau/libdatachannel) (Лёгкая вага, не патрабуе цяжкага стэка GStreamer/WebRTC)
- **Rust**: [datachannel-rs](https://github.com/lerouxrgd/datachannel-rs)
- **Java**: [webrtc-java](https://github.com/devopvoid/webrtc-java)
