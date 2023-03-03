# XMCL Pages

This repository contains the source code of the official website of xmcl in https://xmcl.app.

It also contains the docs website of xmcl https://docs.xmcl.app

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

## I18n of website

Add a new locale file under the `locales/` folder.

## Develop official document

Install by pnpm

```bash
pnpm i
```

Start local dev server

```bash
pnpm run docs:dev
```

Build via static site generation

```bash
pnpm run docs:build
```

## Contribute the offical document

The documents are majorly written in markdown. The files should be placed under `docs/` folder.

We use vitepress as docs generator. You can refer the vitepress document for writing.
