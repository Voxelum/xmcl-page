# Minecraft Online Protocol Based on WebRTC

This article describes a launcher implementation for Minecraft that enables cross-local network play through WebRTC.

## What is WebRTC? Why choose it?

WebRTC is a peer-to-peer real-time communication technology. To quote from the [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API):

> WebRTC (Web Real-Time Communications) is an open-source technology that enables real-time communication over peer-to-peer connections.

WebRTC was originally designed for real-time audio and video streaming between browsers, but this doesn't limit its use in a launcher.

So why choose WebRTC over other technologies? The following table compares three ways of implementing online play:

                    
|                     | WebRTC             | Handwritten Hole Punching (Custom Protocol) | Hiper and other third-party software |
| ------------------- | ------------------ | ------------------------- | ---------------------------- |
| Customization       | High               | Highest                   | -                            | - |
| Implementation Difficulty | Low           | High                       | Lowest                      |
| Ease of Use for Users    | Dependent on Implementation | Dependent on Implementation | Requires Admin Permissions, cost involved |

### Customization

WebRTC and custom hole punching offer developers maximum control. With custom hole punching, the protocol is completely free of implementation restrictions since everything needs to be implemented from scratch.

In contrast, unless SDKs are provided, extending other functions based on services like Hiper could be difficult.

WebRTC only handles the connection establishment between users, while developers have complete control over what data to transfer, when to transfer it, and how to handle the data.

### Implementation Difficulty

Custom hole punching is the most difficult in terms of engineering difficulty. Since WebRTC and custom hole punching share similar principles, custom hole punching requires the developer to implement WebRTC functionality from scratch.

In the process, developers may face a variety of bugs, and the scope that developers consider may not be as comprehensive as the WebRTC protocol developers.

Using WebRTC is like standing on the shoulders of giants; developers don't need to deal directly with the various complex situations encountered when establishing connections, but simply use the interfaces encapsulated by WebRTC. Thus, the implementation difficulty of using WebRTC is much lower than completely handwriting custom hole punching.

There's basically no significant engineering difficulty for third-party services like Hiper.

### Ease for Users

It's worth noting that using third-party services requires users to connect to their external systems, which may involve additional costs.

If developers use custom hole punching or WebRTC, they can fully control the user experience aspect.

## Protocol Details and Basic Concepts

The protocol consists primarily of the following parts:

1. How to establish a peer-to-peer connection between users.
2. The protocol format for communication between users after a peer-to-peer connection has been established.
3. How to allow Minecraft to connect through a DataChannel.

Here's a brief introduction to the concepts that appear in WebRTC and what they represent:

### PeerConnection

PeerConnection represents the connection established with other users.

### DataChannel

DataChannel represents the data communication channel established with other users in a PeerConnection, similar to a Socket. A PeerConnection can have many DataChannels used for different types of communication. DataChannels can be created/closed arbitrarily after a PeerConnection has been successfully established.

When creating a DataChannel, the `protocol` (protocol) can be specified. The remote listener can handle different DataChannel creations based on `protocol`.

### Description

The Description is a string created by PeerConnection to describe the local network information. This string contains some information required for hole punching (since WebRTC fundamentally still requires hole punching).

Developers need not fully understand the contents of this string; they simply need to transmit it correctly to the other side via the signaling server.

### ICEServer

ICEServer is divided into two types: STUN and TURN.

WebRTC needs to obtain local network information from an STUN server in order to punch holes.

Many STUN servers are free, such as `stun:stun.qq.com` used by QQ.

A TURN server is responsible for relaying traffic. It is usually self-deployed and requires payment.
## How to establish connections between users

In WebRTC, connections between users are established through the exchange of Description strings.

For example, if A and B need to establish a connection, A as the initiating party needs to:

- Create a new WebRTC PeerConnection
- Listen for local Description changes and send them to B through a coordination server
- Establish a data channel with `protocol` set to `metadata` for regular communication
- Wait for B's Description

Here is a pseudo-code example:

```ts
// "id" here represents the ID of the person you want to connect to, which can be generated arbitrarily as long as it is unique
function initiateConnection(id: string) {
    // create a new connection
    let connection = new PeerConnection(id, {
        iceServers: [
            // You can use your own STUN/TURN servers to help establish a connection
            // But having too many servers is not recommended - usually 1-2 is enough
            "stun:stun.qq.com",
        ]
        iceTransportPolicy: 'all',
    });

    // Some WebRTC implementations will automatically generate a local Description after creating a data channel
    // If so, you only need to listen for local Description changes
    connection.onLocalDescription((description) => {
        // Send your Description to the other person through the coordination server
        sendDescription(id, description);
    });

    // As the initiator, you need to actively create the data channel
    const channel = connection.createDataChannel(id, {
        ordered: true, // order means that this channel is reliable
        protocol: 'metadata'
    })

    // Communicate with the remote endpoint through the channel in the future
}
```

Some WebRTC implementations do not create a local Description automatically, in which case you must create an Offer and send it to the other person:

```ts
    const offer = await connection.createOffer()
    sendDescription(id, offer);
```

B as the recipient of the connection needs to create a PeerConnection after receiving A's Description. The process is similar to the above, and here is the pseudo-code:

```ts
function onGetOtherDescription(id: string, description: Description) {
    let connection = new PeerConnection(id, {
        iceServers,
        iceTransportPolicy: 'all',
    });

    // Set the remote Description directly
    connection.setRemoteDescription(description);

    // Listen for data channel creation
    connection.onDataChannel((channel) => {
        if (channel.protocol === 'metadata') {
            // This is the metadata channel
        }
        // You can also handle data channels of many other protocols here
    });

    // Like the initiator, when a local Description is available, send it to the other person
    connection.onLocalDescription((description) => {
        // Send your Description to the other person through the coordination server
        sendDescription(id, description);
    });
}
```

Some WebRTC implementations do not create a local Description automatically, in which case you must create an Answer and send it to the other person:

```ts
    const answer = await connection.createAnswer()
    sendDescription(id, answer);
```

When the metadata data channel between both parties is successfully established, the connection is also established (hole-punching successful!). However, you can use the `ConnectionState` changes on the PeerConnection to determine the connection status.

Most WebRTC implementations have the following ConnectionState:

- "closed" - The connection is closed.
- "connected" - The connection is established.
- "connecting" - The connection is being established.
- "disconnected" - The connection is disconnected.
- "failed" - The connection failed.
- "new" - The connection was just created.
- ## Protocol Format for Communication between Users

After establishing a PeerConnection, users need to communicate through a DataChannel with `protocol` as the `metadata`.

The format of communication information is a UTF-8 JSON string. The JSON format of the message (hereinafter referred to as Message) is:

```ts
interface Message {
    type: string
    payload: object
}
```

Where `type` represents different types of messages and `type` determines the format of the payload.

The following **pseudo-code** shows how to send a message to the other party through the channel with `protocol` as the `metadata`:

```ts
send<T>(type: string, payload: object) {
    // Convert message to JSON string
    const messageString = JSON.stringify({
        type: type,
        payload: payload
    })
    // Send the string via the metadata channel
    this.channel.sendMessage(messageString)
}
```

### Heartbeat Message

The heartbeat message is divided into two types: Ping and Pong.

The heartbeat Ping message is sent to the other party every second after the connection is established. The heartbeat message carries a timestamp that can be used to calculate the delay between you and the other party.

The type of Ping message is `heartbeat-ping`, and its payload contains only one property, `time`. An example is as follows:

```json
{
    "type": "heartbeat-ping",
    "payload": {
        "time": 12391724789
    }
}
```

After receiving a Ping message, you need to send a Pong message back to the other party.
The format of Pong is the same as that of Ping message, except that the `type` is `heartbeat-pong`. The `time` of Pong should be the same as that of Ping.

```json
{
    "type": "heartbeat-pong",
    "payload": {
        "time": 12391724789
    }
}
```

### Player Identity Message

The player identity message is used to update the launcher to display the player's avatar, name, and so on. The `payload` should be similar to the Minecraft user's GameProfile.

Among them, `textures` stores the player's skin information, which makes it easy to use authlib-injector to share everyone's skins.

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

### Minecraft LAN Discovery Message

When a message is received that a Minecraft game on the LAN has published its world, you should send this message to other users via the metadata DataChannel.

After receiving this message, other users should create a proxy server locally and wait for the local Minecraft to connect.

The following is the format of the message:

```json
{
    "type": "lan",
    "payload": {
        "motd": "your server's motd",
        "port": 34631
    }
}
```

`motd` is a brief description of the server, and `port` is the port number of the Minecraft open to the LAN.

## How to use DataChannel to play Minecraft multiplayer

We need to create a DataChannel protocol named `minecraft` to transmit all traffic from Minecraft.

After receiving the LAN game message from other users in Minecraft, the launcher needs to create a local proxy server and send the port of the proxy server to the local Minecraft as a fake LAN server.

The following **pseudo-code** demonstrates the process:

```ts
function createMinecraftProxyServer(motd: string, port: number) {
    // Create a proxy server
    const server = createServer((socket) => {
        // This socket is the socket when the Minecraft game connects to your local proxy server.

        // This DataChannel needs to use the expected port as the label.
        const gameChannel = this.connection.createDataChannel(port, {
            protocol: 'minecraft', // You need to specify the protocol as minecraft.
            order: true, // order represents reliability.
        })

        // Listen to data from Minecraft and send it directly to the other party through DataChannel
        socket.on('data', (buf) => gameChannel.sendMessageBinary(buf))
        // Listen to data from the other party and feed it directly to Minecraft
        gameChannel.onMessage((data) => socket.write(Buffer.from(data)))

        // When one party closes, close the other party as well
        socket.on('close', () => gameChannel.close())
        gameChannel.onClosed(() => socket.destroy())
    })

    // You need to try to make the server listen to the port that needs to be listened to
    // The actual proxy server port may be different from the expected port.
    const port = tryListenTo(server, info.port)

    // Send the real proxy server port and MOTD pretending to be Minecraft open to the LAN information to local Minecraft
    broadcastLanMessageToMinecraft(info.motd, port)
}
```

It is important to note that the locally created server port may be different from the port sent from the remote end, and the launcher needs to maintain this port mapping itself.

After the proxy TCP server is started, the launcher needs to periodically broadcast this MOTD and port in order for Minecraft to refresh the game in the LAN game list.

For the sharing party of Minecraft in the LAN game, they need to listen to the creation of the DataChannel whose protocol is `minecraft`.
The following **pseudo-code** shows how to establish a connection after listening.

```ts
// When a new DataChannel is created
this.connection.onDataChannel((channel) => {
    // When the DataChannel is minecraft
    if (channel.protocol === 'minecraft') {
        // Get the port by label of the channel
        const port = Number.parseInt(channel.label)!

        // Establish a TCP connection to the corresponding port number on the local machine.
        // This is equivalent to connecting to the Minecraft LAN server opened on the local machine.
        const socket = createConnection(port)

        // Listen to the data from this Minecraft connection and send it directly to the remote party.
        socket.on('data', (buf) => channel.sendMessageBinary(buf))
        // Listen to data from the remote end and forward it directly to Minecraft.
        channel.onMessage((data) => socket.write(Buffer.from(data)))

        // When one party closes, close the other party as well
        socket.on('close', () => channel.close())
        channel.onClosed(() => socket.destroy())
    } else if (channel.protocol === 'metadata') {
        // As metadata channel handling
    } else {
        // Other protocols...
    }
})
```

After the `minecraft` DataChannel is established, one party has entered the other party's game!

## Appendix

### Broadcasting Minecraft LAN information

Minecraft LAN searches are implemented through UDP multicast, so the launcher only needs to send a string in the format of

```
[MOTD]${motd}[/MOTD][AD]${port}[/AD]
```

to the address `224.0.2.60:4445` designated by Minecraft, where `motd` is the description of the server and `port` is the port of the proxy server.

For example, if the proxy server is listening to port 28378 on your machine, you need to send the following string:

```
[MOTD]XXX Shared Server[/MOTD][AD]28378[/AD]
```

Listening to this UDP packet is similar.

### Relay

Since we are using WebRTC, the relay server is a standard TURN server.

A mature server like [Coturn](https://github.com/coturn/coturn) can be used as a relay server.

Each launcher can set up its own relay service.

In the launcher, only the `iceServers` of PeerConnection need to be configured

For example:

```ts
let connection = new PeerConnection(id, {
    iceServers: [
        {
            urls: 'turn:my-turn-server.mycompany.com:19403',
            username: 'Your TURN server username',
            credentials: 'Login token'
        }
    ], // This is
    iceTransportPolicy: 'all',
});
```

Note that credentials with user accounts and login tokens can be added (because relays are expensive), and the launcher can implement user authentication for relays based on its own account system.

Therefore, the value of this `iceServers` parameter may need to be dynamically determined based on user behavior.

### Coordination server

This article does not limit the implementation of coordination servers.

The coordination server needs to exchange Description between users to ensure that PeerConnection can establish connections.
The lobby server of the launcher is basically the job of this coordination server.

Common WebSockets can be used for implementation, or Sockets can be implemented as well. Users can also manually copy and send Description to each other.

This aspect is not discussed in this article.

### Transmission reliability

A common concern is whether WebRTC data transmission is reliable, because Minecraft multiplayer games use the TCP protocol, and packet loss will not be handled correctly by Minecraft.

But in fact, WebRTC supports reliable transmission and can be set when DataChannel is created. See [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/ordered).

### IPV6?

WebRTC supports IPV6.

### Upnp?

Some WebRTC implementations support Upnp.

A simple method is to specify a port range for WebRTC, and put the mapped ports in the front of the range.

## WebRTC Libraries

- WebRTC for .NET C# - https://github.com/microsoft/winrtc
- WebRTC binding for Java - https://github.com/devopvoid/webrtc-java
- WebRTC binding for NodeJS - https://github.com/murat-dogan/node-datachannel
- WebRTC implementation in C - https://github.com/paullouisageneau/libdatachannel
- WebRTC implementation in Rust - https://github.com/lerouxrgd/datachannel-rs
- WebRTC implementation in Go - https://github.com/pion/webrtc