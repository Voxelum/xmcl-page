# XMCL Feature Demonstration Plan

Status: First pass implemented

The first pass now includes the four-scene homepage Product Film, a searchable `/features/` catalog, and English workflow pages for Mod management, modpacks, world tools, sharing, accounts, and diagnostics.

## Goal

Show the breadth of the launcher without turning the homepage into a long feature list. The site should help a visitor understand what XMCL lets them do, see the product in use, and find deeper documentation when they need it.

## Information Architecture

### 1. Homepage: capability map

Keep the homepage focused on a small set of user workflows rather than every individual feature.

Suggested workflow groups:

- Install Minecraft and loaders
- Manage instances and profiles
- Organize mods, resource packs, shaders, and saves
- Discover and update community content
- Manage accounts, skins, and authentication
- Optimize storage and launcher performance
- Play with friends and troubleshoot issues

Each group should contain:

- A clear user-oriented title
- A one-sentence outcome
- One real launcher screenshot or short clip
- Two or three representative capabilities
- A link to the relevant guide or feature catalog section

The existing interactive feature section on the modern homepage can become the first version of this workflow explorer.

### 2. Feature catalog: complete inventory

Add a dedicated `/features/` page for the complete list. Organize features by workflow group and keep each entry compact and scannable.

Each catalog entry should contain:

- Feature name
- User benefit
- Category
- Screenshot, clip, or interface reference
- Related guide link
- Version introduced, when useful
- Optional status such as stable, experimental, or platform-specific

The catalog should support category filtering and, when the inventory becomes large enough, text search. It should remain useful without requiring every feature to have a separate page.

### 3. Feature detail pages: only for substantial workflows

Create a dedicated guide or detail page only when a feature needs setup steps, configuration, troubleshooting, or several screenshots. Avoid creating thin pages for small capabilities.

A detail page should explain:

1. The problem the feature solves
2. The workflow in XMCL
3. Important settings or limitations
4. A practical example
5. Links to related features and documentation

### 4. Changelogs: release history

Keep release-specific announcements in changelogs. The feature catalog describes what XMCL can do now; changelogs explain when a capability was introduced or changed.

Link between the two where useful, but do not use changelogs as the primary feature directory.

## Demonstration Pattern

Use progressive disclosure throughout the experience:

```text
Choose a workflow
[Install] [Manage] [Organize] [Discover] [Connect]

Screenshot or short product clip
Feature title
One-sentence user benefit
Representative capabilities
Read the guide
```

Prefer outcomes over implementation terms on the homepage. For example:

- Homepage: "Share one resource library across instances"
- Detail page: "Hard links and symbolic links"

## Captured Product Notes

The following screenshots were captured from XMCL `0.63.3` through the local Electron DevTools endpoint. They use the same launcher state and are candidates for the future homepage feature film, feature catalog, or detail pages.

### Homepage candidates

| Asset | Mode | Suggested use | Notes |
| --- | --- | --- | --- |
| [home-compact-1600-candidate.png](src/assets/home-compact-1600-candidate.png) | Compact home | Hero visual | Neutral `vanilla++` instance, active content, recent play state, and a clear Launch action. Best homepage candidate. |
| [home-candidate.png](src/assets/home-candidate.png) | Expanded home | Hero fallback or feature visual | Pixelmon state with denser launcher information. Good visual energy, but the Pixelmon branding is more specific. |
| [home-expanded-1600-candidate.png](src/assets/home-expanded-1600-candidate.png) | Expanded home | Feature visual | Shows Mods, Saves, Shader Pack, Resource Packs, and Screenshot Gallery together. |
| [instance-create-modloaders-candidate.png](src/assets/instance-create-modloaders-candidate.png) | Create instance dialog | Instances catalog | Shows Java Edition, experimental Bedrock support, Forge, Fabric, Quilt, NeoForge, OptiFine, LabyMod, and local version sources. |
| [instance-folder-groups-candidate.png](src/assets/instance-folder-groups-candidate.png) | Instance home | Instances catalog | Shows the instance rail with multiple setups and folder-based organization. Use it to explain how large libraries stay scannable. |

### Instance workflows

| Asset | Workflow | Suggested use | Demonstrated capabilities |
| --- | --- | --- | --- |
| [vanilla-server-list-candidate.png](src/assets/vanilla-server-list-candidate.png) | Instance settings and multiplayer | Feature detail | Server list, server status, player count, connection failure state, pinning, and deletion. |
| [modpack-export-candidate.png](src/assets/modpack-export-candidate.png) | Modpack export | Feature detail | Modpack metadata, author and description, export directory, file selection, CurseForge and Modrinth export, and asset inclusion. |
| [instance-local-server-candidate.png](src/assets/instance-local-server-candidate.png) | Local server | Feature detail | Localhost server launch, MOTD, port, max players, online mode, world selection, server export, and server file selection. |
| [instance-theme-candidate.png](src/assets/instance-theme-candidate.png) | Instance customization | Homepage or feature detail | Per-instance theme, colors and blur, background image, overlay, rounded corners, font controls, custom CSS, and theme import/export. |

### Mod workflows

| Asset | Workflow | Suggested use | Demonstrated capabilities |
| --- | --- | --- | --- |
| [local-mod-management-candidate.png](src/assets/local-mod-management-candidate.png) | Installed Mod management | Homepage feature or catalog | Installed Mod list, search, sorting, filters, Mod Loader filters, dependency checks, unused Mod cleanup, and update policy. |
| [online-mod-search-candidate.png](src/assets/online-mod-search-candidate.png) | Online Mod discovery | Homepage feature or catalog | Market search, source toggles, Minecraft version, Mod Loader, environment, categories, sorting, and result count. |
| [mod-collection-candidate.png](src/assets/mod-collection-candidate.png) | Mod collections | Feature detail | Launcher collections, Modrinth followed projects, project counts, collection creation, batch install, and collection removal. |
| [local-mod-detail-candidate.png](src/assets/local-mod-detail-candidate.png) | Mod detail | Feature detail | Mod metadata, version selection, dependencies, description, versions, source, loaders, categories, and external resources. |
| [mod-context-menu-groups-candidate.png](src/assets/mod-context-menu-groups-candidate.png) | Custom Mod grouping | Feature detail | File actions, enable/disable, encyclopedia lookup, saved grouping rules, and adding Mods to a custom group. |

### Initial presentation order

Use the captured screenshots as a progressive-disclosure sequence rather than presenting every screen at once:

1. Create instance: establish multi-Loader, multi-instance, automatic installation, and unified management.
2. Modpack Market and Online Mod Search: show discovery across Modrinth, CurseForge, and FTB.
3. Installed Mod management: show search, dependencies, collections, custom groups, and updates.
4. Account login: show Microsoft, offline, and third-party authentication services.
5. Instance theme and Quick Action: show customization and fast navigation as supporting proof.
6. Save Preview, Blueprint Preview, Modpack Export, and local server: move world tools and sharing into detail workflows.
7. Crash Reports and AI Agent: surface diagnostics as a reliability and support workflow.

The homepage should use only the compact home image plus a small representative subset of these screens. The remaining screenshots belong in a feature catalog or dedicated workflow pages.

### Capture conventions

- Capture the production XMCL window through DevTools on the local Electron endpoint.
- Use a consistent `1600 x 1000` outer window size and preserve the same instance state where possible.
- Keep the application chrome and real controls visible; do not add explanatory overlays to the source images.
- Prefer neutral instance names and representative content over highly branded or empty states.
- Treat the current files as candidates until the final homepage crop and responsive behavior are approved.

## Recommended Information Architecture

### Hero: one clear promise

Use [home-compact-1600-candidate.png](src/assets/home-compact-1600-candidate.png) as the hero visual. It communicates that XMCL is a complete launcher without forcing the visitor to understand a settings panel first.

The hero should keep its message narrow:

- Launch and organize Minecraft instances.
- Support vanilla and modded play in one place.
- Keep the primary action focused on downloading or opening the guide.

Do not place login, theme settings, crash logs, or dense filter panels in the hero. They are valuable capabilities, but they explain how XMCL works rather than why a new visitor should care.

### Homepage feature film: four workflow scenes

Keep the homepage feature film to four scenes. Each scene should have one outcome, one representative screenshot, and one link to a deeper page.

| Scene | User-facing promise | Primary asset | Supporting assets |
| --- | --- | --- | --- |
| 01 | Support every setup from one launcher | [instance-create-modloaders-candidate.png](src/assets/instance-create-modloaders-candidate.png) | [home-expanded-1600-candidate.png](src/assets/home-expanded-1600-candidate.png), [instance-folder-groups-candidate.png](src/assets/instance-folder-groups-candidate.png) |
| 02 | Find and install community content | [modpack-market-candidate.png](src/assets/modpack-market-candidate.png) | [online-mod-search-candidate.png](src/assets/online-mod-search-candidate.png) |
| 03 | Keep modded setups under control | [local-mod-management-candidate.png](src/assets/local-mod-management-candidate.png) | [mod-collection-candidate.png](src/assets/mod-collection-candidate.png), [mod-context-menu-groups-candidate.png](src/assets/mod-context-menu-groups-candidate.png) |
| 04 | Bring your account system with you | [account-login-dialog-candidate.png](src/assets/account-login-dialog-candidate.png) | [quick-action-dialog-candidate.png](src/assets/quick-action-dialog-candidate.png), [instance-theme-candidate.png](src/assets/instance-theme-candidate.png) |

This gives the homepage a clear progression: establish a setup, find content, manage complexity, and connect identity. World tools, sharing, and diagnostics remain important catalog and detail-page workflows rather than competing with the primary homepage promise. The current Product Film / Sticky Stage implementation is a good fit for this four-scene structure.

### Feature catalog: the complete surface

Add a dedicated `/features/` catalog for capabilities that are important but too specific or too dense for the homepage. The catalog should group entries by workflow and use the captured screenshots as cards or expandable previews.

Recommended catalog groups:

1. **Instances and profiles**: instance home, folder groups, instance creation, Java and experimental Bedrock support, version and loader selection, local server, server list, and instance theme.
2. **Mods and community content**: installed Mod management, online Mod search, Mod detail, collections, custom grouping, Modpack market, and Modpack detail.
3. **World tools**: Save Preview, Chunk selection and editing, Blueprint Preview, materials, and format conversion.
4. **Sharing and multiplayer**: Modpack export, server export, localhost server, server list, and world sharing workflows.
5. **Accounts and productivity**: account login, multiple auth services, Quick Action, friends, and personal center.
6. **Diagnostics and assistance**: logs, Crash Reports, Launch Failures, built-in AI Agent, and external AI handoff.

### Dedicated detail pages: only for multi-step workflows

Create detail pages when the visitor needs to understand a sequence of actions, a setting, or a limitation. The following pages have enough depth to justify their own explanation:

- **Mod management**: search, install, update, dependencies, collections, custom groups, and Mod detail.
- **Modpack workflows**: discover a pack, inspect its detail page, install it, and export a pack for sharing.
- **World tools**: inspect a Save, select or copy Chunks, delete Chunks, and preview or convert Blueprints.
- **Local server**: configure a world, choose files, export a server, and connect through Server List.
- **Crash diagnosis**: inspect logs, use the built-in AI Agent, and continue with an external AI provider.

The account dialog, instance theme panel, and Quick Action dialog should initially be catalog entries or supporting sections. They are useful proof points, but they do not need separate pages until there are setup instructions or troubleshooting content around them.

### What should stay out of the first homepage pass

- Do not show every account provider, filter, or technical field in the homepage film.
- Do not use both Mod Market and Online Mod Search as separate homepage scenes; they belong to one community-content story.
- Do not use both Save Preview and Blueprint Preview as separate homepage scenes; they belong to one world-tools story.
- Do not lead with Crash diagnosis or account login. Surface them later as proof of depth and reliability.
- Do not make the homepage depend on screenshots containing Chinese names, failed servers, empty states, or strongly branded third-party packs unless the context benefits from them.

## Content Model

When collecting the feature list, record each item in this format:

```text
Feature:
User benefit:
Category:
Screenshot or video:
Related guide:
Version introduced:
Status:
Platforms:
```

This data should eventually drive the homepage highlights, feature catalog, and changelog cross-links from one source.

## Localization

- Add the feature catalog structure to the English site first.
- Keep category names and user benefits translatable.
- Do not make screenshots the only source of meaning; provide equivalent text for every feature.
- Add localized pages only after the information architecture is stable.
- Keep feature IDs stable so translations and links do not break when copy changes.

## Implementation Sequence

1. Collect and normalize the complete feature inventory.
2. Group entries by user workflow.
3. Select a small homepage set that represents the major groups.
4. Build the feature data model and catalog page.
5. Convert the existing modern homepage feature tabs to use the shared data.
6. Add detail pages only for workflows that need them.
7. Add localized copy and verify all links.
8. Add screenshots or clips where the interface communicates more clearly than text.

## Acceptance Criteria

- The homepage communicates XMCL's major capabilities in under one viewport of scanning plus the interactive section.
- A visitor can find any known feature through the catalog without reading a long page.
- Every homepage capability links to a deeper explanation or guide.
- New launcher features can be added as data without restructuring the homepage.
- Changelogs and feature documentation have distinct responsibilities.
- Light and dark themes remain readable for cards, screenshots, filters, links, and detail pages.
- The feature system does not alter the homepage download and navigation shell.

## Out Of Scope For This Phase

- Localizing the full feature catalog
- Adding a separate page for every small launcher control
- Replacing the existing changelog system
- Adding interactive product demos beyond captured screenshots
- Creating new screenshots or videos beyond the current candidate set
