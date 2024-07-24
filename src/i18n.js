import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Welcome: "Welcome to React and react-i18next",
      // Add more keys and translations here
    },
  },
  de: {
    translation: {
      Welcome: "Willkommen bei React und react-i18next",
      // Add more keys and translations here
    },
  },
  fr: {
    translation: {
      Welcome: "Bienvenue chez React et react-i18next",
      // Add more keys and translations here
    },
  },
  it: {
    translation: {
      Welcome: "Benvenuti a React e react-i18next",
      // Add more keys and translations here
    },
  },
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // Default language
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
