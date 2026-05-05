"use client";

import React, { useEffect, useState } from "react";
import { Wifi, WifiOff, RefreshCw } from "lucide-react";
import { checkHealth } from "@/lib/api";
import { useLanguage } from "@/contexts/LanguageContext";
import type { HealthResponse } from "@/types";
import { cn } from "@/lib/utils";

export function HealthIndicator() {
  const { t } = useLanguage();
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [checking, setChecking] = useState(true);

  const runCheck = async () => {
    setChecking(true);
    const result = await checkHealth();
    console.log("Health check result:", result);
    setHealth(result);
    setChecking(false);
  };

  useEffect(() => {
    runCheck();
  }, []);

  const isOk = health?.model_loaded === true;

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={runCheck}
        disabled={checking}
        aria-label="Refresh API status"
        className="group flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 hover:bg-muted disabled:opacity-60"
        title="Click to recheck API status"
      >
        {checking ? (
          <>
            <RefreshCw className="h-3 w-3 animate-spin text-muted-foreground" />
            <span className="text-muted-foreground">Checking…</span>
          </>
        ) : isOk ? (
          <>
            <span
              className={cn("h-2 w-2 rounded-full bg-good animate-pulse-slow")}
              aria-hidden="true"
            />
            <Wifi className="h-3 w-3 text-good" />
            <span className="text-good">{t.header.apiOnline}</span>
          </>
        ) : (
          <>
            <span className="h-2 w-2 rounded-full bg-bad" aria-hidden="true" />
            <WifiOff className="h-3 w-3 text-bad" />
            <span className="text-bad">{t.header.apiOffline}</span>
          </>
        )}
      </button>
    </div>
  );
}
