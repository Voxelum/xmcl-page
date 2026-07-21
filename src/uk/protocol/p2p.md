# Мережевий протокол Minecraft на базі WebRTC

Ця стаття описує реалізацію лаунчера для Minecraft, яка дозволяє грати по мережі між різними локальними мережами за допомогою WebRTC без необхідності використання стороннього ПЗ для VPN або ручного налаштування перенаправлення портів (port-forwarding).

---

## 🌐 Що таке WebRTC? Чому саме він?

WebRTC (Web Real-Time Communication) — це технологія для однорангового (peer-to-peer) зв'язку в реальному часі. Цитата з [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API):

> WebRTC (Web Real-Time Communications) — це технологія з відкритим кодом, яка дозволяє здійснювати зв'язок у реальному часі через однорангові з'єднання.

Хоча WebRTC спочатку створювався для передачі аудіо- та відеопотоків поміж браузерами, його архітектура чудово підходить для ігрових лаунчерів для встановлення прямих з'єднань із низькою затримкою.

### Порівняння методів реалізації гри по мережі

У наступній таблиці порівнюються три способи реалізації мережевої гри:

| Характеристика | WebRTC | Власна реалізація (Custom Hole Punching) | Сторонні VPN / Програми (напр., Hamachi, Radmin) |
| :--- | :--- | :--- | :--- |
| **Кастомізація** | **Висока** | **Найвища** | - |
| **Складність реалізації** | **Середня-Низька** | **Дуже висока** | **Дуже низька** |
| **Зручність для користувача** | **Відмінна** | **Відмінна** | **Посередня** |

---

## 📑 Деталі протоколу та базові концепції

Протокол складається з трьох основних частин:
1. **Встановлення з'єднання**: Обмін описами сесій (SDP) для погодження обходу NAT.
2. **Канал метаданих**: Керуючий канал для сигналізації дій у кімнаті, інформації про гравців та статус гри.
3. **Тунелювання Minecraft**: Передача сирого TCP-трафіку гри всередині надійних бінарних каданів даних WebRTC.

### Основні концепції

*   **PeerConnection**: Представляє з'єднання, встановлене між двома гравцями. Керує обходом NAT, ICE-кандидатами та шифруванням.
*   **DataChannel**: Двосторонній канал передачі даних всередині `PeerConnection`. Одне P2P-з'єднання може мати кілька каналів даних (наприклад, один для метаданих та по одному на кожне ігрове підключення).
*   **SDP Description**: Рядок протоколу опису сесії (Session Description Protocol), що містить інформацію про підтримувані кодеки, параметры з'єднання та адреси кандидатів.
*   **ICEServer (STUN/TURN)**:
    *   **STUN**: Використовується для визначення публічної IP-адреси гравця та типу NAT. Доступно багато безкоштовних публічних STUN-серверів (наприклад, від Google або Tencent).
    *   **TURN**: Сервер-ретранслятор, який використовується, якщо пряме з'єднання неможливе (наприклад, обидва гравці за симетричним NAT). Ретрансляція трафіку потребує значної пропускної здатності серверів.

---

## 🔄 Схема роботи протоколу та архітектура сигналізації

Наступна діаграма ілюструє, як координується P2P-з'єднання, виконується обхід NAT та тунелюється ігровий трафік між двома клієнтами Minecraft:

<div style="margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
<h3 style="margin-top: 0; margin-bottom: 16px; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1); display: flex; align-items: center; gap: 8px;">
<span>🔄 Послідовність підключення та обміну даними</span>
</h3>
<div style="display: flex; flex-direction: column; gap: 16px;">
<!-- Step 1 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">1</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Сигналізація та кімната</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
<strong>Хост</strong> надсилає SDP Offer на сервер сигналізації (Lobby). <br/><strong>Гість</strong> отримує Offer, встановлює його та повертає SDP Answer хосту.
</p>
</div>
</div>
<!-- Arrow -->
<div style="margin-left: 14px; border-left: 2px dashed var(--vp-c-divider); height: 16px;"></div>
<!-- Step 2 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">2</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Обхід NAT та Hole Punching</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
Обидва лаунчери виконують обхід NAT за допомогою STUN/TURN для встановлення прямого P2P-з'єднання. Відкривається надійний канал керування метаданими.
</p>
</div>
</div>
<!-- Arrow -->
<div style="margin-left: 14px; border-left: 2px dashed var(--vp-c-divider); height: 16px;"></div>
<!-- Step 3 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">3</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Виявлення локальної гри</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
<strong>Хост Minecraft</strong> транслює свій LAN-світ. Лаунчер хоста передає метадані гостю.<br/><strong>Лаунчер гостя</strong> запускає локальний проксі TCP і транслює його як фейкову LAN-гру локальному клієнту Minecraft.
</p>
</div>
</div>
<!-- Arrow -->
<div style="margin-left: 14px; border-left: 2px dashed var(--vp-c-divider); height: 16px;"></div>
<!-- Step 4 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">4</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Тунелювання ігрового трафіку</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
Клієнт гостя підключається до проксі. Лаунчер гостя мапить з'єднання на новий бінарний DataChannel WebRTC. Лаунчер хоста передає пакети на реальний сервер Minecraft.
</p>
</div>
</div>
</div>
</div>

## 🔑 Встановлення з'єднання між користувачами

З'єднання встановлюються за допомогою моделі Offer/Answer (Пропозиція/Відповідь). Лаунчер-ініціатор створює Offer, а отримувач повертає Answer.

### Потік ініціатора (Хост)

Ініціатор створює з'єднання, додає канал метаданих та генерує SDP-пропозицію:

```ts
// "id" представляє унікальний ідентифікатар цільового піра
async function initiateConnection(id: string) {
    const connection = new PeerConnection(id, {
        iceServers: [
            { urls: "stun:stun.qq.com" }
        ],
        iceTransportPolicy: 'all'
    });

    // Створюємо канал метаданих для керуючих команд
    const channel = connection.createDataChannel("metadata", {
        ordered: true,
        protocol: 'metadata'
    });

    // Слухаємо локальні зміни опису / ICE-кандидатів
    connection.onLocalDescription((description) => {
        // Надсилаємо цей SDP offer отримувачу через сигнальний сервер
        sendDescription(id, description);
    });

    // Якщо бібліотека WebRTC вимагає ручної генерації пропозиції:
    const offer = await connection.createOffer();
    await connection.setLocalDescription(offer);
}
```

### Потік отримувача (Гість)

Отримувач чекає на пропозицію, встановлює її як віддалений опис та повертає відповідь:

```ts
async function onReceiveOffer(id: string, offer: Description) {
    const connection = new PeerConnection(id, {
        iceServers: [{ urls: "stun:stun.qq.com" }],
        iceTransportPolicy: 'all'
    });

    await connection.setRemoteDescription(offer);

    // Слухаємо вхідний канал метаданих
    connection.onDataChannel((channel) => {
        if (channel.protocol === 'metadata') {
            console.log("Канал метаданих встановлено!");
        }
    });

    connection.onLocalDescription((description) => {
        // Надсилаємо відповідь SDP назад ініціатору
        sendDescription(id, description);
    });

    const answer = await connection.createAnswer();
    await connection.setLocalDescription(answer);
}
```

---

## ✉️ Формат зв'язку в каналі метаданих

Після встановлення P2P-з'єднання канал метаданих (`protocol: 'metadata'`) використовується для передачі команд кімнати. Формат повідомлень — це рядок JSON у кодуванні UTF-8:

```ts
interface Message {
    type: string;
    payload: any;
}
```

### 1. Повідомлення серцебиття (Ping/Pong)
Використовується для вимірювання затримки мережі (пінгу) та підтримання зв'язку NAT активним.
- **`heartbeat-ping`** (Надсилається щосекунди):
  ```json
  {
      "type": "heartbeat-ping",
      "payload": { "time": 1718000000000 }
  }
  ```
- **`heartbeat-pong`** (Відповідь, що повертається негайно з тим самим міткою часу):
  ```json
  {
      "type": "heartbeat-pong",
      "payload": { "time": 1718000000000 }
  }
  ```

### 2. Повідомлення про ідентичність гравця
Передає профіль гравця (ім'я користувача, UUID та URL-адреси скінів/плащів), щоб правильно відображати аватари в лобі.
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

### 3. Повідомлення про виявлення LAN гри
Надсилається хостом, калі його локальний клієнт Minecraft публікує гру в локальній мережі.
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

## 🎮 Тунелювання TCP-трафіку Minecraft через DataChannel

Оскільки Minecraft використовує TCP для підключень до мультиплеєру, а WebRTC працює через UDP, лаунчер виступає в ролі **локального TCP-проксі**.

### 1. TCP-проксі отримувача (Гість)
Отримавши повідомлення `lan`, лаунчер гостя запускає локальний TCP-сервер:

```ts
function startGuestProxy(motd: string, remotePort: number) {
    const proxyServer = net.createServer((tcpSocket) => {
        // Створюємо надійний впорядкований бінарний DataChannel для цього з'єднання
        const gameChannel = peerConnection.createDataChannel(remotePort.toString(), {
            protocol: 'minecraft',
            ordered: true
        });

        // Передаємо дані TCP з локального Minecraft у DataChannel WebRTC
        tcpSocket.on('data', (data) => {
            gameChannel.sendBinary(data);
        });

        // Передаємо бінарні дані WebRTC назад у локальний сокет TCP
        gameChannel.onMessage((data) => {
            tcpSocket.write(Buffer.from(data));
        });

        tcpSocket.on('close', () => gameChannel.close());
        gameChannel.onClose(() => tcpSocket.destroy());
    });

    // Слухаємо випадковий вільний локальний порт
    proxyServer.listen(0, () => {
        const localPort = proxyServer.address().port;
        // Транслюємо цей порт локально, щоб меню мультиплеєру Minecraft його побачило
        broadcastLanDiscovery(motd, localPort);
    });
}
```

### 2. Приймач тунелю ініціатора (Хост)
Хост слухае вхідні канали даних `minecraft` і перенаправляє іх на реальну гру Minecraft:

```ts
peerConnection.onDataChannel((channel) => {
    if (channel.protocol === 'minecraft') {
        const actualGamePort = parseInt(channel.label);

        // Відкриваємо пряме TCP-з'єднання з локальною грою Minecraft
        const gameSocket = net.createConnection({ port: actualGamePort });

        // Передаємо бінарні дані між сокетом та каналом
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

## 📖 Додаток та примітки до реалізації

### Трансляція інформації про виявлення LAN
Minecraft виявляє ігри в локальній мережі за допомогою UDP multicast. Лаунчер транслює інформацію про сервер у такому форматі:
```
[MOTD]${motd}[/MOTD][AD]${port}[/AD]
```
Цей пакет має бути надісланий на адресу мультикаст-групи `224.0.2.60:4445`.

### Надійна передача даних
WebRTC дозволяє налаштовувати канали даних для гарантії надійності (эмуляція TCP через UDP). Розробники **повинні** встановити `ordered: true` та опустити параметры `maxPacketLifeTime` та `maxRetransmits` під час створення, щоб запобігти втраті пакетів.

### Бібліотеки WebRTC

Ось рекомендовані реалізації WebRTC для різних екосистем:
- **Go**: [pion/webrtc](https://github.com/pion/webrtc) (Дуже рекомендується для серверів)
- **NodeJS**: [node-datachannel](https://github.com/murat-dogan/node-datachannel) (C++ біндінги)
- **C/C++**: [libdatachannel](https://github.com/paullouisageneau/libdatachannel) (Легка вага, не вимагає важкого стеку GStreamer/WebRTC)
- **Rust**: [datachannel-rs](https://github.com/lerouxrgd/datachannel-rs)
- **Java**: [webrtc-java](https://github.com/devopvoid/webrtc-java)
