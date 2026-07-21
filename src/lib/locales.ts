import { languageConfigs } from "@/i18n/languageConfigs";

const localeMetadata = {
  zh: { hreflang: "zh-Hans", ogLocale: "zh_CN" },
  "zh-Hant": { hreflang: "zh-Hant", ogLocale: "zh_TW" },
  ar: { hreflang: "ar", ogLocale: "ar_AR" },
  by: { hreflang: "be", ogLocale: "be_BY" },
  kz: { hreflang: "kk", ogLocale: "kk_KZ" },
  pt: { hreflang: "pt", ogLocale: "pt_PT" },
} as const;

const sourceLocaleMap: Record<string, string> = {
  by: "be",
  ja: "jp",
  kz: "kk",
  "zh-Hant": "zh-TW",
};

type TranslationTree = Record<string, unknown>;

export function getHreflang(locale: string) {
  return localeMetadata[locale as keyof typeof localeMetadata]?.hreflang ?? locale;
}

export function getOgLocale(locale: string) {
  return localeMetadata[locale as keyof typeof localeMetadata]?.ogLocale;
}

export function getSourceLocale(locale: string) {
  return sourceLocaleMap[locale] ?? locale;
}

export function getLocalizedPath(locale: string, path = "/") {
  const normalizedPath = path === "/"
    ? "/"
    : `/${path.replace(/^\/+|\/+$/g, "")}/`;

  return `/${locale}${normalizedPath}`;
}

export function getLocaleAlternates(path: string, site: URL) {
  return [
    ...languageConfigs.map(({ code }) => ({
      hreflang: getHreflang(code),
      href: new URL(getLocalizedPath(code, path), site).href,
    })),
    {
      hreflang: "x-default",
      href: new URL(getLocalizedPath("en", path), site).href,
    },
  ];
}

export function getText(translations: TranslationTree, path: string, fallback: string) {
  const value = path.split(".").reduce<unknown>((current, key) => {
    if (current && typeof current === "object" && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, translations);

  return typeof value === "string" ? value : fallback;
}
