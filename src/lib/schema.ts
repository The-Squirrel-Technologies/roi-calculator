export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://thesquirrel.tech/#organization",
        "name": "The Squirrel Technologies",
        "url": "https://thesquirrel.tech",
        "logo": "https://thesquirrel.tech/logo.png",
        "founder": {
          "@type": "Person",
          "name": "Ganesh Ghatti"
        },
        "sameAs": [
          "https://youtube.com/@ganeshghatti",
          "https://www.instagram.com/thesquirrel.tech/",
          "https://www.linkedin.com/company/the-squirrel-technologies"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-94496-10077",
          "contactType": "customer service",
          "email": "ganesh@thesquirrel.tech"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://thesquirrel.tech/solutions/ai-receptionist-calculator/#software",
        "name": "The Squirrel AI Receptionist ROI Calculator",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All modern browsers (Web App)",
        "description": "Interactive open-source financial calculator to evaluate time saved, labor reduction, missed call recovery, and annual ROI for voice AI receptionists.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "creator": {
          "@id": "https://thesquirrel.tech/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://thesquirrel.tech/solutions/ai-receptionist-calculator/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does an AI Receptionist save front-desk labor hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The AI receptionist connects directly to your phone system and business tools (calendars, CRM, EHR, booking software). It resolves 35% to 65% of routine calls—such as booking appointments, rescheduling, directions, FAQs, and hours—without human intervention, liberating staff to focus on in-person customer care."
            }
          },
          {
            "@type": "Question",
            "name": "What is the ROI of an AI Receptionist compared to a traditional receptionist?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A full-time in-house receptionist costs between $38,000 and $65,000 annually including benefits, insurance, and payroll taxes, while only covering 40 hours per week. The Squirrel AI Receptionist operates 24/7/365 at a fraction of the cost, usually delivering an average ROI of 400% to 1,200% through labor time recovery and missed after-hours revenue capture."
            }
          },
          {
            "@type": "Question",
            "name": "How does an AI Receptionist recover lost revenue from missed calls?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Over 67% of callers who reach voicemail hang up and call a competitor instead. The Squirrel AI Receptionist picks up instantly on the first ring, answers questions naturally, qualifies the inquiry, and books appointments or logs emergency dispatches even after hours and on weekends."
            }
          },
          {
            "@type": "Question",
            "name": "Can this AI receptionist calculator be embedded on our website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! The Squirrel Technologies provides this calculator as an open-source tool. You can use our one-click embed code to add the calculator widget as an iframe or React component directly to your agency or client websites."
            }
          },
          {
            "@type": "Question",
            "name": "What happens when a caller has a complex or emergency issue?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The AI receptionist is programmed with custom business logic. When an urgent scenario occurs (such as a legal deadline, medical emergency, or water pipe burst), it performs a warm transfer to your on-call human staff member or alerts them via SMS/Slack with a full summary."
            }
          }
        ]
      }
    ]
  };
}
