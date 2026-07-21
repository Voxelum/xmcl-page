---
date: 2026-07-11
title: "X Minecraft Launcher is Now Verified on Flathub!"
description: "We are excited to announce that XMCL has received its official verification badge on Flathub. Read about our journey to verify the app and configure metadata."
category: Announcement
---

<PostDetail>

We are thrilled to announce that **X Minecraft Launcher (XMCL)** is now officially verified on **Flathub**! You will now see the blue verification badge next to our launcher on the store.

👉 Check us out at: **[app.xmcl.voxelum on Flathub](https://flathub.org/en/apps/app.xmcl.voxelum)**

## Our Journey to Verification

We couldn't get through before because a lot of things were missing, but we figured it out, and now—hello, verification!

Getting verified on Flathub requires proving the ownership of the domain associated with the App ID. Since our App ID is `app.xmcl.voxelum`, we needed to demonstrate control over our domain and address some metadata checks required by Flathub's modern AppStream validator.

Here is what we solved to make this happen:

### 1. Domain Ownership Verification
Flathub validates developers by looking for a unique verification token at a specific secure URL. We added our verification token under the `.well-known/` directory of our official website (`xmcl.app`):
- URL: `https://xmcl.app/.well-known/org.flathub.VerifiedApps.txt`

Once the site deployed the token, Flathub verified the domain `xmcl.app` immediately.

### 2. Refining AppData / AppStream Metadata
To comply with Flathub's strict quality standards, we updated our app description and metadata rules inside `app.xmcl.voxelum.metainfo.xml`:
- **Friendly Summary**: Simplified the app summary to **"Play and manage Minecraft"** (under 35 characters, non-technical, and free of articles or redundant app name mentions).
- **Asset Updating**: Replaced all old screenshots in the metadata package with fresh, high-resolution snapshots of the latest XMCL interface showcasing our multi-instance manager, modpack explorer, mod downloader, server dashboard, and game creation flow.

## What This Means For You

The blue checkmark on Flathub means you can download and update XMCL with full confidence, knowing the Flatpak package is verified and maintained by the official development team.

Thank you to everyone in the community for your continued support!

</PostDetail>
