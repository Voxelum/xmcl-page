---
outline: false
layout: home
hero:
  name: XMCL
  text: Ανακαλύψτε μια διαφορετική εμπειρία Minecraft launcher.
  image:
    src: /logo.png
    alt: XMCL
  actions:
    - theme: brand
      text: Λήψη
      link: /el/
    - theme: alt
      text: GitHub
      link: https://github.com/voxelum/x-minecraft-launcher
    - text: Άδεια MIT
      link: https://github.com/Voxelum/x-minecraft-launcher/blob/master/LICENSE
      theme: alt
features:
  - icon: 📥
    title: Λήψη & αυτόματη συμπλήρωση
    details: Υποστήριξη λήψης Minecraft, Forge, Fabric, Quilt, OptiFine και JVM από επίσημους ή τρίτους mirrors.
  - icon: ⚡️
    title: Γρήγορες λήψεις
    details: Επαναχρησιμοποίηση sockets μέσω HTTP/HTTPS agents και παράλληλη λήψη αρχείων σε τμήματα.
  - icon: 💻
    title: Διαπλατφορμικός
    details: Ο launcher βασίζεται στο Electron και υποστηρίζει Windows 10/11, macOS και Linux.
  - icon: 📚
    title: Πολλαπλά Instances
    details: Δημιουργήστε πολλαπλά instances για να απομονώνετε διαφορετικές εκδόσεις, mods και ρυθμίσεις εκκίνησης.
  - icon: 🗂
    title: Διαχείριση όλων των πόρων
    details: Χρήση συνδέσμων (hard links) για εγκατάσταση πόρων σε instances, διατηρώντας βέλτιστη χρήση δίσκου.
  - icon: 🔥
    title: Ενσωματωμένη υποστήριξη CurseForge & Modrinth
    details: Κατεβάστε πόρους απευθείας μέσα από τον launcher.
markdownStyles: false
---

<div class="vp-doc" style="margin: auto; max-width: 1180px; padding: 0 24px">

## Ξεκινώντας

<p style="display: flex; gap: 4px;">
  <a href="https://github.com/Voxelum/x-minecraft-launcher">
    <img src="https://github.com/Voxelum/x-minecraft-launcher/workflows/Build/badge.svg" alt="Build">
  </a>
  <a href="https://github.com/Voxelum/x-minecraft-launcher/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/@xmcl/core.svg" alt="License">
  </a>
  <a href="https://conventionalcommits.org">
    <img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Commit">
  </a>
  <br>
  <a href="https://kook.top/gqjSHh">
    <img src="https://img.shields.io/endpoint?url=https://api.xmcl.app/kook-badge" alt="Kook">
  </a>
</p>

Εάν διαθέτετε winget, μπορείτε να το χρησιμοποιήσετε για εγκατάσταση:

```bash
winget install CI010.XMinecraftLauncher
```

Διατίθεται επίσης εγκατάσταση μέσω Homebrew tap:

```bash
brew tap voxelum/xmcl
brew install --cask --no-quarantine voxelum/xmcl
```

### Θέλετε να συνεισφέρετε;

Εάν θέλετε να προσθέσετε λειτουργίες ή να διορθώσετε σφάλματα, δείτε τον οδηγό [Συνεισφοράς](/en/guide/contributing).

Εάν θέλετε να βοηθήσετε στη μετάφραση, ακολουθήστε τον οδηγό [Ξεκινώντας με τη Μετάφραση](https://github.com/voxelum/xmcl-page).

## Χορηγοί

| [![](https://github.com/DGP-Studio/Snap.Hutao/assets/10614984/73ae8b90-f3c7-4033-b2b7-f4126331ce66)](https://www.netlify.com/) | Δωρεάν υπογραφή κώδικα στα Windows από το [SignPath.io](https://signpath.io/), πιστοποιητικό από το [SignPath Foundation](https://signpath.org/) |
| :----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: |
| [![](/deno-logo.webp)](https://deno.com/deploy) | [Deno Deploy](https://deno.com/deploy) — ο XMCL αξιοποιεί την πλατφόρμα serverless JavaScript του [Deno](https://deno.com/). |
| [![](https://bmclapidoc.bangbang93.com/assets/favicon.ico?v=1742218388684)](https://bmclapidoc.bangbang93.com/) | Το BMCLAPI αναπτύχθηκε από τον @bangbang93 ως μέρος του BMCL για επιτάχυνση λήψεων Forge και επίσημων πόρων Minecraft. Είναι ανοιχτό σε όλους τους launchers. |

### AFDIAN

<!-- afdian-start -->
<!--@include: ../../parts/afdian.md-->
<!-- afdian-end -->

## Συνεισφέροντες

<a href="https://github.com/voxelum/x-minecraft-launcher/graphs/contributors" flex justify-center>
  <img src="https://contrib.rocks/image?repo=voxelum/x-minecraft-launcher" />
</a>

### Ιδιαίτερες Ευχαριστίες

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[BANER](https://github.com/BANSAFAn), για τη μεγάλη του βοήθεια στην κοινότητα RU/UK.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/119564588?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/155435591?v=4">

[GodLeaveMe](https://github.com/GodLeaveMe), [v1mkss](https://github.com/v1mkss), για τη συντήρηση του πακέτου AUR.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/52188337?v=4">

[0xc0000142](https://github.com/0xc0000142), για τη συντήρηση του winget.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/109208530?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[Marmur2020](https://github.com/Marmur2020) & [BANSAFAn](https://github.com/BANSAFAn), για την πλήρη ουκρανική μετάφραση!
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/7201687?v=4">

[vanja-san](https://github.com/vanja-san), για τη ρωσική μετάφραση!
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/37006668?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/11472320?v=4">

[lukechu10](https://github.com/lukechu10) & [HoldYourWaffle](https://github.com/HoldYourWaffle), για τη βοήθεια στον πυρήνα του Launcher.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/25716486?v=4">

[laolarou726](https://github.com/laolarou726), για τη σημαντική συμβολή στον σχεδιασμό του launcher.
</div>

Παλαιότεροι συνεισφέροντες του έργου:

[Yricky](https://github.com/Yricky), [Jin](https://github.com/Indexyz), [LG](https://github.com/LasmGratel), [Phoebe](https://github.com/PhoebezZ), [Sumeng Wang](https://github.com/darkkingwsm), [Luca](https://github.com/LucaIsGenius), [Charles Tang](https://github.com/CharlesQT)

</div>
