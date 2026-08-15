# Protocolo Online do Minecraft Baseado em WebRTC

Este artigo descreve uma implementação de launcher para Minecraft que permite jogar entre redes locais diferentes através do WebRTC.

## O que é WebRTC? Por que usá-lo?

WebRTC é uma tecnologia de comunicação em tempo real ponto a ponto. Para citar o [MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/WebRTC_API):

> WebRTC (Web Real-Time Communications) é uma tecnologia de código aberto que permite comunicação em tempo real através de conexões ponto a ponto.

O WebRTC foi originalmente projetado para streaming de áudio e vídeo em tempo real entre navegadores, mas isso não limita seu uso em um launcher.

Então por que escolher WebRTC em vez de outras tecnologias? A tabela a seguir compara três formas de implementar jogo online:

|                     | WebRTC             | Hole Punching Personalizado (Protocolo Customizado) | Hiper e outros softwares de terceiros |
| ------------------- | ------------------ | --------------------------------------------------- | ------------------------------------- |
| Personalização      | Alta               | Máxima                                              | -                                     |
| Dificuldade de Implementação | Baixa   | Alta                                                | Mínima                                |
| Facilidade de Uso para Usuários | Depende da Implementação | Depende da Implementação | Requer Permissões de Admin, custo envolvido |

### Personalização

WebRTC e hole punching personalizado oferecem aos desenvolvedores o máximo controle. Com hole punching personalizado, o protocolo é completamente livre de restrições de implementação, pois tudo precisa ser implementado do zero.

Em contraste, a menos que SDKs sejam fornecidos, estender outras funções com base em serviços como o Hiper pode ser difícil.

O WebRTC apenas lida com o estabelecimento de conexão entre usuários, enquanto os desenvolvedores têm controle total sobre quais dados transferir, quando transferir e como lidar com os dados.

### Dificuldade de Implementação

O hole punching personalizado é o mais difícil em termos de dificuldade de engenharia. Como o WebRTC e o hole punching personalizado compartilham princípios similares, o hole punching personalizado exige que o desenvolvedor implemente a funcionalidade do WebRTC do zero.

No processo, os desenvolvedores podem enfrentar vários bugs, e o escopo que consideram pode não ser tão abrangente quanto o dos desenvolvedores do protocolo WebRTC.

Usar WebRTC é como estar sobre os ombros de gigantes; os desenvolvedores não precisam lidar diretamente com as várias situações complexas encontradas ao estabelecer conexões, mas simplesmente usar as interfaces encapsuladas pelo WebRTC. Assim, a dificuldade de implementação do WebRTC é muito menor do que escrever hole punching personalizado completamente do zero.

Basicamente não há dificuldade de engenharia significativa para serviços de terceiros como o Hiper.

### Facilidade para os Usuários

Vale notar que o uso de serviços de terceiros requer que os usuários se conectem a sistemas externos, o que pode envolver custos adicionais.

Se os desenvolvedores usarem hole punching personalizado ou WebRTC, podem controlar completamente o aspecto da experiência do usuário.

## Detalhes do Protocolo e Conceitos Básicos

O protocolo consiste principalmente nas seguintes partes:

1. Como estabelecer uma conexão ponto a ponto entre usuários.
2. O formato do protocolo para comunicação entre usuários após uma conexão ponto a ponto ser estabelecida.
3. Como permitir que o Minecraft se conecte através de um DataChannel.

Aqui está uma breve introdução aos conceitos que aparecem no WebRTC e o que eles representam:

### PeerConnection

PeerConnection representa a conexão estabelecida com outros usuários.

### DataChannel

DataChannel representa o canal de comunicação de dados estabelecido com outros usuários em uma PeerConnection, similar a um Socket. Uma PeerConnection pode ter muitos DataChannels usados para diferentes tipos de comunicação. DataChannels podem ser criados/fechados arbitrariamente após uma PeerConnection ser estabelecida com sucesso.

Ao criar um DataChannel, o `protocol` (protocolo) pode ser especificado. O listener remoto pode lidar com diferentes criações de DataChannel com base no `protocol`.

### Description

A Description é uma string criada pela PeerConnection para descrever as informações da rede local. Esta string contém algumas informações necessárias para o hole punching (já que o WebRTC fundamentalmente ainda requer hole punching).

Os desenvolvedores não precisam entender completamente o conteúdo desta string; eles simplesmente precisam transmiti-la corretamente para o outro lado via servidor de sinalização.

### ICEServer

ICEServer é dividido em dois tipos: STUN e TURN.

O WebRTC precisa obter informações de rede local de um servidor STUN para realizar o hole punching.

Muitos servidores STUN são gratuitos, como o `stun:stun.qq.com` usado pelo QQ.

Um servidor TURN é responsável por retransmitir o tráfego. Geralmente é auto-hospedado e requer pagamento.

## 🔄 Fluxo de Conexão e Arquitetura de Sinalização

O diagrama a seguir ilustra como a conexão P2P é coordenada, o hole punching NAT é completado e o tráfego do jogo é tunelado com segurança entre dois clientes Minecraft:

<div style="margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
<h3 style="margin-top: 0; margin-bottom: 16px; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1); display: flex; align-items: center; gap: 8px;">
<span>🔄 Sequência de Conexão & Fluxo de Dados</span>
</h3>
<div style="display: flex; flex-direction: column; gap: 16px;">
<!-- Passo 1 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">1</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Sinalização & Configuração da Sala</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
<strong>Host</strong> envia SDP Offer ao Servidor de Lobby/Sinalização. <br/><strong>Convidado</strong> recupera o Offer, o define e retorna um SDP Answer de volta ao Host.
</p>
</div>
</div>
<!-- Seta -->
<div style="margin-left: 14px; border-left: 2px dashed var(--vp-c-divider); height: 16px;"></div>
<!-- Passo 2 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">2</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Traversal NAT & Hole Punching</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
Ambos os launchers realizam hole punching STUN/TURN para estabelecer uma conexão Ponto a Ponto direta. Um canal de controle de metadados confiável é aberto.
</p>
</div>
</div>
<!-- Seta -->
<div style="margin-left: 14px; border-left: 2px dashed var(--vp-c-divider); height: 16px;"></div>
<!-- Passo 3 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">3</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Descoberta de Jogo LAN</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
<strong>Minecraft do Host</strong> transmite seu mundo LAN. O launcher do Host encaminha esses metadados ao Convidado.<br/><strong>Launcher do Convidado</strong> cria um Proxy TCP local e o transmite como um jogo LAN falso para o cliente Minecraft do Convidado.
</p>
</div>
</div>
<!-- Seta -->
<div style="margin-left: 14px; border-left: 2px dashed var(--vp-c-divider); height: 16px;"></div>
<!-- Passo 4 -->
<div style="display: flex; gap: 16px;">
<div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--vp-c-brand-1); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem;">4</div>
<div>
<strong style="color: var(--vp-c-text-1); display: block; margin-bottom: 4px;">Tunelamento do Tráfego do Jogo</strong>
<p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">
O cliente do Convidado conecta ao proxy. O launcher do Convidado mapeia a conexão para um novo DataChannel WebRTC binário. O launcher do Host encaminha os pacotes para o servidor Minecraft real.
</p>
</div>
</div>
</div>
</div>

## Como estabelecer conexões entre usuários

No WebRTC, as conexões entre usuários são estabelecidas através da troca de strings Description.

Por exemplo, se A e B precisam estabelecer uma conexão, A como a parte iniciadora precisa:

- Criar uma nova PeerConnection WebRTC
- Escutar por mudanças de Description local e enviá-las para B através de um servidor de coordenação
- Estabelecer um canal de dados com `protocol` definido como `metadata` para comunicação regular
- Aguardar a Description de B

Aqui está um exemplo de pseudo-código:

```ts
// "id" aqui representa o ID da pessoa com quem você quer se conectar, pode ser gerado arbitrariamente desde que seja único
function initiateConnection(id: string) {
    // criar uma nova conexão
    let connection = new PeerConnection(id, {
        iceServers: [
            // Você pode usar seus próprios servidores STUN/TURN para ajudar a estabelecer a conexão
            // Mas ter muitos servidores não é recomendado - geralmente 1-2 é suficiente
            "stun:stun.qq.com",
        ]
        iceTransportPolicy: 'all',
    });

    // Algumas implementações WebRTC gerarão automaticamente uma Description local após criar um canal de dados
    // Se sim, você só precisa escutar por mudanças de Description local
    connection.onLocalDescription((description) => {
        // Envie sua Description para a outra pessoa através do servidor de coordenação
        sendDescription(id, description);
    });

    // Como iniciador, você precisa criar ativamente o canal de dados
    const channel = connection.createDataChannel(id, {
        ordered: true, // ordered significa que este canal é confiável
        protocol: 'metadata'
    })

    // Comunique-se com o endpoint remoto através do canal no futuro
}
```

Algumas implementações WebRTC não criam uma Description local automaticamente, nesse caso você deve criar um Offer e enviá-lo para a outra pessoa:

```ts
    const offer = await connection.createOffer()
    sendDescription(id, offer);
```

B como receptor da conexão precisa criar uma PeerConnection após receber a Description de A. O processo é similar ao acima, e aqui está o pseudo-código:

```ts
function onGetOtherDescription(id: string, description: Description) {
    let connection = new PeerConnection(id, {
        iceServers,
        iceTransportPolicy: 'all',
    });

    // Definir a Description remota diretamente
    connection.setRemoteDescription(description);

    // Escutar por criação de canal de dados
    connection.onDataChannel((channel) => {
        if (channel.protocol === 'metadata') {
            // Este é o canal de metadados
        }
        // Você também pode lidar com canais de dados de muitos outros protocolos aqui
    });

    // Como o iniciador, quando uma Description local estiver disponível, envie para a outra pessoa
    connection.onLocalDescription((description) => {
        // Envie sua Description para a outra pessoa através do servidor de coordenação
        sendDescription(id, description);
    });
}
```

Algumas implementações WebRTC não criam uma Description local automaticamente, nesse caso você deve criar um Answer e enviá-lo para a outra pessoa:

```ts
    const answer = await connection.createAnswer()
    sendDescription(id, answer);
```

Quando o canal de dados de metadados entre ambas as partes é estabelecido com sucesso, a conexão também é estabelecida (hole punching bem-sucedido!). No entanto, você pode usar as mudanças de `ConnectionState` na PeerConnection para determinar o status da conexão.

A maioria das implementações WebRTC tem os seguintes ConnectionState:

- "closed" - A conexão está fechada.
- "connected" - A conexão está estabelecida.
- "connecting" - A conexão está sendo estabelecida.
- "disconnected" - A conexão está desconectada.
- "failed" - A conexão falhou.
- "new" - A conexão acabou de ser criada.

## Formato do Protocolo para Comunicação entre Usuários

Após estabelecer uma PeerConnection, os usuários precisam se comunicar através de um DataChannel com `protocol` como `metadata`.

O formato das informações de comunicação é uma string JSON UTF-8. O formato JSON da mensagem (doravante referida como Message) é:

```ts
interface Message {
    type: string
    payload: object
}
```

Onde `type` representa diferentes tipos de mensagens e `type` determina o formato do payload.

O seguinte **pseudo-código** mostra como enviar uma mensagem para a outra parte através do canal com `protocol` como `metadata`:

```ts
send<T>(type: string, payload: object) {
    // Converte a mensagem para string JSON
    const messageString = JSON.stringify({
        type: type,
        payload: payload
    })
    // Envia a string via canal de metadados
    this.channel.sendMessage(messageString)
}
```

### Mensagem de Heartbeat

A mensagem de heartbeat é dividida em dois tipos: Ping e Pong.

A mensagem Ping de heartbeat é enviada para a outra parte a cada segundo após a conexão ser estabelecida. A mensagem de heartbeat carrega um timestamp que pode ser usado para calcular o atraso entre você e a outra parte.

O tipo da mensagem Ping é `heartbeat-ping`, e seu payload contém apenas uma propriedade, `time`. Um exemplo é o seguinte:

```json
{
    "type": "heartbeat-ping",
    "payload": {
        "time": 12391724789
    }
}
```

Após receber uma mensagem Ping, você precisa enviar uma mensagem Pong de volta para a outra parte.
O formato do Pong é igual ao da mensagem Ping, exceto que o `type` é `heartbeat-pong`. O `time` do Pong deve ser o mesmo que o do Ping.

```json
{
    "type": "heartbeat-pong",
    "payload": {
        "time": 12391724789
    }
}
```

### Mensagem de Identidade do Jogador

A mensagem de identidade do jogador é usada para atualizar o launcher para exibir o avatar, nome, etc. do jogador. O `payload` deve ser similar ao GameProfile do usuário do Minecraft.

Entre eles, `textures` armazena as informações de skin do jogador, o que facilita o uso do authlib-injector para compartilhar as skins de todos.

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

### Mensagem de Descoberta LAN do Minecraft

Quando uma mensagem é recebida informando que um jogo do Minecraft na LAN publicou seu mundo, você deve enviar esta mensagem para outros usuários via DataChannel de metadados.

Após receber esta mensagem, outros usuários devem criar um servidor proxy localmente e aguardar o Minecraft local se conectar.

A seguir está o formato da mensagem:

```json
{
    "type": "lan",
    "payload": {
        "motd": "motd do seu servidor",
        "port": 34631
    }
}
```

`motd` é uma breve descrição do servidor, e `port` é o número da porta do Minecraft aberto para a LAN.

## Como usar DataChannel para jogar Minecraft multiplayer

Precisamos criar um protocolo DataChannel chamado `minecraft` para transmitir todo o tráfego do Minecraft.

Após receber a mensagem de jogo LAN de outros usuários no Minecraft, o launcher precisa criar um servidor proxy local e enviar a porta do servidor proxy para o Minecraft local como um servidor LAN falso.

O seguinte **pseudo-código** demonstra o processo:

```ts
function createMinecraftProxyServer(motd: string, port: number) {
    // Criar um servidor proxy
    const server = createServer((socket) => {
        // Este socket é o socket quando o jogo Minecraft se conecta ao seu servidor proxy local.

        // Este DataChannel precisa usar a porta esperada como label.
        const gameChannel = this.connection.createDataChannel(port, {
            protocol: 'minecraft', // Você precisa especificar o protocolo como minecraft.
            order: true, // order representa confiabilidade.
        })

        // Escuta dados do Minecraft e os envia diretamente para a outra parte através do DataChannel
        socket.on('data', (buf) => gameChannel.sendMessageBinary(buf))
        // Escuta dados da outra parte e os alimenta diretamente para o Minecraft
        gameChannel.onMessage((data) => socket.write(Buffer.from(data)))

        // Quando uma parte fecha, fecha a outra também
        socket.on('close', () => gameChannel.close())
        gameChannel.onClosed(() => socket.destroy())
    })

    // Você precisa tentar fazer o servidor escutar na porta que precisa ser escutada
    // A porta real do servidor proxy pode ser diferente da porta esperada.
    const port = tryListenTo(server, info.port)

    // Envia a porta real do servidor proxy e MOTD fingindo ser informações do Minecraft abertas para a LAN para o Minecraft local
    broadcastLanMessageToMinecraft(info.motd, port)
}
```

É importante notar que a porta do servidor criado localmente pode ser diferente da porta enviada da extremidade remota, e o launcher precisa manter este mapeamento de portas por conta própria.

Após o servidor TCP proxy ser iniciado, o launcher precisa transmitir periodicamente este MOTD e porta para que o Minecraft atualize o jogo na lista de jogos LAN.

Para a parte de compartilhamento do Minecraft no jogo LAN, eles precisam escutar a criação do DataChannel cujo protocolo é `minecraft`.
O seguinte **pseudo-código** mostra como estabelecer uma conexão após escutar.

```ts
// Quando um novo DataChannel é criado
this.connection.onDataChannel((channel) => {
    // Quando o DataChannel é minecraft
    if (channel.protocol === 'minecraft') {
        // Obter a porta pelo label do canal
        const port = Number.parseInt(channel.label)!

        // Estabelecer uma conexão TCP com o número de porta correspondente na máquina local.
        // Isso é equivalente a conectar ao servidor LAN do Minecraft aberto na máquina local.
        const socket = createConnection(port)

        // Escuta os dados desta conexão Minecraft e os envia diretamente para a parte remota.
        socket.on('data', (buf) => channel.sendMessageBinary(buf))
        // Escuta dados da extremidade remota e os encaminha diretamente para o Minecraft.
        channel.onMessage((data) => socket.write(Buffer.from(data)))

        // Quando uma parte fecha, fecha a outra também
        socket.on('close', () => channel.close())
        channel.onClosed(() => socket.destroy())
    } else if (channel.protocol === 'metadata') {
        // Lidar como canal de metadados
    } else {
        // Outros protocolos...
    }
})
```

Após o DataChannel `minecraft` ser estabelecido, uma parte entrou no jogo da outra!

## Apêndice

### Transmissão de Informações LAN do Minecraft

As buscas LAN do Minecraft são implementadas através de multicast UDP, então o launcher só precisa enviar uma string no formato de

```
[MOTD]${motd}[/MOTD][AD]${port}[/AD]
```

para o endereço `224.0.2.60:4445` designado pelo Minecraft, onde `motd` é a descrição do servidor e `port` é a porta do servidor proxy.

Por exemplo, se o servidor proxy está escutando na porta 28378 na sua máquina, você precisa enviar a seguinte string:

```
[MOTD]XXX Shared Server[/MOTD][AD]28378[/AD]
```

Escutar este pacote UDP é similar.

### Relay

Como estamos usando WebRTC, o servidor de relay é um servidor TURN padrão.

Um servidor maduro como o [Coturn](https://github.com/coturn/coturn) pode ser usado como servidor de relay.

Cada launcher pode configurar seu próprio serviço de relay.

No launcher, apenas os `iceServers` da PeerConnection precisam ser configurados

Por exemplo:

```ts
let connection = new PeerConnection(id, {
    iceServers: [
        {
            urls: 'turn:meu-servidor-turn.minhaempresa.com:19403',
            username: 'Seu nome de usuário no servidor TURN',
            credentials: 'Token de login'
        }
    ],
    iceTransportPolicy: 'all',
});
```

Note que credenciais com contas de usuário e tokens de login podem ser adicionadas (porque relays são caros), e o launcher pode implementar autenticação de usuário para relays baseada em seu próprio sistema de contas.

Portanto, o valor deste parâmetro `iceServers` pode precisar ser determinado dinamicamente com base no comportamento do usuário.

### Servidor de coordenação

Este artigo não limita a implementação de servidores de coordenação.

O servidor de coordenação precisa trocar Description entre usuários para garantir que a PeerConnection possa estabelecer conexões.
O servidor de lobby do launcher é basicamente o trabalho deste servidor de coordenação.

WebSockets comuns podem ser usados para implementação, ou Sockets também podem ser implementados. Os usuários também podem copiar e enviar manualmente a Description um para o outro.

Este aspecto não é discutido neste artigo.

### Confiabilidade de transmissão

Uma preocupação comum é se a transmissão de dados WebRTC é confiável, porque os jogos multiplayer do Minecraft usam o protocolo TCP, e a perda de pacotes não será tratada corretamente pelo Minecraft.

Mas na verdade, o WebRTC suporta transmissão confiável e pode ser configurado ao criar o DataChannel. Veja a [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/RTCDataChannel/ordered).

### IPV6?

O WebRTC suporta IPV6.

### Upnp?

Algumas implementações WebRTC suportam Upnp.

Um método simples é especificar um intervalo de portas para o WebRTC, e colocar as portas mapeadas na frente do intervalo.

## Bibliotecas WebRTC

- WebRTC para .NET C# - https://github.com/microsoft/winrtc
- WebRTC binding para Java - https://github.com/devopvoid/webrtc-java
- WebRTC binding para NodeJS - https://github.com/murat-dogan/node-datachannel
- Implementação WebRTC em C - https://github.com/paullouisageneau/libdatachannel
- Implementação WebRTC em Rust - https://github.com/lerouxrgd/datachannel-rs
- Implementação WebRTC em Go - https://github.com/pion/webrtc
