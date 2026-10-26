# Big Picture Mode & Gamepad Support

<!-- xmcl-auto-fallback -->
::: info Dieser Abschnitt ist noch nicht auf Deutsch verfügbar
Der Text wird auf Englisch angezeigt. Wenn Sie bei der Übersetzung helfen möchten, können Sie gerne im [xmcl-page GitHub-Repository](https://github.com/voxelum/xmcl-page) mitwirken.
:::

XMCL features a dedicated **Big Picture Mode** — a full-screen, 10-foot user interface designed specifically for couch gaming on televisions, PC gamepad navigation, and handheld gaming consoles like the Steam Deck, ASUS ROG Ally, and Lenovo Legion Go.

---

Supported Gamepads & Controllers

XMCL includes a native controller detection system based on the W3C Gamepad API, dynamically adjusting button glyphs and navigation maps for each device family:

| Controller Family | Hardware & Models | Button Prompts |
| :--- | :--- | :--- |
| **Steam Deck** | Valve Steam Deck built-in controls (Neptune), Gamescope, SteamOS Game Mode | `A`, `B`, `X`, `Y`, `L1/R1`, `L2/R2`, `View`, `Menu` |
| **Xbox** | Xbox Series X/S, Xbox One, Xbox 360, Xbox Elite Controller, and all third-party XInput PC gamepads | `A`, `B`, `X`, `Y`, `LB/RB`, `LT/RT`, `View`, `Menu` |
| **PlayStation** | DualSense (PS5), DualSense Edge, DualShock 4 (PS4), DualShock 3 (PS3), PS2 via USB converters | `` (Cross), `○` (Circle), `□` (Square), `△` (Triangle), `L1/R1`, `L2/R2`, `Share/Options` |
| **Nintendo Switch** | Nintendo Switch Pro Controller, Joy-Con pairs or standalone | `B` (Confirm), `A` (Cancel), `Y`, `X`, `L/R`, `ZL/ZR`, `-`, `+` |
| **Nintendo Wii / Wii U** | Nintendo Wii Remote (Wiimote via Bluetooth/Dolphin), Wii U Pro Controller | `A`, `B`, `1`, `2`, `L/R`, `ZL/ZR`, `-`, `+` |
| **Generic Controllers** | Any Bluetooth or USB controller complying with W3C standard gamepad mappings | Standard W3C button indices |

::: tip Dynamic Glyph Adaptation
When you connect a controller, XMCL automatically identifies its hardware type and swaps on-screen icons in real time. For example, connecting a PlayStation controller displays native `` and `○` marks, whereas an Xbox or Steam Deck controller displays `A`, `B`, `X`, `Y`.
:::

---

Navigating in Big Picture Mode

Big Picture eliminates the need for a mouse and keyboard. You can navigate the entire launcher using gamepad inputs:

* **Left Stick / D-Pad**: Smooth spatial navigation between UI cards, instance lists, and modal menus.
* **Bottom Face Button (`A` / `` / `B`)**: Confirm selection, launch instance, open settings.
* **Right Face Button (`B` / `○` / `A`)**: Cancel, go back, dismiss dialogs or overlays.
* **Bumpers (`L1/R1` or `LB/RB`)**: Switch between major views (Home, Store, Settings, Logs).
* **Triggers (`L2/R2` or `LT/RT`)**: Turn pages in the Modrinth and CurseForge mod and modpack store catalogs.
* **Top Face Button (`Y` / `△`)**: Trigger search and summon the on-screen virtual keyboard.

---

## ⌨ Built-in Virtual Keyboard

You don't need a physical keyboard to search for mods or name game instances:

1. Focus any text field or press the `Y` (`△`) button.
2. The virtual keyboard overlay appears on screen, designed for rapid navigation via stick or D-Pad.
3. Press `X` (`□`) for backspace / delete.
4. Press `A` (``) to enter the selected letter, and press `Start / Menu` to confirm input.

---

Auto-Activation & General Settings

You can customize how Big Picture launches:

1. Open **Settings** -> **General**.
2. Locate the **Big Picture** section:
   - **Default Launch**: Always start XMCL in Big Picture full-screen mode on boot.
   - **Auto on Gamepad**: If XMCL is running in desktop mode, connecting a physical gamepad or pressing any button on it automatically switches the launcher into Big Picture.

---

Handheld Gaming & SteamOS (Steam Deck)

XMCL has tailored optimizations for **Steam Deck**:

* **Console & Deck Detection**: When executed inside **SteamOS Game Mode** (Gamescope), XMCL automatically detects the handheld console environment and boots into an optimized 1280x800 layout.
* **One-Click Desktop Switch**: A dedicated quick exit button allows returning to desktop mode or Steam without force-closing.
* **Steam Input & Trackpad Support**: Works seamlessly alongside Steam Input configurations, permitting simultaneous analog stick navigation and trackpad mouse emulation.
