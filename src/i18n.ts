import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import zh from "./locales/zh";
import en from "./locales/en";
import th from "./locales/th";
import ja from "./locales/ja";

const SUPPORTED_LANGS = ["th", "en", "zh", "ja"] as const;
type SupportedLang = (typeof SUPPORTED_LANGS)[number];

function normalizeLang(raw: string | null | undefined): SupportedLang | null {
  if (!raw) return null;
  const lower = raw.toLowerCase();
  const base = lower.split("-")[0] ?? lower;
  return (SUPPORTED_LANGS as readonly string[]).includes(base) ? (base as SupportedLang) : null;
}

function getInitialLanguage(): SupportedLang {
  try {
    const saved = normalizeLang(localStorage.getItem("lng"));
    if (saved) return saved;
  } catch {
    // ignore
  }

  const browserLang =
    typeof navigator !== "undefined"
      ? normalizeLang(navigator.language) ?? normalizeLang(navigator.languages?.[0])
      : null;
  return browserLang ?? "th";
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      th,
      en,
      zh,
      ja
    },
    lng: getInitialLanguage(),
    fallbackLng: 'th',
    interpolation: {
      escapeValue: false, // react already safes from xss
    }
  });

export default i18n;
