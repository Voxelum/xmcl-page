# Logowanie na konto Microsoft i tryb demonstracyjny

Ten poradnik wyjaśnia, jak dodać konto Microsoft do XMCL, jak działa proces uwierzytelniania oraz jak rozwiązać typowe problemy z logowaniem, takie jak błąd **"failed to exchange Xbox token"** lub utknięcie w **trybie demonstracyjnym (Demo Mode)**.

---

## 🔑 1. Jak dodać konto Microsoft

Aby grać w Minecraft przy użyciu oficjalnego konta, musisz się zalogować:

1. Kliknij na swój profil/awatar (lub **"Zarządzaj kontem"**) w prawym górnym rogu, aby otworzyć menedżera kont:

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. Kliknij **"Dodaj konto"**, wybierz **Microsoft** i przejdź do logowania:

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **Logowanie przez kod urządzenia (Device Code):**  
> Jeśli nie chcesz wpisywać swojego hasła bezpośrednio w launcherze, zaznacz opcję **"Login by Device Code"** (Logowanie kodem urządzenia). XMCL wyświetli kod; wystarczy wejść na stronę `microsoft.com/link` w przeglądarce, wpisać kod i zatwierdzić logowanie.

---

## 🔍 2. Jak działa proces uwierzytelniania

Aby uruchomić licencjonowaną kopię Minecraft, launcher musi zweryfikować Twoją tożsamość na trzech osobnych poziomach zabezpieczeń:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 Uwierzytelnianie (Handshake):</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">KROK 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Logowanie Microsoft</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Weryfikacja hasła</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">KROK 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Usługi Xbox Live</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Pobieranie Gamertaga</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ Błąd tutaj</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">KROK 3 (Wymiana)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Token Minecraft</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Sprawdzenie licencji</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    Błąd <strong>"failed to exchange Xbox token"</strong> oznacza, że Krok 1 i Krok 2 zakończyły się sukcesem, ale serwery autoryzacyjne Mojang odrzuciły próbę uwierzytelnienia w Kroku 3.
  </p>
</div>

---

## 🛠 3. Trzy główne przyczyny i rozwiązania

### 1. Brak licencji Minecraft na tym koncie

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Przyczyna: Serwery Mojang nie znalazły zakupionej gry</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Jest to najczęstsza przyczyna. Zalogowałeś się na konto Microsoft, ale Mojang informuje launcher, że to konkretne konto nie posiada licencji na Minecraft Java Edition.</p>
  </div>
</div>

#### Jak to naprawić:
* **Zweryfikuj zakup:** Zaloguj się na swoje konto Microsoft na stronie [Minecraft.net](https://www.minecraft.net/). Sprawdź, czy widzisz opcję pobrania gry zamiast prośby o jej zakup.
* **Sprawdź stan Game Pass:** Jeśli grasz przez subskrypcję **Xbox Game Pass**, upewnij się, że abonament jest aktywny i logujesz się na dokładnie to samo konto, na którym znajduje się aktywny Game Pass.
* **Sprawdź adres e-mail:** Upewnij się, że nie logujesz się na inne konto Microsoft (np. szkolne lub służbowe) zamiast konta prywatnego, na którym gra została zakupiona.

---

### 2. Konto nie posiada profilu Xbox (Brak Gamertaga)

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👾
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Przyczyna: Konto Microsoft nie ma utworzonego profilu gracza</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Twoje konto Microsoft potrzebuje powiązanego profilu Xbox Live, aby launcher mógł pobrać tokeny gry. Jeśli dopiero co kupiłeś grę lub nigdy wcześniej jej nie uruchamiałeś, ten profil może jeszcze nie istnieć, co powoduje uruchamianie gry w <strong>trybie demo</strong>.</p>
  </div>
</div>

#### Jak to naprawić:
1. Wejdź na oficjalną stronę [Xbox.com](https://www.xbox.com/).
2. Zaloguj się swoimi danymi konta Microsoft.
3. Jeśli pojawi się monit, utwórz darmowy profil Xbox Live (wybierając swój Gamertag i awatar).
4. Po utworzeniu profilu zrestartuj XMCL i spróbuj zalogować się ponownie.

---

### 3. Problemy sieciowe lub zablokowane połączenia

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(59, 130, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #3b82f6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Przyczyna: Problemy z DNS lub regionalne blokady sieci</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">W niektórych regionach lub u niektórych restrykcyjnych dostawców internetu połączenia z serwerami uwierzytelniania Xbox Live lub Mojang mogą być blokowane bądź zakłócane.</p>
  </div>
</div>

#### Jak to naprawić:
* **Użyj VPN:** Jeśli połączenia w Twojej sieci są blokowane, skorzystaj z VPN, aby pomyślnie przejść proces uwierzytelniania Microsoft.
* **Zmień serwery DNS:** Zmień DNS w ustawieniach systemu na publiczne i szybkie (np. Google DNS: `8.8.8.8` i `8.8.4.4` lub Cloudflare DNS: `1.1.1.1`).
* **Spróbuj ponownie później:** Serwery Microsoftu mogą być chwilowo przeciążone. Odczekaj kilka minut i spróbuj ponownie.

---

## 🚪 4. Tryb offline i alternatywne opcje logowania (Gra bez konta Microsoft)

Jeśli nie posiadasz oficjalnego konta Microsoft, chcesz grać offline lub korzystasz z prywatnego/lokalnego serwera, XMCL oferuje alternatywne metody logowania.

### Opcja A: Gra lokalna / Offline (Tryb Dewelopera)

**Tryb Dewelopera** (Developer Mode) umożliwia grę lokalną offline pod dowolnym wybranym pseudonimem, bez potrzeby wpisywania hasła.

1. Otwórz menedżera kont w prawym górnym rogu.
2. Kliknij **"Dodaj konto"** (Add Account).
3. Wybierz opcję **Deweloper** (Developer) z listy:

   <img src="/guidephoto/developer-mode.png" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

4. Wpisz dowolną nazwę użytkownika i zatwierdź.
5. Możesz teraz uruchomić Minecraft. **Uwaga:** Konto offline pozwala na grę wyłącznie na serwerach offline (z opcją `online-mode=false` w pliku konfiguracyjnym serwera), a Twoja postać będzie używać domyślnego wyglądu (steve/alex).

---

### Opcja B: Zewnętrzne serwery skórek (API Yggdrasil)

Jeśli chcesz grać z własną skórką (skinem) na prywatnych serwerach, XMCL wspiera zewnętrzne usługi uwierzytelniania takie jak **LittleSkin**, **Ely.by** lub własne serwery Yggdrasil.

1. W menedżerze kont kliknij **"Dodaj konto"**.
2. Wybierz odpowiednią platformę (np. **LittleSkin** lub **Yggdrasil**, aby wpisać własny adres URL API).
3. Podaj dane logowania powiązane z daną usługą:

   <img src="/guidephoto/reg-account.png" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

4. Launcher automatycznie pobierze Twoją skórkę i informacje o profilu bezpośrednio z tej platformy.
