import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useCallback,
  useEffect,
} from "react";
import type { SupportedLocale, Translations } from "@/types/i18n";
import { loadTranslations, DEFAULT_LOCALE, isSupportedLocale } from "@/i18n";
import enTranslations from "@/translations/en.json";

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
  const [locale, setLocale] = useState<SupportedLocale>(DEFAULT_LOCALE);
  const [translationsMap, setTranslationsMap] = useState<
    Map<SupportedLocale, Translations>
  >(() => new Map([[DEFAULT_LOCALE, enTranslations as Translations]]));
  const [currentTranslations, setCurrentTranslations] = useState<Translations>(
    enTranslations as Translations,
  );
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

      // If we already have it cached, switch synchronously
      if (translationsMap.has(newLocale)) {
        setLocale(newLocale);
        setCurrentTranslations(translationsMap.get(newLocale)!);
        // Persist explicit user choice so the app can remember preference on next visit.
        try {
          localStorage.setItem("language", newLocale);
        } catch {
          /* ignore localStorage errors */
        }
        // Only set the document language and direction when user explicitly changes language
        try {
          document.documentElement.lang = newLocale;
          document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
        } catch {
          /* ignore DOM errors in non-browser environments */
        }
        return;
      }

      // Otherwise, load lazily
      setIsLoading(true);
      try {
        const loaded = await loadTranslations(newLocale);
        setTranslationsMap((prev) => {
          const next = new Map(prev);
          next.set(newLocale, loaded);
          return next;
        });
        setCurrentTranslations(loaded);
        setLocale(newLocale);
        try {
          localStorage.setItem("language", newLocale);
        } catch {
          /* ignore localStorage errors */
        }
        try {
          document.documentElement.lang = newLocale;
          document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
        } catch {
          /* ignore DOM errors in non-browser environments */
        }
      } catch (error) {
        console.error("Failed to load translations for", newLocale, error);
      } finally {
        setIsLoading(false);
      }
    },
    [locale, translationsMap],
  );

  // On mount, check for a saved language preference and apply it.
  useEffect(() => {
    const initializeLanguage = async () => {
      let savedLocale: string | null = null;
      try {
        savedLocale = localStorage.getItem("language");
      } catch {
        /* ignore localStorage errors */
      }

      if (
        savedLocale &&
        isSupportedLocale(savedLocale) &&
        savedLocale !== DEFAULT_LOCALE
      ) {
        // We have a saved, non-default language. Load it.
        setIsLoading(true);
        try {
          const loaded = await loadTranslations(savedLocale);
          setTranslationsMap((prev) => {
            const next = new Map(prev);
            next.set(savedLocale, loaded);
            return next;
          });
          setCurrentTranslations(loaded);
          setLocale(savedLocale);
          try {
            document.documentElement.lang = savedLocale;
            document.documentElement.dir = savedLocale === "ar" ? "rtl" : "ltr";
          } catch {
            /* ignore DOM errors in non-browser environments */
          }
        } catch (error) {
          console.error(
            "Failed to load saved translations for",
            savedLocale,
            error,
          );
        } finally {
          setIsLoading(false);
        }
      }
    };

    initializeLanguage();
  }, []); // Run only on mount

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
