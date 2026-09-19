/**
 * AI receptionist ROI model.
 *
 * Every money value is in the SAME currency (whatever the user selected).
 * All figures are computed at full precision and rounded only for display,
 * so the numbers shown on screen always reconcile with each other.
 */

export interface CalculatorInputs {
  monthlyCalls: number; // inbound calls per month
  callDuration: number; // average minutes per call
  staffHourlyRate: number; // fully loaded staff cost per hour
  missedCallRate: number; // % of calls that go unanswered (missed / after-hours)
  customerValue: number; // revenue per booking / client
  automationRate: number; // % of ANSWERED calls the AI resolves without staff
  missedConversionRate: number; // % of missed calls the AI turns into a booking
  grossMargin: number; // % of booking revenue kept as gross profit
  aiMonthlyFee: number; // fixed AI platform fee per month
  aiCostPerMinute: number; // usage cost per AI-handled minute
  setupCost: number; // one-time implementation cost (0 = none entered)
}

export interface CalculatorResults {
  // Volumes
  answeredCallsMonthly: number;
  missedCallsMonthly: number;
  aiHandledCallsMonthly: number;

  // Time
  staffCallHoursMonthly: number;
  recoveredHoursMonthly: number;
  recoveredHoursAnnual: number;

  // Benefit
  laborValueMonthly: number;
  bookingsRescuedMonthly: number;
  revenueRescuedMonthly: number;
  profitRescuedMonthly: number;
  totalBenefitMonthly: number;
  totalBenefitAnnual: number;

  // Cost
  aiCostMonthly: number;
  aiCostAnnual: number;

  // Bottom line
  netMonthly: number;
  netAnnual: number;
  /** Year-1 net after subtracting the one-time setup cost. */
  netYearOne: number;
  /** Year-1 return on total spend (annual AI cost + setup), as a percentage. null when spend is 0. */
  roiPercent: number | null;
  /** Months until cumulative net benefit covers setup cost. null when never (net <= 0). 0 when no setup cost. */
  paybackMonths: number | null;
}

export const LIMITS = {
  monthlyCalls: { min: 0, max: 100000 },
  callDuration: { min: 0.5, max: 60 },
  money: { min: 0, max: 1_000_000_000 },
  percent: { min: 0, max: 100 },
  aiCostPerMinute: { min: 0, max: 100 },
} as const;

function num(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
}

/** Coerces any input to a safe, in-range value so the maths can never produce NaN or Infinity. */
export function sanitizeInputs(i: CalculatorInputs): CalculatorInputs {
  return {
    monthlyCalls: num(i.monthlyCalls, LIMITS.monthlyCalls.min, LIMITS.monthlyCalls.max),
    callDuration: num(i.callDuration, LIMITS.callDuration.min, LIMITS.callDuration.max),
    staffHourlyRate: num(i.staffHourlyRate, LIMITS.money.min, LIMITS.money.max),
    missedCallRate: num(i.missedCallRate, LIMITS.percent.min, LIMITS.percent.max),
    customerValue: num(i.customerValue, LIMITS.money.min, LIMITS.money.max),
    automationRate: num(i.automationRate, LIMITS.percent.min, LIMITS.percent.max),
    missedConversionRate: num(i.missedConversionRate, LIMITS.percent.min, LIMITS.percent.max),
    grossMargin: num(i.grossMargin, LIMITS.percent.min, LIMITS.percent.max),
    aiMonthlyFee: num(i.aiMonthlyFee, LIMITS.money.min, LIMITS.money.max),
    aiCostPerMinute: num(i.aiCostPerMinute, LIMITS.aiCostPerMinute.min, LIMITS.aiCostPerMinute.max),
    setupCost: num(i.setupCost, LIMITS.money.min, LIMITS.money.max),
  };
}

export function calculateROI(raw: CalculatorInputs): CalculatorResults {
  const i = sanitizeInputs(raw);
  const missedShare = i.missedCallRate / 100;
  const containment = i.automationRate / 100;

  // Calls: a missed call never reached a person, so it consumed no staff time.
  const missedCallsMonthly = i.monthlyCalls * missedShare;
  const answeredCallsMonthly = i.monthlyCalls - missedCallsMonthly;

  // Time freed: only answered calls cost staff time, and the AI resolves a share of them.
  const staffCallHoursMonthly = (answeredCallsMonthly * i.callDuration) / 60;
  const recoveredHoursMonthly = staffCallHoursMonthly * containment;
  const laborValueMonthly = recoveredHoursMonthly * i.staffHourlyRate;

  // Revenue: the AI answers every missed call; a share becomes a booking.
  const bookingsRescuedMonthly = missedCallsMonthly * (i.missedConversionRate / 100);
  const revenueRescuedMonthly = bookingsRescuedMonthly * i.customerValue;
  const profitRescuedMonthly = revenueRescuedMonthly * (i.grossMargin / 100);

  // Cost: fixed fee plus usage on every call the AI touches (resolved answered calls + all missed calls).
  const aiHandledCallsMonthly = answeredCallsMonthly * containment + missedCallsMonthly;
  const aiCostMonthly = i.aiMonthlyFee + aiHandledCallsMonthly * i.callDuration * i.aiCostPerMinute;

  const totalBenefitMonthly = laborValueMonthly + profitRescuedMonthly;
  const netMonthly = totalBenefitMonthly - aiCostMonthly;
  const netAnnual = netMonthly * 12;
  const netYearOne = netAnnual - i.setupCost;

  const yearOneSpend = aiCostMonthly * 12 + i.setupCost;
  const roiPercent = yearOneSpend > 0 ? (netYearOne / yearOneSpend) * 100 : null;

  let paybackMonths: number | null;
  if (i.setupCost === 0) paybackMonths = 0;
  else if (netMonthly > 0) paybackMonths = i.setupCost / netMonthly;
  else paybackMonths = null;

  return {
    answeredCallsMonthly,
    missedCallsMonthly,
    aiHandledCallsMonthly,
    staffCallHoursMonthly,
    recoveredHoursMonthly,
    recoveredHoursAnnual: recoveredHoursMonthly * 12,
    laborValueMonthly,
    bookingsRescuedMonthly,
    revenueRescuedMonthly,
    profitRescuedMonthly,
    totalBenefitMonthly,
    totalBenefitAnnual: totalBenefitMonthly * 12,
    aiCostMonthly,
    aiCostAnnual: aiCostMonthly * 12,
    netMonthly,
    netAnnual,
    netYearOne,
    roiPercent,
    paybackMonths,
  };
}

export function formatMoney(amount: number, symbol: string): string {
  const rounded = Math.round(amount);
  const sign = rounded < 0 ? "-" : "";
  const abs = Math.abs(rounded);
  if (abs >= 1_000_000) return `${sign}${symbol}${(abs / 1_000_000).toFixed(2)}M`;
  return `${sign}${symbol}${abs.toLocaleString("en-US")}`;
}

export function formatNumber(value: number, digits = 0): string {
  return value.toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

export function formatPayback(months: number | null): string {
  if (months === null) return "Not reached";
  if (months === 0) return "No setup cost";
  const days = months * (365 / 12);
  if (days < 45) return `~${Math.max(1, Math.round(days))} days`;
  return `~${months.toFixed(1)} months`;
}

export function formatRoi(roi: number | null): string {
  if (roi === null) return "n/a";
  return `${Math.round(roi).toLocaleString("en-US")}%`;
}
