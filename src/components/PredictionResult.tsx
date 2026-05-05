"use client";

import React from "react";
import { CheckCircle2, XCircle, TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import type { PredictResponse } from "@/types";
import { cn } from "@/lib/utils";

interface PredictionResultProps {
  result: PredictResponse;
}

function ProbabilityBar({
  label,
  value,
  variant,
  delay = 0,
}: {
  label: string;
  value: number;
  variant: "good" | "bad";
  delay?: number;
}) {
  const pct = Math.round(value * 100);

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{label}</span>
        <span
          className={cn(
            "font-mono font-semibold tabular-nums",
            variant === "good" ? "text-good" : "text-bad",
          )}
        >
          {pct}%
        </span>
      </div>

      {/* Track */}
      <div
        className="h-2.5 w-full overflow-hidden rounded-full bg-muted"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${label}: ${pct}%`}
      >
        {/* Fill — driven by inline style + CSS animation */}
        <div
          className={cn(
            "h-full rounded-full transition-none",
            variant === "good"
              ? "bg-gradient-to-r from-good/70 to-good"
              : "bg-gradient-to-r from-bad/70 to-bad",
          )}
          style={{
            width: "0%",
            animation: `progress-fill 0.9s ease-out ${delay}ms forwards`,
            // CSS custom property for the target width used in keyframe
            ["--target-width" as string]: `${pct}%`,
          }}
        />
      </div>
    </div>
  );
}

export function PredictionResult({ result }: PredictionResultProps) {
  const { t } = useLanguage();
  const isGood = result.prediction_label === "Good";
  const predictionLabel = isGood ? t.prediction.good : t.prediction.bad;

  return (
    <div
      className={cn(
        "rounded-xl border-2 p-6 space-y-5 opacity-0 animate-fade-in",
        isGood
          ? "border-good/30 bg-good-muted/40"
          : "border-bad/30 bg-bad-muted/40",
      )}
      role="region"
      aria-label="Prediction result"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t.prediction.result}
          </p>
          <div className="flex items-center gap-3 mt-1">
            {isGood ? (
              <CheckCircle2
                className="h-8 w-8 text-good shrink-0"
                aria-hidden="true"
              />
            ) : (
              <XCircle
                className="h-8 w-8 text-bad shrink-0"
                aria-hidden="true"
              />
            )}
            <h2
              className={cn(
                "text-3xl font-display font-bold tracking-tight",
                isGood ? "text-good" : "text-bad",
              )}
            >
              {predictionLabel}
            </h2>
          </div>
        </div>

        <Badge
          variant={isGood ? "good" : "bad"}
          className="text-sm px-4 py-1.5 shrink-0"
        >
          {isGood ? (
            <TrendingUp className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
          ) : (
            <TrendingDown className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
          )}
          {Math.round(
            (isGood ? result.probability_good : result.probability_bad) * 100,
          )}
          % {t.prediction.confidence}
        </Badge>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-border/60" />

      {/* Probability Bars */}
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {t.prediction.probability} Breakdown
        </p>
        <ProbabilityBar
          label={t.prediction.goodLoans}
          value={result.probability_good}
          variant="good"
          delay={100}
        />
        <ProbabilityBar
          label={t.prediction.badLoans}
          value={result.probability_bad}
          variant="bad"
          delay={250}
        />
      </div>

      {/* Footer note */}
      <p className="text-xs text-muted-foreground leading-relaxed">
        {t.prediction.disclaimer}
      </p>
    </div>
  );
}
