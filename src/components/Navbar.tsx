"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Navbar() {
  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--color-border)",
      transition: "all 0.2s ease"
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "70px"
      }}>
        {/* Logo */}
        <a
          href="https://thesquirrel.tech"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
        >
          <Image
            src="/logo.png"
            alt="The Squirrel Technologies"
            width={40}
            height={40}
            style={{ objectFit: "contain" }}
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
            }}
          />
          <span style={{
            fontSize: "1.0625rem",
            fontWeight: 900,
            color: "var(--color-dark)",
            letterSpacing: "-0.03em",
            textTransform: "uppercase"
          }}>
            The Squirrel
          </span>
        </a>

        {/* Book Consultation CTA */}
        <a
          href="https://calendly.com/ganeshghatti/discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ fontSize: "0.8125rem", padding: "0.65rem 1.25rem" }}
        >
          <span>Book Free Consultation</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </header>
  );
}
