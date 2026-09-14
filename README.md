# AI Receptionist ROI Calculator


[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](https://opensource.org/licenses/MIT)
[![Built by The Squirrel](https://img.shields.io/badge/Built%20by-The%20Squirrel%20Technologies-a74911)](https://thesquirrel.tech)

**→ [Try the live calculator](https://thesquirreltech.github.io/roi-calculator/)**

A free, open-source tool that helps businesses calculate exactly how much an AI receptionist would save them — in staff hours, missed call revenue, and net annual ROI. Built and maintained by [The Squirrel Technologies](https://thesquirrel.tech), a product and AI development studio based in Bengaluru.

---

## What this does

Most businesses considering an AI receptionist don't have a number. They know calls get missed, they know front-desk staff time is expensive, but they've never actually modeled the math.

This calculator fixes that. You enter your call volume, average hourly rate, and current missed-call rate — it outputs your monthly hours recovered, direct labor savings, missed call revenue salvage, estimated AI platform costs, and a clean net ROI with payback period in days.

It runs entirely in the browser. No sign-up, no data collection, nothing sent to a server.

---

## Features

- **8 industry presets** — Salons & Spas, Dental, Medical Clinics, HVAC, Law Firms, Property Management, Veterinary, Restaurants. Each preset loads realistic benchmarks for that vertical.
- **Multi-currency** — USD, EUR, GBP, INR, CAD, AUD. Switches instantly.
- **Full financial model** — staff hours recovered, direct labor cost savings, missed call revenue, AI platform cost estimate, net ROI, payback period in days.
- **Print / PDF report** — one click exports a clean stakeholder-ready summary.
- **Embeddable widget** — any agency, tech blog, or client portal can drop in an iframe and the calculator runs inside their site with full attribution.
- **Schema.org structured data** — `SoftwareApplication`, `FAQPage`, and `Organization` schemas baked in for SEO.

---

## Embedding on your site

If you run a blog, agency, or SaaS tool and want to give your audience an interactive ROI calculator, paste this wherever you want it to appear:

```html
<iframe
  src="https://thesquirreltech.github.io/roi-calculator/"
  width="100%"
  height="750"
  style="border:none; border-radius:16px; box-shadow:0 10px 30px rgba(0,0,0,0.08);"
  title="AI Receptionist ROI Calculator by The Squirrel Technologies"
  loading="lazy">
</iframe>
<p style="font-size:12px; color:#64748b; text-align:center; margin-top:8px;">
  Powered by <a href="https://thesquirrel.tech/solutions/ai-receptionist" target="_blank" rel="noopener noreferrer" style="color:#a74911; font-weight:600;">The Squirrel Technologies — AI Receptionist</a>
</p>
```

---

## Running locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
# Build static export (what gets deployed to GitHub Pages)
npm run build
```

Output goes to `./out`.

---

## Deploying to GitHub Pages

The workflow in `.github/workflows/deploy.yml` handles everything automatically.

1. Push to `main`
2. Go to **Settings → Pages** in your repo
3. Set **Source** to **GitHub Actions**

That's it. Every subsequent push to `main` triggers a rebuild and redeploy.

If you fork this to a subpath repo (e.g. `username.github.io/roi-calculator/`), set a repository variable `NEXT_PUBLIC_BASE_PATH=/roi-calculator` so asset paths resolve correctly.

---

## Stack

- [Next.js 14](https://nextjs.org/) with `output: 'export'` for fully static output
- TypeScript
- Lucide React for icons
- canvas-confetti for the ROI celebration animation
- GitHub Actions for CI/CD → GitHub Pages

---

## Related

These are the solution and application pages on thesquirrel.tech that this calculator directly supports:

- [AI Receptionist](https://thesquirrel.tech/solutions/ai-receptionist)
- [AI Receptionist for Salons & Spas](https://thesquirrel.tech/applications/ai-receptionist-for-salons-and-spas)
- [AI Receptionist for Dentists](https://thesquirrel.tech/applications/ai-receptionist-for-dentists)
- [AI Receptionist for Clinics](https://thesquirrel.tech/applications/ai-receptionist-for-clinics)
- [AI Receptionist for HVAC Companies](https://thesquirrel.tech/applications/ai-receptionist-for-hvac-companies)
- [AI Receptionist for Law Firms](https://thesquirrel.tech/applications/ai-receptionist-for-law-firms)
- [AI Receptionist for Property Management](https://thesquirrel.tech/applications/ai-receptionist-for-property-management)
- [AI Receptionist for Veterinary Clinics](https://thesquirrel.tech/applications/ai-receptionist-for-veterinary-clinics)
- [AI Receptionist for Restaurants](https://thesquirrel.tech/applications/ai-receptionist-for-restaurants)
- [AI Sales Agent](https://thesquirrel.tech/solutions/ai-sales-agent)
- [AI Workflow Automation](https://thesquirrel.tech/solutions/ai-workflow-automation)
- [Custom AI Development](https://thesquirrel.tech/solutions/custom-ai-development)

---

## Need a custom AI receptionist built?

The Squirrel builds and deploys production AI receptionists and voice agents in under 15 days.

- **Website:** [thesquirrel.tech](https://thesquirrel.tech)
- **Book a call:** [calendly.com/ganeshghatti/discovery-call](https://calendly.com/ganeshghatti/discovery-call)
- **WhatsApp:** [+91 94496 10077](https://wa.me/919449610077)
- **Email:** [ganesh@thesquirrel.tech](mailto:ganesh@thesquirrel.tech)

---

## License

MIT. See [LICENSE](LICENSE).
