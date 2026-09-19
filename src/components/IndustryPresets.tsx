"use client";

import React from "react";
import { INDUSTRY_PRESETS, CURRENCIES, IndustryPreset, CurrencyConfig } from "@/lib/industryData";
import { 
  Sparkles, 
  Stethoscope, 
  HeartPulse, 
  Flame, 
  Scale, 
  Building2, 
  Dog, 
  Utensils 
} from "lucide-react";

interface IndustryPresetsProps {
  selectedId: string;
  onSelect: (preset: IndustryPreset) => void;
  currency: CurrencyConfig;
  onCurrency: (c: CurrencyConfig) => void;
}

export default function IndustryPresets({ selectedId, onSelect, currency, onCurrency }: IndustryPresetsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles": return <Sparkles size={16} />;
      case "Stethoscope": return <Stethoscope size={16} />;
      case "HeartPulse": return <HeartPulse size={16} />;
      case "Flame": return <Flame size={16} />;
      case "Scale": return <Scale size={16} />;
      case "Building2": return <Building2 size={16} />;
      case "Dog": return <Dog size={16} />;
      case "Utensils": return <Utensils size={16} />;
      default: return <Sparkles size={16} />;
    }
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.85rem", flexWrap: "wrap", gap: "0.75rem" }}>
        <h2 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--color-dark)" }}>Pick your industry to start</h2>
        <div role="group" aria-label="Currency" style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
          {CURRENCIES.map((c) => {
            const on = c.code === currency.code;
            return (
              <button
                key={c.code}
                type="button"
                aria-pressed={on}
                onClick={() => onCurrency(c)}
                style={{
                  padding: "0.3rem 0.7rem", borderRadius: "var(--radius-full)", fontSize: "0.75rem", fontWeight: on ? 700 : 500, cursor: "pointer",
                  background: on ? "var(--color-brand)" : "#fff", color: on ? "#fff" : "var(--color-slate)",
                  border: on ? "1px solid var(--color-brand)" : "1px solid var(--color-border)",
                }}
              >
                {c.code}
              </button>
            );
          })}
        </div>
      </div>

      {/* Preset Pills */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(135px, 1fr))",
        gap: "0.6rem"
      }}>
        {INDUSTRY_PRESETS.map((preset) => {
          const isSelected = preset.id === selectedId;
          return (
            <button
              key={preset.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelect(preset)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.65rem 0.85rem",
                borderRadius: "var(--radius-md)",
                border: isSelected 
                  ? "2px solid var(--color-brand)" 
                  : "1px solid var(--color-border)",
                backgroundColor: isSelected 
                  ? "var(--color-brand-light)" 
                  : "#ffffff",
                color: isSelected 
                  ? "var(--color-brand)" 
                  : "var(--color-slate)",
                fontWeight: isSelected ? 700 : 500,
                fontSize: "0.8125rem",
                cursor: "pointer",
                transition: "all 0.15s ease",
                textAlign: "left",
                boxShadow: isSelected ? "var(--shadow-sm)" : "none"
              }}
            >
              <span style={{ color: isSelected ? "var(--color-brand)" : "var(--color-muted)" }}>
                {getIcon(preset.icon)}
              </span>
              <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {preset.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
