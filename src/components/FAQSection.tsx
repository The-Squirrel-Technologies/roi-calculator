"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="screen-only" style={{ padding: "3.5rem 0", backgroundColor: "var(--color-bg-surface)" }}>
      <div className="container" style={{ maxWidth: "860px" }}>
        
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, marginBottom: "1.5rem", textAlign: "center" }}>Frequently asked questions</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "var(--radius-lg)",
                  border: isOpen ? "1px solid var(--color-brand)" : "1px solid var(--color-border)",
                  boxShadow: isOpen ? "var(--shadow-md)" : "var(--shadow-sm)",
                  overflow: "hidden",
                  transition: "all 0.2s ease"
                }}
              >
                <button
                  onClick={() => toggle(index)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.25rem 1.5rem",
                    backgroundColor: "transparent",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    gap: "1rem"
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: isOpen ? "var(--color-brand)" : "var(--color-dark)"
                  }}>
                    {item.question}
                  </span>
                  <div style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                    color: isOpen ? "var(--color-brand)" : "var(--color-muted)"
                  }}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: "0 1.5rem 1.25rem 1.5rem",
                    color: "var(--color-text-body)",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    borderTop: "1px solid var(--color-border-subtle)"
                  }}>
                    <div style={{ paddingTop: "0.85rem" }}>
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
