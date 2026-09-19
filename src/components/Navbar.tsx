import React from "react";
import Image from "next/image";
import { CALENDLY_URL, MAIN_URL } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="screen-only" style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--color-border)" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>
        <a href={MAIN_URL} target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
          <Image src="/logo.png" alt="The Squirrel Technologies logo" width={38} height={38} priority style={{ objectFit: "contain" }} />
          <span style={{ fontSize: "1.05rem", fontWeight: 900, color: "var(--color-dark)", letterSpacing: "-0.03em", textTransform: "uppercase" }}>The Squirrel</span>
        </a>
        <a href={CALENDLY_URL} target="_blank" rel="noopener" className="btn-primary" style={{ fontSize: "0.8125rem", padding: "0.6rem 1.15rem" }}>
          Book a free call
        </a>
      </div>
    </header>
  );
}
