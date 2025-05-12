import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import detectorOptions from "./languageDetectorOptions";
import en from './languages/en.json';
import pl from './languages/pl.json';
import uk from './languages/uk.json';

export const defaultLanguage = 'en'
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: en,
  pl: pl,
  uk: uk
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    load: 'languageOnly',
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    detection: detectorOptions,
    initImmediate: false, // Ensure synchronous initialization
    fallbackLng: defaultLanguage,
    debug: false,
  })
  .then(() => {
    const detectedLanguage = i18n.language;

    // Check if the detected language is supported
    if (supportedLanguages.includes(detectedLanguage)) {
      const currentPath = window.location.pathname.split('/')[1];

      // Redirect only if the path doesn't already match the detected language
      if (currentPath !== detectedLanguage) {
        window.location.pathname = `/${detectedLanguage}`;
      }
    } else {
      // Redirect to default language if detected language is not supported
      window.location.pathname = `/${defaultLanguage}`;
    }
  });

export const supportedLanguages = Object.keys(resources);



export const changeLanguageAndRedirect = (language) => {
  if (supportedLanguages.includes(language)) {
    i18n.changeLanguage(language).then(() => {
      window.location.pathname = `/${language}`;
    });
  } else {
    window.location.pathname = `/`;
  }
};

export const getCurrentLanguage = () => {
  const language = i18n.languages[0];

  if (supportedLanguages.includes(language)) {
    return language
  } else {
    return defaultLanguage
  }
}

export default i18n;