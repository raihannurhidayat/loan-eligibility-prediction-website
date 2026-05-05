import type { FormValues, FormErrors, FieldDefinition } from "@/types";
import { FIELD_DEFINITIONS } from "@/lib/api";

export function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  for (const field of FIELD_DEFINITIONS) {
    const raw = values[field.key];

    // Required check
    if (raw === "" || raw === undefined || raw === null) {
      errors[field.key] = `${field.label} is required.`;
      continue;
    }

    if (field.type === "number") {
      const num = Number(raw);

      if (isNaN(num) || !Number.isInteger(num)) {
        errors[field.key] = `${field.label} must be a whole number.`;
        continue;
      }

      if (field.min !== undefined && num < field.min) {
        errors[field.key] = `${field.label} must be at least ${field.min}${field.unit ? " " + field.unit : ""}.`;
        continue;
      }

      if (field.max !== undefined && num > field.max) {
        errors[field.key] = `${field.label} must be at most ${field.max}${field.unit ? " " + field.unit : ""}.`;
        continue;
      }
    }

    if (field.type === "select" && field.options) {
      const valid = field.options.map((o) => o.value);
      if (!valid.includes(raw)) {
        errors[field.key] = `Please select a valid option for ${field.label}.`;
      }
    }
  }

  return errors;
}

export function hasErrors(errors: FormErrors): boolean {
  return Object.keys(errors).some(
    (k) => k !== "api" && errors[k as keyof FormErrors] !== undefined
  );
}

export function getFieldDefinition(key: keyof FormValues): FieldDefinition {
  return FIELD_DEFINITIONS.find((f) => f.key === key)!;
}
