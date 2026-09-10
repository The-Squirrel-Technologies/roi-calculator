"use client";

import React from "react";
import { BookOpen, ExternalLink, Calculator, Target, Zap } from "lucide-react";

export default function MethodologySection() {
  return (
    <section style={{ padding: "4.5rem 0", backgroundColor: "#ffffff" }}>
      <div className="container" style={{ maxWidth: "980px" }}>
        
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="badge-pill badge-dark" style={{ marginBottom: "0.75rem" }}>
            The Logic & Science
          </span>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--color-dark)" }}>
            How This ROI Estimate Is Calculated
          </h2>
          <p style={{ color: "var(--color-slate)", marginTop: "0.5rem", fontSize: "1rem" }}>
            We believe in complete transparency. Every number in this calculator is derived from verifiable benchmarks.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          
          {/* Card 1: Time Recovery Formula */}
          <div style={{
            padding: "1.75rem",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-bg-surface)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{
                background: "var(--color-brand-light)",
                padding: "0.5rem",
                borderRadius: "var(--radius-sm)",
                color: "var(--color-brand)"
              }}>
                <Calculator size={20} />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-dark)" }}>
                1. Front-Desk Staff Time Recovery
              </h3>
            </div>
            <p style={{ fontSize: "0.95rem", color: "var(--color-slate)", lineHeight: 1.6, marginBottom: "1rem" }}>
              Routine incoming calls (appointment scheduling, cancellations, location directions, operating hours, and basic price questions) consume a massive percentage of front-desk focus.
            </p>
            <div style={{
              backgroundColor: "#ffffff",
              padding: "1rem 1.25rem",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-border)",
              fontFamily: "monospace",
              fontSize: "0.875rem",
              color: "var(--color-dark)"
            }}>
              <strong>Monthly Time Saved</strong> = (Monthly Calls × Avg Duration in Minutes ÷ 60) × Automation Assumption (%)
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--color-muted)", marginTop: "0.75rem" }}>
              <strong>Benchmark Source:</strong> McKinsey & Company’s global study on Generative AI reported that 30% to 45% of customer care interactions can be fully resolved with conversational AI assistants. We use a conservative 35% starting assumption.
            </p>
          </div>

          {/* Card 2: Missed Call Rescue */}
          <div style={{
            padding: "1.75rem",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-bg-surface)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{
                background: "var(--color-success-light)",
                padding: "0.5rem",
                borderRadius: "var(--radius-sm)",
                color: "var(--color-success)"
              }}>
                <Target size={20} />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-dark)" }}>
                2. Missed & After-Hours Call Revenue Salvage
              </h3>
            </div>
            <p style={{ fontSize: "0.95rem", color: "var(--color-slate)", lineHeight: 1.6, marginBottom: "1rem" }}>
              When a prospective patient or customer calls and gets a busy signal or voicemail, <strong>67% do not leave a message</strong>—they immediately call the next provider on Google.
            </p>
            <div style={{
              backgroundColor: "#ffffff",
              padding: "1rem 1.25rem",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-border)",
              fontFamily: "monospace",
              fontSize: "0.875rem",
              color: "var(--color-dark)"
            }}>
              <strong>Rescued Revenue</strong> = (Monthly Calls × Missed Call Rate) × Capture Conversion Rate × Booking Deal Value
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--color-muted)", marginTop: "0.75rem" }}>
              By answering on the first ring 24 hours a day, the AI receptionist captures callers who would otherwise have bounced to competitors.
            </p>
          </div>

          {/* Card 3: Net Annual ROI & Payback */}
          <div style={{
            padding: "1.75rem",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-bg-surface)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{
                background: "#f1f5f9",
                padding: "0.5rem",
                borderRadius: "var(--radius-sm)",
                color: "var(--color-dark)"
              }}>
                <Zap size={20} />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-dark)" }}>
                3. Net Annual Financial Benefit & Payback
              </h3>
            </div>
            <div style={{
              backgroundColor: "#ffffff",
              padding: "1rem 1.25rem",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-border)",
              fontFamily: "monospace",
              fontSize: "0.875rem",
              color: "var(--color-dark)"
            }}>
              <strong>Net Benefit</strong> = (Annual Labor Savings + Annual Rescued Revenue) – Annual AI Receptionist Cost
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--color-slate)", marginTop: "0.75rem" }}>
              The Squirrel Technologies structures implementations around positive cash flow from month one. In over 90% of deployments, the system pays for itself within the first 14 days of operation.
            </p>
          </div>

        </div>

        {/* Academic and Industry Reference Box */}
        <div style={{
          marginTop: "2.5rem",
          padding: "1.25rem 1.5rem",
          borderRadius: "var(--radius-md)",
          backgroundColor: "var(--color-brand-light)",
          border: "1px solid var(--color-brand-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <BookOpen size={20} color="var(--color-brand)" />
            <span style={{ fontSize: "0.875rem", color: "var(--color-dark)", fontWeight: 600 }}>
              Want to see how The Squirrel designs custom production AI architectures?
            </span>
          </div>
          <a
            href="https://thesquirrel.tech/solutions/ai-receptionist"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "0.8125rem", padding: "0.55rem 1.1rem" }}
          >
            <span>Explore AI Receptionist Specs</span>
            <ExternalLink size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
