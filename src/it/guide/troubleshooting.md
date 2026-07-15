# Risoluzione dei Problemi di Installazione e Avvio

Se riscontri problemi durante l'installazione di Minecraft, dei caricatori di mod (Forge/Fabric/NeoForge/Quilt), delle mod, dei modpack, degli shader o all'avvio del gioco, questa guida ti aiuterà a trovare e risolvere il problema passo dopo passo.

---

## 🌐 1. Il download fallisce o si blocca (Problemi di rete)

### Sintomi
* Il download di file di gioco, risorse o caricatori di mod si ferma allo `0%`.
* Il launcher mostra errori di connessione o timeout (`CONNECTION_TIMED_OUT`, `NAME_NOT_RESOLVED`, `HTTP_STATUS 504`).

### Soluzione

:::tip Usare un server mirror
Se i server ufficiali di Mojang o dei caricatori di mod sono sovraccarichi o bloccati nella tua area geografica, puoi cambiare la sorgente di download:
1. Fai clic su **Impostazioni** (icona dell'ingranaggio nella barra laterale sinistra).
2. Scorri verso il basso fino alla sezione **Impostazioni di Rete**.
3. Cerca l'opzione **Sorgente di download / Mirror** (Download Source / Mirror).
4. Cambia da **Predefinito** a **BMCLAPI** o **MCBBS** (server mirror affidabili che sincronizzano tutti i file ufficiali).
:::

:::info Impostazioni del Proxy
Se la rete a cui sei connesso limita l'accesso a determinati domini, puoi configurare un proxy di rete all'interno del launcher:
1. Vai su **Impostazioni** -> **Impostazioni di Rete** e cerca la sezione Proxy.
2. Inserisci l'indirizzo del tuo server proxy HTTP o SOCKS5.
3. Verifica la connessione.
:::

---

## 📦 2. Download di mod / modpack fallito (Restrizioni API CurseForge)

### Sintomi
* Durante il download di un modpack o di una singola mod da CurseForge, il download fallisce e viene mostrato un simbolo di avviso.
* Viene visualizzato un messaggio che segnala restrizioni sui download da parte di terze parti ("Restricted third-party downloads").

### Causa
Alcuni autori di mod su CurseForge disabilitano il download tramite API per i launcher di terze parti per costringere i giocatori a visitare la loro pagina web ufficiale (ottenendo così introiti pubblicitari).

### Soluzione
XMCL consente di risolvere questo inconveniente completando il download manualmente:
1. Apri i dettagli del processo fallito nel Gestore Attività del launcher (in alto a destra).
2. Fai clic sul collegamento accanto alla mod che ha fallito per aprire la pagina ufficiale di CurseForge nel tuo browser.
3. Scarica il file `.jar` manualmente tramite il browser.
4. **Trascina e rilascia** il file `.jar` scaricato direttamente all'interno della finestra di XMCL (oppure inseriscilo manualmente nella cartella `mods` del profilo).
5. XMCL rileverà il file immediatamente e completerà l'installazione in modo automatico.

---

## 🔍 3. La mod è presente sul sito web di CurseForge ma non appare nella ricerca del launcher

### Sintomi
* Cerchi una mod nel motore di ricerca di XMCL e viene visualizzato il messaggio "Nessun risultato trovato", nonostante la mod sia visibile sul sito ufficiale di CurseForge.

### Causa
CurseForge consente agli sviluppatori di mod di **disattivare l'accesso alle API per terze parti**. Se disattivano questa opzione, le API di CurseForge (utilizzate da XMCL per cercare e scaricare mod) non possono restituire la mod nei risultati di ricerca.

### Soluzione
1. Apri il browser e vai alla pagina della mod su [CurseForge](https://www.curseforge.com/minecraft/search).
2. Fai clic su **Download** per salvare il file `.jar` sul tuo computer.
3. Apri XMCL e seleziona il tuo profilo attivo.
4. **Trascina e rilascia** il file `.jar` direttamente nella finestra di XMCL per installarlo nella cartella `mods` del profilo selezionato.

---

## 📦 4. I modpack importati "scompaiono" o appaiono vuoti

### Sintomi
* Trascini e rilasci un file di modpack `.zip` o `.mrpack` nel launcher, ma non lo trovi nel tuo profilo di gioco attuale, oppure l'elenco delle mod è completamente vuoto.

### Causa
1. **Creazione di una nuova istanza**: XMCL non unisce i modpack con il profilo corrente. Crea invece un'**Istanza nuova** (profilo) dedicata esclusivamente a quel modpack.
2. **Download in background**: Per risparmiare spazio, i file dei modpack non contengono i file `.jar` fisici delle mod (contengono solo metadati con l'elenco). Dopo l'importazione, XMCL avvia un processo in background per scaricare tutte le mod necessarie. Fino al completamento, l'elenco delle mod apparirà vuoto.

### Soluzione
1. **Cambiare profilo**: Fai clic sul menu laterale o sul selettore di profili in XMCL. Cerca la nuova istanza creata con il nome del modpack importato e selezionala.
2. **Controllare il gestore attività**: Fai clic sull'icona dei download in alto a destra in XMCL per verificare se il processo è ancora attivo. Attendi il completamento prima di avviare il gioco.

---

## 🔄 5. Loop infinito di file danneggiati (Errore di checksum)

### Sintomi
* Il launcher continua a scaricare ripetutamente lo stesso file di libreria o risorsa, indicando che è corrotto.
* Il gioco non si avvia poiché il controllo dei file fallisce continuamente.

### Causa
Il download di un file è stato interrotto e il file parziale è rimasto bloccato in modo corrotto nella cache locale, impedendo al launcher di sovrascriverlo.

### Soluzione
1. Trova il percorso del file danneggiato indicato nel registro degli errori di XMCL (ad esempio, `libraries/org/lwjgl/...`).
2. Apri la cartella dei dati del tuo profilo (icona della cartella in alto a destra nel profilo di gioco).
3. Naviga fino al percorso indicato nell'errore ed **elimina completamente la cartella** contenente il file danneggiato.
4. Fai clic su **Ripara** (Repair) o avvia nuovamente il gioco. Il launcher scaricherà una copia pulita del file.

---

## ☕ 6. Il gioco si chiude subito dopo l'avvio (Versione di Java non corretta)

### Sintomi
* Fai clic su gioca, ma il gioco si chiude immediatamente con un codice di errore `1` o `-1`.
* I registri (logs) mostrano l'errore `UnsupportedClassVersionError` o "Java non trovato".

### Causa
Ogni versione di Minecraft richiede una versione specifica di Java (JDK). L'utilizzo di una versione di Java incompatibile causerà la chiusura immediata del gioco.

### Soluzione
XMCL include un installatore automatico di Java in grado di scaricare la versione corretta per te.

:::warning Tabella di compatibilità di Java
Assicurati che il tuo profilo utilizzi la versione corretta di Java:
* **Minecraft 1.12.2 e precedenti:** Java 8
* **Minecraft 1.16 - 1.17:** Java 16 / 17
* **Minecraft 1.18 - 1.20.4:** Java 17
* **Minecraft 1.20.5+:** Java 21
:::

#### Come selezionare la versione di Java in XMCL:
1. Apri le impostazioni del profilo (icona dell'ingranaggio accanto al pulsante "Gioca").
2. Vai alla sezione **Java**.
3. Fai clic sul selettore di Java. XMCL mostrerà le versioni installate nel tuo sistema, contrassegnando in verde quelle compatibili.
4. Se non disponi della versione richiesta, fai clic su **Installa Java** per scaricarla automaticamente.

---

## 📑 7. Il launcher non si apre o mostra una schermata nera

### Sintomi
* Fai doppio clic sul collegamento di XMCL ma non succede nulla.
* Il launcher si apre ma rimane completamente nero.

### Soluzione
Puoi controllare i file di registro del launcher stesso per identificare la causa:
1. Dirigiti alla cartella dei dati di XMCL nel tuo sistema:
   * **Windows:** `%appdata%\xmcl`
   * **macOS:** `~/Library/Application Support/xmcl`
   * **Linux:** `~/.config/xmcl`
2. Apri la cartella `logs` e cerca il file più recente chiamato `main.log`.

---

## 📋 8. Generare un report di diagnostica (Primo passaggio consigliato)

Prima di cercare i file di registro manualmente, ti consigliamo vivamente di utilizzare l'opzione **Genera Report di Diagnostica** all'interno del launcher. Questo raccoglierà i file di registro del launcher, del gioco e le informazioni hardware in un unico file, facilitando il supporto da parte della comunità o degli sviluppatori.

### Come generare il report:
1. Fai clic su **Aiuto e feedback** (Help & Feedback) nella barra superiore di XMCL.
2. Seleziona **Genera report** (Generate Report).

   <video src="/guidephoto/Generate%20Report.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

---

## 📑 9. Come analizzare i file di registro (Logs) di XMCL e del gioco

Se preferisci cercare i log manualmente, questi mostreranno esattamente cosa ha causato la chiusura inattesa.

### 🔍 Come trovare i file di registro (Logs)

A seconda che l'errore avvenga in XMCL o all'interno di Minecraft, dovrai cercare in posizioni differenti:

#### A. Registri del Launcher (`main.log`)
Per chiusure improvvise di XMCL, download falliti, problemi di rete o errori di accesso:
- **Windows:** Premi `Win + R`, digita `%appdata%\xmcl\logs` e premi Invio.
- **macOS:** Vai su `~/Library/Application Support/xmcl/logs`.
- **Linux:** Vai su `~/.config/xmcl/logs`.
- Apri il file più recente chiamato `main.log`.

#### B. Registri del Gioco (`latest.log` e report dei crash)
Per problemi relativi alle mod, crash di Minecraft o errori di Java:
- In XMCL, fai clic sull'icona della **Cartella** in alto a destra nel tuo profilo di gioco per aprirne la directory.
- Entra nella cartella `logs` e apri `latest.log`.
- Se il gioco si è chiuso improvvisamente, vai alla cartella `crash-reports` e apri il file `.txt` più recente (nominato con il formato `crash-AAAA-MM-DD_HH.MM.SS-client.txt`).

---

### 🛠 Analizzare i log e correggere gli errori comuni

Apri il file di registro in qualsiasi editor di testo (come il Blocco Note) e usa la funzione di ricerca (`Ctrl + F`) per individuare i seguenti messaggi di errore comuni:

#### 🔴 Caso 1: Memoria insufficiente (Out of Memory)
- **Testo da cercare:** `java.lang.OutOfMemoryError: Java heap space` o codice di uscita `-805306369`.
- **Spiegazione:** È stata assegnata troppa poca memoria RAM nelle impostazioni del gioco per caricare tutte le mod installate.
- **Soluzione:**
  1. Vai alle impostazioni del profilo di gioco (icona dell'ingranaggio accanto al pulsante "Gioca").
  2. Scorri fino alla sezione **Java**.
  3. Aumenta i valori di **Memoria min.** e **Memoria max.** (ad esempio, assegna `4096` MB o `6144` MB come massimo).

#### 🔴 Caso 2: Conflitto di mod o mancanza di dipendenze
- **Testo da cercare:** `Mixin transformation failed`, `DependencyResolutionException` o avvisi simili come `Requires mod 'fabric' (version X or later), but only version Y is installed`.
- **Spiegazione:** Una mod richiede una libreria o mod secondaria che non è installata, oppure due mod sono incompatibili tra loro.
- **Soluzione:** Leggi attentamente il messaggio di errore: di solito viene indicato il nome della mod mancante. Scarica la mod richiesta o rimuovi la mod che causa il conflitto.

#### 🔴 Caso 3: Incompatibilità di Java
- **Testo da cercare:** `java.lang.UnsupportedClassVersionError: ... has been compiled by a more recent version of the Java Runtime`.
- **Spiegazione:** Il gioco viene eseguito con una versione di Java obsoleta e incompatibile (ad esempio, l'uso di Java 8 per Minecraft 1.20).
- **Soluzione:** Apri le impostazioni del profilo di gioco in XMCL, vai alla sezione **Java** e seleziona **Installa Java** per scaricare la versione consigliata.

#### 🔴 Caso 4: Crash della scheda grafica / OpenGL
- **Testo da cercare:** `GLFW error 65542: WGL: The driver does not seem to support OpenGL` o `Pixel format not accelerated`.
- **Spiegazione:** I driver della scheda grafica sono obsoleti o mancanti, oppure il gioco sta tentando di avviarsi tramite il chip grafico integrato del processore anziché la scheda video dedicata.
- **Soluzione:** Scarica e installa i driver ufficiali più recenti dal sito del produttore della tua scheda video (NVIDIA, AMD o Intel). Sui computer portatili, forza l'esecuzione di Java in modalità "Prestazioni Elevate" nelle impostazioni video del sistema operativo.

---

### ❓ Cosa fare se non comprendi i file di registro (Logs)?

Se hai controllato i log e ancora non sai cosa stia fallendo, non preoccuparti. La comunità di XMCL è a tua disposizione per aiutarti:

#### 1. Entra nel nostro server Discord ufficiale
- Ricevi assistenza diretta dagli sviluppatori e da giocatori esperti.
- Link di invito: **[Server Discord Ufficiale](https://discord.gg/W5XVwYY7GQ)**
- **Come chiedere aiuto:** Vai nel canale **#feedback-and-idea** e carica il report di diagnostica generato o il file `.txt` del log di crash.
- Ecco un'anteprima del nostro canale di supporto:
  
  <img src="/guidephoto/Discord-feedback.gif" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

#### 2. Chiedi su Reddit
- Puoi pubblicare la tua domanda sul forum della nostra comunità:
- Enlace: **[Comunità Reddit r/XMCL](https://www.reddit.com/r/XMCL/)**

#### 3. Apri una segnalazione (Issue) su GitHub
- Se ritieni di aver riscontrato un bug del launcher XMCL, puoi inviare una segnalazione di errore.
- Crea segnalazione: **[XMCL GitHub Issues](https://github.com/Voxelum/x-minecraft-launcher/issues)**
- Incolla i dettagli del report di diagnostica nella descrizione in modo che gli sviluppatori possano riprodurre e risolvere il problema.
