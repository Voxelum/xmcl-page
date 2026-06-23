# Guide des thèmes CSS personnalisés du lanceur

Ce guide propose un manuel complet sur la façon de concevoir, d'écrire et de personnaliser l'interface du lanceur à l'aide de feuilles de style CSS personnalisées. Il détaille les principaux éléments de mise en page, les sélecteurs cibles et les techniques de style avancées (telles que le glassmorphisme, les reflets spéculaires et le remplacement d'icônes natives) que vous pouvez utiliser pour créer des thèmes personnalisés.

---

## 1. Architecture de base et injection de thèmes

L'interface utilisateur du lanceur est construite sur **Vue 3** et **Vuetify 3**. Les styles sont injectés globalement via le moteur CSS personnalisé.

Pour vous assurer que votre feuille de style personnalisée remplace correctement les styles Vuetify par défaut, écrivez toujours des sélecteurs CSS propres et utilisez `!important` en cas de conflit avec les règles de style en ligne de Vuetify ou les déclarations de classe à haute spécificité.

### Typographie et lissage
Définissez toujours la police par défaut et optimisez le rendu du texte à la racine :
```css
html, body, #app, .v-application {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  text-rendering: optimizeLegibility !important;
}
```

---

## 2. Remplacements des jetons de couleur Vuetify 3

Vuetify définit les couleurs de base sous forme de triplets RGB bruts (par exemple `255, 255, 255`) sur les conteneurs racines de l'application afin de calculer les opacités. Pour modifier les variables de couleur globalement sans casser les composants, redéfinissez-les à l'intérieur de ces sélecteurs :

```css
.v-application,
.v-theme--dark,
.v-theme--light {
  --v-theme-background: 18, 18, 28;      /* Fond de l'application racine */
  --v-theme-surface: 25, 25, 35;          /* Surfaces de cartes et boîtes de dialogue */
  --v-theme-on-surface: 255, 255, 255;    /* Couleur de texte par défaut */
  --v-theme-primary: 0, 122, 255;         /* Couleur d'accentuation (Apple Blue, etc.) */
  --v-theme-on-primary: 255, 255, 255;    /* Couleur du texte des boutons d'accentuation */
  --v-theme-error: 255, 59, 48;           /* Bannières d'erreur et badges */
}
```

Si vous avez besoin de rendre les pages par défaut transparentes pour que votre fond d'écran de bureau apparaisse :
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

## 3. Composants clés et sélecteurs CSS

### 🖥️ Barre de titre / Barre système
L'en-tête de la fenêtre utilise `.v-system-bar` qui contient les commandes de fenêtre et les déclencheurs de badge.
- **Barre de titre** : `.v-system-bar`
- **Boutons de commande (Min/Max/Fermer)** : `.system-btn` ou `.v-system-bar .system-btn`
- **Classe spécifique du bouton Fermer** : `.system-btn--close`
- **Badges système (Recherche, Tâches, Aide)** : `.system-bar-badge`
- **Raccourci clavier dans le badge** : `.palette-hotkey`

*Exemple : Réorganiser les commandes de la fenêtre vers la gauche et les styliser comme les feux tricolores de macOS en utilisant Flexbox :*
```css
.v-system-bar {
  flex-direction: row-reverse !important; /* Mettre les boutons à gauche */
  justify-content: space-between !important;
}
.v-system-bar > span[role="group"] {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
}
/* Réorganiser les boutons : Fermer (3e enfant -> 1er), Min (1er -> 2e), Max (2e -> 3e) */
.v-system-bar .system-btn.system-btn--close { order: 1 !important; background: #ff5f56 !important; }
.v-system-bar .system-btn:nth-child(1) { order: 2 !important; background: #ffbd2e !important; }
.v-system-bar .system-btn:nth-child(2) { order: 3 !important; background: #27c93f !important; }
```

---

### 🎛️ Barre latérale de navigation (Dock)
La barre latérale à gauche se comporte comme un tiroir hébergeant vos profils, le raccourci de recherche et les paramètres.
- **Conteneur principal de la barre latérale** : `.sidebar` ou `[data-testid="app-sidebar"]`
- **Conteneur de liste d'éléments** : `.sidebar-notch__container`
- **Boutons individuels de la barre latérale** : `.sidebar-notch-item`
- **Bouton de navigation actif** : `.sidebar-notch-item.router-link-active` ou `.sidebar-notch-item--active`
- **Bouton de navigation Retour** : `.sidebar-back-btn` ou `.system-bar-back-btn`

---

### 📦 Fenêtres, cartes et boîtes de dialogue
Les cartes servent de boîtes modulaires pour toutes les fonctionnalités.
- **Conteneur de carte** : `.v-card`
- **En-tête de carte / En-tête de dialogue** : `.v-card-title`
- **Zone de contenu de la carte** : `.v-card-text`
- **Conteneur des boutons d'action en bas** : `.v-card-actions`
- **Boîtes de dialogue superposées flottantes** : `.v-dialog`
- **Cartes de groupe de la page des paramètres** : `.setting-page .v-card`

---

### 🔘 Boutons
Les boutons existent dans différents états (élevés, contour, texte).
- **Classe de bouton globale** : `.v-btn`
- **Variantes de forme de bouton** : `.v-btn--variant-flat`, `.v-btn--variant-elevated`, `.v-btn--variant-tonal`, `.v-btn--variant-outlined`
- **Boutons principaux / d'action** : `.v-btn[color="primary"]`, `.v-btn.text-primary`, `[data-testid="login-submit"]`, `[data-testid="launch-button"]`
- **État actif (dans les bascules)** : `.v-btn.v-btn--active`, `.v-btn-toggle .v-btn--active`, `.v-btn[aria-pressed="true"]`
- **Boutons désactivés** : `.v-btn:disabled`, `.v-btn[disabled]`
- **Boutons de texte / d'icône** : `.v-btn--variant-text`, `.v-btn--variant-plain`, `.v-btn--icon`

---

### 📝 Champs de formulaire et menus déroulants
Ciblage des entrées et des sélections.
- **Conteneur de champ (Entrées / Zones de texte)** : `.v-field`, `.v-text-field`, `textarea`
- **Mise en surbrillance de la bordure d'entrée focalisée** : `.v-field--focused`, `.v-text-field:focus-within`
- **Boîte de liste déroulante (Sélecteur d'options)** : `.v-list`
- **Options individuelles du menu déroulant** : `.v-list-item`
- **Option sélectionnée** : `.v-list-item--active`

---

### 🎚️ Commutateurs, cases à cocher et curseurs
- **Piste du commutateur** : `.v-switch__track`
- **Piste du commutateur à l'état actif** : `.v-switch--selected .v-switch__track`
- **Bouton du commutateur** : `.v-switch__thumb`
- **Bordure de case à cocher** : `.v-checkbox .v-selection-control__input`
- **Case à cocher active** : `.v-checkbox .v-selection-control__input--selected`

---

### 📰 Profil (Me Page) Carrousel & Sections de page
La page "Mes trucs" (Moi) contient le carrousel d'actualités et les listes de grille.
- **Conteneur de grille de la page Moi** : `.my-stuff-page`
- **En-têtes de section de page** : `.my-stuff-page .section-title`, `.my-stuff-page .section-icon`
- **Conteneur du carrousel d'actualités** : `.news-carousel-wrapper` ou `.news-carousel`
- **Enveloppe de diapositive** : `.news-slide`
- **Conteneur d'image** : `.news-image-wrapper`, `.news-image`
- **Dégradé d'ombre de l'image** : `.news-gradient`
- **Zone de texte de la carte d'actualités** : `.news-info`
- **Titres des actualités** : `.news-title`
- **Description des actualités** : `.news-description`
- **Lien "En savoir plus"** : `.news-read-more` ou `.v-btn.news-read-more`

---

## 4. Astuces de style CSS avancées

### 💧 Verre liquide (Glassmorphisme avec brillance)
Pour concevoir l'effet de fond translucide "verre liquide" de style macOS :
1. Augmentez la transparence de l'arrière-plan (`rgba`) et la saturation.
2. Utilisez `backdrop-filter: blur(...)` pour flouter le contenu derrière le verre.
3. Tracez un dégradé diagonal pour imiter un reflet brillant.
4. Tracez des bordures nettes et lumineuses sur les bords supérieur et gauche.

```css
.v-card {
  /* Reflet de brillance */
  background: linear-gradient(135deg, 
                rgba(255, 255, 255, 0.16) 0%, 
                rgba(255, 255, 255, 0.07) 50%, 
                rgba(255, 255, 255, 0.0) 50.1%, 
                rgba(255, 255, 255, 0.03) 100%) !important;
  backdrop-filter: blur(25px) saturate(200%) contrast(90%) !important;
  -webkit-backdrop-filter: blur(25px) saturate(200%) contrast(90%) !important;
  
  /* Bordures lumineuses */
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  border-top-color: rgba(255, 255, 255, 0.32) !important;
  border-left-color: rgba(255, 255, 255, 0.24) !important;
  
  /* Ombre portée et lueur interne */
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35), 
              inset 0 1px 1px rgba(255, 255, 255, 0.25) !important;
  border-radius: 16px !important;
}
```

---

### 🎨 Personnalisation des icônes natives (injections SVG)
Le lanceur affiche des icônes à l'aide de polices d'icônes Material Design. Vous pouvez remplacer n'importe quelle icône nativement via CSS sans modifier les modèles Vue en masquant le glyphe de texte d'origine et en appliquant une image d'arrière-plan SVG :

1. **Effacer le texte** : ciblez `.v-icon` ou votre classe et définissez `font-size: 0 !important`.
2. **Appliquer les dimensions** : donnez aux éléments d'icône des valeurs explicites pour `width` et `height`.
3. **Injecter le vecteur** : attribuez un SVG encodé sous forme d'URL comme `background-image`.

```css
/* 1. Réinitialisation globale pour les icônes remplacées */
.sidebar-notch-item__icon,
.my-stuff-page .section-icon,
.badge-icon {
  font-size: 0 !important; /* Masquer les lettres d'origine */
  width: 18px !important;
  height: 18px !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  display: inline-block !important;
}

/* 2. Injecter les SVG cibles */
/* Engrenage des paramètres de préférences */
[data-testid="nav-settings"] .sidebar-notch-item__icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3Cpath d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'/%3E%3C/svg%3E") !important;
}

/* Triangles de la boutique d'applications */
[data-testid="nav-store"] .sidebar-notch-item__icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.5' stroke-linecap='round'%3E%3Cpath d='M12 4v16M5 16l14-8M5 8l14 8'/%3E%3C/svg%3E") !important;
}
```

---

### 💾 macOS / Barres de défilement modernes
Style des pistes et des curseurs des barres de défilement :
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
