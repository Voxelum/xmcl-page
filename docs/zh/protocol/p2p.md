# 基于 WebRTC 的 Minecraft 联机协议

本文描述了一种启动器实现 Minecraft 供跨局域网联机的协议。

[[toc]]

## 啥是 WebRTC？为什么选它

WebRTC 是一个点对点实时通信技术，直接摘抄 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API)

> WebRTC (Web Real-Time Communications) 是一项实时通讯技术，它允许网络应用或者站点，在不借助中间媒介的情况下，建立浏览器之间点对点（Peer-to-Peer）的连接，实现视频流和（或）音频流或者其他任意数据的传输。WebRTC 包含的这些标准使用户在无需安装任何插件或者第三方的软件的情况下，创建点对点（Peer-to-Peer）的数据分享和电话会议成为可能。

WebRTC 主要想解决的是浏览器之间的**实时**音视频流通信或**任意数据传输**。虽然最早是使用在浏览器上的，但是这不妨碍我们启动器使用它。

那么为什么我们不选择其他技术，或者说 WebRTC 对比其他技术有什么优劣呢

我们可以通过以下三种方式，对比三种联机实现方式

                    
|                     | WebRTC             | 手写打洞 (完全自定义协议) | Hiper 等第三方软             |
| ------------------- | ------------------ | ------------------------- | ---------------------------- |
| 自定义程度          | 高                 | 最高                      | -                            | - |
| 实现难度 (工程难度) | 较低               | 较高                      | 最低                         |
| 用户使用门槛        | 取决于作者实现方式 | 取决于作者实现方式        | 需要管理员权限，涉及自费问题 |


### 自定义程度

对于 WebRTC 和直接手写打洞，启动器开发者是有能力完全掌控的。
其中手写打洞，也就是自定义协议是最为自由的，因为所有的东西都需要自己实现，完全没有实现的限制。

对于 Hiper 这类第三方软件，如果没有提供 SDK，基于这些服务拓展其他功能是有一定难度的。

WebRTC 只负责处理用户之间建立连接的问题，而传输什么数据传输，什么时候传输，如何处理数据，这些开发者是可以完全自己掌控的。

### 工程难度

手写打洞的工程难度最高。由于 WebRTC 和手写打洞原理大同小异，手写打洞相当于你需要自己实现一遍 WebRTC 做过的功能。

在手写过程种开发者可能面对各种 Bug，而且开发者考虑的范围未必有 WebRTC 协议制定者全面。

使用 WebRTC 就像站在巨人的肩膀上，开发者不需要直接处理建立连接时各种复杂的情况，只需要使用 WebRTC 封装好的接口即可。因此使用 WebRTC 实现的工程难度相较于完全手写打洞要小很多。

第三方服务如 Hiper 则基本上没有太大工程难度。

### 用户使用门槛

这里想特别表明一下，第三方服务使用是需要用户对接到第三方的系统上的，用户是可能付出额外的成本。

手写打洞或者 WebRTC 的话，这部分用户体验可以完全自己控制。

## 协议细节及基本概念

协议主要分为几个部分

1. 如何让用户之间建立点对点连接
2. 点对点连接建立后，用户之间通信的协议格式
3. 如何让用户之间的 Minecraft 在通过 DataChannel 联机

这里简单介绍一下 WebRTC 中出现的概念和其代表的意义

### PeerConnection

PeerConnection 代表与其他用户之间建立的连接。

### DataChannel

代表在一个 PeerConnection 中和其他用户建立的数据通信通道，类似于 Socket。一个 PeerConnection 可以有很多个 DataChannel 用作不同通信。DataChannel 可以在 PeerConnection 成功建立连接后随意创建/关闭。

DataChannel 创建时可以指定 `protocol` (协议)，远端监听到不同协议的 DataChannel 创建可以通过 `protocol` 来进行不同的处理。

### Description

Description 是由 PeerConnection 创建用来描述本机网络信息的字符串，这个里面包含了打洞需要的一些信息（毕竟本质上 WebRTC 还是要打洞的）

开发者可以不用完全理解这个字符串的内容，只需要使用协调服务器正确发给对方就行。

### ICEServer

ICEServer 分为 STUN 和 TURN 两种。

WebRTC 需要通过 STUN server 来从外网获得本机的信息，这是打洞最基本的需求。

STUN 服务器很多都是免费的，例如 QQ 用的 STUN `stun:stun.qq.com`。

TURN server 则是负责转发流量（中继）的服务器。
这种一般都是自己架设，毕竟要花钱的。

## 用户之间如何建立连接

在 WebRTC 中，用户之间的连接是通过交换 Description 字符串来实现的。

举例说明，如果 A 和 B 之间需要建立连接，A 作为发起连接方需要

- 新建 WebRTC PeerConnection
- 监听本地 Description 变化并通过协调服务器发给 B
- 建立 `protocol` 为 `metadata` 的 DataChannel，以后用作常规通信
- 等待 B 的 Description

可以参考如下伪码：

```ts
// 这里 id 代表和你键连接人的 id，可以随意生成，保证唯一性就行
function initiateConnection(id: string) {
    // 创建新连接
    let connection = new PeerConnection(id, {
        iceServers: [
            // 这里可以使用你自己的建立的 STUN/TURN 帮你打洞
            // 但是这个列表不是越多越好，一般就 1-2 个就行了
            "stun:stun.qq.com",
        ]
        iceTransportPolicy: 'all',
    });

    // 一些WebRTC实现创建了 DataChannel 之后会自动生成本地的 Description
    // 对于这种的只需要 监听本地 description 变化就行
    connection.onLocalDescription((description) => {
        // 将自己的 description 通过协调服务器发送给对方
        sendDescription(id, description);
    });

    // 作为发起方需要主动创建 DataChannel
    const channel = connection.createDataChannel(id, {
        ordered: true, // order 代表这个 channel 是可靠的
        protocol: 'metadata'
    })

    // 以后和远端使用 channel 通信
}
```

一些 WebRTC 实现不会创建 Local Description，需要在这之后自己创建 Offer 并发给对方：

```ts
    const offer = await connection.createOffer()
    sendDescription(id, offer);
```

B 作为接受连接方，需要在受到 A 的 Description 后创建 PeerConnection。过程和上面大同小异，直接上伪码：

```ts
function onGetOtherDescription(id: string, description: Description) {
    let connection = new PeerConnection(id, {
        iceServers, // 这个是
        iceTransportPolicy: 'all',
    });

    // 直接设置远端的 Description
    connection.setRemoteDesciption(description);

    // 监听 DataChannel 的创建
    connection.onDataChannel((channel) => {
        if (channel.protocol === 'metadata') {
            // 这个是 metadata channel
        }
        // 这里你还可以处理很多其他协议的 data channel
    });

    // 和创建方一样，本地有 Description 的时候发给对方
    connection.onLocalDescription((description) => {
        // 将自己的 description 通过协调服务器发送给对方
        sendDescription(id, description);
    });
}
```

一些 WebRTC 实现不会创建 Local Description，需要在这之后自己创建 Answer 并发给对方：

```ts
    const answer = await connection.createAnswer()
    sendDescription(id, answer);
```

当双方的 metadata DataChannel 成功建立的时候，双方也就建立连接了（打洞成功！）

不过你可以通过监听 PeerConnection 上的 ConnectionState 变化来判断

一般的 WebRTC 实现都有 ConnectionState：

- "closed" - 连接已关闭
- "connected" - 连接已建立
- "connecting" - 正在连接中
- "disconnected" - 连接已断开
- "failed" - 连接失败
- "new" - 连接刚刚才创建

## 用户之间通信的协议格式

在 PeerConnection 成功建立后，用户之间需要通过 `protocol` 为 `metadata` 的 DataChannel 通信。

通信信息的格式为 UTF-8 JSON 字符串。消息（下作 Message）的 JSON 格式为

```ts
interface Message {
    type: string
    payload: object
}
```

其中 `type` 代表了不同消息的类型，`type` 决定了 payload 的格式。

如下**伪码**展示了如何通过 `protocol` 为 `metadata` 的 channel 发送消息给对方：

```ts
send<T>(type: string, payload: object) {
    // 将消息转化成 JSON 字符串
    const messageString = JSON.stringify({ 
        type: type,
        payload: payload
    })
    // 将字符串通过 metadata channel 发送
    this.channel.sendMessage(messageString)
}
```

### 心跳消息

心跳信息分为 Ping 和 Pong 两种。

心跳 Ping 消息在建立连接后每秒发送给对方，心跳消息带着时间戳可用于计算你与对方的延迟。

Ping 消息的 type 为 `heartbeat-ping`，它的 payload 中只有 time 一个属性。栗子如下：

```json
{
    "type": "heartbeat-ping",
    "payload": {
        "time": 12391724789
    }
}
```

在受到 Ping 消息后，你需要发送一个 Pong 消息返回给对方。
Pong 的格式和 Ping 消息一样，只是 `type` 为 `heartbeat-pong`。Pong 的 `time` 应当是 `Ping` 中的 `time`。

```json
{
    "type": "heartbeat-pong",
    "payload": {
        "time": 12391724789
    }
}
```

### 玩家身份消息

玩家身份消息用于更新启动器显示玩家头像，名称等。这里的 `payload` 应当和 Minecraft 用户的 GameProfile 相似。

其中 `textures` 存储了玩家的皮肤信息，这也便于使用 authlib-injector 来共享大家的皮肤。

```json
{
    "type": "identity",
    "payload": {
        "name": "用户名",
        "id": "用户 uuid",
        "textures": {
            "SKIN": {
                "url": "皮肤 url",
                "metadata": { "model": "slim" }
            }
        }
    }
}
```

### Minecraft 局域网公开消息

当监听到本机上一个 Minecraft 对局域网公开了世界的消息时，你应当将这个消息通过 metadata DataChannel 发送给其他的用户。

其他用户接收到这个消息后，应当在本地创建代理服务器等待本地 Minecraft 连接。

以下是消息的格式：

```json
{
    "type": "lan",
    "payload": {
        "motd": "你的服务器的 motd",
        "port": 34631
    }
}
```

motd 为服务器的简述，port 为当前 Minecraft 开放到局域网的端口号

## 如何使用 DataChannel 实现 Minecraft 联机

我们需要创建一个协议为 `minecraft` 的 DataChannel 来传输所有来自于 Minecraft 的流量。

在接收到来自于其他用户的 Minecraft 局域网公开消息之后，启动器需要创建一个本地代理服务器并将这个代理服务器的端口发送给本机 Minecraft 作为假的 LAN 服务器。

以下**伪码**展示了过程

```ts
function createMinecraftProxyServer(motd: string, port: number) {
    // 创建代理服务器
    const server = createServer((socket) => {
        // 这个 socket 是 Minecraft 游戏连上你这个本地代理服务器时候的 socket

        // 这个 DataChannel 需要用期望的端口作为 label
        const gameChannel = this.connection.createDataChannel(port, {
            protocol: 'minecraft', // 需要指定 protocol 为 minecraft
            order: true, // order 代表可靠的
        })

        // 监听从 Minecraft 来的数据包
        // 直接通过 DataChannel 发送给对方
        socket.on('data', (buf) => gameChannel.sendMessageBinary(buf))
        // 监听从对方来的数据包
        // 收到了直接喂给 Minecraft 的 socket
        gameChannel.onMessage((data) => socket.write(Buffer.from(data)))

        // 当一方关闭时，关闭另一方
        socket.on('close', () => gameChannel.close())
        gameChannel.onClosed(() => socket.destroy())
    })

    // 你需要尝试让 server 监听需要监听的端口
    // 实际代理服务器端口可能不同于期望的端口
    const port = tryListenTo(server, info.port)

    // 将真实代理服务器的端口号和 motd 假装成 Minecraft 开放到局域网的信息发送给本地 Minecraft
    broadcastLanMessageToMinecraft(info.motd, port)
}
```

这里特别需要注意的就是，本地创建的服务器端口号可能和远端传来的不一样，启动器需要自己维护这个端口映射。

而且启动器在把代理 TCP 服务器开启之后，需要周期性的广播这套 motd 和 port，这样才能让 Minecraft 在局域网列表中刷新出游戏。

对于 Minecraft 在局域网游戏的共享方用户，他们需要监听 protocol 为 `minecraft` 的 DataChannel 的创建。
以下**伪码**展示了监听后如何建立连接的操作。

```ts
// 当新的 DataChannel 创建时
this.connection.onDataChannel((channel) => {
    // 当 DataChannel 为 minecraft 时
    if (channel.protocol === 'minecraft') {
        // 通过 channel 的 label 获得
        const port = Number.parseInt(channel.label)!

        // 对本机对应的端口号建立一个 TCP 连接
        // 这就是相当于连接到本机开放的 Minecraft LAN 服务器上
        const socket = createConnection(port)

        // 监听这个 Minecraft 连接的数据，直接发送给远端
        socket.on('data', (buf) => channel.sendMessageBinary(buf))
        // 监听从远端来的数据，直接转发给 Minecraft
        channel.onMessage((data) => socket.write(Buffer.from(data)))

        // 当一方关闭时，关闭另一方
        socket.on('close', () => channel.close())
        channel.onClosed(() => socket.destroy())
    } else if (channel.protocol === 'metadata') {
        // 作为 metdata channel 处理
    } else {
        // 其他的协议……
    }
})
```

在 `minecraft` DataChannel 建立完成之后，一方用户就已经进入另一方的游戏中了！

## 附录

### 广播 Minecraft 局域网信息

Minecraft 局域网搜索是通过 UDP multicast 实现的，因此启动器只需要向 Minecraft 约定好的地址 `224.0.2.60:4445` 发送格式为

```
[MOTD]${motd}[/MOTD][AD]${port}[/AD]
```

的字符串即可，其中 motd 是服务器的说明，port 是代理服务器的端口

例如你的代理服务器监听本机的了 28378 端口，你就需要发送如下字符串

```
[MOTD]XXX 分享了服务器[/MOTD][AD]28378[/AD]
```

监听这个 UDP 包同理。

### 中继

由于我们使用了 WebRTC，中继服务器是标准的 TURN server。

可以使用成熟的 [Coturn](https://github.com/coturn/coturn) 服务器作为中继服务器。

每个启动器可以架设自己的中继服务。

在启动器中只需要配置 PeerConnection 的 `iceServers` 即可

例如：

```ts
let connection = new PeerConnection(id, {
    iceServers: [
        {
            urls: 'turn:my-turn-server.mycompany.com:19403',
            username: '你的 TURN server 的用户名',
            credentials: '登录的令牌'
        }
    ], // 这个是
    iceTransportPolicy: 'all',
});
```

注意这里可以带账户和登录令牌的（毕竟中继要花钱的），启动器可以根据自己的账户系统实现中继的用户验证。

因此实现的时候可能需要根据用户动态决定这个 iceServers 参数的值。

### 协调服务器

本文并未限制协调服务器的实现。

协调服务器需要负责交换用户和用户之间的 Description，以保证 PeerConnection 能正常建立连接。
启动器的大厅服务器基本上就是这个协调服务器干的工作。

可以用常见的 WebSocket 实现，或者自己实现 Socket 也可以。当然也可以让用户手动复制 Description 并发送给对方

这方面的内容就暂时不在本文讨论。

### 传输可靠性

一个常见的顾虑是 WebRTC 的数据传输是否可靠，因为 Minecraft 多人游戏使用的是 TCP 协议，丢包是不会被 Minecraft 正确处理的。

但实际上 WebRTC 支持可靠的传输，可以通过创建 DataChannel 的时候设置，参见 [MDN 文档](https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/ordered)。

### IPV6?

WebRTC 支持 IPV6

### Upnp?

一些 WebRTC 的实现支持 Upnp。

一个朴素的办法是给 WebRTC 指定端口范围，将已经映射好的端口放在范围前列就行了。

## WebRTC 库

- .NET C# 的 WebRTC https://github.com/microsoft/winrtc
- Java 的 WebRTC binding https://github.com/devopvoid/webrtc-java
- NodeJS 的 WebRTC binding https://github.com/murat-dogan/node-datachannel
- C 的 WebRTC 实现 https://github.com/paullouisageneau/libdatachannel
- Rust 的 WebRTC 实现 https://github.com/lerouxrgd/datachannel-rs
- Go 的 WebRTC 实现 https://github.com/pion/webrtc
