# Installationsanleitung

Der Launcher bietet mehrere Installationsformate, von denen einige weniger gebräuchlich sind. Hier werden wir uns auf die Vorstellung der **weniger gebräuchlichen** oder **speziellen** Formatfunktionen konzentrieren.

## Windows

:::info
Das empfohlene Installationsformat für Windows-Benutzer ist `APPX` oder `Online-Installation (appinstaller)`.
:::

### APPX

APPX ist ein von Windows 10 bereitgestelltes **Installationspaketformat**, das es Programmen ermöglicht, in einer virtualisierten/sandboxed Umgebung zu laufen. Programme, die über APPX installiert werden, laufen alle in der Windows-Sandbox.

Der größte Vorteil für Benutzer ist, dass die `Cache-Dateien`, `Registry-Änderungen` und andere Operationen der Anwendung isoliert werden - wenn Sie die Anwendung deinstallieren, werden der `Cache` und die `Registry-Änderungen` gemeinsam gelöscht.

:::info Gute Nachricht
Machen Sie sich keine Sorgen, dass das Programm in der Registry herumspielt, obwohl XMCLs einzige Registry-Ergänzung die Dateierweiterungszuordnung sein könnte.
:::

AppX wird über den appinstaller-Mechanismus aktualisiert. Gemäß der in appinstaller integrierten [automatischen Aktualisierungsstrategie](https://learn.microsoft.com/en-us/windows/msix/app-installer/auto-update-and-repair--overview#automatic-updates) überprüft XMCL auf Updates, wenn der Benutzer **die Anwendung startet**, und wenn ein Update verfügbar ist, wird es beim nächsten Start aktualisiert.

:::tip Gute Nachricht
Die automatischen Updates von APPX unterstützen Windows' **Optimierungslieferung** und **inkrementelle Updates** - nur geänderte Inhalte werden aktualisiert.
:::

### Online-Installation (appinstaller)

`appinstaller` ist im Wesentlichen dasselbe wie das `APPX`-Format. `appinstaller` selbst ist eine `XML`-Textdatei, die die `URL` der `APPX` enthält. Wenn die Installationsoberfläche erscheint, wird versucht, die `APPX` herunterzuladen und zu installieren. Daher ist sein Aktualisierungsmechanismus derselbe wie bei APPX.

### Windows 7/8

Lösung entdeckt und bereitgestellt von [longteng](https://github.com/longteng-H)([bilibili](https://space.bilibili.com/1030667057))

:::details Wie man XMCL auf Windows-Systemen unter Windows 10 ausführt
Standardmäßig unterstützt XMCL den nativen Windows 7-Betrieb nicht. Durch die Installation des VxKex-erweiterten Kernels zur Ergänzung der erforderlichen Laufzeitbibliotheken bietet dies eine Lösung für Benutzer, die noch auf Legacy-Systemen sind. (Hinweis: Diese Methode ist auch auf einige Software anwendbar, die auf älteren Systemen nicht normal ausgeführt werden kann)

1. Laden Sie den [VxKex-NEXT](https://github.com/YuZhouRen86/VxKex-NEXT) erweiterten Kernel herunter und installieren Sie ihn. Dies ist ein hier bereitgestellter inländischer Zweig.
2. Finden Sie X Minecraft Launcher.exe und aktivieren Sie VxKex dafür. Wenn Sie nicht wissen wie, schauen Sie sich bitte das Video-Tutorial an: [Modern Apps on Windows 7 | Windows 7 Extended Kernel](https://www.youtube.com/watch?v=zl7AsxtoPV8).

Aktivieren Sie sowohl "VxKex NEXT für dieses Programm aktivieren" als auch "Andere Windows-Versionen melden", dann anwenden und bestätigen.

An diesem Punkt kann XMCL normal unter Windows 7 ausgeführt werden, und alle Funktionen außer Multiplayer funktionieren normal.
:::

## MacOS

:::warning
Mac-Benutzer müssen die Installation von nicht signierter Software zulassen.
Da XMCL nicht signiert ist, müssen Sie in den Systemeinstellungen die Ausführung erlauben.
:::

### DMG

Wir bieten für MacOS-Benutzer nur das DMG-Format an. Das DMG-Format ist ein Disk-Image-Format, das als virtuelle Festplatte eingebunden wird. Nach dem Öffnen der DMG ziehen Sie die Anwendung in den Ordner `Applications`, um sie zu installieren.

Um die Anwendung auszuführen, müssen Sie sie zulassen. Sie können den folgenden Befehl verwenden.

```sh
# Software aus jeder Quelle zulassen
sudo spctl --master-disable
# Das Quarantäne-Attribut löschen
sudo xattr -c /Applications/X\ Minecraft\ Launcher.app
```

Wenn Sie die `X Minecraft Launcher.app` an einem anderen Ort installiert haben, verwenden Sie einfach den Pfad anstelle von `/Applications/X\ Minecraft\ Launcher.app`.

## Linux

:::info
Linux hat so viele Distributionen, dass es schwierig ist, eine universelle Installationsmethode bereitzustellen. Hier erwähnen wir nur das `AppImage`.
:::

### AppImage

AppImage ist ein Linux-Anwendungsformat, das auf jedem Linux-Desktop ohne Installation ausgeführt werden kann. Die AppImage-Datei ist ausführbar, einfach doppelklicken oder vom Terminal aus ausführen.

Dies ist das einzige Nicht-Installations-Programm, das XMCL bereitstellt (~~eigentlich wollen wir es nicht unterstützen~~). Daher unterscheidet sich sein Aktualisierungsmechanismus von anderen Formaten, und Benutzer müssen selbst ein neues AppImage herunterladen, um zu aktualisieren.

## Andere Formate

Derzeit unterstützen andere Installationsformate entweder [Hot Updates] oder die von electron-builder bereitgestellte Update-Methode. Dieser Update-Modus erfordert in der Regel nicht zu viel Aufmerksamkeit (~~wenn Sie nicht aktualisieren können, können Sie einfach den Launcher erneut herunterladen~~).

:::tip Hot Update
Hot Update bedeutet, dass der Launcher die Core-asar-Datei (~30MB) selbstständig ersetzt, ohne dass ein vollständiger erneuter Download des Launchers erforderlich ist.
:::

## Anhang: Auswahl des Spieldatenverzeichnisses

Bei der ersten Installation müssen Benutzer das `Spieldatenverzeichnis` auswählen. XMCL wird heruntergeladene `Assets`, `Bibliotheken`, `Versionen` usw. in diesem Verzeichnis platzieren.

:::warning Hinweis
Wie auf der Einrichtungsseite erwähnt, wird aufgrund der speziellen Dateistruktur von XMCL nicht empfohlen, das **rohe** Minecraft-Spielverzeichnis als XMCL-Datenverzeichnis zu verwenden.
:::

Hier wird empfohlen, einen neuen Ordner als XMCL-`Spieldatenverzeichnis` zu wählen.

Weitere Informationen zur Struktur des Spieldatenverzeichnisses finden Sie im [Datenmanagement-Leitfaden](/en/guide/manage.md#minecraft-related-data).
