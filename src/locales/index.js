import { createI18n } from "vue-i18n";
import en from "./en.json";
import vi from "./vi.json";

const i18n = createI18n({
  locale: navigator.language, 
  fallbackLocale: "en", 
  messages: {
    en,
    vi,
  },
  legacy: false
});
export default i18n;
