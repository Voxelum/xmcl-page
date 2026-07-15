# Archiviazione dei Dati

I dati di XMCL si dividono in due categorie principali:

1. Base dati e cache di XMCL generate da chromium.
2. Dati relativi a Minecraft.

## Cache e database di XMCL

I file relativi al launcher vero e proprio sono salvati nella cartella AppData del sistema. La cartella varia in base alla piattaforma:

::: code-group
```cmd [Windows]
%AppData%\xmcl
```
```cmd [Windows (APPX/appinstaller)]
# Versione < 0.34
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
# Versione >= 0.34 e < 0.40
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```
```sh [macOS]
~/Library/Application Support/xmcl
```
```sh [Linux]
~/.config/xmcl
```
:::

:::warning Nota
Non eliminare questi file a meno che tu non sappia esattamente cosa stai facendo.
:::

Qui troverai i file di configurazione in formato `json` e il database delle risorse.

- **Dati utente**: Account, skin, collegamenti, ecc. Salvati in `/user.json`.
- **Configurazione globale**: Lingua, proxy, server di download, ecc. Salvati in `/settings.json`.
- **Cache delle istanze**: Memorizza la cronologia dei profili e i relativi percorsi in `/instances.json`.
- **Cache di Java**: Informazioni sui percorsi e sulle installazioni di Java rilevate in `/java.json`.
- **Database delle risorse**: Metadati di mod, pacchetti di risorse, ecc. Salvati in formato `leveldb` all'interno di `/resources-v2`.
- **Registri (Logs)**: Cronologia dei log del launcher all'interno della cartella `/logs`.

## Dati correlati a Minecraft

La struttura della cartella di gioco in XMCL differisce leggermente da quella standard di Minecraft per ottimizzare lo spazio tramite hard link:

```sh
"Cartella pubblica dei dati"
└─ 📂mods # Cartella delle mod condivisa per tutte le istanze
  └─ modA.jar # File fisico della mod, le istanze punteranno qui
├─ 📂resourcepacks # Cartella condivisa dei pacchetti di risorse
├─ 📂shaderpacks # Cartella condivisa degli shader
├─ 📂versions # Versioni del gioco condivise
├─ 📂assets # Risorse di Minecraft condivise
├─ 📂libraries # Librerie condivise di Minecraft
└─ 📂instances # Contiene le tue istanze di gioco create da XMCL
```

La maggior parte dei file è identica a quella del gioco classico, ma la cartella `instances` contiene in modo isolato i file di configurazione, i salvataggi e le mod specifiche di ciascun profilo di gioco creato.
