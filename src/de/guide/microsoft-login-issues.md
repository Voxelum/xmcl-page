# Microsoft-Login-Fehler (failed to exchange Xbox token)

Diese Anleitung erklärt, warum beim Anmelden mit Ihrem Microsoft-Konto in XMCL die Fehlermeldung **"failed to exchange Xbox token"** (Xbox-Token konnte nicht ausgetauscht werden) angezeigt wird, was die Ursache dafür ist und wie Sie das Problem beheben.

---

## 🔍 Wie der Authentifizierungsprozess funktioniert

Um eine lizenzierte Kopie von Minecraft zu starten, muss der Launcher Ihre Identität über drei separate Sicherheitsstufen verifizieren:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 Authentifizierungs-Handshake:</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">SCHRITT 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Microsoft-Login</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Prüft Passwort</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">SCHRITT 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Xbox Live-Dienste</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Holt Gamertag</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ Fehler hier</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">SCHRITT 3 (Austausch)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Minecraft-Token</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Prüft Lizenz</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    Der Fehler <strong>"failed to exchange Xbox token"</strong> bedeutet, dass Schritt 1 und Schritt 2 erfolgreich abgeschlossen wurden, aber die Mojang-Authentifizierungsserver den Austausch bei Schritt 3 abgelehnt haben.
  </p>
</div>

---

## 🛠 Drei Hauptursachen und Lösungen

### 1. Keine Minecraft-Lizenz auf diesem Konto

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Ursache: Mojang-Server haben das gekaufte Spiel nicht gefunden</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Dies ist der häufigste Grund. Sie haben sich erfolgreich bei einem Microsoft-Konto angemeldet, aber Mojang teilt dem Launcher mit, dass dieses spezifische Konto keine Lizenz für Minecraft besitzt.</p>
  </div>
</div>

#### So beheben Sie es:
* **Kauf verifizieren:** Melden Sie sich mit Ihrem Microsoft-Konto auf [Minecraft.net](https://www.minecraft.net/) an. Überprüfen Sie, ob Sie die Download-Option sehen statt einer Aufforderung, das Spiel zu kaufen.
* **Game Pass-Status prüfen:** Wenn Sie über den **Xbox Game Pass** spielen, stellen Sie sicher, dass Ihr Abonnement aktiv ist und Sie sich mit dem exakten Microsoft-Konto anmelden, das mit dem aktiven Abonnement verknüpft ist.
* **E-Mail-Adresse doppelt prüfen:** Stellen Sie sicher, dass Sie sich nicht mit einem anderen Microsoft-Konto (z. B. einer Schul- oder Arbeits-E-Mail) statt dem persönlichen Konto angemeldet haben, auf dem sich der Kauf befindet.

---

### 2. Fehlendes Xbox Live-Profil

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Ursache: Microsoft-Konto nicht bei Xbox Live aktiviert</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Sie haben ein Microsoft-Konto erstellt, aber die Xbox Live-Dienste nie initialisiert. Die Login-Server können kein Token generieren, da dem Konto ein eindeutiger Gamertag fehlt.</p>
  </div>
</div>

#### So beheben Sie es:
1. Rufen Sie die offizielle [Xbox.com](https://www.xbox.com/de-DE/) Website auf.
2. Klicken Sie oben rechts auf **Anmelden**.
3. Wenn Sie aufgefordert werden, ein Xbox-Profil zu erstellen, **akzeptieren Sie die Bedingungen und legen Sie einen Gamertag fest** (Ihr eindeutiger Spitzname).
4. Warten Sie 1–2 Minuten, bis die Server synchronisiert sind, öffnen Sie dann XMCL und versuchen Sie die Anmeldung erneut.

---

### 3. Netzwerksperren und Routing-Probleme Ihres Anbieters

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Ursache: Blockierte Verbindung zu Mojang- oder Microsoft-Servern</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Aufgrund regionaler Anbieter-Sperren, lokaler Firewalls oder fehlerhafter DNS-Konfigurationen kann Ihr PC keine Verbindung zu `api.minecraftservices.com` oder den Xbox Live-Servern herstellen.</p>
  </div>
</div>

#### So beheben Sie es:
* **Nutzen Sie ein VPN:** Verbinden Sie sich vor dem Anmeldeversuch mit einem stabilen VPN. Dies umgeht Routing-Probleme und ISP-Drosselungen.
* **Proxy in XMCL konfigurieren:**
  1. Öffnen Sie die **Einstellungen** (Zahnrad-Symbol unten in der linken Leiste).
  2. Gehen Sie zu **Netzwerkeinstellungen**.
  3. Tragen Sie Ihre aktive Proxy-Server-Adresse ein (HTTP, HTTPS und SOCKS5 werden unterstützt).
* **hosts-Datei zurücksetzen**:
  Stellen Sie sicher, dass Ihre hosts-Datei (`C:\Windows\System32\drivers\etc\hosts`) keine Einträge enthält, die Anfragen an `mojang.com` oder `minecraftservices.com` umleiten. Bereinigen Sie diese, falls vorhanden.

---

## 📋 Schnelle Diagnosetabelle

| Fehlersymptom | Wahrscheinliche Ursache | Erster Schritt zur Behebung |
| :--- | :--- | :--- |
| Fehler direkt nach Eingabe von E-Mail/Passwort | Microsoft-Konto gesperrt oder ungültig | Passwort auf Microsoft.com zurücksetzen |
| Fehler **"failed to exchange Xbox token"** | Keine Minecraft-Lizenz / Kein Xbox-Profil | Gamertag auf Xbox.com erstellen oder Spiel kaufen |
| Fehler **"Failed to connect to server"** | Netzwerksperren / DNS-Routing-Probleme | Mit einem VPN verbinden oder Proxy in XMCL einrichten |
