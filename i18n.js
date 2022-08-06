import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import LangEn from "./lang/en.json";
import LangAz from "./lang/az.json";
import LangFr from "./lang/fr.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector) 
  .init({
    fallbackLng: "en",

    resources: {
      en: LangEn,
      az: LangAz,
      fr: LangFr,
    },
  });