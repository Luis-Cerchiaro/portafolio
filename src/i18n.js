import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from 'i18next-http-backend';

const getHostName = location.origin;

i18n
  .use(backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${getHostName}/locales/{{lng}}.json`,
  }
  });

export default i18n;