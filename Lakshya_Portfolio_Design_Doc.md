# Design Document
## Portfolio Website — Lakshya Khandelwal
### Inspired by: "Portfolio Book 2020" — Love Henry (Dribbble #14219693)

**Version:** 1.0 | **Date:** April 24, 2026 | **Type:** UI/UX Design Specification

---

## 1. Design Philosophy

The "Portfolio Book 2020" by Love Henry is an editorial-first, print-inspired design language applied to the web. Its core thesis: a developer or designer's portfolio should feel as deliberate and curated as a published book — not a generic SaaS template.

**Three principles derived from this reference:**

1. **Editorial over digital** — layout decisions borrow from magazine and book design: large typographic hierarchy, generous white space, strong grid columns, and intentional use of negative space as a design element.
2. **Dark, moody, and confident** — deep near-black backgrounds, off-white typography, and a single restrained accent color create a premium, serious tone. The darkness signals depth, not gloom.
3. **Content leads, chrome disappears** — navigation, buttons, and UI chrome are minimal. The work (projects, achievements) commands full visual attention. Decorative elements serve as framing, not distraction.

---

## 2. Color System

### 2.1 Base Palette

| Token Name | Hex | Usage |
|---|---|---|
| `--bg-primary` | `#0A0A0A` | Page background (near-black, not pure black) |
| `--bg-secondary` | `#111111` | Card & section backgrounds |
| `--bg-tertiary` | `#1A1A1A` | Subtle surface elevation (hover states) |
| `--bg-rule` | `#222222` | Horizontal dividers, borders |
| `--text-primary` | `#F0EDE6` | Body text, headings (warm off-white — not harsh #FFFFFF) |
| `--text-secondary` | `#8A8780` | Subtext, labels, meta information |
| `--text-muted` | `#4A4845` | Placeholders, disabled, footnotes |
| `--accent` | `#E8C97A` | Accent — warm gold/amber (replaces "electric blue" clichés) |
| `--accent-dim` | `#3D3220` | Accent tinted background for badges/tags |

### 2.2 Semantic Colors

| Token | Hex | Usage |
|---|---|---|
| `--success` | `#5CB88A` | Available/active/positive indicators |
| `--link` | `#A8C4E0` | Hyperlinks, GitHub/LinkedIn CTAs |
| `--danger` | `#E07060` | Errors only (not used decoratively) |

### 2.3 Color Rules

- **No pure black (#000000) or pure white (#FFFFFF)** — harsh on dark mode, remove the "book feel." Use `#0A0A0A` and `#F0EDE6` respectively.
- **Accent (`#E8C97A`) is used sparingly** — never as a background, never on large text blocks. Use it for: active nav links, skill highlight borders, section labels, key metric numbers.
- **No blue, purple, or gradient accent** — the Portfolio Book 2020 style is intentionally restrained. A warm gold accent against near-black is distinctive and avoids the "developer portfolio cliché" of electric blue.

---

## 3. Typography

### 3.1 Typeface Stack

| Role | Font | Fallback |
|---|---|---|
| Display / Hero | `PP Editorial New` (or `Playfair Display`) | `Georgia, serif` |
| Body / UI | `DM Sans` (or `Inter`) | `system-ui, sans-serif` |
| Code / Skills | `JetBrains Mono` | `Courier New, monospace` |

**Why this pairing:** The contrast between a high-contrast editorial serif (for hero/section headings) and a clean geometric sans (for body/navigation) is the typographic signature of the Portfolio Book 2020 style. The serif says "craft and intentionality," the sans says "clarity and precision" — together they reflect a technical person who also cares about aesthetics.

### 3.2 Type Scale

| Name | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| `display-xl` | 80–120px | 300 (light) | 0.95 | Hero name |
| `display-lg` | 48–64px | 400 | 1.05 | Section title (e.g. "Projects —") |
| `heading` | 28–32px | 500 | 1.2 | Project titles, subsection headers |
| `subheading` | 18–20px | 400 | 1.4 | Card subtitles, role labels |
| `body` | 16px | 400 | 1.75 | Paragraph text, descriptions |
| `caption` | 13px | 400 | 1.5 | Meta labels, dates, tags |
| `mono` | 13px | 400 | 1.6 | Code, tech stack tags |

### 3.3 Typography Rules

- **The hero name is the visual anchor.** It should be the largest typographic element on the page by a significant margin. Size it to nearly fill the viewport width at desktop.
- **Section titles use an em dash as a typographic decoration.** Example: `Projects —` or `— About Me`. This editorial convention creates rhythm and visual interest without adding UI elements.
- **No text-transform: uppercase on body text.** Only acceptable on tiny captions/labels at ≤13px with letter-spacing: 0.08em for readability.
- **Leading (line-height) is generous on body text** — 1.75 minimum. This reinforces the "book" feeling vs the compressed "dashboard" feeling.

---

## 4. Layout & Grid

### 4.1 Grid System

```
Max content width:  1280px
Columns:            12-column grid
Gutter:             24px (mobile), 32px (tablet), 48px (desktop)
Margin:             24px (mobile), 64px (tablet), 120px (desktop)
```

### 4.2 Breakpoints

| Name | Width | Behavior |
|---|---|---|
| Mobile | < 640px | Single column, hamburger nav, stacked sections |
| Tablet | 640–1024px | 2-column grids, condensed hero |
| Desktop | 1024–1280px | Full layout, side-by-side elements |
| Wide | > 1280px | Content capped at 1280px, page margins widen |

### 4.3 Section Layout Patterns

**Hero — Full bleed, asymmetric split:**
```
Left col (8/12): Large name + tagline + CTA
Right col (4/12): Subtle abstract data viz or large initials typemark
```

**About — Left-anchored editorial block:**
```
Small uppercase label: "[ 01 — About ]"
Left indent with a thin accent rule
Body text in 2-column layout at desktop
```

**Projects — Editorial card grid with index numbers:**
```
01  RetailPulse ──────────────────────────── 2025
    Python · Plotly Dash · XGBoost
    [Preview strip]

02  Churn Prediction ───────────────────────── 2025
    ...
```

**Skills — Horizontal scrolling tag bands OR grouped grid:**
```
Category label (uppercase, muted)
Skills as monospace tags with thin borders
```

---

## 5. Components

### 5.1 Navigation

**Style:** Minimal fixed top bar, 56px height
- **Left:** Monogram mark `LK` in accent color (`#E8C97A`)
- **Right:** Text links in `DM Sans` 14px — `About  Projects  Contact`
- **Active state:** Underline in accent color, NOT color change
- **Mobile:** Slide-in drawer from right, full height, large type nav links
- **Scroll behavior:** Nav becomes slightly transparent (8px blur backdrop) on scroll

### 5.2 Hero Section

```
[Top padding: 20vh]

LAKSHYA
KHANDELWAL

                        Python Developer
                        & Data Engineer

[ View Work ↓ ]    [ Resume PDF ↗ ]

[──────────────────────────── Scroll indicator]
```

- Name is split across 2 lines, light weight (300), serif
- Role/description is right-aligned, offset vertically from name center
- CTAs: outlined buttons, no filled backgrounds — the dark page IS the background
- Subtle animated "scroll" indicator — a thin vertical line with a descending dot

### 5.3 Project Cards

Each project presented as a numbered editorial entry:

```
┌─────────────────────────────────────────────────┐
│  01                                    2025      │
│                                                  │
│  RetailPulse                                     │
│  E-commerce Sales Intelligence                   │
│                                                  │
│  Python · Plotly Dash · SQLite · XGBoost        │
│                                                  │
│  ─────────────────────────────────              │
│  Scalable ETL pipeline across 50K+              │
│  transactions. RFM segmentation,                │
│  churn prediction (ROC-AUC: 0.84),             │
│  30% SQL performance gain.                      │
│                                                  │
│  [ View Project ↗ ]                             │
└─────────────────────────────────────────────────┘
```

- Card background: `#111111` (slightly lifted from page)
- No colored card borders — use 0.5px `#2A2A2A` border
- On hover: thin accent color left-border appears, card lifts 4px
- Index number (`01`) in large muted display type, acts as decoration

### 5.4 Skill Tags

```
[ Python ]  [ SQL ]  [ Flask ]  [ Pandas ]
```

- Monospace font (`JetBrains Mono`)
- Border: `1px solid #2A2A2A`
- Background: transparent
- Text: `#8A8780`
- On hover: border color shifts to accent `#E8C97A`, text brightens to `#F0EDE6`
- No fill backgrounds on skill tags — they should feel light and typographic

### 5.5 Section Dividers

Between every major section, use one of these:

**Option A — Typographic index label:**
```
[ 02 — Projects ]
```
Small monospace uppercase label, accent colored number, muted label text.

**Option B — Thin rule + label:**
```
───────────────── Skills ─────────────────
```

Both options reinforce the editorial/book chapter feel.

### 5.6 Buttons / CTAs

Two types only:

**Outline button (primary CTA):**
- Border: `1px solid #F0EDE6`
- Text: `#F0EDE6`
- Background: transparent
- Hover: background fills to `#F0EDE6`, text flips to `#0A0A0A`
- Transition: 200ms ease

**Ghost button (secondary CTA):**
- Border: `1px solid #333333`
- Text: `#8A8780`
- Background: transparent
- Hover: border shifts to `#8A8780`, text brightens
- No fill on hover

**No rounded pill buttons.** Border-radius: `3–4px` maximum — keeps the editorial/typographic aesthetic.

---

## 6. Motion & Animation

### 6.1 Core Principles
- **Purposeful, not decorative.** Animation communicates state change or guides attention — never plays for aesthetics alone.
- **Fast and subtle.** Most transitions: 150–300ms. Nothing exceeds 600ms.
- **Ease curves:** `ease-out` for entering elements, `ease-in` for exiting, `ease-in-out` for hover transitions.

### 6.2 Specific Animations

| Element | Animation | Duration |
|---|---|---|
| Page load — hero name | Fade up from `translateY(24px)` | 600ms, ease-out |
| Page load — tagline | Fade up, 100ms delay after name | 500ms, ease-out |
| Scroll reveal — sections | Fade up from `translateY(16px)` | 400ms, ease-out |
| Project card hover | `translateY(-4px)` + left border appears | 200ms, ease-out |
| Nav link hover | Accent underline slides in from left | 150ms, ease-out |
| Button hover | Background color fill sweeps in | 200ms, ease |
| Skill tag hover | Border color transitions | 150ms, ease |

### 6.3 What to Avoid
- No particle effects or canvas animations on the background
- No typing/typewriter animation on the hero (cliché)
- No parallax scrolling (distracting, causes motion sickness)
- No page transition animations (adds latency feel)
- Respect `prefers-reduced-motion` — wrap all animations in the media query

---

## 7. Spacing System

Using an 8px base unit:

| Token | Value | Usage |
|---|---|---|
| `space-1` | 8px | Tight inline gaps |
| `space-2` | 16px | Component internal padding |
| `space-3` | 24px | Between related elements |
| `space-4` | 32px | Card padding |
| `space-5` | 48px | Between sections within a group |
| `space-6` | 64px | Between major section components |
| `space-7` | 96px | Section top/bottom padding |
| `space-8` | 128px | Hero breathing room |

---

## 8. Iconography

- **Icon library:** Lucide Icons (line icons, `1.5px` stroke weight)
- **Icon size:** 16px inline, 20px standalone
- **Color:** Always `var(--text-secondary)` unless acting as a CTA arrow (then `var(--text-primary)`)
- **No solid/filled icons** — only outlined line icons match the editorial aesthetic
- Arrow style: `↗` (diagonal) for external links, `↓` for internal scroll anchors

---

## 9. Imagery & Media

- **No stock photography.** Hero section uses large typography as the visual — not a photo.
- **Project screenshots** (if used): desaturated or dark-themed to match the palette. Apply an 8% dark overlay.
- **Profile photo** (optional): if used, apply a high-contrast black & white filter and place in a defined grid column — never floating or circular-cropped.
- **Preferred visual treatment:** Large typography, well-crafted whitespace, and the project content itself as the visual. The "Portfolio Book 2020" reference gets away with no imagery because the typography IS the art.

---

## 10. Adapting to Lakshya's Context

Since Lakshya is a Data Engineer/Python Developer (not a visual designer), the following adaptations are made to the Portfolio Book 2020 aesthetic:

| Original (Designer) | Adapted (Developer) |
|---|---|
| Project screenshots | Data pipeline diagrams, architecture charts |
| Visual case studies | Metric-heavy callouts (50K records, ROC-AUC 0.84, 40% reduction) |
| Mood-board images | Code snippets as visual elements (styled, dark theme) |
| Large white space | Replaced with data-driven stats in large display type |
| Gallery grid | Project cards with tech stack + measurable impact |

**The key insight:** A data engineer's "portfolio book" should be full of numbers. Let the metrics breathe in large type the way a designer would let a hero image breathe. `50,000+` in 64px editorial display type is just as striking as a full-bleed photograph.

---

## 11. Sample Color Application by Section

| Section | Background | Primary Text | Accent Usage |
|---|---|---|---|
| Navigation | `#0A0A0A` transparent → bg on scroll | `#F0EDE6` | `#E8C97A` on active link & `LK` logo |
| Hero | `#0A0A0A` | `#F0EDE6` (name, large), `#8A8780` (tagline) | `#E8C97A` for section index label |
| About | `#0A0A0A` | `#F0EDE6` body, `#8A8780` labels | Left rule line in accent |
| Projects | `#0A0A0A` page, `#111111` cards | `#F0EDE6` titles, `#8A8780` descriptions | Index numbers `01`, `02` in accent |
| Skills | `#0A0A0A` | `#8A8780` tag text | Tag border on hover |
| Education | `#0A0A0A` | `#F0EDE6` institution, `#8A8780` dates | Year label in accent |
| Achievements | `#0A0A0A` | `#F0EDE6` stats large, `#8A8780` context | Stat numbers in accent |
| Contact | `#111111` (lifted bg) | `#F0EDE6` | Email/submit in accent |
| Footer | `#0A0A0A` | `#4A4845` | Monogram `LK` in accent |

---

## 12. Design Checklist (Before Handoff)

- [ ] All text passes WCAG AA contrast ratio on `#0A0A0A` background
- [ ] No element uses pure `#000000` or `#FFFFFF`
- [ ] Accent color (`#E8C97A`) is not used on more than 5% of any viewport
- [ ] All project cards display at least one quantified metric
- [ ] Section index labels (`01 —`, `02 —`) are present and consistent
- [ ] Navigation has no more than 4 links
- [ ] All buttons are outline-only (no filled primary buttons)
- [ ] Tested on iPhone 14 viewport (390px) — no horizontal scroll
- [ ] `prefers-reduced-motion` respected — no animation without the query
- [ ] Resume PDF link opens in new tab

---

*Design reference: "Portfolio Book 2020" — Love Henry Team, Dribbble shot #14219693*
*Adapted for: Lakshya Khandelwal — Python Developer & Data Engineer Portfolio*
