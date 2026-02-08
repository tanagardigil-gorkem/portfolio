import type { Locale } from "../config";
import type { Dictionary } from "./en";
import en from "./en";
import fr from "./fr";
import de from "./de";
import tr from "./tr";

const dictionaries: Record<Locale, Dictionary> = { en, fr, de, tr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
