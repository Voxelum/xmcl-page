# Problème de Compatibilité Ely.by Authlib

Ce guide explique pourquoi l'avertissement **"Problème de compatibilité Ely.by Authlib"** apparaît dans XMCL lors du lancement de versions récentes de Minecraft, et comment le résoudre.

---

## ⚠️ Pourquoi cet avertissement apparaît-il ?

Lors d'une connexion avec un **compte Ely.by**, XMCL injecte le composant **Ely.by Authlib** pour gérer l'authentification et les skins personnalisés.

Sur les versions récentes de Minecraft (**1.20.5+** ou **1.21.x**), ce composant peut ne pas être totalement compatible avec les mises à jour de Mojang.

---

## 🛠 Comment résoudre le problème

### Méthode 1 : Désactiver Ely.by Authlib dans l'instance (Recommandé)

1. Ouvrez XMCL et sélectionnez votre instance.
2. Allez dans les **Paramètres de l'instance** (icône d'engrenage de l'instance).
3. Cherchez l'option **"Désactiver Ely.by Authlib"** (*Disable Ely.by Authlib*).
4. Activez l'interrupteur (**ON**).
5. Lancez le jeu.

### Méthode 2 : Désactiver Ely.by Authlib de façon globale

1. Allez dans les **Paramètres généraux du launcher** (icône d'engrenage dans la barre latérale).
2. Activez l'option **"Désactiver Ely.by Authlib"**.
