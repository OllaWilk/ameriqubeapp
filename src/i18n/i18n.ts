import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en/en.json';
import plTranslation from './pl/pl.json';
import deTranslation from './de/de.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  pl: {
    translation: plTranslation,
  },
  de: {
    translation: deTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
