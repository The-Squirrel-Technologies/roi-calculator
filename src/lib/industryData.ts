export interface IndustryPreset {
  id: string;
  applicationSlug: string; // page on thesquirrel.tech for this vertical
  name: string;
  icon: string;
  monthlyCalls: number;
  callDuration: number; // minutes
  staffHourlyRate: number; // in base USD
  missedCallRate: number; // percentage (e.g., 25%)
  customerValue: number; // average booking / deal value
  automationRate: number; // planning assumption: % of answered calls the AI resolves
  missedConversionRate: number; // % of recovered missed calls converted to bookings
  automatedTasks: string[];
}

export const INDUSTRY_PRESETS: IndustryPreset[] = [
  {
    id: "salons-spas",
    applicationSlug: "ai-receptionist-for-salons-and-spas",
    name: "Salons & Spas",
    icon: "Sparkles",
    monthlyCalls: 850,
    callDuration: 3.5,
    staffHourlyRate: 22,
    missedCallRate: 32,
    customerValue: 95,
    automationRate: 48,
    missedConversionRate: 20,
    automatedTasks: [
      "Instant calendar booking & rescheduling via Vagaro / Boulevard / Fresha",
      "Service menu explanation & stylist availability lookup",
      "Automated SMS deposit collection and confirmation"
    ]
  },
  {
    id: "dentists",
    applicationSlug: "ai-receptionist-for-dentists",
    name: "Dental Practices",
    icon: "Stethoscope",
    monthlyCalls: 1200,
    callDuration: 4.5,
    staffHourlyRate: 28,
    missedCallRate: 26,
    customerValue: 380,
    automationRate: 42,
    missedConversionRate: 18,
    automatedTasks: [
      "Dentrix / Eaglesoft / Open Dental booking sync",
      "Emergency dental triage routing with on-call doctor escalation",
      "Pre-op intake reminders & directions dispatch"
    ]
  },
  {
    id: "medical-clinics",
    applicationSlug: "ai-receptionist-for-clinics",
    name: "Clinics & Med Spas",
    icon: "HeartPulse",
    monthlyCalls: 1600,
    callDuration: 5.0,
    staffHourlyRate: 30,
    missedCallRate: 29,
    customerValue: 450,
    automationRate: 40,
    missedConversionRate: 15,
    automatedTasks: [
      "HIPAA-compliant caller information capture and triage",
      "Consultation scheduling directly into EHR/EMR",
      "Instant warm transfer to triage nurse for urgent medical concerns"
    ]
  },
  {
    id: "hvac-contractors",
    applicationSlug: "ai-receptionist-for-hvac-companies",
    name: "HVAC & Home Services",
    icon: "Flame",
    monthlyCalls: 750,
    callDuration: 4.0,
    staffHourlyRate: 26,
    missedCallRate: 38,
    customerValue: 1200,
    automationRate: 50,
    missedConversionRate: 22,
    automatedTasks: [
      "Urgent job dispatch with ServiceTitan / Housecall Pro integration",
      "Immediate emergency lead qualification and address capture",
      "SMS confirmation with real-time technician arrival windows"
    ]
  },
  {
    id: "law-firms",
    applicationSlug: "ai-receptionist-for-law-firms",
    name: "Law Firms & Legal",
    icon: "Scale",
    monthlyCalls: 450,
    callDuration: 6.0,
    staffHourlyRate: 35,
    missedCallRate: 24,
    customerValue: 2800,
    automationRate: 35,
    missedConversionRate: 14,
    automatedTasks: [
      "Structured intake screening based on practice area criteria",
      "Clio / MyCase intake calendar synchronization",
      "Discreet emergency handoff rules to on-duty attorneys"
    ]
  },
  {
    id: "property-management",
    applicationSlug: "ai-receptionist-for-property-management",
    name: "Property Management",
    icon: "Building2",
    monthlyCalls: 1100,
    callDuration: 4.0,
    staffHourlyRate: 24,
    missedCallRate: 34,
    customerValue: 650,
    automationRate: 46,
    missedConversionRate: 16,
    automatedTasks: [
      "Automated self-guided tour & showing appointments via AppFolio / Yardi",
      "Emergency maintenance triage with vendor auto-dispatch",
      "Tenant FAQs answered accurately 24/7 without staff involvement"
    ]
  },
  {
    id: "veterinary-clinics",
    applicationSlug: "ai-receptionist-for-veterinary-clinics",
    name: "Veterinary Clinics",
    icon: "Dog",
    monthlyCalls: 950,
    callDuration: 4.5,
    staffHourlyRate: 24,
    missedCallRate: 25,
    customerValue: 220,
    automationRate: 44,
    missedConversionRate: 19,
    automatedTasks: [
      "Routine wellness, vaccine, and grooming booking automation",
      "Emergency vs routine pet symptom screening protocols",
      "Clinic hours, prescription pickup, and prep instructions guidance"
    ]
  },
  {
    id: "restaurants",
    applicationSlug: "ai-receptionist-for-restaurants",
    name: "Restaurants & Hospitality",
    icon: "Utensils",
    monthlyCalls: 1400,
    callDuration: 2.5,
    staffHourlyRate: 18,
    missedCallRate: 42,
    customerValue: 85,
    automationRate: 50,
    missedConversionRate: 22,
    automatedTasks: [
      "Direct OpenTable / Resy / SevenRooms table booking and modifications",
      "Instant answers on dietary options, parking, dress code, and opening hours",
      "Large party & event inquiries captured with immediate notification to manager"
    ]
  }
];

export interface CurrencyConfig {
  code: string;
  symbol: string;
  rateAgainstUSD: number; // approximate, for scaling example inputs only
  label: string;
}

export const CURRENCIES: CurrencyConfig[] = [
  { code: "USD", symbol: "$", rateAgainstUSD: 1.0, label: "USD ($)" },
  { code: "EUR", symbol: "€", rateAgainstUSD: 0.92, label: "EUR (€)" },
  { code: "GBP", symbol: "£", rateAgainstUSD: 0.79, label: "GBP (£)" },
  { code: "INR", symbol: "₹", rateAgainstUSD: 86.5, label: "INR (₹)" },
  { code: "CAD", symbol: "C$", rateAgainstUSD: 1.36, label: "CAD ($)" },
  { code: "AUD", symbol: "A$", rateAgainstUSD: 1.52, label: "AUD ($)" }
];
