import type { SupportedLocale, Translations } from '@/types/i18n';
import { languageConfigs } from './languageConfigs';

export const DEFAULT_LOCALE: SupportedLocale = 'en';

const supportedLocales = new Set(languageConfigs.map(lang => lang.code));

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return supportedLocales.has(locale as SupportedLocale);
}
// Eager load all translations to make language switching instantaneous and stable.
const translationModules = import.meta.glob('../translations/*.json', { eager: true }) as Record<string, { default: Translations }>;

const localeToModulePath: Record<string, string> = {
  en: '../translations/en.json',
  ru: '../translations/ru.json',
  uk: '../translations/uk.json',
  zh: '../translations/zh.json',
  ja: '../translations/ja.json',
  ko: '../translations/ko.json',
  de: '../translations/de.json',
  fr: '../translations/fr.json',
  es: '../translations/es.json',
  it: '../translations/it.json',
  ar: '../translations/ar.json',
  by: '../translations/by.json',
  kz: '../translations/kz.json',
  pt: '../translations/pt.json',
  tr: '../translations/tr.json',
};

// Fallback to English module directly
const defaultTranslations = (translationModules['../translations/en.json']?.default || {}) as Translations;

export function loadTranslationsSync(locale: SupportedLocale): Translations {
  if (!isSupportedLocale(locale)) {
    return defaultTranslations;
  }

  // Handle zh-Hant mapping to zh if zh-Hant.json is not present
  const mappedLocale = (locale as string) === 'zh-Hant' ? 'zh' : locale;

  const modulePath = localeToModulePath[mappedLocale];
  if (!modulePath) {
    return defaultTranslations;
  }

  const module = translationModules[modulePath];
  return module ? module.default : defaultTranslations;
}

export function loadTranslations(locale: SupportedLocale): Promise<Translations> {
  return Promise.resolve(loadTranslationsSync(locale));
}

export function clearTranslationsCache() {
  // No-op since we eager load
}
