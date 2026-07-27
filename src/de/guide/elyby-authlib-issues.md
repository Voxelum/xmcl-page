# Ely.by Authlib Kompatibilitätsproblem

Diese Anleitung erklärt, warum in XMCL die Warnung **"Ely.by Authlib Kompatibilitätsproblem"** beim Starten neuerer Minecraft-Versionen angezeigt wird und wie Sie dies in den Instanz- oder Launchereinstellungen beheben können.

---

## ⚠️ Warum erscheint diese Warnung?

Wenn Sie sich mit einem **Ely.by-Konto** anmelden, bindet XMCL automatisch den **Ely.by Authlib-Ersatz** in die Startparameter ein, damit Minecraft benutzerdefinierte Skins laden kann.

Bei neueren Minecraft-Versionen (z. B. **1.20.5+** oder **1.21.x**) ist dieser Authlib-Injektor jedoch möglicherweise nicht vollständig kompatibel. Wenn XMCL dies erkennt, wird eine Warnung angezeigt.

---

## 🛠 So beheben Sie das Problem

### Methode 1: Ely.by Authlib für die Instanz deaktivieren (Empfohlen)

1. Öffnen Sie XMCL und wählen Sie Ihre Instanz aus.
2. Gehen Sie zu den **Instanz-Einstellungen** (Zahnrad-Symbol der Instanz).
3. Suchen Sie nach der Option **"Ely.by Authlib deaktivieren"** (*Disable Ely.by Authlib*).
4. Schalten Sie die Option auf **EIN**.
5. Starten Sie das Spiel neu.

### Methode 2: Ely.by Authlib global deaktivieren

1. Öffnen Sie die **Haupt-Einstellungen** (Zahnrad-Symbol in der linken Seitenleiste).
2. Aktivieren Sie **"Ely.by Authlib deaktivieren"**.
