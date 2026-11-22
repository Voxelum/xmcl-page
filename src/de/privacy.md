---
title: Datenschutzerklärung für das XMCL Open-Source-Projekt
description: Datenschutzerklärung für die XMCL-Website und den Open-Source-Launcher gemäß EU-DSGVO, BDSG, UK GDPR, US COPPA/CCPA und internationalen Datenschutzstandards.
---

# Datenschutzerklärung für das XMCL Open-Source-Projekt

**Gültig ab: 22. November 2026 · Version: OP3-2026-11-22**

Diese Datenschutzerklärung gilt für die öffentliche XMCL-Website ([xmcl.app](https://xmcl.app)) und den kostenlosen Open-Source-XMCL-Launcher. Sie gilt nicht für kostenpflichtige Funktionen, Benutzerkonten, Abrechnungen, KI-Funktionen oder Multiplayer-Signaling-/TURN-Dienste von XMCL Together, die gesondert durch die [XMCL Together Datenschutzerklärung](./together/privacy) geregelt werden.

---

## 1. Verantwortlicher und Kontakt

XMCL ist ein unabhängiges Open-Source-Projekt, das von **CI010** und der Voxelum-Mitwirkenden-Community betrieben wird.
- **Datenschutz- und Rechtsanfragen:** [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- **Quellcode-Repository:** [github.com/voxelum/x-minecraft-launcher](https://github.com/voxelum/x-minecraft-launcher)
- **Meldung von Sicherheitslücken:** [GitHub Security Advisories](https://github.com/voxelum/x-minecraft-launcher/security)
- **Community-Support:** [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

---

## 2. Verarbeitete Informationen und Datenminimierung

XMCL folgt strikten Grundsätzen der Datenminimierung (Art. 5 Abs. 1 lit. c DSGVO):

### Öffentliche Website (xmcl.app)
- **Cookielose aggregierte Webanalyse:** Wir verwenden Microsoft Azure Application Insights im **cookielosen Modus** (`disableCookiesUsage: true`) mit Datenerfassung in **Microsoft Azure East Asia (Hongkong)**, um anonyme Seitenaufrufe, Download-Auswahlen, allgemeine Netzwerk-/Geräteattribute und Browser-User-Agents zu erfassen. Auf Ihrem Endgerät werden keine Analyse- oder Website-übergreifenden Tracking-Cookies gespeichert.
- **Technisch notwendiges Cookie:** Wir speichern lediglich ein einziges lokal funktionales Cookie (`nf_lang`), das technisch unbedingt erforderlich ist (§ 25 Abs. 2 Nr. 2 TDDDG), um Ihre gewählte Spracheinstellung der Benutzeroberfläche zu speichern. Wir verwenden keine Marketing-, Werbe- oder Verhaltens-Tracking-Cookies von Drittanbietern.

### Open-Source-Launcher
- **Optionale Telemetrie und Diagnose (Opt-in):** Die Diagnosetelemetrie ist **standardmäßig deaktiviert**. Nur wenn Sie die Telemetrie in den Launcher-Einstellungen ausdrücklich aktivieren (Opt-in), kann der Launcher folgende Daten verarbeiten:
  - eine zufällig generierte, pseudonyme Installations-/Gerätekennung;
  - Anwendungslebenszyklus-Ereignisse (Spielstart, normale/fehlerhafte Beendigungscodes, Anwendungsversion);
  - Art des Authentifizierungsanbieters (z. B. Microsoft- oder Offline-Authentifizierungskennung);
  - grundlegende Laufzeitumgebungsdaten (Betriebssystem, Java-Laufzeitversion, CPU-Architektur);
  - Absturzberichte (Crash-Logs) und Stack-Traces.
- **Bereinigung und Zugangsdaten:** Absturzdiagnosen werden, soweit technisch möglich, von sensiblen Dateipfaden, Benutzernamen und System-Tokens bereinigt. Wir verarbeiten oder speichern **niemals** Ihre Microsoft-/Mojang-Kontopasswörter, Zugangsdaten oder Sitzungstokens.

---

## 3. Speicherdauer

Wir vermeiden eine unbefristete Datenspeicherung:
- Alle Telemetrieprotokolle, Diagnosefehlerberichte und Leistungsmetriken werden **maximal 90 Tage** gespeichert und anschließend dauerhaft gelöscht oder unumkehrbar anonymisiert.
- Öffentliche Fehlerberichte im GitHub-Issue-Tracker bleiben gemäß den Plattformrichtlinien von GitHub und der Repository-Verwaltung bis zur Lösung oder Löschung verfügbar.

---

## 4. Auftragsverarbeiter und internationale Datenübermittlungen

XMCL nutzt globale Infrastrukturanbieter zur Bereitstellung von Downloads, Webseiten und optionalen Diagnosen:

| Anbieter | Rolle & verarbeitete Daten | Verarbeitungsregionen | Datenschutzerklärung |
| :--- | :--- | :--- | :--- |
| **Microsoft Azure (Application Insights)** | Cookielose Webanalyse, optionale Launcher-Diagnosen | Hongkong (Ostasien), Vereinigte Staaten, EU | [Microsoft Datenschutz](https://privacy.microsoft.com/privacystatement) |
| **Cloudflare** | CDN, Edge-Routing, DDoS-Schutz | Globales Edge-Netzwerk / Vereinigte Staaten | [Cloudflare Datenschutz](https://www.cloudflare.com/privacypolicy/) |
| **GitHub** | Quellcode-Hosting, Releases, Issue-Tracker | Vereinigte Staaten | [GitHub Datenschutz](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Vercel** | Website-Hosting und Auslieferung | Vereinigte Staaten / Globales Edge-Netzwerk | [Vercel Datenschutz](https://vercel.com/legal/privacy-policy) |

- **Übermittlungsgarantien:** Bei der Übermittlung technischer Daten in Drittländer außerhalb des EWR, des Vereinigten Königreichs oder der Schweiz stützen wir uns auf die von der Europäischen Kommission genehmigten Standardvertragsklauseln (SCCs gemäß Art. 46 Abs. 2 lit. c DSGVO), das UK International Data Transfer Agreement (IDTA) / Addendum sowie gleichwertige gesetzliche Garantien.
- **Recht auf Ablehnung:** Sie können die grenzüberschreitende Übermittlung von Launcher-Diagnosedaten jederzeit ablehnen, indem Sie die Telemetrie deaktiviert lassen (Standardeinstellung).
- **Kein Verkauf von Daten:** Wir verkaufen niemals personenbezogene Daten und geben diese nicht für kontextübergreifende verhaltensbasierte Werbung weiter.

---

## 5. Regionsspezifische Bestimmungen und Betroffenenrechte

### Europäische Union, EWR und Deutschland (DSGVO / BDSG)
- **Rechtsgrundlagen:** Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) für optionale Diagnosetelemetrie; berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO) für Infrastruktursicherheit, Verfügbarkeit und cookielose aggregierte Analyse.
- **Digitales Einwilligungsalter:** In Deutschland beträgt das digitale Einwilligungsalter gemäß Art. 8 Abs. 1 DSGVO **16 Jahre** (in anderen EU-Mitgliedstaaten ggf. 13–15 Jahre). Minderjährige unterhalb dieser Altersgrenze benötigen die Einwilligung oder Zustimmung der Träger der elterlichen Verantwortung.
- **Ihre Rechte:** Gemäß Art. 15–22 DSGVO haben Sie das Recht auf Auskunft, Berichtigung, Löschung („Recht auf Vergessenwerden“), Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch gegen die Verarbeitung, jederzeitigen Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO) sowie das Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde (z. B. dem Bundesbeauftragten für den Datenschutz und die Informationsfreiheit – BfDI – oder der zuständigen Landesdatenschutzbehörde).

### Vereinigtes Königreich (UK GDPR & DPA 2018)
- Geregelt durch die UK GDPR und den Data Protection Act 2018. Digitales Einwilligungsalter: **13 Jahre**. Aufsichtsbehörde: UK Information Commissioner’s Office (ICO) unter [ico.org.uk](https://ico.org.uk).

### Vereinigte Staaten (COPPA, CCPA / CPRA & einzelstaatliche Gesetze)
- **COPPA:** XMCL richtet sich nicht an Kinder unter 13 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren. Eltern oder Erziehungsberechtigte können sich zur umgehenden Löschung an [cijhn@hotmail.com](mailto:cijhn@hotmail.com) wenden.
- **CCPA / CPRA & US-Bundesstaatsgesetze:** XMCL verkauft oder teilt keine personenbezogenen Daten für kontextübergreifende verhaltensbasierte Werbung. Einwohner Kaliforniens, Virginias, Colorados, Connecticuts, Utahs, Texas’, Oregons und anderer Bundesstaaten mit entsprechenden Datenschutzgesetzen haben das Recht auf Auskunft, Zugang, Berichtigung, Löschung sowie auf diskriminierungsfreie Ausübung dieser Rechte.

### Weitere Rechtsordnungen
- Wir achten gleichwertige Betroffenenrechte nach weltweit anwendbaren lokalen Gesetzen (einschließlich Brasilien LGPD, Japan APPI, Südkorea PIPA, China PIPL, Taiwan PDPA, Türkei KVKK, Indien DPDP Act, Indonesien UU PDP, Vietnam Dekret 13, Ukraine, Saudi-Arabien/VAE PDPL).

---

## 6. Ausübung Ihrer Rechte

Um Ihre Rechte auf Auskunft, Berichtigung, Löschung oder Widerruf der Einwilligung auszuüben, wenden Sie sich bitte an **CI010** unter **[cijhn@hotmail.com](mailto:cijhn@hotmail.com)**.

---

## 7. Maßgebliche Sprache und Haftungsausschluss

- **Maßgebliche Sprache:** Übersetzungen dieser Datenschutzerklärung werden aus Gefälligkeit bereitgestellt. Im Falle von Abweichungen zwischen einer übersetzten Fassung und der englischen Fassung ist die englische Fassung maßgeblich, soweit dies nach zwingendem lokalem Recht zulässig ist.
- **Minecraft- und Mojang-Hinweis:** XMCL ist ein unabhängiges Open-Source-Softwareprojekt und steht in keiner Verbindung zu Microsoft Corporation oder Mojang Studios und wird von diesen weder autorisiert, gesponsert noch unterstützt.
