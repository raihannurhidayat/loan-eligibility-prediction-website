import { HealthIndicator } from "@/components/HealthIndicator";
import { LoanForm } from "@/components/LoanForm";
import { ShieldCheck, Cpu } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Background texture ──────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Radial glow top-left */}
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        {/* Radial glow bottom-right */}
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-good/5 blur-3xl" />
      </div>

      {/* ── Header ──────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <ShieldCheck className="h-4 w-4 text-primary-foreground" aria-hidden="true" />
            </div>
            <span className="font-display text-base font-bold tracking-tight">
              LoanCheck
            </span>
          </div>

          {/* API Status */}
          <HealthIndicator />
        </div>
      </header>

      {/* ── Main Content ────────────────────────────────────────── */}
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        {/* Hero section */}
        <div className="mb-10 space-y-3 opacity-0 animate-fade-in">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
            <span>AI-Powered Credit Assessment</span>
          </div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loan Eligibility
            <br />
            <span className="text-primary">Prediction Tool</span>
          </h1>
          <p className="max-w-xl text-base text-muted-foreground leading-relaxed">
            Enter the applicant&apos;s financial details below to instantly assess
            loan eligibility using our Random Forest credit risk model.
          </p>
        </div>

        {/* Model stats strip */}
        <div className="mb-10 grid grid-cols-3 divide-x divide-border overflow-hidden rounded-xl border bg-card opacity-0 animate-fade-in-delay-1">
          {[
            { label: "Model Accuracy", value: "79.00%" },
            { label: "ROC-AUC Score", value: "0.8346" },
            { label: "CV Score (5-fold)", value: "72.90%" },
          ].map((stat) => (
            <div key={stat.label} className="px-5 py-4">
              <p className="text-xs font-medium text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-0.5 font-display text-xl font-bold text-foreground tabular-nums">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="rounded-2xl border bg-card shadow-sm opacity-0 animate-fade-in-delay-2">
          {/* Card header */}
          <div className="border-b px-6 py-5">
            <h2 className="font-display text-lg font-bold text-foreground">
              Applicant Details
            </h2>
            <p className="mt-0.5 text-sm text-muted-foreground">
              All 4 fields are required. Default values are provided for reference.
            </p>
          </div>

          {/* Card body */}
          <div className="px-6 py-7">
            <LoanForm />
          </div>
        </div>

        {/* Disclaimer footer */}
        <p className="mt-8 text-center text-xs text-muted-foreground opacity-0 animate-fade-in-delay-3">
          This tool is for informational purposes only. Results do not constitute
          formal financial or credit advice.
        </p>
      </main>
    </div>
  );
}
