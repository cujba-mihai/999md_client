const { initReactI18next } = require('react-i18next');

module.exports = {
  nonExplicitSupportedLngs: true, // if true, will consider variants as supported when the main language is. E.g. en-US will be valid if en is in supportedLngs
  serializeConfig: false,
  use: [initReactI18next],
  missingKeyNoValueFallbackToKey: true,
  i18n: {
      localeDetection: false,
      locales: [ 
        'en', 
        'ro',
        'ru', 
      ],
        defaultLocale: 'en',
      },
      fallbackLng: {
        default: ['en'],
        'ru-MD': ['ru'], 
        'ru-mo': ['ru'], 
        'ru-RU': ['ru'], 
        'ro-MD': ['ro'], 
        'ro-RO': ['ro'],
        'en-AU': ['en'],
        'en-BZ': ['en'],
        'en-CA': ['en'],
        'en-cb': ['en'],
        'en-GB': ['en'],
        'en-IE': ['en'],
        'en-IN': ['en'],
        'en-JM': ['en'],
        'en-MT': ['en'],
        'en-MY': ['en'],
        'en-NZ': ['en'],
        'en-PH': ['en'],
        'en-SG': ['en'],
        'en-TT': ['en'],
        'en-US': ['en'],
        'en-ZA': ['en'],
        'en-ZW': ['en'],
      },
  }