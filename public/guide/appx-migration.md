---
title: "APPX Migration Guide"
excerpt: "How to migrate from APPX to other formats"
author: "XMCL Team"
date: "2025-01-15"
tags: ["appx", "migration", "windows", "intermediate"]
slug: "appx-migration"
readTime: "8 min"
difficulty: "intermediate"
---

# APPX Migration Guide

:::warning
This guide is for users who want to migrate from APPX format to other installation formats.
:::

## Why Migrate?

The APPX format has some limitations:
- Sandbox environment
- Limited file system access
- Certificate expiration issues

## How to Migrate

1. **Backup your data**
   - Locate your XMCL data folder
   - Copy it to a safe location

2. **Uninstall APPX version**
   - Go to Windows Settings > Apps
   - Find X Minecraft Launcher
   - Click Uninstall

3. **Install new version**
   - Download the ZIP version from our website
   - Extract to your preferred location
   - Copy your backup data to the new location

## Data Location

**APPX Data Location:**
```
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
```

**ZIP Data Location:**
```
%AppData%\xmcl
```

Simply copy the contents from the first location to the second location.
