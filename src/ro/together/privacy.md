---
title: Politica de confidențialitate XMCL Together
description: Modul în care XMCL Together prelucrează datele privind contul, facturarea, funcționalitățile AI și serviciile multiplayer, în conformitate cu GDPR, Legea nr. 190/2018 și legislația internațională privind protecția datelor.
---

# Politica de confidențialitate XMCL Together

**Data intrării în vigoare: 22 noiembrie 2026 · Versiune: P4-2026-11-22**

Prezenta politică explică modul în care **CI010**, acționând în calitate de operator individual sub denumirile Voxelum și XMCL („XMCL Together”, „noi”), prelucrează informațiile atunci când utilizați un cont XMCL Together, servicii plătite sau funcționalități online asociate pe [xmcl.app](https://xmcl.app). Aceasta nu reglementează serviciile independente pe care alegeți să le conectați, cum ar fi Microsoft, Mojang, servere de autentificare terțe, Modrinth sau CurseForge.

---

## 1. Informațiile pe care le prelucrăm

### Site-ul Together și telemetria serviciilor
Paginile și serviciile Together utilizează Microsoft Azure Application Insights configurat în **mod fără cookie-uri** (`disableCookiesUsage: true`), găzduit în **Azure East Asia (Hong Kong)**, pentru a înregistra vizualizări anonime ale paginilor, acțiuni în cadrul serviciului, atribute aproximative de rețea/dispozitiv și evenimente de diagnosticare. Site-ul stochează un singur cookie local strict necesar (`nf_lang`) pentru preferința dumneavoastră de limbă. Telemetria din launcher-ul gratuit open-source este reglementată separat de [Nota de informare privind confidențialitatea proiectului open-source XMCL](../privacy).

### Conturi și autentificare
Atunci când creați sau utilizați un cont XMCL Together, prelucrăm identificatori de cont, identificatori ai furnizorului de autentificare, metadate privind sesiunile și token-urile de reîmprospătare (refresh tokens), permisiuni acordate (scopes), marcaje temporale și telemetrie de securitate utilizată pentru prevenirea atacurilor de tip replay sau a abuzurilor de cont. Nu primim și nu stocăm **niciodată** parolele conturilor dumneavoastră Microsoft sau ale altor terți.

### Facturare și abonamente
Prelucrăm soldurile contului, informații despre monedă și tarife, comenzi, starea abonamentelor, perioadele de cote (allowances), totalurile de utilizare, rambursările, disputele, identificatorii de idempotență și înregistrările de audit. **Waffo Pancake** prelucrează direct datele cardului bancar și informațiile de plată (checkout). XMCL primește doar referințele tranzacției, starea, suma, moneda și evenimentele webhook semnate, și nu primește sau stochează niciodată numerele complete ale cardurilor sau codurile de securitate (CVC/CVV).

### Funcționalități AI
Dacă invocați o funcționalitate AI, prelucrăm solicitarea (prompt), conținutul conversației, modelul selectat și contextul launcher-ului pe care alegeți să îl furnizați (precum numele instanței, versiunile jocului și ale loader-ului, pagina selectată sau calea locală a instanței). Solicitările sunt transmise către furnizorii noștri AI configurați, în prezent **Agnes** și, la nevoie, **DeepSeek**. Măsurăm numărul de tokeni și utilizarea ponderată a cotei în scopuri de facturare și prevenire a abuzurilor. Nu utilizăm solicitările sau răspunsurile dumneavoastră pentru a antrena un model XMCL.

> **Declinarea responsabilității privind furnizorii AI terți:** Furnizorii AI externi (Agnes, DeepSeek) prelucrează conținutul solicitărilor conform propriilor politici de confidențialitate și termeni de utilizare. Configurăm integrările pentru a solicita moduri „fără antrenare” (no-training) acolo unde acestea sunt suportate, dar nu putem garanta practicile interne de prelucrare a datelor ale furnizorilor externi de API. Nu introduceți date personale sensibile, parole sau informații confidențiale în solicitările AI.

### Multiplayer, semnalizare și TURN (conectivitate P2P)
Funcționalitățile Together și RTC prelucrează identificatori de cont și sesiune, metadate de rutare a camerelor/participanților, adrese IP, marcaje temporale, identificatori de acreditări TURN și date agregate de trafic de intrare/ieșire (ingress/egress). **Cloudflare** furnizează infrastructura edge, semnalizare, TURN și analiză de trafic.

> **Consimțământ privind expunerea adresei IP în conexiunile P2P:** Conectivitatea peer-to-peer (P2P) implică, prin natura sa tehnică, dezvăluirea adresei dumneavoastră IP publice către ceilalți participanți din sesiunea multiplayer. Prin utilizarea funcționalităților P2P, recunoașteți și vă exprimați acordul explicit cu privire la această dezvăluire tehnică necesară pentru stabilirea conexiunii directe. Semnalizarea XMCL rutează doar metadate de conexiune și nu înregistrează voce, video sau conținut de joc din Minecraft.

### Suport și comunicări comunitare
Dacă ne contactați, prelucrăm datele de contact, referințele de cont sau tranzacție, datele de diagnosticare și conținutul mesajului transmis de dumneavoastră. Nu ne trimiteți parole, token-uri de acces, date complete ale cardurilor bancare sau date personale sensibile fără legătură cu solicitarea.

---

## 2. Scopuri și temeiuri juridice

Prelucrăm informațiile pentru a:
- furniza, autentifica, securiza și depana serviciile XMCL Together;
- opera abonamentele, soldurile, cotele, plățile, rambursările și suportul pentru clienți;
- ruta conexiunile multiplayer și măsura consumul de lățime de bandă TURN;
- genera răspunsurile AI solicitate și contoriza cotele AI;
- preveni frauda, atacurile de tip replay, abuzurile și incidentele de securitate;
- respecta obligațiile contabile, fiscale, ale rețelelor de plăți, legale și de soluționare a disputelor.

**Temeiuri juridice (GDPR / Legea nr. 190/2018 / legislație internațională):**
- **Executarea contractului (art. 6 alin. (1) lit. b) GDPR):** furnizarea conturilor, abonamentelor, funcționalităților AI și serviciilor multiplayer solicitate de dumneavoastră;
- **Obligație legală (art. 6 alin. (1) lit. c) GDPR):** păstrarea evidențelor financiare, fiscale și de audit al plăților;
- **Interes legitim (art. 6 alin. (1) lit. f) GDPR):** securizarea infrastructurii, prevenirea fraudei/abuzurilor și diagnosticarea operațională fără cookie-uri;
- **Consimțământ explicit (art. 6 alin. (1) lit. a) GDPR):** solicitări AI opționale, expunerea adresei IP în conexiunile P2P și transferurile transfrontaliere acolo unde legea impune consimțământul.

---

## 3. Persoane împuternicite (Sub-procesatori) și transferuri internaționale de date

Partajăm doar datele strict necesare cu următorii furnizori de infrastructură și servicii:

| Destinatar | Scop și categorii de date | Regiuni de prelucrare | Politica de confidențialitate |
| :--- | :--- | :--- | :--- |
| **Waffo Pancake** | Procesare plăți (checkout), verificare antifraudă, rambursări, evenimente webhook (metadate de tranzacție și plată) | Global / Statele Unite / Singapore | Furnizată la checkout |
| **Cloudflare** | Workers, CDN, protecție DDoS, semnalizare WebRTC, relay TURN (IP, metadate de sesiune și trafic) | Global Edge / Statele Unite | [Confidențialitate Cloudflare](https://www.cloudflare.com/privacypolicy/) |
| **Microsoft Azure** | Găzduire, stocare baze de date, Application Insights fără cookie-uri (date de cont, facturare și diagnosticare) | Hong Kong (Asia de Est), Statele Unite, UE | [Confidențialitate Microsoft](https://privacy.microsoft.com/privacystatement) |
| **Vercel & GitHub** | Livrare site web, lansări, suport pentru probleme/securitate | Statele Unite / Global Edge | [Vercel](https://vercel.com/legal/privacy-policy) / [GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Agnes & DeepSeek** | Generare răspunsuri AI (solicitări, contextul conversației, parametri ai modelului) | Global / China (RPC) / Statele Unite | Politicile furnizorilor |

- **Garanții pentru transferuri:** Transferurile transfrontaliere în afara SEE, Regatului Unit sau Elveției se bazează pe Clauzele Contractuale Standard (SCC) ale UE, IDTA/Actul adițional al Regatului Unit, criptare TLS în tranzit și reducerea strictă la minimum a datelor.
- **Consecințele refuzului:** Furnizarea datelor de cont, plată și rutare transfrontalieră este necesară pentru funcționarea XMCL Together. Dacă refuzați această prelucrare sau transferul transfrontalier, puteți continua să utilizați gratuit launcher-ul XMCL open-source/offline, dar funcționalitățile găzduite XMCL Together nu vor fi disponibile.
- **Fără vânzare de date:** Nu **vindem** date cu caracter personal și nu le partajăm pentru publicitate comportamentală cross-context.

---

## 4. Limite de stocare a datelor

Aplicăm perioade stricte de retenție:
- **Telemetrie operațională, indicatori de utilizare AI și măsurători TURN:** păstrate timp de **maximum 90 de zile**, apoi șterse definitiv sau anonimizate ireversibil.
- **Date de cont și sesiune:** păstrate pe durata cât contul este activ, plus **30 de zile** după ștergerea contului pentru recuperare și soluționarea eventualelor dispute.
- **Înregistrări financiare, evenimente de plată, rambursări și registre de audit:** păstrate între **5 și 7 ani** pentru respectarea obligațiilor legale contabile, fiscale și ale rețelelor de plăți, chiar și după închiderea contului.
- Copiile de rezervă criptate sunt eliminate prin ciclurile normale de rotație.

---

## 5. Opțiunile și drepturile dumneavoastră legale

### Drepturi generale, GDPR și Legea nr. 190/2018 (România / UE / SEE)
Aveți dreptul să:
- renunțați la funcționalitățile online opționale sau să deconectați serviciile terțe;
- gestionați cookie-ul `nf_lang` din setările browserului;
- anulați oricând reînnoirea Together Home din interfața contului dumneavoastră (cu efect la sfârșitul perioadei plătite curente);
- solicitați accesul, rectificarea, ștergerea („dreptul de a fi uitat”), restricționarea prelucrării, portabilitatea datelor sau să vă opuneți prelucrării (art. 15–22 GDPR);
- vă retrageți consimțământul în orice moment, fără a afecta legalitatea prelucrării efectuate anterior retragerii;
- depuneți o plângere la autoritatea națională de supraveghere a protecției datelor — în România, **Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)** la [https://www.dataprotection.ro](https://www.dataprotection.ro), sau la autoritatea competentă din statul dumneavoastră membru UE/SEE (sau UK ICO la [ico.org.uk](https://ico.org.uk)).

### Drepturi privind confidențialitatea în SUA (CCPA / CPRA și legi statale)
XMCL nu **vinde** informații personale și nu le partajează pentru publicitate comportamentală cross-context. Rezidenții statului California și ai altor state din SUA cu legislație aplicabilă privind confidențialitatea au dreptul de a cunoaște, accesa, șterge, corecta datele inexacte și de a exercita aceste drepturi fără discriminare.

---

## 6. Securitate

Implementăm sesiuni cu domeniu limitat (scoped sessions), controale de acces bazate pe principiul privilegiului minim, criptare TLS în tranzit, webhook-uri de plată semnate, protecție împotriva atacurilor replay, izolarea secretelor și monitorizare continuă. Niciun sistem online nu este 100% imun la riscuri; sunteți responsabil pentru protejarea dispozitivului, a sesiunilor și a acreditărilor dumneavoastră terțe.

---

## 7. Copii și cerințe de vârstă

- **Servicii plătite și contracte:** Crearea unui cont XMCL Together și utilizarea funcționalităților plătite necesită împlinirea vârstei de cel puțin **18 ani** (vârsta majoratului și capacității depline de exercițiu în România), sau existența consimțământului verificabil al unui părinte ori reprezentant legal care își asumă responsabilitatea pentru utilizare și plăți.
- **Consimțământul digital (România / UE):** În România, vârsta minimă pentru consimțământul digital este de **16 ani** (conform GDPR și Legii nr. 190/2018). Nu colectăm cu bună știință date cu caracter personal de la minori sub vârsta aplicabilă de consimțământ digital (16 ani în România, 13 ani în SUA/UK conform COPPA/UK GDPR) fără consimțământul verificabil al părinților sau reprezentantului legal. Părinții sau reprezentanții legali ne pot contacta la [cijhn@hotmail.com](mailto:cijhn@hotmail.com) pentru ștergerea promptă a datelor.

---

## 8. Modificări, limba de referință și declinarea responsabilității

- **Modificări:** Vom publica actualizările pe această pagină cu o nouă dată de intrare în vigoare și o nouă versiune și vom oferi notificare prealabilă pentru modificările substanțiale, acolo unde legea impune acest lucru.
- **Limba de referință:** În caz de neconcordanță între versiunea tradusă și versiunea în limba engleză, prevalează versiunea în limba engleză în măsura permisă de legislația locală imperativă.
- **Declinarea responsabilității privind Minecraft:** XMCL este un proiect independent și nu este afiliat, sponsorizat sau susținut de Microsoft Corporation sau Mojang Studios.

---

## 9. Contact

**Operator / Persoană de contact pentru confidențialitate (CI010):**
- Solicitări generale, facturare, rambursări, aspecte juridice și confidențialitate: [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- Rapoarte de securitate: [Raportare privată a vulnerabilităților pe GitHub](https://github.com/voxelum/x-minecraft-launcher/security)
- Suport comunitar: [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

Includeți doar referința minimă de cont sau tranzacție necesară identificării înregistrării dumneavoastră. Este posibil să vă solicităm verificarea titularității contului înainte de a soluționa o cerere.
