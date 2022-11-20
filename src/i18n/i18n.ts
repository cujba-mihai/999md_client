import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from "@/public/locales/en/translation.json";
import translationRO from "@/public/locales/ro/translation.json";
import translationRU from "@/public/locales/ru/translation.json";


import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: translationEN
  },
  ro: {
    translation: translationRO
  },
  ru: {
    translation: translationRU
  }
};


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: (code) => {
      const arr = ['en', 'ro', 'ru'];

      
      if(code) {
        arr.unshift(code.slice(0, 2));
      }

      return arr;
    },
    detection: {
      order: ["path", "localStorage", "htmlTag", "cookie"],
      caches: ["localStorage", "cookie"], // cache user language on
    },
    preload: ['en', 'ro', 'ru'],
    debug: true,
    react: {
      useSuspense: true
    },
    returnObjects: true,
  });


export default i18n;