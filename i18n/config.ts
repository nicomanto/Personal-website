import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import errorEN from "./en/pages/error.json";
import formEmailEN from "./en/components/formEmail.json";
import layoutEN from "./en/components/layout.json";
import cookieEN from "./en/components/cookie.json";
import indexEN from "./en/pages/index.json";
import experienceEN from "./en/pages/experience.json";
import errorIT from "./it/pages/error.json";
import formEmailIT from "./it/components/formEmail.json";
import layoutIT from "./it/components/layout.json";
import cookieIT from "./it/components/cookie.json";
import indexIT from "./it/pages/index.json";
import experienceIT from "./it/pages/experience.json";

const resources = {
  en: {
    error: errorEN,
    formEmail: formEmailEN,
    layout: layoutEN,
    cookie: cookieEN,
    index: indexEN,
    experience: experienceEN,
  },
  it: {
    error: errorIT,
    formEmail: formEmailIT,
    layout: layoutIT,
    cookie: cookieIT,
    index: indexIT,
    experience: experienceIT,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ["index", "contacts", "projects", "experience", "error", "formEmail", "layout", "cookie"],
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "it"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
