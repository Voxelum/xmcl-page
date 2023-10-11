# Format des données utilisateur

> Rédaction en cours

Les données utilisateur sont stockées dans le [répertoire de données xmcl](/fr/guide/manage#xmcl-cache-and-database).

```sh
xmcl data directory
└─ 📜user.json # fichier de configuration utilisateur
```

Le dossier comprend :
- ID de l'utilisateur
- Pseudo
- Informations sur l'utilisateur (pseudo, skin, cape)
- Informations sur les services tiers enregistrés.

## Format de fichier

```json5
{
  "users": {
    // Un compte spécifique
    "a6490773-7e31-4ab4-a70c-e3fa02e7e786": {
      "id": "a6490773-7e31-4ab4-a70c-e3fa02e7e786",
      // Le pseudo, addresse mail si c'est un compte Microsoft
      "username": "xxx@xyz.com",
      "invalidated": false,
      // Indique si c'est un compte Microsoft
      "authService": "microsoft",
      // Délai d'expiration du token d'accès
      "expiredAt": 1678164533914,
      "profiles": {
        // Un rôle d'utilisateur spécifique
        "abf81fe99f0d4948a9097721a8198ac4": {
          "id": "abf81fe99f0d4948a9097721a8198ac4",
          // Nom
          "name": "ABC",
          "textures": {
            // Informations sur le skin
            "SKIN": {
              "url": "url-quelconque",
              "metadata": {
                "model": "steve"
              }
            },
            // Informations sur la cape
            "CAPE": {
              "url": "url-quelconque"
            }
          }
        }
      },
      "selectedProfile": "abf81fe99f0d4948a9097721a8198ac4",
      // URL de l'avatar
      "avatar": "url-quelconque"
    },
  "selectedUser": {
    // ID de l'utilisateur sélectionné
    "id": "a6490773-7e31-4ab4-a70c-e3fa02e7e786"
  },
  // Token du client Minecraft
  "clientToken": "e4c06b2c3ab4405aae6fa6739f310fe5",
  // Services tiers mis en cache, généralement compatibles avec authlibinjector
  "yggdrasilServices": [
    {
      // URL du service tiers
      "url": "https://littleskin.cn/api/yggdrasil",
      "authlibInjector": {
        "meta": {
          "serverName": "LittleSkin",
          "implementationName": "Yggdrasil API for Blessing Skin",
          "implementationVersion": "5.1.1",
          "links": {
            "homepage": "https://littleskin.cn",
            "register": "https://littleskin.cn/auth/register"
          },
          "feature.non_email_login": true
        },
        "signaturePublickey": "-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEArGcNOOFIqLJSqoE3u0hj\ntOEnOcET3wj9Drss1BE6sBqgPo0bMulOULhqjkc/uH/wyosYnzw3xaazJt87jTHh\nJ8BPMxCeQMoyEdRoS3Jnj1G0Kezj4A2b61PJJM1DpvDAcqQBYsrSdpBJ+52MjoGS\nvJoeQO5XUlJVQm21/HmJnqsPhzcA6HgY71RHYE5xnhpWJiPxLKUPtmt6CNYUQQoS\no2v36XWgMmLBZhAbNOPxYX+1ioxKamjhLO29UhwtgY9U6PWEO7/SBfXzyRPTzhPV\n2nHq7KJqd8IIrltslv6i/4FEM81ivS/mm+PN3hYlIYK6z6Ymii1nrQAplsJ67OGq\nYHtWKOvpfTzOollugsRihkAG4OB6hM0Pr45jjC3TIc7eO7kOgIcGUGUQGuuugDEz\nJ1N9FFWnN/H6P9ukFeg5SmGC5+wmUPZZCtNBLr8o8sI5H7QhK7NgwCaGFoYuiAGL\ngz3k/3YwJ40BbwQayQ2gIqenz+XOFIAlajv+/nyfcDvZH9vGNKP9lVcHXUT5YRnS\nZSHo5lwvVrYUrqEAbh/zDz8QMEyiujWvUkPhZs9fh6fimUGxtm8mFIPCtPJVXjeY\nwD3Lvt3aIB1JHdUTJR3eEc4eIaTKMwMPyJRzVn5zKsitaZz3nn/cOA/wZC9oqyEU\nmc9h6ZMRTRUEE4TtaJyg9lMCAwEAAQ==\n-----END PUBLIC KEY-----\n",
        "skinDomains": [
          "skin.prinzeugen.net",
          "littleskin.cn"
        ]
      }
    },
    {
      "url": "https://authserver.ely.by/api/authlib-injector",
      "favicon": "https:authserver.ely.by/favicon.ico",
      "authlibInjector": {
        "meta": {
          "serverName": "Ely.by",
          "implementationName": "Account Ely.by adapter for the authlib-injector library",
          "implementationVersion": "1.0.0",
          "links": {
            "homepage": "https://ely.by",
            "register": "https://account.ely.by/register"
          },
          "feature.non_email_login": false
        },
        "signaturePublickey": "-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAxgFJRb0e9fRyVG5+JlCg\nh0hccRIcgO5yxEVkMJajAI12Ev/Pc7lpTt6OtKTEcUNfjYgBnEhIKbdLD0Z+B5Bx\nSg9DQmozgzZcesScpASQb4Kt6P8itowdbgbUm4v+6x1QUKJjjmhHq93m9OIEbxQL\nCq+SrEMZpDrXRgd9DhNPjZv/95ximP8otvh7+bmEl8jwINgfJx0PAeJFYlceQcsh\niYh+LHtaIwzbTTqkDibDm7QiEc+/qGab3mABtVTpqw/refwFoR0M8+xkWF+1/D8k\nH0WFa+rBhdjLyLG+2hdOpKXoH/fMH0tQMPHU78J17JVKWwIWCwEWXp8HiWSbIt3a\ncmBYtyW3tqarFFMMECx2wmJP6FVOvYVThZxq9qc9/f3yeTGz3g7zU1YljHSVRP16\niEbEnHQBKxmrj2cdZgosJej4YppV7f3iZ8o8PF6UY51LSqvaCteXuWeYSJJESGAs\nUoV7ihJfWL8DymHamywB2Cahx7EiDGS3/iBcQUmpk4TTg2FrZPuKGItn1QfIRieO\nknnj9CPKiWdfOtJBr3i1FXLEfExgcJhQ00Y6B08QVvgiCzUF3t+VAG3Ef2YINYyG\nAXcW0TIgMalwwgGzdhQRhItODXptWigy0DNTUAgKQT9PS8N09yPBGxIq64T9A3/z\nFqC/k2bMLWUSVtIlilIItn0CAwEAAQ==\n-----END PUBLIC KEY-----\n",
        "skinDomains": [
          "ely.by",
          ".ely.by"
        ]
      }
    }
  ]
}
```
## Utilisateur hors ligne

Le stockage des données pour les utilisateurs hors ligne/crack est assez spécial, et l'identifiant des utilisateurs hors ligne est défini sur `OFFLINE` :

```json5
{
  "users": {
    "OFFLINE": {
      "id": "OFFLINE",
      "invalidated": false,
      "selectedProfile": "1f4f5288115c3bcba74149a9dad0c89c",
      "profiles": {
        "1f4f5288115c3bcba74149a9dad0c89c": {
          // Le pseudo hors ligne peut être écrit aléatoirement
          "name": "Utilisateur Hors Ligne",
          "id": "1f4f5288115c3bcba74149a9dad0c89c",
          "uploadable": [
            "cape",
            "skin"
          ],
          "textures": {
            "SKIN": {
              "url": "",
              "metadata": {}
            }
          }
        }
      },
      "expiredAt": 8556839292003941,
      "authService": "offline",
      // Le pseudo sera toujours OFFLINE
      "username": "OFFLINE"
    }
  }
}
```

## Stockage d'AccessToken

XMCL utilise [keytar](https://www.npmjs.com/package/keytar) pour stocker accessToken dans le gestionnaire de mots de passe du système actuel.

Différents systèmes utiliseront différents services pour le stockage :

#### Windows

[Credential Manager](https://support.microsoft.com/fr-fr/windows/accessing-credential-manager-1b5c916a-6a16-889f-8581-fc16e8165ac0)

#### macOS

[Keychain](https://support.apple.com/fr-fr/guide/mac-help/mchlf375f392/mac)

#### Linux

[libsecret](https://wiki.gnome.org/Projects/Libsecret) ou [Secret Service API](https://www.gnu.org/software/emacs/manual/html_node/auth/Secret-Service-API.html)

Le launcher le stockera en fonction de `service` et de `account` en tant que clés, telles que l'identifiant d'utilisateur ci-dessus.

```
a6490773-7e31-4ab4-a70c-e3fa02e7e786
```

La clé dans le stockage sera alors

```
xmcl/microsoft/a6490773-7e31-4ab4-a70c-e3fa02e7e786
```

Pour tous les utilisateurs hors ligne, ce sera `xmcl/offline/OFFLINE`.