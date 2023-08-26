import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

void i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ru'],
    fallbackLng: 'en',
    debug: false,
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json'
    }
  });

export default i18n;
