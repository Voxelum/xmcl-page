# WebRTC 기반 Minecraft 온라인 프로토콜

이 글은 WebRTC를 통해 로컬 네트워크 간 플레이를 가능하게 하는 마인크래프트 런처 구현에 대해 설명합니다.

## What is WebRTC? Why choose it?
## WebRTC란 무엇인가요? 왜 선택해야 할까요? 

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)에서 말하길:  

> WebRTC(Web Real-Time Communications)는 피어 투 피어 연결을 통해 실시간 통신을 가능하게 하는 오픈소스 기술입니다.  

원래는 브라우저 간 실시간 오디오와 비디오 스트리밍을 위해 설계되었지만, 런처에서 사용하는 것도 제한되지 않습니다.  

---

## 왜 WebRTC를 다른 기술보다 선택할까요?

아래 표는 온라인 플레이를 구현하는 세 가지 방법을 비교한 것입니다:  

|                     | WebRTC             | 직접 홀 펀칭(커스텀 프로토콜) | Hiper 및 기타 서드파티 소프트웨어 |
| ------------------- | ------------------ | ---------------------------- | ---------------------------- |
| 커스터마이즈 가능성     | 높음               | 가장 높음                     | -                            |
| 구현 난이도          | 낮음               | 높음                          | 가장 낮음                     |
| 사용자 편의성         | 구현에 따라 다름       | 구현에 따라 다름                 | 관리자 권한 필요, 비용 발생 가능 |

---

### 커스터마이즈 가능성

WebRTC와 커스텀 홀 펀칭은 개발자에게 최대한의 제어권을 제공합니다.  
커스텀 홀 펀칭은 전부 직접 구현해야 하므로 제약이 전혀 없습니다.  

반대로 Hiper 같은 서비스는 SDK가 제공되지 않는 이상 기능 확장이 어려울 수 있습니다.  

WebRTC는 사용자 간 연결 설정만 담당하며, 어떤 데이터를 언제 전송할지, 그리고 데이터를 어떻게 처리할지는 전적으로 개발자가 제어할 수 있습니다.  

---

### 구현 난이도

커스텀 홀 펀칭은 가장 높은 난이도를 가집니다.  
원리는 WebRTC와 비슷하지만, 결국 WebRTC 기능을 처음부터 전부 구현해야 합니다.  

이 과정에서 다양한 버그가 발생할 수 있으며, 개발자가 고려하지 못한 상황도 많습니다.  

WebRTC를 사용하면 이미 만들어진 안정적인 프로토콜을 활용할 수 있어, 단순히 제공되는 인터페이스만 사용하면 됩니다. 따라서 난이도가 훨씬 낮습니다.  

서드파티 서비스(Hiper 등)는 사실상 구현 난이도가 거의 없습니다.  

---

### 사용자 편의성

서드파티 서비스를 사용하면 외부 시스템에 연결해야 하므로 추가 비용이나 관리자 권한이 필요할 수 있습니다.  

WebRTC나 커스텀 홀 펀칭을 사용할 경우, 사용자 경험은 전적으로 개발자가 제어할 수 있습니다.  

---

## 프로토콜 세부 사항 및 기본 개념

프로토콜은 주로 다음 세 부분으로 구성됩니다:

1. 사용자 간 p2p(중앙 서버를 거치지 않고 클라이언트 컴퓨터끼리 직접 통신하는 방식) 연결을 어떻게 맺을지.  
2. 연결이 성립된 이후 어떤 프로토콜 형식으로 통신할지.  
3. Minecraft가 DataChannel을 통해 어떻게 연결될지.  

---

### PeerConnection

PeerConnection은 다른 사용자와 맺은 연결을 의미합니다.  

---

### DataChannel

DataChannel은 PeerConnection 안에서 다른 사용자와 맺은 데이터 통신 채널이며, Socket과 비슷합니다.  
하나의 PeerConnection에는 여러 개 DataChannel을 만들 수 있으며, 용도별로 나눠서 사용할 수 있습니다.  
PeerConnection이 성공적으로 맺어진 후에는 DataChannel을 자유롭게 만들거나 닫을 수 있습니다.  

DataChannel을 만들 때 `protocol`을 지정할 수 있습니다.  
원격 측에서는 이 `protocol`을 기준으로 DataChannel 생성 요청을 처리할 수 있습니다.  

---

### Description

Description은 PeerConnection이 로컬 네트워크 정보를 설명하기 위해 만드는 문자열입니다.  
이 문자열에는 홀 펀칭에 필요한 정보 일부가 포함되어 있습니다 (WebRTC도 결국 홀 펀칭이 필요합니다).  

개발자는 내용 전체를 이해할 필요 없으며, 단지 시그널링 서버를 통해 상대방에게 정확히 전달하면 됩니다.  

---

### ICEServer

ICEServer는 STUN과 TURN 두 종류로 나뉩니다.  

WebRTC는 홀 펀칭을 위해 STUN 서버에서 로컬 네트워크 정보를 가져와야 합니다.  
무료 STUN 서버가 많으며, 예를 들어 QQ에서 사용하는 `stun:stun.qq.com`이 있습니다.  

TURN 서버는 트래픽 중계 역할을 합니다.  
보통 직접 배포해야 하며, 비용이 발생합니다.  

---

## 사용자 간 연결을 맺는 방법

WebRTC에서는 Description 문자열 교환을 통해 사용자 간 연결이 형성됩니다.  

예를 들어 A와 B가 연결을 맺으려면, A(연결 시도자)는 다음을 수행해야 합니다:

- 새로운 WebRTC PeerConnection 생성  
- 로컬 Description이 바뀌는 것을 감지하고, 이를 B에게 조정 서버를 통해 전송  
- `protocol`을 `metadata`로 설정한 DataChannel 생성 (일반 통신용)  
- B의 Description을 기다림  

다음은 의사 코드(pseudo-code) 예시입니다:



```ts
// 여기서 “id”는 연결하려는 대상의 ID를 나타내며, 고유하기만 하면 임의로 생성할 수 있음
function initiateConnection(id: string) {
    // 새 연결 생성
    let connection = new PeerConnection(id, {
        iceServers: [
            // 사용자 지정 STUN/TURN 서버를 사용하여 연결을 설정할 수 있음
            // 하지만 서버를 너무 많이 사용하는 것은 권장되지 않음 - 일반적으로 1~2개면 충분
            "stun:stun.qq.com",
        ]
        iceTransportPolicy: 'all',
    });

    // 일부 WebRTC 구현체는 데이터 채널 생성 후 자동으로 로컬 설명(Description)을 생성
    // 이 경우 로컬 설명 변경 사항만 수신 대기하면 됩니다
    connection.onLocalDescription((description) => {
        // 조정 서버를 통해 상대방에게 설명을 전송
        sendDescription(id, description);
    });

    // 시작자로서, 당신은 데이터 채널을 적극적으로 만들어야 함
    const channel = connection.createDataChannel(id, {
        ordered: true, // 순서는 이 채널이 신뢰할 수 있음을 의미
        protocol: 'metadata'
    })

    // 향후 채널을 통해 원격 엔드포인트와 통신
}
```

일부 WebRTC 구현체는 로컬 설명(Description)을 자동으로 생성하지 않습니다. 이 경우 오퍼(Offer)를 생성하여 상대방에게 전송해야 합니다:

```ts
    const offer = await connection.createOffer()
    sendDescription(id, offer);
```

연결 수신자인 B는 A의 설명을 수신한 후 PeerConnection을 생성해야 합니다. 이 과정은 위와 유사하며, 다음은 의사 코드입니다:

```ts
function onGetOtherDescription(id: string, description: Description) {
    let connection = new PeerConnection(id, {
        iceServers,
        iceTransportPolicy: 'all',
    });

    // 리모트 설명을 직접 설정
    connection.setRemoteDescription(description);

    // 데이터 채널 생성을 감지
    connection.onDataChannel((channel) => {
        if (channel.protocol === 'metadata') {
            // 메타데이터 채널
        }
        // 여기서 다른 많은 프로토콜의 데이터 채널도 처리할 수 있음
    });

    // 발신자와 마찬가지로, 로컬 설명이 사용 가능한 경우 상대방에게 전송
    connection.onLocalDescription((description) => {
        // 조정 서버를 통해 상대방에게 설명을 보냄
        sendDescription(id, description);
    });
}
```

일부 WebRTC 구현체는 로컬 설명(Description)을 자동으로 생성하지 않습니다. 이 경우 답변(Answer)을 생성하여 상대방에게 전송해야 함:

```ts
    const answer = await connection.createAnswer()
    sendDescription(id, answer);
```

양측 간 메타데이터 데이터 채널이 성공적으로 설정되면 연결도 함께 설정됩니다(홀 펀칭 성공!). 그러나 PeerConnection의 `ConnectionState` 변경 사항을 통해 연결 상태를 확인할 수 있습니다.

대부분의 WebRTC 구현체는 다음과 같은 ConnectionState를 가집니다:

- “closed” - 연결이 종료됨.
- “connected” - 연결이 됨.
- “connecting” - 연결 중.
- “disconnected” - 연결이 끊어짐.
- “failed” - 연결 실패.
- “new” - 연결이 방금 생성됨.
- ## 사용자 간 통신을 위한 프로토콜 형식

PeerConnection을 설정한 후, 사용자는 `metadata`로 `protocol`을 사용하여 DataChannel을 통해 통신해야 합니다.

통신 정보의 형식은 UTF-8 JSON 문자열입니다. 메시지(이하 Message)의 JSON 형식은 다음과 같습니다:

```ts
interface Message {
    type: string
    payload: object
}
```

여기서 `type`은 다양한 메시지 유형을 나타내며, `type`이 페이로드의 형식을 결정합니다.

다음 **pseudo-code**는 `protocol`을 `metadata`로 사용하여 채널을 통해 상대방에게 메시지를 전송하는 방법을 보여줍니다:

```ts
send<T>(type: string, payload: object) {
    // 메시지를 JSON 문자열로 변환
    const messageString = JSON.stringify({
        type: type,
        payload: payload
    })
    // 메타데이터 채널을 통해 문자열을 전송
    this.channel.sendMessage(messageString)
}
```

### 하트비트 메시지

하트비트 메시지는 Ping과 Pong 두 가지 유형으로 나뉩니다.

하트비트 Ping 메시지는 연결이 수립된 후 매초마다 상대방에게 전송됩니다. 하트비트 메시지에는 상대방과의 지연 시간을 계산하는 데 사용할 수 있는 타임스탬프가 포함됩니다.

Ping 메시지의 유형은 `heartbeat-ping`이며, 페이로드에는 `time` 속성 하나만 포함됩니다. 예시는 다음과 같습니다:

```json
{
    "type": "heartbeat-ping",
    "payload": {
        "time": 12391724789
    }
}
```

핑 메시지를 수신한 후에는 상대방에게 퐁 메시지를 다시 보내야 합니다.
퐁의 형식은 핑 메시지와 동일하지만, `type`이 `heartbeat-pong`이어야 합니다. 퐁의 `time`은 핑의 `time`과 동일해야 합니다.

```json
{
    "type": "heartbeat-pong",
    "payload": {
        "time": 12391724789
    }
}
```

### 플레이어 신원 메시지

플레이어 신원 메시지는 런처가 플레이어의 아바타, 이름 등을 표시하도록 업데이트하는 데 사용됩니다. `payload`는 Minecraft 사용자의 GameProfile과 유사해야 합니다.

그중 `textures`는 플레이어의 스킨 정보를 저장하므로, authlib-injector를 사용해 모든 사람의 스킨을 공유하기 쉽습니다.

```json
{
    "type": "identity",
    "payload": {
        "name": "username",
        "id": "user uuid",
        "textures": {
            "SKIN": {
                "url": "skin url",
                "metadata": { "model": "slim" }
            }
        }
    }
}
```

### 마인크래프트 LAN 탐색

LAN 내 Minecraft 게임이 자신의 세계를 공개했다는 메시지를 수신하면, 메타데이터 DataChannel을 통해 이 메시지를 다른 사용자에게 전송해야 합니다.

이 메시지를 수신한 다른 사용자는 로컬에 프록시 서버를 생성하고 로컬 Minecraft가 연결되기를 대기해야 합니다.

다음은 메시지의 형식입니다:

```json
{
    "type": "lan",
    "payload": {
        "motd": "your server's motd",
        "port": 34631
    }
}
```

`motd`는 서버에 대한 간단한 설명이며, `port`는 LAN에 공개된 마인크래프트의 포트 번호입니다.

## DataChannel을 사용하여 마인크래프트 멀티플레이어 플레이하는 방법

Minecraft의 모든 트래픽을 전송하기 위해 `minecraft`라는 이름의 DataChannel 프로토콜을 생성해야 합니다.

마인크래프트에서 다른 사용자로부터 LAN 게임 메시지를 수신한 후, 런처는 로컬 프록시 서버를 생성하고 해당 프록시 서버의 포트를 가짜 LAN 서버로 로컬 마인크래프트에 전송해야 합니다.

다음의 **외사 코드(pseudo-code)**는 그 과정을 보여줍니다:

```ts
function createMinecraftProxyServer(motd: string, port: number) {
    // 프록시 서버 생성
    const server = createServer((socket) => {
        // 이 소켓은 Minecraft 게임이 로컬 프록시 서버에 연결할 때 사용되는 소켓

        // 이 데이터 채널은 예상되는 포트를 레이블로 사용해야 함
        const gameChannel = this.connection.createDataChannel(port, {
            protocol: 'minecraft', // 프로토콜을 minecraft로 지정해야 함
            order: true, // 질서는 신뢰성을 나타냄.
        })

        // 마인크래프트의 데이터를 수신하고 DataChannel을 통해 상대방에게 직접 전송함
        socket.on('data', (buf) => gameChannel.sendMessageBinary(buf))
        // 상대방의 데이터를 수신하여 마인크래프트에 직접 전송
        gameChannel.onMessage((data) => socket.write(Buffer.from(data)))

        // 한 쪽이 종료되면 다른 쪽도 함께 종료
        socket.on('close', () => gameChannel.close())
        gameChannel.onClosed(() => socket.destroy())
    })

    // 서버가 수신 대기해야 하는 포트를 수신 대기하도록 설정해야 함
    // 실제 프록시 서버 포트는 예상 포트와 다를 수 있음
    const port = tryListenTo(server, info.port)

    // 실제 프록시 서버 포트와 MOTD를 Minecraft가 LAN에 공개된 것처럼 위장하여 로컬 Minecraft에 전송하십시오.
    broadcastLanMessageToMinecraft(info.motd, port)
}
```

로컬에서 생성된 서버 포트가 원격 측에서 전송된 포트와 다를 수 있으며, 런처는 이 포트 매핑을 자체적으로 유지 관리해야 한다는 점을 유의해야 합니다.

프록시 TCP 서버가 시작된 후, 런처는 Minecraft가 LAN 게임 목록에서 게임을 새로 고치도록 하기 위해 이 MOTD와 포트를 주기적으로 브로드캐스트해야 합니다.

LAN 게임에서 마인크래프트 공유 파티를 위해, 프로토콜이 `minecraft`인 DataChannel 생성을 수신 대기해야 합니다.
다음 **의사 코드(pseudo-code)**는 수신 대기 후 연결을 설정하는 방법을 보여줍니다.

```ts
// 새로운 DataChannel이 생성될 때
this.connection.onDataChannel((channel) => {
    // DataChannel이 마인크래프트일 때
    if (channel.protocol === 'minecraft') {
        // 채널 레이블로 포트 확인
        const port = Number.parseInt(channel.label)!

        // 로컬 머신의 해당 포트 번호로 TCP 연결을 설정
        // 이는 로컬 머신에서 실행 중인 Minecraft LAN 서버에 연결하는 것과 동일
        const socket = createConnection(port)

        // 이 마인크래프트 연결에서 데이터를 수신하여 원격 측에 직접 전송
        socket.on('data', (buf) => channel.sendMessageBinary(buf))
        // 원격 측에서 데이터를 수신하여 마인크래프트로 직접 전달
        channel.onMessage((data) => socket.write(Buffer.from(data)))

        // 한 쪽이 종료되면 다른 쪽도 함께 종료
        socket.on('close', () => channel.close())
        channel.onClosed(() => socket.destroy())
    } else if (channel.protocol === 'metadata') {
        // metadata 채널 처리
    } else {
        // 기타 프로토콜...
    }
})
```

`minecraft` 데이터 채널이 설정된 후, 한 쪽이 상대방의 게임에 진입했습니다!

## 부록

### 마인크래프트 LAN 정보 방송

마인크래프트 LAN 검색은 UDP 멀티캐스트를 통해 구현되므로 런처는 다음 형식의 문자열만 전송하면 됩니다.

```
[MOTD]${motd}[/MOTD][AD]${port}[/AD]
```

Minecraft에서 지정한 주소 `224.0.2.60:4445`로 전송해야 합니다. 여기서 `motd`는 서버 설명이며 `port`는 프록시 서버의 포트 번호입니다.

예를 들어, 프록시 서버가 사용자의 컴퓨터에서 포트 28378을 수신 대기 중이라면 다음 문자열을 전송해야 합니다:

```
[MOTD]XXX Shared Server[/MOTD][AD]28378[/AD]
```

이 UDP 패킷을 수신하는 것도 비슷합니다.

### 중계

WebRTC를 사용 중이므로 중계 서버는 표준 TURN 서버입니다.

[Coturn](https://github.com/coturn/coturn)과 같은 성숙한 서버를 중계 서버로 사용할 수 있습니다.

각 런처는 자체 중계 서비스를 설정할 수 있습니다.

런처에서는 PeerConnection의 `iceServers`만 구성하면 됩니다

예시 :

```ts
let connection = new PeerConnection(id, {
    iceServers: [
        {
            urls: 'turn:my-turn-server.mycompany.com:19403',
            username: 'Your TURN server username',
            credentials: 'Login token'
        }
    ], // 이거
    iceTransportPolicy: 'all',
});
```

사용자 계정 및 로그인 토큰이 포함된 자격 증명을 추가할 수 있습니다(릴레이가 비용이 많이 들기 때문). 또한 런처는 자체 계정 시스템을 기반으로 릴레이에 대한 사용자 인증을 구현할 수 있습니다.

따라서 이 `iceServers` 매개변수의 값은 사용자 행동에 따라 동적으로 결정될 필요가 있을 수 있습니다.

### 조정 서버

이 문서는 조정 서버 구현을 제한하지 않습니다.

조정 서버는 PeerConnection이 연결을 설정할 수 있도록 사용자 간에 설명(Description)을 교환해야 합니다.

일반적인 WebSocket을 구현에 사용할 수 있으며, 소켓을 직접 구현할 수도 있습니다. 사용자는 설명을 수동으로 복사하여 서로에게 전송할 수도 있습니다.

이 측면은 본 문서에서 다루지 않습니다.

### 전송 신뢰성

WebRTC 데이터 전송의 신뢰성에 대한 우려가 흔히 제기됩니다. 마인크래프트 멀티플레이어 게임은 TCP 프로토콜을 사용하며, 패킷 손실 시 마인크래프트가 이를 올바르게 처리하지 못하기 때문입니다.

하지만 실제로 WebRTC는 신뢰성 있는 전송을 지원하며 DataChannel 생성 시 설정할 수 있습니다. [MDN 문서](https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/ordered)를 참조하세요.

### IPV6?

WebRTC는 IPV6를 지원합니다.

### Upnp?

일부 WebRTC 구현체는 UPnP를 지원합니다.

간단한 방법은 WebRTC에 대한 포트 범위를 지정하고, 매핑된 포트를 해당 범위의 앞부분에 배치하는 것입니다.

## WebRTC 라이브러리들

- WebRTC for .NET C# - https://github.com/microsoft/winrtc
- WebRTC binding for Java - https://github.com/devopvoid/webrtc-java
- WebRTC binding for NodeJS - https://github.com/murat-dogan/node-datachannel
- WebRTC implementation in C - https://github.com/paullouisageneau/libdatachannel
- WebRTC implementation in Rust - https://github.com/lerouxrgd/datachannel-rs
- WebRTC implementation in Go - https://github.com/pion/webrtc