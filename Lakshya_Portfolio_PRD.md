# Product Requirements Document (PRD)
## Personal Portfolio Website — Lakshya Khandelwal

**Version:** 1.0  
**Date:** April 24, 2026  
**Owner:** Lakshya Khandelwal  
**Role:** Aspiring Python Developer & Data Engineer

---

## 1. Overview

### 1.1 Purpose
This document defines the requirements for designing and developing a personal portfolio website for Lakshya Khandelwal. The site will serve as a professional digital identity — showcasing skills, projects, and achievements to potential recruiters, collaborators, and clients.

### 1.2 Goals
- Establish a strong online presence as a Python Developer & Data Engineer.
- Present projects, skills, and experience in a visually compelling and accessible format.
- Provide an easy way for visitors to get in touch or download a resume.
- Rank well on Google when searched by name.

### 1.3 Target Audience
- Recruiters and hiring managers (primary)
- Fellow developers and open-source collaborators
- Hackathon teams and community members

---

## 2. Scope

### In Scope
- Single-page scrollable website (SPA)
- Responsive design (mobile, tablet, desktop)
- Sections: Hero, About, Skills, Projects, Education, Certifications, Achievements, Contact
- Resume download button
- Social/contact links (LinkedIn, GitHub, Email)
- Dark mode support

### Out of Scope (v1.0)
- Blog or CMS integration
- Backend server / user authentication
- Paid hosting infrastructure (use free tier: Vercel, GitHub Pages, or Netlify)

---

## 3. Information Architecture

The website will follow a top-to-bottom single-page layout with a sticky navigation bar.

```
Header / Navigation
  └── Logo (LK) + Nav Links: About | Skills | Projects | Education | Contact

Hero Section
About Section
Skills Section
Projects Section
Education & Certifications Section
Achievements Section
Contact Section
Footer
```

---

## 4. Section-by-Section Requirements

### 4.1 Hero Section
**Goal:** Make a strong first impression.

| Field | Content |
|---|---|
| Name | Lakshya Khandelwal |
| Tagline | "Python Developer · Data Engineer · Problem Solver" |
| Sub-copy | "Building scalable data pipelines and backend systems that turn raw data into real decisions." |
| CTA Buttons | [View My Work] → scrolls to Projects · [Download Resume] → PDF download |
| Social Icons | LinkedIn, GitHub, Email |
| Visual | Animated code/data illustration or gradient background with subtle particle effect |

---

### 4.2 About Section
**Goal:** Humanize and contextualize Lakshya's background.

Content:
> B.Tech Computer Science student at Poornima University (2023–2027), passionate about building data-driven systems. Experienced in ETL pipelines, REST APIs, and machine learning workflows. Currently seeking opportunities in data engineering and Python development.

Include a profile photo placeholder or abstract avatar.

---

### 4.3 Skills Section
**Goal:** Quickly communicate technical depth.

Display skills as grouped tag clouds or proficiency bars:

| Category | Skills |
|---|---|
| Programming | Python, SQL, Java |
| Data Engineering | ETL Pipelines, Data Modeling, Data Cleaning, Batch Processing |
| Libraries | Pandas, NumPy, Scikit-learn, XGBoost |
| Backend | Flask, REST APIs |
| Databases | MySQL, SQLite, MongoDB |
| Visualization | Power BI, Plotly Dash |
| Tools | Git, GitHub, Docker (Basic), Jupyter Notebook, Apache Airflow (Basic) |
| Cloud | AWS Fundamentals, GCP Fundamentals |
| Concepts | DSA, OOP, Machine Learning |

**Design note:** Use skill category cards with colored icons. Avoid plain lists.

---

### 4.4 Projects Section
**Goal:** Demonstrate real-world impact with concrete metrics.

Each project card should include: Title, Tech Stack badges, Description, Key Highlights, and a GitHub link button.

**Project 1: RetailPulse — E-commerce Sales Intelligence Dashboard**
- Stack: Python, Plotly Dash, SQLite, XGBoost
- Description: End-to-end sales analytics platform for e-commerce data.
- Highlights:
  - Processed 50,000+ transaction records via a scalable ETL pipeline
  - Interactive dashboards for sales, retention, and product analytics
  - RFM segmentation + churn prediction model (ROC-AUC: 0.84)
  - 30% SQL query performance improvement using window functions

**Project 2: Customer Churn Prediction System**
- Stack: Python, Flask, Scikit-learn, Pandas, Streamlit
- Description: Full ML pipeline with REST API and monitoring dashboard.
- Highlights:
  - End-to-end pipeline: preprocessing → feature engineering → model training
  - Flask REST APIs for real-time churn prediction serving
  - Streamlit dashboard for churn risk monitoring

**Project 3: Data Processing Pipeline**
- Stack: Python, Pandas, SQL
- Description: Automated ETL pipeline for large dataset processing.
- Highlights:
  - Automated extract, transform, and load for large datasets
  - Integrated cleaned data into SQL for analytics and reporting
  - 40% reduction in manual preprocessing effort

---

### 4.5 Education & Certifications Section
**Goal:** Establish academic credibility.

**Education:**
- **B.Tech in Computer Science** — Poornima University, Jaipur (2023–2027) | CGPA: 8.5
- **12th CBSE Board** — Tagore Public School, Jaipur (2022–2023) | 85%

**Certifications:**
- Learning Analytics Tools — NPTEL (IIT Kharagpur)
- Introduction to IoT — NPTEL (IIT Bombay)

---

### 4.6 Achievements Section
**Goal:** Show drive, consistency, and community participation.

- Solved 380+ DSA problems on LeetCode, GeeksForGeeks, and Coding Ninjas
- Participated in Smart India Hackathon
- Participated in SAP Hackfest

---

### 4.7 Contact Section
**Goal:** Make it frictionless to reach out.

| Element | Detail |
|---|---|
| Email | khandelwal8769266481@gmail.com |
| Phone | +91 9799301556 |
| Location | Jaipur, Rajasthan |
| LinkedIn | Link from resume |
| GitHub | Link from resume |
| Contact Form | Name, Email, Message fields + Send button (use Formspree or EmailJS for no-backend handling) |

---

### 4.8 Footer
- Copyright: © 2026 Lakshya Khandelwal
- Quick links: About · Projects · Contact
- Social icons row

---

## 5. Design Requirements

### 5.1 Visual Style
| Attribute | Specification |
|---|---|
| Theme | Dark mode default with light mode toggle |
| Primary Color | Deep Blue (#1E3A5F) or Teal (#00BCD4) |
| Accent Color | Electric Blue (#4FC3F7) or Orange (#FF7043) |
| Font — Headings | Inter or Space Grotesk |
| Font — Body | Inter or Roboto |
| Border Radius | 8–12px (modern card look) |
| Tone | Minimal, technical, clean — inspired by developer portfolios |

### 5.2 Responsiveness
- Desktop: 1280px+ — two/three column layouts
- Tablet: 768–1279px — two column
- Mobile: < 768px — single column, hamburger menu

### 5.3 Animations
- Fade-in on scroll for each section
- Typing animation on Hero tagline
- Hover states on project cards (lift effect + glow)
- Smooth scrolling for nav links

---

## 6. Technical Requirements

### 6.1 Recommended Tech Stack
| Layer | Technology |
|---|---|
| Frontend | React.js + Tailwind CSS (or plain HTML/CSS/JS for simplicity) |
| Animations | Framer Motion (React) or AOS.js |
| Contact Form | Formspree / EmailJS (no backend needed) |
| Hosting | Vercel (recommended) or GitHub Pages |
| Domain (optional) | lakshyakhandelwal.dev or similar |
| Analytics | Google Analytics 4 (free) |

### 6.2 Performance
- Lighthouse score target: 90+ on Performance, Accessibility, SEO
- Images optimized (WebP format, lazy loading)
- No render-blocking scripts

### 6.3 SEO
- Meta title: "Lakshya Khandelwal | Python Developer & Data Engineer"
- Meta description: "Portfolio of Lakshya Khandelwal — Python Developer, Data Engineer, and CS student building scalable data pipelines and backend systems."
- Open Graph tags for LinkedIn/social sharing preview
- Sitemap and robots.txt

---

## 7. Pages & Routes

Since this is a single-page application, all content lives on `/`. Optional additions:

| Route | Description |
|---|---|
| `/` | Main portfolio page |
| `/resume` (optional) | Redirect to hosted resume PDF |
| `404` | Custom not-found page |

---

## 8. Non-Functional Requirements

| Requirement | Target |
|---|---|
| Page Load Time | < 3 seconds on 4G |
| Browser Support | Chrome, Firefox, Safari, Edge (latest 2 versions) |
| Accessibility | WCAG 2.1 AA (alt text, keyboard navigation, color contrast) |
| Mobile Usability | Fully touch-friendly |
| Uptime | 99.9% (covered by Vercel/Netlify free tier) |

---

## 9. Project Timeline (Suggested)

| Phase | Tasks | Duration |
|---|---|---|
| Phase 1 — Setup | Repo setup, tech stack installation, component boilerplate | 1–2 days |
| Phase 2 — Core Build | Hero, About, Skills, Projects sections | 3–4 days |
| Phase 3 — Content | Education, Certifications, Achievements, Contact | 2 days |
| Phase 4 — Polish | Animations, dark mode, responsiveness, SEO | 2–3 days |
| Phase 5 — Deploy | Vercel deployment, domain setup, analytics | 1 day |
| **Total** | | **~10–12 days** |

---

## 10. Success Metrics

| Metric | Goal |
|---|---|
| Lighthouse Performance | ≥ 90 |
| Mobile Responsiveness | Pass Google Mobile-Friendly Test |
| Contact Form Submissions | Functional with email delivery |
| Resume Downloads | Trackable via analytics |
| Page Load | < 3s on mobile |

---

## 11. Future Enhancements (v2.0)

- Blog section for writing about data engineering topics
- Live project demos embedded via iframes
- GitHub contribution graph widget
- "Currently learning" dynamic section
- Testimonials/recommendations section

---

*Document prepared based on resume: Lakshya Khandelwal — khandelwal8769266481@gmail.com*
