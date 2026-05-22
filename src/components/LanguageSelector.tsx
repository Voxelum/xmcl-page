import React, { useState, useCallback, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Globe, MagnifyingGlass, Check, Sparkle, ArrowLeft, X } from "@phosphor-icons/react";
import { useTranslation } from "@/contexts/TranslationContext";
import { languageConfigs } from "@/i18n/languageConfigs";
import { motion, AnimatePresence } from "framer-motion";

const USER_PREFERENCE_KEY = "userPreferredLanguage";
const AUTO_TRANSLATE_KEY = "autoTranslateLanguage";

/**
 * Set the Google Translate cookie and reload the page to trigger translation.
 */
function triggerGoogleTranslate(langCode: string) {
  // Set the googtrans cookie for Google Translate
  const value = `/en/${langCode}`;
  document.cookie = `googtrans=${value};path=/`;
  document.cookie = `googtrans=${value};path=/;domain=${window.location.hostname}`;
  
  // Reload to apply Google Translate
  window.location.reload();
}

/**
 * Remove Google Translate cookies and reload to restore original content.
 */
function removeGoogleTranslate() {
  // Check if Google Translate is active
  const hasGoogTrans = document.cookie.includes('googtrans');
  
  // Clear googtrans cookies
  document.cookie = `googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  document.cookie = `googtrans=;path=/;domain=${window.location.hostname};expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  
  // Only reload if Google Translate was actually active
  if (hasGoogTrans) {
    window.location.reload();
  }
}

// Languages for auto-translate (not in manual translation list)
const AUTO_TRANSLATE_LANGUAGES = [
  { code: 'pl', name: 'Polish', nativeName: 'Polski' },
  { code: 'cs', name: 'Czech', nativeName: 'Čeština' },
  { code: 'sk', name: 'Slovak', nativeName: 'Slovenčina' },
  { code: 'bg', name: 'Bulgarian', nativeName: 'Български' },
  { code: 'sr', name: 'Serbian', nativeName: 'Српски' },
  { code: 'hr', name: 'Croatian', nativeName: 'Hrvatski' },
  { code: 'sl', name: 'Slovenian', nativeName: 'Slovenščina' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska' },
  { code: 'no', name: 'Norwegian', nativeName: 'Norsk' },
  { code: 'da', name: 'Danish', nativeName: 'Dansk' },
  { code: 'fi', name: 'Finnish', nativeName: 'Suomi' },
  { code: 'el', name: 'Greek', nativeName: 'Ελληνικά' },
  { code: 'hu', name: 'Hungarian', nativeName: 'Magyar' },
  { code: 'ro', name: 'Romanian', nativeName: 'Română' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'fa', name: 'Persian', nativeName: 'فارسی' },
  { code: 'he', name: 'Hebrew', nativeName: 'עברית' },
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili' },
];

/**
 * LanguageTrigger — the small button shown in the menu footer.
 * When clicked, tells the parent to switch to the language panel view.
 */
export const LanguageTrigger = ({ onClick }: { onClick?: () => void }) => {
  const { locale } = useTranslation();
  
  const [autoTranslateLanguage, setAutoTranslateLanguage] = useState<string | null>(() => {
    try { return localStorage.getItem(AUTO_TRANSLATE_KEY); } catch { return null; }
  });

  const currentLanguage = useMemo(
    () => languageConfigs.find((lang) => lang.code === locale),
    [locale],
  );

  const autoLangDisplay = autoTranslateLanguage 
    ? AUTO_TRANSLATE_LANGUAGES.find(l => l.code === autoTranslateLanguage)?.nativeName
    : null;

  return (
    <button
      onClick={onClick}
      className="group relative w-full h-10 flex items-center justify-between gap-2 overflow-hidden rounded-xl bg-black/5 dark:bg-white/10 px-3 text-slate-700 dark:text-slate-200 transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/15 border border-transparent dark:border-white/5 text-sm font-medium"
    >
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/50 dark:bg-black/20 text-slate-600 dark:text-slate-300">
          {autoTranslateLanguage ? <Sparkle className="h-3.5 w-3.5 text-yellow-500" /> : <Globe className="h-3.5 w-3.5" />}
        </div>
        <span className="truncate">
          {autoLangDisplay || currentLanguage?.name || "English"}
        </span>
        {autoTranslateLanguage && (
          <span className="text-[10px] bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-1.5 py-0.5 rounded-full">AUTO</span>
        )}
      </div>
      <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
};

/**
 * LanguagePanel — the full language selection panel shown inline in the menu.
 * Replaces the main menu content when the user wants to change language.
 */
export const LanguagePanel = ({ onBack, onClose }: { onBack: () => void; onClose: () => void }) => {
  const { t, locale, changeLanguage } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<'manual' | 'auto'>('manual');
  const [autoTranslateLanguage, setAutoTranslateLanguage] = useState<string | null>(() => {
    try { return localStorage.getItem(AUTO_TRANSLATE_KEY); } catch { return null; }
  });

  const filteredLanguages = useMemo(() => {
    if (!searchTerm) return languageConfigs;
    const term = searchTerm.toLowerCase();
    return languageConfigs.filter(
      (lang) =>
        lang.name.toLowerCase().includes(term) ||
        lang.code.toLowerCase().includes(term),
    );
  }, [searchTerm]);

  const filteredAutoLanguages = useMemo(() => {
    if (!searchTerm) return AUTO_TRANSLATE_LANGUAGES;
    const term = searchTerm.toLowerCase();
    return AUTO_TRANSLATE_LANGUAGES.filter(
      (lang) =>
        lang.name.toLowerCase().includes(term) ||
        lang.nativeName.toLowerCase().includes(term) ||
        lang.code.toLowerCase().includes(term),
    );
  }, [searchTerm]);

  const handleLanguageChange = useCallback(
    (langCode: string) => {
      // Clear any active auto-translate first
      removeGoogleTranslate();
      changeLanguage(langCode);
      localStorage.setItem(USER_PREFERENCE_KEY, langCode);
      localStorage.removeItem(AUTO_TRANSLATE_KEY);
      setAutoTranslateLanguage(null);
      onClose();
    },
    [changeLanguage, onClose],
  );

  const handleAutoTranslate = useCallback(
    (langCode: string) => {
      setAutoTranslateLanguage(langCode);
      localStorage.setItem(AUTO_TRANSLATE_KEY, langCode);
      // Trigger Google Translate by setting the googtrans cookie and reloading
      triggerGoogleTranslate(langCode);
      onClose();
    },
    [onClose],
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header with back button */}
      <div className="flex items-center gap-2 p-3 border-b border-black/5 dark:border-white/5">
        <button
          onClick={onBack}
          className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 flex-1">
          {t("ui.changeLanguage", "Change language")}
        </span>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Search */}
      <div className="p-3 border-b border-black/5 dark:border-white/5">
        <div className="relative">
          <MagnifyingGlass className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
          <Input
            placeholder={t("language.searchPlaceholder", "Search...")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-9 border-none bg-black/5 pl-9 pr-4 text-sm rounded-lg focus-visible:ring-1 focus-visible:ring-indigo-500/50 dark:bg-white/5 dark:text-slate-200"
          />
        </div>
      </div>

      {/* Tab Toggle */}
      <div className="flex gap-1 p-2 border-b border-black/5 dark:border-white/5">
        <button
          onClick={() => setActiveTab('manual')}
          className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
            activeTab === 'manual'
              ? 'bg-indigo-500 text-white shadow-sm shadow-indigo-500/25' 
              : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          Manual ({languageConfigs.length})
        </button>
        <button
          onClick={() => setActiveTab('auto')}
          className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-1.5 ${
            activeTab === 'auto'
              ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-sm shadow-amber-500/25' 
              : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Sparkle className="w-3 h-3" />
          Auto ({AUTO_TRANSLATE_LANGUAGES.length})
        </button>
      </div>

      {/* Language List */}
      <div className="flex-1 overflow-y-auto p-2 custom-scrollbar" style={{ maxHeight: '45vh' }}>
        <AnimatePresence mode="wait">
          {activeTab === 'manual' ? (
            <motion.div
              key="manual"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.15 }}
              className="space-y-0.5"
            >
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map((lang) => {
                  const isSelected = locale === lang.code && !autoTranslateLanguage;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`
                        w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150 text-left
                        ${
                          isSelected
                            ? "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300"
                            : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        }
                      `}
                    >
                      <span className="flex-1">{lang.name}</span>
                      {isSelected && <Check className="h-4 w-4 text-indigo-500" />}
                    </button>
                  );
                })
              ) : (
                <div className="py-8 text-center text-sm text-slate-400">
                  {t("language.noLanguageFound", "No results")}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="auto"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.15 }}
              className="space-y-0.5"
            >
              {filteredAutoLanguages.length > 0 ? (
                filteredAutoLanguages.map((lang) => {
                  const isSelected = autoTranslateLanguage === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => handleAutoTranslate(lang.code)}
                      className={`
                        w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150 text-left
                        ${
                          isSelected
                            ? "bg-yellow-500/10 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-300"
                            : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        }
                      `}
                    >
                      <Sparkle className="h-3 w-3 text-yellow-500 flex-shrink-0" />
                      <span className="flex-1">{lang.nativeName}</span>
                      <span className="text-xs text-slate-400">{lang.name}</span>
                      {isSelected && <Check className="h-4 w-4 flex-shrink-0 text-yellow-500" />}
                    </button>
                  );
                })
              ) : (
                <div className="py-8 text-center text-sm text-slate-400">
                  {t("language.noLanguageFound", "No results")}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Keep backward compatibility export  
const LanguageSelector = LanguageTrigger;
export { LanguageSelector };
