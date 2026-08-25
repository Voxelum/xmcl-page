# Microsoft-Anmeldung, Bedrock vs. Java & Lizenzprobleme

Diese Anleitung erklärt, wie die Microsoft-Authentifizierung in XMCL funktioniert, warum Anmeldefehler (wie **„failed to exchange Xbox token“** oder „Nicht gekauft“) auftreten, warum das Spiel im **Demo-Modus** starten kann, den entscheidenden Unterschied zwischen der **Bedrock Edition (Handy/Konsole)** und der **Java Edition (PC)** sowie Lösungen für häufige Kontoprobleme.

---

## 🔑 1. Anmeldung mit einem Microsoft-Konto

Befolgen Sie diese Schritte, um sich mit Ihrer offiziellen Minecraft-Lizenz anzumelden:

1. Klicken Sie oben rechts auf Ihr Profilbild (oder **„Konto verwalten“**), um den Kontomanager zu öffnen:

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. Klicken Sie auf **„Konto hinzufügen“**, wählen Sie **Microsoft** und folgen Sie den Anweisungen:

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **Anmeldung per Gerätecode (Device Code):**  
> Wenn Sie Ihr Passwort nicht im Launcher eingeben möchten, aktivieren Sie **„Login via Gerätecode“**. XMCL zeigt einen 8-stelligen Code an; rufen Sie im Webbrowser [microsoft.com/link](https://microsoft.com/link) auf, geben Sie den Code ein und bestätigen Sie die Anmeldung.

---

## 🔍 2. Wie die 3-stufige Microsoft-Authentifizierung funktioniert

Beim Anmelden durchläuft der Launcher drei getrennte Überprüfungsstufen:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 3-Stufen-Verifizierungs-Handshake:</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">SCHRITT 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Microsoft OAuth</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Prüft E-Mail & Passwort</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">SCHRITT 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Xbox Live Dienste</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Prüft Xbox-Gamertag</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ Häufiger Fehlerpunkt</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">SCHRITT 3 (Token-Tausch)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Mojang Java Lizenz</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Prüft PC Java-Besitz</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    Schlägt Schritt 3 fehl, meldet der Launcher <strong>„failed to exchange Xbox token“</strong> (oder Nicht gekauft), bzw. das Spiel startet im <strong>Demo-Modus</strong>. Das bedeutet, dass die Mojang-Server keine aktive <strong>Minecraft: Java Edition</strong>-Lizenz auf diesem Microsoft-Konto finden konnten.
  </p>
</div>

---

## 🛑 3. Der häufigste Irrtum: Bedrock Edition vs. Java Edition

**XMCL ist ausschließlich ein Launcher für Minecraft: Java Edition (Windows, macOS und Linux).**

Viele Spieler kaufen das Spiel auf anderen Plattformen und wundern sich über Login-Fehler in XMCL:

| Plattform des Kaufs | Gekaufte Edition | Mit XMCL kompatibel? | Erklärung |
| :--- | :--- | :--- | :--- |
| 📱 **Handy / Tablet (iOS / Android)** | Bedrock Edition | ❌ Nein | Mobillizenzen enthalten keine PC Java Edition. |
| 🎮 **Konsole (PlayStation 4 / 5)** | Bedrock Edition | ❌ Nein | PlayStation-Käufe gelten nur für die Konsole. |
| 🎮 **Konsole (Xbox One / Series X\|S)** | Bedrock Edition | ❌ Nein | Konsolenkäufe übertragen sich nicht auf PC Java. |
| 🕹️ **Nintendo Switch** | Bedrock Edition | ❌ Nein | eShop-Käufe gelten ausschließlich für Switch. |
| 💻 **PC (Minecraft: Java & Bedrock Bundle)** | Java & Bedrock | ✅ **Ja** | Vollständig unterstützt! |
| 🟢 **PC Game Pass / Ultimate Abo** | Java & Bedrock | ✅ **Ja** | Unterstützt, solange das Abo aktiv ist. |

> ⚠️ **Wichtig:**  
> Wenn Sie Minecraft nur auf Ihrem **Smartphone**, der **PlayStation**, der **Xbox-Konsole** oder der **Nintendo Switch** gekauft haben, bestätigen die Mojang-Server, dass Ihr Microsoft-Konto **keine Java Edition besitzt**.  
> Um die offizielle Java Edition auf dem PC zu spielen, benötigen Sie das Paket **„Minecraft: Java & Bedrock Edition for PC“** auf [Minecraft.net](https://www.minecraft.net/) oder ein aktives **PC Game Pass**-Abonnement.

---

## 🛠 4. Fehlerbehebung bei Anmeldefehlern

### Ursache A: Keine Java Edition-Lizenz auf diesem Konto

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Mojang meldet keine PC-Lizenz</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Das Microsoft-Konto wurde authentifiziert, aber Mojang führt für dieses Konto keinen Kauf der Java Edition.</p>
  </div>
</div>

#### Lösung:
* **Prüfen auf Minecraft.net:** Melden Sie sich auf [Minecraft.net](https://www.minecraft.net/) an. Wenn dort „Jetzt kaufen“ statt Ihres Java-Profilnamens angezeigt wird, besitzt das Konto kein Spiel.
* **Bestellverlauf prüfen:** Öffnen Sie [account.microsoft.com/billing/orders](https://account.microsoft.com/billing/orders) und prüfen Sie, ob Sie das PC-Bundle oder eine mobile/Konsolen-Edition erworben haben.
* **E-Mail prüfen:** Stellen Sie sicher, dass Sie sich nicht mit einem Schul-, Arbeits- oder Zweitkonto angemeldet haben.
* **Game Pass-Status:** Stellen Sie sicher, dass Ihr Abonnement aktiv ist und den PC einschließt (PC Game Pass oder Ultimate).

---

### Ursache B: Fehlendes oder nicht aktiviertes Xbox Live-Profil

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Konto hat keinen Xbox-Gamertag</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Neu erstellte Microsoft-Konten haben oft noch kein Xbox-Profil, wodurch keine Token ausgestellt werden können.</p>
  </div>
</div>

#### Lösung:
1. Rufen Sie [Xbox.com](https://www.xbox.com/) im Browser auf.
2. Klicken Sie oben rechts auf **Anmelden**.
3. Stimmen Sie den Nutzungsbedingungen zu und wählen Sie einen **Gamertag**.
4. Warten Sie 1–2 Minuten und melden Sie sich in XMCL erneut an.

---

### Ursache C: Netzwerksperren und DNS-Probleme

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Verbindung zu Mojang-/Xbox-Servern blockiert</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Firewall-Regeln oder DNS-Störungen verhindern die Verbindung zu <code>api.minecraftservices.com</code>.</p>
  </div>
</div>

#### Lösung:
* **VPN verwenden:** Aktivieren Sie ein stabiles VPN vor der Anmeldung.
* **Proxy in XMCL konfigurieren:** In den **Einstellungen** unter **Netzwerkeinstellungen** können Sie HTTP-, HTTPS- oder SOCKS5-Proxys eintragen.
* **Hosts-Datei prüfen:** Vergewissern Sie sich, dass keine veralteten Weiterleitungen für `mojang.com` in Ihrer System-Hosts-Datei vorhanden sind.

---

## 🎮 Keine offizielle Lizenz vorhanden?

Wenn Sie derzeit keine offizielle Lizenz besitzen, können Sie XMCL im **Offline-Modus** oder mit Drittanbieter-Skin-Netzwerken nutzen.

👉 **[Vollständige Anleitung: Spielen ohne Lizenz (Offline-Modus & alternative Konten)](./offline-mode)**
