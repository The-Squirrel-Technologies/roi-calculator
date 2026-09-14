"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Calculator from "@/components/Calculator";
import ComparisonTable from "@/components/ComparisonTable";
import MethodologySection from "@/components/MethodologySection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import EmbedModal from "@/components/EmbedModal";
import { Github, Code2, ArrowRight, Star, CheckCircle } from "lucide-react";

export default function HomePage() {
  const [isEmbedModalOpen, setIsEmbedModalOpen] = useState(false);

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Interactive Calculator Section */}
      <section id="calculator">
        <Calculator />
      </section>

      {/* Open Source SEO Banner */}
      <section style={{
        backgroundColor: "var(--color-dark)",
        color: "#ffffff",
        padding: "3.5rem 0",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
      }}>
        <div className="container" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2rem"
        }}>
          <div style={{ maxWidth: "680px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <span className="badge-pill" style={{ backgroundColor: "rgba(167, 73, 17, 0.25)", color: "#ff8b1a", border: "1px solid rgba(255, 139, 26, 0.3)" }}>
                <Star size={13} fill="#ff8b1a" /> Open Source Project
              </span>
              <span style={{ fontSize: "0.8125rem", color: "#94a3b8" }}>MIT License</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, color: "#ffffff", marginBottom: "0.75rem" }}>
              Embed This Calculator on Your Website
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Whether you run a digital marketing agency, SaaS directory, or consult for local service businesses, our calculator is 100% free to embed and use as a lead magnet.
            </p>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={() => setIsEmbedModalOpen(true)}
              className="btn-primary"
              style={{ padding: "0.85rem 1.5rem" }}
            >
              <Code2 size={18} />
              <span>Get Embed Code</span>
            </button>

            <a
              href="https://github.com/thesquirreltech"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                color: "#ffffff !important",
                borderColor: "rgba(255, 255, 255, 0.2)",
                padding: "0.85rem 1.4rem"
              }}
            >
              <Github size={18} />
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Feature & Operational Comparison */}
      <ComparisonTable />

      {/* Math & Methodology Section */}
      <MethodologySection />

      {/* Accordion FAQ for Search Ranking */}
      <FAQSection />

      {/* Final Call to Action Box */}
      <section style={{
        padding: "5rem 0",
        backgroundColor: "#ffffff",
        textAlign: "center"
      }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <span className="badge-pill badge-brand" style={{ marginBottom: "1rem" }}>
            Ready to Implement?
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, color: "var(--color-dark)", marginBottom: "1rem" }}>
            Let&apos;s Build Your Custom AI Receptionist
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--color-slate)", marginBottom: "2rem", lineHeight: 1.6 }}>
            Book a direct discovery call with founder Ganesh Ghatti. We scope your phone workflows, connect your tools, and launch your voice AI in under 15 days.
          </p>
          
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="https://calendly.com/ganeshghatti/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}
            >
              <span>Schedule Free Discovery Call</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/919449610077"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: "1rem", padding: "0.9rem 1.75rem" }}
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer matching thesquirrel.tech */}
      <Footer />

      {/* Embed Modal */}
      <EmbedModal
        isOpen={isEmbedModalOpen}
        onClose={() => setIsEmbedModalOpen(false)}
      />
    </main>
  );
}
