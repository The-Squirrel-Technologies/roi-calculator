"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Code2, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenEmbed: () => void;
}

export default function Navbar({ onOpenEmbed }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        height: "80px"
      }}>
        {/* Logo */}
        <a 
          href="https://thesquirrel.tech" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
        >
          <div style={{
            position: "relative",
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            {/* Fallback & real logo */}
            <Image
              src="/logo.png"
              alt="The Squirrel Technologies"
              width={44}
              height={44}
              style={{ objectFit: "contain" }}
              onError={(e) => {
                // If logo fails, fallback gracefully
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>
          <span style={{
            fontSize: "1.125rem",
            fontWeight: 900,
            color: "var(--color-dark)",
            letterSpacing: "-0.03em",
            textTransform: "uppercase"
          }}>
            The Squirrel
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{
          display: "none",
          alignItems: "center",
          gap: "2rem",
        }} className="desktop-nav">
          <a
            href="https://thesquirrel.tech"
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--color-dark)",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-brand)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-dark)"}
          >
            HOME
          </a>
          <a
            href="https://thesquirrel.tech/solutions"
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--color-dark)",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-brand)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-dark)"}
          >
            SOLUTIONS
          </a>
          <a
            href="https://thesquirrel.tech/solutions/ai-receptionist"
            style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "var(--color-brand)",
              borderBottom: "2px solid var(--color-brand)",
              paddingBottom: "2px"
            }}
          >
            AI RECEPTIONIST
          </a>
          <a
            href="https://thesquirrel.tech/applications"
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--color-dark)",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-brand)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-dark)"}
          >
            APPLICATIONS
          </a>
          <a
            href="https://thesquirrel.tech/#pricing"
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--color-dark)",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-brand)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-dark)"}
          >
            PRICING
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
          <button
            onClick={onOpenEmbed}
            className="btn-secondary"
            style={{ fontSize: "0.8125rem", padding: "0.6rem 1rem" }}
            title="Embed this open-source calculator on your website"
          >
            <Code2 size={16} color="var(--color-brand)" />
            <span className="hidden-mobile">Embed Widget</span>
          </button>

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

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem"
            }}
            className="mobile-menu-btn"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: "#ffffff",
          borderTop: "1px solid var(--color-border)",
          padding: "1.25rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>
          <a href="https://thesquirrel.tech" style={{ fontWeight: 600, color: "var(--color-dark)" }}>HOME</a>
          <a href="https://thesquirrel.tech/solutions" style={{ fontWeight: 600, color: "var(--color-dark)" }}>SOLUTIONS</a>
          <a href="https://thesquirrel.tech/solutions/ai-receptionist" style={{ fontWeight: 700, color: "var(--color-brand)" }}>AI RECEPTIONIST</a>
          <a href="https://thesquirrel.tech/applications" style={{ fontWeight: 600, color: "var(--color-dark)" }}>APPLICATIONS</a>
          <a href="https://thesquirrel.tech/#pricing" style={{ fontWeight: 600, color: "var(--color-dark)" }}>PRICING</a>
          <div style={{ paddingTop: "0.5rem", borderTop: "1px solid var(--color-border)" }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEmbed();
              }}
              className="btn-secondary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <Code2 size={16} /> Embed Calculator Widget
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .hidden-mobile {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
