"use client";

import React, { useEffect, useState } from "react";
import { X, Copy, Check, Code2 } from "lucide-react";
import { RECEPTIONIST_URL, SITE_URL } from "@/lib/site";

interface EmbedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Both snippets keep a plain, crawlable attribution link in the host page's own HTML.
const attribution = `<p style="font-size:12px;color:#64748b;text-align:center;margin-top:8px">Free <a href="${SITE_URL}/">AI receptionist ROI calculator</a> by <a href="${RECEPTIONIST_URL}">The Squirrel Technologies</a></p>`;

const iframeCode = `<iframe src="${SITE_URL}/embed/" width="100%" height="1100" style="border:0;border-radius:16px" title="AI Receptionist ROI Calculator by The Squirrel Technologies" loading="lazy"></iframe>
${attribution}`;

const scriptCode = `<div data-squirrel-roi>${attribution}</div>
<script src="${SITE_URL}/widget.js" async></script>`;

export default function EmbedModal({ isOpen, onClose }: EmbedModalProps) {
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2500);
    } catch {
      window.prompt("Copy the embed code:", text);
    }
  };

  const block = (id: string, title: string, note: string, code: string, rows: number) => (
    <div style={{ marginBottom: "1.5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem", gap: "0.5rem" }}>
        <div>
          <div style={{ fontSize: "0.9rem", fontWeight: 700 }}>{title}</div>
          <div style={{ fontSize: "0.75rem", color: "var(--color-muted)" }}>{note}</div>
        </div>
        <button type="button" onClick={() => copy(code, id)} className="btn-secondary" style={{ fontSize: "0.78rem", padding: "0.35rem 0.75rem" }}>
          {copied === id ? <Check size={14} color="var(--color-success)" /> : <Copy size={14} />}
          <span>{copied === id ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <textarea readOnly value={code} rows={rows} aria-label={title} onFocus={(e) => e.currentTarget.select()}
        style={{ width: "100%", padding: "0.75rem", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", fontFamily: "monospace", fontSize: "0.75rem", background: "#f8fafc", color: "var(--color-slate)", resize: "none" }} />
    </div>
  );

  return (
    <div role="dialog" aria-modal="true" aria-label="Embed this calculator" onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(26,31,44,0.65)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: "var(--radius-xl)", maxWidth: "680px", width: "100%", maxHeight: "90vh", overflowY: "auto", padding: "1.75rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 800, display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Code2 size={20} color="var(--color-brand)" /> Embed this calculator
          </h2>
          <button type="button" onClick={onClose} aria-label="Close" style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-muted)" }}>
            <X size={22} />
          </button>
        </div>
        {block("script", "Option 1: auto-resizing embed (recommended)", "Loads the calculator and resizes to fit. Keep the attribution link.", scriptCode, 4)}
        {block("iframe", "Option 2: plain iframe", "Works anywhere that allows iframes. Adjust the height if needed.", iframeCode, 6)}
        <p style={{ fontSize: "0.75rem", color: "var(--color-muted)" }}>Free under the MIT license. Please keep the attribution link.</p>
      </div>
    </div>
  );
}
