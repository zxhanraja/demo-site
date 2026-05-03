# 📋 Product Requirements Document (PRD)
## Luxury Real Estate Developer Website
### Reference: vihav.com | Version 1.0

---

## 1. PROJECT OVERVIEW

Build a **premium luxury real estate developer website** with a cinematic, dark aesthetic. The site must feel high-end, immersive, and conversion-focused — targeting HNI (High Net Worth Individual) buyers. The design language is inspired by vihav.com: dark backgrounds, full-bleed visuals, elegant typography, and smooth animations throughout.

---

## 2. TECH STACK

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14+ (App Router) |
| **Styling** | Tailwind CSS v3 |
| **Animations** | Framer Motion |
| **Font** | Google Fonts — `Cormorant Garamond` (serif, headings) + `Inter` (body) |
| **Icons** | Lucide React |
| **Video** | HTML5 `<video>` tag with user-provided hosted video URL |
| **Image Optimization** | Next.js `<Image>` component with `.webp` / `.avif` formats |
| **Deployment** | Vercel (recommended) |
| **Form Handling** | React Hook Form + API Route (or Formspree as fallback) |

---

## 3. COLOR PALETTE & DESIGN TOKENS

```css
/* Base Colors */
--color-bg:         #080808;   /* Near-black background */
--color-surface:    #111111;   /* Cards, elevated surfaces */
--color-border:     #1f1f1f;   /* Subtle borders */

/* Text */
--color-text-primary:   #F5F0E8;  /* Warm white for headings */
--color-text-secondary: #A89880;  /* Muted gold for subtext */
--color-text-muted:     #555555;  /* Disabled / helper text */

/* Accent */
--color-gold:       #C9A96E;   /* Gold accent — CTA buttons, highlights */
--color-gold-light: #E8D5B0;   /* Lighter gold for hover states */

/* Overlays */
--overlay-dark:     rgba(0,0,0,0.55);
--overlay-gradient: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%);
```

---

## 4. TYPOGRAPHY

```css
/* Headings — Cormorant Garamond */
h1 { font-size: clamp(3rem, 8vw, 7rem); font-weight: 300; letter-spacing: -0.02em; }
h2 { font-size: clamp(2rem, 5vw, 4rem); font-weight: 300; letter-spacing: -0.01em; }
h3 { font-size: clamp(1.2rem, 2.5vw, 1.8rem); font-weight: 400; }

/* Body — Inter */
body { font-size: 1rem; font-weight: 300; line-height: 1.7; }

/* Label / Tag text */
.label { font-size: 0.7rem; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; }
```

---

## 5. PAGE STRUCTURE & SECTIONS

### 5.1 — NAVBAR (Sticky)

**Behavior:**
- Transparent on page load, transitions to `rgba(0,0,0,0.85)` with `backdrop-filter: blur(12px)` on scroll (after 80px)
- Sticky at top, `z-index: 50`

**Layout:**
```
[LOGO — left]                    [NAV LINKS — center]       [ENQUIRE CTA — right]
```

**Nav Links:** Projects | About | Awards | Gallery | Contact

**ENQUIRE button:** Gold border, transparent background → fills gold on hover. Opens a modal/drawer with the lead form.

**Mobile:** Hamburger menu → full-screen slide-in overlay with nav links and contact info.

---

### 5.2 — HERO SECTION (Full Screen)

**Layout:** Full viewport height (`100vh`), full width

**Background:**
- **Video background** using user-provided video URL
- Implement as:
```jsx
<video
  src="[USER_PROVIDED_VIDEO_URL]"
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
/>
```
- Dark overlay on top: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)`

**Content (centered or bottom-left aligned):**
```
[SMALL LABEL — uppercase, letter-spaced, gold color]
  e.g. "Defining Luxury Since 1990"

[MAIN HEADLINE — h1, serif, white, very large]
  e.g. "Curated
        Collections"
  (word-by-word fade-in animation using Framer Motion)

[SUBLINE — italic, muted white]
  e.g. "Luxury Homes crafted for modern living"

[TWO BUTTONS]
  [Explore Projects — gold filled]    [Watch Film — outline, plays video in modal]
```

**Animation:** Each word of the heading fades in with `staggerChildren: 0.15s` using Framer Motion.

**Scroll indicator:** Animated chevron/arrow at bottom center, fades out on scroll.

---

### 5.3 — LEGACY / ABOUT SECTION

**Layout:** Two-column grid on desktop, stacked on mobile

**Left Column (Text):**
```
[SMALL LABEL]  "The [Company] Legacy"

[H2 HEADING — animated on scroll]
  "Designing timeless spaces
   with Enduring Values."

[BODY TEXT — 3-4 lines]
  Brief company description. Mention years of experience,
  types of properties (apartments, penthouses, commercial),
  location, and brand promise.

[STATS ROW — 3 stats]
  [30+ Years]    [50+ Projects]    [500+ Families]
  Experience      Delivered         Served
```

**Right Column:**
- Lead capture form (see Section 5.3a below)

**Animation:** Left column slides in from left, right column from right on scroll entry.

---

### 5.3a — LEAD CAPTURE FORM (Inline in About Section)

```
HEADING: "Begin Your Conversation"

FIELDS:
  - Full Name (text input)
  - Phone Number (with country flag + code selector, default: +91)
  - Email (email input)
  - Budget (dropdown): 
      50 Lacs and below | 50L–1Cr | 1Cr–1.5Cr | 1.5Cr–2Cr | 2Cr+
  - Category (dropdown): Residential | Commercial
  - Message (textarea, optional)

SUBMIT BUTTON: "Submit Request" — gold background, full width

VALIDATION: Required fields — Name, Phone, Budget, Category
ON SUCCESS: Show inline success message "We'll reach out shortly ✓"
```

**Form styling:** Dark background `#111`, gold borders on focus, white text.

---

### 5.4 — AWARD / RECOGNITION SECTION

**Layout:** Split — image left (certificate/trophy visual), text right

**Content:**
```
[SMALL LABEL]  "Award & Recognition"
[H2]           "Excellence in Lifestyle Real Estate Development"
[BODY]         Description of the award won — name of awarding body, year, what it's for.
[QUOTE BLOCK]  A quote from leadership about the recognition.

[TWO STATS PILLS]
  [2025 — Year]    [Awarding Body Name — Organizer]
```

**Design:** Certificate image displayed at slight angle with a soft glow shadow.

---

### 5.5 — FEATURED PROJECTS SECTION

**Layout:** Section header + horizontal scroll or grid of project cards

**Section header:**
```
[LABEL]   "Our Collections"
[H2]      "Finest Developments"
[TAB FILTERS]  All | Residential | Commercial | Upcoming
```

**Project Card:**
```
┌────────────────────────────┐
│   [Full bleed image/video] │  ← hover: scale(1.03), video autoplay on hover
│                            │
│  [STATUS BADGE] — Upcoming │
│  [PROJECT LOGO or NAME]    │
│  [Config] 4BHK | Penthouse │
│  [Area] 5772 Sq.Ft+        │
│  [Location] City, Area     │
│  [View Details →]          │
└────────────────────────────┘
```

**Cards:** Rounded corners (`border-radius: 12px`), dark surface `#111`, gold accent on hover. On hover, show a video clip (if provided by user via URL) that autoplays.

**Video on card hover:**
```jsx
onMouseEnter={() => videoRef.current.play()}
onMouseLeave={() => videoRef.current.pause()}
```

---

### 5.6 — CLIENT LOGO MARQUEE

**Layout:** Full-width, auto-scrolling infinite loop (no pause on hover)

**Implementation:**
```jsx
// Two identical rows of logos side by side, animating with CSS
// translateX from 0 to -50% continuously
// Use: @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
```

**Section header:**
```
[LABEL]  "Our Clients"
[H2]     "Brands that trusted [Company Name]"
```

**Logo style:** Grayscale by default, transitions to full color on hover. White logos on dark bg.

---

### 5.7 — SKYLINE / MAP SECTION (Brand Territory)

**Layout:** Dark section, large heading, city skyline SVG or image at bottom

**Content:**
```
[LABEL]  "The Authority in Luxury"
[H2]     "Transforming the skyline of [City]"

[LOCATION TAGS — horizontally arranged]
  [Area 1]  [Area 2]  [Area 3]  [Area 4]
  (clicking filters the projects section or scrolls to projects)

[CITY SKYLINE ILLUSTRATION]
  — White/outline style cityscape image positioned at bottom of section
  — Parallax scroll effect (moves slower than page on scroll)
```

---

### 5.8 — TESTIMONIALS SECTION

**Layout:** Single testimonial displayed at a time with prev/next navigation

**Card content:**
```
[LARGE QUOTE MARK — gold, decorative]
[QUOTE TEXT — italic, serif, large]
[DIVIDER LINE]
[CLIENT NAME — bold]
[PROPERTY / PROJECT — muted gold]
[OPTIONAL: Client photo — circular avatar]
```

**Controls:** Arrow buttons left/right + dot indicators. Auto-advance every 6s.

**Animation:** Fade transition between quotes.

---

### 5.9 — FOOTER

**Layout:** Dark `#080808`, 4-column grid on desktop, stacked on mobile

```
[LOGO]
[Tagline]
[Email] [Phone]

Column 1 — Company
  Projects | About Us | Awards | One [Brand] | Rentals

Column 2 — More
  Pre-leased | Blog | Careers | Contact Us

Column 3 — Explore Projects
  3 BHK Flats | 4 BHK Flats | 5 BHK Flats
  Penthouses | Bungalows | Shops | Showrooms | Offices

Column 4 — Connect
  [Social Icons: Instagram, LinkedIn, YouTube, WhatsApp]
  [WhatsApp floating CTA button]
```

**Bottom bar:**
```
© 2025 [Company Name]. All Rights Reserved.    Privacy Policy | Terms of Use
```

---

## 6. ANIMATIONS & INTERACTIONS

### Scroll-triggered Animations (Framer Motion)
```jsx
// Reusable reveal variant
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

// Usage
<motion.div
  variants={fadeUpVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
>
```

### Text Animation (Heading Word-by-Word)
```jsx
const sentence = "Designing timeless spaces".split(" ");
// Map each word into a motion.span with staggerChildren
```

### Smooth Scroll
```js
// In globals.css
html { scroll-behavior: smooth; }
```

### Hover States
- Buttons: gold fill + slight scale `(1.02)`
- Cards: `translateY(-4px)` + shadow deepens
- Nav links: underline slide-in from left

### Page Transitions
- Use Framer Motion `AnimatePresence` for route changes
- Fade in/out: `opacity 0→1`, duration `0.4s`

---

## 7. VIDEO IMPLEMENTATION

The client will **directly provide video files** which must be placed in the `/public/videos/` folder of the project. No external URLs needed.

### Folder Structure for Videos
```
public/
└── videos/
    ├── hero.mp4               ← Main hero background video
    ├── hero.webm              ← WebM version for better browser support (optional but recommended)
    ├── keystone-select.mp4    ← Per-project card hover video (named after project slug)
    ├── skymont.mp4
    └── watch-film.mp4         ← Full brand film for the modal
```

> ⚠️ **Video Format Guidelines for client:**
> - Format: `.mp4` (H.264 codec) — works everywhere
> - Hero video resolution: 1920×1080 minimum
> - Hero video duration: 15–30 seconds (looping)
> - File size: Keep hero video under **15MB** using HandBrake or similar compressor
> - Card hover videos: Keep under **5MB** each

### Hero Background Video
```jsx
<video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="absolute inset-0 w-full h-full object-cover z-0"
>
  <source src="/videos/hero.webm" type="video/webm" />
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>
```

### Project Card Hover Video
```jsx
<video
  ref={videoRef}
  muted
  loop
  playsInline
  preload="none"                         // only loads when needed
  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
>
  <source src={`/videos/${project.slug}.mp4`} type="video/mp4" />
</video>
```

### "Watch Film" Modal Video
```jsx
<video
  controls
  autoPlay
  playsInline
  className="w-full h-full object-contain"
>
  <source src="/videos/watch-film.mp4" type="video/mp4" />
</video>
```
- Triggered by "Watch Film" button click
- Full-screen dark overlay modal
- Close with ESC key or clicking outside the video
- On mobile: video plays inline (no fullscreen forced)

### In `/data/projects.js` — Reference by slug (no URL needed)
```js
export const projects = [
  {
    id: "keystone-select",
    slug: "keystone-select",         // video file = /public/videos/keystone-select.mp4
    name: "Keystone Select",
    // ... rest of fields
    // NO videoUrl field needed — auto-resolved from slug
  },
];
```

### In `/data/site.js` — Hero video path
```js
export const siteConfig = {
  heroVideo: "/videos/hero.mp4",       // local file path
  heroVideoWebm: "/videos/hero.webm",  // optional webm version
  watchFilmVideo: "/videos/watch-film.mp4",
  // ...
};
```

---

## 8. DATA STRUCTURE (Content Management)

Store all content in `/data/` folder as JS/JSON files so client can easily update.

### `/data/projects.js`
```js
export const projects = [
  {
    id: "keystone-select",
    name: "Keystone Select",
    slug: "keystone-select",
    status: "Upcoming",           // "Ready to Move" | "Under Construction" | "Upcoming"
    category: "Residential",
    type: ["4bhk", "penthouse"],
    carpetArea: "5772 Sq.Ft+",
    location: "Bhayli, Vadodara",
    thumbnail: "/images/projects/keystone-select.webp",
    videoUrl: "https://your-video-url.com/keystone.mp4",
    logo: "/images/logos/keystone-select.png",
    featured: true,
  },
  // ... more projects
];
```

### `/data/testimonials.js`
```js
export const testimonials = [
  {
    id: 1,
    quote: "Full testimonial text here...",
    name: "Mr Suhas & Family",
    designation: "Home Owners",
    project: "Skymont",
    avatar: "/images/clients/suhas.webp",
  },
];
```

### `/data/clients.js`
```js
export const clients = [
  { name: "McDonald's", logo: "/images/clients/mcdonalds.png" },
  { name: "HDFC Bank", logo: "/images/clients/hdfc.png" },
  // ...
];
```

### `/data/site.js`
```js
export const siteConfig = {
  companyName: "Your Company",
  tagline: "Defining Luxury",
  phone: "+91 XXXXX XXXXX",
  email: "hello@yourcompany.com",
  address: "Full address here",
  whatsapp: "+91XXXXXXXXXX",
  heroVideoUrl: "https://your-video-url.com/hero.mp4",
  watchFilmUrl: "https://youtube.com/embed/your-video-id",
  socialLinks: {
    instagram: "https://instagram.com/yourhandle",
    linkedin: "https://linkedin.com/company/yourcompany",
    youtube: "https://youtube.com/@yourhandle",
  },
  stats: [
    { value: "30+", label: "Years Experience" },
    { value: "50+", label: "Projects Delivered" },
    { value: "500+", label: "Families Served" },
  ],
};
```

---

## 9. ROUTING (Next.js App Router)

```
app/
├── page.jsx                    → Homepage
├── projects/
│   ├── page.jsx                → All Projects listing
│   └── [slug]/page.jsx         → Individual Project detail page
├── about/page.jsx              → About Us
├── awards/page.jsx             → Awards & Recognition
├── contact/page.jsx            → Contact
├── blog/
│   ├── page.jsx                → Blog listing
│   └── [slug]/page.jsx         → Blog post
└── api/
    └── enquiry/route.js        → Form submission handler
```

---

## 10. PROJECT DETAIL PAGE (`/projects/[slug]`)

Each project gets its own page with:

```
1. Hero — full-screen image or video
2. Project overview (name, status, location, carpet area, config)
3. Highlights / Amenities grid (icons + labels)
4. Gallery — image grid with lightbox on click
5. Floor Plans — tabbed (2BHK / 3BHK / 4BHK)
6. Location section — embedded Google Maps iframe
7. Enquiry form — sticky sidebar on desktop
8. Related Projects — 3 similar project cards
```

---

## 11. MOBILE RESPONSIVENESS

- All sections must be fully responsive — test at 375px, 768px, 1280px, 1920px
- Hero text scales down with `clamp()`
- Cards: horizontal scroll on mobile (`overflow-x: scroll`, no scrollbar visible)
- Logo marquee: single row, smaller logos on mobile
- Footer: stacked single column
- Sticky "WhatsApp" + "Call Now" bar at bottom on mobile

---

## 12. PERFORMANCE REQUIREMENTS

- Lighthouse score: **90+ on all metrics**
- Images: Use Next.js `<Image>` with `priority` on above-fold images
- Videos: `preload="none"` for all except hero (hero: `preload="auto"`)
- Fonts: `next/font/google` with `display: swap`
- LCP target: **< 2.5s** on 4G mobile
- No layout shift (CLS < 0.1)

---

## 13. SEO

```jsx
// In each page's metadata export
export const metadata = {
  title: "Luxury Real Estate Developer in [City] | [Company Name]",
  description: "Premium apartments, penthouses & commercial spaces...",
  openGraph: {
    title: "...",
    description: "...",
    images: ["/og-image.jpg"],
  },
};
```

- Add `sitemap.xml` via `app/sitemap.js`
- Add `robots.txt`
- Schema markup: `LocalBusiness` + `RealEstateAgent` JSON-LD

---

## 14. FORM SUBMISSION (API ROUTE)

```js
// app/api/enquiry/route.js
export async function POST(request) {
  const body = await request.json();
  // Send to email via Nodemailer / Resend / EmailJS
  // Also optionally POST to a CRM webhook
  return Response.json({ success: true });
}
```

Fields to capture: `name`, `phone`, `email`, `budget`, `category`, `message`, `source` (which page/section form was submitted from), `timestamp`.

---

## 15. OPTIONAL ENHANCEMENTS (Phase 2)

- [ ] Admin CMS (Sanity.io or Contentlayer) for non-technical content updates
- [ ] WhatsApp chat widget (WATI or AiSensy embed)
- [ ] Google Analytics 4 + Meta Pixel
- [ ] Cookie consent banner (GDPR)
- [ ] Blog section with MDX
- [ ] Virtual tour embed (Matterport iframe)
- [ ] Pre-leased properties page with ROI calculator
- [ ] Multi-language support (English + regional language)

---

## 16. FOLDER STRUCTURE

```
/
├── app/                        → Next.js App Router pages
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── LegacySection.jsx
│   │   ├── AwardSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── MarqueeSection.jsx
│   │   ├── SkylineSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   └── LeadForm.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── ProjectCard.jsx
│       ├── StatBadge.jsx
│       ├── VideoModal.jsx
│       └── EnquiryModal.jsx
├── data/
│   ├── projects.js
│   ├── testimonials.js
│   ├── clients.js
│   └── site.js
├── public/
│   ├── images/
│   └── fonts/
├── styles/
│   └── globals.css
├── lib/
│   └── utils.js
└── next.config.js
```

---

## 17. DELIVERABLES CHECKLIST

- [ ] Fully functional Next.js project (GitHub repo)
- [ ] All 9 homepage sections implemented
- [ ] Mobile responsive (all breakpoints)
- [ ] Working lead form with email notification
- [ ] Projects listing + detail page
- [ ] Video support via URL (hero + card hover + modal)
- [ ] Framer Motion animations on all sections
- [ ] SEO metadata on all pages
- [ ] Deployed on Vercel with custom domain setup instructions
- [ ] `README.md` with setup + how to update content

---

*Document version: 1.0 | Prepared for AI Developer handoff*
