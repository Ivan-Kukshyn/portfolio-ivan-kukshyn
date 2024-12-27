import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(HttpBackend)
    .init({
        debug: true,
        fallbackLng: 'en',
        backend: {
            loadPath: '/locales/{{lng}}.json',
        },
        interpolation: {
            escapeValue: false, // Defense from XSS
            returnObjects: true
        },
    });

export default i18n;