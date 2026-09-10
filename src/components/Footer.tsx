"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, Calendar, Github, Instagram, Youtube, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#ffffff",
      borderTop: "1px solid var(--color-border)",
      paddingTop: "4rem",
      paddingBottom: "2.5rem"
    }}>
      <div className="container">
        
        {/* Main 4-column Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "3rem",
          marginBottom: "3.5rem"
        }}>
          
          {/* Col 1: Brand & Bio */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <Image
                src="/logo.png"
                alt="The Squirrel Logo"
                width={40}
                height={40}
                style={{ objectFit: "contain" }}
              />
              <span style={{
                fontSize: "1.125rem",
                fontWeight: 900,
                color: "var(--color-dark)",
                textTransform: "uppercase",
                letterSpacing: "-0.03em"
              }}>
                The Squirrel
              </span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Transforming innovative ideas into high-performance digital solutions. We build production-ready AI systems, automations, and intelligent workflows that help businesses scale.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <a
                href="https://www.instagram.com/thesquirrel.tech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  display: "inline-flex",
                  width: "36px",
                  height: "36px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-muted)",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-brand)";
                  e.currentTarget.style.borderColor = "var(--color-brand)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-muted)";
                  e.currentTarget.style.borderColor = "var(--color-border)";
                }}
              >
                <Instagram size={17} />
              </a>

              <a
                href="https://youtube.com/@ganeshghatti"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                style={{
                  display: "inline-flex",
                  width: "36px",
                  height: "36px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-muted)",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-brand)";
                  e.currentTarget.style.borderColor = "var(--color-brand)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-muted)";
                  e.currentTarget.style.borderColor = "var(--color-border)";
                }}
              >
                <Youtube size={17} />
              </a>

              <a
                href="https://github.com/thesquirreltech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  display: "inline-flex",
                  width: "36px",
                  height: "36px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-muted)",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-brand)";
                  e.currentTarget.style.borderColor = "var(--color-brand)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-muted)";
                  e.currentTarget.style.borderColor = "var(--color-border)";
                }}
              >
                <Github size={17} />
              </a>

              <a
                href="https://www.linkedin.com/company/the-squirrel-technologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  display: "inline-flex",
                  width: "36px",
                  height: "36px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-muted)",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-brand)";
                  e.currentTarget.style.borderColor = "var(--color-brand)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-muted)";
                  e.currentTarget.style.borderColor = "var(--color-border)";
                }}
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h4 style={{
              fontSize: "0.875rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "var(--color-dark)",
              marginBottom: "1.25rem"
            }}>
              AI Solutions
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.875rem", color: "var(--color-slate)" }}>
              <li>
                <a href="https://thesquirrel.tech/solutions/ai-receptionist" style={{ fontWeight: 600, color: "var(--color-brand)" }}>
                  AI Receptionist
                </a>
              </li>
              <li>
                <a href="https://thesquirrel.tech/solutions/ai-sales-agent">
                  AI Sales Agent
                </a>
              </li>
              <li>
                <a href="https://thesquirrel.tech/solutions/ai-customer-service-chatbot">
                  Customer Service Chatbot
                </a>
              </li>
              <li>
                <a href="https://thesquirrel.tech/solutions/ai-workflow-automation">
                  AI Workflow Automation
                </a>
              </li>
              <li>
                <a href="https://thesquirrel.tech/solutions/accounts-payable-automation">
                  Accounts Payable Automation
                </a>
              </li>
              <li>
                <a href="https://thesquirrel.tech/solutions/ai-recruiting-software">
                  AI Interview Platform
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Applications */}
          <div>
            <h4 style={{
              fontSize: "0.875rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "var(--color-dark)",
              marginBottom: "1.25rem"
            }}>
              Applications
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.875rem", color: "var(--color-slate)" }}>
              <li>
                <a href="https://thesquirrel.tech/applications/ai-receptionist-for-salons-and-spas">
                  AI Receptionist for Salons & Spas
                </a>
              </li>
              <li>
                <a href="https://thesquirrel.tech/applications/ai-receptionist-for-dentists">
                  AI Receptionist for Dentists
                </a>
              </li>
              <li>
                <a href="https://thesquirrel.tech/applications/ai-receptionist-for-clinics">
                  AI Receptionist for Clinics
                </a>
              </li>
              <li>
                <a href="https://thesquirrel.tech/applications/ai-receptionist-for-hvac-companies">
                  AI Receptionist for HVAC Companies
                </a>
              </li>
              <li>
                <a href="https://thesquirrel.tech/applications/ai-receptionist-for-law-firms">
                  AI Receptionist for Law Firms
                </a>
              </li>
              <li>
                <a href="https://thesquirrel.tech/applications/ai-receptionist-for-property-management">
                  AI Receptionist for Property Management
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact */}
          <div>
            <h4 style={{
              fontSize: "0.875rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "var(--color-dark)",
              marginBottom: "1.25rem"
            }}>
              Direct Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.875rem", color: "var(--color-slate)" }}>
              <div>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--color-muted)", fontWeight: 700 }}>WhatsApp</span>
                <div>
                  <a href="https://wa.me/919449610077" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700, color: "var(--color-brand)" }}>
                    +91 94496 10077
                  </a>
                </div>
              </div>
              <div>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--color-muted)", fontWeight: 700 }}>Email</span>
                <div>
                  <a href="mailto:ganesh@thesquirrel.tech" style={{ fontWeight: 700, color: "var(--color-dark)" }}>
                    ganesh@thesquirrel.tech
                  </a>
                </div>
              </div>
              <div>
                <a
                  href="https://calendly.com/ganeshghatti/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: "0.8125rem", padding: "0.6rem 1.1rem", width: "100%" }}
                >
                  <Calendar size={15} />
                  <span>Book Free Discovery Call</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & open source attribution */}
        <div style={{
          borderTop: "1px solid var(--color-border)",
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          fontSize: "0.8125rem",
          color: "var(--color-muted)"
        }}>
          <div>
            © {new Date().getFullYear()} <a href="https://thesquirrel.tech" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-dark)", fontWeight: 700 }}>The Squirrel Technologies</a>. All rights reserved.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span>Built with</span>
            <Heart size={14} color="var(--color-brand)" fill="var(--color-brand)" />
            <span>as an Open Source Tool for growing businesses.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
