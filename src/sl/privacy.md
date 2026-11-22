---
title: Obvestilo o zasebnosti odprtokodnega projekta XMCL
description: Obvestilo o zasebnosti za spletno mesto XMCL in odprtokodni zaganjalnik, usklajeno z EU GDPR, slovenskim ZVOP-2 ter mednarodnimi standardi varstva podatkov.
---

# Obvestilo o zasebnosti odprtokodnega projekta XMCL

**Datum začetka veljavnosti: 22. november 2026 · Različica: OP3-2026-11-22**

To obvestilo zajema javno spletno mesto XMCL ([xmcl.app](https://xmcl.app)) ter brezplačni, odprtokodni zaganjalnik XMCL. Ne zajema plačljivih funkcij, računov, obračunavanja, storitev umetne inteligence (UI) ali večigralskih storitev signalizacije/TURN, ki jih zagotavlja XMCL Together; te so ločeno urejene v [Pravilniku o zasebnosti XMCL Together](./together/privacy).

---

## 1. Upravljavec podatkov in kontaktni podatki

XMCL je neodvisen odprtokodni projekt, ki ga upravlja **CI010** skupaj s skupnostjo prispevateljev Voxelum.
- **Vprašanja glede zasebnosti in pravnih zadev:** [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- **Repozitorij izvorne kode:** [github.com/voxelum/x-minecraft-launcher](https://github.com/voxelum/x-minecraft-launcher)
- **Prijava varnostnih ranljivosti:** [GitHub Security Advisories](https://github.com/voxelum/x-minecraft-launcher/security)
- **Podpora skupnosti:** [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

---

## 2. Obdelovani podatki in načelo najmanjšega obsega podatkov

XMCL strogo spoštuje načelo najmanjšega obsega podatkov:

### Javno spletno mesto (xmcl.app)
- **Združena analitika brez piškotkov:** Uporabljamo storitev Microsoft Azure Application Insights, nastavljeno v **načinu brez piškotkov** (`disableCookiesUsage: true`), z zbiranjem podatkov v regiji **Microsoft Azure East Asia (Hongkong)** za beleženje anonimnih ogledov strani, izbir prenosov, splošnih atributov omrežja/naprave in oznak brskalnika (user-agent). Na vašo napravo se ne nameščajo nobeni analitični piškotki ali piškotki za sledenje med spletnimi mesti.
- **Nujno potreben piškotek:** Shranjujemo samo en lokalni funkcionalni piškotek (`nf_lang`), ki je nujno potreben za pomnjenje vaše izbire jezika vmesnika. Ne uporabljamo trženjskih, oglaševalskih ali vedenjskih sledilnih piškotkov tretjih oseb.

### Odprtokodni zaganjalnik
- **Izbirna telemetrija in diagnostika (privzeto izklopljena):** Diagnostična telemetrija je **privzeto onemogočena**. Samo če v nastavitvah zaganjalnika izrecno omogočite telemetrijo (privolitev oz. opt-in), lahko zaganjalnik obdeluje:
  - naključno ustvarjen, psevdonimiziran identifikator namestitve/naprave;
  - dogodke življenjskega cikla aplikacije (zagon igre, običajne izhodne kode in kode napak, različica aplikacije);
  - vrsto ponudnika preverjanja pristnosti (npr. Microsoft ali identifikator preverjanja pristnosti brez povezave);
  - osnovne specifikacije izvajalnega okolja (operacijski sistem, različica izvajalnega okolja Java, arhitektura procesorja);
  - dnevnike sesutij in sledi sklada napak (stack traces).
- **Čiščenje podatkov in poverilnice:** Iz diagnostike sesutij se, kjer je to izvedljivo, odstranijo občutljive poti datotek, uporabniška imena in sistemski žetoni. Vaših gesel, poverilnic ali sejnih žetonov za račune Microsoft/Mojang **nikoli** ne obdelujemo in ne shranjujemo.

---

## 3. Hramba podatkov

Izogibamo se neomejenim rokom hrambe:
- Vsi telemetrijski dnevniki, diagnostični zapisi o napakah in meritve zmogljivosti se hranijo **največ 90 dni**, nato pa se trajno izbrišejo ali nepovratno anonimizirajo.
- Javne prijave težav v sledilniku GitHub ostanejo na voljo v skladu s pravilniki platforme GitHub in pravili upravljanja repozitorija, dokler niso rešene ali izbrisane.

---

## 4. Podizvajalci obdelave in mednarodni prenosi podatkov

XMCL uporablja globalne ponudnike infrastrukture za zagotavljanje prenosov, spletnih strani in izbirne diagnostike:

| Ponudnik | Vloga in obdelovani podatki | Regije obdelave | Pravilnik o zasebnosti |
| :--- | :--- | :--- | :--- |
| **Microsoft Azure (Application Insights)** | Spletna analitika brez piškotkov, izbirna diagnostika zaganjalnika | Hongkong (Vzhodna Azija), Združene države Amerike, EU | [Microsoft Privacy](https://privacy.microsoft.com/privacystatement) |
| **Cloudflare** | CDN, robno usmerjanje, zaščita pred napadi DDoS | Globalno robno omrežje / Združene države Amerike | [Cloudflare Privacy](https://www.cloudflare.com/privacypolicy/) |
| **GitHub** | Gostovanje izvorne kode, izdaje, sledilnik težav | Združene države Amerike | [GitHub Privacy](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Vercel** | Gostovanje in dostava spletnega mesta | Združene države Amerike / Globalno robno omrežje | [Vercel Privacy](https://vercel.com/legal/privacy-policy) |

- **Zaščitni ukrepi pri prenosu:** Kadar se tehnični podatki prenašajo zunaj EGP, Združenega kraljestva ali Švice, se opiramo na standardne pogodbene klavzule (SCC), ki jih je odobrila Evropska komisija, sporazum UK IDTA / dodatek ter enakovredne zakonske zaščitne ukrepe.
- **Pravica do zavrnitve:** Čezmejni prenos diagnostičnih podatkov zaganjalnika lahko zavrnete preprosto tako, da pustite telemetrijo onemogočeno (njeno privzeto stanje).
- **Brez prodaje podatkov:** Osebnih podatkov nikoli ne prodajamo in jih ne delimo za medkontekstno vedenjsko oglaševanje.

---

## 5. Regionalne določbe in zakonske pravice

### Slovenija in Evropska unija / EGP (GDPR in ZVOP-2)
- **Pravne podlage:** Privolitev (člen 6(1)(a) GDPR) za izbirno diagnostično telemetrijo; zakoniti interesi (člen 6(1)(f) GDPR) za varnost infrastrukture, razpoložljivost in združeno analitiko brez piškotkov. Obdelava poteka v skladu s Splošno uredbo o varstvu podatkov (GDPR) in slovenskim **Zakonom o varstvu osebnih podatkov (ZVOP-2)**.
- **Starost za digitalno privolitev:** V Republiki Sloveniji v skladu z 8. členom ZVOP-2 starostna meja za samostojno privolitev v zvezi s storitvami informacijske družbe znaša **15 let** (v drugih državah članicah EU med 13 in 16 let). Mladoletniki pod to starostjo potrebujejo privolitev starša ali zakonitega zastopnika.
- **Vaše pravice:** Na podlagi členov 15–22 GDPR in določb ZVOP-2 imate pravico do dostopa, popravka, izbrisa (»pravica do pozabe«), omejitve obdelave, prenosljivosti podatkov, ugovora, preklica privolitve kadarkoli ter pravico do vložitve pritožbe pri nadzornem organu.
- **Nadzorni organ v Sloveniji:** **Informacijski pooblaščenec Republike Slovenije** ([https://www.ip-rs.si](https://www.ip-rs.si)).

### Združeno kraljestvo (UK GDPR in DPA 2018)
- Ureja ga UK GDPR in Data Protection Act 2018. Starost za digitalno privolitev: **13 let**. Nadzorni organ: UK Information Commissioner’s Office (ICO) na [ico.org.uk](https://ico.org.uk).

### Združene države Amerike (COPPA, CCPA / CPRA in zvezni zakoni)
- **COPPA:** XMCL ni namenjen otrokom, mlajšim od 13 let. Od otrok, mlajših od 13 let, zavestno ne zbiramo osebnih podatkov. Starši ali skrbniki se lahko za hiter izbris obrnejo na [cijhn@hotmail.com](mailto:cijhn@hotmail.com).
- **CCPA / CPRA in zakoni zveznih držav ZDA:** XMCL **ne** prodaja in ne deli osebnih podatkov za medkontekstno vedenjsko oglaševanje. Prebivalci Kalifornije, Virginije, Kolorada, Connecticuta, Utaha, Teksasa, Oregona in drugih zveznih držav z veljavnimi zakoni o zasebnosti imajo pravico do seznanitve, dostopa, popravka, izbrisa ter uveljavljanja teh pravic brez diskriminacije.

### Druge jurisdikcije
- Spoštujemo enakovredne pravice posameznikov, na katere se nanašajo osebni podatki, v skladu z veljavno lokalno zakonodajo po vsem svetu (vključno z LGPD v Braziliji, APPI na Japonskem, PIPA v Južni Koreji, PIPL na Kitajskem, PDPA na Tajvanu, KVKK v Turčiji, DPDP Act v Indiji, UU PDP v Indoneziji, Uredbo 13 v Vietnamu, zakonodajo Ukrajine ter PDPL v Savdski Arabiji/ZAE).

---

## 6. Uveljavljanje vaših pravic

Za uveljavljanje pravice do dostopa, popravka, izbrisa ali preklica privolitve se obrnite na upravljavca **CI010** na naslov **[cijhn@hotmail.com](mailto:cijhn@hotmail.com)**.

---

## 7. Merodajni jezik in omejitev odgovornosti

- **Merodajni jezik:** Prevodi tega obvestila so na voljo za lažje razumevanje. V primeru kakršnegakoli neskladja med prevedeno različico in angleško različico prevlada angleška različica v obsegu, ki ga dovoljujejo kogentni predpisi lokalne zakonodaje.
- **Izjava glede Minecraft in Mojang:** XMCL je neodvisen odprtokodni programski projekt in ni povezan z družbama Microsoft Corporation ali Mojang Studios ter nima njunega dovoljenja, sponzorstva ali odobritve.
