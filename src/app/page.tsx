"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Calculator from "@/components/Calculator";
import MethodologySection from "@/components/MethodologySection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import EmbedModal from "@/components/EmbedModal";
import StarButtons from "@/components/StarButtons";
import { Code2 } from "lucide-react";

export default function HomePage() {
  const [embedOpen, setEmbedOpen] = useState(false);

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <HeroSection />
      <Calculator />

      <section className="screen-only" style={{ background: "var(--color-dark)", color: "#fff", padding: "2.5rem 0" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <div style={{ maxWidth: "560px" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: "0.4rem" }}>Free and open source (MIT)</h2>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>Embed this calculator on your site, or star the code on GitHub.</p>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button type="button" onClick={() => setEmbedOpen(true)} className="btn-primary" style={{ padding: "0.75rem 1.25rem" }}>
              <Code2 size={16} />
              <span>Get embed code</span>
            </button>
            <StarButtons />
          </div>
        </div>
      </section>

      <MethodologySection />
      <FAQSection />
      <Footer />
      <EmbedModal isOpen={embedOpen} onClose={() => setEmbedOpen(false)} />
    </main>
  );
}
