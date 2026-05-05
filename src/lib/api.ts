import type {
  FieldDefinition,
  FormValues,
  PredictRequest,
  PredictResponse,
  HealthResponse,
} from "@/types";

// ─── Field Definitions (from purpose.md) ─────────────────────────────────────

export const FIELD_DEFINITIONS: FieldDefinition[] = [
  {
    key: "accountBalance",
    apiKey: "Account Balance",
    label: "Account Balance",
    type: "select",
    description:
      "Status of the applicant's checking account based on current balance.",
    defaultValue: "1",
    options: [
      {
        value: "1",
        label: "1 — Negative (< 0 DM)",
        description: "Account balance is below zero (overdraft)",
      },
      {
        value: "2",
        label: "2 — Low (0 – 200 DM)",
        description: "Balance between 0 and 200 Deutsche Mark",
      },
      {
        value: "3",
        label: "3 — Stable (≥ 200 DM / Salary)",
        description: "Balance ≥ 200 DM or salary assignment ≥ 1 year",
      },
      {
        value: "4",
        label: "4 — No Account",
        description: "Applicant has no checking account",
      },
    ],
  },
  {
    key: "durationOfCredit",
    apiKey: "Duration of Credit (month)",
    label: "Duration of Credit",
    type: "number",
    description: "Requested loan repayment period in months.",
    defaultValue: "18",
    min: 6,
    max: 48,
    unit: "months",
    placeholder: "e.g. 18",
  },
  {
    key: "valueSavingsStocks",
    apiKey: "Value Savings/Stocks",
    label: "Value of Savings / Stocks",
    type: "select",
    description:
      "Total value of applicant's savings accounts and/or stock holdings.",
    defaultValue: "1",
    options: [
      {
        value: "1",
        label: "1 — Very Low (< 100 DM)",
        description: "Savings less than 100 Deutsche Mark",
      },
      {
        value: "2",
        label: "2 — Low (100 – 500 DM)",
        description: "Savings between 100 and 500 Deutsche Mark",
      },
      {
        value: "3",
        label: "3 — Moderate (500 – 1000 DM)",
        description: "Savings between 500 and 1000 Deutsche Mark",
      },
      {
        value: "4",
        label: "4 — High (≥ 1000 DM)",
        description: "Savings of 1000 Deutsche Mark or more",
      },
      {
        value: "5",
        label: "5 — Unknown / No Savings",
        description: "Unknown savings or no savings account",
      },
    ],
  },
  {
    key: "creditAmount",
    apiKey: "Credit Amount",
    label: "Credit Amount",
    type: "number",
    description: "Total loan amount being requested by the applicant.",
    defaultValue: "2000",
    min: 651,
    max: 18424,
    unit: "DM",
    placeholder: "e.g. 2000",
  },
];

export const DEFAULT_FORM_VALUES: FormValues = FIELD_DEFINITIONS.reduce(
  (acc, field) => ({ ...acc, [field.key]: field.defaultValue }),
  {} as FormValues,
);

// ─── API Client ───────────────────────────────────────────────────────────────

// const API_BASE_URL =
//   process.env.NEXT_PUBLIC_API_URL || "https://backend-theta-dusky.vercel.app";

const API_BASE_URL = "http://localhost:8080";

export async function checkHealth(): Promise<HealthResponse> {
  try {
    console.log("Checking...");
    const res = await fetch(`${API_BASE_URL}/health`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      return { status: "error", message: `HTTP ${res.status}` };
    }

    const data = await res.json();
    console.log("Success!");
    return { status: "ok", ...data };
  } catch (err) {
    console.log("Error checking health:", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return { status: "error", message };
  }
}

export async function predictLoan(
  payload: PredictRequest,
): Promise<PredictResponse> {
  const res = await fetch(`${API_BASE_URL}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(15000),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(
      errorData?.message || `API error: HTTP ${res.status} ${res.statusText}`,
    );
  }

  const data: PredictResponse = await res.json();

  // Defensive: validate expected shape
  if (
    data.prediction_label === undefined ||
    data.probability_good === undefined
  ) {
    throw new Error("Unexpected response format from API.");
  }

  return data;
}

// ─── Form → API Payload Mapper ────────────────────────────────────────────────

export function mapFormToPayload(values: FormValues): PredictRequest {
  return {
    "Account Balance": parseInt(values.accountBalance, 10),
    "Duration of Credit (month)": parseInt(values.durationOfCredit, 10),
    "Value Savings/Stocks": parseInt(values.valueSavingsStocks, 10),
    "Credit Amount": parseInt(values.creditAmount, 10),
  };
}
