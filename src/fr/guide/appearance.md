# Guide d'Apparence & Custom CSS

Ce guide explique comment personnaliser l'interface utilisateur de XMCL, y compris les palettes de couleurs intégrées, les modes de thème, les effets d'arrière-plan (images/vidéos/particules) et les styles avancés utilisant des règles CSS personnalisées.

---

## 1. Paramètres de Thème Intégrés

Vous pouvez personnaliser l'apparence de base du lanceur en cliquant sur **Paramètres** (icône d'engrenage) dans la barre latérale gauche, puis en accédant à l'onglet **Apparence**.

### Palette de Couleurs et Thèmes
XMCL vous permet de personnaliser séparément les éléments de couleur suivants :
- **Couleur des cartes** : Couleur d'arrière-plan des modules et des boîtes de dialogue.
- **Couleur de la barre supérieure** : Arrière-plan de la zone de titre/glissement de la fenêtre.
- **Couleur de la barre latérale** : Arrière-plan du volet de navigation gauche.
- **Couleur d'arrière-plan** : Arrière-plan principal de la fenêtre sous tous les éléments.
- **Couleur de surbrillance principale** : Couleur des icônes actives, des cercles de focus, des boutons d'action principaux et des liens.
- **Couleur d'erreur** : Couleur utilisée pour les avertissements, les bannières d'erreur et les badges.

Le lanceur comprend deux schémas de couleurs par défaut : **Mode Clair** et **Mode Sombre**.

:::tip Paramètres Séparés
Les configurations de couleurs pour les modes Clair et Sombre sont enregistrées indépendamment. Basculer entre les modes chargera automatiquement votre palette personnalisée pour le mode sélectionné.
:::

---

### Effets d'Arrière-Plan & Médias
Vous pouvez personnaliser l'arrière-plan principal du lanceur avec trois options différentes :

1. **Image** : Définissez n'importe quelle image (PNG, JPG, WEBP) comme arrière-plan. XMCL copie et stocke les données d'image dans son répertoire de configuration, de sorte qu'elle ne sera pas perdue si vous supprimez le fichier d'origine.
2. **Vidéo** : Utilisez un fichier vidéo MP4/WEBM local comme arrière-plan animé.
   :::warning Dépendance du chemin
   Le lanceur enregistre uniquement le **chemin absolu** du fichier vidéo d'arrière-plan. Si vous déplacez, renommez ou supprimez le fichier vidéo, le paramètre d'arrière-plan deviendra invalide et reviendra à la couleur par défaut.
   :::
3. **Effets de Particules** : Activez des animations d'arrière-plan dynamiques telles que des étoiles flottantes, de la neige qui tombe ou des réseaux de particules.

---

## 2. Style CSS Personnalisé Avancé

XMCL intègre un éditeur de CSS personnalisé au bas de l'onglet de paramètres **Apparence**. Étant donné que l'interface utilisateur est construite sur **Vue 3** et **Vuetify 3**, vous pouvez remplacer globalement les styles de n'importe quel élément.

Pour vous assurer que vos styles personnalisés remplacent correctement les valeurs par défaut de Vuetify, écrivez des sélecteurs spécifiques et utilisez `!important` en cas de conflit avec les règles Vuetify.

### Typographie & Anti-Crénelage
Optimisez le rendu du texte et définissez une police propre à la racine :
```css
html, body, #app, .v-application {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  text-rendering: optimizeLegibility !important;
}
```

---

## 3. Remplacement des Jetons de Couleur Vuetify 3

Vuetify définit les couleurs sous forme de triplets RGB bruts (ex: `255, 255, 255`) sur les conteneurs racines pour calculer les opacités. Pour modifier les variables de couleur globalement, redéfinissez-les dans ces sélecteurs :

```css
.v-application,
.v-theme--dark,
.v-theme--light {
  --v-theme-background: 18, 18, 28;      /* Arrière-plan de la fenêtre principale */
  --v-theme-surface: 25, 25, 35;          /* Surface des cartes & boîtes de dialogue */
  --v-theme-on-surface: 255, 255, 255;    /* Couleur du texte principal */
  --v-theme-primary: 0, 122, 255;         /* Couleur d'accentuation */
  --v-theme-on-primary: 255, 255, 255;    /* Couleur du texte sur les boutons actifs */
  --v-theme-error: 255, 59, 48;           /* Bannières et badges d'erreur */
}
```

Si vous souhaitez rendre transparents les arrière-plans des pages par défaut afin que votre image ou vidéo personnalisée soit pleinement visible :
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

## 4. Référence des Sélecteurs pour les Principaux Composants

### 🖥️ Barre de Titre / En-tête de Fenêtre
L'en-tête de la fenêtre utilise la classe `.v-system-bar` qui contient les commandes de fenêtre et les indicateurs.
- **Barre de titre** : `.v-system-bar`
- **Boutons de contrôle (Min/Max/Fermer)** : `.system-btn` ou `.v-system-bar .system-btn`
- **Bouton Fermer** : `.system-btn--close`
- **Badges système (Recherche, Tâches, Aide)** : `.system-bar-badge`
- **Raccourci texte dans le badge** : `.palette-hotkey`

*Exemple: Réordonner les commandes de fenêtre à gauche et appliquer le style "feux de signalisation" de macOS avec Flexbox:*
```css
.v-system-bar {
  flex-direction: row-reverse !important; /* Placer les boutons à gauche */
  justify-content: space-between !important;
}
.v-system-bar > span[role="group"] {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
}
/* Réordonner les boutons: Fermer (3ème enfant -> 1er), Min (1er -> 2ème), Max (2ème -> 3ème) */
.v-system-bar .system-btn.system-btn--close { order: 1 !important; background: #ff5f56 !important; }
.v-system-bar .system-btn:nth-child(1) { order: 2 !important; background: #ffbd2e !important; }
.v-system-bar .system-btn:nth-child(2) { order: 3 !important; background: #27c93f !important; }
```

### 🎛️ Barre Latérale de Navigation
La barre latérale gauche contient vos profils, le raccourci de recherche et les paramètres.
- **Conteneur principal** : `.sidebar` ou `[data-testid="app-sidebar"]`
- **Liste des éléments** : `.sidebar-notch__container`
- **Boutons individuels** : `.sidebar-notch-item`
- **Bouton actif** : `.sidebar-notch-item.router-link-active` ou `.sidebar-notch-item--active`
- **Bouton Retour** : `.sidebar-back-btn` ou `.system-bar-back-btn`

### 📦 Cartes & Boîtes de Dialogue
- **Conteneur de carte** : `.v-card`
- **En-tête de carte / dialogue** : `.v-card-title`
- **Zone de contenu** : `.v-card-text`
- **Zone d'actions en bas** : `.v-card-actions`
- **Boîtes de dialogue flottantes** : `.v-dialog`
- **Cartes de groupe sur la page des paramètres** : `.setting-page .v-card`

### 🔘 Boutons
- **Classe globale de bouton** : `.v-btn`
- **Variantes de forme** : `.v-btn--variant-flat`, `.v-btn--variant-elevated`, `.v-btn--variant-tonal`, `.v-btn--variant-outlined`
- **Boutons principaux / d'action** : `.v-btn[color="primary"]`, `.v-btn.text-primary`, `[data-testid="login-submit"]`, `[data-testid="launch-button"]`
- **État actif (dans les bascules)** : `.v-btn.v-btn--active`, `.v-btn-toggle .v-btn--active`, `.v-btn[aria-pressed="true"]`
- **Boutons désactivés** : `.v-btn:disabled`, `.v-btn[disabled]`

### 📝 Champs de Formulaire & Menus Déroulants
- **Conteneur de champ** : `.v-field`, `.v-text-field`, `textarea`
- **Mise en surbrillance du focus** : `.v-field--focused`, `.v-text-field:focus-within`
- **Boîte de liste déroulante** : `.v-list`
- **Options individuelles** : `.v-list-item`
- **Option sélectionnée** : `.v-list-item--active`

---

## 5. Astuces de Style CSS Avancées

### 💧 Cartes Glassmorphes (Effet Verre Dépoli)
Création d'un effet translucide de verre dépoli avec des lignes de reflets sur le dessus et la gauche :

```css
.v-card {
  /* Arrière-plan de reflets dégradés */
  background: linear-gradient(135deg, 
                rgba(255, 255, 255, 0.16) 0%, 
                rgba(255, 255, 255, 0.07) 50%, 
                rgba(255, 255, 255, 0.0) 50.1%, 
                rgba(255, 255, 255, 0.03) 100%) !important;
  backdrop-filter: blur(25px) saturate(200%) contrast(90%) !important;
  -webkit-backdrop-filter: blur(25px) saturate(200%) contrast(90%) !important;
  
  /* Reflets sur les bords */
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  border-top-color: rgba(255, 255, 255, 0.32) !important;
  border-left-color: rgba(255, 255, 255, 0.24) !important;
  
  /* Ombre et lueur interne */
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35), 
              inset 0 1px 1px rgba(255, 255, 255, 0.25) !important;
  border-radius: 16px !important;
}
```

### 🎨 Personnalisation des Icônes (Injections SVG)
Vous pouvez remplacer directement les icônes du lanceur en CSS via des SVG encodés :

```css
/* 1. Masquer les caractères d'origine et définir les dimensions */
.sidebar-notch-item__icon,
.my-stuff-page .section-icon,
.badge-icon {
  font-size: 0 !important;
  width: 18px !important;
  height: 18px !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  display: inline-block !important;
}

/* 2. Injecter les SVG en tant qu'images d'arrière-plan */
/* Exemple : Icône d'engrenage personnalisée pour le bouton Paramètres */
[data-testid="nav-settings"] .sidebar-notch-item__icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3Cpath d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'/%3E%3C/svg%3E") !important;
}
```

### 💾 Barres de Défilement Style macOS
Personnalisation des barres de défilement pour correspondre au style macOS :
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