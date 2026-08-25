# Logowanie Microsoft, Bedrock vs Java oraz problemy z licencją

Ten poradnik wyjaśnia działanie uwierzytelniania Microsoft w XMCL, przyczyny błędów logowania (takich jak **„failed to exchange Xbox token”** lub brak licencji), dlaczego gra uruchamia się w **Trybie Demo (Demo Mode)**, zasadniczą różnicę między **Bedrock Edition (telefon/konsole)** a **Java Edition (PC)** oraz sposoby rozwiązywania problemów z kontem.

---

## 🔑 1. Logowanie za pomocą konta Microsoft

Aby zalogować się za pomocą oficjalnej licencji Minecraft:

1. Kliknij swój awatar (lub **„Zarządzaj kontem”**) w prawym górnym rogu, aby otworzyć Menedżer kont:

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. Kliknij **„Dodaj konto”**, wybierz **Microsoft** i postępuj zgodnie z instrukcjami:

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **Logowanie kodem urządzenia (Device Code):**  
> Jeśli nie chcesz wpisywać hasła w launcherze, zaznacz **„Logowanie kodem urządzenia”**. XMCL wygeneruje 8-cyfrowy kod; przejdź na stronę [microsoft.com/link](https://microsoft.com/link) w przeglądarce i zatwierdź logowanie.

---

## 🔍 2. 3-etapowy proces weryfikacji Microsoft

Podczas logowania launcher komunikuje się z trzema niezależnymi usługami:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 3 etapy weryfikacji licencji:</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">KROK 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Microsoft OAuth</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Sprawdza e-mail i hasło</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">KROK 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Usługi Xbox Live</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Pobiera Gamertag Xbox</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ Częsty błąd</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">KROK 3 (Wymiana)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Licencja Mojang Java</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Sprawdza zakup na PC</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    Jeśli krok 3 zakończy się niepowodzeniem, logowanie zwróci błąd <strong>„failed to exchange Xbox token”</strong> lub gra uruchomi się w <strong>Trybie Demo</strong>. Oznacza to, że serwery Mojang nie znalazły aktywnej licencji <strong>Minecraft: Java Edition</strong> na tym koncie Microsoft.
  </p>
</div>

---

## 🛑 3. Najczęstsza pomyłka: Bedrock Edition vs. Java Edition

**XMCL jest launcherem przeznaczonym wyłącznie dla Minecraft: Java Edition (PC z systemami Windows, macOS i Linux).**

Wielu graczy kupuje grę na telefonie lub konsoli i próbuje zalogować się w XMCL:

| Platforma zakupu | Posiadana edycja | Zgodność z XMCL? | Wyjaśnienie |
| :--- | :--- | :--- | :--- |
| 📱 **Telefon / Tablet (iOS / Android)** | Bedrock Edition | ❌ Nie | Zakup na smartfonie nie daje licencji Java na PC. |
| 🎮 **Konsola PlayStation 4 / 5** | Bedrock Edition | ❌ Nie | Zakup w PSN dotyczy wyłącznie konsoli. |
| 🎮 **Konsola Xbox One / Series X\|S** | Bedrock Edition | ❌ Nie | Zakup na konsoli nie przenosi się na PC Java. |
| 🕹️ **Nintendo Switch** | Bedrock Edition | ❌ Nie | Zakup w Nintendo eShop działa tylko na Switchu. |
| 💻 **PC (Zestaw Minecraft: Java & Bedrock)** | Java & Bedrock | ✅ **Tak** | Pełne wsparcie! |
| 🟢 **Subskrypcja PC Game Pass / Ultimate** | Java & Bedrock | ✅ **Tak** | Wspierane, dopóki subskrypcja jest aktywna. |

> ⚠️ **Ważne:**  
> Jeśli zakupiłeś grę tylko na **smartfonie**, **PlayStation**, **konsoli Xbox** lub **Nintendo Switch**, serwery Mojang zgłoszą brak licencji **Java Edition**.  
> Aby grać w oficjalną wersję Java na PC, musisz posiadać zestaw **„Minecraft: Java & Bedrock Edition for PC”** na [Minecraft.net](https://www.minecraft.net/) lub posiadać aktywną subskrypcję **PC Game Pass**.

---

## 🛠 4. Rozwiązywanie problemów z logowaniem

### Przyczyna A: Brak licencji Java Edition na koncie

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Mojang nie widzi licencji PC</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Konto Microsoft zostało pomyślnie uwierzytelnione, ale w bazie Mojang brak wpisu o zakupie Java Edition.</p>
  </div>
</div>

#### Rozwiązanie:
* **Sprawdź na Minecraft.net:** Zaloguj się na [Minecraft.net](https://www.minecraft.net/). Jeśli widzisz przycisk „Kup teraz” zamiast nazwy profilu Java, konto nie posiada gry.
* **Historia zamówień:** Wejdź na [account.microsoft.com/billing/orders](https://account.microsoft.com/billing/orders) i upewnij się, jaką wersję zakupiłeś.
* **Weryfikacja adresu e-mail:** Upewnij się, że nie logujesz się kontem szkolnym lub służbowym zamiast konta prywatnego.
* **Status Game Pass:** Sprawdź, czy Twoja subskrypcja jest aktywna i obejmuje PC.

---

### Przyczyna B: Brak aktywnego profilu Xbox Live

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Konto nie posiada Gamertagu Xbox</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Nowo utworzone konta Microsoft często nie posiadają zainicjowanego profilu Xbox Live.</p>
  </div>
</div>

#### Rozwiązanie:
1. Wejdź na [Xbox.com](https://www.xbox.com/).
2. Kliknij **Zaloguj się** w prawym górnym rogu.
3. Zaakceptuj warunki i utwórz swój **Gamertag**.
4. Odczekaj 1–2 minuty i spróbuj ponownie w XMCL.

---

### Przyczyna C: Blokady sieciowe i problemy z DNS

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Zablokowane połączenie z serwerami Mojang / Xbox</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Zapora sieciowa lub błędny DNS blokują połączenie z <code>api.minecraftservices.com</code>.</p>
  </div>
</div>

#### Rozwiązanie:
* **Użyj VPN:** Włącz stabilny VPN przed próbą logowania.
* **Skonfiguruj Proxy w XMCL:** W **Ustawieniach** -> **Ustawienia sieci** wprowadź dane swojego proxy (HTTP/HTTPS/SOCKS5).
* **Sprawdź plik hosts:** Upewnij się, że w systemowym pliku hosts nie ma starych przekierowań dla `mojang.com`.

---

## 🎮 Nie posiadasz płatnej licencji?

Jeśli nie posiadasz oficjalnej licencji, możesz grać w **Trybie Offline** lub korzystać z alternatywnych sieci skinów.

👉 **[Pełny poradnik: Gra bez licencji (Tryb offline i alternatywne konta)](./offline-mode)**
