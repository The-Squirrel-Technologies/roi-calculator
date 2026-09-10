"use client";

import React, { useState } from "react";
import { CalculatorResults, formatCurrency } from "@/lib/calculations";
import { 
  TrendingUp, 
  Clock, 
  PhoneIncoming, 
  CalendarCheck, 
  ArrowRight, 
  Printer, 
  Copy, 
  Check,
  MessageCircle,
  ShieldCheck,
  Zap
} from "lucide-react";
import confetti from "canvas-confetti";

interface ResultsDisplayProps {
  results: CalculatorResults;
  currencySymbol: string;
  industryName: string;
  automationRate: number;
}

export default function ResultsDisplay({
  results,
  currencySymbol,
  industryName,
  automationRate
}: ResultsDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCelebrate = () => {
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#a74911", "#ff8b1a", "#05df72", "#1a1f2c"]
    });
  };

  const handleCopy = () => {
    const text = `The Squirrel AI Receptionist ROI Estimate (${industryName}):
- Monthly Value: ${formatCurrency(results.totalMonthlyBenefit, currencySymbol)}
- Annual Value: ${formatCurrency(results.totalAnnualBenefit, currencySymbol)}
- Staff Hours Recovered: ${results.recoveredHoursMonthly} hrs/mo (${results.recoveredHoursAnnual} hrs/yr)
- Missed Calls Rescued: ~${results.missedCallsMonthly} calls/mo (${formatCurrency(results.missedRevenueMonthly, currencySymbol)} revenue)
- Net Annual ROI: ${results.roiPercentage}% (${results.roiMultiple}x return)
- Estimated Payback Period: ${results.paybackDays} days
Calculated via The Squirrel Technologies (https://thesquirrel.tech/solutions/ai-receptionist)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div style={{
      backgroundColor: "#ffffff",
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--color-border)",
      padding: "2rem",
      boxShadow: "var(--shadow-xl)",
      position: "sticky",
      top: "100px"
    }} className="results-card">
      
      {/* Header Banner */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid var(--color-border)",
        paddingBottom: "1.25rem",
        marginBottom: "1.5rem",
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
            Planning Estimate
          </span>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--color-dark)" }}>
            Your Projected ROI
          </h3>
        </div>
        <button
          onClick={handleCelebrate}
          className="badge-pill badge-brand"
          style={{ cursor: "pointer", border: "1px solid var(--color-brand-border)" }}
          title="Click to celebrate high ROI"
        >
          <Zap size={13} />
          <span>{results.roiMultiple}x Value Multiple</span>
        </button>
      </div>

      {/* Main Big Metric: Annual Net Financial Value */}
      <div style={{
        backgroundColor: "var(--color-bg-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        padding: "1.5rem",
        textAlign: "center",
        marginBottom: "1.5rem"
      }}>
        <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
          Estimated Net Annual Financial Benefit
        </div>
        <div style={{
          fontSize: "clamp(2.4rem, 4vw, 3.25rem)",
          fontWeight: 900,
          color: "var(--color-brand)",
          lineHeight: 1.1,
          margin: "0.5rem 0",
          fontFamily: "var(--font-accent)"
        }}>
          {formatCurrency(results.netAnnualBenefit, currencySymbol)}
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.25rem",
          fontSize: "0.875rem",
          color: "var(--color-slate)",
          fontWeight: 600,
          flexWrap: "wrap"
        }}>
          <span>Monthly: <strong style={{ color: "var(--color-dark)" }}>{formatCurrency(results.totalMonthlyBenefit, currencySymbol)}</strong></span>
          <span>•</span>
          <span>Payback: <strong style={{ color: "var(--color-success)" }}>~{results.paybackDays} Days</strong></span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
        marginBottom: "1.5rem"
      }}>
        {/* Metric 1: Hours Recovered */}
        <div style={{
          padding: "1rem",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border)",
          backgroundColor: "#ffffff"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--color-brand)", marginBottom: "0.35rem" }}>
            <Clock size={16} />
            <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>Time Recovered</span>
          </div>
          <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-dark)" }}>
            {results.recoveredHoursMonthly} <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-muted)" }}>hrs/mo</span>
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--color-muted)", marginTop: "0.2rem" }}>
            {results.recoveredHoursAnnual} hours / year saved
          </div>
        </div>

        {/* Metric 2: Labor Cost Savings */}
        <div style={{
          padding: "1rem",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border)",
          backgroundColor: "#ffffff"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--color-slate)", marginBottom: "0.35rem" }}>
            <TrendingUp size={16} />
            <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>Labor Saved</span>
          </div>
          <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-dark)" }}>
            {formatCurrency(results.laborSavingsMonthly, currencySymbol)}
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--color-muted)", marginTop: "0.2rem" }}>
            {formatCurrency(results.laborSavingsAnnual, currencySymbol)} / year
          </div>
        </div>

        {/* Metric 3: Missed Call Rescue */}
        <div style={{
          padding: "1rem",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border)",
          backgroundColor: "#ffffff"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--color-success)", marginBottom: "0.35rem" }}>
            <PhoneIncoming size={16} />
            <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>Calls Rescued</span>
          </div>
          <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-dark)" }}>
            ~{results.missedCallsMonthly} <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-muted)" }}>calls/mo</span>
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--color-muted)", marginTop: "0.2rem" }}>
            Zero missed after-hours leads
          </div>
        </div>

        {/* Metric 4: Revenue Rescued */}
        <div style={{
          padding: "1rem",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border)",
          backgroundColor: "#ffffff"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--color-brand)", marginBottom: "0.35rem" }}>
            <CalendarCheck size={16} />
            <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>Revenue Rescued</span>
          </div>
          <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-dark)" }}>
            {formatCurrency(results.missedRevenueMonthly, currencySymbol)}
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--color-muted)", marginTop: "0.2rem" }}>
            {formatCurrency(results.missedRevenueAnnual, currencySymbol)} / year
          </div>
        </div>
      </div>

      {/* Visual Breakdown Bar */}
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontWeight: 700, marginBottom: "0.4rem" }}>
          <span style={{ color: "var(--color-slate)" }}>Value Distribution</span>
          <span style={{ color: "var(--color-muted)" }}>
            Labor ({Math.round((results.laborSavingsMonthly / Math.max(1, results.totalMonthlyBenefit)) * 100)}%) vs Revenue ({Math.round((results.missedRevenueMonthly / Math.max(1, results.totalMonthlyBenefit)) * 100)}%)
          </span>
        </div>
        <div style={{
          height: "8px",
          width: "100%",
          backgroundColor: "#e2e8f0",
          borderRadius: "999px",
          overflow: "hidden",
          display: "flex"
        }}>
          <div style={{
            width: `${Math.min(100, Math.max(5, (results.laborSavingsMonthly / Math.max(1, results.totalMonthlyBenefit)) * 100))}%`,
            backgroundColor: "var(--color-dark)",
            height: "100%"
          }} />
          <div style={{
            flex: 1,
            backgroundColor: "var(--color-brand)",
            height: "100%"
          }} />
        </div>
      </div>

      {/* Formula & McKinsey Benchmark Note matching original site */}
      <div style={{
        backgroundColor: "var(--color-brand-light)",
        border: "1px solid var(--color-brand-border)",
        borderRadius: "var(--radius-md)",
        padding: "1rem",
        marginBottom: "1.5rem",
        fontSize: "0.8125rem",
        color: "var(--color-slate)",
        lineHeight: 1.5
      }}>
        <div style={{ fontWeight: 800, color: "var(--color-brand)", marginBottom: "0.25rem", display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <ShieldCheck size={14} />
          <span>Formula & Methodology</span>
        </div>
        <p style={{ marginBottom: "0.5rem" }}>
          <strong>{results.totalCallHoursMonthly} monthly hours</strong> × <strong>{automationRate}% containment</strong> = <strong>{results.recoveredHoursMonthly} recovered hours</strong>. Recovered hours × staff cost + rescued missed-call bookings = estimated value.
        </p>
        <p style={{ fontSize: "0.75rem", color: "var(--color-muted)" }}>
          McKinsey estimates 30–45% productivity value in customer care.{" "}
          <a
            href="https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-brand)", textDecoration: "underline", fontWeight: 600 }}
          >
            Read the Benchmark source ↗
          </a>
        </p>
      </div>

      {/* Call to Actions */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <a
          href="https://calendly.com/ganeshghatti/discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ width: "100%", padding: "0.85rem", fontSize: "0.95rem" }}
        >
          <span>Book Free Discovery Call with Ganesh</span>
          <ArrowRight size={16} />
        </a>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
          <a
            href="https://wa.me/919449610077"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ fontSize: "0.8125rem", padding: "0.6rem" }}
          >
            <MessageCircle size={15} color="#25D366" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => window.print()}
            className="btn-secondary"
            style={{ fontSize: "0.8125rem", padding: "0.6rem" }}
          >
            <Printer size={15} />
            <span>Print Report</span>
          </button>
        </div>

        <button
          onClick={handleCopy}
          style={{
            background: "none",
            border: "none",
            color: copied ? "var(--color-success)" : "var(--color-muted)",
            fontSize: "0.75rem",
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.35rem",
            padding: "0.25rem"
          }}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          <span>{copied ? "Estimate summary copied to clipboard!" : "Copy estimate summary to clipboard"}</span>
        </button>
      </div>

    </div>
  );
}
