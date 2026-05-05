"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { RotateCcw, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/FormField";
import { PredictionResult } from "@/components/PredictionResult";
import {
  FIELD_DEFINITIONS,
  DEFAULT_FORM_VALUES,
  predictLoan,
  mapFormToPayload,
} from "@/lib/api";
import { validateForm, hasErrors } from "@/lib/validation";
import type { FormValues, FormErrors, PredictResponse } from "@/types";
import { cn } from "@/lib/utils";

export function LoanForm() {
  const [values, setValues] = useState<FormValues>(DEFAULT_FORM_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictResponse | null>(null);

  // ── Handlers ──────────────────────────────────────────────────────────────

  const handleChange = (key: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    // Clear field error on change
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
    // Clear API error on any change
    if (errors.api) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.api;
        return next;
      });
    }
  };

  const handleReset = () => {
    setValues(DEFAULT_FORM_VALUES);
    setErrors({});
    setResult(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    const validationErrors = validateForm(values);
    if (hasErrors(validationErrors)) {
      setErrors(validationErrors);
      // Scroll to first error
      const firstErrorKey = Object.keys(validationErrors)[0];
      document
        .getElementById(`field-${firstErrorKey}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setLoading(true);
    setErrors({});
    setResult(null);

    try {
      const payload = mapFormToPayload(values);
      const response = await predictLoan(payload);
      setResult(response);
      toast.success(
        `Prediction: ${response.prediction_label} (${Math.round(
          (response.prediction_label === "Good"
            ? response.probability_good
            : response.probability_bad) * 100
        )}% confidence)`,
        { duration: 4000 }
      );
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrors({ api: message });
      toast.error("Prediction failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="w-full space-y-8">
      <form
        onSubmit={handleSubmit}
        noValidate
        aria-label="Loan eligibility prediction form"
      >
        {/* Fields Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {FIELD_DEFINITIONS.map((field, i) => (
            <div
              key={field.key}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <FormField
                field={field}
                value={values[field.key]}
                error={errors[field.key]}
                disabled={loading}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>

        {/* API Error */}
        {errors.api && (
          <div
            role="alert"
            aria-live="assertive"
            className="mt-6 flex items-start gap-3 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive animate-slide-in"
          >
            <span className="mt-0.5 shrink-0 text-base" aria-hidden="true">⚠</span>
            <div>
              <p className="font-semibold">API Error</p>
              <p className="mt-0.5 text-destructive/80">{errors.api}</p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={handleReset}
            disabled={loading}
            className="gap-2"
            aria-label="Reset form to default values"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Reset
          </Button>

          <Button
            type="submit"
            size="lg"
            loading={loading}
            className={cn(
              "gap-2 min-w-[180px] font-semibold",
              loading && "cursor-not-allowed"
            )}
            aria-label="Submit prediction"
          >
            {!loading && <Send className="h-4 w-4" aria-hidden="true" />}
            {loading ? "Predicting…" : "Predict Eligibility"}
          </Button>
        </div>
      </form>

      {/* Result */}
      {result && (
        <div className="pt-2">
          <PredictionResult result={result} />
        </div>
      )}
    </div>
  );
}
