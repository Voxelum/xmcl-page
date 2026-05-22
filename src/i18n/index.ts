import type { SupportedLocale, Translations } from '@/types/i18n';
import { languageConfigs } from './languageConfigs';

export const DEFAULT_LOCALE: SupportedLocale = 'en';

const supportedLocales = new Set(languageConfigs.map(lang => lang.code));

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return supportedLocales.has(locale as SupportedLocale);
}
const translationModules = import.meta.glob('../translations/*.json', { eager: false });
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

const translationsCache = new Map<SupportedLocale, Promise<Translations>>();

export function loadTranslations(locale: SupportedLocale): Promise<Translations> {
  if (!isSupportedLocale(locale)) {
    console.warn(`Attempted to load unsupported locale: ${locale}`);
    return Promise.resolve({} as Translations);
  }

  if (translationsCache.has(locale)) {
    return translationsCache.get(locale)!;
  }

  const modulePath = localeToModulePath[locale];
  const moduleLoader = translationModules[modulePath];

  if (!moduleLoader) {
    console.error(`No translation module found for locale: ${locale}`);
    if (locale !== DEFAULT_LOCALE) {
      console.log(`Falling back to default locale: ${DEFAULT_LOCALE}`);
      return loadTranslations(DEFAULT_LOCALE);
    }
    return Promise.resolve({} as Translations);
  }

  const translationPromise = (moduleLoader() as Promise<{ default: Translations }>)
    .then(module => module.default)
    .catch(error => {
      console.error(`Failed to load translations for ${locale}:`, error);
      translationsCache.delete(locale);
      if (locale !== DEFAULT_LOCALE) {
        console.log(`Falling back to default locale: ${DEFAULT_LOCALE}`);
        return loadTranslations(DEFAULT_LOCALE);
      }
      return {} as Translations;
    });

  translationsCache.set(locale, translationPromise);
  return translationPromise;
}

export function clearTranslationsCache() {
  translationsCache.clear();
}
