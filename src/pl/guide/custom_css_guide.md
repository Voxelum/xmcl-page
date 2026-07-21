# Przewodnik po własnych motywach CSS Launchera

Ten przewodnik zawiera kompleksowy poradnik dotyczący projektowania, pisania i dostosowywania interfejsu launchera przy użyciu niestandardowych arkuszy stylów CSS. Opisuje główne elementy układu, selektory oraz zaawansowane techniki stylizacji (takie jak glassmorphism, odblaski światła i zastępowanie wbudowanych ikon), które można wykorzystać do tworzenia unikalnych motywów.

---

## 1. Główna architektura i wstrzykiwanie motywów

Interfejs użytkownika launchera jest zbudowany w oparciu o **Vue 3** i **Vuetify 3**. Style są wstrzykiwane globalnie za pomocą silnika niestandardowych arkuszy CSS.

Aby upewnić się, że własne style poprawnie nadpisują domyślne style Vuetify, zawsze pisz precyzyjne selektory CSS i używaj `!important` w przypadku konfliktów z wbudowanymi stylami Vuetify lub deklaracjami klas o wysokiej specyficzności.

### Typografia i wygładzanie czcionek
Zawsze ustawiaj domyślny zestaw czcionek i optymalizuj renderowanie tekstu na poziomie root:
```css
html, body, #app, .v-application {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  text-rendering: optimizeLegibility !important;
}
```

---

## 2. Nadpisywanie tokenów kolorów Vuetify 3

Vuetify definiuje główne kolory jako surowe wartości RGB (np. `255, 255, 255`) w głównych kontenerach aplikacji w celu obliczania przezroczystości. Aby zmienić te zmienne globalnie bez uszkadzania komponentów, zdefiniuj je ponownie wewnątrz tych selektorów:

```css
.v-application,
.v-theme--dark,
.v-theme--light {
  --v-theme-background: 18, 18, 28;      /* Tło główne aplikacji */
  --v-theme-surface: 25, 25, 35;          /* Powierzchnie kart i okien dialogowych */
  --v-theme-on-surface: 255, 255, 255;    /* Domyślny kolor tekstu */
  --v-theme-primary: 0, 122, 255;         /* Kolor akcentu (Apple Blue itp.) */
  --v-theme-on-primary: 255, 255, 255;    /* Kolor tekstu na przyciskach akcentu */
  --v-theme-error: 255, 59, 48;           /* Banery błędów i odznaki */
}
```

Jeśli chcesz sprawić, by domyślne strony były przezroczyste, aby widoczna była tapeta pulpitu:
```css
.v-main,
.v-main__wrap,
.v-container,
.v-layout,
.home-page,
.setting-page,
.multiplayer,
.absolute.z-0.h-full.w-full {
  background: transparent !important;
  background-color: transparent !important;
}
```

---

## 3. Kluczowe komponenty i selektory CSS

### 🖥️ Pasek tytułu / Pasek systemowy
Nagłówek okna korzysta z klasy `.v-system-bar`, która zawiera elementy sterujące oknem oraz wyzwalacze wskaźników.
- **Pasek tytułu**: `.v-system-bar`
- **Przyciski sterujące (Minimalizuj/Maksymalizuj/Zamknij)**: `.system-btn` lub `.v-system-bar .system-btn`
- **Klasa przycisku Zamknij**: `.system-btn--close`
- **Wskaźniki systemowe (Wyszukaj, Zadania, Pomoc)**: `.system-bar-badge`
- **Etykieta skrótu klawiszowego wewnątrz wskaźnika**: `.palette-hotkey`

*Przykład: Przeniesienie przycisków sterujących oknem na lewą stronę i stylizowanie na wzór macOS przy użyciu Flexbox:*
```css
.v-system-bar {
  flex-direction: row-reverse !important; /* Umieść przyciski po lewej */
  justify-content: space-between !important;
}
.v-system-bar > span[role="group"] {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
}
/* Zmiana kolejności przycisków: Zamknij (3. dziecko -> 1.), Min (1. -> 2.), Max (2. -> 3.) */
.v-system-bar .system-btn.system-btn--close { order: 1 !important; background: #ff5f56 !important; }
.v-system-bar .system-btn:nth-child(1) { order: 2 !important; background: #ffbd2e !important; }
.v-system-bar .system-btn:nth-child(2) { order: 3 !important; background: #27c93f !important; }
```

---

### 🎛️ Boczny pasek nawigacyjny (Dock)
Pasek boczny po lewej stronie działa jak szuflada zawierająca profile, skrót do wyszukiwania oraz ustawienia.
- **Główny kontener paska bocznego**: `.sidebar` lub `[data-testid="app-sidebar"]`
- **Kontener listy elementów**: `.sidebar-notch__container`
- **Pojedyncze ikony paska bocznego**: `.sidebar-notch-item`
- **Aktywny przycisk nawigacji**: `.sidebar-notch-item.router-link-active` lub `.sidebar-notch-item--active`
- **Przycisk Wstecz**: `.sidebar-back-btn` lub `.system-bar-back-btn`

---

### 📦 Okna, karty i okna dialogowe
Karty służą jako modułowe bloki dla wszystkich funkcji.
- **Kontener karty**: `.v-card`
- **Nagłówek karty / Nagłówek okna dialogowego**: `.v-card-title`
- **Obszar zawartości karty**: `.v-card-text`
- **Dolny obszar przycisków akcji karty**: `.v-card-actions`
- **Pływające okna dialogowe nakładki**: `.v-dialog`
- **Karty grupowe na stronie ustawień**: `.setting-page .v-card`

---

### 🔘 Przyciski
Przyciski istnieją w różnych stanach (wypukłe, obramowane, tekstowe).
- **Globalna klasa przycisku**: `.v-btn`
- **Warianty kształtu**: `.v-btn--variant-flat`, `.v-btn--variant-elevated`, `.v-btn--variant-tonal`, `.v-btn--variant-outlined`
- **Przyciski główne / akcji**: `.v-btn[color="primary"]`, `.v-btn.text-primary`, `[data-testid="login-submit"]`, `[data-testid="launch-button"]`
- **Stan aktywny (w przełącznikach)**: `.v-btn.v-btn--active`, `.v-btn-toggle .v-btn--active`, `.v-btn[aria-pressed="true"]`
- **Wyłączone przyciski**: `.v-btn:disabled`, `.v-btn[disabled]`
- **Przyciski tekstowe / ikonowe**: `.v-btn--variant-text`, `.v-btn--variant-plain`, `.v-btn--icon`

---

### 📝 Pola formularzy i listy rozwijane
Wyszukiwanie pól wejściowych i wyboru.
- **Kontener pola (Pola tekstowe / Obszary tekstowe)**: `.v-field`, `.v-text-field`, `textarea`
- **Podświetlenie obramowania aktywnego pola**: `.v-field--focused`, `.v-text-field:focus-within`
- **Lista rozwijana (Wybór opcji)**: `.v-list`
- **Pojedyncze opcje listy rozwijanej**: `.v-list-item`
- **Wybrana opcja**: `.v-list-item--active`

---

### 🎚️ Przełączniki, pola wyboru i suwaki
- **Ścieżka przełącznika**: `.v-switch__track`
- **Ścieżka aktywnego przełącznika**: `.v-switch--selected .v-switch__track`
- **Pokrętło przełącznika**: `.v-switch__thumb`
- **Ramka pola wyboru (Checkbox)**: `.v-checkbox .v-selection-control__input`
- **Zaznaczone pole wyboru**: `.v-checkbox .v-selection-control__input--selected`

---

### 📰 Karuzela i sekcje strony profilu ("Ja")
Strona "Moje Rzeczy" (Ja) zawiera karuzelę wiadomości i listy siatki.
- **Kontener siatki strony**: `.my-stuff-page`
- **Nagłówki sekcji strony**: `.my-stuff-page .section-title`, `.my-stuff-page .section-icon`
- **Kontener karuzeli wiadomości**: `.news-carousel-wrapper` lub `.news-carousel`
- **Obudowa slajdu**: `.news-slide`
- **Kontener obrazu**: `.news-image-wrapper`, `.news-image`
- **Gradient cienia obrazu**: `.news-gradient`
- **Obszar tekstowy karty wiadomości**: `.news-info`
- **Tytuły wiadomości**: `.news-title`
- **Opis wiadomości**: `.news-description`
- **Link „Więcej”**: `.news-read-more` lub `.v-btn.news-read-more`

---

## 4. Zaawansowane sztuczki stylizacji CSS

### 💧 Płynne szkło (Glassmorphism z połyskiem)
Jak zaprojektować półprzezroczyste tło w stylu macOS:
1. Zwiększ przezroczystość tła (`rgba`) i nasycenie.
2. Użyj `backdrop-filter: blur(...)`, aby rozmyć zawartość pod szkłem.
3. Dodaj ukośny gradient, aby imitować błyszczące odbicie światła.
4. Utwórz ostre jasne ramki na górnej i lewej krawędzi.

```css
.v-card {
  /* Odblask połysku */
  background: linear-gradient(135deg, 
                rgba(255, 255, 255, 0.16) 0%, 
                rgba(255, 255, 255, 0.07) 50%, 
                rgba(255, 255, 255, 0.0) 50.1%, 
                rgba(255, 255, 255, 0.03) 100%) !important;
  backdrop-filter: blur(25px) saturate(200%) contrast(90%) !important;
  -webkit-backdrop-filter: blur(25px) saturate(200%) contrast(90%) !important;
  
  /* Jasne obramowania */
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  border-top-color: rgba(255, 255, 255, 0.32) !important;
  border-left-color: rgba(255, 255, 255, 0.24) !important;
  
  /* Cień i wewnętrzny blask */
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35), 
              inset 0 1px 1px rgba(255, 255, 255, 0.25) !important;
  border-radius: 16px !important;
}
```

---

### 🎨 Niestandardowe ikony (wstrzykiwanie SVG)
Launcher wyświetla ikony przy użyciu czcionek Material Design. Możesz zastąpić dowolną ikonę bezpośrednio za pomocą CSS bez zmiany szablonów Vue, ukrywając oryginalny tekst i dodając obraz tła SVG:

1. **Ukrywanie tekstu ikony**: ustaw dla `.v-icon` lub swojej klasy `font-size: 0 !important`.
2. **Wymiary**: nadaj elementom ikon wyraźne wartości `width` i `height`.
3. **Wstrzykiwanie wektora**: przypisz zakodowany SVG jako `background-image`.

```css
/* 1. Globalne resetowanie nadpisanych ikon */
.sidebar-notch-item__icon,
.my-stuff-page .section-icon,
.badge-icon {
  font-size: 0 !important; /* Ukryj oryginalny tekst */
  width: 18px !important;
  height: 18px !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  display: inline-block !important;
}

/* 2. Wstrzykiwanie ikon SVG */
/* Koło zębate ustawień */
[data-testid="nav-settings"] .sidebar-notch-item__icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3Cpath d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'/%3E%3C/svg%3E") !important;
}

/* Trójkąty sklepu z aplikacjami */
[data-testid="nav-store"] .sidebar-notch-item__icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.5' stroke-linecap='round'%3E%3Cpath d='M12 4v16M5 16l14-8M5 8l14 8'/%3E%3C/svg%3E") !important;
}
```

---

### 💾 Paski przewijania macOS
Stylizacja ścieżek i suwaków paska przewijania:
```css
::-webkit-scrollbar {
  width: 8px !important;
  height: 8px !important;
}
::-webkit-scrollbar-track {
  background: transparent !important;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.22) !important;
  border-radius: 10px !important;
  border: 2px solid transparent !important;
  background-clip: padding-box !important;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.35) !important;
}
```
