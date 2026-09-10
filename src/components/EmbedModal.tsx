"use client";

import React, { useState } from "react";
import { X, Copy, Check, Code2, Globe } from "lucide-react";

interface EmbedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmbedModal({ isOpen, onClose }: EmbedModalProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  if (!isOpen) return null;

  const iframeCode = `<iframe 
  src="https://thesquirrel.tech/embed/" 
  width="100%" 
  height="750" 
  style="border:none; border-radius:16px; box-shadow:0 10px 30px rgba(0,0,0,0.08);" 
  title="AI Receptionist ROI Calculator by The Squirrel Technologies"
  loading="lazy">
</iframe>
<p style="font-size:12px; color:#64748b; text-align:center; margin-top:8px;">
  Powered by <a href="https://thesquirrel.tech/solutions/ai-receptionist" target="_blank" rel="noopener noreferrer" style="color:#a74911; font-weight:600;">The Squirrel Technologies AI Receptionist</a>
</p>`;

  const scriptCode = `<div id="squirrel-ai-calculator"></div>
<script 
  src="https://thesquirrel.tech/embed/widget.js" 
  async 
  data-target="#squirrel-ai-calculator">
</script>`;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 100,
      backgroundColor: "rgba(26, 31, 44, 0.65)",
      backdropFilter: "blur(6px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem"
    }}>
      <div style={{
        backgroundColor: "#ffffff",
        borderRadius: "var(--radius-xl)",
        maxWidth: "680px",
        width: "100%",
        maxHeight: "90vh",
        overflowY: "auto",
        boxShadow: "var(--shadow-xl)",
        border: "1px solid var(--color-border)",
        padding: "2rem"
      }}>
        
        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid var(--color-border)",
          paddingBottom: "1.25rem",
          marginBottom: "1.5rem"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{
              background: "var(--color-brand-light)",
              color: "var(--color-brand)",
              padding: "0.5rem",
              borderRadius: "var(--radius-sm)"
            }}>
              <Code2 size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-dark)" }}>
                Embed This Free Calculator
              </h3>
              <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)" }}>
                Free open-source widget for blogs, agencies, and client sites
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "var(--color-muted)",
              cursor: "pointer",
              padding: "0.5rem"
            }}
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Benefits banner */}
        <div style={{
          backgroundColor: "var(--color-bg-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-md)",
          padding: "1rem",
          marginBottom: "1.5rem",
          fontSize: "0.875rem",
          color: "var(--color-slate)",
          display: "flex",
          gap: "0.75rem",
          alignItems: "center"
        }}>
          <Globe size={24} color="var(--color-brand)" style={{ flexShrink: 0 }} />
          <span>
            You are free to embed this calculator anywhere! It includes all 8 industry presets, currency conversions, and real-time financial models.
          </span>
        </div>

        {/* Iframe Option */}
        <div style={{ marginBottom: "1.75rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
            <label style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-dark)" }}>
              Option 1: Responsive Iframe Embed (Recommended)
            </label>
            <button
              onClick={() => copyToClipboard(iframeCode, "iframe")}
              className="btn-secondary"
              style={{ fontSize: "0.78rem", padding: "0.35rem 0.75rem" }}
            >
              {copiedType === "iframe" ? <Check size={14} color="var(--color-success)" /> : <Copy size={14} />}
              <span>{copiedType === "iframe" ? "Copied!" : "Copy Code"}</span>
            </button>
          </div>
          <textarea
            readOnly
            value={iframeCode}
            rows={6}
            style={{
              width: "100%",
              padding: "0.85rem",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-border)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              backgroundColor: "#f8fafc",
              color: "var(--color-slate)",
              resize: "none",
              outline: "none"
            }}
          />
        </div>

        {/* Script Option */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
            <label style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-dark)" }}>
              Option 2: Script Container Snippet
            </label>
            <button
              onClick={() => copyToClipboard(scriptCode, "script")}
              className="btn-secondary"
              style={{ fontSize: "0.78rem", padding: "0.35rem 0.75rem" }}
            >
              {copiedType === "script" ? <Check size={14} color="var(--color-success)" /> : <Copy size={14} />}
              <span>{copiedType === "script" ? "Copied!" : "Copy Code"}</span>
            </button>
          </div>
          <textarea
            readOnly
            value={scriptCode}
            rows={3}
            style={{
              width: "100%",
              padding: "0.85rem",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-border)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              backgroundColor: "#f8fafc",
              color: "var(--color-slate)",
              resize: "none",
              outline: "none"
            }}
          />
        </div>

        {/* Modal Footer */}
        <div style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "0.75rem",
          borderTop: "1px solid var(--color-border)",
          paddingTop: "1.25rem"
        }}>
          <button onClick={onClose} className="btn-secondary">
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
