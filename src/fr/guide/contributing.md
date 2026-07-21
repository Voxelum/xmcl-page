# Contributing
### Stack technologique et contexte

Voici un aperçu de la chaîne d'outils et de l'environnement d'exécution de ce projet.

Pour l'ensemble du projet, nous utilisons :

- [Node.js >=20](https://nodejs.org/). L'environnement de base des bibliothèques principales.
- [Electron 29](https://electron.atom.io). L'environnement d'exécution du launcher.
- [pnpm](https://pnpm.io/). Utilisé pour la gestion des packages monorepo.
- [TypeScript](https://www.typescriptlang.org/). L'ensemble du projet utilise TypeScript autant que possible.

Pour le processus principal (Electron), nous utilisons :

- [esbuild](https://esbuild.github.io/). Nous utilisons esbuild pour compiler notre TypeScript du processus principal.

Pour le côté renderer, qui est purement front-end :

- [Vue](https://vuejs.org). Utilisé pour construire les interfaces utilisateur.
- [Vite](https://vitejs.dev/). Utilisé comme système de construction.
- [Vuetify](https://vuetifyjs.com/). Utilisé comme bibliothèque de composants.
- [Vue Composition API](https://github.com/vuejs/composition-api). La passerelle pour l'API compositionnelle pour Vue 2. Une fois que Vuetify sera mis à niveau vers Vue 3, Vue sera également mis à niveau et cela sera supprimé.

### Structure et conception du projet

![diagramme](../../assets/diagram.svg)

Voir [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Voxelum/x-minecraft-launcher) pour une conception détaillée. Cela devrait couvrir 90% des cas !

## Comment contribuer

Il est fortement recommandé d'utiliser VSCode pour ouvrir le projet.

### Pour commencer

#### Cloner

Clonez le projet avec le flag submodule `--recurse-submodules`.

```bash
git clone --recurse-submodules https://github.com/Voxelum/x-minecraft-launcher
```

Si vous oubliez d'ajouter le flag `--recurse-submodules`, vous devez initialiser et mettre à jour les submodules git manuellement.

```bash
git submodule init
git submodule update
```

#### Installer

Installez le projet en utilisant [pnpm](https://pnpm.io) :

```
pnpm install
```

<details>
  <summary> Solution pour l'installation lente des dépendances (comme Electron) en Chine </summary>

  Ouvrez votre git bash, avant `pnpm i` ajoutez `registry=https://registry.npm.taobao.org electron_mirror="https://npm.taobao.org/mirrors/electron/"`. Utilisez le miroir npm et Electron fourni par Alibaba en Chine.

  La commande finale sera donc :

  ```bash
  registry=https://registry.npm.taobao.org electron_mirror="https://npm.taobao.org/mirrors/electron/" pnpm i
  ```
</details>

#### Définir les variables d'environnement

Vous devez définir `CURSEFORGE_API_KEY` en créant un fichier `.env` dans `xmcl-electron-app`. Ce fichier `.env` est ajouté au fichier `.gitignore`.

:::warning N'OUBLIEZ PAS
**NE DIVULGUEZ PAS VOTRE CLÉ API CURSEFORGE**
:::

#### Démarrer le Launcher

Ensuite, vous pouvez exécuter le launcher

#### Pour VSCode

Allez dans la section `Run and Debug`, utilisez le profil `Electron: Main (launch)` pour démarrer electron. (Raccourci F5)

#### Pour non VSCode

Ouvrez un terminal

```bash
# Démarrer un serveur de développement pour l'UI
npm run dev:renderer
```

Ouvrez un autre terminal

``` bash
# Démarrer la surveillance du code du processus principal
npm run dev:main
```
