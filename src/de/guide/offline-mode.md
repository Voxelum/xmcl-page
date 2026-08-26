# Spielen ohne Lizenz (Offline-Modus & alternative Konten)

XMCL ist ein Open-Source-Launcher, der die Freiheit der Spieler respektiert. Wenn Sie derzeit keine kostenpflichtige Minecraft Java Edition-Lizenz besitzen oder Modpacks ohne Verbindung zu Mojang-Servern testen möchten, bietet XMCL volle Unterstützung für den **Offline-Modus** und Community-Skin-Netzwerke.

---

## ⚙️ 1. Entwicklermodus aktivieren

Um alternative Kontotypen und Skin-Server freizuschalten, aktivieren Sie den **Entwicklermodus** in den Einstellungen:

1. Öffnen Sie die **Einstellungen** (Zahnrad-Symbol unten links in der Seitenleiste).
2. Suchen Sie die Option **„Entwicklermodus“** und schalten Sie diese **EIN**:

   ![Entwicklermodus aktivieren](/guidephoto/developer-mode.png)

Nach der Aktivierung stehen Ihnen im Kontomanager zusätzliche Authentifizierungsanbieter zur Verfügung.

---

## 👥 2. Verfügbare Kontotypen

<div style="display: flex; flex-direction: column; gap: 14px; margin: 24px 0;">

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟢</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Offline-Modus (Lokales Konto)</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Spielen Sie ohne Verbindung zu Authentifizierungsservern. Geben Sie einfach einen beliebigen Spielernamen ein. Ideal für Einzelspieler-Welten, lokales Testen von Modpacks, LAN-Spiele und Community-Server mit <code>online-mode=false</code>.
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟡</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">LittleSkin</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Kostenloser Community-Authentifizierungs- und Skin-Server für benutzerdefinierte Skins und Umhänge.  
      Website: <a href="https://littleskin.cn" target="_blank" rel="noopener noreferrer">https://littleskin.cn</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🔵</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Ely.by</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Weltweit bekanntes alternatives Authentifizierungs- und Skin-Netzwerk mit Cloud-Skins und HD-Umhängen.  
      Website: <a href="https://ely.by" target="_blank" rel="noopener noreferrer">https://ely.by</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🌐</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Eigener Authlib-Injector / Yggdrasil-Server</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Verbindung zu beliebigen privaten Authentifizierungsservern über Standard-Yggdrasil-API-URLs.
    </p>
  </div>

</div>

---

## 🎮 3. Konten hinzufügen und wechseln

1. Klicken Sie oben rechts auf Ihr Profil-Icon, um den **Kontomanager** zu öffnen.
2. Klicken Sie auf **„Konto hinzufügen“**.
3. Wählen Sie **Offline**, **LittleSkin**, **Ely.by** oder **Benutzerdefinierter Server**.
4. Geben Sie den gewünschten Namen bzw. die Anmeldedaten ein.
5. Klicken Sie auf das Konto, um es als **Aktiv** zu setzen.

---

## 💡 4. Vergleich der Kontotypen

| Funktion | Microsoft (Offiziell) | Offline-Konto | LittleSkin / Ely.by |
| :--- | :--- | :--- | :--- |
| **Kosten** | Kostenpflichtige Lizenz | Kostenlos | Kostenlos |
| **Offizielle Server (Hypixel etc.)** | ✅ Ja | ❌ Nein | ❌ Nein |
| **Community-Server / LAN / P2P** | ✅ Ja | ✅ Ja (`online-mode=false`) | ✅ Ja |
| **Einzelspieler & Modpacks** | ✅ Ja | ✅ Ja | ✅ Ja |
| **Eigene Skins & Umhänge** | ✅ Offizielle Skins | ⚠️ Standard-Skin | ✅ Netzwerk-Skins & Umhänge |

---

## ❓ Häufig gestellte Fragen

### Kann ich mit einem Offline-Konto auf Hypixel spielen?
Nein. Offizielle öffentliche Server prüfen die Spieleridentität direkt bei Mojang (`online-mode=true`), wofür ein bezahltes Microsoft-Konto erforderlich ist.

### Wie kann ich ohne Lizenz mit Freunden spielen?
Nutzen Sie die integrierte **P2P-Multiplayer / LAN-Freigabe** in XMCL oder verbinden Sie sich mit einem Community-Server mit `online-mode=false`.

👉 **[Probleme mit der Microsoft-Anmeldung? Lesen Sie unsere Anleitung zur Fehlerbehebung](./microsoft-login-issues)**
