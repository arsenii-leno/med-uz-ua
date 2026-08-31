# 🏥 med.uz.ua — Digital Infrastructure for eye clinic

[![Production Status](https://img.shields.io/badge/Status-Production%20Live-emerald?style=for-the-badge&logo=statuspage)](https://med.uz.ua)
[![Cloudflare Pages](https://img.shields.io/badge/Hosting-Cloudflare%20Edge-F38020?style=for-the-badge&logo=cloudflare)](https://pages.cloudflare.com/)
[![Astro](https://img.shields.io/badge/Framework-Astro%204.x-BC52EE?style=for-the-badge&logo=astro)](https://astro.build)
[![Core Web Vitals](https://img.shields.io/badge/CWV-100%2F100%2F100%2F100-success?style=for-the-badge&logo=googlechrome)](https://pagespeed.web.dev/)
[![Google Ads Verified](https://img.shields.io/badge/Google%20Ads-AI--Powered%20Certified-4285F4?style=for-the-badge&logo=googleads)](https://www.credential.net/966f96a1-99c6-4a13-b928-80732c562d8d)

> **Live Production URL:** [https://med.uz.ua](https://med.uz.ua)  
> Full-cycle commercial web infrastructure engineered for a specialized ophthalmology medical center in Uzhhorod, Ukraine. Headless CMS, ultra-fast(~100ms) Edge-rendered architecture, headless lead processing, and precision marketing telemetry(GTM, GA4, Ads).

---

## 📸 Visual Showcase & Performance Proofs

<!-- PLACEHOLDER 1: MAIN UI PREVIEW -->
### 🖥️ Production Interface
<img width="1459" height="823" alt="image" src="https://github.com/user-attachments/assets/cc4edc0d-8c3f-4407-b3e8-c7425c9ef930" />
*Clean, accessible, mobile-first patient interface optimized for instant appointment booking and clinical clarity.*

<!-- PLACEHOLDER 2: LIGHTHOUSE & CONVERSION METRICS (2-Column Grid) -->
### ⚡ Core Web Vitals & Conversion Telemetry

| 🚀 ~100/100 Google PageSpeed Audits | 📊 GTM / GA4 Telemetry Pipeline |
| :---: | :---: |
| <img src="https://github.com/user-attachments/assets/cd740beb-2438-4de1-8cfc-bb9cf217190d" alt="PageSpeed 100/100 Mobile" width="100%" /> | <img src="https://github.com/user-attachments/assets/fa184080-d63c-434a-b169-4f7d985f0da8" alt="GTM and GA4 Telemetry" width="100%" /> |
| <img src="https://github.com/user-attachments/assets/6c763acc-2fce-46f2-8ba5-e2d74fa33aa1" alt="PageSpeed 100/100 Desktop" width="100%" /> | <img width="1158" height="555" alt="Screenshot 2026-08-31 at 12 51 49" src="https://github.com/user-attachments/assets/b30bbaa8-38ea-4381-a852-4ba7f81599a7" />

---

## 🎯 High-Level System Architecture

```text
┌──────────────────────────────────────────────────────────────────────────────────┐
│                        CLOUDFLARE GLOBAL EDGE NETWORK                            │
│           (Zero-Cold-Start CDN • Automatic SSL • WAF & Anti-DDoS Layer)          │
└────────────────────────────────────────┬─────────────────────────────────────────┘
                                         │
                 ┌───────────────────────┴───────────────────────┐
                 ▼                                               ▼
   ┌───────────────────────────┐                   ┌───────────────────────────┐
   │    STATIC / DYNAMIC SSG   │                   │    HEADLESS LEAD ENGINE   │
   │  Astro 4.x + Tailwind CSS │                   │  Cloudflare Workers & D1/ │
   │  Dynamic `[slug]` Routes  │                   │  Nano Suites Store + API  │
   └─────────────┬─────────────┘                   └─────────────┬─────────────┘
                 │                                               │
                 ├───────────────────────────────────────────────┤
                 ▼                                               ▼
   ┌───────────────────────────┐                   ┌───────────────────────────┐
   │    TELEMETRY & TRACKING   │                   │   DISPATCH & AUTOMATION   │
   │ GTM • GA4 • Enhanced Leads│                   │ Telegram Bot API (Instant)│
   │ Smart Bidding Attribution │                   │ UTM Extraction & Sync     │
   └───────────────────────────┘                   └───────────────────────────┘
```

## 🛠️ Core Infrastructure Capabilities

### 1. ⚡ Edge-Native Architecture & Dynamic `[slug]` Content
* **Zero-JS by Default:** Pre-renders clean semantic HTML5, hydrating interactive islands only when required (sub-100ms global response time).
* **Dynamic Medical Directories:** Scalable `[slug].astro` dynamic routing architecture for ophthalmological procedures, diagnostic pricing catalogs, and clinical articles.
* **Asset Pipeline:** Automated image optimization (next-gen WebP formatting, responsive `srcset`, CSS minification).
  
> [!NOTE]
> **NO Outer Plugins Needed:** Zero third-party plugin bloat, zero security exploits, zero dependency rot.

### 2. 🛒 Headless Commerce & Headless Backend Flow
* **Lightweight Persistence:** Integrated with lightweight storage (Cloudflare D1 / KV / SQLite) for persistent booking requests without heavy database overhead.
* **Frictionless Booking Engine:** Custom headless checkout/appointment flow eliminating multi-step cart friction, max. conversions with min. heavy infrastructure.
* **Instant Telegram Bot Dispatch:** Real-time webhook delivery routing patient contact info, requested medical procedures, and complete attribution directly to doctors and clinic administration in `< 500ms` via free Tg-API.

### 3. 📈 Advanced Conversion Measurement & Ads Automation
* **Google Tag Manager (GTM) Container:** Unified telemetry script tracking click-to-call, direct messenger handoffs (Viber, Telegram), and modal submissions.
* **GA4 & Enhanced Conversions:** Full lead event tagging sending hashed first-party user data back to Google Ads for precision algorithmic bidding (*Maximize Conversion Value*, *Target ROAS*).
* **Deep UTM Attribution:** Captures source, campaign, ad group, and keyword IDs across all lead funnels.

### 4. 🔄 Cloudflare Native CI/CD & Security
* **Automated Git Deployments:** Instant preview builds and atomic production rollouts upon pushing to the `main` branch.
* **Zero-Vulnerability Footprint:** Static edge delivery inherently eliminates SQL injection, PHP exploit vectors, and WordPress plugin vulnerabilities.
* **Strict Medical Data Compliance:** Clean consent handling conforming to GDPR and Ukrainian personal data regulations.

---

## 🧰 Complete Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Core Framework** | **Astro 4.x** (Islands Architecture, Dynamic `[slug]` routes) |
| **Styling & UI** | **Tailwind CSS**, Semantic HTML5, Vanilla JS micro-interactions |
| **Edge & Serverless** | **Cloudflare Pages**, **Cloudflare Workers**, **Cloudflare D1 / KV** |
| **Automations & APIs** | **Telegram Bot API**, Webhooks, Async Lead Handlers |
| **Growth & Analytics** | **Google Tag Manager (GTM)**, **Google Analytics 4 (GA4)**, **Google Ads PMax** |
| **DevOps & Tooling** | Git, GitHub CI/CD, Chrome DevTools Performance Profiler |

---

## 🚦 To try locally:

```bash
# Clone the repository
git clone [https://github.com/arsenii-leno/med-uz-ua.git](https://github.com/arsenii-leno/med-uz-ua.git)
cd med-uz-ua

# Install dependencies
npm install

# Start local edge development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```
---

## 👨‍💻 Architecture & Engineering

**Arsenii Leno** *Double-degree Student in Software Engineering (FIIT STU Bratislava) & Law (UzhNU Faculty of Law)* *Google Certified AI-Powered Performance Ads Specialist*

* 🌐 **Portfolio & Case Studies:** [arsenii-leno.github.io](https://arsenii-leno.github.io)
* 📑 **Workfolio Hub:** [Notion Workspace](https://bouncy-pyroraptor-569.notion.site/Workfolio-16c46a8dd0cd80f28fd6c43b2b604b21)
* 💬 **Telegram:** [@Arsen_Kozaque](https://t.me/Arsen_Kozaque)
* ✉️ **Email:** [arsenii.leno.digital@gmail.com](mailto:arsenii.leno.digital@gmail.com)
---

All proprietary code, medical catalogs, branding, and assets are protected.  
Copyright © 2026 Arsenii Leno. All rights reserved.
