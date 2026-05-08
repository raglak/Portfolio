# Tech Stack Document
## Portfolio Website — Lakshya Khandelwal
### Design Reference: Portfolio Book 2020 (Love Henry, Dribbble #14219693)

**Version:** 1.0 | **Date:** April 24, 2026 | **Type:** Technical Specification

---

## 1. Stack Overview

This document defines every technology, library, tool, and service used to build and deploy Lakshya Khandelwal's portfolio website — a dark, editorial-style single-page application styled after the Portfolio Book 2020 Dribbble reference.

```
┌─────────────────────────────────────────────────────────┐
│                    PORTFOLIO WEBSITE                    │
├─────────────┬──────────────────┬───────────────────────┤
│   Frontend  │    Styling       │      Animation        │
│   React.js  │  Tailwind CSS    │   Framer Motion       │
├─────────────┴──────────────────┴───────────────────────┤
│                  Contact / Backend                      │
│              EmailJS (no server required)               │
├────────────────────────────┬────────────────────────────┤
│        Hosting             │       Analytics            │
│        Vercel              │   Google Analytics 4       │
└────────────────────────────┴────────────────────────────┘
```

**Philosophy:** No backend server. No database. Static site with zero operational overhead — free to host, easy to update, fast to load.

---

## 2. Core Framework

### 2.1 React.js (v18+)

**Why React over plain HTML/CSS:**
- Component-based architecture — each section (Hero, Projects, Skills) is an isolated, reusable component
- Easy state management for dark/light mode toggle, mobile menu open/close, contact form
- Massive ecosystem — every library needed (Framer Motion, EmailJS) has first-class React support
- Vercel is built around React/Next.js — deployment is one command

**React version:** `18.x` (not Next.js — no SSR needed for a static portfolio)

**Project bootstrap:**
```bash
npm create vite@latest lakshya-portfolio -- --template react
cd lakshya-portfolio
npm install
```

**Why Vite over Create React App:**
- 10–20x faster dev server startup
- Native ES module support
- Smaller production builds
- CRA is deprecated as of 2023

**Folder structure:**
```
src/
├── components/
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Education.jsx
│   ├── Achievements.jsx
│   └── Contact.jsx
├── data/
│   └── content.js        ← all text content lives here (easy to update)
├── assets/
│   └── resume.pdf
├── App.jsx
├── main.jsx
└── index.css             ← global CSS variables only
```

---

## 3. Styling

### 3.1 Tailwind CSS (v3)

**Why Tailwind:**
- Utility-first approach means design decisions live in the component file — no context switching between JSX and CSS files
- The custom color system from the design doc maps perfectly to Tailwind's config extension
- Dark mode via `dark:` prefix is built-in — no extra library needed
- PurgeCSS is built in — final CSS bundle is minimal (typically 5–15KB)

**Installation:**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**`tailwind.config.js` — custom design tokens:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary:   '#0A0A0A',
          secondary: '#111111',
          tertiary:  '#1A1A1A',
          rule:      '#1E1E1E',
        },
        ink: {
          primary:   '#F0EDE6',
          secondary: '#8A8780',
          muted:     '#4A4845',
        },
        accent: {
          DEFAULT: '#E8C97A',
          dim:     '#3D3220',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(56px, 10vw, 100px)', { lineHeight: '0.92', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(36px, 5vw, 60px)',   { lineHeight: '1.05', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        editorial: '3px',
        card:      '6px',
      },
    },
  },
  plugins: [],
}
```

### 3.2 Google Fonts

Three typefaces from the design doc, loaded via `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400&family=DM+Sans:wght@400;500&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet" />
```

| Font | Weights Loaded | Purpose |
|---|---|---|
| Playfair Display | 300, 400 | Hero name, section titles, project titles, metric numbers |
| DM Sans | 400, 500 | All body text, navigation, buttons, descriptions |
| JetBrains Mono | 400 | Skill tags, section index labels, tech stack badges |

**Performance note:** Use `display=swap` to prevent FOIT (flash of invisible text). Only load the exact weights needed — loading all weights adds ~200KB.

---

## 4. Animation

### 4.1 Framer Motion (v11)

**Why Framer Motion:**
- The scroll-reveal fade-ups, card hover lifts, and nav underline animations from the design doc are 5–10 lines of code with Framer Motion
- `useInView` hook handles the intersection observer logic automatically
- `AnimatePresence` handles the mobile menu slide-in/out
- Automatically respects `prefers-reduced-motion` via the `useReducedMotion` hook

**Installation:**
```bash
npm install framer-motion
```

**Key animation patterns used:**

```jsx
// Scroll reveal — used on every section
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

function Section({ children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
      {children}
    </motion.div>
  )
}
```

```jsx
// Project card hover lift (replaces CSS transition)
<motion.div
  whileHover={{ y: -4 }}
  transition={{ duration: 0.2, ease: 'easeOut' }}
>
  <ProjectCard />
</motion.div>
```

```jsx
// Hero name entrance — staggered per character (optional)
const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' }
  })
}
```

```jsx
// Respecting reduced motion
import { useReducedMotion } from 'framer-motion'

function AnimatedSection({ children }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  )
}
```

---

## 5. Contact Form

### 5.1 EmailJS

**Why EmailJS (over a backend server or Formspree):**
- Zero backend required — emails are sent directly from the browser using EmailJS's API
- Free tier: 200 emails/month (more than enough for a portfolio)
- No server to maintain, no serverless function to deploy
- Setup takes under 30 minutes

**Installation:**
```bash
npm install @emailjs/browser
```

**Setup steps:**
1. Create account at emailjs.com
2. Connect Gmail account as the email service
3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Copy the **Service ID**, **Template ID**, and **Public Key** into a `.env` file

**`.env` file:**
```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

**Contact form component:**
```jsx
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

export function ContactForm() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input name="from_name"  type="text"  placeholder="Your name"    required />
      <input name="from_email" type="email" placeholder="Your email"   required />
      <textarea name="message"             placeholder="Your message"  required />
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent ✓' : 'Send Message →'}
      </button>
    </form>
  )
}
```

---

## 6. Performance Utilities

### 6.1 React Scroll (smooth scrolling)

Navigation links scroll smoothly to sections without a router:

```bash
npm install react-scroll
```

```jsx
import { Link } from 'react-scroll'

<Link to="projects" smooth duration={600} offset={-56}>
  Projects
</Link>
```

### 6.2 React Intersection Observer (lazy loading)

Images and heavy content load only when they enter the viewport:

```bash
npm install react-intersection-observer
```

```jsx
import { useInView } from 'react-intersection-observer'

function LazySection({ children }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return <div ref={ref}>{inView ? children : <div style={{ minHeight: 200 }} />}</div>
}
```

### 6.3 Vite PWA Plugin (optional — adds offline support)

```bash
npm install -D vite-plugin-pwa
```

Adds a service worker for caching — makes the site load instantly on repeat visits.

---

## 7. SEO

### 7.1 React Helmet Async

Manages `<head>` tags (meta title, description, Open Graph) dynamically:

```bash
npm install react-helmet-async
```

```jsx
import { Helmet } from 'react-helmet-async'

<Helmet>
  <title>Lakshya Khandelwal | Python Developer & Data Engineer</title>
  <meta name="description" content="Portfolio of Lakshya Khandelwal — Python Developer, Data Engineer, and CS student building scalable data pipelines and backend systems." />
  <meta property="og:title" content="Lakshya Khandelwal | Python Developer & Data Engineer" />
  <meta property="og:description" content="Portfolio of Lakshya Khandelwal — building scalable data pipelines and backend systems." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
</Helmet>
```

---

## 8. Hosting & Deployment

### 8.1 Vercel (Primary Recommendation)

**Why Vercel:**
- Free tier covers all personal portfolio needs (unlimited bandwidth for static sites)
- Automatic deployments on every `git push` to `main`
- Global CDN — fast load times worldwide
- Built-in HTTPS with auto-renewing SSL certificate
- Preview deployments on every pull request (useful when iterating)
- First-class Vite/React support — zero config needed

**Deployment:**
```bash
# Install Vercel CLI
npm install -g vercel

# First deploy (interactive setup)
vercel

# All future deploys — just push to GitHub
git push origin main
# Vercel auto-deploys via GitHub integration
```

**`vercel.json` config (optional but recommended):**
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    }
  ]
}
```

### 8.2 Custom Domain (Optional)

Buy `lakshyakhandelwal.dev` (~$12/year on Namecheap or Google Domains). Point DNS to Vercel — takes 5 minutes.

**Alternatives to Vercel:**

| Platform | Free Tier | Best For |
|---|---|---|
| Vercel | Unlimited bandwidth | React/Vite projects (recommended) |
| Netlify | 100GB/month | Similar to Vercel, also great |
| GitHub Pages | Unlimited | Simplest setup, but no SPA rewrites without config |

---

## 9. Analytics

### 9.1 Google Analytics 4 (GA4)

Track page views, resume downloads, project link clicks, and contact form submissions — all for free.

**Installation:**
```bash
npm install react-ga4
```

**Setup in `main.jsx`:**
```jsx
import ReactGA from 'react-ga4'
ReactGA.initialize('G-XXXXXXXXXX') // Your GA4 Measurement ID
```

**Tracking events:**
```jsx
// Resume download click
ReactGA.event({ category: 'CTA', action: 'resume_download' })

// Project link click
ReactGA.event({ category: 'Projects', action: 'github_click', label: 'RetailPulse' })

// Contact form submitted
ReactGA.event({ category: 'Contact', action: 'form_submitted' })
```

---

## 10. Dev Tools & Code Quality

### 10.1 ESLint + Prettier

Consistent code formatting and linting — Vite sets up ESLint by default:

```bash
npm install -D prettier eslint-config-prettier
```

**`.prettierrc`:**
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 90
}
```

### 10.2 Git + GitHub

- All code lives in a public GitHub repository (also serves as a portfolio signal)
- Repo name: `lakshya-portfolio` or `portfolio`
- Add a detailed `README.md` — recruiters often check the repo, not just the live site

**Suggested `.gitignore` additions:**
```
.env
.env.local
dist/
node_modules/
```

---

## 11. Complete Dependency List

### 11.1 `package.json` — Production Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.0.0",
    "@emailjs/browser": "^4.3.0",
    "react-scroll": "^1.9.0",
    "react-intersection-observer": "^9.8.0",
    "react-helmet-async": "^2.0.0",
    "react-ga4": "^2.1.0"
  }
}
```

### 11.2 Dev Dependencies

```json
{
  "devDependencies": {
    "vite": "^5.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "prettier": "^3.2.0",
    "eslint": "^9.0.0",
    "eslint-config-prettier": "^9.1.0"
  }
}
```

### 11.3 Install Everything at Once

```bash
# After bootstrapping with Vite
npm install framer-motion @emailjs/browser react-scroll react-intersection-observer react-helmet-async react-ga4

npm install -D tailwindcss postcss autoprefixer prettier eslint-config-prettier
npx tailwindcss init -p
```

---

## 12. Architecture Decision Log

| Decision | Chosen | Rejected | Reason |
|---|---|---|---|
| Framework | React (Vite) | Next.js, plain HTML | SSR not needed; Vite is faster; React ecosystem |
| Styling | Tailwind CSS | Styled Components, CSS Modules | Fastest to customize; design tokens map cleanly |
| Animation | Framer Motion | GSAP, AOS.js | Best React integration; reduced-motion support built-in |
| Contact | EmailJS | Formspree, own API | No backend needed; simpler than serverless functions |
| Hosting | Vercel | Netlify, GitHub Pages | Fastest DX; best Vite support; auto-deploy from GitHub |
| Analytics | GA4 | Plausible, Fathom | Free tier is sufficient; widely understood |
| Fonts | Google Fonts | Self-hosted, Adobe Fonts | Free; no license complexity; good CDN |
| Bundle tool | Vite | Webpack, Parcel | Fastest cold starts; modern ESM support; CRA is deprecated |

---

## 13. Environment Variables Reference

| Variable | Where to Get It | Used In |
|---|---|---|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS dashboard → Email Services | Contact form |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS dashboard → Email Templates | Contact form |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS dashboard → Account → API Keys | Contact form |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics → Admin → Data Streams | Analytics |

**In Vercel:** Add all env variables under Project Settings → Environment Variables. They are injected at build time.

---

## 14. Build & Run Commands

```bash
# Development server (localhost:5173)
npm run dev

# Production build (outputs to /dist)
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel (if CLI installed)
vercel --prod

# Format code
npx prettier --write src/

# Lint code
npx eslint src/
```

---

## 15. Estimated Bundle Sizes

| Asset | Estimated Size (gzipped) |
|---|---|
| React + ReactDOM | ~42 KB |
| Framer Motion | ~28 KB |
| Tailwind CSS (purged) | ~8–15 KB |
| EmailJS | ~12 KB |
| All other deps | ~10 KB |
| Custom JS/JSX | ~15–25 KB |
| **Total JS** | **~115–132 KB** |
| Fonts (3 families, subset) | ~80–100 KB |
| **Total page weight** | **~200–250 KB** |

Target Lighthouse Performance score: **90+** on desktop, **80+** on mobile.

---

*Tech stack designed for: Lakshya Khandelwal Portfolio — Portfolio Book 2020 style*
*All tools listed are free for personal/portfolio use as of April 2026*
