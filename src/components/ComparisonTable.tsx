"use client";

import React from "react";
import { Check, X, Minus } from "lucide-react";

export default function ComparisonTable() {
  return (
    <section style={{
      padding: "4.5rem 0",
      backgroundColor: "var(--color-bg-surface)",
      borderTop: "1px solid var(--color-border)",
      borderBottom: "1px solid var(--color-border)"
    }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem auto" }}>
          <span className="badge-pill badge-brand" style={{ marginBottom: "0.75rem" }}>
            Operational Comparison
          </span>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "var(--color-dark)" }}>
            In-House vs Answering Service vs <span style={{ color: "var(--color-brand)" }}>Squirrel AI</span>
          </h2>
          <p style={{ color: "var(--color-slate)", marginTop: "0.5rem", fontSize: "1rem" }}>
            See why businesses are moving beyond traditional answering services and manual phone triage.
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div style={{
          overflowX: "auto",
          backgroundColor: "#ffffff",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--color-border)",
          boxShadow: "var(--shadow-lg)"
        }}>
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
            fontSize: "0.875rem"
          }}>
            <thead>
              <tr style={{ borderBottom: "2px solid var(--color-border)", backgroundColor: "#f8fafc" }}>
                <th style={{ padding: "1.25rem 1.5rem", fontWeight: 800, color: "var(--color-dark)", width: "30%" }}>
                  Feature / Metric
                </th>
                <th style={{ padding: "1.25rem 1.5rem", fontWeight: 700, color: "var(--color-slate)", width: "23%" }}>
                  In-House Front Desk
                </th>
                <th style={{ padding: "1.25rem 1.5rem", fontWeight: 700, color: "var(--color-slate)", width: "23%" }}>
                  Traditional Call Center
                </th>
                <th style={{
                  padding: "1.25rem 1.5rem",
                  fontWeight: 800,
                  color: "var(--color-brand)",
                  backgroundColor: "var(--color-brand-light)",
                  width: "24%",
                  borderLeft: "2px solid var(--color-brand-border)",
                  borderRight: "2px solid var(--color-brand-border)"
                }}>
                  The Squirrel AI
                </th>
              </tr>
            </thead>
            <tbody>
              
              {/* Row 1: Cost */}
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td style={{ padding: "1.1rem 1.5rem", fontWeight: 700, color: "var(--color-dark)" }}>
                  Annual Cost
                </td>
                <td style={{ padding: "1.1rem 1.5rem", color: "var(--color-slate)" }}>
                  $42,000 – $65,000+ (wages + benefits)
                </td>
                <td style={{ padding: "1.1rem 1.5rem", color: "var(--color-slate)" }}>
                  $8,000 – $18,000 (per-minute fees)
                </td>
                <td style={{
                  padding: "1.1rem 1.5rem",
                  fontWeight: 800,
                  color: "var(--color-brand)",
                  backgroundColor: "var(--color-brand-light)",
                  borderLeft: "2px solid var(--color-brand-border)",
                  borderRight: "2px solid var(--color-brand-border)"
                }}>
                  Fraction of staff cost (Fixed / predictable)
                </td>
              </tr>

              {/* Row 2: Availability */}
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td style={{ padding: "1.1rem 1.5rem", fontWeight: 700, color: "var(--color-dark)" }}>
                  Hours of Availability
                </td>
                <td style={{ padding: "1.1rem 1.5rem", color: "var(--color-slate)" }}>
                  40 hours / week (Mon–Fri 9–5)
                </td>
                <td style={{ padding: "1.1rem 1.5rem", color: "var(--color-slate)" }}>
                  24/7 (Often outsourced agents)
                </td>
                <td style={{
                  padding: "1.1rem 1.5rem",
                  fontWeight: 800,
                  color: "var(--color-brand)",
                  backgroundColor: "var(--color-brand-light)",
                  borderLeft: "2px solid var(--color-brand-border)",
                  borderRight: "2px solid var(--color-brand-border)"
                }}>
                  24/7/365 Zero Downtime
                </td>
              </tr>

              {/* Row 3: Live Calendar & CRM Sync */}
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td style={{ padding: "1.1rem 1.5rem", fontWeight: 700, color: "var(--color-dark)" }}>
                  Direct Calendar / EHR Booking
                </td>
                <td style={{ padding: "1.1rem 1.5rem" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", color: "var(--color-success)", fontWeight: 600 }}>
                    <Check size={16} /> Yes (when at desk)
                  </span>
                </td>
                <td style={{ padding: "1.1rem 1.5rem" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", color: "var(--color-muted)", fontWeight: 600 }}>
                    <Minus size={16} /> Rare (mostly takes message)
                  </span>
                </td>
                <td style={{
                  padding: "1.1rem 1.5rem",
                  backgroundColor: "var(--color-brand-light)",
                  borderLeft: "2px solid var(--color-brand-border)",
                  borderRight: "2px solid var(--color-brand-border)"
                }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", color: "var(--color-brand)", fontWeight: 800 }}>
                    <Check size={16} /> Instant Two-Way API Sync
                  </span>
                </td>
              </tr>

              {/* Row 4: Concurrent Calls */}
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td style={{ padding: "1.1rem 1.5rem", fontWeight: 700, color: "var(--color-dark)" }}>
                  Concurrent Call Handling
                </td>
                <td style={{ padding: "1.1rem 1.5rem" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", color: "#dc2626", fontWeight: 600 }}>
                    <X size={16} /> 1 caller (others placed on hold)
                  </span>
                </td>
                <td style={{ padding: "1.1rem 1.5rem" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", color: "var(--color-slate)", fontWeight: 600 }}>
                    <Minus size={16} /> Shared pool (hold queues)
                  </span>
                </td>
                <td style={{
                  padding: "1.1rem 1.5rem",
                  backgroundColor: "var(--color-brand-light)",
                  borderLeft: "2px solid var(--color-brand-border)",
                  borderRight: "2px solid var(--color-brand-border)"
                }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", color: "var(--color-brand)", fontWeight: 800 }}>
                    <Check size={16} /> Unlimited Simultaneous Calls
                  </span>
                </td>
              </tr>

              {/* Row 5: Tone & Consistency */}
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td style={{ padding: "1.1rem 1.5rem", fontWeight: 700, color: "var(--color-dark)" }}>
                  Knowledge & Script Accuracy
                </td>
                <td style={{ padding: "1.1rem 1.5rem", color: "var(--color-slate)" }}>
                  High, but changes with staff turnover
                </td>
                <td style={{ padding: "1.1rem 1.5rem", color: "var(--color-slate)" }}>
                  Low (agent handles 40 other clients)
                </td>
                <td style={{
                  padding: "1.1rem 1.5rem",
                  fontWeight: 800,
                  color: "var(--color-brand)",
                  backgroundColor: "var(--color-brand-light)",
                  borderLeft: "2px solid var(--color-brand-border)",
                  borderRight: "2px solid var(--color-brand-border)"
                }}>
                  100% Consistent Brand Voice & Logic
                </td>
              </tr>

              {/* Row 6: Warm Handoff */}
              <tr>
                <td style={{ padding: "1.1rem 1.5rem", fontWeight: 700, color: "var(--color-dark)" }}>
                  Urgent Escalation & Warm Transfer
                </td>
                <td style={{ padding: "1.1rem 1.5rem", color: "var(--color-slate)" }}>
                  Manual shout or intercom
                </td>
                <td style={{ padding: "1.1rem 1.5rem", color: "var(--color-slate)" }}>
                  Cold transfer or delayed email
                </td>
                <td style={{
                  padding: "1.1rem 1.5rem",
                  fontWeight: 800,
                  color: "var(--color-brand)",
                  backgroundColor: "var(--color-brand-light)",
                  borderLeft: "2px solid var(--color-brand-border)",
                  borderRight: "2px solid var(--color-brand-border)"
                }}>
                  Smart Whisper Handoff + SMS Alert
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
