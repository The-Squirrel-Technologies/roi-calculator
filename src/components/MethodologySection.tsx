import React from "react";
import { MCKINSEY_URL } from "@/lib/site";

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
        <div style={{ marginTop: "1.5rem", padding: "1rem 1.25rem", borderLeft: "3px solid var(--color-brand)", background: "var(--color-brand-light)", fontSize: "0.85rem", color: "var(--color-slate)" }}>
          <strong>Benchmark context (McKinsey).</strong> In{" "}
          <a href={MCKINSEY_URL} target="_blank" rel="noopener" style={{ color: "var(--color-brand)", textDecoration: "underline" }}>The economic potential of generative AI</a>
          , McKinsey writes that applying generative AI to customer care “could increase productivity at a value ranging from 30 to 45 percent of current function costs”, and that it “could further reduce the volume of human-serviced contacts by up to 50 percent, depending on a company’s existing level of automation.”
          <br />
          We use the second figure as the ceiling for the AI resolve slider (10–50%). The first is a cost-productivity estimate for the whole function, not an input. Industry presets are planning defaults, not benchmarks.
        </div>
      </div>
    </section>
  );
}
