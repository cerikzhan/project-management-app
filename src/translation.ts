import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './locales';

const initTranslation = (lang: string) =>
  i18n.use(initReactI18next).init({
    resources: translations,
    lng: lang,
    interpolation: {
      escapeValue: false,
    },
  });

export default initTranslation;
