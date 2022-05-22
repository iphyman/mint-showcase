import {
  af,
  ar,
  ca,
  cs,
  da,
  de,
  el,
  en,
  es,
  fi,
  fr,
  he,
  hu,
  id,
  it,
  ja,
  ko,
  nl,
  no,
  pl,
  pt,
  ro,
  ru,
  sr,
  sv,
  sw,
  tr,
  uk,
  vi,
  zh,
  PluralCategory,
} from "make-plural/plurals";
import { SupportedLocale } from "./locales";

type LocalePlural = {
  [key in SupportedLocale]: (
    n: number | string,
    ord?: boolean
  ) => PluralCategory;
};

export const plurals: LocalePlural = {
  "af-ZA": af,
  "ar-SA": ar,
  "ca-ES": ca,
  "cs-CZ": cs,
  "da-DK": da,
  "de-DE": de,
  "el-GR": el,
  "en-US": en,
  "es-ES": es,
  "fi-FI": fi,
  "fr-FR": fr,
  "he-IL": he,
  "hu-HU": hu,
  "id-ID": id,
  "it-IT": it,
  "ja-JP": ja,
  "ko-KR": ko,
  "nl-NL": nl,
  "no-NO": no,
  "pl-PL": pl,
  "pt-BR": pt,
  "pt-PT": pt,
  "ro-RO": ro,
  "ru-RU": ru,
  "sr-SP": sr,
  "sv-SE": sv,
  "sw-TZ": sw,
  "tr-TR": tr,
  "uk-UA": uk,
  "vi-VN": vi,
  "zh-CN": zh,
  "zh-TW": zh,
  pseudo: en,
};