"use client";

import React, { useState } from "react";
import { CalculatorResults, formatMoney, formatNumber, formatPayback, formatRoi } from "@/lib/calculations";
import { CurrencyConfig, IndustryPreset } from "@/lib/industryData";
import { CALENDLY_URL, RECEPTIONIST_URL, SITE_URL } from "@/lib/site";
import { ArrowRight, Printer, Copy, Check, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

interface Props {
  results: CalculatorResults;
  currency: CurrencyConfig;
  industry: IndustryPreset;
}

export default function ResultsDisplay({ results: r, currency, industry }: Props) {
  const [copied, setCopied] = useState(false);
  const s = currency.symbol;
  const negative = r.netYearOne < 0;

  const summary = `AI Receptionist ROI estimate (${industry.name}, ${currency.code})
- Staff time freed: ${formatNumber(r.recoveredHoursMonthly, 1)} hrs/month (${formatMoney(r.laborValueMonthly, s)}/month)
- Missed calls turned into bookings: ${formatNumber(r.bookingsRescuedMonthly, 1)}/month (${formatMoney(r.revenueRescuedMonthly, s)} revenue, ${formatMoney(r.profitRescuedMonthly, s)} gross profit)
- AI cost: ${formatMoney(r.aiCostMonthly, s)}/month
- Net benefit: ${formatMoney(r.netMonthly, s)}/month, ${formatMoney(r.netYearOne, s)} in year 1
- Year-1 ROI: ${formatRoi(r.roiPercent)}
Planning estimate. Calculated at ${SITE_URL}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copy your estimate:", summary);
    }
  };

  const tile = (label: string, value: string, sub: string, color = "var(--color-dark)") => (
    <div style={{ padding: "0.9rem", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)" }}>
      <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", color: "var(--color-muted)" }}>{label}</div>
      <div style={{ fontSize: "1.3rem", fontWeight: 800, color, margin: "0.15rem 0" }}>{value}</div>
      <div style={{ fontSize: "0.75rem", color: "var(--color-muted)" }}>{sub}</div>
    </div>
  );

  return (
    <aside aria-live="polite" style={{ background: "#fff", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border)", padding: "1.75rem", boxShadow: "var(--shadow-xl)", position: "sticky", top: "90px" }}>
      <div style={{ background: "var(--color-bg-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: "1.25rem", textAlign: "center", marginBottom: "1.25rem" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-muted)", textTransform: "uppercase" }}>Estimated net benefit, year 1</div>
        <div style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.1, margin: "0.4rem 0", color: negative ? "#b91c1c" : "var(--color-brand)" }}>
          {formatMoney(r.netYearOne, s)}
        </div>
        <div style={{ fontSize: "0.85rem", color: "var(--color-slate)", fontWeight: 600 }}>
          {formatMoney(r.netMonthly, s)}/month · ROI {formatRoi(r.roiPercent)}
        </div>
        {negative && (
          <div style={{ fontSize: "0.75rem", color: "#b91c1c", marginTop: "0.5rem" }}>
            At these inputs the AI costs more than it returns. Check your missed-call rate and booking value.
          </div>
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.25rem" }}>
        {tile("Staff time freed", `${formatNumber(r.recoveredHoursMonthly, 1)} hrs`, `${formatMoney(r.laborValueMonthly, s)}/mo of capacity`)}
        {tile("Bookings rescued", `${formatNumber(r.bookingsRescuedMonthly, 1)}/mo`, `${formatMoney(r.revenueRescuedMonthly, s)} revenue`)}
        {tile("Gross profit rescued", formatMoney(r.profitRescuedMonthly, s), "per month")}
        {tile("AI cost", formatMoney(r.aiCostMonthly, s), r.paybackMonths === 0 ? "per month" : `per month · payback ${formatPayback(r.paybackMonths)}`)}
      </div>

      <p style={{ fontSize: "0.75rem", color: "var(--color-muted)", marginBottom: "1.25rem" }}>
        Staff time is freed capacity; it becomes cash savings only if you reduce hours or overtime. Planning estimate, not a guarantee.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        <a href={CALENDLY_URL} target="_blank" rel="noopener" className="btn-primary" style={{ width: "100%" }}>
          <span>Book a free discovery call</span>
          <ArrowRight size={16} />
        </a>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
          <button type="button" onClick={() => window.print()} className="btn-secondary" style={{ fontSize: "0.8125rem", padding: "0.6rem" }}>
            <Printer size={15} />
            <span>Save PDF report</span>
          </button>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-secondary" style={{ fontSize: "0.8125rem", padding: "0.6rem" }}>
            <MessageCircle size={15} color="#25D366" />
            <span>WhatsApp</span>
          </a>
        </div>
        <button type="button" onClick={copy} style={{ background: "none", border: "none", color: copied ? "var(--color-success)" : "var(--color-muted)", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", gap: "0.35rem", padding: "0.25rem" }}>
          {copied ? <Check size={14} /> : <Copy size={14} />}
          <span>{copied ? "Copied" : "Copy summary"}</span>
        </button>
        <a href={RECEPTIONIST_URL} target="_blank" rel="noopener" style={{ textAlign: "center", fontSize: "0.8rem", fontWeight: 700, color: "var(--color-brand)" }}>
          Learn about The Squirrel AI receptionist →
        </a>
      </div>
    </aside>
  );
}
