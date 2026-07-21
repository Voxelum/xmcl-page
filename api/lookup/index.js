module.exports = async function (context, req) {
  const acceptLang = req.headers['accept-language'];

  const availableLanguages = ['ar', 'be', 'de', 'en', 'es', 'fr', 'it', 'jp', 'kk', 'ko', 'pl', 'ru', 'uk', 'zh-TW', 'zh'];
  const resolveLocale = (language) => {
    const normalizedLanguage = language.trim().replace('_', '-');
    const exactLocale = availableLanguages.find(locale => locale.toLowerCase() === normalizedLanguage.toLowerCase());
    if (exactLocale) return exactLocale;

    const languageCode = normalizedLanguage.split('-')[0].toLowerCase();
    if (languageCode === 'ja') return 'jp';
    return availableLanguages.find(locale => locale.toLowerCase() === languageCode);
  };
  const lang = !acceptLang ? 'en' : acceptLang.split(',').map(language => {
    const [locale, q] = language.split(';q=');
    return {
      locale,
      q: q ? parseFloat(q) : 1,
      resolvedLocale: resolveLocale(locale)
    };
  }).sort((a, b) => b.q - a.q).find(language => language.resolvedLocale)?.resolvedLocale || 'en';

  context.res = {
    status: 301,
    headers: {
      "location": `/${lang}/` // this would be something like "/fr"
    }
  };
};
