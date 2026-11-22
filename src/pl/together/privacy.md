---
title: Polityka prywatności XMCL Together
description: W jaki sposób XMCL Together przetwarza dane konta, rozliczeń, funkcji AI oraz usług wieloosobowych zgodnie z RODO i międzynarodowymi przepisami o ochronie danych.
---

# Polityka prywatności XMCL Together

**Data wejścia w życie: 22 listopada 2026 r. · Wersja: P4-2026-11-22**

Niniejsza polityka wyjaśnia, w jaki sposób **CI010**, działający jako indywidualny operator pod nazwami Voxelum i XMCL („XMCL Together”, „my”), przetwarza informacje podczas korzystania przez użytkownika z konta XMCL Together, płatnych usług lub powiązanych funkcji online w serwisie [xmcl.app](https://xmcl.app). Nie reguluje ona niezależnych usług, które użytkownik zdecyduje się połączyć, takich jak Microsoft, Mojang, zewnętrzne serwery uwierzytelniania, Modrinth czy CurseForge.

---

## 1. Jakie informacje przetwarzamy

### Strona Together i telemetria usług
Strony i usługi Together korzystają z Microsoft Azure Application Insights skonfigurowanego w **trybie bez plików cookie** (`disableCookiesUsage: true`), hostowanego w **Azure East Asia (Hongkong)**, w celu rejestrowania anonimowych odsłon stron, działań w usłudze, przybliżonych atrybutów sieci/urządzenia oraz zdarzeń diagnostycznych. Strona przechowuje wyłącznie jeden ściśle niezbędny lokalny plik cookie (`nf_lang`) dla preferencji językowych. Telemetria bezpłatnego, otwartoźródłowego launchera podlega odrębnej [Informacji o prywatności projektu open source XMCL](../privacy).

### Konta i uwierzytelnianie
Gdy użytkownik zakłada lub używa konta XMCL Together, przetwarzamy identyfikatory konta, identyfikatory dostawców uwierzytelniania, metadane sesji i tokenów odświeżania (refresh token), przyznane zakresy uprawnień (scopes), znaczniki czasu oraz telemetrię bezpieczeństwa służącą zapobieganiu atakom typu replay lub nadużyciom konta. **Nigdy** nie otrzymujemy ani nie przechowujemy haseł do kont Microsoft ani innych kont podmiotów trzecich.

### Rozliczenia i subskrypcje
Przetwarzamy salda konta, informacje o walutach i kursach, zamówienia, status subskrypcji, okresy limitów, sumy zużycia, zwroty, spory, identyfikatory idempotencji oraz dzienniki audytu. **Waffo Pancake** przetwarza bezpośrednio dane kart płatniczych i procesu płatności (checkout). XMCL otrzymuje wyłącznie referencje transakcji, status, kwotę, walutę oraz podpisane zdarzenia webhook i nigdy nie otrzymuje ani nie przechowuje pełnych numerów kart ani kodów zabezpieczających (CVC/CVV).

### Funkcje sztucznej inteligencji (AI)
Gdy użytkownik korzysta z funkcji AI, przetwarzamy zapytanie (prompt), treść konwersacji, wybrany model oraz kontekst launchera udostępniony przez użytkownika (np. nazwę instancji, wersje gry i loadera, wybraną stronę lub lokalną ścieżkę instancji). Zapytania są przekazywane do naszych skonfigurowanych dostawców AI — obecnie **Agnes** oraz, w razie potrzeby, **DeepSeek**. Mierzymy liczbę tokenów i ważone zużycie limitu w celach rozliczeniowych oraz zapobiegania nadużyciom. Nie wykorzystujemy zapytań ani wyników użytkownika do trenowania własnego modelu XMCL.

> **Zastrzeżenie dotyczące zewnętrznych dostawców AI:** Zewnętrzni dostawcy AI (Agnes, DeepSeek) przetwarzają treść zapytań zgodnie z własnymi politykami prywatności i regulaminami. Konfigurujemy integracje tak, aby żądać trybów „bez trenowania” (no-training), o ile są one obsługiwane, jednak nie możemy zagwarantować wewnętrznych praktyk przetwarzania danych zewnętrznych dostawców API. Nie należy podawać w zapytaniach AI wrażliwych danych osobowych, haseł ani informacji poufnych.

### Tryb wieloosobowy, sygnalizacja i TURN (łączność P2P)
Funkcje Together i RTC przetwarzają identyfikatory konta i sesji, metadane routingu pokoi/węzłów (peer), adresy IP, znaczniki czasu, identyfikatory poświadczeń TURN oraz zagregowane zużycie ruchu przychodzącego/wychodzącego. **Cloudflare** dostarcza infrastrukturę brzegową (edge), sygnalizacji, przekaźników TURN oraz analityki ruchu.

> **Zgoda na ujawnienie adresu IP w połączeniach P2P:** Łączność peer-to-peer (P2P) z natury rzeczy ujawnia publiczny adres IP użytkownika drugiemu uczestnikowi sesji wieloosobowej. Korzystając z funkcji P2P, użytkownik wyraźnie przyjmuje do wiadomości i wyraża zgodę na to techniczne ujawnienie danych niezbędne do ustanowienia bezpośredniego połączenia. Sygnalizacja XMCL przekazuje wyłącznie metadane połączenia i nie rejestruje głosu, obrazu ani treści rozgrywki w Minecraft.

### Wsparcie i komunikacja ze społecznością
W przypadku kontaktu z nami przetwarzamy dane kontaktowe, referencje konta lub transakcji, informacje diagnostyczne oraz treść przesłanych wiadomości. Prosimy nie wysyłać haseł, tokenów dostępu, pełnych danych kart płatniczych ani zbędnych wrażliwych danych osobowych.

---

## 2. Cele i podstawy prawne przetwarzania

Przetwarzamy dane w celu:
- świadczenia, uwierzytelniania, zabezpieczania i diagnozowania usług XMCL Together;
- obsługi subskrypcji, sald, limitów, płatności, zwrotów i wsparcia klienta;
- kierowania połączeń wieloosobowych i pomiaru zużycia przepustowości TURN;
- generowania żądanych odpowiedzi AI i rozliczania limitów AI;
- zapobiegania oszustwom, atakom replay, nadużyciom i incydentom bezpieczeństwa;
- wypełniania obowiązków księgowych, podatkowych, prawnych, wynikających z zasad sieci płatniczych oraz rozstrzygania sporów.

**Podstawy prawne (RODO / UK GDPR / LGPD / przepisy międzynarodowe):**
- **Wykonanie umowy (art. 6 ust. 1 lit. b RODO):** świadczenie zamawianych przez użytkownika usług konta, subskrypcji, AI oraz trybu wieloosobowego;
- **Obowiązek prawny (art. 6 ust. 1 lit. c RODO):** przechowywanie dokumentacji finansowej, podatkowej i audytowej dotyczącej płatności;
- **Prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO):** zabezpieczanie infrastruktury, zapobieganie oszustwom/nadużyciom oraz diagnostyka operacyjna bez plików cookie;
- **Wyraźna zgoda (art. 6 ust. 1 lit. a RODO):** opcjonalne zapytania AI, ujawnienie adresu IP w P2P oraz transgraniczne przekazywanie danych, gdy zgoda jest wymagana przez prawo.

---

## 3. Podmioty przetwarzające i międzynarodowe przekazywanie danych

Udostępniamy wyłącznie dane w zakresie racjonalnie niezbędnym następującym dostawcom infrastruktury i usług:

| Odbiorca | Cel i kategorie danych | Regiony przetwarzania | Polityka prywatności |
| :--- | :--- | :--- | :--- |
| **Waffo Pancake** | Obsługa płatności (checkout), weryfikacja antyfraudowa, zwroty, zdarzenia webhook (metadane transakcji i płatności) | Globalnie / Stany Zjednoczone / Singapur | Udostępniana przy płatności |
| **Cloudflare** | Workers, CDN, ochrona DDoS, sygnalizacja WebRTC, przekaźnik TURN (metadane IP, sesji i ruchu) | Globalna sieć Edge / Stany Zjednoczone | [Prywatność Cloudflare](https://www.cloudflare.com/privacypolicy/) |
| **Microsoft Azure** | Hosting, przechowywanie baz danych, Application Insights bez plików cookie (dane konta, rozliczeń i diagnostyki) | Hongkong (Azja Wschodnia), Stany Zjednoczone, UE | [Prywatność Microsoft](https://privacy.microsoft.com/privacystatement) |
| **Vercel & GitHub** | Dystrybucja strony internetowej, wydania, obsługa zgłoszeń i bezpieczeństwa | Stany Zjednoczone / Globalna sieć Edge | [Vercel](https://vercel.com/legal/privacy-policy) / [GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Agnes & DeepSeek** | Generowanie odpowiedzi AI (zapytania, kontekst rozmowy, parametry modelu) | Globalnie / Chiny (ChRL) / Stany Zjednoczone | Polityki dostawców |

- **Zabezpieczenia przekazywania danych:** Transgraniczne przekazywanie danych poza EOG, Wielką Brytanię lub Szwajcarię opiera się na Standardowych Klauzulach Umownych UE (SCC zgodnie z art. 46 RODO), brytyjskim UK IDTA/Addendum, szyfrowaniu TLS podczas przesyłania oraz ścisłej minimalizacji danych.
- **Konsekwencje odmowy:** Podanie danych konta, płatności oraz danych routingu transgranicznego jest niezbędne do działania XMCL Together. W razie odmowy takiego przetwarzania lub przekazywania użytkownik może nadal korzystać z bezpłatnego, otwartoźródłowego launchera XMCL w trybie offline, jednak hostowane funkcje XMCL Together nie będą dostępne.
- **Brak sprzedaży danych:** **Nie** sprzedajemy danych osobowych ani nie udostępniamy ich na potrzeby międzykontekstowej reklamy behawioralnej.

---

## 4. Okresy przechowywania danych

Stosujemy ścisłe ograniczenia okresu przechowywania:
- **Telemetria operacyjna, metryki użycia AI oraz pomiary TURN:** przechowywane przez **maksymalnie 90 dni**, a następnie trwale usuwane lub nieodwracalnie anonimizowane.
- **Dane konta i sesji:** przechowywane przez okres aktywności konta oraz przez **30 dni** po usunięciu konta na potrzeby odzyskiwania danych i rozstrzygania sporów.
- **Zapisy księgowo-finansowe, zdarzenia płatnicze, zwroty i dzienniki audytu:** przechowywane przez **5 do 7 lat** (lub przez okres wymagany bezwzględnie obowiązującymi przepisami podatkowymi i rachunkowymi) w celu spełnienia obowiązków księgowych, podatkowych i wymogów sieci płatniczych, również po zamknięciu konta.
- Zaszyfrowane kopie zapasowe są usuwane w ramach standardowych cykli rotacji.

---

## 5. Wybory i prawa użytkownika

### Prawa ogólne, RODO, UK GDPR i prawa międzynarodowe
Użytkownik może:
- zrezygnować z opcjonalnych funkcji online lub odłączyć usługi podmiotów trzecich;
- zarządzać plikiem cookie `nf_lang` w ustawieniach przeglądarki;
- anulować odnawianie Together Home w dowolnym momencie z poziomu interfejsu konta (ze skutkiem na koniec bieżącego opłaconego okresu);
- żądać dostępu do danych, ich sprostowania, usunięcia („prawo do bycia zapomnianym”), ograniczenia przetwarzania, przenoszenia danych lub wnieść sprzeciw wobec przetwarzania;
- cofnąć zgodę w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej cofnięciem;
- wnieść skargę do krajowego organu ochrony danych, w szczególności w Polsce do **Prezesa Urzędu Ochrony Danych Osobowych (UODO)** pod adresem [https://uodo.gov.pl](https://uodo.gov.pl), w Wielkiej Brytanii do ICO ([ico.org.uk](https://ico.org.uk)) lub do właściwego organu lokalnego.

### Prawa prywatności w Kalifornii i stanach USA (CCPA / CPRA)
XMCL **nie** sprzedaje danych osobowych ani nie udostępnia ich na potrzeby międzykontekstowej reklamy behawioralnej. Mieszkańcy Kalifornii oraz stanów USA posiadających odpowiednie przepisy o prywatności (VA, CO, CT, UT, TX, OR itd.) mają prawo do wiedzy, dostępu, usunięcia, sprostowania nieprawidłowych danych oraz korzystania z tych praw bez dyskryminacji.

---

## 6. Bezpieczeństwo

Stosujemy sesje o ograniczonym zakresie, kontrolę dostępu opartą na zasadzie najmniejszych uprawnień, szyfrowanie TLS w tranzycie, podpisane webhooki płatnicze, ochronę przed atakami replay, izolację sekretów oraz ciągłe monitorowanie. Żaden system online nie jest w 100% wolny od ryzyka; użytkownik odpowiada za zabezpieczenie swojego urządzenia, sesji i danych uwierzytelniających usług trzecich.

---

## 7. Dzieci i wymogi wiekowe

- **Usługi płatne i konta:** Korzystanie z kont XMCL Together oraz funkcji płatnych wymaga ukończenia co najmniej **18 lat** (lub osiągnięcia pełnoletności w danej jurysdykcji) albo posiadania weryfikowalnej zgody rodzica lub opiekuna prawnego.
- **Zgoda cyfrowa (art. 8 RODO) i COPPA:** W Polsce wiek wyrażenia zgody cyfrowej wynosi **16 lat**. Nie gromadzimy świadomie danych osobowych osób poniżej **16. roku życia** w Polsce (ani poniżej 13 lat w USA/Wielkiej Brytanii lub poniżej obowiązującego lokalnego wieku zgody cyfrowej 14–16 lat w innych państwach UE) bez weryfikowalnej zgody rodzica lub opiekuna. Rodzice lub opiekunowie mogą skontaktować się pod adresem [cijhn@hotmail.com](mailto:cijhn@hotmail.com) w celu niezwłocznego usunięcia danych.

---

## 8. Zmiany, język wiążący i zastrzeżenie prawne

- **Zmiany:** Aktualizacje publikujemy na tej stronie wraz z nową datą wejścia w życie i wersją, a o istotnych zmianach informujemy z wyprzedzeniem, gdy wymaga tego prawo.
- **Język wiążący:** W razie rozbieżności między wersją przetłumaczoną a wersją angielską rozstrzygająca jest wersja angielska w zakresie dopuszczonym przez bezwzględnie obowiązujące przepisy prawa lokalnego.
- **Zastrzeżenie dotyczące Minecraft:** XMCL jest niezależnym projektem i nie jest powiązany, sponsorowany ani wspierany przez Microsoft Corporation ani Mojang Studios.

---

## 9. Kontakt

**Operator / Kontakt ds. prywatności (CI010):**
- Zapytania ogólne, rozliczenia, zwroty, kwestie prawne i prywatność: [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- Zgłaszanie podatności bezpieczeństwa: [GitHub private vulnerability reporting](https://github.com/voxelum/x-minecraft-launcher/security)
- Wsparcie społeczności: [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

Prosimy podawać wyłącznie minimalny numer referencyjny konta lub transakcji potrzebny do odnalezienia rekordu. Przed realizacją żądania możemy poprosić o weryfikację własności konta.
