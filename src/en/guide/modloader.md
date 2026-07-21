# What is modloader and why I need that

Minecraft mod loaders are essential tools that empower both players and mod developers to extend and enrich the game.

Whether you want to add realistic shader effects that completely transform the look of your world or achieve those epic, far-reaching views seen in viral TikTok and YouTube clips, a mod loader is your gateway to creative enhancements.

For example, if you'd like to install a shader mod like Sildur's Shaders for lifelike lighting effects, or add the "Distant Horizons" mod to see extended vistas in your Minecraft world, you'll need a mod loader such as Fabric or Forge to handle these modifications.

**Well, maybe you won't struggle very much on choosing the modloader, your mods make the choice...**

In this document, we will explore popular mod loaders and client optimization modifications. Each offers its own set of features and benefits, catering to different modding needs and performance preferences.

---

## Minecraft Forge

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppForgePicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">Minecraft Forge</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">The original, battle-tested mod loader for Minecraft. Ideal for massive modpacks and mods with deep gameplay integration.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(147, 34, 255, 0.15); color: #a855f7; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Mature Ecosystem</span>
      <span style="background: rgba(147, 34, 255, 0.15); color: #a855f7; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Deep API</span>
      <span style="background: rgba(147, 34, 255, 0.15); color: #a855f7; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Broad Compatibility</span>
    </div>
  </div>
</div>

*   **Pros:** Years of development mean massive resources, tutorials, documentation, and a mature community.
*   **Cons:** Slower update times for newer game versions; higher resource overhead which might increase load times.

---

## Fabric

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppFabricPicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">Fabric</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">A lightweight, modular mod loader designed for modern Minecraft versions. Excellent for game performance, high FPS, and quick updates.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Performance-Oriented</span>
      <span style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Rapid Updates</span>
      <span style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Lightweight</span>
    </div>
  </div>
</div>

*   **Pros:** Minimal performance overhead, fast start-up speeds, and very quick updates to new Minecraft versions (ideal for FPS boosters and shaders).
*   **Cons:** Mod library is still catching up to Forge's legacy; limited support for older game versions.

---

## NeoForge

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppNeoForgePicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">NeoForge</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">A modern fork of Forge, combining the robust and comprehensive feature set of the original loader with modern performance optimizations.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(59, 130, 246, 0.15); color: #3b82f6; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Modern API</span>
      <span style="background: rgba(59, 130, 246, 0.15); color: #3b82f6; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Hybrid Approach</span>
      <span style="background: rgba(59, 130, 246, 0.15); color: #3b82f6; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Active Development</span>
    </div>
  </div>
</div>

*   **Pros:** Rewritten clean codebase, better developer experience, and actively driven by the community for modern performance standards.
*   **Cons:** Emerging ecosystem means less documentation and fewer compatible mods initially compared to legacy Forge.

---

## Quilt

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <QuiltIcon style="width: 48px; height: 48px; display: block;" />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">Quilt</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">A community-driven fork of Fabric that extends its lightweight foundations with more tools and direct backward compatibility for Fabric mods.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(236, 72, 153, 0.15); color: #ec4899; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Fabric Compatible</span>
      <span style="background: rgba(236, 72, 153, 0.15); color: #ec4899; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Innovative</span>
      <span style="background: rgba(236, 72, 153, 0.15); color: #ec4899; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Flexible</span>
    </div>
  </div>
</div>

*   **Pros:** Native out-of-the-box compatibility with most Fabric mods; offers additional advanced APIs for mod developers.
*   **Cons:** Still in active development, meaning potential minor instabilities as it transitions into a fully independent platform.

---

## OptiFine

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppOptifinePicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">OptiFine</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">The legendary Minecraft optimization mod. Provides a massive FPS boost, support for HD textures, shaders, and a wealth of graphics configurations.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(30, 58, 138, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">FPS Boost</span>
      <span style="background: rgba(30, 58, 138, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Shaders Support</span>
      <span style="background: rgba(30, 58, 138, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Fine-Tuning</span>
    </div>
  </div>
</div>

*   **Pros:** Unmatched compatibility on older Minecraft versions, easiest way to run shaders without installing other mods.
*   **Cons:** Closed source code, which often causes compatibility conflicts with modern Forge/Fabric mods.

---

## LabyMod

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppLabymodPicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">LabyMod</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">A feature-rich Minecraft client modification. It fully revamps the user interface, adding various useful widgets, animations, and built-in cosmetics.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(15, 23, 42, 0.15); color: #22d3ee; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Custom HUD</span>
      <span style="background: rgba(15, 23, 42, 0.15); color: #22d3ee; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Client Mod</span>
      <span style="background: rgba(15, 23, 42, 0.15); color: #22d3ee; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Cosmetics</span>
    </div>
  </div>
</div>

*   **Pros:** Modular design, wide variety of ready-to-use PvP widgets, smooth integration, and easy HUD customization.
*   **Cons:** Primarily focused on multiplayer and PvP; can conflict with some global world-generation mods.

---

## Compare

| Feature                 | Minecraft Forge                 | Fabric               | NeoForge                            | Quilt                              | OptiFine                            | LabyMod                            |
| ----------------------- | ------------------------------- | -------------------- | ----------------------------------- | ---------------------------------- | ----------------------------------- | ---------------------------------- |
| **Performance**         | Occasionally longer load times  | Optimized for speed  | Balances stability with performance | Enhanced speed with extra features | High FPS boost on older versions    | Extremely smooth, optimized HUD    |
| **Community & Support** | Extensive, well-established     | Rapidly growing      | Emerging; community still evolving  | Leveraging Fabric’s community      | Legacy status, widely known         | Dedicated multiplayer community    |
| **Mod Compatibility**   | Broad and established           | Best for modern mods | Bridges legacy and new mod support  | Compatible with Fabric mods        | High conflicts (closed-source)      | Modular base, PvP-focused addons   |
| **Update Cycle**        | Slower adoption of new versions | Fast and responsive  | Gradually maturing through feedback | Agile modular updates              | Slower, closed-source releases      | Quick updates for PvP versions     |

---

## Mod Loader & Mod Management in XMCL

X Minecraft Launcher (XMCL) provides a native, highly integrated system for installing mod loaders and managing your mods. You do not need to download external `.jar` or `.exe` installers, nor run complex setup processes.

### 1. One-Click Mod Loader Installation
When creating a new instance, or editing an existing instance's version:
1. Open the version setting drawer in the instance.
2. Select your desired Minecraft version.
3. Choose the mod loader you want (**Forge**, **Fabric**, **NeoForge**, or **Quilt**), as well as performance helpers like **OptiFine** or **LabyMod**.
4. XMCL will automatically download, unpack, and verify all libraries and dependencies on game launch.

### 2. Integrated Mod Downloader
Under the **Mods** tab of your instance, you can search and download mods directly from **Modrinth** and **CurseForge** without opening a browser:
* **Auto-Filtering:** XMCL automatically filters search results by your instance's selected Minecraft version and mod loader. You will only see compatible mods.
* **Auto Dependency Resolution:** If a mod requires another library (such as *Fabric API* or *Architectury*), XMCL will detect this and offer to download all required dependencies automatically.

### 3. Mod Management & Toggling
* **Enable/Disable Mods:** You can temporarily disable mods using the simple toggle switches on the Mods list. No need to move files out of the folder.
* **Easy Updates:** The launcher scans your installed mods and highlights which ones have updates available, allowing you to update them with a single click.
