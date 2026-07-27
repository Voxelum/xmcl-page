# Ely.by Authlib Compatibility Issue

This guide explains why the warning **"Ely.by Authlib Compatibility Issue"** appears in XMCL when launching newer versions of Minecraft, and how to resolve it in your instance or launcher settings.

---

## ⚠️ Why Does This Warning Appear?

When you log in using an **Ely.by account**, XMCL automatically injects the **Ely.by Authlib replacement** jar file into the game launch arguments. This allows Minecraft to authenticate with Ely.by servers and load custom skins.

However, for newer Minecraft versions (such as **1.20.5+** or **1.21.x**), the Authlib injector provided by Ely.by may not be fully updated or compatible with Mojang's latest game code. When XMCL detects potential incompatibility, it displays a warning:

> ⚠️ **Ely.by Authlib Compatibility Issue:**  
> The Authlib replacement from Ely.by was used for Minecraft version X.X.X, but this version may not be fully compatible. You can disable the Ely.by Authlib replacement in the instance settings to avoid this issue.

---

## 🛠 How to Fix the Issue

### Method 1: Disable Ely.by Authlib for the Current Instance (Recommended)

1. Open XMCL and select the Minecraft instance showing the warning.
2. Click on **Instance Settings** (the gear icon for the current instance).
3. Scroll to the **General** / **Account & Auth** settings section.
4. Locate the option **"Disable Ely.by Authlib"** (or *Disable Ely.by Authlib replacement*).
5. Toggle the switch **ON** (enabled).
6. Launch the game. XMCL will start Minecraft without injecting the incompatible jar, resolving the warning and potential startup crashes.

---

### Method 2: Disable Ely.by Authlib Globally for All Instances

If you regularly play on newer Minecraft versions and want to disable the injector for all instances:

1. Click on **Settings** (the gear icon on the left main navigation sidebar).
2. Go to **Global Launcher Settings**.
3. Enable **"Disable Ely.by Authlib"**.

---

## 💡 Alternative Solutions for Skins on Minecraft 1.21+

If disabling Ely.by Authlib prevents your custom skin from displaying on newer versions, consider these alternatives:

* **Use Skin Mods:** Install mods like **Custom Skin Loader** (Fabric/Forge/Neoforge) or **Fabric Tailor** in your instance mods folder to load skins from Ely.by or LittleSkin directly.
* **Use Authlib-Injector with Third-Party Servers:** Use third-party Yggdrasil API authentication services (such as **LittleSkin**).
* **Official Microsoft Account:** Log in with an official Microsoft account for full native skin support across all Minecraft versions.
