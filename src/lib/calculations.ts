export interface CalculatorInputs {
  monthlyCalls: number;
  callDuration: number; // minutes
  staffHourlyRate: number;
  missedCallRate: number; // % of total calls missed/after-hours
  customerValue: number; // average revenue per booking/lead
  automationRate: number; // % handled completely by AI without human intervention
  missedConversionRate: number; // % of captured missed calls converted
}

export interface CalculatorResults {
  // Hours
  totalCallHoursMonthly: number;
  recoveredHoursMonthly: number;
  recoveredHoursAnnual: number;
  
  // Labor Financials
  laborSavingsMonthly: number;
  laborSavingsAnnual: number;

  // Missed Calls Financials
  missedCallsMonthly: number;
  convertedBookingsMonthly: number;
  missedRevenueMonthly: number;
  missedRevenueAnnual: number;

  // AI Cost Estimate (Transparent The Squirrel platform + voice usage model)
  estimatedMonthlyAICost: number;
  estimatedAnnualAICost: number;

  // Total Net Benefit & ROI
  totalMonthlyBenefit: number;
  totalAnnualBenefit: number;
  netAnnualBenefit: number;
  roiMultiple: number;
  roiPercentage: number;
  paybackDays: number;
}

export function calculateROI(inputs: CalculatorInputs): CalculatorResults {
  const {
    monthlyCalls,
    callDuration,
    staffHourlyRate,
    missedCallRate,
    customerValue,
    automationRate,
    missedConversionRate
  } = inputs;

  // 1. Time Calculations
  const totalCallHoursMonthly = Math.round(((monthlyCalls * callDuration) / 60) * 10) / 10;
  const recoveredHoursMonthly = Math.round((totalCallHoursMonthly * (automationRate / 100)) * 10) / 10;
  const recoveredHoursAnnual = Math.round(recoveredHoursMonthly * 12);

  // 2. Direct Labor Savings
  const laborSavingsMonthly = Math.round(recoveredHoursMonthly * staffHourlyRate);
  const laborSavingsAnnual = Math.round(laborSavingsMonthly * 12);

  // 3. Missed Call Capture & Booking Recovery
  const missedCallsMonthly = Math.round(monthlyCalls * (missedCallRate / 100));
  // AI picks up 100% of missed calls, converting a percentage into confirmed appointments/leads
  const convertedBookingsMonthly = Math.round(missedCallsMonthly * (missedConversionRate / 100) * 10) / 10;
  const missedRevenueMonthly = Math.round(convertedBookingsMonthly * customerValue);
  const missedRevenueAnnual = Math.round(missedRevenueMonthly * 12);

  // 4. AI Receptionist Platform & Telecom Estimate (transparent model)
  // Base infrastructure & AI agent ($149) + telephony minutes (~$0.18/call handled)
  const estimatedMonthlyAICost = Math.max(149, Math.round(149 + (monthlyCalls * (automationRate / 100) * 0.18)));
  const estimatedAnnualAICost = estimatedMonthlyAICost * 12;

  // 5. Net Benefits & ROI
  const totalMonthlyBenefit = laborSavingsMonthly + missedRevenueMonthly;
  const totalAnnualBenefit = laborSavingsAnnual + missedRevenueAnnual;
  const netAnnualBenefit = Math.max(0, totalAnnualBenefit - estimatedAnnualAICost);

  const roiMultiple = estimatedAnnualAICost > 0 ? Math.round((netAnnualBenefit / estimatedAnnualAICost) * 10) / 10 : 0;
  const roiPercentage = Math.round(roiMultiple * 100);

  // Payback period in days: How many days of benefit cover the monthly cost
  const paybackDays = totalMonthlyBenefit > 0
    ? Math.max(1, Math.min(60, Math.round((estimatedMonthlyAICost / (totalMonthlyBenefit / 30)))))
    : 30;

  return {
    totalCallHoursMonthly,
    recoveredHoursMonthly,
    recoveredHoursAnnual,
    laborSavingsMonthly,
    laborSavingsAnnual,
    missedCallsMonthly,
    convertedBookingsMonthly,
    missedRevenueMonthly,
    missedRevenueAnnual,
    estimatedMonthlyAICost,
    estimatedAnnualAICost,
    totalMonthlyBenefit,
    totalAnnualBenefit,
    netAnnualBenefit,
    roiMultiple,
    roiPercentage,
    paybackDays
  };
}

export function formatCurrency(amount: number, symbol: string = "$"): string {
  if (amount >= 1000000) {
    return `${symbol}${(amount / 1000000).toFixed(1)}M`;
  }
  return `${symbol}${amount.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}
