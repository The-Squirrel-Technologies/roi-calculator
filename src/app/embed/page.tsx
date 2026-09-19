"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Calculator from "@/components/Calculator";
import { MAIN_URL, RECEPTIONIST_URL, SITE_URL } from "@/lib/site";

export default function EmbedPage() {
  // Tell the host page (see /widget.js) how tall we are so it can resize the iframe.
  useEffect(() => {
    const send = () => window.parent?.postMessage({ type: "squirrel-roi-height", height: document.documentElement.scrollHeight }, "*");
    send();
    const ro = new ResizeObserver(send);
    ro.observe(document.body);
    return () => ro.disconnect();
  }, []);

  return (
    <div style={{ background: "#fff" }}>
      <div className="screen-only container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.75rem 1.5rem", borderBottom: "1px solid var(--color-border)" }}>
        <a href={MAIN_URL} target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Image src="/logo.png" alt="The Squirrel Technologies logo" width={28} height={28} />
          <span style={{ fontWeight: 900, fontSize: "0.9rem", textTransform: "uppercase" }}>AI Receptionist ROI Calculator</span>
        </a>
        <a href={SITE_URL} target="_blank" rel="noopener" className="btn-primary" style={{ fontSize: "0.75rem", padding: "0.4rem 0.85rem" }}>Open full version</a>
      </div>
      <Calculator />
      <div className="screen-only" style={{ textAlign: "center", padding: "1rem 0 1.5rem", fontSize: "0.8125rem", color: "var(--color-muted)" }}>
        Powered by{" "}
        <a href={RECEPTIONIST_URL} target="_blank" rel="noopener" style={{ color: "var(--color-brand)", fontWeight: 700 }}>The Squirrel Technologies</a>
      </div>
    </div>
  );
}
