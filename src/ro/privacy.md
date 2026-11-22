---
title: Notă de informare privind confidențialitatea proiectului open-source XMCL
description: Notă de informare privind confidențialitatea pentru site-ul XMCL și launcher-ul open-source, în conformitate cu GDPR (UE), Legea nr. 190/2018 și standardele internaționale de protecție a datelor.
---

# Notă de informare privind confidențialitatea proiectului open-source XMCL

**Data intrării în vigoare: 22 noiembrie 2026 · Versiune: OP3-2026-11-22**

Prezenta notă de informare acoperă site-ul public XMCL ([xmcl.app](https://xmcl.app)) și launcher-ul gratuit, open-source XMCL. Aceasta nu acoperă funcționalitățile plătite, conturile, facturarea, serviciile AI sau serviciile de semnalizare multiplayer / TURN furnizate prin XMCL Together, care sunt reglementate separat prin [Politica de confidențialitate XMCL Together](./together/privacy).

---

## 1. Operatorul de date și date de contact

XMCL este un proiect independent open-source operat de **CI010** și comunitatea de contributori Voxelum.
- **Solicitări privind confidențialitatea și aspecte juridice:** [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- **Depozit cod sursă:** [github.com/voxelum/x-minecraft-launcher](https://github.com/voxelum/x-minecraft-launcher)
- **Raportarea vulnerabilităților de securitate:** [GitHub Security Advisories](https://github.com/voxelum/x-minecraft-launcher/security)
- **Suport comunitar:** [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

---

## 2. Informațiile prelucrate și principiul reducerii la minimum a datelor

XMCL respectă principii stricte de reducere la minimum a datelor (data minimization):

### Site-ul public (xmcl.app)
- **Analiză agregată fără cookie-uri (Cookieless Analytics):** Utilizăm Microsoft Azure Application Insights configurat în **mod fără cookie-uri** (`disableCookiesUsage: true`), cu colectarea găzduită în **Microsoft Azure East Asia (Hong Kong)**, pentru a înregistra vizualizări anonime ale paginilor, selecții de descărcare, atribute generale de rețea/dispozitiv și șirul user-agent al browserului. Nu sunt plasate pe dispozitivul dumneavoastră cookie-uri de analiză sau de urmărire cross-site.
- **Cookie strict necesar:** Stocăm un singur cookie funcțional local (`nf_lang`), strict necesar pentru a reține preferința dumneavoastră privind limba interfeței. Nu utilizăm cookie-uri terțe de marketing, publicitate sau urmărire comportamentală.

### Launcher-ul open-source
- **Telemetrie și diagnosticare opționale (Opt-in):** Telemetria de diagnosticare este **dezactivată implicit**. Doar dacă activați în mod explicit telemetria în setările launcher-ului (Opt-in), acesta poate prelucra:
  - un identificator aleatoriu, pseudonimizat al instalării/dispozitivului;
  - evenimente din ciclul de viață al aplicației (lansarea jocului, coduri de ieșire normale/de eroare, versiunea aplicației);
  - tipul furnizorului de autentificare (de ex., identificator de autentificare Microsoft sau offline);
  - specificații de bază ale mediului de rulare (sistem de operare, versiune Java runtime, arhitectură CPU);
  - jurnale de erori (crash logs) și stive de apeluri (stack traces).
- **Igienizare și acreditări:** Rapoartele de diagnosticare a erorilor sunt curățate de căi sensibile de fișiere, nume de utilizator și token-uri de sistem ori de câte ori este fezabil tehnic. Nu prelucrăm și nu stocăm **niciodată** parolele, acreditările sau token-urile de sesiune ale conturilor dumneavoastră Microsoft/Mojang.

---

## 3. Durata de stocare a datelor

Evităm stocarea pe durată nedeterminată:
- Toate jurnalele de telemetrie, înregistrările de erori de diagnosticare și indicatorii de performanță sunt păstrate timp de **maximum 90 de zile**, după care sunt șterse definitiv sau anonimizate ireversibil.
- Rapoartele publice din sistemul de urmărire a problemelor (issue tracker) de pe GitHub rămân disponibile conform politicilor platformei GitHub și guvernanței depozitului până la rezolvare sau ștergere.

---

## 4. Persoane împuternicite (Sub-procesatori) și transferuri internaționale de date

XMCL utilizează furnizori globali de infrastructură pentru livrarea descărcărilor, a paginilor web și a diagnosticării opționale:

| Furnizor | Rol și date prelucrate | Regiuni de prelucrare | Politica de confidențialitate |
| :--- | :--- | :--- | :--- |
| **Microsoft Azure (Application Insights)** | Analiză web fără cookie-uri, diagnosticare opțională a launcher-ului | Hong Kong (Asia de Est), Statele Unite, UE | [Confidențialitate Microsoft](https://privacy.microsoft.com/privacystatement) |
| **Cloudflare** | CDN, rutare edge, protecție DDoS | Rețea Global Edge / Statele Unite | [Confidențialitate Cloudflare](https://www.cloudflare.com/privacypolicy/) |
| **GitHub** | Găzduire cod sursă, lansări, issue tracker | Statele Unite | [Confidențialitate GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Vercel** | Găzduire și livrare site web | Statele Unite / Global Edge | [Confidențialitate Vercel](https://vercel.com/legal/privacy-policy) |

- **Garanții pentru transferuri:** Atunci când datele tehnice sunt transferate în afara SEE, Regatului Unit sau Elveției, ne bazăm pe Clauzele Contractuale Standard (SCC) aprobate de Comisia Europeană, Acordul / Actul adițional britanic privind transferul internațional de date (IDTA) și garanții legale echivalente.
- **Dreptul de a refuza:** Puteți refuza transferul transfrontalier al datelor de diagnosticare ale launcher-ului pur și simplu păstrând telemetria dezactivată (starea sa implicită).
- **Fără vânzare de date:** Nu vindem niciodată date cu caracter personal și nu le partajăm pentru publicitate comportamentală cross-context.

---

## 5. Dispoziții specifice jurisdicției și drepturile dumneavoastră legale

### România și Uniunea Europeană / SEE (GDPR și Legea nr. 190/2018)
Prelucrarea datelor pentru utilizatorii din România este reglementată de **Regulamentul (UE) 2016/679 (GDPR)** și de **Legea nr. 190/2018** privind măsuri de punere în aplicare a GDPR.
- **Temeiuri juridice:** Consimțământul (art. 6 alin. (1) lit. a) GDPR) pentru telemetria opțională de diagnosticare; interesul legitim (art. 6 alin. (1) lit. f) GDPR) pentru securitatea infrastructurii, disponibilitatea serviciului și analiza agregată fără cookie-uri.
- **Vârsta de consimțământ digital:** În România, vârsta minimă pentru exprimarea valabilă a consimțământului digital în legătură cu serviciile societății informaționale este de **16 ani** (conform art. 8 GDPR aplicabil în România). Minorii sub 16 ani necesită consimțământul sau autorizarea titularului răspunderii părintești.
- **Drepturile dumneavoastră:** În temeiul articolelor 15–22 din GDPR, beneficiați de dreptul de acces, dreptul la rectificare, dreptul la ștergerea datelor („dreptul de a fi uitat”), dreptul la restricționarea prelucrării, dreptul la portabilitatea datelor, dreptul la opoziție, dreptul de a vă retrage consimțământul în orice moment (fără a afecta legalitatea prelucrării anterioare) și dreptul de a depune o plângere la autoritatea de supraveghere competentă.
- **Autoritatea de supraveghere din România:** Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (**ANSPDCP**), website: [https://www.dataprotection.ro](https://www.dataprotection.ro).

### Alte jurisdicții
Respectăm drepturi echivalente ale persoanelor vizate în temeiul legislațiilor aplicabile la nivel internațional (inclusiv UK GDPR și DPA 2018 în Regatul Unit — autoritatea ICO la [ico.org.uk](https://ico.org.uk), COPPA și CCPA/CPRA în Statele Unite, LGPD în Brazilia, APPI în Japonia, PIPA în Coreea de Sud și alte reglementări naționale aplicabile). XMCL nu se adresează copiilor sub 13 ani și nu colectează cu bună știință date personale ale acestora.

---

## 6. Exercitarea drepturilor dumneavoastră

Pentru a vă exercita drepturile de acces, rectificare, ștergere, opoziție sau retragere a consimțământului, contactați **CI010** la adresa **[cijhn@hotmail.com](mailto:cijhn@hotmail.com)**.

---

## 7. Limba de referință și declinarea responsabilității

- **Limba de referință:** Traducerile acestei note de informare sunt oferite pentru comoditate. În caz de neconcordanță între versiunea tradusă și versiunea în limba engleză, prevalează versiunea în limba engleză în măsura permisă de legislația locală imperativă.
- **Declinarea responsabilității privind Minecraft și Mojang:** XMCL este un proiect software independent, open-source, și nu este afiliat, autorizat, sponsorizat sau susținut de Microsoft Corporation sau Mojang Studios.
