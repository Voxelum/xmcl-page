# Agnes AI Einrichtung

Diese Anleitung hilft Ihnen, den integrierten AI Agent in XMCL zu konfigurieren.

::: tip Agnes AI ist kostenlos
**Agnes AI ist völlig kostenlos.** Sie müssen lediglich einen kostenlosen API-Key erstellen – es ist keine Zahlung, kein Abonnement und keine Kreditkarte erforderlich.
:::

Nachdem Sie diese Seite ausgefüllt haben, sollten Sie in der Lage sein:

- das AI Agent Dialogfenster zu öffnen;
- Crash-Logs mit dem integrierten Agenten zu diagnostizieren;
- Agenten-Tools auszuführen (Mod-Aktivierung, Installation, Konfigurationssuche/-bearbeitung usw.).

## Was Sie benötigen

- Die neueste XMCL-Version.
- Internetzugang.
- Einen kostenlosen Agnes AI API-Key.

## Schritt 1: Agnes AI API-Key erhalten

1. Öffnen Sie das Entwicklerportal von Agnes AI.
2. Erstellen Sie ein Konto oder melden Sie sich an.
3. Erstellen Sie einen API-Key.
4. Kopieren Sie den Key und bewahren Sie ihn sicher auf.

![Agnes AI-Konsole mit der Option zum Erstellen/Kopieren des API-Keys.](create-and-copy.webp)

## Schritt 2: XMCL-Agent-Einstellungen öffnen

1. Öffnen Sie XMCL.
2. Gehen Sie zu **Einstellungen -> Allgemein**.
3. Aktivieren Sie den **Entwicklermodus**.
4. Scrollen Sie zum Bereich **AI Agent**.

![XMCL-Allgemeineinstellungen mit hervorgehobenem Entwicklermodus und AI-Agent-Bereich](general-setting.webp)

## Schritt 3: Agenten-Felder ausfüllen

In den **AI Agent** Einstellungen:

- **API Key**: Fügen Sie Ihren Agnes-Key ein.
- **Model**: Behalten Sie den Standardwert bei, sofern nicht anders angewiesen.
- **Endpoint**: Behalten Sie den Standardwert bei, sofern nicht anders angewiesen.

Standardmäßiger Agnes-Endpoint:

```text
https://apihub.agnes-ai.com/v1/chat/completions
```

![AI-Agent-Formular mit den Feldern API-Key / Modell / Endpunkt und Beispielwerten](general-setting.webp)

## Schritt 4: Funktionsprüfung

1. Drücken Sie `Ctrl/Cmd + Shift + A`, um den Agent-Dialog zu öffnen.
2. Senden Sie eine einfache Nachricht wie: `list my installed mods`.
3. Bestätigen Sie, dass der Assistent ohne Konfigurationsfehler antwortet.

## Fehlerbehebung

### Agent öffnet sich nicht

- Vergewissern Sie sich, dass der **Entwicklermodus** aktiviert ist.
- Starten Sie XMCL nach dem Aktivieren des Entwicklermodus einmal neu.

### Warnung "Nicht konfiguriert" wird weiterhin angezeigt

- Überprüfen Sie den API-Key (keine zusätzlichen Leerzeichen/Zeilenumbrüche).
- Stellen Sie sicher, dass der Endpunkt über Ihr Netzwerk erreichbar ist.

### Anfrage fehlgeschlagen / 401 / 403

- Der API-Key ist ungültig, abgelaufen oder hat keine Berechtigung.
- Generieren Sie den Key im Agnes-Portal neu und fügen Sie ihn erneut ein.

### Anfrage-Timeout

- Überprüfen Sie Ihre Firewall/Proxy-Einstellungen.
- Versuchen Sie es erneut mit dem Standard-Endpunkt.

## Sicherheitshinweise

- Behandeln Sie API-Keys wie Passwörter.
- Teilen Sie keine Screenshots, die Ihren Key enthalten.
- Generieren Sie die Keys neu, wenn Sie einen Missbrauch vermuten.
