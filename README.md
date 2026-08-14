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

## Deployment branches

- `staging` deploys a Cloudflare Pages branch preview from the production Pages
  project. Its browser API URLs point to `https://api-staging.xmcl.app`.
- `master` deploys the public production site and points commercial clients to
  `https://api.xmcl.app`.

Changes move from feature branches to `staging` for verification, then from
`staging` to `master` without rebuilding a separate release commit. GitHub
Environments named `staging` and `production` own their respective deployment
secrets. The branch preview is isolated from the production deployment; a
dedicated `staging.xmcl.app` route can be added after the preview is accepted.

## I18n

### Website & Common Translation

To localize the official website, add a new locale file under the `locales/` folder.

### Document Translation

The documents are majorly written in markdown. The files should be placed under `src/` folder.

Each locale should have its own folder, and the file structure should be the same as the original language.

We use vitepress as docs generator. You can refer the vitepress document for writing.
