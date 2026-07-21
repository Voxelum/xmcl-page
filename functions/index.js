const supportedLocales = [
  'ar', 'be', 'de', 'en', 'es', 'fr',
  'it', 'jp', 'kk', 'ko', 'pl',
  'ru', 'uk', 'zh-TW', 'zh',
]

function resolveLocale(language) {
  const normalizedLanguage = language.trim().replace('_', '-')
  const exactLocale = supportedLocales.find(
    (locale) => locale.toLowerCase() === normalizedLanguage.toLowerCase(),
  )
  if (exactLocale) return exactLocale

  const languageCode = normalizedLanguage.split('-')[0].toLowerCase()
  if (languageCode === 'ja') return 'jp'
  return supportedLocales.find(
    (locale) => locale.toLowerCase() === languageCode,
  )
}

function getPreferredLocale(request) {
  const acceptLanguage = request.headers.get('Accept-Language') || 'en'
  const candidates = acceptLanguage.split(',').map((language, index) => {
    const [locale, ...parameters] = language.trim().split(';')
    const qualityParameter = parameters.find((parameter) => parameter.trim().startsWith('q='))
    const quality = qualityParameter ? Number.parseFloat(qualityParameter.trim().slice(2)) : 1

    return {
      locale,
      quality: Number.isNaN(quality) ? 0 : quality,
      index,
    }
  })
    .filter((candidate) => candidate.quality > 0)
    .sort((left, right) => right.quality - left.quality || left.index - right.index)

  return candidates.map((candidate) => resolveLocale(candidate.locale)).find(Boolean) || 'en'
}

export function onRequest({ request }) {
  const target = new URL(`/${getPreferredLocale(request)}/`, request.url)
  target.search = new URL(request.url).search

  return new Response(null, {
    status: 302,
    headers: {
      Location: target.toString(),
      'Cache-Control': 'no-store',
      Vary: 'Accept-Language',
    },
  })
}
