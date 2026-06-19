import React from 'react';
import { JsonI18nProvider, useJsonI18n } from '@/contexts/TranslationContext';
import { LanguageCode } from '@/types/i18n';

type TranslationKeys = {
  nav?: Record<string, string>;
  ui?: Record<string, string>;
  common?: {
    fileSize?: Record<string, string>;
  };
};

function TranslatedContent() {
  const { t, currentLanguage, setLanguage, isLoading } = useJsonI18n();
  const typedT = t as TranslationKeys;

  const languages = [
    { code: 'en' as LanguageCode, name: 'English' },
    { code: 'ru' as LanguageCode, name: 'Русский' },
    { code: 'uk' as LanguageCode, name: 'Українська' },
    { code: 'zh' as LanguageCode, name: '中文' },
    { code: 'de' as LanguageCode, name: 'Deutsch' },
    { code: 'ja' as LanguageCode, name: '日本語' },
    { code: 'ar' as LanguageCode, name: 'العربية' },
    { code: 'ko' as LanguageCode, name: '한국어' }
  ];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as LanguageCode);
  };

  if (isLoading) {
    return <div className="p-4 text-center">Loading translations...</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">JSON Translation Example</h2>
        <select 
          value={currentLanguage} 
          onChange={handleLanguageChange}
          className="px-3 py-2 border rounded-md bg-background"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4 p-4 border rounded-md">
        <h3 className="text-xl font-semibold">Navigation</h3>
        <ul className="space-y-2">
          {typedT.nav && Object.entries(typedT.nav).map(([key, value]) => (
            <li key={key} className="flex">
              <span className="font-mono text-sm mr-2">{key}:</span> 
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4 p-4 border rounded-md">
        <h3 className="text-xl font-semibold">UI Elements</h3>
        <ul className="space-y-2">
          {typedT.ui && Object.entries(typedT.ui).map(([key, value]) => (
            <li key={key} className="flex">
              <span className="font-mono text-sm mr-2">{key}:</span> 
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4 p-4 border rounded-md">
        <h3 className="text-xl font-semibold">File Sizes</h3>
        <ul className="space-y-2">
          {typedT.common?.fileSize && Object.entries(typedT.common.fileSize).map(([key, value]) => (
            <li key={key} className="flex">
              <span className="font-mono text-sm mr-2">{key}:</span> 
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function JsonTranslationExample() {
  return (
    <JsonI18nProvider>
      <TranslatedContent />
    </JsonI18nProvider>
  );
}