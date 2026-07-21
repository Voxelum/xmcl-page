import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useCallback,
  useEffect,
} from "react";
import { DEFAULT_LOCALE, isSupportedLocale, loadTranslationsSync } from "@/i18n";
import enTranslations from "@/translations/en.json";

// Global cache and state to persist values across Astro client-side page transitions.
let globalLocale: SupportedLocale = DEFAULT_LOCALE;
let globalTranslations: Translations = enTranslations as Translations;
const globalTranslationsMap = new Map<SupportedLocale, Translations>([[DEFAULT_LOCALE, enTranslations as Translations]]);

// Declare global field on window interface for hydration tracking
declare global {
  interface Window {
    __REACT_HYDRATED__?: boolean;
  }
}

interface TranslationContextType {
  locale: SupportedLocale;
  translations: Translations;
  changeLanguage: (locale: SupportedLocale) => Promise<void>;
  t: (key: string, fallback?: string) => string;
  isLoading: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined,
);

interface TranslationProviderProps {
  children: ReactNode;
  initialLocale?: SupportedLocale;
}

export function TranslationProvider({
  children,
  initialLocale = DEFAULT_LOCALE,
}: TranslationProviderProps) {
  const initialTranslations = loadTranslationsSync(initialLocale);

  const [locale, setLocale] = useState<SupportedLocale>(() => {
    return initialLocale;
  });

  const [translationsMap, setTranslationsMap] = useState<Map<SupportedLocale, Translations>>(() => {
    return new Map([[initialLocale, initialTranslations]]);
  });

  const [currentTranslations, setCurrentTranslations] = useState<Translations>(() => {
    return initialTranslations;
  });

  const [isLoading, setIsLoading] = useState(false);

  const changeLanguage = useCallback(
    async (newLocale: SupportedLocale) => {
      if (!isSupportedLocale(newLocale)) {
        console.warn(`Unsupported locale requested: ${newLocale}`);
        return;
      }

      if (newLocale === locale) {
        return;
      }

      // Load synchronously (instant and cached)
      const loaded = loadTranslationsSync(newLocale);
      
      globalLocale = newLocale;
      globalTranslations = loaded;
      globalTranslationsMap.set(newLocale, loaded);

      setLocale(newLocale);
      setCurrentTranslations(loaded);
      setTranslationsMap(new Map(globalTranslationsMap));

      // Persist choice
      try {
        localStorage.setItem("language", newLocale);
      } catch {}

      try {
        document.documentElement.lang = newLocale;
        document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
      } catch {}
    },
    [locale],
  );

  // Locale-prefixed static pages are authoritative; only legacy unprefixed
  // pages restore a user's browser preference after hydration.
  useEffect(() => {
    window.__REACT_HYDRATED__ = true;
    let activeLocale = initialLocale;

    if (initialLocale === DEFAULT_LOCALE) {
      try {
        const savedLocale = localStorage.getItem("language") as SupportedLocale;
        if (savedLocale && isSupportedLocale(savedLocale)) {
          activeLocale = savedLocale;
        }
      } catch {}
    }

    const activeTranslations = loadTranslationsSync(activeLocale);
    globalLocale = activeLocale;
    globalTranslations = activeTranslations;
    globalTranslationsMap.set(activeLocale, activeTranslations);
    setLocale(activeLocale);
    setCurrentTranslations(activeTranslations);
    setTranslationsMap(new Map(globalTranslationsMap));
    document.documentElement.lang = activeLocale;
    document.documentElement.dir = activeLocale === "ar" ? "rtl" : "ltr";
  }, [initialLocale]);

  // t: safe translation getter with fallbacks (current -> English -> fallback -> key)
  const t = useCallback(
    (key: string, fallback?: string): string => {
      const getValue = (translations: any, keyPath: string): string | null => {
        const keys = keyPath.split(".");
        let value: any = translations;
        for (const k of keys) {
          if (value && typeof value === "object" && k in value) {
            value = value[k];
          } else {
            return null;
          }
        }
        return typeof value === "string" ? value : null;
      };

      // Try current locale
      const currentValue = getValue(currentTranslations, key);
      if (currentValue !== null) return currentValue;

      // Fallback to English (statically imported)
      const enValue = getValue(enTranslations as Translations, key);
      if (enValue !== null) return enValue;

      // Finally return fallback or the key itself
      return fallback || key;
    },
    [currentTranslations],
  );

  const value: TranslationContextType = React.useMemo(
    () => ({
      locale,
      translations: currentTranslations,
      changeLanguage,
      t,
      isLoading,
    }),
    [locale, currentTranslations, changeLanguage, t, isLoading],
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}
