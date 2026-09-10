# AI Receptionist ROI & Labor Value Calculator

[![Deploy to GitHub Pages](https://github.com/thesquirreltech/roi-calculator/actions/workflows/deploy.yml/badge.svg)](https://github.com/thesquirreltech/roi-calculator/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](https://opensource.org/licenses/MIT)
[![Powered by The Squirrel](https://img.shields.io/badge/Powered%20By-The%20Squirrel%20Technologies-a74911)](https://thesquirrel.tech)

An open-source, enterprise-grade **AI Receptionist ROI & Value Calculator** built by [The Squirrel Technologies](https://thesquirrel.tech). 

Engineered with Next.js for **static export (`output: 'export'`)** and optimized for **GitHub Pages hosting** with major SEO advantages: Schema.org structured data (`SoftwareApplication`, `FAQPage`, `Organization`), dynamic industry benchmarks, multi-currency support, and copy-paste embeddable widgets.

---

## ⚡ Live Features

- **8 Realistic Industry Presets**: Pre-configured benchmarks for Salons & Spas, Dental Practices, Medical Clinics, HVAC & Home Services, Law Firms, Property Management, Veterinary Clinics, and Restaurants.
- **Multi-Currency Support**: Instant conversion across USD ($), EUR (€), GBP (£), INR (₹), CAD (C$), and AUD (A$).
- **Comprehensive Financial Modeling**:
  - Front-desk staff hours recovered per month & year
  - Direct labor cost savings
  - Missed call revenue salvage (converts after-hours abandoned calls)
  - Transparent AI platform + voice handling cost estimation
  - Net annual ROI multiple and payback period in days
- **1-Click PDF / Print Report**: Formatted clean summary report for stakeholder buy-in.
- **Embeddable Widget**: Third-party sites, agency partners, and tech blogs can easily embed the calculator via iframe or snippet.
- **Brand Consistency**: Uses the design system, color palette (`#a74911` burnt copper, `#1a1f2c` deep slate), and typography of [thesquirrel.tech](https://thesquirrel.tech).

---

## 🚀 Embedding on Your Website

You can embed this calculator on any website, blog, or client portal with this simple snippet:

```html
<iframe 
  src="https://thesquirrel.tech/embed/" 
  width="100%" 
  height="750" 
  style="border:none; border-radius:16px; box-shadow:0 10px 30px rgba(0,0,0,0.08);" 
  title="AI Receptionist ROI Calculator by The Squirrel Technologies"
  loading="lazy">
</iframe>
<p style="font-size:12px; color:#64748b; text-align:center; margin-top:8px;">
  Powered by <a href="https://thesquirrel.tech/solutions/ai-receptionist" target="_blank" rel="noopener noreferrer" style="color:#a74911; font-weight:600;">The Squirrel Technologies AI Receptionist</a>
</p>
```

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build Static Export (for GitHub Pages)
```bash
npm run build
```
This outputs a completely self-contained static website in the `./out` directory.

---

## 🌐 Deploying to GitHub Pages

This repository includes a pre-configured GitHub Actions workflow in `.github/workflows/deploy.yml`.

To deploy:
1. Push this code to your GitHub repository on branch `main`.
2. Go to **Settings** > **Pages** in your GitHub repository.
3. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
4. The workflow will automatically build the Next.js app and publish it to GitHub Pages.

If deploying to a repository subpath (e.g. `https://<username>.github.io/<repo-name>/`), set the repository secret or variable `NEXT_PUBLIC_BASE_PATH=/<repo-name>`.

---

## 🤝 Need a Custom AI Receptionist?

The Squirrel Technologies builds, customizes, and deploys production-ready AI Receptionists and Voice Agents in under 15 days.

- **Website**: [thesquirrel.tech](https://thesquirrel.tech)
- **AI Receptionist Solution**: [thesquirrel.tech/solutions/ai-receptionist](https://thesquirrel.tech/solutions/ai-receptionist)
- **Book Discovery Call**: [calendly.com/ganeshghatti/discovery-call](https://calendly.com/ganeshghatti/discovery-call)
- **WhatsApp**: [+91 94496 10077](https://wa.me/919449610077)
- **Email**: [ganesh@thesquirrel.tech](mailto:ganesh@thesquirrel.tech)

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more details.
