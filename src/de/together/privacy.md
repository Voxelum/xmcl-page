---
title: XMCL Together Datenschutzerklärung
description: Wie XMCL Together Daten für Konten, Zahlungen, KI und Mehrspieler-Dienste verarbeitet (DSGVO-konform).
---

# XMCL Together Datenschutzerklärung

**Gültig ab: 21. August 2026 · Version: P3-2026-08-21**

Dieser Dienst wird von **CI010** als Einzelunternehmer unter den Bezeichnungen Voxelum und XMCL („XMCL Together“, „wir“) betrieben. Diese Datenschutzerklärung erläutert die Verarbeitung personenbezogener Daten bei der Nutzung eines XMCL Together-Kontos, kostenpflichtiger Abonnements und zugehöriger Online-Dienste auf [xmcl.app](https://xmcl.app) gemäß der Datenschutz-Grundverordnung (DSGVO).

---

## 1. Verarbeitete Daten

### Website- und Dienst-Telemetrie
Together-Webseiten und -Dienste nutzen Microsoft Azure Application Insights zur Erfassung anonymisierter Seitenaufrufe, Dienstaktionen, grundlegender Geräte- und Browserinformationen sowie Diagnoseereignissen. Ein lokales Cookie speichert Ihre Sprachpräferenz. Die Telemetrie des kostenlosen Open-Source-Launchers wird separat in der [Datenschutzerklärung des XMCL-Projekts](../privacy) geregelt.

### Konten und Authentifizierung
Bei Erstellung oder Nutzung eines Kontos verarbeiten wir Konto-IDs, Authentifizierungsanbieter-Kennungen, Sitzungs- und Aktualisierungs-Token-Metadaten, Zeitstempel und Sicherheitsdaten zur Missbrauchs- und Replay-Prävention. Wir erhalten niemals das Passwort Ihres Microsoft- oder Drittanbieter-Kontos.

### Zahlungen und Abonnements
Wir verarbeiten Kontostände, Währungen, Bestellungen, Abonnementstatus, Kontingentnutzungen, Rückerstattungen und Buchhaltungsprotokolle. Zahlungskartendaten werden über **Waffo Pancake** abgewickelt. XMCL erhält lediglich Transaktionsreferenzen, Status, Beträge und signierte Webhooks, speichert jedoch niemals vollständige Kartennummern oder Prüfziffern (CVC/CVV).

### KI-Funktionen
Bei Nutzung von KI-Funktionen verarbeiten wir den Prompt, Gesprächsinhalte, das gewählte Modell und den bereitgestellten Launcher-Kontext. Anfragen werden an Agnes und bei Bedarf an DeepSeek weitergeleitet. Wir messen Tokens für Abrechnung und Missbrauchsschutz. Wir trainieren keine eigenen XMCL-Modelle mit Ihren Eingaben oder Ausgaben.

> **Wichtiger Hinweis zu Drittanbieter-KI-Diensten:** Drittanbieter-KI-Dienste (Agnes, DeepSeek) verarbeiten diese Daten nach ihren eigenen Datenschutzbestimmungen. Wir fordern bei der Integration standardmäßig den „No-Training“-Modus an, können jedoch keine Garantie für die internen Datenverarbeitungspraktiken externer API-Anbieter übernehmen.

### Mehrspieler, Signalisierung und TURN (P2P-Verbindungen)
RTC-Dienste verarbeiten Sitzungs-IDs, Raum-Metadaten, IP-Adressen, Zeitstempel, TURN-Anmeldedaten und Datenvolumen über Cloudflare.

> **Einwilligung zur Offenlegung der IP-Adresse bei P2P:** Eine direkte Peer-to-Peer-Verbindung offenbart Ihre öffentliche IP-Adresse dem anderen Teilnehmer der Mehrspielersitzung. Durch die Nutzung der P2P-Funktionen stimmen Sie dieser für den Verbindungsaufbau zwingend erforderlichen Datenübermittlung ausdrücklich zu.

### Support und Kommunikation
Bei Supportanfragen verarbeiten wir Ihre Kontaktdaten, Referenznummern und Inhalte der Anfrage. Bitte übermitteln Sie keine Passwörter oder Zahlungskartendaten.

---

## 2. Zwecke und Rechtsgrundlagen (DSGVO)

Rechtsgrundlagen gemäß Art. 6 DSGVO sind:
- **Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO):** Bereitstellung der gebuchten Dienste und Abonnements.
- **Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO):** Schutz der Infrastruktur, Missbrauchs- und Betrugsprävention.
- **Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO):** Erfüllung steuerlicher und buchhalterischer Pflichten.
- **Einwilligung (Art. 6 Abs. 1 lit. a DSGVO):** Für optionale KI- und Telemetriedienste.

---

## 3. Datenübermittlung und Drittlandübermittlung

Daten werden im erforderlichen Umfang an folgende Auftragsverarbeiter übermittelt:
- **Waffo Pancake** (Zahlungsabwicklung)
- **Cloudflare** (CDN, DDoS-Schutz, Signalisierung, TURN)
- **Microsoft Azure** (Hosting, Datenbank, Application Insights)
- **Vercel & GitHub** (Webhosting, Release-Verteilung, Support)
- **Agnes & DeepSeek** (KI-Verarbeitung)

**Drittlandübermittlung:** Bei einer Übermittlung von Daten außerhalb des EWR stützen wir uns auf die **Standardvertragsklauseln (SCCs)** der EU-Kommission gemäß Art. 46 DSGVO. Wir verkaufen keine personenbezogenen Daten.

---

## 4. Speicherdauer

- **Telemetrie, KI-Metriken und TURN-Messungen:** Maximal **90 Tage**, danach vollständige Löschung oder irreversible Anonymisierung.
- **Konto- und Sitzungsdaten:** Für die Dauer des aktiven Kontos sowie **30 Tage** nach Kontolöschung zur Wiederherstellung und Klärung von Ansprüchen.
- **Finanz- und Buchhaltungsbelege:** **5 bis 7 Jahre** zur Erfüllung gesetzlicher steuer- und handelsrechtlicher Aufbewahrungsfristen.

---

## 5. Ihre Rechte als betroffene Person

Gemäß DSGVO haben Sie das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21) und Widerruf erteilter Einwilligungen sowie das Beschwerderecht bei einer zuständigen Aufsichtsbehörde. Kontakt: **cijhn@hotmail.com**.

---

## 6. Jugendschutz und Mindestalter

Kostenpflichtige XMCL Together-Dienste und KI-Funktionen richten sich nicht an Personen unter **16 Jahren** (bzw. dem maßgeblichen Mindestalter im jeweiligen EU-Mitgliedstaat). Minderjährige unter diesem Alter dürfen den Dienst nur mit ausdrücklicher **Zustimmung der Erziehungsberechtigten** nutzen.

---

## 7. Haftungsausschluss

XMCL ist ein unabhängiges Open-Source-Projekt ohne geschäftliche Verbindung zu Microsoft Corporation oder Mojang Studios.

---

## 8. Kontakt

- Anfragen zu Datenschutz und Zahlungen: [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- Sicherheitsmeldungen: [GitHub Security Advisories](https://github.com/voxelum/x-minecraft-launcher/security)
