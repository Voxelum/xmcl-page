module.exports = async function (context, req) {
  // select language based on req.headers
  const acceptLang = req.headers['accept-language'];
  const to = req.query.to;

  const availableLanguages = ['en', 'fr', 'ru', 'uk', 'zh', 'de'];
  const lang = !acceptLang ? 'en' : acceptLang.split(',').map(lang => {
    const [locale, q] = lang.split(';q=');
    return {
      locale,
      q: q ? parseFloat(q) : 1
    };
  }).sort((a, b) => b.q - a.q).find(lang => availableLanguages.includes(lang.locale))?.locale || 'en';

  context.res = {
    status: 301,
    headers: {
      "location": `/${lang}/${to ?? ''}` // this would be something like "/fr"
    }
  };
};