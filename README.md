# Plinth & Co Homes — Luxury Real Estate Website

A premium luxury real estate developer website for **Plinth & Co Homes**, Vadodara. Built with Next.js 16, Tailwind CSS v4, Framer Motion, and GSAP.

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion + GSAP
- **Smooth Scroll:** Lenis
- **Forms:** React Hook Form
- **Language:** TypeScript

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Production build
npm run build
```

## 📁 Project Structure

```
src/
├── app/              # Pages & routes (App Router)
│   ├── api/          # API routes (enquiry form)
│   ├── projects/     # Projects listing & detail pages
│   ├── privacy/      # Privacy Policy page
│   ├── terms/        # Terms of Service page
│   ├── sitemap.ts    # Auto-generated sitemap.xml
│   └── robots.ts     # Auto-generated robots.txt
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Page sections (Hero, Legacy, Awards, etc.)
│   └── ui/           # Reusable components (Preloader, Modal, etc.)
└── data/             # Static data (projects, clients, testimonials)
```

## 🌐 Deployment

This project is deployed on **Vercel**. Push to `main` branch to trigger auto-deploy.

> **Note:** Update the domain in `src/app/sitemap.ts`, `src/app/robots.ts`, and `src/app/layout.tsx` (`metadataBase`) before deploying to production.

## 📞 Contact

**Plinth & Co Homes** — Luxury Real Estate Developer, Vadodara  
Email: info@plinthandco.com
