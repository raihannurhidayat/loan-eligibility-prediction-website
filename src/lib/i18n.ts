import { en, id } from "@/translations/index";

export function getFieldLabel(fieldKey: string, language: "en" | "id"): string {
  const translations = language === "id" ? id : en;
  return (translations.form.labels as any)[fieldKey] || fieldKey;
}

export function getFieldDescription(
  fieldKey: string,
  language: "en" | "id",
): string {
  const translations = language === "id" ? id : en;
  return (translations.form.descriptions as any)[fieldKey] || "";
}

export function getFieldPlaceholder(
  fieldKey: string,
  language: "en" | "id",
): string {
  const translations = language === "id" ? id : en;
  return (translations.form.placeholders as any)[fieldKey] || "";
}

export function getFieldOptionLabel(
  fieldKey: string,
  optionValue: string,
  language: "en" | "id",
): string {
  const translations = language === "id" ? id : en;
  const options = (translations.form.options as any)[fieldKey];
  if (options && options[optionValue]) {
    return options[optionValue];
  }
  return optionValue;
}

export function getFieldUnit(fieldKey: string, language: "en" | "id"): string {
  const translations = language === "id" ? id : en;
  const unitKey = (() => {
    if (fieldKey.includes("Duration") || fieldKey.includes("years")) {
      return "months";
    } else if (fieldKey.includes("Amount") || fieldKey.includes("Credit")) {
      return "dm";
    } else if (fieldKey.includes("Rate")) {
      return "percentage";
    }
    return "";
  })();
  if (unitKey) {
    return (translations.form.units as any)[unitKey] || "";
  }
  return "";
}
