---
title: Pravilnik o zasebnosti XMCL Together
description: Kako XMCL Together obdeluje podatke o računih, obračunavanju, UI in večigralskih storitvah v skladu z EU GDPR, slovenskim ZVOP-2 in mednarodnimi zakoni o varstvu podatkov.
---

# Pravilnik o zasebnosti XMCL Together

**Datum začetka veljavnosti: 22. november 2026 · Različica: P4-2026-11-22**

Ta pravilnik pojasnjuje, kako **CI010**, ki deluje kot samostojni upravljavec pod imenoma Voxelum in XMCL (»XMCL Together«, »mi«, »nas«), obdeluje podatke, kadar uporabljate račun XMCL Together, plačljive storitve ali povezane spletne funkcije na naslovu [xmcl.app](https://xmcl.app). Ta pravilnik ne ureja neodvisnih storitev, ki se jih odločite povezati, kot so Microsoft, Mojang, strežniki za preverjanje pristnosti tretjih oseb, Modrinth ali CurseForge.

---

## 1. Podatki, ki jih obdelujemo

### Spletno mesto Together in telemetrija storitev
Strani in storitve Together uporabljajo Microsoft Azure Application Insights v **načinu brez piškotkov** (`disableCookiesUsage: true`), gostovan v regiji **Azure East Asia (Hongkong)**, za beleženje anonimnih ogledov strani, dejanj v storitvi, približnih atributov omrežja/naprave in diagnostičnih dogodkov. Spletno mesto shranjuje samo en nujno potreben lokalni piškotek (`nf_lang`) za vašo izbiro jezika. Telemetrijo brezplačnega odprtokodnega zaganjalnika ločeno ureja [Obvestilo o zasebnosti odprtokodnega projekta XMCL](../privacy).

### Računi in preverjanje pristnosti
Ko ustvarite ali uporabljate račun XMCL Together, obdelujemo identifikatorje računa, identifikatorje ponudnika preverjanja pristnosti, metapodatke sejnih in osvežitvenih žetonov, dodeljene obsege dovoljenj (scopes), časovne žige in varnostno telemetrijo za preprečevanje ponovitvenih napadov (replay) ali zlorabe računa. Vaših gesel za Microsoft ali druge račune tretjih oseb **nikoli** ne prejmemo in ne shranjujemo.

### Obračunavanje in naročnine
Obdelujemo stanja dobroimetja na računu, podatke o valuti in tarifah, naročila, stanje naročnin, obdobja kvot, skupne porabe, vračila, spore, identifikatorje idempotentnosti in revizijske zapise. Podatke o plačilnih karticah in blagajni neposredno obdeluje **Waffo Pancake**. XMCL prejme le sklice transakcij, stanje, znesek, valuto in podpisane spletne kljuke (webhooke) ter nikoli ne prejme ali shrani celotnih številk kartic ali varnostnih kod (CVC/CVV).

### Funkcije umetne inteligence (UI)
Če uporabite funkcijo UI, obdelujemo poziv (prompt), vsebino pogovora, izbrani model in kontekst zaganjalnika, ki ga sami posredujete (na primer ime primerka, različici igre in nalagalnika, izbrano stran ali lokalno pot primerka). Zahteve se posredujejo našim nastavljenim ponudnikom UI, trenutno **Agnes** in po potrebi **DeepSeek**. Za obračunavanje in preprečevanje zlorab merimo število žetonov in uteženo porabo kvote. Vaših pozivov ali rezultatov ne uporabljamo za učenje lastnega modela XMCL.

> **Opozorilo glede zunanjih ponudnikov UI:** Zunanji ponudniki UI (Agnes, DeepSeek) obdelujejo vsebino zahtev v skladu s svojimi pravilniki o zasebnosti in pogoji uporabe. Integracije nastavljamo tako, da zahtevajo način »brez učenja« (no-training), kjer je to podprto, vendar ne moremo jamčiti za notranje prakse ravnanja s podatki zunanjih ponudnikov API. V pozive UI ne vnašajte občutljivih osebnih podatkov, gesel ali zaupnih informacij.

### Večigralstvo, signalizacija in TURN (povezljivost P2P)
Funkcije Together in RTC obdelujejo identifikatorje računa in seje, metapodatke za usmerjanje sob/vrstnikov, naslove IP, časovne žige, identifikatorje poverilnic TURN ter skupno porabo dohodnega/odhodnega prometa. Infrastrukturo za robno omrežje, signalizacijo, TURN in analitiko prometa zagotavlja **Cloudflare**.

> **Privolitev za razkritje naslova IP pri P2P:** Povezljivost med enakovrednimi uporabniki (peer-to-peer) po svoji tehnični naravi razkrije vaš javni naslov IP drugemu udeležencu v večigralski seji. Z uporabo funkcij P2P se izrecno strinjate in privolite v to tehnično razkritje podatkov, ki je potrebno za vzpostavitev neposredne povezave. Signalizacija XMCL usmerja izključno metapodatke povezave ter ne snema glasovne, video ali igralne vsebine Minecrafta.

### Podpora in komunikacija skupnosti
Če stopite v stik z nami, obdelujemo kontaktne podatke, sklice računa ali transakcij, diagnostiko in vsebino sporočila, ki nam ga pošljete. Ne pošiljajte gesel, dostopnih žetonov, celotnih podatkov o plačilnih karticah ali nepovezanih občutljivih osebnih podatkov.

---

## 2. Nameni in pravne podlage obdelave

Podatke obdelujemo za:
- zagotavljanje, preverjanje pristnosti, varovanje in odpravljanje težav storitev XMCL Together;
- upravljanje naročnin, dobroimetja, kvot, plačil, vračil in podpore uporabnikom;
- usmerjanje večigralskih povezav in merjenje porabe pasovne širine TURN;
- ustvarjanje zahtevanih odgovorov UI in merjenje kvot UI;
- preprečevanje goljufij, ponovitvenih napadov, zlorab in varnostnih incidentov;
- izpolnjevanje računovodskih, davčnih, plačilno-omrežnih, zakonskih in sporovnih obveznosti.

**Pravne podlage (GDPR / slovenski ZVOP-2 / UK GDPR / LGPD / mednarodno pravo):**
- **Izvajanje pogodbe (člen 6(1)(b) GDPR):** zagotavljanje računov, naročnin, UI in večigralskih storitev, ki jih zahtevate;
- **Zakonska obveznost (člen 6(1)(c) GDPR):** hramba finančnih, davčnih in plačilnih revizijskih zapisov;
- **Zakoniti interesi (člen 6(1)(f) GDPR):** varovanje infrastrukture, preprečevanje goljufij/zlorab in operativna diagnostika brez piškotkov;
- **Izrecna privolitev (člen 6(1)(a) GDPR):** izbirni pozivi UI, razkritje naslova IP pri P2P in čezmejni prenosi, kjer zakon zahteva privolitev.

---

## 3. Podizvajalci obdelave in mednarodni prenosi podatkov

Z naslednjimi ponudniki infrastrukture in storitev delimo le tisto, kar je razumno potrebno:

| Prejemnik | Namen in kategorije podatkov | Regije obdelave | Pravilnik o zasebnosti |
| :--- | :--- | :--- | :--- |
| **Waffo Pancake** | Plačilna blagajna, pregled goljufij, vračila, dogodki webhook (metapodatki transakcij in plačil) | Globalno / Združene države Amerike / Singapur | Na voljo na blagajni |
| **Cloudflare** | Workers, CDN, zaščita pred DDoS, signalizacija WebRTC, posrednik TURN (IP, metapodatki sej in prometa) | Globalno robno omrežje / Združene države Amerike | [Cloudflare Privacy](https://www.cloudflare.com/privacypolicy/) |
| **Microsoft Azure** | Gostovanje, hramba podatkovnih baz, Application Insights brez piškotkov (podatki računa, obračunavanja in diagnostike) | Hongkong (Vzhodna Azija), Združene države Amerike, EU | [Microsoft Privacy](https://privacy.microsoft.com/privacystatement) |
| **Vercel in GitHub** | Dostava spletnega mesta, izdaje, podpora pri težavah in varnosti | Združene države Amerike / Globalno robno omrežje | [Vercel](https://vercel.com/legal/privacy-policy) / [GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Agnes in DeepSeek** | Generiranje odgovorov UI (pozivi, kontekst pogovora, parametri modela) | Globalno / Kitajska (LRK) / Združene države Amerike | Pravilniki ponudnikov |

- **Zaščitni ukrepi pri prenosu:** Čezmejni prenosi zunaj EGP, Združenega kraljestva ali Švice temeljijo na standardnih pogodbenih klavzulah EU (SCC), sporazumu UK IDTA/dodatku, šifriranju TLS med prenosom in strogem omejevanju obsega podatkov.
- **Posledice zavrnitve:** Zagotavljanje podatkov o računu, plačilih in čezmejnem usmerjanju je potrebno za delovanje storitve XMCL Together. Če takšno obdelavo ali čezmejni prenos zavrnete, lahko še vedno uporabljate brezplačni odprtokodni zaganjalnik XMCL brez povezave, vendar gostovane funkcije XMCL Together ne bodo na voljo.
- **Brez prodaje podatkov:** Osebnih podatkov **ne** prodajamo in jih ne delimo za medkontekstno vedenjsko oglaševanje.

---

## 4. Omejitve hrambe

Uveljavljamo stroge roke hrambe:
- **Operativna telemetrija, meritve porabe UI in meritve TURN:** hranijo se **največ 90 dni**, nato se trajno izbrišejo ali nepovratno anonimizirajo.
- **Podatki o računu in sejah:** hranijo se, dokler je račun aktiven, ter še **30 dni** po izbrisu računa za namen obnovitve in reševanja sporov.
- **Zapisi finančne knjige, plačilni dogodki, vračila in revizijski zapisi:** hranijo se **5 do 7 let** zaradi izpolnjevanja zakonskih računovodskih, davčnih in plačilno-omrežnih obveznosti, tudi po zaprtju računa.
- Šifrirane varnostne kopije se brišejo v okviru rednih ciklov kroženja.

---

## 5. Vaše izbire in zakonske pravice

### Splošne pravice po GDPR, slovenskem ZVOP-2, UK GDPR in mednarodnem pravu
Imate pravico, da:
- zavrnete izbirne spletne funkcije ali odklopite storitve tretjih oseb;
- upravljate piškotek `nf_lang` v svojem brskalniku;
- kadarkoli prekličete podaljševanje naročnine Together Home v vmesniku svojega računa (učinkuje ob koncu tekočega plačanega obdobja);
- zahtevate dostop, popravek, izbris (»pravica do pozabe«), omejitev obdelave, prenosljivost podatkov ali ugovarjate obdelavi (členi 15–22 GDPR in ZVOP-2);
- kadarkoli prekličete privolitev, ne da bi to vplivalo na zakonitost predhodne obdelave;
- vložite pritožbo pri pristojnem nadzornem organu za varstvo osebnih podatkov: v Republiki Sloveniji pri **Informacijskem pooblaščencu** ([https://www.ip-rs.si](https://www.ip-rs.si)), v Združenem kraljestvu pri UK ICO ([ico.org.uk](https://ico.org.uk)) ali pri drugem pristojnem nacionalnem organu.

### Pravice glede zasebnosti v Kaliforniji in zveznih državah ZDA (CCPA / CPRA)
XMCL **ne** prodaja in ne deli osebnih podatkov za medkontekstno vedenjsko oglaševanje. Prebivalci Kalifornije in drugih zveznih držav ZDA z veljavnimi zakoni o zasebnosti (VA, CO, CT, UT, TX, OR itd.) imajo pravico do seznanitve, dostopa, izbrisa, popravka netočnih podatkov in uveljavljanja teh pravic brez diskriminacije.

---

## 6. Varnost

Izvajamo omejene seje (scoped sessions), nadzor dostopa po načelu najmanjših pravic, šifriranje TLS med prenosom, podpisane plačilne spletne kljuke (webhooke), zaščito pred ponovitvenimi napadi, ločevanje skrivnosti in stalni nadzor. Noben spletni sistem ni 100 % imun na tveganja; sami ste odgovorni za varovanje svoje naprave, sej in poverilnic tretjih oseb.

---

## 7. Otroci in starostne zahteve

- **Plačljive storitve in računi:** Za ustvarjanje računa XMCL Together in uporabo plačljivih funkcij morate biti stari najmanj **18 let** (polnoletnost v Republiki Sloveniji oz. v vaši jurisdikciji) ali imeti preverljivo privolitev starša oziroma zakonitega zastopnika.
- **Digitalna privolitev (ZVOP-2 / GDPR / COPPA):** V Republiki Sloveniji znaša starostna meja za digitalno privolitev v skladu z 8. členom ZVOP-2 **15 let**. Zavestno ne zbiramo osebnih podatkov otrok, mlajših od **15 let** v Sloveniji (oz. mlajših od 13 let v ZDA/UK oziroma pod veljavno lokalno starostno mejo 14–16 let v EU/Ukrajini/Koreji/Kitajski ali 18 let po indijskem DPDP Act), brez preverljive privolitve staršev ali zakonitih zastopnikov. Starši ali skrbniki se lahko za hiter izbris obrnejo na [cijhn@hotmail.com](mailto:cijhn@hotmail.com).

---

## 8. Spremembe, merodajni jezik in omejitev odgovornosti

- **Spremembe:** Posodobitve bomo objavili na tej strani z novim datumom začetka veljavnosti in novo različico ter zagotovili predhodno obvestilo o bistvenih spremembah, kadar to zahteva zakon.
- **Merodajni jezik:** V primeru kakršnegakoli neskladja med prevedeno različico in angleško različico prevlada angleška različica v obsegu, ki ga dovoljujejo kogentni predpisi lokalne zakonodaje.
- **Izjava glede Minecraft:** XMCL je neodvisen projekt in ni povezan z družbama Microsoft Corporation ali Mojang Studios ter nima njunega sponzorstva ali odobritve.

---

## 9. Kontakt

**Upravljavec / kontakt za zasebnost (CI010):**
- Splošne, obračunske, vračilne, pravne in zasebnostne zahteve: [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- Varnostne prijave: [GitHub zasebno poročanje o ranljivostih](https://github.com/voxelum/x-minecraft-launcher/security)
- Podpora skupnosti: [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

Navedite le najmanjši potreben sklic računa ali transakcije za iskanje vašega zapisa. Pred izpolnitvijo zahteve vas lahko prosimo za potrditev lastništva računa.
