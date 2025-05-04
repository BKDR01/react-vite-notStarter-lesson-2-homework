import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from "./locales/en/transetion.json";
import translationRU from "./locales/ru/transetion.json";
import translationUZ from "./locales/uz/transetion.json";

const resources = {
  en: { translation: translationEN },
  ru: { translation: translationRU },
  uz: { translation: translationUZ },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "uz", 
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
