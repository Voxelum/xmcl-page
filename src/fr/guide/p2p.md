# 🎮 Guide du multijoueur en réseau local Minecraft (P2P)

Ce guide vous aidera à configurer et à jouer à Minecraft avec vos amis sur un réseau local ou même sur Internet en utilisant les fonctionnalités intégrées du launcher.

## Qu'est-ce que le P2P (Peer-to-Peer) ? Une explication simple

P2P signifie "Peer-to-Peer" (pair-à-pair). Pensez-y de cette façon : au lieu que tout le monde se connecte à un grand serveur central (comme un ordinateur principal dans le ciel), les joueurs se connectent *directement* aux ordinateurs les uns des autres. C'est comme avoir une ligne téléphonique directe entre amis au lieu que tout le monde appelle par le biais d'un opérateur.

- **Connexion directe :** Votre ordinateur parle *directement* à l'ordinateur de votre ami.
- **Pas de serveur central :** Contrairement aux serveurs en ligne, vous n'avez pas besoin d'une machine dédiée fonctionnant 24h/24 et 7j/7.
- **Réseau local (LAN) :** Fonctionne de manière optimale sur le même réseau local (par exemple, le même WiFi à la maison).
- **Jeu sur Internet :** Peut fonctionner sur Internet, mais nécessite des configurations réseau spécifiques (comme le système de relais du launcher décrit ci-dessous).

C'est ce qui permet aux joueurs de rejoindre une partie hébergée sur l'ordinateur d'une personne sans avoir besoin d'une configuration de serveur complexe.

## Commencer : Ouvrir la fenêtre multijoueur

Tout d'abord, ouvrez la fenêtre "Multijoueur sur réseau local" (LAN) dans le launcher :

![Multijoueur](/guidephoto/multi.png)

## Comprendre l'état de votre connexion

Une fois ouverte, vous verrez votre état, votre adresse IP et les informations de votre routeur. La partie la plus importante est votre **état (status)** :

![État de connexion](/guidephoto/windows-mul.png)

- **État 1 ou 2 :** Vous êtes prêt ! Vous pouvez jouer avec des amis sans problème.
- **Autres états :** Si vous voyez un autre numéro d'état, cela signifie que votre type de connexion n'est peut-être pas idéal pour le jeu direct. Vous devrez rechercher des solutions spécifiques à votre configuration Internet ou à votre pare-feu. (Essayez d'abord de rafraîchir l'état dans le launcher — cela aide parfois !)

## Comment jouer : Avec ou sans licence

### Option 1 : Joueurs avec licence
Si tout le monde possède une licence Minecraft, vous pouvez utiliser le multijoueur LAN standard :
1. Une personne lance un monde dans Minecraft et l'ouvre au réseau local (LAN).
2. Les autres joueurs recherchent la partie dans leur liste multijoueur de Minecraft.

### Option 2 : Utilisation du serveur relais (Relay Server) (Pour les joueurs sans licence ou les connexions difficiles)
Si vous n'avez pas de licence ou si vous rencontrez des problèmes de connexion, le launcher propose une fonctionnalité de serveur relais :
1. Allez dans les **Paramètres globaux** du launcher.
2. Activez la fonction **Serveur relais (Relay Server)**.
   - *Remarque :* Si cette option n'est pas disponible, il se peut que votre fournisseur d'accès Internet en bloque l'accès.

![Serveur relais](/guidephoto/relay-server.png)

## Configurer la connexion

### Méthode 1 : Utilisation des ID de connexion (Plus simple)
1. **Créer un ID :** Cliquez sur le bouton `+` dans la fenêtre multijoueur.
2. **Partager l'ID :** Envoyez l'ID généré à votre ami.

![Connexion par ID](/guidephoto/ID.png)

3. **L'ami rejoint :** Votre ami clique sur `+` et saisit votre ID dans le champ approprié.
4. **Connecté :** Votre ami devrait maintenant être connecté à vous !

### Méthode 2 : Connexion manuelle (Si la méthode 1 échoue)
Si la méthode ID ne fonctionne pas, utilisez les paramètres de connexion manuelle :

1. Cliquez sur l'icône **paramètres**.
![Paramètres de connexion](/guidephoto/token.png)
2. Une personne utilise **"Initiale-Connection"** (crée la connexion).
![Initialisation](/guidephoto/intiale.png)
3. L'autre utilise **"Join"** (se connecte à l'hôte).
4. L'hôte doit envoyer sa clé de connexion et l'ami doit l'accepter.

## Partager des mondes

Une fois connecté, vous pouvez partager des instances de monde avec vos amis à l'aide du bouton dédié dans l'interface.

![Partager un monde](/guidephoto/share.png)
![Partager un monde 2](/guidephoto/Share2.png)

## Lancer le jeu

1. **Hôte :** Ouvrez Minecraft, lancez un monde et ouvrez-le au réseau local (LAN).
2. **Joueurs :** Allez dans Multijoueur dans Minecraft, et la partie hébergée devrait apparaître en bas de votre liste de serveurs !

## Optimisation du réseau
### Pour une expérience optimale, tenez compte de ces paramètres réseau :

* Utilisez une connexion Internet stable avec une vitesse de téléversement d'au moins 5 Mbps.
* Privilégiez les connexions filaires (Ethernet) au WiFi dans la mesure du possible.
* **Fermez les applications gourmandes en bande passante pendant le jeu.**
* **Désactivez les services d'arrière-plan inutiles.**

## Besoin d'aide ?

Si vous rencontrez des problèmes, n'hésitez pas à demander de l'aide sur Discord, Reddit ou d'autres communautés Minecraft.