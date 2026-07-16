# Almacenamiento de Datos

Los datos de XMCL se dividen en dos categorías:

1. Base de datos y caché de XMCL generadas por chromium.
2. Datos relacionados con Minecraft.

## Caché y base de datos de XMCL

Los archivos relacionados con el propio lanzador se guardan en la carpeta AppData del sistema. La ruta exacta varía según la plataforma:

::: code-group
```cmd [Windows]
%AppData%\xmcl
```
```cmd [Windows (APPX/appinstaller)]
# Versión < 0.34
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
# Versión >= 0.34 y < 0.40
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
No elimines estos archivos a menos que sepas exactamente lo que estás haciendo.
:::

Aquí encontrarás los archivos de configuración en formato `json` y la base de datos de recursos.

- **Datos de usuario**: Cuentas, skins, enlaces, etc. Se guardan en `/user.json`.
- **Configuración global**: Idioma, proxy, servidor de descarga, etc. Se guardan en `/settings.json`.
- **Caché de instancias**: Guarda el historial de perfiles y sus rutas en `/instances.json`.
- **Caché de Java**: Información sobre las rutas e instalaciones de Java detectadas en `/java.json`.
- **Base de datos de recursos**: Metadatos de mods, paquetes de recursos, etc. Guardado en formato `leveldb` dentro de `/resources-v2`.
- **Registros (Logs)**: Historial de registros del lanzador en la carpeta `/logs`.

## Datos relacionados con Minecraft

La estructura del directorio de juego en XMCL difiere ligeramente de la carpeta estándar de Minecraft para optimizar el disco mediante enlaces duros:

```sh
"Carpeta pública de datos"
└─ 📂mods # Carpeta de mods compartida para todas las instancias
  └─ modA.jar # Archivo físico del mod, las instancias apuntarán aquí
├─ 📂resourcepacks # Carpeta compartida de paquetes de recursos
├─ 📂shaderpacks # Carpeta compartida de shaders
├─ 📂versions # Versiones compartidas del juego
├─ 📂assets # Activos de Minecraft compartidos
├─ 📂libraries # Bibliotecas compartidas de Minecraft
└─ 📂instances # Contiene tus instancias de juego creadas por XMCL
```

La gran mayoría de los archivos son idénticos a los del juego clásico, pero la carpeta `instances` contiene de forma aislada los archivos de configuración y partidas de cada perfil de juego creado.
