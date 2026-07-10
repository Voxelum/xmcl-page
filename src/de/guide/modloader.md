# Was ist ein Modloader und wozu brauche ich ihn?

Minecraft-Modloader sind unverzichtbare Werkzeuge, mit denen Spieler und Mod-Entwickler das Spiel erweitern und bereichern können.

Egal, ob Sie realistische Shadereffekte hinzufügen möchten, die das Aussehen Ihrer Welt komplett verändern, oder epische Sichtweiten einstellen wollen, ein Modloader ist Ihr Einstieg zu kreativen Erweiterungen.

Wenn Sie beispielsweise eine Shader-Mod wie Sildur's Shaders für realistische Lichteffekte installieren oder die Mod "Distant Horizons" hinzufügen möchten, um extrem weite Aussichten in Minecraft zu genießen, benötigen Sie einen Modloader wie Fabric oder Forge, um diese Modifikationen zu verwalten.

**Vielleicht müssen Sie sich gar nicht so schwer tun mit der Wahl des Modloaders – Ihre Mods treffen die Entscheidung für Sie...**

In diesem Dokument stellen wir Ihnen beliebte Modloader und Client-Optimierungen vor. Jeder bietet eigene Funktionen und Vorteile, die auf unterschiedliche Modding-Bedürfnisse und Leistungsanforderungen zugeschnitten sind.

---

## Minecraft Forge

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppForgePicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">Minecraft Forge</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">Der ursprüngliche und bewährte Modloader für Minecraft. Ideal für umfangreiche Modpacks und Mods mit tiefer Spielintegration.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(147, 34, 255, 0.15); color: #a855f7; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Ausgereiftes Ökosystem</span>
      <span style="background: rgba(147, 34, 255, 0.15); color: #a855f7; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Tiefe API</span>
      <span style="background: rgba(147, 34, 255, 0.15); color: #a855f7; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Breite Kompatibilität</span>
    </div>
  </div>
</div>

*   **Vorteile:** Jahrelange Entwicklung bedeutet riesige Mengen an Dokumentation, Tutorials und Community-Ressourcen.
*   **Nachteile:** Längere Update-Zeiten für neuere Spielversionen; höherer Ressourcenbedarf, was die Ladezeiten verlängern kann.

---

## Fabric

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppFabricPicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">Fabric</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">Ein leichter, modularer Modloader, der für moderne Minecraft-Versionen entwickelt wurde. Hervorragend für Spielleistung, FPS und schnelle Updates.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Leistungsorientiert</span>
      <span style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Schnelle Updates</span>
      <span style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Leichtgewichtig</span>
    </div>
  </div>
</div>

*   **Vorteile:** Minimaler Leistungs-Overhead, sehr schnelle Ladezeiten und rasche Anpassung an neue Minecraft-Versionen (ideal für FPS-Booster und Shader).
*   **Nachteile:** Die Mod-Bibliothek hinkt Forge noch hinterher; eingeschränkte Unterstützung für ältere Spielversionen.

---

## NeoForge

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppNeoForgePicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">NeoForge</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">Ein moderner Fork von Forge, der die robuste Funktionalität des Originals mit modernen Leistungsoptimierungen verbindet.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(59, 130, 246, 0.15); color: #3b82f6; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Moderne API</span>
      <span style="background: rgba(59, 130, 246, 0.15); color: #3b82f6; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Hybrider Ansatz</span>
      <span style="background: rgba(59, 130, 246, 0.15); color: #3b82f6; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Aktive Entwicklung</span>
    </div>
  </div>
</div>

*   **Vorteile:** Sauberere Codebasis, bessere Erfahrung für Entwickler und kontinuierliche Verbesserungen direkt durch die Community.
*   **Nachteile:** Befindet sich noch im Aufbau, daher anfangs weniger kompatible Mods als das klassische Forge.

---

## Quilt

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <QuiltIcon style="width: 48px; height: 48px; display: block;" />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">Quilt</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">Ein von der Community getragener Fork von Fabric, der dessen leichtes Fundament um nützliche Tools und Kompatibilität mit Fabric-Mods erweitert.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(236, 72, 153, 0.15); color: #ec4899; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Fabric-kompatibel</span>
      <span style="background: rgba(236, 72, 153, 0.15); color: #ec4899; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Innovativ</span>
      <span style="background: rgba(236, 72, 153, 0.15); color: #ec4899; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Flexibel</span>
    </div>
  </div>
</div>

*   **Vorteile:** Direkte Kompatibilität mit den meisten Fabric-Mods; bietet erweiterte APIs für Mod-Entwickler.
*   **Nachteile:** Befindet sich noch in aktiver Entwicklung, daher können gelegentlich kleine Instabilitäten auftreten.

---

## OptiFine

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppOptifinePicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">OptiFine</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">Die legendäre Minecraft-Optimierungsmod. Bietet einen massiven FPS-Boost, Unterstützung für HD-Texturen, Shader und eine Fülle von Grafikkonfigurationen.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(30, 58, 138, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">FPS-Boost</span>
      <span style="background: rgba(30, 58, 138, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Shader-Support</span>
      <span style="background: rgba(30, 58, 138, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Feineinstellungen</span>
    </div>
  </div>
</div>

*   **Vorteile:** Unübertroffene Kompatibilität mit älteren Minecraft-Versionen, einfachste Möglichkeit, Shader ohne weitere Mods zu nutzen.
*   **Nachteile:** Proprietärer Quellcode, was oft zu Kompatibilitätskonflikten mit modernen Forge/Fabric-Mods führt.

---

## LabyMod

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppLabymodPicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">LabyMod</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">Eine funktionsreiche Minecraft-Client-Modifikation. Sie gestaltet die Benutzeroberfläche komplett um, fügt nützliche Widgets hinzu und bietet integrierte Kosmetika.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(15, 23, 42, 0.15); color: #22d3ee; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Eigenes HUD</span>
      <span style="background: rgba(15, 23, 42, 0.15); color: #22d3ee; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Client-Mod</span>
      <span style="background: rgba(15, 23, 42, 0.15); color: #22d3ee; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Kosmetika</span>
    </div>
  </div>
</div>

*   **Vorteile:** Modulares Design, große Auswahl an PvP-Widgets, reibungslose Integration und einfache HUD-Anpassung.
*   **Nachteile:** Hauptsächlich auf Multiplayer und PvP fokussiert; kann mit manchen globalen Weltgenerierungsmods kollidieren.

---

## Vergleich

| Feature | Minecraft Forge | Fabric | NeoForge | Quilt |
| --- | --- | --- | --- | --- |
| **Leistung** | Gelegentlich längere Ladezeiten | Optimiert für Geschwindigkeit | Gleicht Stabilität mit Leistung aus | Erhöhte Geschwindigkeit mit Zusatzfeatures |
| **Community & Support** | Umfassend, gut etabliert | Schnell wachsend | Aufstrebend; Community entwickelt sich noch | Nutzt die Community von Fabric |
| **Mod-Kompatibilität** | Breit und etabliert | Am besten für moderne Mods | Verbindet Legacy- und neue Mod-Unterstützung | Kompatibel mit Fabric-Mods |
| **Update-Zyklus** | Langsamere Einführung neuer Versionen | Schnell und reaktionsschnell | Reift allmählich durch Feedback | Agile modulare Updates |

---

## Modloader & Mod-Management in XMCL

Der X Minecraft Launcher (XMCL) bietet ein integriertes, natives System zur Installation von Modloadern und zur Verwaltung Ihrer Mods. Sie müssen keine externen `.jar`- oder `.exe`-Installer herunterladen oder komplizierte Einrichtungsschritte durchführen.

### 1. Ein-Klick-Installation des Modloaders
Beim Erstellen einer neuen Instanz oder beim Bearbeiten der Version einer bestehenden Instanz:
1. Öffnen Sie die Versionseinstellungen der Instanz.
2. Wählen Sie Ihre gewünschte Minecraft-Version.
3. Wählen Sie den gewünschten Modloader aus (**Forge**, **Fabric**, **NeoForge** oder **Quilt**) sowie Leistungsoptimierer wie **OptiFine** oder **LabyMod**.
4. XMCL lädt beim Spielstart automatisch alle Bibliotheken und Abhängigkeiten herunter, entpackt und verifiziert sie.

### 2. Integrierter Mod-Downloader
Im Reiter **Mods** Ihrer Instanz können Sie Mods direkt von **Modrinth** und **CurseForge** suchen und herunterladen, ohne einen Webbrowser zu öffnen:
* **Automatische Filterung:** XMCL filtert die Suchergebnisse automatisch nach der ausgewählten Minecraft-Version und dem Modloader Ihrer Instanz. Es werden nur kompatible Mods angezeigt.
* **Automatische Auflösung von Abhängigkeiten:** Wenn eine Mod eine andere Bibliothek benötigt (wie *Fabric API* oder *Architectury*), erkennt XMCL dies und bietet an, alle erforderlichen Abhängigkeiten automatisch herunterzuladen.

### 3. Mod-Verwaltung und Deaktivierung
* **Mods aktivieren/deaktivieren:** Sie können Mods über einfache Schalter in der Mod-Liste vorübergehend deaktivieren. Die Dateien müssen nicht aus dem Ordner verschoben werden.
* **Einfache Updates:** Der Launcher scannt Ihre installierten Mods und zeigt an, für welche Mods Updates verfügbar sind, sodass Sie diese mit einem einzigen Klick aktualisieren können.
