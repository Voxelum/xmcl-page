---
title: Pravila privatnosti XMCL Together
description: Kako XMCL Together obrađuje podatke o računima, naplati, AI značajkama i višeigračkim uslugama u skladu s GDPR-om, Zakonom o provedbi Opće uredbe o zaštiti podataka i međunarodnim propisima o zaštiti podataka.
---

# Pravila privatnosti XMCL Together

**Datum stupanja na snagu: 22. studenoga 2026. · Verzija: P4-2026-11-22**

Ova pravila objašnjavaju kako **CI010**, koji djeluje kao samostalni operater pod nazivima Voxelum i XMCL („XMCL Together”, „mi”, „nas”), obrađuje podatke kada koristite XMCL Together račun, plaćene usluge ili povezane mrežne značajke na [xmcl.app](https://xmcl.app). Ova pravila ne uređuju neovisne usluge koje sami odlučite povezati, poput usluga Microsoft, Mojang, poslužitelja za autentifikaciju trećih strana, Modrintha ili CurseForgea.

---

## 1. Podaci koje obrađujemo

### Mrežna stranica i telemetrija usluge Together
Stranice i usluge Together koriste Microsoft Azure Application Insights konfiguriran u **načinu rada bez kolačića** (`disableCookiesUsage: true`), smješten u regiji **Azure East Asia (Hong Kong)**, za bilježenje anonimnih pregleda stranica, radnji usluge, približnih mrežnih i uređajnih svojstava te dijagnostičkih događaja. Mrežna stranica pohranjuje samo jedan strogo nužan lokalni kolačić (`nf_lang`) za vaš odabir jezika. Telemetrija besplatnog pokretača otvorenog koda uređena je zasebno u [Obavijesti o privatnosti projekta otvorenog koda XMCL](../privacy).

### Korisnički računi i autentifikacija
Kada izradite ili koristite XMCL Together račun, obrađujemo identifikatore računa, identifikatore pružatelja autentifikacije, metapodatke sesije i tokena za osvježavanje, dodijeljene opsege dopuštenja (scopes), vremenske oznake i sigurnosnu telemetriju za sprječavanje ponovljenih napada (replay) i zlouporabe računa. **Nikada** ne primamo niti pohranjujemo vaše lozinke za Microsoft ili druge račune trećih strana.

### Naplata i pretplate
Obrađujemo stanja salda računa, podatke o valuti i cijenama, narudžbe, status pretplate, razdoblja kvota, ukupnu potrošnju, povrate sredstava, sporove, identifikatore idempotentnosti i revizijske zapise. **Waffo Pancake** izravno obrađuje podatke o platnim karticama i naplati. XMCL prima samo reference transakcija, status, iznos, valutu i potpisane webhook obavijesti te nikada ne prima niti pohranjuje pune brojeve kartica ili sigurnosne kodove (CVC/CVV).

### AI značajke
Ako pokrenete AI značajku, obrađujemo upit, sadržaj razgovora, odabrani model i kontekst pokretača koji odlučite poslati (poput naziva instance, verzija igre i učitavača, odabrane stranice ili lokalne putanje instance). Zahtjevi se prosljeđuju našim konfiguriranim pružateljima AI usluga, trenutačno **Agnes** i, prema potrebi, **DeepSeek**. Mjerimo broj tokena i ponderiranu potrošnju kvota radi naplate i sprječavanja zlouporabe. Vaše upite i izlaze ne koristimo za treniranje XMCL modela.

> **Napomena o vanjskim pružateljima AI usluga:** Vanjski pružatelji AI usluga (Agnes, DeepSeek) obrađuju sadržaj zahtjeva u skladu s vlastitim pravilima privatnosti i uvjetima korištenja. Integracije konfiguriramo tako da zatražimo način bez treniranja („no-training”) gdje je to podržano, no ne možemo jamčiti interne prakse obrade podataka vanjskih pružatelja API-ja. Nemojte u AI upite unositi osjetljive osobne podatke, lozinke ni povjerljive informacije.

### Višeigrački način, signalizacija i TURN (P2P povezivanje)
Značajke Together i RTC obrađuju identifikatore računa i sesija, metapodatke za usmjeravanje soba i ravnopravnih čvorova (peer), IP adrese, vremenske oznake, identifikatore TURN vjerodajnica te zbirnu potrošnju ulaznog i izlaznog prometa. **Cloudflare** osigurava rubnu mrežu, signalizaciju, TURN releje i infrastrukturu za analitiku prometa.

> **Privola za otkrivanje IP adrese u P2P vezi:** Izravno povezivanje među korisnicima (peer-to-peer) tehnički nužno otkriva vašu javnu IP adresu drugom sudioniku višeigračke sesije. Korištenjem P2P značajki izričito potvrđujete i pristajete na ovo tehničko otkrivanje podataka nužno za uspostavu izravne veze. XMCL signalizacija usmjerava isključivo metapodatke veze i ne snima glas, video niti sadržaj igranja Minecrafta.

### Podrška i komunikacija sa zajednicom
Ako nas kontaktirate, obrađujemo kontaktne podatke, reference računa ili transakcija, dijagnostiku i sadržaj poruke koju pošaljete. Nemojte slati lozinke, pristupne tokene, pune podatke o platnim karticama ni nepovezane osjetljive osobne podatke.

---

## 2. Svrhe i pravne osnove obrade

Podatke obrađujemo kako bismo:
- pružili, autentificirali, zaštitili i otklanjali greške u uslugama XMCL Together;
- upravljali pretplatama, saldom, kvotama, plaćanjima, povratima sredstava i korisničkom podrškom;
- usmjeravali višeigračke veze i mjerili potrošnju TURN prometa;
- generirali zatražene AI odgovore i mjerili potrošnju AI kvota;
- spriječili prijevare, replay napade, zlouporabe i sigurnosne incidente;
- ispunili računovodstvene, porezne, platno-mrežne, zakonske i obveze u vezi sa sporovima.

**Pravne osnove (GDPR / Zakon o provedbi Opće uredbe o zaštiti podataka / UK GDPR / međunarodni propisi):**
- **Izvršavanje ugovora (čl. 6. st. 1. t. (b) GDPR-a):** pružanje korisničkih računa, pretplata, AI i višeigračkih usluga koje zatražite;
- **Poštovanje pravnih obveza (čl. 6. st. 1. t. (c) GDPR-a):** čuvanje financijskih, poreznih i revizijskih zapisa o plaćanjima;
- **Legitimni interesi (čl. 6. st. 1. t. (f) GDPR-a):** zaštita infrastrukture, sprječavanje prijevara i zlouporabe te operativna dijagnostika bez kolačića;
- **Izričita privola (čl. 6. st. 1. t. (a) GDPR-a):** opcionalni AI upiti, otkrivanje IP adrese kod P2P povezivanja i prekogranični prijenosi kada je privola zakonski potrebna.

---

## 3. Izvršitelji obrade i međunarodni prijenos podataka

Dijelimo samo ono što je razumno nužno sa sljedećim pružateljima infrastrukture i usluga:

| Primatelj | Svrha i kategorije podataka | Regije obrade | Pravila privatnosti |
| :--- | :--- | :--- | :--- |
| **Waffo Pancake** | Naplata, provjera prijevara, povrati, webhook događaji (metapodaci transakcija i plaćanja) | Globalno / Sjedinjene Američke Države / Singapur | Dostupno pri naplati |
| **Cloudflare** | Workers, CDN, zaštita od DDoS-a, WebRTC signalizacija, TURN relej (IP, metapodaci sesije i prometa) | Globalna rubna mreža / Sjedinjene Američke Države | [Cloudflare Privacy](https://www.cloudflare.com/privacypolicy/) |
| **Microsoft Azure** | Hosting, pohrana baza podataka, Application Insights bez kolačića (podaci računa, naplate i dijagnostike) | Hong Kong (Istočna Azija), Sjedinjene Američke Države, EU | [Microsoft Privacy](https://privacy.microsoft.com/privacystatement) |
| **Vercel i GitHub** | Isporuka mrežne stranice, izdanja, podrška za prijave i sigurnost | Sjedinjene Američke Države / Globalna rubna mreža | [Vercel](https://vercel.com/legal/privacy-policy) / [GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Agnes i DeepSeek** | Generiranje AI odgovora (upiti, kontekst razgovora, parametri modela) | Globalno / Kina (NRK) / Sjedinjene Američke Države | Pravila pružatelja |

- **Zaštitne mjere pri prijenosu:** Prekogranični prijenosi izvan EGP-a, Ujedinjenog Kraljevstva ili Švicarske temelje se na Standardnim ugovornim klauzulama EU-a (SCC), britanskom IDTA/Dodatku, TLS šifriranju u prijenosu i strogom smanjenju količine podataka.
- **Posljedice odbijanja:** Pružanje podataka o računu, plaćanju i prekograničnom usmjeravanju nužno je za rad usluge XMCL Together. Ako odbijete takvu obradu ili prekogranični prijenos, i dalje možete koristiti besplatni izvanmrežni pokretač otvorenog koda XMCL, ali hostane značajke XMCL Together neće biti dostupne.
- **Zabrana prodaje podataka:** **Ne** prodajemo osobne podatke niti ih dijelimo za bihevioralno oglašavanje.

---

## 4. Rokovi pohrane podataka

Primjenjujemo stroge rokove čuvanja podataka:
- **Operativna telemetrija, mjerenja AI potrošnje i TURN mjerenja:** čuvaju se **najdulje 90 dana**, nakon čega se trajno brišu ili nepovratno anonimiziraju.
- **Podaci o računu i sesijama:** čuvaju se dok je račun aktivan te dodatnih **30 dana** nakon brisanja računa radi oporavka i rješavanja sporova.
- **Financijske knjižne stavke, zapisi plaćanja, povrati sredstava i revizijski zapisi:** čuvaju se **5 do 7 godina** radi ispunjavanja zakonskih računovodstvenih, poreznih i platno-mrežnih obveza, čak i nakon zatvaranja računa.
- Šifrirane sigurnosne kopije uklanjaju se redovitim ciklusima rotacije.

---

## 5. Vaši izbori i zakonska prava

### Opća prava, GDPR, Zakon o provedbi Opće uredbe o zaštiti podataka i međunarodna prava
Imate pravo:
- isključiti opcionalne mrežne značajke ili odspojiti usluge trećih strana;
- upravljati kolačićem `nf_lang` u postavkama svog preglednika;
- otkazati obnovu pretplate Together Home u bilo kojem trenutku putem sučelja svog računa (s učinkom od kraja tekućeg plaćenog razdoblja);
- zatražiti pristup, ispravak, brisanje („pravo na zaborav”), ograničenje obrade, prenosivost podataka ili uložiti prigovor na obradu;
- povući privolu u bilo kojem trenutku bez utjecaja na zakonitost prethodne obrade;
- podnijeti pritužbu nadležnom nadzornom tijelu za zaštitu osobnih podataka — u Republici Hrvatskoj to je **Agencija za zaštitu osobnih podataka (AZOP)** na [azop.hr](https://azop.hr) (odnosno drugo nadležno tijelo u EU-u, UK ICO na [ico.org.uk](https://ico.org.uk) ili lokalni regulator).

### Prava privatnosti u Kaliforniji i saveznim državama SAD-a (CCPA / CPRA)
XMCL **ne** prodaje osobne podatke niti ih dijeli za bihevioralno oglašavanje. Stanovnici Kalifornije i drugih saveznih država SAD-a s primjenjivim zakonima o privatnosti (VA, CO, CT, UT, TX, OR itd.) imaju pravo na informiranje, pristup, brisanje, ispravak netočnih podataka i ostvarivanje tih prava bez diskriminacije.

---

## 6. Sigurnost

Primjenjujemo ograničene sesije (scoped sessions), kontrolu pristupa s najmanjim nužnim ovlastima, TLS šifriranje u prijenosu, potpisane webhook obavijesti o plaćanjima, zaštitu od replay napada, izolaciju tajnih ključeva i kontinuirani nadzor. Nijedan mrežni sustav nije 100 % imun na rizik; sami ste odgovorni za zaštitu svog uređaja, sesija i vjerodajnica trećih strana.

---

## 7. Djeca i dobni uvjeti

- **Plaćene usluge i računi:** Za izradu XMCL Together računa i korištenje plaćenih značajki morate imati najmanje **18 godina** (ili biti punoljetni prema propisima svoje jurisdikcije) ili imati provjerljivu suglasnost roditelja odnosno zakonskog skrbnika.
- **Digitalna privola i COPPA:** U Republici Hrvatskoj dobna granica za digitalnu privolu prema **Zakonu o provedbi Opće uredbe o zaštiti podataka** iznosi **16 godina**. Svjesno ne prikupljamo osobne podatke djece mlađe od **13 godina** (SAD/UK) odnosno mlađe od primjenjive lokalne dobi za digitalnu privolu (16 godina u Hrvatskoj, 13–16 u EU-u, 18 prema indijskom zakonu DPDP) bez provjerljive privole roditelja ili skrbnika. Roditelji ili skrbnici mogu se javiti na [cijhn@hotmail.com](mailto:cijhn@hotmail.com) radi žurnog brisanja.

---

## 8. Izmjene, mjerodavni jezik i odricanje od odgovornosti

- **Izmjene:** Ažuriranja ćemo objaviti na ovoj stranici s novim datumom stupanja na snagu i oznakom verzije te ćemo pružiti prethodnu obavijest o bitnim izmjenama kada to zakon zahtijeva.
- **Mjerodavni jezik:** U slučaju bilo kakvog neslaganja između prevedene verzije i verzije na engleskom jeziku, mjerodavna je verzija na engleskom jeziku u mjeri u kojoj to dopušta prisilno lokalno pravo.
- **Odricanje od odgovornosti (Minecraft):** XMCL je neovisni projekt te nije povezan s društvima Microsoft Corporation ili Mojang Studios, niti ga ona sponzoriraju ili podržavaju.

---

## 9. Kontakt

**Operater / kontakt za zaštitu privatnosti (CI010):**
- Opći zahtjevi, naplata, povrati, pravni upiti i zahtjevi vezani uz privatnost: [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- Sigurnosne prijave: [GitHub privatna prijava ranjivosti](https://github.com/voxelum/x-minecraft-launcher/security)
- Podrška zajednice: [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

Navedite samo minimalnu referencu računa ili transakcije potrebnu za pronalazak vašeg zapisa. Prije ispunjenja zahtjeva možemo zatražiti potvrdu vlasništva nad računom.
