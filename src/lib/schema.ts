import { FAQ_ITEMS } from "./faq";
import { MAIN_URL, RECEPTIONIST_URL, REPO_URL, SITE_URL } from "./site";

export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${MAIN_URL}/#organization`,
        name: "The Squirrel Technologies",
        url: MAIN_URL,
        logo: `${MAIN_URL}/logo.png`,
        founder: { "@type": "Person", name: "Ganesh Ghatti" },
        sameAs: [
          "https://github.com/The-Squirrel-Technologies",
          "https://www.linkedin.com/company/the-squirrel-technologies",
          "https://www.instagram.com/thesquirrel.tech/",
          "https://youtube.com/@ganeshghatti",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "AI Receptionist ROI Calculator",
        publisher: { "@id": `${MAIN_URL}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: "AI Receptionist ROI Calculator",
        url: SITE_URL,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Any (web browser)",
        description:
          "Free calculator that estimates staff hours saved, missed-call revenue recovered and year-1 ROI for an AI receptionist.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        isAccessibleForFree: true,
        license: "https://opensource.org/licenses/MIT",
        codeRepository: REPO_URL,
        creator: { "@id": `${MAIN_URL}/#organization` },
        isRelatedTo: { "@type": "Service", name: "AI Receptionist", url: RECEPTIONIST_URL },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQ_ITEMS.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}
