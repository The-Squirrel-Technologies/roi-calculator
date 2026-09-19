import React from "react";
import Image from "next/image";
import { CALENDLY_URL, MAIN_URL, MVP_REPO_URL, MVP_SITE_URL, ORG_URL, REPO_URL, WHATSAPP_URL } from "@/lib/site";

const solutions: [string, string][] = [
  ["AI Receptionist", "/solutions/ai-receptionist"],
  ["AI Sales Agent", "/solutions/ai-sales-agent"],
  ["Customer Service Chatbot", "/solutions/ai-customer-service-chatbot"],
  ["AI Workflow Automation", "/solutions/ai-workflow-automation"],
  ["Accounts Payable Automation", "/solutions/accounts-payable-automation"],
];
const applications: [string, string][] = [
  ["Salons & Spas", "ai-receptionist-for-salons-and-spas"],
  ["Dentists", "ai-receptionist-for-dentists"],
  ["Clinics", "ai-receptionist-for-clinics"],
  ["HVAC Companies", "ai-receptionist-for-hvac-companies"],
  ["Law Firms", "ai-receptionist-for-law-firms"],
  ["Property Management", "ai-receptionist-for-property-management"],
];

const heading: React.CSSProperties = { fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-dark)", marginBottom: "0.9rem" };
const list: React.CSSProperties = { listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem", fontSize: "0.875rem", color: "var(--color-slate)" };

export default function Footer() {
  return (
    <footer className="screen-only" style={{ background: "#fff", borderTop: "1px solid var(--color-border)", padding: "3rem 0 2rem" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "2rem", marginBottom: "2rem" }}>
          <div>
            <a href={MAIN_URL} target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.9rem" }}>
              <Image src="/logo.png" alt="The Squirrel Technologies logo" width={36} height={36} style={{ objectFit: "contain" }} />
              <span style={{ fontWeight: 900, color: "var(--color-dark)", textTransform: "uppercase" }}>The Squirrel</span>
            </a>
            <p style={{ fontSize: "0.85rem", color: "var(--color-muted)" }}>
              Product engineering studio in Bengaluru building production AI systems, automations and MVPs.
            </p>
          </div>
          <div>
            <h3 style={heading}>AI solutions</h3>
            <ul style={list}>
              {solutions.map(([n, p]) => (<li key={p}><a href={`${MAIN_URL}${p}`} target="_blank" rel="noopener">{n}</a></li>))}
            </ul>
          </div>
          <div>
            <h3 style={heading}>AI receptionist for</h3>
            <ul style={list}>
              {applications.map(([n, p]) => (<li key={p}><a href={`${MAIN_URL}/applications/${p}`} target="_blank" rel="noopener">{n}</a></li>))}
            </ul>
          </div>
          <div>
            <h3 style={heading}>More free tools</h3>
            <ul style={list}>
              <li><a href={MVP_SITE_URL} target="_blank" rel="noopener">MVP &amp; AI Cost Calculator</a></li>
              <li><a href={REPO_URL} target="_blank" rel="noopener">ROI calculator on GitHub</a></li>
              <li><a href={MVP_REPO_URL} target="_blank" rel="noopener">MVP calculator on GitHub</a></li>
              <li><a href={ORG_URL} target="_blank" rel="noopener">The-Squirrel-Technologies on GitHub</a></li>
              <li><a href={CALENDLY_URL} target="_blank" rel="noopener">Book a discovery call</a></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener">WhatsApp +91 94496 10077</a></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "1.25rem", fontSize: "0.8rem", color: "var(--color-muted)" }}>
          © {new Date().getFullYear()}{" "}
          <a href={MAIN_URL} target="_blank" rel="noopener" style={{ fontWeight: 700, color: "var(--color-dark)" }}>The Squirrel Technologies</a>. MIT licensed.
        </div>
      </div>
    </footer>
  );
}
