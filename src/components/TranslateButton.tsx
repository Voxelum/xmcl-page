import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Translate, Check, Spinner, ArrowCounterClockwise } from '@phosphor-icons/react';
import { useTranslation } from '@/contexts/TranslationContext';

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const LANGUAGES: Language[] = [
  // Western European
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
  { code: 'ca', name: 'Catalan', nativeName: 'Català' },
  { code: 'gl', name: 'Galician', nativeName: 'Galego' },
  { code: 'eu', name: 'Basque', nativeName: 'Euskara' },
  
  // Nordic languages
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska' },
  { code: 'no', name: 'Norwegian', nativeName: 'Norsk' },
  { code: 'da', name: 'Danish', nativeName: 'Dansk' },
  { code: 'fi', name: 'Finnish', nativeName: 'Suomi' },
  { code: 'is', name: 'Icelandic', nativeName: 'Íslenska' },
  
  // Baltic
  { code: 'lt', name: 'Lithuanian', nativeName: 'Lietuvių' },
  { code: 'lv', name: 'Latvian', nativeName: 'Latviešu' },
  { code: 'et', name: 'Estonian', nativeName: 'Eesti' },
  
  // Asian languages
  { code: 'zh', name: 'Chinese (Simplified)', nativeName: '简体中文' },
  { code: 'zh-TW', name: 'Chinese (Traditional)', nativeName: '繁體中文' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu' },
  { code: 'tl', name: 'Filipino', nativeName: 'Tagalog' },
  { code: 'my', name: 'Burmese', nativeName: 'မြန်မာဘာသာ' },
  { code: 'km', name: 'Khmer', nativeName: 'ភាសាខ្មែរ' },
  { code: 'lo', name: 'Lao', nativeName: 'ລາວ' },
  
  // South Asian
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
  { code: 'ne', name: 'Nepali', nativeName: 'नेपाली' },
  { code: 'si', name: 'Sinhala', nativeName: 'සිංහල' },
  
  // Middle Eastern
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'fa', name: 'Persian', nativeName: 'فارسی' },
  { code: 'he', name: 'Hebrew', nativeName: 'עברית' },
  { code: 'ku', name: 'Kurdish', nativeName: 'Kurdî' },
  
  // Central Asian
  { code: 'kk', name: 'Kazakh', nativeName: 'Қазақша' },
  { code: 'uz', name: 'Uzbek', nativeName: 'Oʻzbekcha' },
  { code: 'ky', name: 'Kyrgyz', nativeName: 'Кыргызча' },
  { code: 'tg', name: 'Tajik', nativeName: 'Тоҷикӣ' },
  { code: 'tk', name: 'Turkmen', nativeName: 'Türkmençe' },
  { code: 'az', name: 'Azerbaijani', nativeName: 'Azərbaycan' },
  { code: 'ka', name: 'Georgian', nativeName: 'ქართული' },
  { code: 'hy', name: 'Armenian', nativeName: 'Հայերեն' },
  { code: 'mn', name: 'Mongolian', nativeName: 'Монгол' },
  
  // Other European
  { code: 'ro', name: 'Romanian', nativeName: 'Română' },
  { code: 'hu', name: 'Hungarian', nativeName: 'Magyar' },
  { code: 'el', name: 'Greek', nativeName: 'Ελληνικά' },
  { code: 'sq', name: 'Albanian', nativeName: 'Shqip' },
  { code: 'mt', name: 'Maltese', nativeName: 'Malti' },
  { code: 'cy', name: 'Welsh', nativeName: 'Cymraeg' },
  { code: 'ga', name: 'Irish', nativeName: 'Gaeilge' },
  
  // African
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili' },
  { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans' },
  { code: 'zu', name: 'Zulu', nativeName: 'isiZulu' },
  { code: 'xh', name: 'Xhosa', nativeName: 'isiXhosa' },
  { code: 'am', name: 'Amharic', nativeName: 'አማርኛ' },
  { code: 'yo', name: 'Yoruba', nativeName: 'Yorùbá' },
  { code: 'ig', name: 'Igbo', nativeName: 'Igbo' },
  { code: 'ha', name: 'Hausa', nativeName: 'Hausa' },

  // Slavic languages (at the bottom, without Russian)
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski' },
  { code: 'cs', name: 'Czech', nativeName: 'Čeština' },
  { code: 'sk', name: 'Slovak', nativeName: 'Slovenčina' },
  { code: 'bg', name: 'Bulgarian', nativeName: 'Български' },
  { code: 'sr', name: 'Serbian', nativeName: 'Српски' },
  { code: 'hr', name: 'Croatian', nativeName: 'Hrvatski' },
  { code: 'sl', name: 'Slovenian', nativeName: 'Slovenščina' },
  { code: 'be', name: 'Belarusian', nativeName: 'Беларуская' },
  { code: 'mk', name: 'Macedonian', nativeName: 'Македонски' },
  { code: 'bs', name: 'Bosnian', nativeName: 'Bosanski' },
];


interface TranslateButtonProps {
  onTranslate: (targetLang: string) => void;
  isTranslating: boolean;
  isTranslated: boolean;
  currentLanguage?: string | null;
  onReset: () => void;
  error?: string | null;
}

export function TranslateButton({
  onTranslate,
  isTranslating,
  isTranslated,
  currentLanguage,
  onReset,
  error,
}: TranslateButtonProps) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLangName = currentLanguage
    ? LANGUAGES.find((l) => l.code === currentLanguage)?.nativeName
    : null;

  if (isTranslating) {
    return (
      <Button
        variant="outline"
        disabled
        className="rounded-xl bg-[#1c1c1c] border-[#2d2d2d] text-white"
      >
        <Spinner className="mr-2 h-4 w-4 animate-spin text-[#ea4c3c]" />
        {t('translate.translating', 'Translating...')}
      </Button>
    );
  }

  if (isTranslated) {
    return (
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          onClick={onReset}
          className="rounded-xl bg-[#1c1c1c] border-[#2d2d2d] text-[#ea4c3c] hover:bg-[#2d2d2d] hover:text-white"
        >
          <ArrowCounterClockwise className="mr-2 h-4 w-4 text-[#ea4c3c]" />
          <span className="text-[#ea4c3c]">
            {t('translate.showOriginal', 'Show Original')}
          </span>
          {currentLangName && (
            <span className="ml-2 text-xs text-slate-400">
              ({currentLangName})
            </span>
          )}
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-1">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="rounded-xl bg-[#1c1c1c] border-[#2d2d2d] hover:bg-[#2d2d2d] hover:text-white transition-all text-slate-400"
          >
            <Translate className="mr-2 h-4 w-4" />
            {t('translate.button', 'Translate')}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-56 max-h-80 overflow-y-auto bg-[#1c1c1c] border-[#2d2d2d] rounded-xl shadow-none"
        >
          <div className="px-2 py-1.5 text-xs text-slate-400 font-medium">
            {t('translate.selectLanguage', 'Select language')}
          </div>
          <DropdownMenuSeparator />
          {LANGUAGES.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => {
                onTranslate(lang.code);
                setIsOpen(false);
              }}
              className="flex items-center justify-between cursor-pointer hover:bg-[#2d2d2d] hover:text-white rounded-lg mx-1 text-slate-300"
            >
              <span className="font-medium">{lang.nativeName}</span>
              <span className="text-xs text-slate-500">{lang.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {error && (
        <p className="text-xs text-red-500 dark:text-red-400 mt-1">
          {t('translate.error', error)}
        </p>
      )}
    </div>
  );
}
