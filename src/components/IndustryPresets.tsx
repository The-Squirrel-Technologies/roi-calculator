"use client";

import React from "react";
import { INDUSTRY_PRESETS, IndustryPreset } from "@/lib/industryData";
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
}

export default function IndustryPresets({ selectedId, onSelect }: IndustryPresetsProps) {
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
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "0.85rem",
        flexWrap: "wrap",
        gap: "0.5rem"
      }}>
        <div>
          <span style={{
            fontSize: "0.75rem",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "var(--color-brand)"
          }}>
            Step 01 · Choose Industry Benchmark
          </span>
          <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--color-dark)" }}>
            Pre-loaded Industry Presets
          </h3>
        </div>
        <span style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>
          Or adjust sliders manually below
        </span>
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
