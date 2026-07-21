# Microsoft-Konto Login & Demo-Modus Anleitung

Diese Anleitung erklärt, wie Sie Ihr Microsoft-Konto in XMCL hinzufügen, wie der Authentifizierungsprozess funktioniert und wie Sie häufige Login-Fehler wie **"failed to exchange Xbox token"** oder Probleme mit dem **Demo-Modus** beheben.

---

## 🔑 1. So fügen Sie ein Microsoft-Konto hinzu

Um Minecraft mit Ihrem offiziellen Konto zu spielen, müssen Sie sich anmelden:

1. Klicken Sie oben rechts auf Ihr Profil/Avatar (oder **"Konto verwalten"**), um die Kontoverwaltung zu öffnen:

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. Klicken Sie auf **"Konto hinzufügen"**, wählen Sie **Microsoft** und fahren Sie mit der Anmeldung fort:

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **Anmeldung per Gerätecode (Device Code):**  
> Wenn Sie Ihr Passwort nicht direkt im Launcher eingeben möchten, aktivieren Sie die Option **"Login by Device Code"** (Über Gerätecode anmelden). XMCL zeigt daraufhin einen Code an. Rufen Sie einfach `microsoft.com/link` in Ihrem Webbrowser auf, geben Sie den Code ein und bestätigen Sie die Anmeldung.

---

## 🔍 2. Wie der Authentifizierungsprozess funktioniert

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

## 🛠 3. Drei Hauptursachen und Lösungen

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

### 2. Das Konto hat kein Xbox-Profil (Fehlender Gamertag)

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👾
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Ursache: Das Microsoft-Konto ist nicht für Spiele eingerichtet</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Ihr Microsoft-Konto benötigt ein verknüpftes Xbox Live-Profil, um Minecraft-Tokens abzurufen. Wenn Sie Minecraft erst vor Kurzem gekauft haben oder das Spiel noch nie gestartet haben, ist dieses Profil möglicherweise noch nicht erstellt worden, was zum <strong>Demo-Modus</strong> führt.</p>
  </div>
</div>

#### So beheben Sie es:
1. Rufen Sie die offizielle Website [Xbox.com](https://www.xbox.com/) auf.
2. Melden Sie sich mit Ihren Microsoft-Kontodaten an.
3. Wenn Sie dazu aufgefordert werden, erstellen Sie ein kostenloses Xbox Live-Profil (indem Sie Ihren Gamertag und Avatar festlegen).
4. Sobald das Profil erstellt ist, starten Sie XMCL neu und versuchen Sie erneut, sich anzumelden.

---

### 3. Netzwerkfehler oder blockierte Verbindungen

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(59, 130, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #3b82f6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Ursache: DNS-Probleme oder staatliche Blockaden</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">In bestimmten Regionen (z. B. China, aufgrund der Great Firewall) oder bei bestimmten restriktiven Internetanbietern können Verbindungen zu den Xbox Live- oder Mojang-Authentifizierungsservern blockiert oder gestört sein.</p>
  </div>
</div>

#### So beheben Sie es:
* **Verwenden Sie ein VPN:** Wenn Sie sich in einem Land mit strenger Internetzensur befinden, nutzen Sie ein VPN, um den Microsoft-Authentifizierungsprozess abzuschließen.
* **DNS-Server ändern:** Wechseln Sie zu einem schnellen, globalen DNS-Server (z. B. Google DNS: `8.8.8.8` und `8.8.4.4` oder Cloudflare DNS: `1.1.1.1`).
* **Erneuter Versuch:** Die Authentifizierungsserver von Microsoft können zeitweise überlastet sein. Warten Sie einige Minuten und versuchen Sie es erneut.

---

## 🚪 4. Offline-Modus & Alternative Anmeldeoptionen (Spielen ohne Microsoft-Konto)

Wenn Sie kein offizielles Microsoft-Konto besitzen, das Spiel offline spielen möchten oder einen privaten/lokalen Server nutzen, bietet XMCL alternative Anmeldemethoden an.

### Option A: Lokaler Modus / Offline-Spiel (Entwicklermodus)

Der **Developer-Modus** (Entwicklermodus) ermöglicht es Ihnen, mit jedem beliebigen Benutzernamen ohne Passwort lokal im Offline-Modus zu spielen.

1. Öffnen Sie die Kontoverwaltung in der oberen rechten Ecke.
2. Klicken Sie auf **"Konto hinzufügen"** (Add Account).
3. Wählen Sie **Entwickler** (Developer) aus den angebotenen Optionen:

   <img src="/guidephoto/developer-mode.png" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

4. Geben Sie einen beliebigen Benutzernamen ein und bestätigen Sie.
5. Sie können nun Minecraft starten. **Hinweis:** Im Offline-Modus können Sie nur auf Offline-Servern (mit der Option `online-mode=false` in der Serverkonfiguration) spielen, und Ihr Skin entspricht dem Standard-Skin von Minecraft.

---

### Option B: Eigene Skin-Plattformen (Yggdrasil API)

Wenn Sie mit einem eigenen Avatar (Skin) auf privaten Servern spielen möchten, unterstützt XMCL alternative Authentifizierungsdienste wie **LittleSkin**, **Ely.by** oder benutzerdefinierte Yggdrasil-Server.

1. Klicken Sie in der Kontoverwaltung auf **Konto hinzufügen**.
2. Wählen Sie die gewünschte Plattform (z. B. **LittleSkin** oder **Yggdrasil** für eine benutzerdefinierte API-Adresse).
3. Geben Sie die mit diesem Dienst verknüpften Zugangsdaten ein:

   <img src="/guidephoto/reg-account.png" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

4. Der Launcher lädt Ihren Skin und Ihre Profildaten automatisch direkt von dieser Plattform.
