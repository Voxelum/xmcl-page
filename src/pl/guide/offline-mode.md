# Gra bez licencji (Tryb offline i alternatywne konta)

XMCL to launcher o otwartym kodzie źródłowym, szanujący wolność graczy. Jeśli aktualnie nie posiadasz płatnej licencji Minecraft Java Edition lub chcesz przetestować paczkę modów w trybie offline bez łączenia się z serwerami Mojang, XMCL zapewnia pełne wsparcie dla **Trybu Offline** oraz zewnętrznych sieci skinów.

---

## ⚙️ 1. Włączanie trybu deweloperskiego

Aby odblokować konta offline oraz zewnętrzne serwery skinów, należy włączyć **Tryb deweloperski** w ustawieniach:

1. Otwórz **Ustawienia** (ikona koła zębatego w lewym dolnym rogu paska bocznego).
2. Znajdź opcję **„Tryb deweloperski”** i **WŁĄCZ** ją:

   ![Włączanie trybu deweloperskiego](/guidephoto/developer-mode.png)

Po włączeniu w Menedżerze kont pojawią się dodatkowe opcje uwierzytelniania.

---

## 👥 2. Dostępne typy kont

<div style="display: flex; flex-direction: column; gap: 14px; margin: 24px 0;">

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟢</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Tryb Offline (Konto lokalne)</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Graj bez połączenia z serwerami uwierzytelniania. Wystarczy wpisać dowolny pseudonim. Idealne do gry jednoosobowej, lokalnych testów paczek modów, gier w sieci LAN oraz serwerów społeczności z parametrem <code>online-mode=false</code>.
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟡</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">LittleSkin</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Darmowy serwer uwierzytelniania i skinów z obsługą niestandardowych peleryn.  
      Strona: <a href="https://littleskin.cn" target="_blank" rel="noopener noreferrer">https://littleskin.cn</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🔵</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Ely.by</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Popularna globalna sieć autoryzacji i skinów z biblioteką w chmurze i pelerynami HD.  
      Strona: <a href="https://ely.by" target="_blank" rel="noopener noreferrer">https://ely.by</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🌐</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Własny serwer Authlib-Injector / Yggdrasil</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Połącz się z dowolnym prywatnym serwerem uwierzytelniania za pomocą standardowego adresu URL Yggdrasil API.
    </p>
  </div>

</div>

---

## 🎮 3. Dodawanie i zmiana kont

1. Kliknij ikonę profilu w prawym górnym rogu, aby otworzyć **Menedżer kont**.
2. Kliknij **„Dodaj konto”**.
3. Wybierz **Tryb offline**, **LittleSkin**, **Ely.by** lub **Własny serwer**.
4. Wprowadź nazwę użytkownika lub dane logowania.
5. Kliknij na konto, aby ustawić je jako **Aktywne**.

---

## 💡 4. Porównanie typów kont

| Funkcja | Konto Microsoft (Oficjalne) | Konto Offline | LittleSkin / Ely.by |
| :--- | :--- | :--- | :--- |
| **Cena** | Płatna licencja Minecraft | Bezpłatne | Bezpłatne |
| **Oficjalne serwery (Hypixel itp.)** | ✅ Tak | ❌ Nie | ❌ Nie |
| **Serwery społeczności / LAN / P2P** | ✅ Tak | ✅ Tak (`online-mode=false`) | ✅ Tak |
| **Gra jednoosobowa i modpacki** | ✅ Tak | ✅ Tak | ✅ Tak |
| **Własne skiny i peleryny** | ✅ Oficjalne skiny Mojang | ⚠️ Domyślny skin | ✅ Skiny i peleryny danej sieci |

---

## ❓ Najczęściej zadawane pytania

### Czy mogę wejść na Hypixel z konta Offline?
Nie. Oficjalne serwery publiczne weryfikują tożsamość graczy u Mojang (`online-mode=true`), co wymaga konta Microsoft z zakupioną wersją Java.

### Jak grać ze znajomymi bez licencji?
Możesz skorzystać z wbudowanej w XMCL funkcji **P2P Multiplayer / Udostępnianie LAN** lub dołączyć do serwera społeczności z wyłączoną weryfikacją `online-mode=false`.

👉 **[Masz problemy z oficjalnym logowaniem Microsoft? Przeczytaj nasz poradnik rozwiązywania problemów](./microsoft-login-issues)**
