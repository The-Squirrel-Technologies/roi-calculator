import { MCKINSEY_URL } from "./site";

export interface FAQItem {
  question: string;
  answer: string;
}

/** Single source for the visible FAQ and the FAQPage JSON-LD, so they can never drift apart. */
export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How does an AI receptionist save front-desk time?",
    answer:
      "It answers calls that reach your line and resolves routine ones itself, such as bookings, rescheduling, opening hours and directions, and hands anything complex to a person. This calculator applies your containment assumption only to calls that were actually answered, because missed calls never used any staff time.",
  },
  {
    question: "How is the ROI calculated?",
    answer:
      "Monthly benefit is staff time freed (hours saved × hourly cost) plus gross profit from missed calls turned into bookings. Monthly cost is the AI platform fee plus usage on every call the AI handles. Net benefit is benefit minus cost, and it can be negative. Year-1 ROI is net benefit divided by total spend, including any setup cost you enter.",
  },
  {
    question: "What does McKinsey say about AI in customer care?",
    answer:
      "In The economic potential of generative AI, McKinsey estimates that applying generative AI to customer care functions could increase productivity at a value ranging from 30 to 45 percent of current function costs, and that it could further reduce the volume of human-serviced contacts by up to 50 percent, depending on a company's existing level of automation. This calculator uses the 50 percent figure as the ceiling for the AI resolve slider. Source: " +
      MCKINSEY_URL +
      ".",
  },
  {
    question: "Can I embed this calculator on my own website?",
    answer:
      "Yes. It is free under the MIT license. Use the Get Embed Code button for an iframe snippet that includes an attribution link, or fork the repository on GitHub.",
  },
];
