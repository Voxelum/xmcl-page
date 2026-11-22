---
title: Informacja o prywatności projektu open source XMCL
description: Informacja o prywatności dla strony internetowej XMCL i otwartoźródłowego launchera, zgodna z unijnym RODO, UK GDPR, amerykańskimi przepisami COPPA/CCPA oraz międzynarodowymi standardami ochrony danych.
---

# Informacja o prywatności projektu open source XMCL

**Data wejścia w życie: 22 listopada 2026 r. · Wersja: OP3-2026-11-22**

Niniejsza informacja dotyczy publicznej strony internetowej XMCL ([xmcl.app](https://xmcl.app)) oraz bezpłatnego, otwartoźródłowego launchera XMCL. Nie obejmuje ona płatnych funkcji, kont, rozliczeń, sztucznej inteligencji ani usług sygnalizacji/TURN dla trybu wieloosobowego świadczonych przez XMCL Together, które reguluje odrębna [Polityka prywatności XMCL Together](./together/privacy).

---

## 1. Administrator danych i kontakt

XMCL jest niezależnym projektem open source prowadzonym przez **CI010** oraz społeczność współtwórców Voxelum.
- **Zapytania dotyczące prywatności i kwestii prawnych:** [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- **Repozytorium kodu źródłowego:** [github.com/voxelum/x-minecraft-launcher](https://github.com/voxelum/x-minecraft-launcher)
- **Zgłaszanie podatności bezpieczeństwa:** [GitHub Security Advisories](https://github.com/voxelum/x-minecraft-launcher/security)
- **Wsparcie społeczności:** [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

---

## 2. Przetwarzane informacje i minimalizacja danych

XMCL stosuje ścisłą zasadę minimalizacji danych (art. 5 ust. 1 lit. c RODO):

### Publiczna strona internetowa (xmcl.app)
- **Zagregowana analityka bez plików cookie:** Korzystamy z usługi Microsoft Azure Application Insights skonfigurowanej w **trybie bez plików cookie** (`disableCookiesUsage: true`), z przetwarzaniem danych w regionie **Microsoft Azure East Asia (Hongkong)**, w celu rejestrowania anonimowych odsłon stron, wyborów pobrań, ogólnych atrybutów sieci/urządzenia oraz nagłówków User-Agent przeglądarki. Na urządzeniu użytkownika nie są zapisywane żadne pliki cookie analityczne ani śledzące między witrynami.
- **Plik cookie ściśle niezbędny:** Przechowujemy wyłącznie jeden lokalny funkcjonalny plik cookie (`nf_lang`), ściśle niezbędny do zapamiętania wybranego języka interfejsu. Nie stosujemy plików cookie podmiotów trzecich do celów marketingowych, reklamowych ani śledzenia behawioralnego.

### Otwartoźródłowy launcher
- **Opcjonalna telemetria i diagnostyka (Opt-in):** Telemetria diagnostyczna jest **domyślnie wyłączona**. Wyłącznie wtedy, gdy użytkownik wyraźnie włączy telemetrię w ustawieniach launchera (zgoda opt-in), launcher może przetwarzać:
  - losowo wygenerowany, pseudonimizowany identyfikator instalacji/urządzenia;
  - zdarzenia cyklu życia aplikacji (uruchomienie gry, normalne lub błędne kody zakończenia, wersja aplikacji);
  - typ dostawcy uwierzytelniania (np. identyfikator uwierzytelniania Microsoft lub trybu offline);
  - podstawowe parametry środowiska uruchomieniowego (system operacyjny, wersja środowiska Java, architektura procesora);
  - dzienniki awarii (crash logs) oraz ślady stosu (stack traces).
- **Oczyszczanie danych i dane uwierzytelniające:** Raporty awarii są, w miarę technicznych możliwości, oczyszczane z wrażliwych ścieżek plików, nazw użytkowników i tokenów systemowych. **Nigdy** nie przetwarzamy ani nie przechowujemy haseł, danych logowania ani tokenów sesji kont Microsoft/Mojang.

---

## 3. Okres przechowywania danych

Unikamy bezterminowego przechowywania danych:
- Wszystkie dzienniki telemetrii, raporty błędów diagnostycznych i metryki wydajności są przechowywane przez **maksymalnie 90 dni**, po czym są trwale usuwane lub nieodwracalnie anonimizowane.
- Publiczne zgłoszenia w systemie śledzenia błędów (issue tracker) na GitHubie pozostają dostępne zgodnie z politykami platformy GitHub i zasadami zarządzania repozytorium do momentu ich rozwiązania lub usunięcia.

---

## 4. Podmioty przetwarzające i międzynarodowe przekazywanie danych

XMCL korzysta z globalnych dostawców infrastruktury w celu udostępniania pobrań, stron internetowych i opcjonalnej diagnostyki:

| Dostawca | Rola i przetwarzane dane | Regiony przetwarzania | Polityka prywatności |
| :--- | :--- | :--- | :--- |
| **Microsoft Azure (Application Insights)** | Analityka internetowa bez plików cookie, opcjonalna diagnostyka launchera | Hongkong (Azja Wschodnia), Stany Zjednoczone, UE | [Prywatność Microsoft](https://privacy.microsoft.com/privacystatement) |
| **Cloudflare** | CDN, routing brzegowy (edge), ochrona przed DDoS | Globalna sieć Edge / Stany Zjednoczone | [Prywatność Cloudflare](https://www.cloudflare.com/privacypolicy/) |
| **GitHub** | Hosting kodu źródłowego, wydania, system śledzenia błędów | Stany Zjednoczone | [Prywatność GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Vercel** | Hosting i dystrybucja strony internetowej | Stany Zjednoczone / Globalna sieć Edge | [Prywatność Vercel](https://vercel.com/legal/privacy-policy) |

- **Zabezpieczenia przekazywania danych:** W przypadku przekazywania danych technicznych poza EOG, Wielką Brytanię lub Szwajcarię opieramy się na Standardowych Klauzulach Umownych (SCC) zatwierdzonych przez Komisję Europejską (art. 46 RODO), brytyjskim porozumieniu UK International Data Transfer Agreement (IDTA) / Addendum oraz równoważnych zabezpieczeniach ustawowych.
- **Prawo do odmowy:** Użytkownik może odmówić transgranicznego przekazywania danych diagnostycznych launchera, pozostawiając telemetrię wyłączoną (stan domyślny).
- **Brak sprzedaży danych:** Nigdy nie sprzedajemy danych osobowych ani nie udostępniamy ich na potrzeby międzykontekstowej reklamy behawioralnej.

---

## 5. Postanowienia regionalne i prawa ustawowe

### Unia Europejska, EOG i Polska (RODO)
- **Podstawy prawne:** Zgoda (art. 6 ust. 1 lit. a RODO) w przypadku opcjonalnej telemetrii diagnostycznej; prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO) w zakresie bezpieczeństwa infrastruktury, dostępności oraz zagregowanej analityki bez plików cookie.
- **Wiek zgody cyfrowej:** W Polsce wiek wyrażenia zgody cyfrowej wynosi **16 lat** zgodnie z art. 8 ust. 1 RODO (w innych państwach członkowskich UE 13–15 lat). Osoby małoletnie poniżej tego progu wymagają zgody lub aprobaty osoby sprawującej władzę rodzicielską lub opiekę.
- **Prawa użytkownika:** Na mocy art. 15–22 RODO przysługuje prawo dostępu do danych, ich sprostowania, usunięcia („prawo do bycia zapomnianym”), ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu, cofnięcia zgody w dowolnym momencie oraz wniesienia skargi do **Prezesa Urzędu Ochrony Danych Osobowych (UODO)** pod adresem [https://uodo.gov.pl](https://uodo.gov.pl) lub innego właściwego organu nadzorczego.

### Wielka Brytania (UK GDPR i DPA 2018)
- Regulowane przepisami UK GDPR oraz Data Protection Act 2018. Wiek zgody cyfrowej: **13 lat**. Organ nadzorczy: UK Information Commissioner's Office (ICO) pod adresem [ico.org.uk](https://ico.org.uk).

### Stany Zjednoczone (COPPA, CCPA / CPRA i prawa stanowe)
- **COPPA:** XMCL nie jest skierowany do dzieci poniżej 13. roku życia. Nie gromadzimy świadomie danych osobowych dzieci poniżej 13 lat. Rodzice lub opiekunowie mogą skontaktować się pod adresem [cijhn@hotmail.com](mailto:cijhn@hotmail.com) w celu niezwłocznego usunięcia danych.
- **CCPA / CPRA i przepisy stanowe USA:** XMCL **nie** sprzedaje ani nie udostępnia danych osobowych na potrzeby międzykontekstowej reklamy behawioralnej. Mieszkańcy Kalifornii, Wirginii, Kolorado, Connecticut, Utah, Teksasu, Oregonu i innych stanów posiadających odpowiednie przepisy mają prawo do informacji, dostępu, poprawiania, usuwania danych oraz korzystania z tych praw bez dyskryminacji.

### Inne jurysdykcje
- Respektujemy równoważne prawa osób, których dane dotyczą, wynikające z obowiązujących lokalnych przepisów na całym świecie (w tym Brazylia LGPD, Japonia APPI, Korea Południowa PIPA, Chiny PIPL, Tajwan PDPA, Turcja KVKK, Indie DPDP Act, Indonezja UU PDP, Wietnam Dekret 13, Ukraina, Arabia Saudyjska/ZEA PDPL).

---

## 6. Wykonywanie praw

W celu wykonania praw dostępu, sprostowania, usunięcia danych lub cofnięcia zgody prosimy o kontakt z **CI010** pod adresem **[cijhn@hotmail.com](mailto:cijhn@hotmail.com)**.

---

## 7. Język wiążący i zastrzeżenie prawne

- **Język wiążący:** Tłumaczenia niniejszej informacji udostępniane są dla wygody użytkowników. W razie rozbieżności między wersją przetłumaczoną a wersją angielską rozstrzygająca jest wersja angielska w zakresie dopuszczonym przez bezwzględnie obowiązujące przepisy prawa lokalnego.
- **Zastrzeżenie dotyczące Minecraft i Mojang:** XMCL jest niezależnym otwartoźródłowym projektem oprogramowania i nie jest powiązany, autoryzowany, sponsorowany ani wspierany przez Microsoft Corporation ani Mojang Studios.
