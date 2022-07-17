## P2P 联机协议

XMCL 的协议基于 [WebRTC](https://webrtc.org/)

## WebRTC 是什么

> WebRTC，名称源自网页即时通信（英语：Web Real-Time Communication）的缩写，是一个支持网页浏览器进行实时语音对话或视频对话的API。它于2011年6月1日开源并在Google、Mozilla、Opera支持下被纳入万维网联盟的W3C推荐标准。


本文意在探讨一种启动期间通用的 P2P 联机协议，启动器只需要使用 WebRTC 的库即可简单实现。

## 为什么选择 WebRTC

选择 WebRTC 的原因主要是， WebRTC 是在很多实现 Minecraft P2P 联机的方法中，在工程难度和最终效果上取得了一个不错的平衡的方法。

首先 P2P 并不简单，虽然最基本的打洞原理大家都已经很熟悉了，但是实际实现起来是需要考虑

WebRTC 足够标准化、文档多、API 并不复杂，且经过了大厂验证（毕竟是标准）。

这契合了 Minecraft P2P 联机点对点的基本需求

现在支持联机的

## 概念总览

### 主机 (Host)

主机指的是用户本身

### 连接 (Session)

连接就是指主机与主机之间的连接

### 交换信息



```ts
interface TransferDescription {
  /**
   * 代表当前会话的UUID
   */
  session: string
  /**
   * 代表对方主机的UUID
   */
  id: string
  /**
   * SDP 字符串
   */
  sdp: string
}
```

#### 手工交换 SDP 信息

让用户手工交换 SDP 是最易于实现的。SDP 被置于一个 JSON 中，这个 JSON 字符串传输时会经过 brotli 压缩

手工交换 SDP 信息


### 主机初始化

初始化客户端时需要生成一个 UUID 作为当前主机的 id

### 发起连接

发起方先新建一个 RTCPeerConnection，同时随机生成一个 UUID 作为当前连接（会话）的 id。

之后，发起方需要再创建一个 RTCDataChannel，这个通道的协议需要是 `metadata`。这个通道将用于用户双方交换基本的信息。

以上操作就绪后发起方可以通过 RTCPeerConnection 创建一个 offer，并设置当前 RTCPeerConnection 的 localDescription。

此时应当等待一段时间，得到这个 RTCPeerConnection 将本地 SDP 信息收集足够后，将 SDP 发送给对方用户。SDP 需要填充到 `TransferDescription` 的 `sdp` 属性中，并发送给对方用户，注意这里的 `TransferDescription` 同时需要填充当前主机的 id (`TransferDescription.id`) 和当前连接的 id (`TransferDescription.session`)。

### 接受连接

### 连接后初始化

在两个用户之间的 RTCPeerConnection 成功建立连接后，接收方应当通过监听 datachannel 事件获得发起方开启的协议为 `metadata` 的 RTCDataChannel。

双方的数据通道都ready的时候，双方都应该通过 `metadata` 通道，向对方发送自己的信息，包含当前用户名以及皮肤。当然这步是可选的。

```ts
interface MessageIdentity {
    type: "identity"
    /**
     * 这个是对方的主机 id
     */
    remoteId: string
    /**
     * 当前MC用户名
     */
    name: string
    /**
     * 皮肤的URL
     */
    avatar: string
}
```

### 监听 Minecraft LAN

当某一个主机监听到本地 Minecraft 对局域网开放了游戏，应当向其他用户通过 `metadata` 通道发送如下格式的信息

```ts
interface MessageLan {
    type: "lan"
    /**
     * 从 mc udp 捕捉到的 motd
     */
    motd: string
    /**
     * 从 mc udp 捕捉到的端口号
     */
    port: number
}
```

当其他主机接收到 `MessageLan` 后应当创建一个本地的 TCP 服务用于代理 Minecraft 流量，尝试监听同样的端口。如端口不存在，找到合适的端口为止。成功创建本地的 TCP 服务之后，需要发送模拟 Minecraft 局域网开放游戏的 UDP packet，其中的 port (端口号) 是你刚刚成功监听到的。

创建的代理 Minecraft TCP 服务在接收到任何 socket 连接后，应当立刻通过当前的 RTCPeerConnection 创建一个新的 RTCDataChannel，其协议必须为 `minecraft`，其 label 必须为实际的 Minecraft 端口号（不是你自己随机找到的那个）。


