---
title: XMCL nyílt forráskódú projekt adatvédelmi tájékoztatója
description: Adatvédelmi tájékoztató az XMCL weboldalához és nyílt forráskódú indítójához, összhangban az EU GDPR-ral, a magyar Infotv.-vel (2011. évi CXII. törvény) és a nemzetközi adatvédelmi előírásokkal.
---

# XMCL nyílt forráskódú projekt adatvédelmi tájékoztatója

**Hatálybalépés dátuma: 2026. november 22. · Verzió: OP3-2026-11-22**

Jelen tájékoztató a nyilvános XMCL weboldalra ([xmcl.app](https://xmcl.app)) és az ingyenes, nyílt forráskódú XMCL indítóra vonatkozik. Nem terjed ki az XMCL Together által nyújtott fizetős funkciókra, fiókokra, számlázásra, AI-szolgáltatásokra vagy többjátékos jelző-/TURN-szolgáltatásokra, amelyekre külön az [XMCL Together adatvédelmi tájékoztatója](./together/privacy) irányadó.

---

## 1. Adatkezelő és elérhetőségek

Az XMCL egy független nyílt forráskódú projekt, amelyet a **CI010** és a Voxelum közreműködői közösség üzemeltet.
- **Adatvédelmi és jogi megkeresések:** [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- **Forráskód-tárhely:** [github.com/voxelum/x-minecraft-launcher](https://github.com/voxelum/x-minecraft-launcher)
- **Biztonsági sérülékenységek bejelentése:** [GitHub Security Advisories](https://github.com/voxelum/x-minecraft-launcher/security)
- **Közösségi támogatás:** [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

---

## 2. Kezelt adatok és adattakarékosság

Az XMCL szigorúan alkalmazza az adattakarékosság elvét:

### Nyilvános weboldal (xmcl.app)
- **Süti nélküli, aggregált analitika:** A Microsoft Azure Application Insights szolgáltatást **süti nélküli módban** (`disableCookiesUsage: true`) használjuk, a **Microsoft Azure East Asia (Hongkong)** régióban történő adatbefogadással, anonim oldalmegtekintések, letöltési választások, általános hálózati/eszközjellemzők és böngésző User-Agent adatok rögzítésére. Eszközödön nem helyezünk el analitikai vagy webhelyközi követősütiket.
- **Feltétlenül szükséges süti:** Kizárólag egyetlen helyi, működéshez elengedhetetlen sütit (`nf_lang`) tárolunk a választott felületi nyelv megjegyzéséhez. Nem használunk harmadik féltől származó marketing-, hirdetési vagy viselkedéskövető sütiket.

### Nyílt forráskódú indító
- **Választható (opt-in) telemetria és diagnosztika:** A diagnosztikai telemetria **alapértelmezés szerint ki van kapcsolva**. Csak abban az esetben, ha kifejezetten bekapcsolod a telemetriát az indító beállításaiban (opt-in), kezelhet az indító:
  - véletlenszerűen generált, álnevesített telepítési/eszközazonosítót;
  - alkalmazás-életciklus eseményeket (játék indítása, normál/hibás kilépési kódok, alkalmazásverzió);
  - hitelesítési szolgáltató típusát (pl. Microsoft vagy offline hitelesítés azonosítója);
  - alapvető futtatókörnyezeti jellemzőket (operációs rendszer, Java futtatókörnyezet verziója, CPU-architektúra);
  - hibák összeomlási naplóit és veremkivonatait (stack trace).
- **Adattisztítás és hitelesítő adatok:** Az összeomlási diagnosztikából a lehetőségekhez mérten eltávolítjuk az érzékeny fájlelérési utakat, felhasználóneveket és rendszertokeneket. Soha **nem** kezeljük és nem tároljuk a Microsoft-/Mojang-fiókod jelszavait, hitelesítő adatait vagy munkamenet-tokenjeit.

---

## 3. Adatmegőrzési időtartam

Kerüljük a határozatlan idejű adatmegőrzést:
- Minden telemetriai naplót, diagnosztikai hibarekordot és teljesítménymutatót **legfeljebb 90 napig** őrzünk meg, ezt követően véglegesen töröljük vagy visszafordíthatatlanul anonimizáljuk.
- A GitHub nyilvános hibakövetőjében tett bejelentések a GitHub platformszabályzatának és a tárhely kezelési elveinek megfelelően maradnak elérhetők lezárásukig vagy törlésükig.

---

## 4. Adatfeldolgozók és nemzetközi adattovábbítás

Az XMCL globális infrastruktúra-szolgáltatókat vesz igénybe a letöltések, a weboldal és az opcionális diagnosztika biztosításához:

| Szolgáltató | Szerepkör és kezelt adatok | Adatfeldolgozási régiók | Adatvédelmi tájékoztató |
| :--- | :--- | :--- | :--- |
| **Microsoft Azure (Application Insights)** | Süti nélküli webanalitika, opcionális indító-diagnosztika | Hongkong (Kelet-Ázsia), Egyesült Államok, EU | [Microsoft adatvédelem](https://privacy.microsoft.com/privacystatement) |
| **Cloudflare** | CDN, peremhálózati irányítás, DDoS-védelem | Globális peremhálózat / Egyesült Államok | [Cloudflare adatvédelem](https://www.cloudflare.com/privacypolicy/) |
| **GitHub** | Forráskód-tárhely, kiadások, hibakövető | Egyesült Államok | [GitHub adatvédelem](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Vercel** | Weboldal hosztolása és kiszolgálása | Egyesült Államok / Globális peremhálózat | [Vercel adatvédelem](https://vercel.com/legal/privacy-policy) |

- **Adattovábbítási garanciák:** Amikor technikai adatok az EGT-n, az Egyesült Királyságon vagy Svájcon kívülre kerülnek továbbításra, az Európai Bizottság által jóváhagyott általános szerződési feltételekre (SCC), a brit IDTA/Addendumra és az ezekkel egyenértékű jogszabályi garanciákra támaszkodunk.
- **Tiltakozás / megtagadás joga:** Az indító diagnosztikai adatainak határokon átnyúló továbbítását egyszerűen megtagadhatod azzal, hogy a telemetriát kikapcsolva (alapértelmezett állapotban) hagyod.
- **Adatok értékesítésének tilalma:** Soha nem értékesítünk személyes adatokat, és nem osztjuk meg azokat kontextusokon átívelő viselkedésalapú hirdetés céljából.

---

## 5. Régióspecifikus rendelkezések és jogi garanciák

### Magyarország és Európai Unió / EGT (GDPR és Infotv.)
- **Alkalmazandó jogszabályok:** Az Európai Parlament és a Tanács (EU) 2016/679 rendelete (**GDPR**), valamint az információs önrendelkezési jogról és az információszabadságról szóló **2011. évi CXII. törvény (Infotv.)**.
- **Jogalapok:** Hozzájárulás (GDPR 6. cikk (1) bekezdés a) pont) az opcionális diagnosztikai telemetriához; jogos érdek (GDPR 6. cikk (1) bekezdés f) pont) az infrastruktúra biztonsága, elérhetősége és a süti nélküli aggregált analitika érdekében.
- **Digitális beleegyezési korhatár:** Magyarországon a GDPR 8. cikke és az Infotv. alapján a digitális hozzájárulás korhatára **16 év** (más EU-tagállamokban a helyi jogszabály szerint 13–16 év). A 16. életévüket be nem töltött kiskorúak esetén a törvényes képviselő hozzájárulása szükséges.
- **Érintetti jogok:** A GDPR 15–22. cikkei és az Infotv. alapján jogosult vagy tájékoztatást és hozzáférést kérni, az adatok helyesbítését, törlését („elfeledtetéshez való jog”), az adatkezelés korlátozását kérni, adathordozhatósággal élni, tiltakozni az adatkezelés ellen, valamint hozzájárulásodat bármikor visszavonni.
- **Felügyeleti hatóság (Magyarország):** Panasszal élhetsz a **Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH)** a [https://www.naih.hu](https://www.naih.hu) weboldalon, illetve bírósághoz fordulhatsz az Infotv. rendelkezései szerint.

### Egyesült Királyság (UK GDPR és DPA 2018)
- A UK GDPR és a Data Protection Act 2018 hatálya alá tartozik. Digitális beleegyezési korhatár: **13 év**. Felügyeleti hatóság: UK Information Commissioner’s Office (ICO), [ico.org.uk](https://ico.org.uk).

### Egyesült Államok (COPPA, CCPA / CPRA és állami törvények)
- **COPPA:** Az XMCL nem 13 év alatti gyermekeknek szól, és tudatosan nem gyűjtünk személyes adatokat 13 év alatti gyermekektől. Szülők vagy gyámok a [cijhn@hotmail.com](mailto:cijhn@hotmail.com) címen kérhetik a haladéktalan törlést.
- **CCPA / CPRA és amerikai állami törvények:** Az XMCL **nem** értékesít személyes adatokat, és nem osztja meg azokat viselkedésalapú hirdetés céljából. Kalifornia és más érintett államok lakosai jogosultak megismerni, lekérni, helyesbíteni és töröltetni adataikat hátrányos megkülönböztetés nélkül.

### Egyéb joghatóságok
- Világszerte tiszteletben tartjuk az alkalmazandó helyi adatvédelmi jogszabályok (pl. Brazília LGPD, Japán APPI, Dél-Korea PIPA, Kína PIPL, Tajvan PDPA, Törökország KVKK, India DPDP Act, Indonézia UU PDP, Vietnám 13. rendelet, Ukrajna, Szaúd-Arábia/EAE PDPL) szerinti egyenértékű érintetti jogokat.

---

## 6. Jogok gyakorlása

Hozzáférési, helyesbítési, törlési vagy hozzájárulás-visszavonási kérelmeddel fordulj a **CI010**-hez a **[cijhn@hotmail.com](mailto:cijhn@hotmail.com)** e-mail-címen.

---

## 7. Irányadó nyelv és jogi nyilatkozat

- **Irányadó nyelv:** A jelen tájékoztató fordításai a kényelmesebb tájékozódást szolgálják. A fordított változat és az angol nyelvű változat közötti bármilyen eltérés esetén – a kötelező érvényű helyi jogszabályok által megengedett mértékben – az angol nyelvű változat az irányadó.
- **Minecraft és Mojang jogi nyilatkozat:** Az XMCL egy független nyílt forráskódú szoftverprojekt, amely nem áll kapcsolatban a Microsoft Corporationnel vagy a Mojang Studios-szal, és nem élvezi azok jóváhagyását vagy támogatását.
