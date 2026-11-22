---
title: XMCL Together Datenschutzerklärung
description: Wie XMCL Together Konto-, Abrechnungs-, KI- und Multiplayer-Dienstinformationen im Einklang mit der DSGVO und internationalen Datenschutzgesetzen verarbeitet.
---

# XMCL Together Datenschutzerklärung

**Gültig ab: 22. November 2026 · Version: P4-2026-11-22**

Diese Datenschutzerklärung erläutert, wie **CI010** als Einzelbetreiber unter den Bezeichnungen Voxelum und XMCL („XMCL Together“, „wir“, „uns“) personenbezogene Daten verarbeitet, wenn Sie ein XMCL Together-Konto, kostenpflichtige Dienste oder zugehörige Online-Funktionen unter [xmcl.app](https://xmcl.app) nutzen. Sie gilt nicht für unabhängige Dienste, die Sie eigenständig verbinden, wie Microsoft, Mojang, Drittanbieter-Authentifizierungsserver, Modrinth oder CurseForge.

---

## 1. Verarbeitete Informationen

### Together-Website und Dienst-Telemetrie
Together-Seiten und -Dienste verwenden Microsoft Azure Application Insights im **cookielosen Modus** (`disableCookiesUsage: true`), gehostet in **Azure East Asia (Hongkong)**, um anonyme Seitenaufrufe, Dienstaktionen, ungefähre Netzwerk-/Geräteattribute und Diagnoseereignisse zu erfassen. Die Website speichert lediglich ein einziges technisch notwendiges lokales Cookie (`nf_lang`) für Ihre Spracheinstellung (§ 25 Abs. 2 Nr. 2 TDDDG). Die Telemetrie des kostenlosen Open-Source-Launchers wird gesondert durch die [Datenschutzerklärung für das XMCL Open-Source-Projekt](../privacy) geregelt.

### Konten und Authentifizierung
Wenn Sie ein XMCL Together-Konto erstellen oder nutzen, verarbeiten wir Kontokennungen, Kennungen von Authentifizierungsanbietern, Sitzungs- und Refresh-Token-Metadaten, erteilte Berechtigungen (Scopes), Zeitstempel sowie Sicherheitstelemetrie zur Verhinderung von Replay-Angriffen oder Kontomissbrauch. Wir erhalten oder speichern **niemals** Ihre Passwörter von Microsoft oder anderen Drittanbieterkonten.

### Abrechnung und Abonnements
Wir verarbeiten Kontoguthaben, Währungs- und Kursinformationen, Bestellungen, Abonnementstatus, Kontingentzeiträume, Nutzungsgesamtsummen, Rückerstattungen, Streitfälle, Idempotenz-Kennungen und Prüfprotokolle (Audit-Logs). **Waffo Pancake** verarbeitet Zahlungskarten- und Checkout-Daten direkt. XMCL erhält lediglich Transaktionsreferenzen, Status, Betrag, Währung und signierte Webhook-Ereignisse und erhält oder speichert niemals vollständige Kartennummern oder Sicherheitsnummern (CVC/CVV).

### KI-Funktionen
Wenn Sie eine KI-Funktion nutzen, verarbeiten wir den Prompt, den Gesprächsinhalt, das ausgewählte Modell sowie den von Ihnen bereitgestellten Launcher-Kontext (z. B. Instanzname, Spiel- und Loader-Versionen, ausgewählte Seite oder lokaler Instanzpfad). Anfragen werden an unsere konfigurierten KI-Anbieter übermittelt, derzeit **Agnes** und bei Bedarf **DeepSeek**. Wir messen Token-Zahlen und gewichtete Kontingentnutzung zur Abrechnung und Missbrauchsprävention. Wir verwenden Ihre Prompts oder Ausgaben nicht zum Training eigener XMCL-Modelle.

> **Hinweis zu externen KI-Anbietern:** Externe KI-Anbieter (Agnes, DeepSeek) verarbeiten Anfrageinhalte gemäß ihren eigenen Datenschutzrichtlinien und Nutzungsbedingungen. Wir konfigurieren Integrationen, soweit unterstützt, auf „No-Training“-Modi, können jedoch die internen Datenverarbeitungspraktiken externer API-Anbieter nicht garantieren. Übermitteln Sie keine sensiblen personenbezogenen Daten, Passwörter oder vertraulichen Informationen in KI-Prompts.

### Multiplayer, Signaling und TURN (P2P-Konnektivität)
Together- und RTC-Funktionen verarbeiten Konto- und Sitzungskennungen, Raum-/Peer-Routing-Metadaten, IP-Adressen, Zeitstempel, TURN-Zugangskennungen sowie aggregierte Ingress-/Egress-Nutzung. **Cloudflare** stellt die Edge-, Signaling-, TURN- und Traffic-Analyse-Infrastruktur bereit.

> **Einwilligung zur P2P-IP-Offenlegung:** Peer-to-Peer-Verbindungen legen bauartbedingt Ihre öffentliche IP-Adresse gegenüber dem anderen Peer in der Multiplayer-Sitzung offen. Durch die Nutzung der P2P-Funktionen erkennen Sie diese zur Herstellung der Direktverbindung technisch notwendige Datenweitergabe ausdrücklich an und willigen in diese ein. Das XMCL-Signaling leitet ausschließlich Verbindungsmetadaten weiter und zeichnet keine Minecraft-Sprach-, Video- oder Spielinhalte auf.

### Support- und Community-Kommunikation
Wenn Sie uns kontaktieren, verarbeiten wir die von Ihnen angegebenen Kontaktdaten, Konto- oder Transaktionsreferenzen, Diagnosen und Nachrichteninhalte. Senden Sie keine Passwörter, Zugriffstoken, vollständigen Zahlungskartendaten oder nicht erforderliche sensible personenbezogene Daten.

---

## 2. Zwecke und Rechtsgrundlagen

Wir verarbeiten Daten, um:
- XMCL Together-Dienste bereitzustellen, zu authentifizieren, abzusichern und Fehler zu beheben;
- Abonnements, Guthaben, Kontingente, Zahlungen, Rückerstattungen und Kundensupport zu betreiben;
- Multiplayer-Verbindungen zu vermitteln und den TURN-Bandbreitenverbrauch zu messen;
- angeforderte KI-Antworten zu generieren und KI-Kontingente zu erfassen;
- Betrug, Replay-Angriffe, Missbrauch und Sicherheitsvorfälle zu verhindern;
- buchhalterischen, steuerlichen, zahlungsnetzwerkbezogenen, gesetzlichen und streitbeilegungsbezogenen Pflichten nachzukommen.

**Rechtsgrundlagen (DSGVO / UK GDPR / LGPD / International):**
- **Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO):** Bereitstellung der von Ihnen angeforderten Konten, Abonnements, KI- und Multiplayer-Dienste;
- **Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO):** Aufbewahrung von Finanz-, Steuer- und Zahlungsprüfungsunterlagen;
- **Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO):** Absicherung der Infrastruktur, Betrugs-/Missbrauchsprävention und cookielose Betriebsdiagnose;
- **Ausdrückliche Einwilligung (Art. 6 Abs. 1 lit. a DSGVO):** optionale KI-Prompts, P2P-IP-Offenlegung und grenzüberschreitende Datenübermittlungen, soweit gesetzlich eine Einwilligung erforderlich ist.

---

## 3. Auftragsverarbeiter und internationale Datenübermittlungen

Wir geben nur die Daten weiter, die für den Betrieb mit folgenden Infrastruktur- und Dienstleistungsanbietern vernünftigerweise erforderlich sind:

| Empfänger | Zweck & Datenkategorien | Verarbeitungsregionen | Datenschutzerklärung |
| :--- | :--- | :--- | :--- |
| **Waffo Pancake** | Zahlungsabwicklung (Checkout), Betrugsprüfung, Rückerstattungen, Webhook-Ereignisse (Transaktions- & Zahlungsmetadaten) | Global / Vereinigte Staaten / Singapur | Beim Checkout bereitgestellt |
| **Cloudflare** | Workers, CDN, DDoS-Schutz, WebRTC-Signaling, TURN-Relay (IP-, Sitzungs- & Traffic-Metadaten) | Globales Edge-Netzwerk / Vereinigte Staaten | [Cloudflare Datenschutz](https://www.cloudflare.com/privacypolicy/) |
| **Microsoft Azure** | Hosting, Datenbankspeicherung, cookieloses Application Insights (Konto-, Abrechnungs- & Diagnosedaten) | Hongkong (Ostasien), Vereinigte Staaten, EU | [Microsoft Datenschutz](https://privacy.microsoft.com/privacystatement) |
| **Vercel & GitHub** | Website-Auslieferung, Releases, Issue-/Sicherheitssupport | Vereinigte Staaten / Globales Edge-Netzwerk | [Vercel](https://vercel.com/legal/privacy-policy) / [GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Agnes & DeepSeek** | KI-Antwortgenerierung (Prompts, Gesprächskontext, Modellparameter) | Global / China (VR China) / Vereinigte Staaten | Richtlinien der Anbieter |

- **Übermittlungsgarantien:** Grenzüberschreitende Datenübermittlungen außerhalb des EWR, des Vereinigten Königreichs oder der Schweiz stützen sich auf EU-Standardvertragsklauseln (SCCs gemäß Art. 46 Abs. 2 lit. c DSGVO), das UK IDTA/Addendum, TLS-Verschlüsselung während der Übertragung sowie strikte Datenminimierung.
- **Folgen einer Verweigerung:** Die Bereitstellung von Konto-, Zahlungs- und grenzüberschreitenden Routing-Daten ist für den Betrieb von XMCL Together erforderlich. Wenn Sie diese Verarbeitung oder grenzüberschreitende Übermittlung ablehnen, können Sie weiterhin den kostenlosen Offline-/Open-Source-XMCL-Launcher nutzen; gehostete XMCL Together-Funktionen stehen dann jedoch nicht zur Verfügung.
- **Kein Verkauf von Daten:** Wir verkaufen **keine** personenbezogenen Daten und geben sie nicht für kontextübergreifende verhaltensbasierte Werbung weiter.

---

## 4. Speicherfristen

Wir setzen strikte Aufbewahrungsfristen durch:
- **Betriebstelemetrie, KI-Nutzungsmetriken und TURN-Messdaten:** Speicherung für **maximal 90 Tage**, danach dauerhafte Löschung oder unumkehrbare Anonymisierung.
- **Konto- und Sitzungsdaten:** Speicherung während der aktiven Kontolaufzeit sowie für **30 Tage** nach Kontolöschung zur Wiederherstellung und Streitbeilegung.
- **Finanzbuchungsbelege, Zahlungsereignisse, Rückerstattungen und Prüfprotokolle:** Aufbewahrung für **5 bis 7 Jahre** (bzw. bis zu den zwingenden gesetzlichen Aufbewahrungsfristen nach HGB/AO) zur Erfüllung gesetzlicher Buchführungs-, Steuer- und Zahlungsnetzwerkpflichten, auch nach Kontoschließung.
- Verschlüsselte Backups werden im Rahmen regulärer Rotationszyklen bereinigt.

---

## 5. Ihre Wahlmöglichkeiten und gesetzlichen Rechte

### Allgemeine Rechte sowie Rechte nach DSGVO, UK GDPR & internationalem Recht
Sie haben das Recht:
- optionale Online-Funktionen zu deaktivieren oder Drittanbieterdienste zu trennen;
- das Cookie `nf_lang` über Ihren Browser zu verwalten;
- die Verlängerung von Together Home jederzeit über Ihre Kontoberfläche zu kündigen (wirksam zum Ende des laufenden bezahlten Zeitraums);
- Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung („Recht auf Vergessenwerden“, Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) oder Widerspruch gegen die Verarbeitung (Art. 21 DSGVO) zu verlangen;
- eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen (Art. 7 Abs. 3 DSGVO), ohne dass die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung berührt wird;
- Beschwerde bei einer Datenschutzaufsichtsbehörde einzulegen (z. B. beim Bundesbeauftragten für den Datenschutz und die Informationsfreiheit – BfDI – unter [bfdi.bund.de](https://www.bfdi.bund.de), Ihrer Landesdatenschutzbehörde, dem UK ICO unter [ico.org.uk](https://ico.org.uk) oder Ihrer nationalen Aufsichtsbehörde).

### Datenschutzrechte in Kalifornien & US-Bundesstaaten (CCPA / CPRA)
XMCL verkauft **keine** personenbezogenen Daten und gibt sie nicht für kontextübergreifende verhaltensbasierte Werbung weiter. Einwohner Kaliforniens und von US-Bundesstaaten mit einschlägigen Datenschutzgesetzen (VA, CO, CT, UT, TX, OR usw.) haben das Recht auf Auskunft, Zugang, Löschung, Berichtigung unrichtiger Daten sowie auf diskriminierungsfreie Ausübung dieser Rechte.

---

## 6. Datensicherheit

Wir setzen zweckgebundene Sitzungen, Zugriffskontrollen nach dem Least-Privilege-Prinzip, TLS-Verschlüsselung während der Übertragung, signierte Zahlungs-Webhooks, Replay-Schutz, Geheimnisisolierung und kontinuierliche Überwachung ein. Kein Online-System ist zu 100 % risikofrei; Sie sind selbst für den Schutz Ihres Geräts, Ihrer Sitzungen und Ihrer Zugangsdaten von Drittanbietern verantwortlich.

---

## 7. Kinder und Altersanforderungen

- **Kostenpflichtige Dienste & Konten:** Für XMCL Together-Konten und kostenpflichtige Funktionen müssen Sie mindestens **18 Jahre alt** sein (oder die gesetzliche Volljährigkeit in Ihrer Rechtsordnung erreicht haben) oder über eine nachweisbare Einwilligung eines Elternteils oder gesetzlichen Vertreters verfügen.
- **Digitales Einwilligungsalter (Art. 8 DSGVO) & COPPA:** In Deutschland liegt das digitale Einwilligungsalter bei **16 Jahren** (Art. 8 DSGVO). Wir erheben wissentlich keine personenbezogenen Daten von Kindern unter **16 Jahren** in Deutschland (bzw. unter 13 Jahren in den USA/UK oder dem jeweils geltenden nationalen Einwilligungsalter von 14–16 Jahren in anderen EU-Mitgliedstaaten) ohne nachweisbare Einwilligung der Erziehungsberechtigten. Eltern oder Erziehungsberechtigte können sich zur umgehenden Löschung an [cijhn@hotmail.com](mailto:cijhn@hotmail.com) wenden.

---

## 8. Änderungen, maßgebliche Sprache und Haftungsausschluss

- **Änderungen:** Wir veröffentlichen Aktualisierungen auf dieser Seite mit neuem Gültigkeitsdatum und neuer Versionsnummer und informieren über wesentliche Änderungen vorab, soweit gesetzlich erforderlich.
- **Maßgebliche Sprache:** Im Falle von Abweichungen zwischen einer übersetzten Fassung und der englischen Fassung ist die englische Fassung maßgeblich, soweit dies nach zwingendem lokalem Recht zulässig ist.
- **Minecraft-Hinweis:** XMCL ist ein unabhängiges Projekt und steht in keiner Verbindung zu Microsoft Corporation oder Mojang Studios und wird von diesen weder gesponsert noch unterstützt.

---

## 9. Anbieterkennzeichnung / Rechtliche Hinweise (§ 5 DDG) und Kontakt

**Verantwortlicher / Diensteanbieter gemäß § 5 DDG (Digitale-Dienste-Gesetz):**
- **Betreiber:** CI010 (Einzelbetreiber unter den Projektbezeichnungen Voxelum / XMCL)
- **Elektronische Kontaktaufnahme (Allgemein, Abrechnung, Rückerstattung, Rechtliches & Datenschutz):** [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- **Ladungsfähige Anschrift / gesetzliche Pflichtangaben:** Gesetzlich vorgeschriebene Post- und Impressumsangaben nach § 5 DDG bzw. anwendbarem Verbraucherschutzrecht werden auf verifizierte rechtliche, verbraucherschutzrechtliche oder behördliche Anfrage per E-Mail bereitgestellt.
- **Meldung von Sicherheitslücken:** [GitHub private vulnerability reporting](https://github.com/voxelum/x-minecraft-launcher/security)
- **Community-Support:** [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

Bitte geben Sie nur die minimal erforderliche Konto- oder Transaktionsreferenz an, um Ihren Datensatz zuzuordnen. Vor Bearbeitung einer Anfrage können wir einen Nachweis der Kontoinhaberschaft verlangen.
