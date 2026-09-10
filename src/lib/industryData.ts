export interface IndustryPreset {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  monthlyCalls: number;
  callDuration: number; // minutes
  staffHourlyRate: number; // in base USD
  missedCallRate: number; // percentage (e.g., 25%)
  customerValue: number; // average booking / deal value
  automationRate: number; // conservative AI containment %
  missedConversionRate: number; // % of recovered missed calls converted to bookings
  painPoints: string[];
  automatedTasks: string[];
}

export const INDUSTRY_PRESETS: IndustryPreset[] = [
  {
    id: "salons-spas",
    name: "Salons & Spas",
    tagline: "High booking volume & weekend rescheduling",
    icon: "Sparkles",
    monthlyCalls: 850,
    callDuration: 3.5,
    staffHourlyRate: 22,
    missedCallRate: 32,
    customerValue: 95,
    automationRate: 48,
    missedConversionRate: 40,
    painPoints: [
      "Front desk interrupted during in-person client check-ins",
      "Spike in weekend & after-hours appointment requests",
      "High volume of repetitive schedule changes & price inquiries"
    ],
    automatedTasks: [
      "Instant calendar booking & rescheduling via Vagaro / Boulevard / Fresha",
      "Service menu explanation & stylist availability lookup",
      "Automated SMS deposit collection and confirmation"
    ]
  },
  {
    id: "dentists",
    name: "Dental Practices",
    tagline: "High patient lifetime value & appointment triage",
    icon: "Stethoscope",
    monthlyCalls: 1200,
    callDuration: 4.5,
    staffHourlyRate: 28,
    missedCallRate: 26,
    customerValue: 380,
    automationRate: 42,
    missedConversionRate: 35,
    painPoints: [
      "Dental assistants juggling operatory prep and front-desk phones",
      "Emergency toothache calls after 5 PM lost to generic voicemail",
      "Patients needing insurance verification and intake instructions"
    ],
    automatedTasks: [
      "Dentrix / Eaglesoft / Open Dental booking sync",
      "Emergency dental triage routing with on-call doctor escalation",
      "Pre-op intake reminders & directions dispatch"
    ]
  },
  {
    id: "medical-clinics",
    name: "Clinics & Med Spas",
    tagline: "Patient intake, triage & consultation bookings",
    icon: "HeartPulse",
    monthlyCalls: 1600,
    callDuration: 5.0,
    staffHourlyRate: 30,
    missedCallRate: 29,
    customerValue: 450,
    automationRate: 40,
    missedConversionRate: 30,
    painPoints: [
      "Nurses and staff distracted from in-person patient care",
      "High-value aesthetic consultation calls abandoned during peak hours",
      "Routine inquiries about test turnaround, hours, and directions"
    ],
    automatedTasks: [
      "HIPAA-compliant caller information capture and triage",
      "Consultation scheduling directly into EHR/EMR",
      "Instant warm transfer to triage nurse for urgent medical concerns"
    ]
  },
  {
    id: "hvac-contractors",
    name: "HVAC & Home Services",
    tagline: "High-ticket emergency dispatch & 24/7 quote capture",
    icon: "Flame",
    monthlyCalls: 750,
    callDuration: 4.0,
    staffHourlyRate: 26,
    missedCallRate: 38,
    customerValue: 1200,
    automationRate: 50,
    missedConversionRate: 45,
    painPoints: [
      "Callers with broken AC/furnace hang up and dial the next competitor",
      "Technicians interrupted on job sites to answer routine calls",
      "High cost of after-hours emergency answering services that take bad notes"
    ],
    automatedTasks: [
      "Urgent job dispatch with ServiceTitan / Housecall Pro integration",
      "Immediate emergency lead qualification and address capture",
      "SMS confirmation with real-time technician arrival windows"
    ]
  },
  {
    id: "law-firms",
    name: "Law Firms & Legal",
    tagline: "Zero tolerance for lost high-retainer prospective clients",
    icon: "Scale",
    monthlyCalls: 450,
    callDuration: 6.0,
    staffHourlyRate: 35,
    missedCallRate: 24,
    customerValue: 2800,
    automationRate: 35,
    missedConversionRate: 28,
    painPoints: [
      "Prospective personal injury or family law clients call 3 firms; first to answer wins",
      "Paralegals spending billable hours screening unqualified leads",
      "Unscreened callers demanding immediate legal advice"
    ],
    automatedTasks: [
      "Structured intake screening based on practice area criteria",
      "Clio / MyCase intake calendar synchronization",
      "Discreet emergency handoff rules to on-duty attorneys"
    ]
  },
  {
    id: "property-management",
    name: "Property Management",
    tagline: "Maintenance triage & vacant unit leasing inquiries",
    icon: "Building2",
    monthlyCalls: 1100,
    callDuration: 4.0,
    staffHourlyRate: 24,
    missedCallRate: 34,
    customerValue: 650,
    automationRate: 46,
    missedConversionRate: 32,
    painPoints: [
      "Property managers inundated with routine 'is this unit available?' calls",
      "Emergency water leaks at midnight needing urgent contractor dispatch",
      "Repetitive tenant questions regarding rent payments and parking"
    ],
    automatedTasks: [
      "Automated self-guided tour & showing appointments via AppFolio / Yardi",
      "Emergency maintenance triage with vendor auto-dispatch",
      "Tenant FAQs answered accurately 24/7 without staff involvement"
    ]
  },
  {
    id: "veterinary-clinics",
    name: "Veterinary Clinics",
    tagline: "Pet wellness bookings, vaccine records & emergency triage",
    icon: "Dog",
    monthlyCalls: 950,
    callDuration: 4.5,
    staffHourlyRate: 24,
    missedCallRate: 25,
    customerValue: 220,
    automationRate: 44,
    missedConversionRate: 38,
    painPoints: [
      "Vet techs pulled away from surgery and exams to answer routine calls",
      "Frantic pet owners calling outside clinic operating hours",
      "Repeat calls asking for vaccination records and medication refills"
    ],
    automatedTasks: [
      "Routine wellness, vaccine, and grooming booking automation",
      "Emergency vs routine pet symptom screening protocols",
      "Clinic hours, prescription pickup, and prep instructions guidance"
    ]
  },
  {
    id: "restaurants",
    name: "Restaurants & Hospitality",
    tagline: "Peak dinner rush calls, large party bookings & FAQs",
    icon: "Utensils",
    monthlyCalls: 1400,
    callDuration: 2.5,
    staffHourlyRate: 18,
    missedCallRate: 42,
    customerValue: 85,
    automationRate: 62,
    missedConversionRate: 45,
    painPoints: [
      "Phone ringing constantly during 7 PM dinner rush while host greets guests",
      "Dozens of calls asking 'Do you have outdoor seating?' or 'Are you open?'",
      "Lost private event and catering leads going to voicemail"
    ],
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
  rateAgainstUSD: number;
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
