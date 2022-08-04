import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./lang/en.json";
import fr from "./lang/fr.json";
import az from "./lang/az.json";

// import { useEffect } from "react";

// useEffect(() => {
//   if (localStorage.getItem('i18nextLng')) {
//     const lang = localStorage.getItem('i18nextLng');
//   }
// }, []);

// 'i18nextLng'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en,
      fr,
      az,
    },

    lng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
