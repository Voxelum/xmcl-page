# Solución de Problemas de Instalación y Lanzamiento

Si experimentas problemas al instalar Minecraft, cargadores de mods (Forge/Fabric/NeoForge/Quilt), mods, modpacks, shaders o al iniciar el juego, esta guía te ayudará a solucionar y corregir el problema paso a paso.

---

## 🌐 1. La descarga falla o se queda atascada (Problemas de red)

### Síntomas
* La descarga de archivos de juego, activos o cargadores de mods se detiene en `0%`.
* El lanzador muestra errores de conexión o tiempo de espera agotado (`CONNECTION_TIMED_OUT`, `NAME_NOT_RESOLVED`, `HTTP_STATUS 504`).

### Solución

:::tip Usar un servidor espejo (Mirror)
Si los servidores oficiales de Mojang o los cargadores de mods están saturados o bloqueados en tu región, puedes cambiar de fuente de descarga:
1. Haz clic en **Ajustes** (icono de engranaje en la barra lateral izquierda).
2. Desplázate hacia abajo hasta la sección **Ajustes de Red**.
3. Busca la opción **Origen de descarga / Espejo** (Download Source / Mirror).
4. Cambia de **Por defecto** a **BMCLAPI** o **MCBBS** (espejos de descarga alternativos y muy fiables que sincronizan todos los archivos oficiales).
:::

:::info Ajustes del Proxy
Si la red a la que estás conectado bloquea ciertos dominios, puedes configurar un proxy de red dentro del lanzador:
1. Ve a **Ajustes** -> **Ajustes de Red** y busca la configuración de Proxy.
2. Introduce la dirección de tu servidor proxy HTTP o SOCKS5.
3. Prueba la conexión.
:::

---

## 📦 2. Fallo de descarga de mods / modpacks (Restricciones del API de CurseForge)

### Síntomas
* Al descargar un modpack o un mod desde CurseForge, la descarga falla y se muestra un símbolo de advertencia.
* Aparece un mensaje que advierte sobre restricciones de descargas de terceros ("Restricted third-party downloads").

### Causa
Algunos autores de mods en CurseForge bloquean las descargas de terceros en la API para forzar a los usuarios a visitar su página web oficial y así obtener ingresos publicitarios.

### Solución
XMCL permite solucionar esto completando la descarga manualmente:
1. Abre los detalles de la tarea fallida en el Gestor de Tareas del lanzador (esquina superior derecha).
2. Haz clic en el enlace junto al mod que falló para abrir la página oficial de CurseForge en tu navegador.
3. Descarga el archivo `.jar` manualmente a través del navegador.
4. **Arrastra y suelta** el archivo `.jar` descargado directamente dentro de la ventana de XMCL (o colócalo manualmente en la carpeta `mods` del perfil).
5. XMCL detectará el archivo de inmediato y completará la instalación de manera automática.

---

## 🔍 3. El mod está en el sitio web de CurseForge pero no aparece en la búsqueda del lanzador

### Síntomas
* Buscas un mod en el buscador de XMCL y dice "No se encontraron resultados", a pesar de que el mod está visible en el sitio web oficial de CurseForge.

### Causa
CurseForge permite a los desarrolladores de mods **desactivar el acceso a la API para terceros**. Si desactivan esta opción, la API de CurseForge (la cual usa XMCL para buscar y descargar los mods) tiene prohibido devolver el mod en los resultados de búsqueda.

### Solución
1. Abre tu navegador y ve a la página del mod en [CurseForge](https://www.curseforge.com/minecraft/search).
2. Haz clic en **Download** para guardar el archivo `.jar` en tu computadora.
3. Abre XMCL y selecciona tu perfil activo.
4. **Arrastra y suelta** el archivo `.jar` directamente en la ventana de XMCL para instalarlo en la carpeta `mods`.

---

## 📦 4. Los modpacks importados "desaparecen" o aparecen vacíos

### Síntomas
* Arrastras y sueltas un modpack `.zip` o `.mrpack` en el lanzador, pero no lo encuentras en tu perfil de juego actual, o la lista de mods está vacía.

### Causa
1. **Creación de nueva instancia**: XMCL no mezcla modpacks con tu perfil actual. En su lugar, crea una **Instancia nueva** (perfil) dedicada exclusivamente para ese modpack.
2. **Descargas en segundo plano**: Para ahorrar espacio, los archivos de los modpacks no contienen los archivos `.jar` físicos de los mods (solo contienen metadatos con el listado). Tras la importación, XMCL inicia una tarea en segundo plano para descargar todos los mods necesarios. Hasta que termine, la lista de mods aparecerá vacía.

### Solución
1. **Cambiar de perfil**: Haz clic en el menú lateral o selector de perfil en XMCL. Busca la nueva instancia nombrada tras el modpack importado y selecciónala.
2. **Revisar el gestor de tareas**: Haz clic en el icono de descargas en la parte superior derecha de XMCL para comprobar si el proceso aún está activo. Espera a que termine antes de iniciar el juego.

---

## 🔄 5. Bucle infinito de archivos dañados (Error de comprobación de suma)

### Síntomas
* El lanzador descarga una y otra vez el mismo archivo de biblioteca o recurso, indicando que está corrupto.
* El juego no se inicia porque el análisis de archivos falla repetidamente.

### Causa
La descarga de un archivo fue interrumpida y quedó bloqueada de forma corrupta en la caché local, impidiendo que el lanzador la sobrescriba.

### Solución
1. Busca la ruta del archivo dañado que aparece en el registro de errores de XMCL (por ejemplo, `libraries/org/lwjgl/...`).
2. Abre la carpeta de datos de tu perfil (icono de carpeta en la parte superior derecha del perfil de juego).
3. Navega hasta la ruta indicada en el error y **elimina por completo la carpeta** que contiene el archivo dañado.
4. Haz clic en **Reparar** (Repair) o inicia el juego nuevamente. El lanzador descargará una copia limpia del archivo.

---

## ☕ 6. El juego se cierra de inmediato tras iniciar (Versión de Java incorrecta)

### Síntomas
* Haces clic en jugar, pero el juego se cierra de inmediato con un código de error `1` o `-1`.
* Los registros (logs) muestran el error `UnsupportedClassVersionError` o "Java no encontrado".

### Causa
Cada versión de Minecraft requiere una versión específica de Java (JDK). Usar una versión de Java incompatible hará que el juego se cierre inmediatamente.

### Solución
XMCL cuenta con un instalador automático de Java que puede descargar la versión correcta para ti.

:::warning Tabla de compatibilidad de Java
Asegúrate de que tu perfil use la versión correcta de Java:
* **Minecraft 1.12.2 y anteriores:** Java 8
* **Minecraft 1.16 - 1.17:** Java 16 / 17
* **Minecraft 1.18 - 1.20.4:** Java 17
* **Minecraft 1.20.5+:** Java 21
:::

#### Cómo seleccionar la versión de Java en XMCL:
1. Abre los ajustes del perfil (icono de engranaje junto al botón "Jugar").
2. Ve a la sección **Java**.
3. Haz clic en el selector de Java. XMCL mostrará las versiones instaladas en tu sistema, marcando en color verde las compatibles.
4. Si no tienes la versión necesaria, haz clic en **Instalar Java** para descargarla automáticamente.

---

## 📑 7. El lanzador no se abre o muestra una pantalla negra

### Síntomas
* Haces doble clic en el acceso directo de XMCL pero no ocurre nada.
* El lanzador se abre pero se queda completamente en negro.

### Solución
Puedes revisar los archivos de registro del propio lanzador para identificar la causa:
1. Dirígete a la carpeta de datos de XMCL en tu sistema:
   * **Windows:** `%appdata%\xmcl`
   * **macOS:** `~/Library/Application Support/xmcl`
   * **Linux:** `~/.config/xmcl`
2. Abre la carpeta `logs` y busca el archivo más reciente llamado `main.log`.

---

## 📋 8. Generar un informe de diagnóstico (Primer paso recomendado)

Antes de buscar archivos de registro de forma manual, te recomendamos encarecidamente utilizar la opción de **Generar Informe de Diagnóstico** dentro del lanzador. Esto recopilará los archivos de registro de XMCL, del juego e información de tu hardware en un solo archivo, lo que facilitará que la comunidad o los desarrolladores te ayuden rápidamente.

### Cómo generar el informe:
1. Haz clic en **Ayuda y comentarios** (Help & Feedback) en la barra superior de XMCL.
2. Selecciona **Generar informe** (Generate Report).

   <img src="/guidephoto/Generate%20Report.gif" alt="Generate Report" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;">

---

## 📑 9. Cómo analizar los archivos de registro (Logs) de XMCL y del juego

Si prefieres buscar los logs de forma manual, estos te mostrarán exactamente qué causó el cierre inesperado.

### 🔍 Cómo encontrar los archivos de registro (Logs)

Dependiendo de si el error ocurre en XMCL o dentro de Minecraft, deberás buscar en diferentes ubicaciones:

#### A. Registros del Lanzador (`main.log`)
Para cierres de XMCL, descargas fallidas, problemas de red o errores al iniciar sesión:
- **Windows:** Presiona `Win + R`, escribe `%appdata%\xmcl\logs` y presiona Enter.
- **macOS:** Ve a `~/Library/Application Support/xmcl/logs`.
- **Linux:** Ve a `~/.config/xmcl/logs`.
- Abre el archivo más reciente llamado `main.log`.

#### B. Registros del Juego (`latest.log` e informes de cuelgues)
Para problemas relacionados con mods, cuelgues de Minecraft o fallos de Java:
- En XMCL, haz clic en el icono de **Carpeta** en la parte superior derecha de tu perfil de juego para abrir su directorio.
- Entra en la carpeta `logs` y abre `latest.log`.
- Si el juego se cerró de repente, ve a la carpeta `crash-reports` y abre el archivo `.txt` más reciente (nombrado con el formato `crash-AAAA-MM-DD_HH.MM.SS-client.txt`).

---

### 🛠 Analizar logs y corregir errores comunes

Abre el archivo de registro en cualquier editor de texto (como el Bloc de Notas) y utiliza el buscador (`Ctrl + F`) para buscar los siguientes códigos de error comunes:

#### 🔴 Caso 1: Memoria insuficiente (Out of Memory)
- **Texto a buscar:** `java.lang.OutOfMemoryError: Java heap space` o código de salida `-805306369`.
- **Explicación:** Has asignado muy poca RAM en los ajustes de Minecraft para cargar todos los mods instalados.
- **Solución:**
  1. Ve a los ajustes de tu perfil (icono de engranaje junto al botón "Jugar").
  2. Desplázate hasta la sección **Java**.
  3. Aumenta los valores de **Memoria mín.** y **Memoria máx.** (por ejemplo, asigna `4096` MB o `6144` MB como máximo).

#### 🔴 Caso 2: Conflicto de mods o falta de dependencias
- **Texto a buscar:** `Mixin transformation failed`, `DependencyResolutionException` o advertencias similares como `Requires mod 'fabric' (version X or later), but only version Y is installed`.
- **Explicación:** Un mod requiere un mod secundario que no está instalado en tu carpeta de mods, o dos mods son incompatibles entre sí.
- **Solución:** Revisa con cuidado el mensaje de error, suele nombrar el mod que falta. Descarga el mod que falta o elimina el mod conflictivo.

#### 🔴 Caso 3: Incompatibilidad de Java
- **Texto a buscar:** `java.lang.UnsupportedClassVersionError: ... has been compiled by a more recent version of the Java Runtime`.
- **Explicación:** El juego se ejecuta con una versión de Java antigua e incompatible (por ejemplo, usar Java 8 para Minecraft 1.20).
- **Solución:** Abre los ajustes del perfil de juego en XMCL, ve a la sección **Java** y selecciona **Instalar Java** para descargar la versión recomendada.

#### 🔴 Caso 4: Fallo de tarjeta gráfica / OpenGL
- **Texto a buscar:** `GLFW error 65542: WGL: The driver does not seem to support OpenGL` o `Pixel format not accelerated`.
- **Explicación:** Los controladores de tu tarjeta gráfica están obsoletos o no están instalados, o el juego está intentando arrancar desde el chip gráfico integrado en lugar de la tarjeta de video dedicada.
- **Solución:** Descarga e instala los controladores oficiales más recientes de tu tarjeta gráfica (NVIDIA, AMD o Intel). En portátiles, ve a los ajustes de pantalla de Windows y fuerza a Java a ejecutarse en modo "Alto Rendimiento".

---

### ❓ ¿Qué hacer si no entiendes los archivos de registro (Logs)?

Si has revisado los logs y aún no sabes qué está fallando, no te preocupes. La comunidad de XMCL está disponible para ayudarte:

#### 1. Únete a nuestro servidor de Discord oficial
- Recibe ayuda directa de los desarrolladores y de jugadores experimentados.
- Enlace de invitación: **[Servidor oficial de Discord](https://discord.gg/W5XVwYY7GQ)**
- **Cómo preguntar:** Ve al canal **#feedback-and-idea** y sube el informe de diagnóstico que generaste o el archivo `.txt` del log.
- Aquí tienes una vista previa de nuestro canal de ayuda:
  
  <img src="/guidephoto/Discord-feedback.gif" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

#### 2. Pregunta en Reddit
- Puedes publicar tu duda en nuestro foro comunitario:
- Enlace: **[Comunidad de Reddit r/XMCL](https://www.reddit.com/r/XMCL/)**

#### 3. Reporta un error (Issue) en GitHub
- Si consideras que se trata de un error del propio programa de XMCL, puedes abrir un reporte.
- Abrir reporte: **[XMCL GitHub Issues](https://github.com/Voxelum/x-minecraft-launcher/issues)**
- Pega los detalles de tu informe de diagnóstico en la descripción para que los desarrolladores puedan reproducir y corregir el error.
