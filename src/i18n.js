import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend'; // To load JSON files from the server or locally.

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(HttpBackend)
    .init({
        debug: true,
        fallbackLng: 'en',
        backend: {
            loadPath: 'src/assets/locales/{{lng}}.json',
        },
        interpolation: {
            escapeValue: false, //React already protects against XSS (Cross-Site Scripting)
        }
    });

export default i18n;