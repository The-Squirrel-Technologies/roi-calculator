import React from "react";
import { MCKINSEY_URL, NBER_URL } from "@/lib/site";

const formulas: [string, string][] = [
  ["Staff time freed", "calls × (1 − unanswered %) × call length ÷ 60 × AI resolve %  →  hours × staff cost per hour"],
  ["Missed-call profit", "calls × unanswered % × booking % × value per booking × gross margin %"],
  ["AI cost", "monthly fee + (resolved answered calls + all missed calls) × call length × cost per minute"],
  ["Net benefit and ROI", "(staff time value + missed-call profit − AI cost) × 12 − setup cost;  ROI = net ÷ (AI cost × 12 + setup)"],
];

export default function MethodologySection() {
  return (
    <section className="screen-only" style={{ padding: "3.5rem 0", background: "#fff" }}>
      <div className="container" style={{ maxWidth: "900px" }}>
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, marginBottom: "0.5rem" }}>How the estimate works</h2>
        <p style={{ color: "var(--color-slate)", marginBottom: "1.5rem" }}>
          Every figure is derived from your inputs with the formulas below. Missed calls use no staff time, so they are never counted as hours saved, and a negative result is shown as negative.
        </p>
        <dl style={{ display: "grid", gap: "0.75rem" }}>
          {formulas.map(([t, f]) => (
            <div key={t} style={{ padding: "0.9rem 1.1rem", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", background: "var(--color-bg-surface)" }}>
              <dt style={{ fontWeight: 800, color: "var(--color-dark)", fontSize: "0.9rem" }}>{t}</dt>
              <dd style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "var(--color-slate)", marginTop: "0.25rem" }}>{f}</dd>
            </div>
          ))}
        </dl>
        <p style={{ fontSize: "0.85rem", color: "var(--color-muted)", marginTop: "1.25rem" }}>
          Context, not inputs: McKinsey estimates generative AI could raise customer-operations productivity by 30–45% of current function costs (
          <a href={MCKINSEY_URL} target="_blank" rel="noopener" style={{ color: "var(--color-brand)", textDecoration: "underline" }}>The economic potential of generative AI</a>
          ), and a Stanford/MIT study found AI assistance raised support agents’ issues resolved per hour by 14% (
          <a href={NBER_URL} target="_blank" rel="noopener" style={{ color: "var(--color-brand)", textDecoration: "underline" }}>Brynjolfsson, Li &amp; Raymond, NBER</a>
          ). Neither is a per-call resolution rate, so set the AI resolve slider from your own call mix. Industry presets are planning defaults, not benchmarks.
        </p>
      </div>
    </section>
  );
}
