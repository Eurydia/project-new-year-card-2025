import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import en from "./translations/en";
import th from "./translations/th";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      lookupLocalStorage: "language",
    },
    // debug: true,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: "en",
    resources: {
      en,
      th,
    },
  });

export default i18n;
