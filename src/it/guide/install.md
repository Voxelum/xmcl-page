# Guida all'Installazione

Il launcher offre diversi formati di installazione. In questa guida ci concentreremo sulla descrizione delle caratteristiche dei formati più specifici o speciali.

## Windows

:::info
Il formato di installazione consigliato per gli utenti Windows è `APPX` o `Installazione online (appinstaller)`.
:::

### APPX

APPX è il formato di **pacchetto di installazione** fornito da Windows 10 che consente di eseguire le applicazioni in un ambiente virtualizzato/isolato (sandbox). I programmi installati tramite APPX vengono eseguiti tutti all'interno del sandbox di Windows.

Il vantaggio principale per gli utenti è che i file di cache dell'applicazione, le modifiche al registro di sistema e le altre operazioni rimangono isolati. Quando si disinstalla l'applicazione, la cache e le modifiche al registro vengono rimosse completamente.

AppX viene aggiornato tramite il meccanismo di appinstaller. Secondo le impostazioni automatiche del sistema, XMCL controlla la presenza di aggiornamenti all'**avvio dell'applicazione** e li applica al successivo riavvio.

:::tip Ottime notizie
Gli aggiornamenti automatici di APPX supportano la distribuzione ottimizzata e gli aggiornamenti incrementali di Windows: viene scaricato solo il contenuto che ha subito modifiche.
:::

### Installazione online (appinstaller)

`appinstaller` è essenzialmente equivalente al formato `APPX`. Si tratta di un file di testo XML contenente l'URL del pacchetto `APPX`. Quando viene avviato, scarica e installa la versione più recente di `APPX`.

### Windows 7/8

Soluzione scoperta e fornita da [longteng](https://github.com/longteng-H)([bilibili](https://space.bilibili.com/1030667057))

:::details Come eseguire XMCL su sistemi Windows precedenti a Windows 10
Per impostazione predefinita, XMCL no supporta nativamente Windows 7. Installando il kernel esteso VxKex è possibile integrare le librerie di runtime necessarie per garantire il funzionamento sui sistemi meno recenti.

1. Scarica e installa il kernel esteso [VxKex-NEXT](https://github.com/YuZhouRen86/VxKex-NEXT).
2. Fai clic destro sul file eseguibile X Minecraft Launcher.exe e abilita VxKex.
3. Seleziona le voci "Enable VxKex NEXT for this program" e "Report other versions of Windows", quindi applica le modifiche.

A questo punto, XMCL dovrebbe avviarsi normalmente su Windows 7 (tutte le funzioni tranne il multigiocatore).
:::

## macOS

:::warning
Gli utenti Mac devono consentire l'installazione di applicazioni non firmate nelle impostazioni di sicurezza del sistema, poiché XMCL non include una firma digitale dello sviluppatore.
:::

### DMG

Forniamo il formato DMG per macOS. È un formato di immagine disco. Apri il DMG e trascina l'applicazione nella cartella `Applications` per installarla.

Per consentire l'esecuzione dell'applicazione, apri il Terminale ed esegui i seguenti comandi:

```sh
# Consenti applicazioni da qualsiasi provenienza
sudo spctl --master-disable
# Rimuovi l'attributo di quarantena
sudo xattr -c /Applications/X\ Minecraft\ Launcher.app
```

Se installi l'applicazione in un'altra cartella, sostituisci il percorso del comando con quello corretto.

## Linux

:::info
Linux include molte distribuzioni differenti. Forniamo il formato universale `AppImage`.
:::

### AppImage

AppImage è un formato che consente di eseguire l'applicazione su qualsiasi distribuzione di Linux senza installazione. È sufficiente assegnare i permessi di esecuzione al file ed avviarlo.

Per aggiornare questa versione, gli utenti devono scaricare manualmente il nuovo file AppImage.

## Appendice: Scegliere la cartella dei dati di gioco

Durante l'installazione iniziale, dovrai scegliere la `Cartella dei dati di gioco`. XMCL salverà in questa cartella tutte le risorse scaricate, le librerie, i mondi, le mod, ecc.

:::warning Nota
A causa della speciale struttura di file gestita da XMCL per ottimizzare lo spazio su disco, si sconsiglia di utilizzare la cartella standard `.minecraft` come cartella di lavoro di XMCL.
:::

Si consiglia di creare una nuova cartella vuota dedicata ai dati di gioco di XMCL.

Per ulteriori informazioni, consulta la [Guia di gestione dei dati](/it/guide/manage.md).
