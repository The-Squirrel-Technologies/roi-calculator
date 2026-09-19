import React from "react";
import { CalculatorInputs, CalculatorResults, formatMoney, formatNumber, formatPayback, formatRoi } from "@/lib/calculations";
import { CurrencyConfig, IndustryPreset } from "@/lib/industryData";
import { CALENDLY_URL, MAIN_URL, MCKINSEY_URL, RECEPTIONIST_URL, SITE_URL } from "@/lib/site";

interface Props {
  results: CalculatorResults;
  inputs: CalculatorInputs;
  currency: CurrencyConfig;
  industry: IndustryPreset;
}

const th: React.CSSProperties = { textAlign: "left", padding: "2px 6px", borderBottom: "1px solid #999", fontSize: "11px" };
const td: React.CSSProperties = { padding: "2px 6px", borderBottom: "1px solid #ddd", fontSize: "11px", verticalAlign: "top" };
const h2: React.CSSProperties = { fontSize: "13px", margin: "10px 0 3px", color: "#a74911" };

/** Print-only report: shows just the inputs, the working, the results and the next step. */
export default function PrintReport({ results: r, inputs: i, currency, industry }: Props) {
  const s = currency.symbol;
  const m = (v: number) => formatMoney(v, s);
  const date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  const rows: [string, string][] = [
    ["Industry preset", industry.name],
    ["Currency", currency.code],
    ["Inbound calls / month", formatNumber(i.monthlyCalls)],
    ["Average call length", `${formatNumber(i.callDuration, 1)} min`],
    ["Staff cost / hour", m(i.staffHourlyRate)],
    ["Unanswered calls", `${i.missedCallRate}%`],
    ["Value per booking", m(i.customerValue)],
    ["Answered calls AI resolves", `${i.automationRate}%`],
    ["Missed calls that become bookings", `${i.missedConversionRate}%`],
    ["Gross margin on bookings", `${i.grossMargin}%`],
    ["AI platform fee / month", m(i.aiMonthlyFee)],
    ["AI usage cost / minute", `${s}${i.aiCostPerMinute.toFixed(2)}`],
    ["One-time setup cost", m(i.setupCost)],
  ];

  const steps: [string, string, string][] = [
    ["Answered calls", `${formatNumber(i.monthlyCalls)} × (1 − ${i.missedCallRate}%)`, formatNumber(r.answeredCallsMonthly, 1)],
    ["Missed calls", `${formatNumber(i.monthlyCalls)} × ${i.missedCallRate}%`, formatNumber(r.missedCallsMonthly, 1)],
    ["Staff hours on calls", `${formatNumber(r.answeredCallsMonthly, 1)} × ${i.callDuration} min ÷ 60`, `${formatNumber(r.staffCallHoursMonthly, 1)} hrs`],
    ["Hours freed", `${formatNumber(r.staffCallHoursMonthly, 1)} × ${i.automationRate}%`, `${formatNumber(r.recoveredHoursMonthly, 1)} hrs`],
    ["Staff time value", `${formatNumber(r.recoveredHoursMonthly, 1)} hrs × ${m(i.staffHourlyRate)}`, m(r.laborValueMonthly)],
    ["Bookings rescued", `${formatNumber(r.missedCallsMonthly, 1)} × ${i.missedConversionRate}%`, formatNumber(r.bookingsRescuedMonthly, 1)],
    ["Revenue rescued", `${formatNumber(r.bookingsRescuedMonthly, 1)} × ${m(i.customerValue)}`, m(r.revenueRescuedMonthly)],
    ["Gross profit rescued", `${m(r.revenueRescuedMonthly)} × ${i.grossMargin}%`, m(r.profitRescuedMonthly)],
    ["Monthly benefit", "staff time value + gross profit rescued", m(r.totalBenefitMonthly)],
    ["AI-handled calls", "answered × resolve % + all missed calls", formatNumber(r.aiHandledCallsMonthly, 1)],
    ["Monthly AI cost", `${m(i.aiMonthlyFee)} + ${formatNumber(r.aiHandledCallsMonthly, 1)} calls × ${i.callDuration} min × ${s}${i.aiCostPerMinute.toFixed(2)}`, m(r.aiCostMonthly)],
    ["Monthly net", "benefit − AI cost", m(r.netMonthly)],
    ["Year-1 net", `monthly net × 12 − setup (${m(i.setupCost)})`, m(r.netYearOne)],
    ["Year-1 ROI", "year-1 net ÷ (AI cost × 12 + setup)", formatRoi(r.roiPercent)],
  ];

  return (
    <div className="print-report" style={{ fontFamily: "system-ui, sans-serif", color: "#111" }}>
      <div style={{ borderBottom: "2px solid #a74911", paddingBottom: "8px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div style={{ fontSize: "18px", fontWeight: 800 }}>AI Receptionist ROI Report</div>
          <div style={{ fontSize: "11px", color: "#555" }}>Prepared <span suppressHydrationWarning>{date}</span> · {industry.name} · {currency.code}</div>
        </div>
        <div style={{ fontSize: "11px", fontWeight: 700 }}>The Squirrel Technologies</div>
      </div>

      <div style={{ margin: "12px 0", padding: "10px 12px", border: "1px solid #a74911", borderRadius: "6px" }}>
        <div style={{ fontSize: "11px", color: "#555" }}>Estimated net benefit, year 1</div>
        <div style={{ fontSize: "24px", fontWeight: 800, color: r.netYearOne < 0 ? "#b91c1c" : "#a74911" }}>{m(r.netYearOne)}</div>
        <div style={{ fontSize: "11px" }}>
          {m(r.netMonthly)} / month · ROI {formatRoi(r.roiPercent)} · {r.paybackMonths === 0 ? "" : `payback ${formatPayback(r.paybackMonths)} · `} {formatNumber(r.recoveredHoursMonthly, 1)} staff hours freed / month
        </div>
      </div>

      <h2 style={h2}>Your inputs</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "16px" }}>
        {[rows.slice(0, 7), rows.slice(7)].map((half, n) => (
          <table key={n} style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {half.map(([k, v]) => (
                <tr key={k}><td style={td}>{k}</td><td style={{ ...td, fontWeight: 700 }}>{v}</td></tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>

      <h2 style={h2}>How it was calculated (per month)</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead><tr><th style={th}>Step</th><th style={th}>Working</th><th style={th}>Result</th></tr></thead>
        <tbody>
          {steps.map(([a, b, c]) => (
            <tr key={a}><td style={td}>{a}</td><td style={{ ...td, color: "#444" }}>{b}</td><td style={{ ...td, fontWeight: 700 }}>{c}</td></tr>
          ))}
        </tbody>
      </table>

      <h2 style={h2}>Assumptions & sources</h2>
      <ul style={{ fontSize: "10px", paddingLeft: "16px", lineHeight: 1.4 }}>
        <li>Missed calls use no staff time, so the AI resolve rate applies only to answered calls.</li>
        <li>Staff time freed is capacity; it is a cash saving only if hours or overtime are actually reduced.</li>
        <li>Rescued bookings are valued at gross profit, not revenue. AI cost and margin defaults are planning assumptions, not a quote.</li>
        <li>Context: McKinsey estimates generative AI could raise customer-operations productivity by 30–45% of current function costs ({MCKINSEY_URL}). This is not a per-call resolution rate.</li>
        <li>Planning estimate only; actual results depend on call mix, integrations and staffing.</li>
      </ul>

      <h2 style={h2}>Next steps</h2>
      <div style={{ fontSize: "11px", lineHeight: 1.5 }}>
        The Squirrel Technologies builds and launches production AI receptionists in about 15 days.<br />
        AI receptionist for {industry.name.toLowerCase()}: {MAIN_URL}/applications/{industry.applicationSlug}<br />
        AI receptionist overview: {RECEPTIONIST_URL}<br />
        Book a free discovery call: {CALENDLY_URL}<br />
        Re-run this calculator: {SITE_URL}
      </div>
    </div>
  );
}
