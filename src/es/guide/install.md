# Guía de Instalación

El lanzador ofrece múltiples formatos de instalación. Aquí nos centraremos en presentar las características de los formatos más específicos o especiales.

## Windows

:::info
El formato de instalación recomendado para los usuarios de Windows es `APPX` o `Instalación en línea (appinstaller)`.
:::

### APPX

APPX es el formato de **paquete de instalación** proporcionado por Windows 10 que permite ejecutar aplicaciones en un entorno aislado/virtualizado. Las aplicaciones instaladas mediante APPX se ejecutan dentro del sandbox de Windows.

El mayor beneficio para el usuario es que los archivos de caché de la aplicación, las modificaciones del registro y otras operaciones quedan aisladas. Al desinstalar la aplicación, la caché y las modificaciones se eliminan por completo.

AppX se actualiza mediante el mecanismo de appinstaller. De acuerdo con las políticas automáticas del sistema, XMCL comprueba si hay actualizaciones al **iniciar la aplicación** y las aplica en el siguiente inicio.

:::tip Buenas noticias
Las actualizaciones automáticas de APPX admiten la entrega optimizada y actualizaciones incrementales de Windows: solo se descarga lo que ha cambiado.
:::

### Instalación en línea (appinstaller)

`appinstaller` es esencialmente equivalente al formato `APPX`. Es un archivo de texto XML que contiene la URL del paquete `APPX`. Al abrirlo, el instalador descarga e instala la versión más reciente del `APPX`.

### Windows 7/8

Solución descubierta y proporcionada por [longteng](https://github.com/longteng-H)([bilibili](https://space.bilibili.com/1030667057))

:::details Cómo ejecutar XMCL en sistemas Windows anteriores a Windows 10
Por defecto, XMCL no es compatible nativamente con Windows 7. Al instalar el kernel extendido VxKex, se complementan las bibliotecas de tiempo de ejecución necesarias para admitir sistemas heredados.

1. Descarga e instala el kernel extendido [VxKex-NEXT](https://github.com/YuZhouRen86/VxKex-NEXT).
2. Haz clic derecho en el archivo ejecutable X Minecraft Launcher.exe y activa VxKex.
3. Marca "Enable VxKex NEXT for this program" y "Report other versions of Windows", luego aplica los cambios.

En este punto, XMCL debería ejecutarse normalmente en Windows 7 (todas las funciones excepto multijugador).
:::

## macOS

:::warning
Los usuarios de Mac deben permitir la instalación de aplicaciones no firmadas en los ajustes de seguridad del sistema, ya que XMCL no cuenta con una firma digital del desarrollador.
:::

### DMG

Ofrecemos el formato DMG para macOS. Es un formato de imagen de disco. Abre el DMG y arrastra la aplicación a la carpeta `Applications` para instalarla.

Para permitir que la aplicación se ejecute, abre la Terminal y ejecuta los siguientes comandos:

```sh
# Permitir aplicaciones de cualquier origen
sudo spctl --master-disable
# Limpiar el atributo de cuarentena
sudo xattr -c /Applications/X\ Minecraft\ Launcher.app
```

Si instalas la aplicación en otra ubicación, reemplaza la ruta del comando por la correspondiente.

## Linux

:::info
Linux cuenta con muchas distribuciones. Proporcionamos el formato universal `AppImage`.
:::

### AppImage

AppImage es un formato de aplicación que permite ejecutar el programa en cualquier distribución de Linux sin necesidad de instalación. Simplemente otorga permisos de ejecución al archivo e inicialízalo.

Para actualizar, los usuarios deben descargar la nueva versión de AppImage manualmente.

## Apéndice: Elegir el directorio de datos del juego

Durante la instalación inicial, deberás elegir el `Directorio de datos del juego`. XMCL colocará allí todas las descargas de activos, bibliotecas, mods, etc.

:::warning Nota
Debido a la estructura especial de archivos que maneja XMCL para optimizar el espacio en disco, no se recomienda utilizar la carpeta clásica `.minecraft` de vainilla como directorio de trabajo de XMCL.
:::

Se recomienda crear una nueva carpeta vacía para los datos del juego de XMCL.

Para más información, consulta la [Guía de gestión de datos](/es/guide/manage.md).
