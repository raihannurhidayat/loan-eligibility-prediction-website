// ─── API Types ────────────────────────────────────────────────────────────────

export interface PredictRequest {
  "Account Balance": number;
  "Duration of Credit (month)": number;
  "Value Savings/Stocks": number;
  "Credit Amount": number;
}

export interface PredictResponse {
  prediction: number;
  prediction_label: "Good" | "Bad";
  probability_good: number;
  probability_bad: number;
  features_received: number;
}

export interface HealthResponse {
  status: "ok" | "error";
  model_loaded?: boolean;
  message?: string;
}

// ─── Form Types ───────────────────────────────────────────────────────────────

export interface FormValues {
  accountBalance: string;
  durationOfCredit: string;
  valueSavingsStocks: string;
  creditAmount: string;
}

export interface FormErrors {
  accountBalance?: string;
  durationOfCredit?: string;
  valueSavingsStocks?: string;
  creditAmount?: string;
  api?: string;
}

// ─── Field Definitions ────────────────────────────────────────────────────────

export interface SelectOption {
  value: string;
  label: string;
  description: string;
}

export interface FieldDefinition {
  key: keyof FormValues;
  apiKey: keyof PredictRequest;
  label: string;
  type: "select" | "number";
  description: string;
  defaultValue: string;
  options?: SelectOption[];
  min?: number;
  max?: number;
  unit?: string;
  placeholder?: string;
}
