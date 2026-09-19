"use client";

import React, { useId, useState } from "react";

interface FieldProps {
  label: string;
  icon?: React.ReactNode;
  value: number;
  onChange: (v: number) => void;
  /** Hard limits enforced on typed values. */
  min: number;
  max: number;
  /** Range shown on the slider (may be narrower than the hard limits). */
  sliderMin: number;
  sliderMax: number;
  step: number;
  prefix?: string;
  unit?: string;
  hints?: [string, string, string];
  /** Optional slider-less compact mode for secondary assumptions. */
  compact?: boolean;
  highlight?: boolean;
}

export default function Field({
  label, icon, value, onChange, min, max, sliderMin, sliderMax, step, prefix, unit, hints, compact, highlight,
}: FieldProps) {
  const id = useId();
  const [draft, setDraft] = useState<string | null>(null);

  const commit = (raw: string) => {
    setDraft(raw);
    if (raw.trim() === "") return; // allow clearing while typing
    const n = Number(raw);
    if (Number.isFinite(n)) onChange(Math.min(max, Math.max(min, n)));
  };

  return (
    <div style={highlight ? { background: "var(--color-bg-surface)", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)" } : undefined}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.75rem", marginBottom: compact ? 0 : "0.5rem", flexWrap: "wrap" }}>
        <label htmlFor={id} className="field-label">
          {icon}
          {label}
        </label>
        <div className="field-box">
          {prefix && <span style={{ fontSize: "0.85rem", color: "var(--color-brand)", fontWeight: 700 }}>{prefix}</span>}
          <input
            id={id}
            type="number"
            inputMode="decimal"
            min={min}
            max={max}
            step={step}
            value={draft ?? String(Number.isInteger(value) ? value : Number(value.toFixed(2)))}
            onChange={(e) => commit(e.target.value)}
            onBlur={() => setDraft(null)}
          />
          {unit && <span className="field-unit">{unit}</span>}
        </div>
      </div>
      {!compact && (
        <>
          <input
            type="range"
            aria-label={label}
            min={sliderMin}
            max={sliderMax}
            step={step}
            value={Math.min(sliderMax, Math.max(sliderMin, value))}
            onChange={(e) => {
              setDraft(null);
              onChange(Number(e.target.value));
            }}
          />
          {hints && (
            <div className="field-hints">
              <span>{hints[0]}</span>
              <span>{hints[1]}</span>
              <span>{hints[2]}</span>
            </div>
          )}
        </>
      )}
    </div>
  );
}
