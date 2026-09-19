# AI Receptionist ROI Calculator

Free, open-source calculator that estimates the staff hours an AI receptionist frees up, the revenue it recovers from missed calls, and the year-1 ROI. Built by [The Squirrel Technologies](https://www.thesquirrel.tech/), a product engineering studio in Bengaluru.

**Live calculator: <https://roi-calculator.thesquirrel.tech>**

## How the maths works

Per month, with every input editable:

```
answered calls    = calls × (1 − unanswered %)
hours freed       = answered calls × call length ÷ 60 × AI resolve %
staff time value  = hours freed × staff cost per hour
bookings rescued  = calls × unanswered % × booking %
profit rescued    = bookings rescued × value per booking × gross margin %
AI cost           = platform fee + (resolved answered calls + all missed calls) × call length × cost per minute
net               = staff time value + profit rescued − AI cost
year-1 ROI        = (net × 12 − setup) ÷ (AI cost × 12 + setup)
```

Missed calls use no staff time, so they are never counted as hours saved. Negative results are shown as negative. The maths lives in [`src/lib/calculations.ts`](./src/lib/calculations.ts) with tests in `calculations.test.ts`.

Context, not inputs: McKinsey estimates generative AI could raise customer-operations productivity by 30–45% of current function costs ([source](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier)). That is a cost-productivity estimate, not a per-call resolution rate. Industry presets are planning defaults, not benchmarks.

## Features

- 8 industry presets, 6 currencies
- One-page PDF report (Save PDF) with inputs, step-by-step working, results and sources
- Runs entirely in the browser: no sign-up, no data collected

## Embed it on your site

```html
<div data-squirrel-roi>
  <p style="font-size:12px;color:#64748b;text-align:center;margin-top:8px">Free <a href="https://roi-calculator.thesquirrel.tech/">AI receptionist ROI calculator</a> by <a href="https://www.thesquirrel.tech/solutions/ai-receptionist">The Squirrel Technologies</a></p>
</div>
<script src="https://roi-calculator.thesquirrel.tech/widget.js" async></script>
```

A plain iframe (`https://roi-calculator.thesquirrel.tech/embed/`) also works. Please keep the attribution link.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm test        # calculation tests
npm run build   # static export to ./out
```

## Deployment

Pushes to `main` build a static export and deploy it to GitHub Pages via [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml), served on the custom domain in `CNAME`.

## Related

- [AI Receptionist](https://www.thesquirrel.tech/solutions/ai-receptionist) for [salons & spas](https://www.thesquirrel.tech/applications/ai-receptionist-for-salons-and-spas), [dentists](https://www.thesquirrel.tech/applications/ai-receptionist-for-dentists), [clinics](https://www.thesquirrel.tech/applications/ai-receptionist-for-clinics), [HVAC companies](https://www.thesquirrel.tech/applications/ai-receptionist-for-hvac-companies), [law firms](https://www.thesquirrel.tech/applications/ai-receptionist-for-law-firms), [property management](https://www.thesquirrel.tech/applications/ai-receptionist-for-property-management), [veterinary clinics](https://www.thesquirrel.tech/applications/ai-receptionist-for-veterinary-clinics) and [restaurants](https://www.thesquirrel.tech/applications/ai-receptionist-for-restaurants)
- [AI sales agent](https://www.thesquirrel.tech/solutions/ai-sales-agent), [AI workflow automation](https://www.thesquirrel.tech/solutions/ai-workflow-automation), [custom AI development](https://www.thesquirrel.tech/solutions/custom-ai-development)
- [MVP & AI Cost Calculator](https://mvp-calculator.thesquirrel.tech) ([source](https://github.com/The-Squirrel-Technologies/mvp-calculator))
- [Book a discovery call](https://calendly.com/ganeshghatti/discovery-call) · [ganesh@thesquirrel.tech](mailto:ganesh@thesquirrel.tech)

## License

[MIT](./LICENSE)
