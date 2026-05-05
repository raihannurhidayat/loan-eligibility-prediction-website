"use client";

import React from "react";
import { Info } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  getFieldLabel,
  getFieldDescription,
  getFieldPlaceholder,
  getFieldOptionLabel,
  getFieldUnit,
} from "@/lib/i18n";
import type { FieldDefinition, FormValues } from "@/types";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  field: FieldDefinition;
  value: string;
  error?: string;
  disabled?: boolean;
  onChange: (key: keyof FormValues, value: string) => void;
}

export function FormField({
  field,
  value,
  error,
  disabled,
  onChange,
}: FormFieldProps) {
  const { language } = useLanguage();
  const fieldId = `field-${field.key}`;
  const errorId = `error-${field.key}`;

  const label = getFieldLabel(field.key, language);
  const description = getFieldDescription(field.key, language);
  const placeholder = getFieldPlaceholder(field.key, language);
  const unit = getFieldUnit(field.key, language);

  return (
    <div className="flex flex-col gap-1.5 opacity-0 animate-fade-in">
      {/* Label row */}
      <div className="flex items-center gap-1.5">
        <Label htmlFor={fieldId} className="text-foreground">
          {label}
          {unit && (
            <span className="ml-1 text-xs text-muted-foreground font-normal">
              ({unit})
            </span>
          )}
        </Label>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              aria-label={`Info about ${label}`}
              className="rounded-full text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Info className="h-3.5 w-3.5" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" className="text-xs">
            <p className="font-medium mb-1">{label}</p>
            <p className="text-muted-foreground">{description}</p>
            {field.type === "number" && field.min !== undefined && (
              <p className="mt-1 text-muted-foreground">
                Range: {field.min}–{field.max} {unit}
              </p>
            )}
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Input */}
      {field.type === "select" && field.options ? (
        <Select
          value={value}
          onValueChange={(val) => onChange(field.key, val)}
          disabled={disabled}
        >
          <SelectTrigger
            id={fieldId}
            error={!!error}
            aria-describedby={error ? errorId : undefined}
          >
            <SelectValue placeholder="Select an option…" />
          </SelectTrigger>
          <SelectContent>
            {field.options.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                <span className="flex flex-col">
                  <span>
                    {getFieldOptionLabel(field.key, opt.value, language)}
                  </span>
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <div className="relative">
          <Input
            id={fieldId}
            type="number"
            value={value}
            onChange={(e) => onChange(field.key, e.target.value)}
            placeholder={placeholder || field.placeholder}
            min={field.min}
            max={field.max}
            step={1}
            disabled={disabled}
            error={!!error}
            aria-describedby={
              cn(error ? errorId : "", `hint-${field.key}`).trim() || undefined
            }
            className={cn(unit && "pr-12")}
          />
          {unit && (
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
              {unit}
            </span>
          )}
        </div>
      )}

      {/* Range hint for number fields */}
      {field.type === "number" && !error && (
        <p id={`hint-${field.key}`} className="text-xs text-muted-foreground">
          Range: {field.min?.toLocaleString()} – {field.max?.toLocaleString()}{" "}
          {unit}
        </p>
      )}

      {/* Field description */}
      <p className="text-xs text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Error message */}
      {error && (
        <p
          id={errorId}
          role="alert"
          className="flex items-center gap-1 text-xs font-medium text-destructive animate-slide-in"
        >
          <span aria-hidden="true">⚠</span>
          {error}
        </p>
      )}
    </div>
  );
}
