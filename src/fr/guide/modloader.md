# Qu'est-ce qu'un chargeur de mods et pourquoi en ai-je besoin ?

Les chargeurs de mods (modloaders) Minecraft sont des outils essentiels qui permettent aux joueurs et aux développeurs de mods d'étendre et d'enrichir le jeu.

Que vous souhaitiez ajouter des effets de shaders réalistes qui transforment complètement l'aspect de votre monde ou obtenir ces vues épiques et lointaines que l'on voit dans les vidéos virales, un chargeur de mods est votre porte d'entrée vers ces améliorations créatives.

Par exemple, si vous souhaitez installer un mod de shaders comme Sildur's Shaders pour des effets de lumière réalistes, ou ajouter le mod "Distant Horizons" pour étendre les distances de vue dans votre monde Minecraft, vous aurez besoin d'un chargeur de mods tel que Fabric ou Forge pour gérer ces modifications.

**En fin de compte, vous n'aurez peut-être pas à choisir le chargeur de mods : ce sont vos mods qui feront ce choix pour vous...**

Dans ce document, nous allons explorer les chargeurs de mods et les modifications d'optimisation de client les plus populaires. Chacun offre ses propres caractéristiques et avantages, répondant à différents besoins de modding et préférences de performances.

---

## Minecraft Forge

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppForgePicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">Minecraft Forge</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">Le chargeur de mods original et éprouvé pour Minecraft. Idéal pour les packs de mods complets et les mods avec une intégration profonde du jeu.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(147, 34, 255, 0.15); color: #a855f7; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Écosystème mature</span>
      <span style="background: rgba(147, 34, 255, 0.15); color: #a855f7; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">API profonde</span>
      <span style="background: rgba(147, 34, 255, 0.15); color: #a855f7; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Large compatibilité</span>
    </div>
  </div>
</div>

*   **Avantages :** Des années de développement signifient une documentation abondante, des tutoriels et des ressources communautaires.
*   **Inconvénients :** Temps d'attente plus longs pour les nouvelles versions du jeu ; surcharge de ressources qui peut ralentir les temps de chargement.

---

## Fabric

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppFabricPicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">Fabric</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">Un chargeur de mods léger et modulaire conçu pour les versions modernes de Minecraft. Idéal pour optimiser les FPS et accélérer les démarrages.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Orienté performances</span>
      <span style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Mises à jour rapides</span>
      <span style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Léger</span>
    </div>
  </div>
</div>

*   **Avantages :** Surcharge de ressources minimale, temps de démarrage rapides et mises à jour très rapides pour les nouvelles versions (idéal pour les shaders et les boosters de FPS).
*   **Inconvénients :** Bibliothèque de mods plus restreinte par rapport à Forge ; compatibilité descendante limitée pour les anciennes versions.

---

## NeoForge

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppNeoForgePicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">NeoForge</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">Un fork moderne de Forge, associant l'ensemble des fonctionnalités du loader d'origine à des optimisations de performances de pointe.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(59, 130, 246, 0.15); color: #3b82f6; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">API moderne</span>
      <span style="background: rgba(59, 130, 246, 0.15); color: #3b82f6; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Approche hybride</span>
      <span style="background: rgba(59, 130, 246, 0.15); color: #3b82f6; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Développement actif</span>
    </div>
  </div>
</div>

*   **Avantages :** Base de code plus propre, meilleure expérience pour les développeurs et améliorations régulières issues des retours de la communauté.
*   **Inconvénients :** Écosystème émergent, avec initialement moins de mods compatibles que pour le Forge historique.

---

## Quilt

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <QuiltIcon style="width: 48px; height: 48px; display: block;" />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">Quilt</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">Un fork de Fabric géré par la communauté, étendant sa base légère avec des outils supplémentaires et une compatibilité directe pour les mods Fabric.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(236, 72, 153, 0.15); color: #ec4899; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Compatible Fabric</span>
      <span style="background: rgba(236, 72, 153, 0.15); color: #ec4899; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Innovant</span>
      <span style="background: rgba(236, 72, 153, 0.15); color: #ec4899; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Flexible</span>
    </div>
  </div>
</div>

*   **Avantages :** Compatibilité native avec la plupart des mods Fabric ; fournit des API avancées pour les développeurs.
*   **Inconvénients :** Encore en développement actif, pouvant engendrer de légères instabilités temporaires.

---

## OptiFine

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppOptifinePicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">OptiFine</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">Le mod légendaire d'optimisation de Minecraft. Fournit un boost de FPS massif, le support des textures HD, des shaders et de nombreuses configurations graphiques.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(30, 58, 138, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Boost FPS</span>
      <span style="background: rgba(30, 58, 138, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Support Shaders</span>
      <span style="background: rgba(30, 58, 138, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Ajustements fins</span>
    </div>
  </div>
</div>

*   **Avantages :** Compatibilité inégalée sur les anciennes versions de Minecraft, moyen le plus simple d'exécuter des shaders sans installer d'autres mods.
*   **Inconvénients :** Code source fermé, ce qui provoque souvent des conflits de compatibilité avec les mods Forge/Fabric modernes.

---

## LabyMod

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppLabymodPicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">LabyMod</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">Une modification de client Minecraft riche en fonctionnalités. Elle refond entièrement l'interface utilisateur, ajoute divers widgets utiles et des cosmétiques intégrés.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(15, 23, 42, 0.15); color: #22d3ee; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">HUD personnalisé</span>
      <span style="background: rgba(15, 23, 42, 0.15); color: #22d3ee; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Mod Client</span>
      <span style="background: rgba(15, 23, 42, 0.15); color: #22d3ee; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Cosmétiques</span>
    </div>
  </div>
</div>

*   **Avantages :** Conception modulaire, grande variété de widgets PvP prêts à l'emploi, intégration fluide et personnalisation facile du HUD.
*   **Inconvénients :** Principalement axé sur le multijoueur et le PvP ; peut entrer en conflit avec certains mods de génération de monde globaux.

---

## Comparer

| Fonctionnalité | Minecraft Forge | Fabric | NeoForge | Quilt |
| --- | --- | --- | --- | --- |
| **Performances** | Temps de chargement passez parfois plus longs | Optimisé pour la vitesse | Équilibre la stabilité et les performances | Vitesse améliorée avec des fonctionnalités supplémentaires |
| **Communauté & Support** | Vaste, bien établi | Croissance rapide | Émergent ; la communauté évolue encore | Tire parti de la communauté de Fabric |
| **Compatibilité des mods** | Large et établie | Idéal pour les mods modernes | Fait le pont entre le support des anciens et des nouveaux mods | Compatible avec les mods Fabric |
| **Cycle de mise à jour** | Adoption plus lente des nouvelles versions | Rapide et réactif | Mûrit progressivement grâce aux commentaires | Mises à jour modulaires agiles |

---

## Modloader & Gestion des Mods dans XMCL

Le lanceur X Minecraft Launcher (XMCL) intègre un système natif complet pour installer des chargeurs de mods (modloaders) et gérer vos mods. Vous n'avez pas besoin de télécharger des programmes d'installation externes `.jar` ou `.exe`, ni de suivre des étapes de configuration complexes.

### 1. Installation en un clic du chargeur de mods
Lors de la création d'une nouvelle instance ou de la modification de la version d'une instance existante :
1. Ouvrez les paramètres de version de l'instance.
2. Sélectionnez votre version de Minecraft souhaitée.
3. Choisissez le chargeur de mods que vous souhaitez utiliser (**Forge**, **Fabric**, **NeoForge** ou **Quilt**), ainsi que des optimisateurs de performances comme **OptiFine** ou **LabyMod**.
4. XMCL téléchargera, décompressera et vérifiera automatiquement toutes les bibliothèques et dépendances lors du lancement du jeu.

### 2. Téléchargeur de mods intégré
Sous l'onglet **Mods** de votre instance, vous pouvez rechercher et télécharger des mods directement depuis **Modrinth** et **CurseForge** sans ouvrir de navigateur Web :
* **Filtrage automatique :** XMCL filtre automatiquement les résultats de recherche en fonction de la version de Minecraft et du chargeur de mods sélectionnés dans votre instance. Vous ne verrez que les mods compatibles.
* **Résolution automatique des dépendances :** Si un mod nécessite une autre bibliothèque (comme *Fabric API* ou *Architectury*), XMCL le détectera et vous proposera de télécharger automatiquement toutes les dépendances requises.

### 3. Gestion et activation des mods
* **Activer/désactiver des mods :** Vous pouvez désactiver temporairement des mods à l'aide de simples interrupteurs dans la liste des mods. Pas besoin de déplacer les fichiers hors du dossier.
* **Mises à jour faciles :** Le lanceur scanne vos mods installés et indique ceux pour lesquels des mises à jour sont disponibles, vous permettant de les mettre à jour en un seul clic.
