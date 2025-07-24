// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      footer_text: "Collaborative project | femCoders | Factoria F5",
      change_language: "Change Language"
    }
  },
  es: {
    translation: {
      footer_text: "Proyecto colaborativo | FemCoders | Factoria F5",
      change_language: "Cambiar idioma"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
