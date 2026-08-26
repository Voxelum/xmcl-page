# Przewodnik po XMCL Together: Multiplayer w chmurze, Hosting serwerów i Rozwiązywanie problemów z płatnościami

**XMCL Together** to dedykowana platforma usług online i chmurowych dla XMCL. Rozwiązuje największe problemy w zmodyfikowanym Minecrafcie: **grę ze znajomymi przez zapory sieciowe i CGNAT, bezpieczne serwery w chmurze bez płacenia za bezczynność oraz wbudowaną diagnostykę awarii opartą na sztucznej inteligencji.**

---

## 🌟 1. Czym jest XMCL Together?

![Przegląd XMCL Together](/guidephoto/xmcl%20together.png)

Wspólna gra w Minecrafta z modami bywa uciążliwa przez blokady dostawców internetu (CGNAT), skomplikowane przekierowywanie portów oraz drogie tradycyjne hostingi (\$20–\$40 miesięcznie), za które płaci się nawet wtedy, gdy serwer stoi wyłączony.

XMCL Together oferuje trzy kluczowe filary:

### 1. Globalna sieć szybkich serwerów relay (300+ węzłów Cloudflare)
W grze wieloosobowej P2P LAN, jeśli router blokuje bezpośrednie połączenie, Together automatycznie przesyła pakiety przez **przekaźniki Cloudflare**, zapewniając niski ping bez konieczności konfiguracji portów.

### 2. Serwery w chmurze „Pay-As-You-Play” (Płać tylko podczas gry)
Koniec z drogimi stałymi abonamentami za wyłączone maszyny:
* **Niska opłata bazowa**: Trwale zachowuje Twój świat, konfigurację modów oraz adres IP.
* **Opłata naliczana tylko online**: Płacisz tylko za rzeczywiste godziny gry ze znajomymi (\$0.06 – \$0.12 / godz.).
* **Natychmiastowa pauza**: Wstrzymaj serwer po zakończonej rozgrywce, a naliczanie kosztów natychmiast się zatrzyma.

### 3. Wbudowany asystent AI
Każdy pakiet Together zawiera dostęp do asystenta AI, który analizuje raporty o błędach (crashlogi), wskazuje brakujące biblioteki modów i dobiera flagi pamięci JVM.

---

## 📊 2. Przegląd planów

| Plan | Cena | Przeznaczenie | Specyfikacja |
| :--- | :--- | :--- | :--- |
| 🏠 **Together Home** | **\$2.99** / mies. | Hosting na własnym komputerze | 20 GB transferu relay + Asystent AI |
| 🏕️ **Together Camp** | **\$4** / mies. + **\$0.06** / godz. | 2–4 Znajomych (Vanilla+ / lekkie mody) | 4 GiB RAM, 2/4 vCPU, 32 GiB NVMe |
| 🏡 **Together Lodge** *(Polecany)* | **\$6** / mies. + **\$0.09** / godz. | 4–6 Znajomych (Duże paczki modów) | 6 GiB RAM, 3/6 vCPU, 48 GiB NVMe |
| 🏰 **Together Village** | **\$8** / mies. + **\$0.12** / godz. | 6–10 Znajomych (Zaawansowane paczki techniczne) | 8 GiB RAM, 4/8 vCPU, 64 GiB NVMe |

👉 **[Przejdź do portalu Together](/en/together/)**

---

## 💳 3. Rozwiązywanie problemów z płatnościami i blokadami regionalnymi

Podczas zakupu pakietu lub doładowania portfela może pojawić się błąd bramki płatności:

![Rozwiązywanie błędów płatności](/guidephoto/errortoghether1.png)

### Dlaczego płatność nie działa?
1. **Ograniczenia regionalne bramki płatniczej**: Nasz międzynarodowy operator płatności (Creem) stosuje rygorystyczne filtry antyfraudowe. Jeśli Twoje IP pochodzi z nieobsługiwanego regionu, transakcja zostanie zablokowana.
2. **Blokady bankowe dla transakcji zagranicznych**: Twój bank może odrzucać płatności w obcych walutach lub transakcje międzynarodowe.
3. **Blokada skryptów 3D Secure**: Niektóre sieci lokalne blokują skrypty autoryzacji bankowej.

---

### 🛠️ Jak rozwiązać problem z płatnością:

#### Krok 1: Użyj stabilnego połączenia VPN
Jeśli bramka płatności nie ładuje się lub odrzuca transakcję z powodu lokalizacji:
1. Włącz sprawdzony **VPN** i połącz się z obsługiwanym krajem (**np. Niemcy, Wielka Brytania, USA lub inny kraj UE**).
2. Odśwież [stronę płatności XMCL Together](/en/together/) przy włączonym VPN.
3. Wprowadź dane karty i zatwierdź płatność.

#### Krok 2: Sprawdź limity i płatności internetowe w banku
* W aplikacji bankowej upewnij się, że masz włączone **„Płatności internetowe za granicą”** oraz odpowiednio wysoki limit transakcji.
* Upewnij się, że możesz autoryzować płatność za pomocą 3D Secure.

#### Krok 3: Skorzystaj z trybu incognito
Wyczyść pamięć podręczną lub otwórz okno prywatne z włączonym VPN.

---

## 🛡️ 4. Bezpieczeństwo, prywatność i zwroty

* **Certyfikacja PCI-DSS**: XMCL nigdy nie przechowuje numerów kart ani kodów CVV.
* **7 dni na zwrot niewykorzystanych środków**: Zgodnie z [Regulaminem świadczenia usług](/en/together/terms), niewykorzystane środki z portfela można zwrócić na wniosek w ciągu 7 dni.
* **Zgodność z RODO**: Pełna zgodność z europejskim [RODO](/en/together/privacy). Dzienniki diagnostyczne przechowywane są maksymalnie przez 90 dni.

---

## 💬 5. Potrzebujesz pomocy?

W razie pytań dotyczących płatności:
* 💬 **Oficjalny Discord**: [discord.gg/W5XVwYY7GQ](https://discord.gg/W5XVwYY7GQ)
* 📧 **E-mail wsparcia**: `cijhn@hotmail.com`
