"use client";

import React from "react";
import Calculator from "@/components/Calculator";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function EmbedPage() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#ffffff",
      padding: "1rem 0"
    }}>
      {/* Mini Brand Header */}
      <div style={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "0 1.5rem 1rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid var(--color-border)"
      }}>
        <a
          href="https://thesquirrel.tech/solutions/ai-receptionist"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}
        >
          <Image
            src="/logo.png"
            alt="The Squirrel Logo"
            width={32}
            height={32}
            style={{ objectFit: "contain" }}
          />
          <span style={{
            fontSize: "0.95rem",
            fontWeight: 900,
            color: "var(--color-dark)",
            textTransform: "uppercase",
            letterSpacing: "-0.02em"
          }}>
            The Squirrel AI Receptionist Calculator
          </span>
        </a>

        <a
          href="https://thesquirrel.tech/solutions/ai-receptionist"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ fontSize: "0.75rem", padding: "0.4rem 0.85rem" }}
        >
          <span>Learn More</span>
          <ExternalLink size={12} />
        </a>
      </div>

      {/* Calculator Body */}
      <Calculator />

      {/* Powered by footer */}
      <div style={{
        textAlign: "center",
        padding: "1.5rem 0",
        borderTop: "1px solid var(--color-border)",
        fontSize: "0.8125rem",
        color: "var(--color-muted)"
      }}>
        Powered by{" "}
        <a
          href="https://thesquirrel.tech/solutions/ai-receptionist"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--color-brand)", fontWeight: 700 }}
        >
          The Squirrel Technologies
        </a>{" "}
        · Free Open-Source Tool
      </div>
    </div>
  );
}
