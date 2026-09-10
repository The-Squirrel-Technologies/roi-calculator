"use client";

import React, { useState } from "react";
import { INDUSTRY_PRESETS, CURRENCIES, IndustryPreset, CurrencyConfig } from "@/lib/industryData";
import { calculateROI, CalculatorInputs } from "@/lib/calculations";
import IndustryPresets from "./IndustryPresets";
import ResultsDisplay from "./ResultsDisplay";
import { CheckCircle2, Sliders, DollarSign, Phone, Clock, Users, Calendar, AlertCircle } from "lucide-react";

export default function Calculator() {
  // Active industry & currency
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryPreset>(INDUSTRY_PRESETS[0]);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyConfig>(CURRENCIES[0]);

  // Dynamic inputs initialized from first preset
  const [monthlyCalls, setMonthlyCalls] = useState(selectedIndustry.monthlyCalls);
  const [callDuration, setCallDuration] = useState(selectedIndustry.callDuration);
  const [staffHourlyRate, setStaffHourlyRate] = useState(selectedIndustry.staffHourlyRate);
  const [missedCallRate, setMissedCallRate] = useState(selectedIndustry.missedCallRate);
  const [customerValue, setCustomerValue] = useState(selectedIndustry.customerValue);
  const [automationRate, setAutomationRate] = useState(selectedIndustry.automationRate);

  // Handle industry change
  const handleIndustrySelect = (preset: IndustryPreset) => {
    setSelectedIndustry(preset);
    setMonthlyCalls(preset.monthlyCalls);
    setCallDuration(preset.callDuration);
    // Convert base values if non-USD currency
    const rate = selectedCurrency.rateAgainstUSD;
    setStaffHourlyRate(Math.round(preset.staffHourlyRate * rate));
    setMissedCallRate(preset.missedCallRate);
    setCustomerValue(Math.round(preset.customerValue * rate));
    setAutomationRate(preset.automationRate);
  };

  // Handle currency change
  const handleCurrencySelect = (currency: CurrencyConfig) => {
    const oldRate = selectedCurrency.rateAgainstUSD;
    const newRate = currency.rateAgainstUSD;
    setSelectedCurrency(currency);
    // Scale rate-dependent inputs
    setStaffHourlyRate((prev) => Math.round((prev / oldRate) * newRate));
    setCustomerValue((prev) => Math.round((prev / oldRate) * newRate));
  };

  // Run calculation
  const currentInputs: CalculatorInputs = {
    monthlyCalls,
    callDuration,
    staffHourlyRate,
    missedCallRate,
    customerValue,
    automationRate,
    missedConversionRate: selectedIndustry.missedConversionRate
  };

  const results = calculateROI(currentInputs);

  return (
    <div style={{ padding: "3rem 0" }}>
      <div className="container">

        {/* Currency Selector Bar */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.75rem",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "1rem 1.25rem",
          backgroundColor: "#ffffff",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--color-border)",
          boxShadow: "var(--shadow-sm)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <DollarSign size={18} color="var(--color-brand)" />
            <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-dark)" }}>
              Currency Setting:
            </span>
          </div>
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {CURRENCIES.map((curr) => (
              <button
                key={curr.code}
                onClick={() => handleCurrencySelect(curr)}
                style={{
                  padding: "0.4rem 0.8rem",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.78rem",
                  fontWeight: selectedCurrency.code === curr.code ? 700 : 500,
                  backgroundColor: selectedCurrency.code === curr.code ? "var(--color-brand)" : "#f8fafc",
                  color: selectedCurrency.code === curr.code ? "#ffffff" : "var(--color-slate)",
                  border: selectedCurrency.code === curr.code ? "1px solid var(--color-brand)" : "1px solid var(--color-border)",
                  cursor: "pointer",
                  transition: "all 0.15s"
                }}
              >
                {curr.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 1: Industry Presets Selector */}
        <IndustryPresets
          selectedId={selectedIndustry.id}
          onSelect={handleIndustrySelect}
        />

        {/* Main Grid: Inputs Panel on Left, Sticky Results Card on Right */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2.5rem",
          alignItems: "start"
        }} className="calc-grid">
          
          {/* Left Panel: Sliders & Specific Workflows */}
          <div style={{
            backgroundColor: "#ffffff",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--color-border)",
            padding: "2rem",
            boxShadow: "var(--shadow-lg)"
          }}>
            
            <div style={{ borderBottom: "1px solid var(--color-border)", paddingBottom: "1.25rem", marginBottom: "1.75rem" }}>
              <span style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--color-brand)"
              }}>
                Step 02 · Tailor Your Current Workload
              </span>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-dark)", marginTop: "0.25rem" }}>
                Operational Inputs & Parameters
              </h2>
              <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", marginTop: "0.25rem" }}>
                Fine-tune the sliders to match your typical monthly call volume and staff costs.
              </p>
            </div>

            {/* Controls Container */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              
              {/* Input 1: Monthly Calls */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.875rem", fontWeight: 700, color: "var(--color-dark)" }}>
                    <Phone size={15} color="var(--color-brand)" />
                    Monthly Inbound Calls
                  </label>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "0.25rem 0.6rem",
                    backgroundColor: "var(--color-bg-surface)"
                  }}>
                    <input
                      type="number"
                      value={monthlyCalls}
                      onChange={(e) => setMonthlyCalls(Math.max(50, Math.min(25000, Number(e.target.value) || 0)))}
                      style={{
                        width: "60px",
                        border: "none",
                        background: "transparent",
                        fontWeight: 800,
                        fontSize: "0.95rem",
                        color: "var(--color-dark)",
                        textAlign: "right",
                        outline: "none"
                      }}
                    />
                    <span style={{ fontSize: "0.75rem", color: "var(--color-muted)", fontWeight: 600 }}>calls</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="50"
                  value={monthlyCalls}
                  onChange={(e) => setMonthlyCalls(Number(e.target.value))}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--color-muted)", marginTop: "0.25rem" }}>
                  <span>100 calls</span>
                  <span>2,500 calls</span>
                  <span>5,000+ calls</span>
                </div>
              </div>

              {/* Input 2: Average Call Duration */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.875rem", fontWeight: 700, color: "var(--color-dark)" }}>
                    <Clock size={15} color="var(--color-brand)" />
                    Average Call Duration (Minutes)
                  </label>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "0.25rem 0.6rem",
                    backgroundColor: "var(--color-bg-surface)"
                  }}>
                    <input
                      type="number"
                      step="0.5"
                      value={callDuration}
                      onChange={(e) => setCallDuration(Math.max(1, Math.min(20, Number(e.target.value) || 1)))}
                      style={{
                        width: "50px",
                        border: "none",
                        background: "transparent",
                        fontWeight: 800,
                        fontSize: "0.95rem",
                        color: "var(--color-dark)",
                        textAlign: "right",
                        outline: "none"
                      }}
                    />
                    <span style={{ fontSize: "0.75rem", color: "var(--color-muted)", fontWeight: 600 }}>min</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="0.5"
                  value={callDuration}
                  onChange={(e) => setCallDuration(Number(e.target.value))}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--color-muted)", marginTop: "0.25rem" }}>
                  <span>1 min (quick inquiry)</span>
                  <span>4.5 mins (typical booking)</span>
                  <span>12 mins (in-depth triage)</span>
                </div>
              </div>

              {/* Input 3: Staff Hourly Cost */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.875rem", fontWeight: 700, color: "var(--color-dark)" }}>
                    <Users size={15} color="var(--color-brand)" />
                    Front-Desk Hourly Cost (Wage + Overhead)
                  </label>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "0.25rem 0.6rem",
                    backgroundColor: "var(--color-bg-surface)"
                  }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--color-brand)", fontWeight: 700 }}>
                      {selectedCurrency.symbol}
                    </span>
                    <input
                      type="number"
                      value={staffHourlyRate}
                      onChange={(e) => setStaffHourlyRate(Math.max(5, Math.min(200, Number(e.target.value) || 5)))}
                      style={{
                        width: "50px",
                        border: "none",
                        background: "transparent",
                        fontWeight: 800,
                        fontSize: "0.95rem",
                        color: "var(--color-dark)",
                        textAlign: "right",
                        outline: "none"
                      }}
                    />
                    <span style={{ fontSize: "0.75rem", color: "var(--color-muted)", fontWeight: 600 }}>/hr</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="2"
                  value={staffHourlyRate}
                  onChange={(e) => setStaffHourlyRate(Number(e.target.value))}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--color-muted)", marginTop: "0.25rem" }}>
                  <span>{selectedCurrency.symbol}10/hr</span>
                  <span>{selectedCurrency.symbol}30/hr (Avg)</span>
                  <span>{selectedCurrency.symbol}100/hr</span>
                </div>
              </div>

              {/* Input 4: Missed Call / After Hours Rate */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.875rem", fontWeight: 700, color: "var(--color-dark)" }}>
                    <AlertCircle size={15} color="var(--color-brand)" />
                    Missed & After-Hours Calls Rate
                  </label>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "0.25rem 0.6rem",
                    backgroundColor: "var(--color-bg-surface)"
                  }}>
                    <input
                      type="number"
                      value={missedCallRate}
                      onChange={(e) => setMissedCallRate(Math.max(0, Math.min(75, Number(e.target.value) || 0)))}
                      style={{
                        width: "45px",
                        border: "none",
                        background: "transparent",
                        fontWeight: 800,
                        fontSize: "0.95rem",
                        color: "var(--color-dark)",
                        textAlign: "right",
                        outline: "none"
                      }}
                    />
                    <span style={{ fontSize: "0.75rem", color: "var(--color-muted)", fontWeight: 600 }}>%</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="1"
                  value={missedCallRate}
                  onChange={(e) => setMissedCallRate(Number(e.target.value))}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--color-muted)", marginTop: "0.25rem" }}>
                  <span>5% (rare)</span>
                  <span>28% (Industry Avg)</span>
                  <span>60% (High after-hours)</span>
                </div>
              </div>

              {/* Input 5: Customer / Booking Deal Value */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.875rem", fontWeight: 700, color: "var(--color-dark)" }}>
                    <Calendar size={15} color="var(--color-brand)" />
                    Average Value per Booking / Client
                  </label>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "0.25rem 0.6rem",
                    backgroundColor: "var(--color-bg-surface)"
                  }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--color-brand)", fontWeight: 700 }}>
                      {selectedCurrency.symbol}
                    </span>
                    <input
                      type="number"
                      value={customerValue}
                      onChange={(e) => setCustomerValue(Math.max(10, Math.min(10000, Number(e.target.value) || 10)))}
                      style={{
                        width: "60px",
                        border: "none",
                        background: "transparent",
                        fontWeight: 800,
                        fontSize: "0.95rem",
                        color: "var(--color-dark)",
                        textAlign: "right",
                        outline: "none"
                      }}
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min="20"
                  max="2500"
                  step="25"
                  value={customerValue}
                  onChange={(e) => setCustomerValue(Number(e.target.value))}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--color-muted)", marginTop: "0.25rem" }}>
                  <span>{selectedCurrency.symbol}20 (Salon/Cafe)</span>
                  <span>{selectedCurrency.symbol}400 (Clinic/Trade)</span>
                  <span>{selectedCurrency.symbol}2,500+ (Legal/HVAC)</span>
                </div>
              </div>

              {/* Input 6: AI Receptionist Containment Rate */}
              <div style={{
                backgroundColor: "var(--color-bg-surface)",
                padding: "1.25rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border)"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.875rem", fontWeight: 700, color: "var(--color-dark)" }}>
                    <Sliders size={15} color="var(--color-brand)" />
                    AI Automation & Containment Assumption
                  </label>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    border: "1px solid var(--color-brand-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "0.25rem 0.6rem",
                    backgroundColor: "var(--color-brand-light)"
                  }}>
                    <input
                      type="number"
                      value={automationRate}
                      onChange={(e) => setAutomationRate(Math.max(15, Math.min(85, Number(e.target.value) || 15)))}
                      style={{
                        width: "45px",
                        border: "none",
                        background: "transparent",
                        fontWeight: 900,
                        fontSize: "0.95rem",
                        color: "var(--color-brand)",
                        textAlign: "right",
                        outline: "none"
                      }}
                    />
                    <span style={{ fontSize: "0.75rem", color: "var(--color-brand)", fontWeight: 700 }}>%</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="20"
                  max="75"
                  step="1"
                  value={automationRate}
                  onChange={(e) => setAutomationRate(Number(e.target.value))}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--color-muted)", marginTop: "0.25rem" }}>
                  <span>20% (Ultra Conservative)</span>
                  <span style={{ color: "var(--color-brand)", fontWeight: 700 }}>30–45% (McKinsey Benchmark)</span>
                  <span>75% (Maximum)</span>
                </div>
              </div>

            </div>

            {/* Industry Specific Workflows Solved by The Squirrel */}
            <div style={{
              marginTop: "2rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--color-border)"
            }}>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--color-dark)", marginBottom: "0.75rem" }}>
                What The Squirrel AI Receptionist Automates for {selectedIndustry.name}:
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {selectedIndustry.automatedTasks.map((task, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.85rem", color: "var(--color-slate)" }}>
                    <CheckCircle2 size={16} color="var(--color-brand)" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span>{task}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Panel: Sticky Results Display */}
          <div>
            <ResultsDisplay
              results={results}
              currencySymbol={selectedCurrency.symbol}
              industryName={selectedIndustry.name}
              automationRate={automationRate}
            />
          </div>

        </div>

      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .calc-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </div>
  );
}
