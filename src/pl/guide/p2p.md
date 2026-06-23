# 🎮 Poradnik gry wieloosobowej LAN w Minecraft (P2P)

Ten poradnik pomoże Ci skonfigurować i grać w Minecraft ze znajomymi w sieci lokalnej lub nawet przez internet, korzystając z wbudowanych funkcji launchera.

## Co to jest P2P (Peer-to-Peer)? Proste wyjaśnienie

P2P oznacza "Peer-to-Peer" (każdy z każdym / partner do partnera). Pomyśl o tym w ten sposób: zamiast łączyć się z jednym wielkim centralnym serwerem (jak główny komputer w chmurze), gracze łączą się *bezpośrednio* z komputerami innych graczy. To jak posiadanie bezpośredniej linii telefonicznej między znajomymi, zamiast dzwonienia przez operatora.

- **Bezpośrednie połączenie:** Twój komputer komunikuje się *bezpośrednio* z komputerem Twojego znajomego.
- **Brak centralnego serwera:** W przeciwieństwie do serwerów online, nie potrzebujesz dedykowanej maszyny działającej 24/7.
- **Sieć lokalna (LAN):** Działa najlepiej w tej samej sieci lokalnej (np. to samo WiFi w domu).
- **Gra przez internet:** Może działać przez internet, ale wymaga określonych konfiguracji sieciowych (takich jak opisany poniżej system serwerów przekaźnikowych launchera).

Dzięki temu gracze mogą dołączyć do gry hostowanej na komputerze jednej osoby bez konieczności skomplikowanej konfiguracji serwera.

## Pierwsze kroki: Otwieranie okna gry wieloosobowej

Najpierw otwórz okno "Gra wieloosobowa w sieci LAN" w launcherze:

![Gra wieloosobowa](/guidephoto/multi.png)

## Zrozumienie statusu połączenia

Po otwarciu zobaczysz swój status, adres IP oraz informacje o routerze. Najważniejszą częścią jest Twój **status**:

![Status połączenia](/guidephoto/windows-mul.png)

- **Status 1 lub 2:** Wszystko w porządku! Możesz grać ze znajomymi bez żadnych problemów.
- **Inne statusy:** Jeśli widzisz inny numer statusu, oznacza to, że Twój typ połączenia może nie być idealny do gry bezpośredniej. Musisz poszukać rozwiązań specyficznych dla Twojego dostawcy internetu lub zapory sieciowej (firewalla). (Na początek spróbuj odświeżyć status w launcherze — czasami to pomaga!)

## Jak grać: Z licencją lub bez

### Opcja 1: Gracze z licencją
Jeśli każdy posiada licencję Minecraft, możecie korzystać ze standardowej gry wieloosobowej LAN:
1. Jedna osoba uruchamia świat w Minecraft i otwiera go dla sieci LAN.
2. Pozostali gracze szukają gry na liście gier wieloosobowych Minecraft.

### Opcja 2: Korzystanie z serwera przekaźnikowego (Relay Server) (Dla graczy bez licencji lub przy trudnych połączeniach)
Jeśli nie masz licencji lub masz problemy z połączeniem, launcher oferuje funkcję serwera przekaźnikowego:
1. Przejdź do **Ustawień ogólnych** launchera.
2. Włącz funkcję **Serwera przekaźnikowego (Relay Server)**.
   - *Uwaga:* Jeśli ta opcja jest niedostępna, Twój dostawca internetu może blokować do niej dostęp.

![Serwer przekaźnikowy](/guidephoto/relay-server.png)

## Konfiguracja połączenia

### Metoda 1: Używanie ID połączenia (Prostsza)
1. **Utwórz ID:** Kliknij przycisk `+` w oknie gry wieloosobowej.
2. **Udostępnij ID:** Wyślij wygenerowany ID swojemu znajomemu.

![Połączenie przez ID](/guidephoto/ID.png)

3. **Znajomy dołącza:** Twój znajomy klika `+` i wpisuje Twój ID w odpowiednim polu.
4. **Połączono:** Twój znajomy powinien być teraz z Tobą połączony!

### Metoda 2: Połączenie ręczne (Jeśli Metoda 1 zawiedzie)
Jeśli metoda z ID nie działa, skorzystaj z ręcznych ustawień połączenia:

1. Kliknij ikonę **ustawień**.
![Ustawienia połączenia](/guidephoto/token.png)
2. Jedna osoba wybiera **"Inicjuj połączenie" (Initiale-Connection)** (tworzy połączenie).
![Inicjowanie połączenia](/guidephoto/intiale.png)
3. Druga wybiera **"Dołącz" (Join)** (łączy się z hostem).
4. Host musi wysłać swój klucz połączenia, a znajomy musi go zaakceptować.

## Udostępnianie światów

Po połączeniu możesz udostępniać instancje światów swoim znajomym za pomocą dedykowanego przycisku w interfejsie.

![Udostępnianie światów](/guidephoto/share.png)
![Udostępnianie światów 2](/guidephoto/Share2.png)

## Uruchamianie gry

1. **Host:** Otwórz Minecraft, uruchom świat i otwórz go dla sieci LAN.
2. **Gracze:** Przejdź do zakładki Gra wieloosobowa w Minecraft, a hostowana gra powinna pojawić się na dole listy serwerów!

## Optymalizacja sieci
### Aby uzyskać najlepsze wrażenia z gry, rozważ następujące ustawienia sieciowe:

* Używaj stabilnego połączenia internetowego o prędkości wysyłania (upload) co najmniej 5 Mbps.
* Jeśli to możliwe, preferuj połączenie kablowe (Ethernet) zamiast WiFi.
* **Zamknij aplikacje pobierające dużo danych podczas rozgrywki.**
* **Wyłącz niepotrzebne usługi działające w tle.**

## Potrzebujesz pomocy?

W razie problemów możesz poprosić o pomoc na Discordzie, Reddicie lub innych społecznościach Minecraft.
