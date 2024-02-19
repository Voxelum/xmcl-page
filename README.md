# XMCL Pages

This repository contains the source code of the official website of xmcl in https://xmcl.app.

## Develop the official website

Install by pnpm

```bash
pnpm i
```

Start local dev server

```bash
pnpm run dev
```

Build via static site generation

```bash
pnpm run build
```

## I18n

### Website & Common Translation

To localize the official website, add a new locale file under the `locales/` folder.

### Document Translation

The documents are majorly written in markdown. The files should be placed under `src/` folder.

Each locale should have its own folder, and the file structure should be the same as the original language.

We use vitepress as docs generator. You can refer the vitepress document for writing.
