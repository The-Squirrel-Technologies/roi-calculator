"use client";

import React, { useMemo, useState } from "react";
import { INDUSTRY_PRESETS, CURRENCIES, IndustryPreset, CurrencyConfig } from "@/lib/industryData";
import { calculateROI, CalculatorInputs, LIMITS } from "@/lib/calculations";
import { MAIN_URL } from "@/lib/site";
import IndustryPresets from "./IndustryPresets";
import ResultsDisplay from "./ResultsDisplay";
import PrintReport from "./PrintReport";
import Field from "./Field";
import { Phone, Clock, Users, AlertCircle, Calendar, Sliders, Target, ArrowUpRight } from "lucide-react";

// Default cost assumptions (USD). Replace with your actual quote.
export const DEFAULT_FEE_USD = 149;
export const DEFAULT_PER_MINUTE_USD = 0.1;
export const DEFAULT_MARGIN = 60;

export default function Calculator() {
  const [industry, setIndustry] = useState<IndustryPreset>(INDUSTRY_PRESETS[0]);
  const [currency, setCurrency] = useState<CurrencyConfig>(CURRENCIES[0]);
  const rate = currency.rateAgainstUSD;

  // Money is stored in USD and converted for display, so switching currency never drifts or rounds away your numbers.
  const [monthlyCalls, setMonthlyCalls] = useState(industry.monthlyCalls);
  const [callDuration, setCallDuration] = useState(industry.callDuration);
  const [wageUSD, setWageUSD] = useState(industry.staffHourlyRate);
  const [missedCallRate, setMissedCallRate] = useState(industry.missedCallRate);
  const [valueUSD, setValueUSD] = useState(industry.customerValue);
  const [automationRate, setAutomationRate] = useState(industry.automationRate);
  const [conversionRate, setConversionRate] = useState(industry.missedConversionRate);
  const [grossMargin, setGrossMargin] = useState(DEFAULT_MARGIN);
  const [feeUSD, setFeeUSD] = useState(DEFAULT_FEE_USD);
  const [perMinuteUSD, setPerMinuteUSD] = useState(DEFAULT_PER_MINUTE_USD);
  const [setupUSD, setSetupUSD] = useState(0);

  const selectIndustry = (p: IndustryPreset) => {
    setIndustry(p);
    setMonthlyCalls(p.monthlyCalls);
    setCallDuration(p.callDuration);
    setWageUSD(p.staffHourlyRate);
    setMissedCallRate(p.missedCallRate);
    setValueUSD(p.customerValue);
    setAutomationRate(p.automationRate);
    setConversionRate(p.missedConversionRate);
  };

  const inputs: CalculatorInputs = {
    monthlyCalls,
    callDuration,
    staffHourlyRate: wageUSD * rate,
    missedCallRate,
    customerValue: valueUSD * rate,
    automationRate,
    missedConversionRate: conversionRate,
    grossMargin,
    aiMonthlyFee: feeUSD * rate,
    aiCostPerMinute: perMinuteUSD * rate,
    setupCost: setupUSD * rate,
  };
  const results = useMemo(
    () => calculateROI(inputs),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [monthlyCalls, callDuration, wageUSD, missedCallRate, valueUSD, automationRate, conversionRate, grossMargin, feeUSD, perMinuteUSD, setupUSD, rate],
  );

  const sym = currency.symbol;
  const money = (usd: number) => Math.round(usd * rate);
  const sliderStep = (usdStep: number) => Math.max(1, Math.round(usdStep * rate));
  const moneyLimit = LIMITS.money.max;

  return (
    <>
      <div className="screen-only" style={{ padding: "2.5rem 0" }}>
        <div className="container">
          <IndustryPresets selectedId={industry.id} onSelect={selectIndustry} currency={currency} onCurrency={setCurrency} />

          <div className="calc-grid">
            <div style={{ background: "#fff", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border)", padding: "1.75rem", boxShadow: "var(--shadow-lg)" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1.5rem" }}>Your call workload</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <Field
                  label="Inbound calls per month"
                  icon={<Phone size={15} color="var(--color-brand)" />}
                  value={monthlyCalls}
                  onChange={setMonthlyCalls}
                  min={LIMITS.monthlyCalls.min}
                  max={LIMITS.monthlyCalls.max}
                  sliderMin={100}
                  sliderMax={5000}
                  step={50}
                  unit="calls"
                  hints={["100", "2,500", "5,000+"]}
                />
                <Field
                  label="Average call length"
                  icon={<Clock size={15} color="var(--color-brand)" />}
                  value={callDuration}
                  onChange={setCallDuration}
                  min={LIMITS.callDuration.min}
                  max={LIMITS.callDuration.max}
                  sliderMin={1}
                  sliderMax={12}
                  step={0.5}
                  unit="min"
                  hints={["1 min", "4.5 min", "12 min"]}
                />
                <Field
                  label="Staff cost per hour (wage + overhead)"
                  icon={<Users size={15} color="var(--color-brand)" />}
                  value={money(wageUSD)}
                  onChange={(v) => setWageUSD(v / rate)}
                  min={0}
                  max={moneyLimit}
                  sliderMin={money(10)}
                  sliderMax={money(100)}
                  step={sliderStep(1)}
                  prefix={sym}
                  unit="/hr"
                  hints={[`${sym}${money(10)}`, "", `${sym}${money(100)}`]}
                />
                <Field
                  label="Calls that go unanswered (missed + after-hours)"
                  icon={<AlertCircle size={15} color="var(--color-brand)" />}
                  value={missedCallRate}
                  onChange={setMissedCallRate}
                  min={0}
                  max={100}
                  sliderMin={0}
                  sliderMax={70}
                  step={1}
                  unit="%"
                  hints={["0%", "check your call logs", "70%"]}
                />
                <Field
                  label="Average value per booking"
                  icon={<Calendar size={15} color="var(--color-brand)" />}
                  value={money(valueUSD)}
                  onChange={(v) => setValueUSD(v / rate)}
                  min={0}
                  max={moneyLimit}
                  sliderMin={money(20)}
                  sliderMax={money(2500)}
                  step={sliderStep(25)}
                  prefix={sym}
                  hints={[`${sym}${money(20)}`, "", `${sym}${money(2500).toLocaleString("en-US")}+`]}
                />
                <Field
                  label="Answered calls the AI resolves on its own"
                  icon={<Sliders size={15} color="var(--color-brand)" />}
                  value={automationRate}
                  onChange={setAutomationRate}
                  min={0}
                  max={100}
                  sliderMin={10}
                  sliderMax={80}
                  step={1}
                  unit="%"
                  hints={["10% cautious", "your assumption", "80%"]}
                  highlight
                />
                <Field
                  label="Missed calls that become a booking"
                  icon={<Target size={15} color="var(--color-brand)" />}
                  value={conversionRate}
                  onChange={setConversionRate}
                  min={0}
                  max={100}
                  sliderMin={5}
                  sliderMax={80}
                  step={1}
                  unit="%"
                  hints={["5%", "", "80%"]}
                />
              </div>

              <details style={{ marginTop: "1.75rem", borderTop: "1px solid var(--color-border)", paddingTop: "1.25rem" }}>
                <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: "0.9rem", color: "var(--color-dark)" }}>
                  Cost & margin assumptions (edit to match your quote)
                </summary>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
                  <Field label="Gross margin on rescued bookings" value={grossMargin} onChange={setGrossMargin} min={0} max={100} sliderMin={0} sliderMax={100} step={1} unit="%" compact />
                  <Field label="AI platform fee per month" value={money(feeUSD)} onChange={(v) => setFeeUSD(v / rate)} min={0} max={moneyLimit} sliderMin={0} sliderMax={1} step={1} prefix={sym} compact />
                  <Field label="AI usage cost per minute" value={Number((perMinuteUSD * rate).toFixed(2))} onChange={(v) => setPerMinuteUSD(v / rate)} min={0} max={LIMITS.aiCostPerMinute.max} sliderMin={0} sliderMax={1} step={0.01} prefix={sym} unit="/min" compact />
                  <Field label="One-time setup cost (optional)" value={money(setupUSD)} onChange={(v) => setSetupUSD(v / rate)} min={0} max={moneyLimit} sliderMin={0} sliderMax={1} step={1} prefix={sym} compact />
                  <p style={{ fontSize: "0.75rem", color: "var(--color-muted)" }}>
                    Defaults are planning assumptions (${DEFAULT_FEE_USD}/month, ${DEFAULT_PER_MINUTE_USD.toFixed(2)}/min, {DEFAULT_MARGIN}% margin, no setup cost), not a quote.
                  </p>
                </div>
              </details>

              <a
                href={`${MAIN_URL}/applications/${industry.applicationSlug}`}
                target="_blank"
                rel="noopener"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", marginTop: "1.5rem", fontSize: "0.85rem", fontWeight: 700, color: "var(--color-brand)" }}
              >
                How The Squirrel builds an AI receptionist for {industry.name.toLowerCase()} <ArrowUpRight size={14} />
              </a>
            </div>

            <ResultsDisplay results={results} currency={currency} industry={industry} />
          </div>
        </div>
      </div>

      <PrintReport results={results} inputs={inputs} currency={currency} industry={industry} />
    </>
  );
}
