---
title: Obavijest o privatnosti projekta otvorenog koda XMCL
description: Obavijest o privatnosti za mrežnu stranicu XMCL i pokretač otvorenog koda, usklađena s Općom uredbom o zaštiti podataka (GDPR), Zakonom o provedbi Opće uredbe o zaštiti podataka i međunarodnim standardima zaštite podataka.
---

# Obavijest o privatnosti projekta otvorenog koda XMCL

**Datum stupanja na snagu: 22. studenoga 2026. · Verzija: OP3-2026-11-22**

Ova obavijest odnosi se na javnu mrežnu stranicu XMCL ([xmcl.app](https://xmcl.app)) i besplatni pokretač otvorenog koda XMCL. Ne odnosi se na plaćene značajke, korisničke račune, naplatu, AI značajke ni usluge signalizacije/TURN-a za višeigrački način koje pruža XMCL Together, a koje su zasebno uređene u [Pravilima privatnosti XMCL Together](./together/privacy).

---

## 1. Voditelj obrade i kontakt

XMCL je neovisni projekt otvorenog koda kojim upravlja **CI010** u suradnji sa zajednicom suradnika Voxelum.
- **Upiti u vezi s privatnošću i pravnim pitanjima:** [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- **Repozitorij izvornog koda:** [github.com/voxelum/x-minecraft-launcher](https://github.com/voxelum/x-minecraft-launcher)
- **Prijava sigurnosnih ranjivosti:** [GitHub Security Advisories](https://github.com/voxelum/x-minecraft-launcher/security)
- **Podrška zajednice:** [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

---

## 2. Podaci koje obrađujemo i smanjenje količine podataka

XMCL primjenjuje stroga načela smanjenja količine podataka:

### Javna mrežna stranica (xmcl.app)
- **Agregirana analitika bez kolačića:** Koristimo Microsoft Azure Application Insights konfiguriran u **načinu rada bez kolačića** (`disableCookiesUsage: true`) s obradom podataka u regiji **Microsoft Azure East Asia (Hong Kong)** za bilježenje anonimnih pregleda stranica, odabira preuzimanja, općih mrežnih i uređajnih svojstava te oznaka preglednika (user-agent). Na vaš uređaj ne pohranjuju se nikakvi analitički kolačići ni kolačići za praćenje na drugim stranicama.
- **Nužni funkcionalni kolačić:** Pohranjujemo samo jedan lokalni funkcionalni kolačić (`nf_lang`) koji je strogo nužan za pamćenje vašeg odabranog jezika sučelja. Ne koristimo kolačiće trećih strana za marketing, oglašavanje ili praćenje ponašanja.

### Pokretač otvorenog koda
- **Dobrovoljna (opt-in) telemetrija i dijagnostika:** Dijagnostička telemetrija **onemogućena je prema zadanim postavkama**. Samo ako izričito omogućite telemetriju u postavkama pokretača (opt-in), pokretač može obrađivati:
  - nasumično generirani, pseudonimizirani identifikator instalacije/uređaja;
  - događaje životnog ciklusa aplikacije (pokretanje igre, normalni/greškovni izlazni kodovi, verzija aplikacije);
  - vrstu pružatelja autentifikacije (npr. Microsoft ili izvanmrežni identifikator autentifikacije);
  - osnovne tehničke podatke o okruženju izvođenja (operacijski sustav, verzija Java okruženja, arhitektura procesora);
  - zapisnike rušenja i tragove stoga (stack traces).
- **Uklanjanje osjetljivih podataka i vjerodajnica:** Dijagnostički podaci o rušenju pročišćavaju se od osjetljivih putanja datoteka, korisničkih imena i sistemskih tokena gdje god je to tehnički izvedivo. **Nikada** ne obrađujemo niti pohranjujemo vaše lozinke, vjerodajnice ili sesijske tokene za Microsoft/Mojang račune.

---

## 3. Rokovi pohrane podataka

Izbjegavamo neograničene rokove čuvanja podataka:
- Svi telemetrijski zapisnici, dijagnostički zapisi o pogreškama i mjerenja performansi čuvaju se **najdulje 90 dana**, nakon čega se trajno brišu ili nepovratno anonimiziraju.
- Javne prijave problema na GitHubu ostaju dostupne u skladu s pravilima platforme GitHub i pravilima upravljanja repozitorijem do rješavanja ili brisanja.

---

## 4. Izvršitelji obrade i međunarodni prijenos podataka

XMCL koristi globalne pružatelje infrastrukture za isporuku preuzimanja, mrežnih stranica i opcionalne dijagnostike:

| Pružatelj | Uloga i obrađeni podaci | Regije obrade | Pravila privatnosti |
| :--- | :--- | :--- | :--- |
| **Microsoft Azure (Application Insights)** | Mrežna analitika bez kolačića, opcionalna dijagnostika pokretača | Hong Kong (Istočna Azija), Sjedinjene Američke Države, EU | [Microsoft Privacy](https://privacy.microsoft.com/privacystatement) |
| **Cloudflare** | CDN, rubno usmjeravanje, zaštita od DDoS napada | Globalna rubna mreža / Sjedinjene Američke Države | [Cloudflare Privacy](https://www.cloudflare.com/privacypolicy/) |
| **GitHub** | Pohrana izvornog koda, izdanja, sustav prijava problema | Sjedinjene Američke Države | [GitHub Privacy](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Vercel** | Hosting i isporuka mrežne stranice | Sjedinjene Američke Države / Globalna rubna mreža | [Vercel Privacy](https://vercel.com/legal/privacy-policy) |

- **Zaštitne mjere pri prijenosu:** Kada se tehnički podaci prenose izvan Europskog gospodarskog prostora (EGP), Ujedinjenog Kraljevstva ili Švicarske, oslanjamo se na Standardne ugovorne klauzule (SCC) koje je odobrila Europska komisija, britanski IDTA/Dodatak te ekvivalentne zakonske zaštitne mjere.
- **Pravo na odbijanje:** Prijenos dijagnostike pokretača preko granice možete odbiti jednostavno tako da telemetriju ostavite onemogućenom (što je zadano stanje).
- **Zabrana prodaje podataka:** Nikada ne prodajemo osobne podatke niti ih dijelimo za bihevioralno oglašavanje na različitim kontekstima.

---

## 5. Regionalne odredbe i zakonska prava

### Hrvatska, Europska unija i EGP (GDPR i Zakon o provedbi Opće uredbe o zaštiti podataka)
- **Pravne osnove:** Privola (čl. 6. st. 1. t. (a) GDPR-a) za opcionalnu dijagnostičku telemetriju; legitimni interesi (čl. 6. st. 1. t. (f) GDPR-a) za sigurnost infrastrukture, dostupnost i agregiranu analitiku bez kolačića.
- **Dobna granica za digitalnu privolu:** U Republici Hrvatskoj, sukladno **Zakonu o provedbi Opće uredbe o zaštiti podataka**, dobna granica za davanje privole djeteta u vezi s uslugama informacijskog društva iznosi **16 godina** (ili primjenjiva dobna granica u drugoj državi članici EU-a, 13–15 godina). Maloljetnici mlađi od te dobi trebaju privolu roditelja ili zakonskog skrbnika.
- **Vaša prava:** Na temelju članaka 15.–22. GDPR-a imate pravo na pristup podacima, ispravak, brisanje („pravo na zaborav”), ograničenje obrade, prenosivost podataka, prigovor, povlačenje privole u bilo kojem trenutku (bez utjecaja na zakonitost obrade prije povlačenja) te pravo na podnošenje pritužbe nadzornom tijelu.
- **Nadzorno tijelo u Republici Hrvatskoj:** **Agencija za zaštitu osobnih podataka (AZOP)**, dostupna na [azop.hr](https://azop.hr).

### Ujedinjeno Kraljevstvo (UK GDPR i DPA 2018)
- Uređeno u skladu s UK GDPR-om i Zakonom o zaštiti podataka iz 2018. (DPA 2018). Dob digitalne privole: **13 godina**. Nadzorno tijelo: UK Information Commissioner’s Office (ICO) na [ico.org.uk](https://ico.org.uk).

### Sjedinjene Američke Države (COPPA, CCPA / CPRA i savezni/državni zakoni)
- **COPPA:** XMCL nije namijenjen djeci mlađoj od 13 godina. Svjesno ne prikupljamo osobne podatke djece mlađe od 13 godina. Roditelji ili skrbnici mogu se javiti na [cijhn@hotmail.com](mailto:cijhn@hotmail.com) radi žurnog brisanja.
- **CCPA / CPRA i zakoni saveznih država SAD-a:** XMCL **ne** prodaje niti dijeli osobne podatke za bihevioralno oglašavanje. Stanovnici Kalifornije, Virginije, Colorada, Connecticuta, Utaha, Teksasa, Oregona i drugih saveznih država s primjenjivim zakonima imaju pravo na informiranje, pristup, ispravak, brisanje i ostvarivanje tih prava bez diskriminacije.

### Ostale jurisdikcije
- Poštujemo odgovarajuća prava ispitanika prema primjenjivim lokalnim zakonima diljem svijeta (uključujući LGPD u Brazilu, APPI u Japanu, PIPA u Južnoj Koreji, PIPL u Kini, PDPA na Tajvanu, KVKK u Turskoj, DPDP Act u Indiji, UU PDP u Indoneziji, Uredbu 13 u Vijetnamu, propise Ukrajine te PDPL u Saudijskoj Arabiji i UAE).

---

## 6. Ostvarivanje vaših prava

Za ostvarivanje prava na pristup, ispravak, brisanje ili povlačenje privole obratite se voditelju obrade **CI010** putem e-pošte na **[cijhn@hotmail.com](mailto:cijhn@hotmail.com)**.

---

## 7. Mjerodavni jezik i odricanje od odgovornosti

- **Mjerodavni jezik:** Prijevodi ove obavijesti dostupni su radi lakšeg razumijevanja. U slučaju bilo kakvog neslaganja između prevedene verzije i verzije na engleskom jeziku, mjerodavna je verzija na engleskom jeziku u mjeri u kojoj to dopušta prisilno lokalno pravo.
- **Odricanje od odgovornosti (Minecraft i Mojang):** XMCL je neovisni softverski projekt otvorenog koda te nije povezan s društvima Microsoft Corporation ili Mojang Studios, niti ih ta društva ovlašćuju, sponzoriraju ili podržavaju.
