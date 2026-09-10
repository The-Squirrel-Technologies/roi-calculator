"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How does an AI Receptionist save front-desk labor hours?",
    answer: "The AI receptionist connects directly to your business phone line and backend booking tools (calendars, EHR, CRM). It resolves 35% to 65% of routine inbound calls—such as booking appointments, rescheduling, directions, FAQs, and hours—without human intervention, liberating staff to focus on in-person customer care."
  },
  {
    question: "What is the ROI of an AI Receptionist compared to a traditional receptionist?",
    answer: "A full-time in-house receptionist costs between $38,000 and $65,000 annually including wages, benefits, and payroll taxes, while only covering 40 hours per week. The Squirrel AI Receptionist operates 24/7/365 at a fraction of the cost, usually delivering an average ROI of 400% to 1,200% through labor time recovery and missed after-hours revenue capture."
  },
  {
    question: "How does an AI Receptionist recover lost revenue from missed calls?",
    answer: "Over 67% of callers who reach voicemail hang up and call a competitor instead. The Squirrel AI Receptionist picks up instantly on the first ring, answers questions naturally, qualifies the inquiry, and books appointments or logs emergency dispatches even after hours and on weekends."
  },
  {
    question: "Does the AI Receptionist integrate with our existing calendar, CRM, and EHR?",
    answer: "Yes. The Squirrel builds deep two-way integrations into platforms like Google Calendar, Outlook, ServiceTitan, Clio, Mindbody, Vagaro, Salesforce, HubSpot, and custom REST APIs or webhooks. When an appointment is scheduled on the phone, your team’s schedule updates in real time."
  },
  {
    question: "What happens when a caller has an emergency or requires a human?",
    answer: "The AI receptionist is governed by deterministic business rules. When an urgent triage trigger occurs (such as an acute medical symptom, legal court deadline, or burst pipe), it immediately initiates a warm telephone transfer to an on-duty staff member or sends an emergency SMS/Slack alert with caller notes and recording transcript."
  },
  {
    question: "Can we embed this open-source calculator on our agency or client websites?",
    answer: "Absolutely! The Squirrel Technologies released this calculator under the MIT license as an open-source SEO tool. Click the 'Embed Widget' button in the top navigation to grab the copy-paste iframe snippet or HTML component."
  },
  {
    question: "How quickly can The Squirrel Technologies build and launch an AI Receptionist for our business?",
    answer: "Thanks to our modular architecture, most custom AI receptionists go from discovery call to live phone testing in under 15 days. You test live calls on a dedicated sandbox number before routing any production customer calls."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ padding: "4.5rem 0", backgroundColor: "var(--color-bg-surface)" }}>
      <div className="container" style={{ maxWidth: "860px" }}>
        
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="badge-pill badge-brand" style={{ marginBottom: "0.75rem" }}>
            Frequently Asked Questions
          </span>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--color-dark)" }}>
            Everything You Need to Know
          </h2>
          <p style={{ color: "var(--color-slate)", marginTop: "0.5rem", fontSize: "1rem" }}>
            Got questions about AI receptionist economics, technical integrations, or implementation?
          </p>
        </div>

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
