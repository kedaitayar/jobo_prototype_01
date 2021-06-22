import i18n from 'i18next';
import translation from './en.json';
import { initReactI18next } from 'react-i18next';

declare module 'react-i18next' {
   type DefaultResources = typeof resources['en'];
   interface Resources extends DefaultResources {}
}

export const resources = {
   en: {
      translation,
   },
} as const;

i18n.use(initReactI18next).init({
   lng: 'en',
   resources,
});
