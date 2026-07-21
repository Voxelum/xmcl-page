# Współtworzenie
### Stos technologiczny i trochę informacji ogólnych

Oto przegląd narzędzi i środowiska wykonawczego tego projektu

Dla całego projektu mamy:

- [Node.js >=20](https://nodejs.org/). Podstawowe środowisko bibliotek.
- [Electron 29](https://electron.atom.io). Faktyczne środowisko wykonawcze launchera.
- [pnpm](https://pnpm.io/). Używany do zarządzania pakietami w monorepo.
- [TypeScript](https://www.typescriptlang.org/). Cały projekt używa TypeScript w jak największym stopniu.

Dla procesu głównego (Electron) mamy:

- [esbuild](https://esbuild.github.io/). Używamy esbuild do budowania naszego głównego procesu TypeScript.

Dla strony renderującej, która jest czystym frontendem:

- [Vue](https://vuejs.org). Używany do budowania interfejsów użytkownika.
- [Vite](https://vitejs.dev/). Używany jako nasz system budowania.
- [Vuetify](https://vuetifyjs.com/). Używany jako biblioteka komponentów.
- [Vue Composition API](https://github.com/vuejs/composition-api). Pomost dla API kompozycyjnego dla Vue 2. Gdy Vuetify zostanie zaktualizowany do Vue 3, Vue zostanie zaktualizowany i to zostanie usunięte.

### Struktura projektu

![diagram](/assets/diagram.svg)

Możesz zobaczyć [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Voxelum/x-minecraft-launcher) dla szczegółowego projektu. Powinno obejmować 90% przypadków!

## Jak wnieść wkład

Zdecydowanie zalecamy używanie VSCode do otwierania projektu.

### Pierwsze kroki

#### Klonowanie

Sklonuj projekt z flagą submodułu `--recurse-submodules`.

```bash
git clone --recurse-submodules https://github.com/Voxelum/x-minecraft-launcher
```

Jeśli zapomnisz dodać flagę `--recurse-submodules`, musisz ręcznie zainicjować i zaktualizować submoduł git.

```bash
git submodule init
git submodule update
```

#### Instalacja

Zainstaluj projekt używając [pnpm](https://pnpm.io):

```
pnpm install
```

<details>
  <summary> Rozwiązanie problemu wolnej instalacji zależności (takich jak Electron) w Chinach kontynentalnych </summary>

  Otwórz git bash i przed `pnpm i` dodaj `registry=https://registry.npm.taobao.org electron_mirror="https://npm.taobao.org/mirrors/electron/"`. Użyj krajowego lustra npm i Electron dostarczanego przez Alibabę.

  Ostatecznie wprowadzone polecenie to:

  ```bash
  registry=https://registry.npm.taobao.org electron_mirror="https://npm.taobao.org/mirrors/electron/" pnpm i
  ```
</details>

#### Ustawianie zmiennych środowiskowych

Powinieneś ustawić `CURSEFORGE_API_KEY` tworząc plik `.env` w `xmcl-electron-app`. Ten plik `.env` jest dodany do pliku `.gitignore`.

:::warning UWAGA
**NIE UJAWNIAJ SWOJEGO KLUCZA API CURSEFORGE**
:::

#### Uruchamianie Launchera

Następnie możesz uruchomić launcher

#### Dla VSCode

Przejdź do sekcji `Run and Debug`, użyj profilu `Electron: Main (launch)` aby uruchomić electron. (Skrót klawiszowy F5)

#### Dla innych niż VSCode

Otwórz jeden terminal

```bash
# Uruchom serwer dev dla UI
npm run dev:renderer
```

Otwórz inny terminal

``` bash
# Uruchom obserwowanie kodu procesu głównego
npm run dev:main
```

#### "Gorąca" zmiana kodu

Masz zmianę w kodzie i chcesz zaktualizować zmianę w działającej instancji launchera.

##### Dla procesu przeglądarki

Vite zapewnia hot reload, powinien aktualizować się automatycznie. Jeśli coś pójdzie nie tak, możesz odświeżyć przeglądarkę za pomocą `Ctrl+R`.

##### Dla procesu głównego

Jeśli używasz VSCode do uruchomienia launchera, po zmianie kodu możesz nacisnąć przycisk przeładowania w debuggerze VSCode.

Jeśli nie używasz VSCode do uruchomienia, powinien zamknąć Electron i automatycznie przeładować.

### Znalazłeś coś nieprawidłowego w rdzeniu launchera

Rdzeń launchera znajduje się w [oddzielnym projekcie](https://github.com/voxelum/minecraft-launcher-core-node) napisanym w TypeScript.

Proszę otworzyć problem tam, jeśli zidentyfikujesz jakikolwiek problem z nim związany.

### Debugger VSCode

Projekt zawiera konfiguracje debuggera VSCode. Możesz dodać punkt przerwania w linii i debugować. Obecnie metoda debuggera VSCode obsługuje tylko debugowanie w procesie głównym.

(Możesz używać Chrome DevTools dla procesu renderującego w każdym razie)

Mamy teraz dwie opcje:

1. Electron: Main (launch)
2. Electron: Main (attach)

Jeśli użyjesz pierwszej opcji do uruchomienia, automatycznie dołączy debugger do instancji.

### Commitowanie kodu

Ten projekt przestrzega [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/). Krótko mówiąc, pierwsza linia twojej wiadomości commit powinna wyglądać tak:

```
typ commita: opis commita
```

Dostępnych jest kilka typów commitów: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`, `test`.

Odnosząc się do [tego gista](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716):

> feat: (nowa funkcja dla użytkownika, nie nowa funkcja dla skryptu budującego)
>
> fix: (poprawka błędu dla użytkownika, nie poprawka dla skryptu budującego)
>
> docs: (zmiany w dokumentacji)
>
> style: (formatowanie, brakujące średniki itp.; brak zmian w kodzie produkcyjnym)
>
> refactor: (refaktoryzacja kodu produkcyjnego, np. zmiana nazwy zmiennej)
>
> test: (dodawanie brakujących testów, refaktoryzacja testów; brak zmian w kodzie produkcyjnym)
>
> chore: (aktualizacja zadań grunt itp.; brak zmian w kodzie produkcyjnym)

**Twój commit zostanie odrzucony, jeśli nie będziesz przestrzegać tych zasad.**

### Jak budować

Obecny launcher wymaga uruchomienia 2 poleceń do zbudowania

Najpierw musisz zbudować kod frontendu:

```bash
pnpm build:renderer
```

Chyba że kod w `xmcl-keystone-ui` uległ zmianie, nie musisz budować tego ponownie.

Następnie możesz zbudować Electron z dołączonym właśnie zbudowanym frontendem:

```bash
pnpm build
```