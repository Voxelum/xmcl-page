# Czym jest modloader i dlaczego go potrzebuję

Loadery modów (mod loaders) do Minecrafta to niezbędne narzędzia, które pozwalają zarówno graczom, jak i twórcom modów rozszerzać i wzbogacać grę.

Niezależnie od tego, czy chcesz dodać realistyczne efekty shaderów, które całkowicie zmienią wygląd Twojego świata, czy osiągnąć te epickie, ogromne odległości renderowania widoczne w popularnych klipach na TikToku i YouTube, modloader jest Twoją bramą do kreatywnych ulepszeń.

Na exempel, jeśli chcesz zainstalować modyfikację shaderów (taką jak Sildur's Shaders) w celu uzyskania realistycznego oświetlenia lub dodać mod "Distant Horizons", aby zobaczyć rozległe krajobrazy w swoim świecie Minecraft, będziesz potrzebować modloadera, takiego jak Fabric lub Forge, aby zarządzać tymi modyfikacjami.

**Cóż, być może nie będziesz musiał zbytnio martwić się wyborem modloader, to Twoje mody dokonają wyboru za Ciebie...**

W tym dokumencie przyjrzymy się czterem popularnym modloaderom: **Minecraft Forge**, **Fabric**, **NeoForge** i **Quilt**. Każdy z nich oferuje własny zestaw funkcji i korzyści, zaspokajając różne potrzeby modowania i preferencje dotyczące wydajności.


## Minecraft Forge

<AppForgePicture />

**Przegląd:**

- Oryginalny i sprawdzony w bojach modloader do Minecrafta.
- Oferuje szerokie wsparcie społeczności i dojrzały ekosystem.
- Zapewnia solidne API, co czyni go idealnym dla rozbudowanych paczek modów i modyfikacji głęboko integrujących się z grą.

**Kluczowe cechy:**

- **Dojrzały ekosystem:** Lata rozwoju zaowocowały bogatą dokumentacją, poradnikami i zasobami społeczności.
- **Głęboka integracja API:** Kompleksowe API Forge pozwala na szczegółową interakcję z Minecraftem, co jest idealne dla modów modyfikujących podstawowe funkcje gry.
- **Szeroka kompatybilność:** Wiele popularnych modów i rozbudowanych paczek modów jest tworzonych dla Forge, co gwarantuje szeroką kompatybilność.

**Uwagi:**

- **Opóźnienie aktualizacji:** Forge może czasami potrzebować więcej czasu na dostosowanie do najnowszych wersji Minecrafta.
- **Zużycie zasobów:** Jego rozbudowany zestaw funkcji może powodować dłuższy czas ładowania w porównaniu z lżejszymi loaderami.

## Fabric

<AppFabricPicture />

**Przegląd:**

- Lekki, modułowy modloader zaprojektowany dla nowoczesnych wersji Minecrafta.
- Preferowany przez programistów i graczy stawiających na szybkość działania i błyskawiczne aktualizacje.
- Szczególnie polecany dla modów poprawiających wydajność graficzną, takich jak shadery lub modyfikacje zwiększające odległość renderowania.

**Kluczowe cechy:**

- **Zorientowany na wydajność:** Jego opływowa konstrukcja minimalizuje obciążenie, prowadząc do szybkiego ładowania.
- **Szybkie aktualizacje:** Modułowa struktura Fabric pozwala mu szybko adaptować się do nowych wersji gry.
- **Elastyczność dla programistów:** Proste, ale potężne API sprzyja szybkiemu eksperymentowaniu.

**Przykładowy przypadek użycia:**

- **Rozległe widoki:** Jeśli chcesz zainstalować modyfikację taką jak "Distant Horizons" w celu dramatycznego zwiększenia odległości renderowania, Fabric jest doskonałym wyborem.
- **Ulepszona grafika:** Podobnie, dodawanie shaderów w celu uzyskania realistycznego światła i cieni staje się dziecinnie proste dzięki zoptymalizowanemu loaderowi Fabric.

**Uwagi:**

- **Rosnąca biblioteka:** Chociaż społeczność szybko rośnie, biblioteka modów dla Fabric wciąż nadrabia zaległości w stosunku do bogatej oferty Forge.
- **Ograniczone wsparcie wsteczne:** Zaprojektowany głównie dla nowoczesnych wersji Minecrafta, co oznacza, że starsze mody mogą nie być obsługiwane.

## NeoForge

<AppNeoForgePicture />

**Przegląd:**

- Dynamicznie rozwijający się modloader, który ma na celu połączenie szerokiej kompatybilności Forge z nowoczesnymi optymalizacjami wydajności.
- Skierowany do graczy szukających złotego środka między tradycyjną funkcjonalnością a zoptymalizowaną wydajnością.

**Kluczowe cechy:**

- **Podejście hybrydowe:** Łączy wiele solidnych funkcji Forge z nowoczesnymi ulepszeniami wydajności.
- **Nowoczesna baza kodu:** Stworzony z myślą o współczesnych praktykach modowania, zapewniając jednocześnie wsparcie dla istniejących rozwiązań.
- **Kierowany przez społeczność:** Stale rozwijany w oparciu o opinie użytkowników i programistów.

**Uwagi:**

- **Wczesny etap:** Jako nowe narzędzie, NeoForge może nie oferować jeszcze tak szerokiej gamy obsługiwanych modów ani tak dopracowanej dokumentacji, jak starsze loadery.

## Quilt

**Przegląd:**

- Fork projektu Fabric, który rozbudowuje jego lekkie podstawy, wprowadzając dodatkowe ulepszenia.
- Opracowany w odpowiedzi na potrzeby społeczności, Quilt ma na celu udoskonalenie działania loaderów modów.

**Kluczowe cechy:**

- **Ulepszona funkcjonalność:** Oferuje dodatkowe interfejsy API i narzędzia, które otwierają nowe kreatywne możliwości przed twórcami.
- **Innowacja oparta na społeczności:** Quilt został zaprojektowany z myślą o nowoczesnych twórcach modów, oferując zarówno szybkie aktualizacje, jak i innowacyjne funkcje.
- **Płynna integracja:** Początkowo wspierając mody Fabric, Quilt stopniowo buduje swój własny, unikalny ekosystem.

**Uwagi:**

- **Aktywny rozwój:** Quilt jest wciąż we wczesnej fazie rozwoju, więc użytkownicy mogą sporadycznie napotkać pewne niestabilności.

## OptiFine

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppOptifinePicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">OptiFine</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">Legendarny mod optymalizacyjny do Minecrafta. Zapewnia ogromny wzrost FPS, wsparcie dla tekstur HD, shaderów oraz bogactwo ustawień graficznych.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(30, 58, 138, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">FPS Boost</span>
      <span style="background: rgba(30, 58, 138, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Shaders Support</span>
      <span style="background: rgba(30, 58, 138, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Fine-Tuning</span>
    </div>
  </div>
</div>

*   **Zalety:** Niezrównana kompatybilność ze starszymi wersjami Minecrafta, najprostszy sposób na uruchomienie shaderów bez instalowania innych modów.
*   **Wady:** Zamknięte źródło (closed-source), co często powoduje konflikty kompatybilności z nowoczesnymi modami Forge/Fabric.

---

## LabyMod

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppLabymodPicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">LabyMod</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">Bogata w funkcje modyfikacja klienta Minecrafta. Całkowicie odświeża interfejs użytkownika, dodając różne przydatne widżety, animacje i wbudowane kosmetyki.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(15, 23, 42, 0.15); color: #22d3ee; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Custom HUD</span>
      <span style="background: rgba(15, 23, 42, 0.15); color: #22d3ee; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Client Mod</span>
      <span style="background: rgba(15, 23, 42, 0.15); color: #22d3ee; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Cosmetics</span>
    </div>
  </div>
</div>

*   **Zalety:** Modułowa konstrukcja, szeroki wybór gotowych widżetów PvP, płynna integracja i łatwa personalizacja HUD.
*   **Wady:** Skupiony głównie na rozgrywce wieloosobowej i PvP; może kolidować z niektórymi modami modyfikującymi globalne generowanie świata.

---

## Porównanie

| Cecha | Minecraft Forge | Fabric | NeoForge | Quilt | OptiFine | LabyMod |
| --- | --- | --- | --- | --- | --- | --- |
| **Wydajność** | Sporadycznie dłuższy czas ładowania | Zoptymalizowany pod kątem szybkości | Równoważy stabilność z wydajnością | Zwiększona szybkość z dodatkowymi funkcjami | Doskonały wzrost FPS na starszych wersjach | Niezwykle płynny, zoptymalizowany HUD |
| **Społeczność i wsparcie** | Obszerne, dobrze ugruntowane | Szybko rosnące | Nowe; społeczność wciąż się rozwija | Korzysta ze społeczności Fabric | Status legacy, powszechnie znany | Dedykowana społeczność multiplayer |
| **Kompatybilność modów** | Szeroka i ugruntowana | Najlepsza dla nowoczesnych modów | Łączy wsparcie dla starych i nowych modów | Kompatybilny z modami Fabric | Dużo konfliktów (zamknięte źródło) | Modułowa baza, dodatki zorientowane na PvP |
| **Cykl aktualizacji** | Wolniejsze wdrażanie nowych wersji | Szybki i elastyczny | Stopniowo dojrzewa dzięki opiniom | Zwinne aktualizacje modułowe | Wolniejsze wydania o zamkniętym źródle | Szybkie aktualizacje dla wersji PvP |

---

## Wybór i zarządzanie modami w XMCL

X Minecraft Launcher (XMCL) zapewnia natywny, zintegrowany system instalacji modloaderów i zarządzania modami. Nie musisz pobierać zewnętrznych instalatorów `.jar` lub `.exe` ani przechodzić przez złożone procedury konfiguracji.

### 1. Instalacja modloadera jednym kliknięciem
Podczas tworzenia nowej instancji lub edycji wersji istniejącej instancji:
1. Otwórz panel wyboru wersji w ustawieniach instancji.
2. Wybierz żądaną wersję Minecrafta.
3. Wybierz modloader, którego chcesz użyć (**Forge**, **Fabric**, **NeoForge** lub **Quilt**), a także dodatki optymalizacyjne lub modyfikacje, takie jak **OptiFine** lub **LabyMod**.
4. XMCL automatycznie pobierze, rozpakuje i zweryfikuje wszystkie biblioteki i zależności podczas uruchamiania gry.

### 2. Zintegrowany pobieracz modów
W zakładce **Mody** w swojej instancji możesz wyszukiwać i pobierać mody bezpośrednio z platform **Modrinth** i **CurseForge** bez otwierania przeglądarki:
* **Automatyczne filtrowanie:** XMCL automatycznie filtruje wyniki wyszukiwania według wersji Minecrafta i modloadera wybranej instancji. Zobaczysz tylko kompatybilne mody.
* **Automatyczne rozwiązywanie zależności:** Jeśli mod wymaga innej biblioteki (takiej jak *Fabric API* lub *Architectury*), XMCL to wykryje i zaoferuje automatyczne pobranie wszystkich wymaganych zależności.

### 3. Włączanie, wyłączanie i aktualizacja modów
* **Włączanie/wyłączanie modów:** Możesz tymczasowo wyłączyć mody za pomocą prostych przełączników na liście modów. Nie ma potrzeby przenoszenia plików z folderu `mods`.
* **Łatwe aktualizacje:** Launcher skanuje zainstalowane mody i wskazuje, które z nich mają dostępne aktualizacje, umożliwiając ich uaktualnienie jednym kliknięciem.
