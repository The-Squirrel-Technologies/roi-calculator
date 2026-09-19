import React from "react";
import { MAIN_URL } from "@/lib/site";

export default function HeroSection() {
  return (
    <section className="screen-only" style={{ padding: "3rem 0 2rem", background: "var(--color-bg-surface)", borderBottom: "1px solid var(--color-border)" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: "860px" }}>
        <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem", letterSpacing: "-0.03em" }}>
          AI Receptionist <span style={{ color: "var(--color-brand)" }}>ROI</span> Calculator
        </h1>
        <p style={{ fontSize: "1.1rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
          Estimate the front-desk hours an AI receptionist frees up and the revenue it recovers from missed calls. Free and open source, built by{" "}
          <a href={MAIN_URL} target="_blank" rel="noopener" style={{ color: "var(--color-brand)", fontWeight: 700, textDecoration: "underline" }}>
            The Squirrel Technologies
          </a>
          .
        </p>
      </div>
    </section>
  );
}
