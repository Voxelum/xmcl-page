# Konfiguracja Agnes AI

Ten przewodnik pomoże Ci skonfigurować wbudowanego Agenta AI (AI Agent) w XMCL.

::: tip Agnes AI jest darmowy
**Agnes AI jest całkowicie darmowy.** Wystarczy założyć darmowy klucz API — nie jest wymagana żadna opłata, subskrypcja ani karta kredytowa.
:::

Po ukończeniu tej strony powinieneś być w stanie:

- otworzyć okno dialogowe Agenta AI;
- diagnozować logi błędów (crash logs) za pomocą wbudowanego agenta;
- uruchamiać narzędzia agenta (włączanie/wyłączanie modów, instalacja, wyszukiwanie/edycja konfiguracji itp.).

## Co jest potrzebne

- Najnowsza wersja XMCL.
- Dostęp do Internetu.
- Darmowy klucz API Agnes AI.

## Krok 1: Pobierz swój klucz API Agnes AI

1. Otwórz portal dla deweloperów Agnes AI.
2. Zarejestruj się lub zaloguj się na swoje konto.
3. Utwórz klucz API.
4. Skopiuj i bezpiecznie przechowuj klucz.

![Strona konsoli Agnes AI pokazująca, gdzie utworzyć/skopiować klucz API.](create-and-copy.webp)

## Krok 2: Otwórz ustawienia agenta XMCL

1. Otwórz XMCL.
2. Przejdź do **Ustawienia -> Ogólne**.
3. Włącz **Tryb Deweloperski** (Developer Mode).
4. Przewiń do sekcji **Agent AI** (AI Agent).

![Ustawienia ogólne XMCL z wyróżnionym trybem deweloperskim i sekcją Agenta AI](general-setting.webp)

## Krok 3: Wypełnij pola agenta

W ustawieniach **Agenta AI**:

- **API Key**: wklej swój klucz Agnes.
- **Model**: zachowaj domyślny, chyba że zalecono inaczej.
- **Endpoint**: zachowaj domyślny, chyba że zalecono inaczej.

Domyślny punkt końcowy (endpoint) Agnes:

```text
https://apihub.agnes-ai.com/v1/chat/completions
```

![Formularz Agenta AI z polami API Key / Model / Endpoint i przykładowymi wartościami](general-setting.webp)

## Krok 4: Sprawdź, czy to działa

1. Naciśnij `Ctrl/Cmd + Shift + A`, aby otworzyć okno agenta.
2. Wyślij prostą wiadomość, np.: `list my installed mods`.
3. Potwierdź, że asystent odpowiada bez błędu konfiguracji.

## Rozwiązywanie problemów

### Agent się nie otwiera

- Upewnij się, że **Tryb Deweloperski** jest włączony.
- Uruchom ponownie XMCL po włączeniu Trybu Deweloperskiego.

### Ostrzeżenie "Brak konfiguracji" nadal się pojawia

- Sprawdź ponownie klucz API (brak dodatkowych spacji/nowych linii).
- Upewnij się, że punkt końcowy (endpoint) jest osiągalny z Twojej sieci.

### Żądanie nie powiodło się / 401 / 403

- Klucz API jest nieprawidłowy, wygasł lub nie ma uprawnień.
- Wygeneruj ponownie klucz w portalu Agnes i wklej go jeszcze raz.

### Przekroczenie czasu żądania (timeout)

- Sprawdź zaporę sieciową (firewall)/proxy.
- Spróbuj ponownie z domyślnym punktem końcowym.

## Uwagi dotyczące bezpieczeństwa

- Traktuj klucze API jak hasła.
- Nie udostępniaj zrzutów ekranu zawierających Twój klucz.
- Wygeneruj klucze ponownie, jeśli podejrzewasz wyciek.
