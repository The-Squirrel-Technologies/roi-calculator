"use client";

import React from "react";
import { Sparkles, Clock, DollarSign, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section style={{
      paddingTop: "3.5rem",
      paddingBottom: "2.5rem",
      backgroundColor: "var(--color-bg-surface)",
      borderBottom: "1px solid var(--color-border)"
    }}>
      <div className="container" style={{ textAlign: "center", maxWidth: "920px" }}>
        
        {/* Badges */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
          flexWrap: "wrap",
          marginBottom: "1.25rem"
        }}>
          <span className="badge-pill badge-brand">
            <Sparkles size={13} />
            <span>The Squirrel Technologies</span>
          </span>
          <span className="badge-pill badge-dark">
            <span>Open Source Business Tool</span>
          </span>
          <span className="badge-pill badge-success">
            <ShieldCheck size={13} />
            <span>McKinsey Benchmark Verified</span>
          </span>
        </div>

        {/* Main H1 for SEO */}
        <h1 style={{
          fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
          fontWeight: 800,
          color: "var(--color-dark)",
          lineHeight: 1.15,
          marginBottom: "1.25rem",
          letterSpacing: "-0.03em"
        }}>
          AI Receptionist <span style={{ color: "var(--color-brand)" }}>ROI & Value</span> Calculator
        </h1>

        {/* Lead description */}
        <p style={{
          fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
          color: "var(--color-slate)",
          maxWidth: "780px",
          margin: "0 auto 2rem auto",
          lineHeight: 1.6
        }}>
          Calculate how many front-desk hours your staff recovers and how much revenue your business captures from missed, after-hours calls. Built by <a href="https://thesquirrel.tech" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-brand)", fontWeight: 700, textDecoration: "underline" }}>The Squirrel Technologies</a>.
        </p>

        {/* Quick Highlights Row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
          marginTop: "1.5rem",
          textAlign: "left"
        }}>
          <div style={{
            background: "#ffffff",
            padding: "1rem 1.25rem",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--color-border)",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            boxShadow: "var(--shadow-sm)"
          }}>
            <div style={{
              background: "var(--color-brand-light)",
              padding: "0.5rem",
              borderRadius: "var(--radius-sm)",
              color: "var(--color-brand)"
            }}>
              <Clock size={20} />
            </div>
            <div>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--color-muted)" }}>Time Recovered</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-dark)" }}>35% - 60% Staff Hours</div>
            </div>
          </div>

          <div style={{
            background: "#ffffff",
            padding: "1rem 1.25rem",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--color-border)",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            boxShadow: "var(--shadow-sm)"
          }}>
            <div style={{
              background: "var(--color-success-light)",
              padding: "0.5rem",
              borderRadius: "var(--radius-sm)",
              color: "var(--color-success)"
            }}>
              <DollarSign size={20} />
            </div>
            <div>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--color-muted)" }}>Missed Call Rescue</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-dark)" }}>24/7 Booking & Intake</div>
            </div>
          </div>

          <div style={{
            background: "#ffffff",
            padding: "1rem 1.25rem",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--color-border)",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            boxShadow: "var(--shadow-sm)"
          }}>
            <div style={{
              background: "#f1f5f9",
              padding: "0.5rem",
              borderRadius: "var(--radius-sm)",
              color: "var(--color-dark)"
            }}>
              <Sparkles size={20} />
            </div>
            <div>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--color-muted)" }}>Average Payback</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-dark)" }}>Under 14 Days</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
