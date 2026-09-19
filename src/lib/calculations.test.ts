import { test } from "node:test";
import assert from "node:assert/strict";
import { calculateROI, sanitizeInputs, formatPayback, CalculatorInputs } from "./calculations";

const base: CalculatorInputs = {
  monthlyCalls: 1000,
  callDuration: 5,
  staffHourlyRate: 30,
  missedCallRate: 20,
  customerValue: 100,
  automationRate: 40,
  missedConversionRate: 50,
  grossMargin: 60,
  aiMonthlyFee: 149,
  aiCostPerMinute: 0.15,
  setupCost: 0,
};
const close = (a: number, b: number, eps = 1e-9) => assert.ok(Math.abs(a - b) < eps, `${a} != ${b}`);

test("golden case matches hand calculation", () => {
  const r = calculateROI(base);
  close(r.answeredCallsMonthly, 800);
  close(r.missedCallsMonthly, 200);
  close(r.staffCallHoursMonthly, 800 * 5 / 60);
  close(r.recoveredHoursMonthly, 800 * 5 / 60 * 0.4);
  close(r.laborValueMonthly, 800); // 26.667h * 30
  close(r.bookingsRescuedMonthly, 100);
  close(r.revenueRescuedMonthly, 10000);
  close(r.profitRescuedMonthly, 6000);
  close(r.aiHandledCallsMonthly, 520); // 320 resolved + 200 missed
  close(r.aiCostMonthly, 149 + 520 * 5 * 0.15); // 539
  close(r.netMonthly, 6800 - 539);
  close(r.netAnnual, (6800 - 539) * 12);
  close(r.roiPercent!, ((6800 - 539) * 12) / (539 * 12) * 100);
  assert.equal(r.paybackMonths, 0);
});

test("missed calls consume no staff time (no double counting)", () => {
  const r = calculateROI({ ...base, missedCallRate: 100 });
  close(r.staffCallHoursMonthly, 0);
  close(r.laborValueMonthly, 0);
  const none = calculateROI({ ...base, missedCallRate: 0 });
  close(none.revenueRescuedMonthly, 0);
  close(none.staffCallHoursMonthly, 1000 * 5 / 60);
});

test("zero calls: no NaN, cost is the fixed fee, ROI is -100%", () => {
  const r = calculateROI({ ...base, monthlyCalls: 0 });
  for (const v of Object.values(r)) if (v !== null) assert.ok(Number.isFinite(v));
  close(r.aiCostMonthly, 149);
  close(r.netMonthly, -149);
  close(r.roiPercent!, -100);
});

test("negative net is reported, never clamped to zero", () => {
  const r = calculateROI({ ...base, monthlyCalls: 50, staffHourlyRate: 5, customerValue: 10 });
  assert.ok(r.netAnnual < 0);
  assert.ok(r.roiPercent! < 0);
});

test("zero spend gives null ROI, not Infinity", () => {
  const r = calculateROI({ ...base, monthlyCalls: 0, aiMonthlyFee: 0 });
  assert.equal(r.roiPercent, null);
});

test("payback with setup cost", () => {
  const r = calculateROI({ ...base, setupCost: 6261 });
  close(r.paybackMonths!, 1);
  close(r.netYearOne, (6800 - 539) * 12 - 6261);
  const bad = calculateROI({ ...base, monthlyCalls: 50, staffHourlyRate: 5, customerValue: 10, setupCost: 1000 });
  assert.equal(bad.paybackMonths, null);
  assert.equal(formatPayback(null), "Not reached");
});

test("garbage input is sanitised", () => {
  const s = sanitizeInputs({ ...base, monthlyCalls: NaN, automationRate: 500, missedCallRate: -5, customerValue: Infinity });
  assert.equal(s.monthlyCalls, 0);
  assert.equal(s.automationRate, 100);
  assert.equal(s.missedCallRate, 0);
  assert.equal(s.customerValue, 0); // non-finite falls back to the minimum
});

test("invariants hold across random inputs", () => {
  let seed = 42;
  const rnd = () => ((seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296);
  for (let n = 0; n < 5000; n++) {
    const i: CalculatorInputs = {
      monthlyCalls: rnd() * 30000, callDuration: 0.5 + rnd() * 30, staffHourlyRate: rnd() * 300,
      missedCallRate: rnd() * 100, customerValue: rnd() * 20000, automationRate: rnd() * 100,
      missedConversionRate: rnd() * 100, grossMargin: rnd() * 100, aiMonthlyFee: rnd() * 1000,
      aiCostPerMinute: rnd() * 2, setupCost: rnd() < 0.5 ? 0 : rnd() * 20000,
    };
    const r = calculateROI(i);
    for (const v of Object.values(r)) if (v !== null) assert.ok(Number.isFinite(v));
    close(r.answeredCallsMonthly + r.missedCallsMonthly, i.monthlyCalls, 1e-6);
    close(r.netMonthly, r.totalBenefitMonthly - r.aiCostMonthly, 1e-6);
    close(r.totalBenefitMonthly, r.laborValueMonthly + r.profitRescuedMonthly, 1e-6);
    assert.ok(r.profitRescuedMonthly <= r.revenueRescuedMonthly + 1e-9);
    assert.ok(r.aiHandledCallsMonthly <= i.monthlyCalls + 1e-9);
    // monotonic: more containment never lowers time saved
    const more = calculateROI({ ...i, automationRate: Math.min(100, i.automationRate + 5) });
    assert.ok(more.recoveredHoursMonthly >= r.recoveredHoursMonthly - 1e-9);
  }
});
