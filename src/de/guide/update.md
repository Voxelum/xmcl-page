# Update-Leitfaden

> In Bearbeitung

Da sich der Launcher noch in der `Beta`-Phase befindet, ist eine Datensicherung besonders wichtig... Hier stellen wir Ihnen vor, wie Sie Probleme bei Updates lösen und wie Sie ein Backup erstellen, wenn Sie neu installieren möchten.

## APPX-Update erfordert Neuinstallation

Da die alte Version des Launchers im `APPX`-Format abgelaufene Zertifikate hat, ist beim Upgrade von einer alten auf eine neue Version die Deinstallation der alten Version erforderlich. Bitte sichern Sie in diesem Fall Ihren XMCL-Datenordner.

Angenommen, `foo` ist Ihr Benutzername:

::: code-group
```[Windows (APPX)]
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
```
:::

Sie können diesen Ordner kopieren und auf dem Desktop ablegen. Nach der Neuinstallation sollte die neue Version von XMCL den folgenden Dateipfad haben:

::: code-group
```[Windows (APPX)]
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```
:::

Fügen Sie einfach Ihre gesicherten Dateien wieder dort ein.

## APPX-Update fehlgeschlagen

Das APPX-Update sollte einen Ordner öffnen, in dem sich die heruntergeladene Datei `xmcl.appinstaller` befindet. Sie können diese Datei manuell doppelklicken, um das Update zu installieren.

## Andere Updates erfordern eine Neuinstallation

In diesem Fall ist ein Backup eigentlich nicht erforderlich, da nur `APPX` die Datendateien von XMCL löscht. Natürlich können Sie trotzdem ein Backup erstellen. Die Datendateien befinden sich an folgenden Orten:

::: code-group
```cmd [Windows]
%AppData%\xmcl
```
```sh [macOS]
~/Library/Application Support/xmcl
```
```sh [Linux]
~/.config/xmcl
```
:::

## Update anderer Versionen fehlgeschlagen

Laden Sie es einfach erneut herunter...
