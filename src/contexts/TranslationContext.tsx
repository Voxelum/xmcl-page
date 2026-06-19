import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useCallback,
  useEffect,
} from "react";
import { loadTranslations, DEFAULT_LOCALE, isSupportedLocale, loadTranslationsSync } from "@/i18n";
import enTranslations from "@/translations/en.json";

// Global cache and state to persist values across Astro client-side page transitions
let globalLocale: SupportedLocale = DEFAULT_LOCALE;
let globalTranslations: Translations = enTranslations as Translations;
const globalTranslationsMap = new Map<SupportedLocale, Translations>([[DEFAULT_LOCALE, enTranslations as Translations]]);
let isInitializedFromStorage = false;

// Declare global field on window interface for hydration tracking
declare global {
  interface Window {
    __REACT_HYDRATED__?: boolean;
  }
}

const initFromStorage = () => {
  if (isInitializedFromStorage || typeof window === "undefined") return;
  try {
    const savedLocale = localStorage.getItem("language") as SupportedLocale;
    if (savedLocale && isSupportedLocale(savedLocale)) {
      globalLocale = savedLocale;
      globalTranslations = loadTranslationsSync(savedLocale);
      globalTranslationsMap.set(savedLocale, globalTranslations);
    }
  } catch {}
  isInitializedFromStorage = true;
};

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
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  // Ensure we check storage on mount/first render
  if (typeof window !== "undefined" && !isInitializedFromStorage) {
    initFromStorage();
  }

  // To prevent hydration mismatch, we must initialize React states with DEFAULT_LOCALE on initial mount,
  // but if the window indicates we have already hydrated once (i.e. client-side page load), we can use global values directly.
  const [locale, setLocale] = useState<SupportedLocale>(() => {
    if (typeof window === "undefined") return DEFAULT_LOCALE;
    return window.__REACT_HYDRATED__ ? globalLocale : DEFAULT_LOCALE;
  });

  const [translationsMap, setTranslationsMap] = useState<Map<SupportedLocale, Translations>>(() => {
    if (typeof window === "undefined" || !window.__REACT_HYDRATED__) {
      return new Map([[DEFAULT_LOCALE, enTranslations as Translations]]);
    }
    return new Map(globalTranslationsMap);
  });

  const [currentTranslations, setCurrentTranslations] = useState<Translations>(() => {
    if (typeof window === "undefined" || !window.__REACT_HYDRATED__) {
      return enTranslations as Translations;
    }
    return globalTranslations;
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

  // Sync state on initial mount to match client-side saved language preference
  useEffect(() => {
    const isFirstHydration = !window.__REACT_HYDRATED__;
    window.__REACT_HYDRATED__ = true;

    if (isFirstHydration) {
      // Initialize if not already done
      initFromStorage();

      if (globalLocale !== DEFAULT_LOCALE) {
        setLocale(globalLocale);
        setCurrentTranslations(globalTranslations);
        setTranslationsMap(new Map(globalTranslationsMap));
      }
    }

    // Always ensure DOM attributes match the current locale on page load/remount
    try {
      document.documentElement.lang = globalLocale;
      document.documentElement.dir = globalLocale === "ar" ? "rtl" : "ltr";
    } catch {}
  }, []);

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
