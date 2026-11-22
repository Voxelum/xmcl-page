---
title: XMCL Together adatvédelmi tájékoztató
description: Hogyan kezeli az XMCL Together a fiók-, számlázási, AI- és többjátékos szolgáltatási adatokat a magyar Infotv., az EU GDPR és a nemzetközi adatvédelmi jogszabályok szerint.
---

# XMCL Together adatvédelmi tájékoztató

**Hatálybalépés dátuma: 2026. november 22. · Verzió: P4-2026-11-22**

Jelen tájékoztató ismerteti, hogyan kezeli a **CI010** – mint a Voxelum és az XMCL név alatt eljáró egyéni üzemeltető („XMCL Together”, „mi”, „minket”) – az adatokat, amikor XMCL Together-fiókot, fizetős szolgáltatásokat vagy kapcsolódó online funkciókat használsz a [xmcl.app](https://xmcl.app) oldalon. Nem vonatkozik az általad csatlakoztatott független szolgáltatásokra, például a Microsoftra, a Mojangra, harmadik féltől származó hitelesítési szerverekre, a Modrinthra vagy a CurseForge-ra.

---

## 1. Kezelt adatok köre

### Together weboldal és szolgáltatási telemetria
A Together oldalai és szolgáltatásai a Microsoft Azure Application Insights rendszert **süti nélküli módban** (`disableCookiesUsage: true`), az **Azure East Asia (Hongkong)** régióban hosztolva használják anonim oldalmegtekintések, szolgáltatási műveletek, hozzávetőleges hálózati/eszközjellemzők és diagnosztikai események rögzítésére. A weboldal kizárólag egyetlen, működéshez elengedhetetlen helyi sütit (`nf_lang`) tárol a nyelvi beállításodhoz. Az ingyenes, nyílt forráskódú indító telemetriájára külön az [XMCL nyílt forráskódú projekt adatvédelmi tájékoztatója](../privacy) vonatkozik.

### Fiókok és hitelesítés
XMCL Together-fiók létrehozásakor vagy használatakor kezeljük a fiókazonosítókat, a hitelesítési szolgáltató azonosítóit, a munkamenet- és frissítési tokenek metaadatait, a megadott jogosultsági köröket (scopes), időbélyegeket, valamint a visszajátszási támadások (replay) és fiókvisszaélések megelőzéséhez szükséges biztonsági telemetriát. Soha **nem** kapjuk meg és nem tároljuk a Microsoft- vagy más harmadik féltől származó fiókod jelszavait.

### Számlázás és előfizetések
Kezeljük a fiókegyenleget, a pénznem- és díjszabási adatokat, a megrendeléseket, az előfizetés állapotát, a keretidőszakokat, a felhasználási összesítéseket, a visszatérítéseket, a vitás ügyeket, az idempotencia-azonosítókat és a könyvvizsgálati naplókat. A bankkártya- és fizetési adatokat közvetlenül a **Waffo Pancake** kezeli. Az XMCL kizárólag tranzakciós hivatkozásokat, állapotot, összeget, pénznemet és aláírt webhook-eseményeket kap; teljes kártyaszámokat vagy biztonsági kódokat (CVC/CVV) soha nem kap meg és nem tárol.

### AI-funkciók
Ha AI-funkciót indítasz, kezeljük az általad megadott promptot, a beszélgetés tartalmát, a kiválasztott modellt és az általad megosztott indító-kontextust (például a példány nevét, a játék- és betöltőverziókat, a kiválasztott oldalt vagy a helyi példány elérési útját). A kéréseket a konfigurált AI-szolgáltatóinknak továbbítjuk, amelyek jelenleg az **Agnes** és szükség esetén a **DeepSeek**. Számlázás és visszaélés-megelőzés céljából mérjük a tokenszámot és a súlyozott keretfelhasználást. Promptjaidat és a válaszokat nem használjuk fel saját XMCL-modell tanítására.

> **Harmadik féltől származó AI-szolgáltatókra vonatkozó nyilatkozat:** A külső AI-szolgáltatók (Agnes, DeepSeek) a kérések tartalmát saját adatvédelmi tájékoztatójuk és feltételeik szerint kezelik. Integrációinkat úgy állítjuk be, hogy ahol támogatott, „tanításmentes” (no-training) módot kérjenek, de nem tudjuk garantálni a külső API-szolgáltatók belső adatkezelési gyakorlatát. Ne adj meg érzékeny személyes adatokat, jelszavakat vagy bizalmas információkat az AI-promptokban.

### Többjátékos mód, jelzés (signaling) és TURN (P2P kapcsolat)
A Together és az RTC-funkciók fiók- és munkamenet-azonosítókat, szoba-/peer-irányítási metaadatokat, IP-címeket, időbélyegeket, TURN-hitelesítő azonosítókat és összesített bejövő/kimenő forgalmi adatokat kezelnek. A peremhálózati, jelzési, TURN- és forgalomanalitikai infrastruktúrát a **Cloudflare** biztosítja.

> **Hozzájárulás P2P IP-cím felfedéséhez:** A peer-to-peer (P2P) kapcsolat természeténél fogva felfedi a nyilvános IP-címedet a többjátékos munkamenet másik résztvevője előtt. A P2P-funkciók használatával kifejezetten tudomásul veszed és hozzájárulsz ehhez a közvetlen kapcsolat létrehozásához szükséges technikai adattovábbításhoz. Az XMCL jelzőrendszere kizárólag kapcsolati metaadatokat továbbít, és nem rögzít Minecraft hang-, videó- vagy játéktartalmat.

### Ügyfélszolgálat és közösségi kommunikáció
Ha kapcsolatba lépsz velünk, kezeljük az általad megadott elérhetőségi adatokat, fiók- vagy tranzakciós hivatkozásokat, diagnosztikai adatokat és az üzenet tartalmát. Ne küldj jelszavakat, hozzáférési tokeneket, teljes bankkártyaadatokat vagy nem kapcsolódó különleges személyes adatokat.

---

## 2. Adatkezelés céljai és jogalapjai

Az adatokat az alábbi célokból kezeljük:
- az XMCL Together szolgáltatások nyújtása, hitelesítése, biztonságának fenntartása és hibaelhárítása;
- előfizetések, egyenlegek, keretek, befizetések, visszatérítések és ügyfélszolgálat működtetése;
- többjátékos kapcsolatok irányítása és TURN sávszélesség-használat mérése;
- a kért AI-válaszok előállítása és az AI-keretek mérése;
- csalások, visszajátszási támadások, visszaélések és biztonsági incidensek megelőzése;
- számviteli, adózási, fizetési hálózati, jogi és vitarendezési kötelezettségek teljesítése.

**Jogalapok (GDPR / Infotv. / UK GDPR / LGPD / nemzetközi jog):**
- **Szerződés teljesítése (GDPR 6. cikk (1) bekezdés b) pont):** az általad igényelt fiókok, előfizetések, AI- és többjátékos szolgáltatások nyújtása;
- **Jogi kötelezettség teljesítése (GDPR 6. cikk (1) bekezdés c) pont):** pénzügyi, adózási és fizetési ellenőrzési nyilvántartások megőrzése;
- **Jogos érdek (GDPR 6. cikk (1) bekezdés f) pont):** az infrastruktúra védelme, csalás/visszaélés megelőzése és süti nélküli üzemeltetési diagnosztika;
- **Kifejezett hozzájárulás (GDPR 6. cikk (1) bekezdés a) pont):** opcionális AI-promptok, P2P IP-cím felfedése, valamint határokon átnyúló adattovábbítás, ahol azt jogszabály hozzájáruláshoz köti.

---

## 3. Adatfeldolgozók és nemzetközi adattovábbítás

Kizárólag a feltétlenül szükséges adatokat osztjuk meg az alábbi infrastruktúra- és szolgáltatópartnerekkel:

| Címzett | Cél és adatkategóriák | Adatfeldolgozási régiók | Adatvédelmi tájékoztató |
| :--- | :--- | :--- | :--- |
| **Waffo Pancake** | Fizetési felület, csalásszűrés, visszatérítések, webhook-események (tranzakciós és fizetési metaadatok) | Globális / Egyesült Államok / Szingapúr | A fizetéskor elérhető |
| **Cloudflare** | Workers, CDN, DDoS-védelem, WebRTC jelzés, TURN relay (IP-, munkamenet- és forgalmi metaadatok) | Globális peremhálózat / Egyesült Államok | [Cloudflare adatvédelem](https://www.cloudflare.com/privacypolicy/) |
| **Microsoft Azure** | Hosztolás, adatbázis-tárolás, süti nélküli Application Insights (fiók-, számlázási és diagnosztikai adatok) | Hongkong (Kelet-Ázsia), Egyesült Államok, EU | [Microsoft adatvédelem](https://privacy.microsoft.com/privacystatement) |
| **Vercel és GitHub** | Weboldal kiszolgálása, kiadások, hibajegy- és biztonsági támogatás | Egyesült Államok / Globális peremhálózat | [Vercel](https://vercel.com/legal/privacy-policy) / [GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Agnes és DeepSeek** | AI-válaszok generálása (promptok, beszélgetési kontextus, modellparaméterek) | Globális / Kína (KNK) / Egyesült Államok | Szolgáltatói szabályzatok |

- **Adattovábbítási garanciák:** Az EGT-n, az Egyesült Királyságon vagy Svájcon kívülre történő adattovábbítás az EU általános szerződési feltételein (SCC), a brit IDTA/Addendumon, átvitel közbeni TLS-titkosításon és szigorú adattakarékosságon alapul.
- **Az adatszolgáltatás megtagadásának következményei:** A fiók-, fizetési és határokon átnyúló irányítási adatok megadása szükséges az XMCL Together működtetéséhez. Ha megtagadod ezt az adatkezelést vagy adattovábbítást, továbbra is használhatod az ingyenes, offline/nyílt forráskódú XMCL indítót, de a hosztolt XMCL Together funkciók nem lesznek elérhetők.
- **Adatok értékesítésének tilalma:** **Nem** értékesítünk személyes adatokat, és nem osztjuk meg azokat kontextusokon átívelő viselkedésalapú hirdetés céljából.

---

## 4. Adatmegőrzési időtartamok

Szigorú megőrzési határidőket alkalmazunk:
- **Üzemeltetési telemetria, AI-használati metrikák és TURN-mérések:** **legfeljebb 90 napig** őrizzük meg, ezt követően véglegesen töröljük vagy visszafordíthatatlanul anonimizáljuk.
- **Fiók- és munkamenetadatok:** a fiók aktív fennállása alatt, majd a fiók törlését követően további **30 napig** őrizzük meg helyreállítás és vitarendezés céljából.
- **Pénzügyi főkönyvi bejegyzések, fizetési események, visszatérítések és könyvvizsgálati naplók:** **5–7 évig** (a magyar számviteli és adójogi előírások szerint szükség esetén az előírt törvényes határidőig) őrizzük meg a számviteli, adózási és fizetési hálózati kötelezettségek teljesítése érdekében, a fiók megszüntetése után is.
- A titkosított biztonsági mentések a szokásos rotációs ütemezés szerint törlődnek.

---

## 5. Választási lehetőségeid és érintetti jogaid

### Magyarország, EU GDPR, Infotv., UK GDPR és nemzetközi jogok
Jogosult vagy:
- kikapcsolni az opcionális online funkciókat vagy leválasztani a harmadik féltől származó szolgáltatásokat;
- kezelni az `nf_lang` sütit a böngésződben;
- bármikor lemondani a Together Home megújulását a fiókfelületen (az aktuális kifizetett időszak végével lép hatályba);
- a GDPR 15–22. cikkei és a **2011. évi CXII. törvény (Infotv.)** alapján hozzáférést, helyesbítést, törlést („elfeledtetéshez való jog”), korlátozást, adathordozhatóságot kérni, vagy tiltakozni az adatkezelés ellen;
- hozzájárulásodat bármikor visszavonni, ami nem érinti a visszavonás előtti jogszerű adatkezelést;
- panaszt tenni a nemzeti adatvédelmi felügyeleti hatóságnál – Magyarországon a **Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH)** ([https://www.naih.hu](https://www.naih.hu)), az Egyesült Királyságban a UK ICO-nál ([ico.org.uk](https://ico.org.uk)), illetve más országokban az illetékes hatóságnál –, továbbá bírósághoz fordulni.

### Kaliforniai és egyesült államokbeli állami adatvédelmi jogok (CCPA / CPRA)
Az XMCL **nem** értékesít személyes adatokat, és nem osztja meg azokat kontextusokon átívelő viselkedésalapú hirdetés céljából. Kalifornia és az alkalmazandó adatvédelmi törvényekkel rendelkező amerikai államok (VA, CO, CT, UT, TX, OR stb.) lakosai jogosultak adataik megismerésére, elérésére, törlésére és helyesbítésére hátrányos megkülönböztetés nélkül.

---

## 6. Adatbiztonság

Hatókörre korlátozott munkameneteket, a legkisebb jogosultság elvét, átvitel közbeni TLS-titkosítást, aláírt fizetési webhookokat, visszajátszás elleni védelmet, titokizolációt és folyamatos monitorozást alkalmazunk. Egyetlen online rendszer sem 100%-ban kockázatmentes; saját eszközöd, munkameneteid és harmadik féltől származó hitelesítő adataid védelme a te felelősséged.

---

## 7. Gyermekek és életkori követelmények

- **Fizetős szolgáltatások és fiókok:** Az XMCL Together-fiókokhoz és fizetős funkciókhoz legalább **18 évesnek** kell lenned (vagy el kell érned a joghatóságod szerinti nagykorúságot), illetve szülő vagy törvényes képviselő igazolható hozzájárulásával kell rendelkezned.
- **Digitális hozzájárulás és COPPA (USA):** Magyarországon a GDPR 8. cikke és az Infotv. alapján a digitális beleegyezési korhatár **16 év** (USA/Egyesült Királyság: 13 év; más EU-tagállamokban 13–16 év; India DPDP Act: 18 év). Tudatosan nem gyűjtünk személyes adatokat az alkalmazandó korhatár alatti gyermekektől igazolható szülői/törvényes képviselői hozzájárulás nélkül. Szülők vagy gyámok a [cijhn@hotmail.com](mailto:cijhn@hotmail.com) címen kérhetik az adatok azonnali törlését.

---

## 8. Módosítások, irányadó nyelv és jogi nyilatkozat

- **Módosítások:** A frissítéseket új hatálybalépési dátummal és verziószámmal itt tesszük közzé, lényeges változások esetén pedig a jogszabályok által megkövetelt előzetes értesítést biztosítunk.
- **Irányadó nyelv:** A fordított változat és az angol nyelvű változat közötti bármilyen eltérés esetén – a kötelező érvényű helyi jogszabályok által megengedett mértékben – az angol nyelvű változat az irányadó.
- **Minecraft jogi nyilatkozat:** Az XMCL független projekt, nem áll kapcsolatban a Microsoft Corporationnel vagy a Mojang Studios-szal, és nem élvezi azok támogatását vagy jóváhagyását.

---

## 9. Kapcsolat

**Üzemeltető / Adatvédelmi kapcsolattartó (CI010):**
- Általános, számlázási, visszatérítési, jogi és adatvédelmi kérelmek: [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- Biztonsági jelentések: [GitHub privát sérülékenység-bejelentés](https://github.com/voxelum/x-minecraft-launcher/security)
- Közösségi támogatás: [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

Kérjük, csak az ügyed azonosításához feltétlenül szükséges fiók- vagy tranzakciós hivatkozást add meg. A kérelem teljesítése előtt kérhetjük a fiók tulajdonjogának igazolását.
