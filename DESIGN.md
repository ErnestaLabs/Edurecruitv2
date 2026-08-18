---
name: EduRecruitment
description: Warm-minimalist founder-led education consultancy for UK mature students.
colors:
  navy: "#1B2A4A"
  navy-light: "#2C4068"
  gold: "#C9A84C"
  gold-light: "#E8D5B7"
  cream: "#FAFAF8"
  warm-grey: "#F5F3EF"
  warm-grey-200: "#E6E2DA"
  text-primary: "#1A1714"
  text-muted: "#4A4540"
  success: "#2D8A4E"
typography:
  display:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(2.25rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "tight"
  headline:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(2rem, 4.5vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.15
  title:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  body-lg:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.05em"
rounded:
  xs: "0.25rem"
  md: "0.4rem"
  lg: "0.5rem"
  xl: "0.75rem"
  2xl: "1rem"
  full: "9999px"
spacing:
  1: "0.25rem"
  2: "0.5rem"
  3: "0.75rem"
  4: "1rem"
  6: "1.5rem"
  8: "2rem"
  12: "3rem"
  16: "4rem"
  24: "6rem"
  section: "6rem"
  section-md: "8rem"
components:
  button-primary-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.cream}"
    rounded: "{rounded.full}"
    padding: "1rem 2rem"
  button-primary-navy-hover:
    backgroundColor: "{colors.navy-light}"
  button-primary-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
    rounded: "{rounded.full}"
    padding: "1rem 2rem"
  button-primary-gold-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
  button-outline-navy:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    rounded: "{rounded.full}"
    padding: "1rem 2rem"
  button-outline-gold:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.full}"
    padding: "1rem 2rem"
  card-default:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.xl}"
    padding: "1.5rem"
  badge-gold-chip:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: "0.125rem 0.625rem"
  input-default:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.navy}"
    rounded: "{rounded.lg}"
    padding: "0.625rem 1rem"
---

# Design System: EduRecruitment

## Overview

**Creative North Star: "The Founder's Letter."**

A premium UK education consultancy that reads like a long letter from someone who has been where the student is, not a SaaS dashboard. The visual system is editorial and warm-minimalist on purpose: serif Instrument Serif on display, a clean sans on body, and a navy + warm-gold + cream palette that refuses to look like a generic recruitment site. Two young female founders anchor the brand; the system carries their voice through calm typography, generous whitespace, and accents that arrive sparingly. Every surface either breathes or holds a real photograph; nothing is busy, nothing stacks, nothing competes with the word on the page.

The build confirms the brief. The shipped artifact uses exactly the warm-navy + warm-gold + cream family declared in PRODUCT.md, with Plus Jakarta Sans and Instrument Serif as the only two typefaces in production. Surfaces are flat by default — depth is communicated through background tone (cream vs warm-grey vs navy), never through stacked shadows. Motion is restrained: one authored headline reveal on the home hero, plus subtle scroll-driven fades, with a hard `prefers-reduced-motion` cap.

**Key Characteristics:**

- Editorial serif headlines, weight 400, never bold, never tracked.
- Warm cream backgrounds with two-tone variation — never pure white, never gray.
- Gold arrives as an accent only: CTAs, focus rings, icon containers, the second line of hero headlines, hover underlines.
- Pills for CTAs and category chips; 2xl for image surfaces; 1xl for form cards. No sharp corners.
- One shadow per element, expressed in navy or gold alpha. No stacking.
- One authored motion moment (TextGenerateEffect on the hero headline); the rest is fade-in-up + scroll-driven.

## Colors

A warm-minimalist palette: deep navy as the dominant brand color, warm gold as the only accent, and cream + warm-grey as the only two surface tones. Every color in the system sits inside this warm navy/gold/cream family. Pure white, pure black, and pure gray are forbidden; all neutrals are tinted warm.

### Primary

- **Deep Navy** (`#1B2A4A`): Brand color, primary text, section headings, dark surface (testimonials, final CTA, footer background). Carries trust and authority. Used as default button background (`button-primary-navy`) and as the dominant text color on cream surfaces.

### Secondary

- **Warm Gold** (`#C9A84C`): The only accent color. Used as primary CTA background on hero (`button-primary-gold`), as the highlight color in hero headlines, as the focus ring on inputs, and inside small gold-tinted icon containers (`bg-gold/10` with `text-gold`). Its rarity is the point — see the One Voice Rule.

- **Champagne** (`#E8D5B7`): Soft warm accent used only as a gradient stop and as decorative tints. Never a primary surface, never text.

### Tertiary

- **Cream** (`#FAFAF8`): Default page background and the body of form fields. The base surface tone. Always slightly warm — never `#FFFFFF`.
- **Warm Grey** (`#F5F3EF`): Section variation — used for the second surface in alternating rhythm (FAQ section, CtaSection, About story section). Always slightly warm — never `#F5F5F5`.

### Neutral

- **Warm Grey 200** (`#E6E2DA`): All borders, dividers, and input strokes. Slightly warm — never a cool gray.
- **Warm Near-Black** (`#1A1714`): Reserve text color (used by shadcn primitives). Surface cards inherit white (`#FFFFFF`) from shadcn's default card token, but the ink that lives on them is warm-navy (`text-navy`) or warm-muted (`text-text-muted`), never pure black.
- **Warm Dark Grey** (`#4A4540`): Body copy and supporting lines. Applied via `text-text-muted`. Always slightly warm — never `#666666`.

### Semantic

- **Success Green** (`#2D8A4E`): Form success states only (the "You're all set" checkmark surface). Never used decoratively.

### Named Rules

**The One Voice Rule.** Gold (`#C9A84C`) is the only accent in the system and appears on roughly one out of every ten visible surfaces on any given viewport — primary CTAs, the second line of hero headlines, focus rings, gold-tinted icon containers, link-hover, founder pull-quote rule. It is never used as a primary surface color, never as a section background, never as body text, never in dense groups. The accent's scarcity is the point: when gold arrives, the eye lands on it.

**The Warm Neutral Rule.** Every neutral in the system is tinted warm. Cream, warm-grey, warm-grey-200, text-muted, text-primary — all carry the same warm undertone. Pure white, pure black, and cool grays are rejected: they break the warmth that makes this site feel like a letter rather than a dashboard.

## Typography

**Display Font:** Instrument Serif (with Georgia, serif fallback)
**Body Font:** Plus Jakarta Sans (with system-ui, sans-serif fallback)
**Label Font:** Plus Jakarta Sans (same family, uppercase, tracked — see Label below)

**Character:** Instrument Serif carries the editorial, warm, founder-letter voice. Plus Jakarta Sans is the modern, legible counterweight — clean, professional, neutral-warm. The pairing is deliberately not corporate: the serif is the personality, the sans is the workhorse.

### Hierarchy

- **Display** (`Instrument Serif`, weight 400, `clamp(2.25rem, 6vw, 4.5rem)`, line-height 1.1, tight tracking): The home hero headline. Always weight 400, never bold, never tracked. The second line is gold (`text-gold`); the first line is navy (`text-navy`).

- **Headline** (`Instrument Serif`, weight 400, `clamp(2rem, 4.5vw, 3rem)`, line-height 1.15): Section h2 ("What We Do", "How It Works", "Real Stories", "Frequently Asked Questions"). The most-used size in the system.

- **Title** (`Instrument Serif`, weight 400, `clamp(1.5rem, 2.5vw, 1.875rem)`, line-height 1.3): Subsection h3 (value cards, service titles, FAQ items inside `/about`).

- **Body** (`Plus Jakarta Sans`, weight 400, `1rem` (16px), line-height 1.625): Standard body copy. Most descriptions, supporting lines, FAQ answers. Target max-width ~65ch for readability.

- **Body Large** (`Plus Jakarta Sans`, weight 400, `1.125rem` (18px), line-height 1.625): Hero descriptions and section subheadings. Used once per section as the leading paragraph.

- **Label** (`Plus Jakarta Sans`, weight 600, `0.875rem` (14px), letter-spacing 0.05em, UPPERCASE): Footer column headers ("SERVICES", "RESOURCES", "CONTACT"), and tiny nav anchors. Always uppercase, always tracked. Color is gold on dark backgrounds, text-muted on light backgrounds.

### Named Rules

**The Editorial Headline Rule.** Every heading uses Instrument Serif at weight 400. Headlines are never bold, never tracked, never condensed, never set in the sans. Italic is reserved for the founder pull-quote ("We're young enough to remember the pressure, experienced enough to know how to beat it.") and the success-page confirmation; the serif body stays upright. This is what makes the site feel like a letter rather than a brochure.

**The Max-Width Prose Rule.** Body copy lives inside `max-w-prose` or `max-w-lg` containers so line-length stays in the 55–75 character range. Headlines are not bound by a max-width — they breathe to their natural width.

## Layout

The build uses a single container model with consistent vertical rhythm. The page reads top-to-bottom in alternating surface tones (cream → warm-grey → white → navy → cream), each section centered inside the same `container-wide` rail.

- **Container:** `.container-wide` → `mx-auto max-w-7xl` (1280px). All main rails use this. Tighter secondary rails use `max-w-3xl` (FAQ, contact hero), `max-w-2xl` (section subheadings), and `max-w-5xl` (university detail pages).
- **Section padding:** `.section-padding` → `px-4 py-24 md:px-8 md:py-32`. This is the dominant rhythm (96px / 128px vertical, 16px / 32px horizontal). Slightly tighter surfaces use `py-16` (university info, process, course list), `py-20` (university bottom CTA), `pt-40 md:pt-48` (page-top offset below the fixed nav).
- **Grid:** Single-column mobile. Two-column at `md` (768px). Three-column at `lg` (1024px) for service cards, testimonials, and resource cards. University partners are 2/3/5 columns.
- **Hero grid:** Two-column at `md` (text left, form/media right). Single-column mobile.
- **Service rows:** Alternating `md:flex-row` and `md:flex-row-reverse` so image and copy swap sides between rows.
- **Top offset for fixed nav:** Hero sections under the floating nav add `pt-40`; pages under the fixed `<Navbar>` use `pt-40` on their first section.

### Named Rules

**The Alternating Surface Rule.** Adjacent full-width sections must alternate surface tones (cream → warm-grey → white → navy). This rhythm is what makes the page feel composed rather than scrolling-flat. A section that breaks the alternation must have a reason — usually a navy final-CTA, which breaks the rhythm on purpose.

## Elevation & Depth

The system is flat by default. Surface hierarchy is communicated through **tonal layering** (cream vs warm-grey vs navy) rather than through stacked shadows. Where shadows do appear, exactly one is applied per element and it is always expressed in navy or gold alpha — never pure black.

### Shadow Vocabulary

- **Ambient Card** (`box-shadow: 0 1px 2px rgba(26,23,20,0.04)`): Hover state on resource cards and FAQ items. One quiet shadow that says "lift" without drawing the eye.
- **Floating Nav** (`box-shadow: 0 10px 30px rgba(27,42,74,0.10)`): Under the home-page floating nav bar. Subtle navy-tinted drop.
- **Gold CTA Glow** (`box-shadow: 0 12px 28px rgba(201,168,76,0.20)` → hover `0 16px 36px rgba(201,168,76,0.30)`): The hero gold CTA — both rest and hover states. The only place a colored shadow is used as a state cue.
- **Navy Widget** (`box-shadow: 0 12px 28px rgba(27,42,74,0.30)` → hover `0 16px 36px rgba(27,42,74,0.40)`): The floating WhatsApp button.

### Named Rules

**The One-Shadow Rule.** Exactly one shadow per element. Never stack. Never combine `shadow-md` + `shadow-lg`. If a card needs depth, give it a single `shadow-sm` and let the hover transition do the work. Stacked shadows are how SaaS dashboards scream "generic"; this site does not.

**The Tonal-Layering-First Rule.** Before reaching for a shadow, change the surface tone. Cream-on-warm-grey reads as layered without any shadow at all. Shadow is reserved for elements that genuinely float (nav, widget, pop-ups) and for hover affordance.

## Shapes

The form language is soft and pill-led. CTAs and chips are full pills (`rounded-full`). Image cards are gently rounded (`rounded-2xl`, 16px). Form cards sit between (`rounded-xl`, 12px). Inputs are tighter still (`rounded-lg`, 8px). Nothing is sharp-cornered.

- **Pill (full radius):** All CTAs, category chips, the floating WhatsApp button, the floating nav.
- **2xl (`1rem`, 16px):** Image-bearing surfaces — service cards (What We Help With), WhatsApp chat bubble, founder pull-quote panel.
- **xl (`0.75rem`, 12px):** The form/resource `Card` primitive — used for the contact form card and resource cards.
- **lg (`0.5rem`, 8px):** Inputs, textareas, and small icon containers (`size-9`, `size-10`).
- **Decorative 1px rules:** Vertical navy/10 lines flanking the hero content with a gold gradient fade-in/out at top and bottom (40px fade length). A horizontal gold hairline (`h-px w-16 bg-gold`) sits under the founder pull-quote as a small editorial rule.

### Named Rules

**The Pill-CTA Rule.** All clickable CTAs are `rounded-full`. There are no square or rounded-rectangle primary buttons in this system. The pill carries the warm, founder-letter tone; a rectangle would feel SaaS.

**The Decorative-Line Rule.** Vertical and horizontal 1px rules are used as quiet editorial framing (hero frame, founder pull-quote rule), not as section dividers. Section dividers come from surface-tone changes.

## Components

### Buttons

- **Shape:** Pill (`rounded-full`, 9999px). All variants. No exceptions.
- **Primary Navy (default):** `bg-navy text-cream`, hover `bg-navy-light`. Used for the global "Book a call" CTA, the contact form submit, and the CtaSection primary. Padding `px-8 py-6` for prominent CTAs, `px-6 py-3` for compact CTAs.
- **Primary Gold (hero):** `bg-gold text-navy`, hover `bg-gold/90` + `hover:-translate-y-0.5` + glow (`shadow-lg shadow-gold/20` → `shadow-xl shadow-gold/30`). Reserved for hero and final-CTA moments. Carries the One-Shadow Rule with a colored glow as the only state cue.
- **Outline Navy (on cream):** `border-navy/30 bg-transparent text-navy`, hover `bg-navy/5` + `hover:border-navy/50`. Used for secondary CTAs on cream surfaces.
- **Outline Gold (on navy):** `border-gold/30 bg-transparent text-cream`, hover `bg-gold/10` + `hover:border-gold/50`. Used for secondary CTAs on the navy final-CTA.
- **Moving Border:** The aceternity `MovingBorder` wraps an outline-gold CTA on the navy final-CTA section, drawing a 3-second conic-gradient gold ring around the button. This is the one place the aceternity kit adds ornament.
- **Focus:** shadcn `focus-visible:ring-ring/50` (the ring token resolves to gold). All buttons get the same gold focus ring.
- **Icons:** Trailing lucide icons only — `ArrowRight`, `Send`, `MessageCircle`, `Phone`, `Mail`. Never glyphs, never inline SVG buttons.

### Cards / Containers

- **Corner Style:** `rounded-xl` (12px) for the form and resource Card primitive; `rounded-2xl` (16px) for image-bearing surfaces (What-We-Help-With service rows, WhatsApp bubble).
- **Background:** White (`#FFFFFF`) on cream sections; warm-grey-tinted (`#F5F3EF`) accents inside cards on cream; `cream/5` (10% alpha) on navy sections.
- **Shadow Strategy:** Flat at rest. Single `shadow-sm` on hover only (resource cards, FAQ `<details>` items). No shadow on the form Card, on service image cards, or on the WhatsApp bubble — those rely on surface contrast and borders.
- **Border:** `border-warm-grey-200` on cream (form Card, FAQ items, university course list, contact info card); `border-cream/10` on navy (testimonials, WhatsApp bubble); none on white image cards (the white-on-cream tonal change is enough).
- **Internal Padding:** `p-6` (resource cards), `p-8` (contact form Card), `p-8 md:p-12` (contact form on its own page), `px-5 py-4` (university course chips).

### Chips (gold category badge)

- **Style:** `bg-gold/10 text-gold-foreground` (with `gold-foreground` resolving to `text-primary`), pill shape via the shadcn `rounded-4xl` primitive (~16px). No border.
- **Used only as:** post category labels in `/resources` and `/resources/[slug]` (e.g. "Personal Statement", "Oxbridge", "UCAS").
- **State:** Static label. No selected/unselected, no filter behavior — those use the navy/warm-grey pill row instead.

### Inputs / Fields

- **Style:** `border-warm-grey-200 bg-cream`, `text-navy` for value, `placeholder:text-text-muted/50`, `rounded-lg` (8px), `py-2.5` for form height.
- **Focus:** `focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold`. The gold focus ring is the only time gold touches a control's outline.
- **Required indicator:** Asterisk `*` in `text-gold` next to label. Optional indicator: `(optional)` in muted text.
- **Error:** Field-level error in `text-red-500` under the input; form-level error in a `bg-red-50 text-red-600` panel above the submit.
- **Success:** Green-tinted check icon surface (`bg-success/10` with `text-success`).

### Navigation

- **Home page — `FloatingNav`:** Aceternity pattern. Floating bar at `top-24`, rounded-full, `border-navy/10 bg-white/90`, `shadow-lg shadow-navy/10`. Appears when scrolling up; hides when scrolling down. Nav items are `text-navy/70`, hover `bg-gold/10 text-navy`. Trailing CTA is the navy pill.
- **Sub-pages — `Navbar`:** Fixed top, `bg-cream/95 backdrop-blur-md` after 50px scroll, transparent at the very top. Logo is `font-heading text-xl md:text-2xl text-navy` with `.co.uk` in `text-gold`. Desktop nav is `text-sm font-medium text-text-muted` → `hover:text-navy`. Mobile menu is full-screen cream with `font-heading text-3xl text-navy` links, `hover:text-gold`.
- **Both:** CTA is the navy pill `Book a call`.

### Hero Section (signature)

- **Layout:** Two-column at `md` (text left, form/media right), single-column mobile, `min-h-svh` centered.
- **Headline:** Instrument Serif, weight 400, `text-4xl md:text-6xl lg:text-7xl`, navy primary line + gold highlight line.
- **Headline motion:** `<TextGenerateEffect>` word-by-word stagger (0.08s) blur-to-clear reveal — the one authored motion moment in the system. The second line (gold highlight) appears without animation.
- **Description:** `text-lg leading-relaxed text-navy/70 max-w-lg`. Supporting line in `text-sm leading-relaxed text-text-muted`.
- **CTAs:** Gold primary (left) + outline navy secondary (right), stacked on mobile.
- **Decorative frame:** 1px navy/10 vertical lines flanking the content with a 40px gold gradient fade-in/out at top and bottom; a horizontal gold hairline at the bottom.
- **Background:** Cream with two soft radial gradients (gold-light at top-right, navy/5 at bottom-left).
- **Logo:** `font-heading text-3xl md:text-5xl text-navy` + `.co.uk` in gold, centered above the hero.

### Floating WhatsApp Widget (signature)

- **Button:** Fixed `bottom-6 right-6`, `size-14`, `rounded-full bg-navy text-gold`, `shadow-lg shadow-navy/30` → `shadow-xl shadow-navy/40` on hover + `-translate-y-1`. Spring entrance (`stiffness: 260, damping: 20`, 2s delay).
- **Bubble:** `rounded-2xl border-warm-grey-200 bg-white`, cream header strip with a gold-tinted icon container (`bg-gold/15 text-gold`), navy text, navy pill CTA in the footer.
- **Brand deviation:** Uses world palette (navy + gold), NOT WhatsApp brand green. This is intentional and load-bearing — the widget stays inside the warm-minimalist world.

### Testimonials Grid (signature)

- **Layout:** Navy section background with two large `bg-gold/5 blur-3xl` ambient blobs (top-right, bottom-left).
- **Card:** `rounded-2xl border border-cream/10 bg-cream/5` with `h-56 w-full object-cover` image at top, `p-6` body. Name in `font-heading text-xl text-cream`; designation in `text-sm text-gold/80`; quote in `text-sm leading-relaxed text-cream/80`, truncated to 220 chars with ellipsis.
- **Scroll reveal:** `opacity-0 translate-y-4` → `opacity-100` via keyframed `fadein 0.6s ease-out forwards`, 80ms cascade. Disabled in screenshot mode via `body[data-screenshot="true"]`.
- **Photos:** The six portraits in `/public/images/` are real client-provided — preserved here, not regenerated.

## Do's and Don'ts

Concrete guardrails grounded in the shipped implementation. Lead each with "Do" or "Don't" and include exact values only where established by the build.

### Do:

- **Do** use the navy + gold + cream + warm-grey family exclusively. Never pure white or pure gray; every neutral is tinted warm.
- **Do** set every heading in Instrument Serif, weight 400. Never bold, never tracked, never condensed.
- **Do** set every body and label in Plus Jakarta Sans. Never Inter, never Roboto, never a default system face.
- **Do** keep gold as a single accent: hero CTAs, focus rings, gold-tinted icon containers, the second hero headline line, hover underlines, founder pull-quote rule. It should land on roughly one out of every ten surfaces.
- **Do** apply exactly one shadow per element, expressed in navy or gold alpha. No stacking, no `shadow-md shadow-lg`.
- **Do** use `rounded-full` for every CTA and chip. Use `rounded-2xl` for image surfaces, `rounded-xl` for form cards, `rounded-lg` for inputs.
- **Do** alternate section surface tones (cream → warm-grey → white → navy). Don't let two cream sections sit adjacent.
- **Do** keep the hero headline as the single authored motion moment. Everything else is fade-in-up + scroll-driven.
- **Do** honor `prefers-reduced-motion`. The site already disables all animations when the user requests reduced motion.
- **Do** keep the WhatsApp widget navy + gold. Don't switch it to brand green — that would break the world.
- **Do** preserve the six testimonial photographs as real client assets. They are client-provided; do not regenerate or replace them.

### Don't:

- **Don't** use purple gradients, blue-purple SaaS gradients, or any color outside the navy/gold/cream family.
- **Don't** use Inter, Roboto, Arial, or any default system face on body copy.
- **Don't** use bold, tracked, or condensed variants of Instrument Serif. Weight 400 only.
- **Don't** use bounce, elastic, or spring easing on UI elements. The hero headline uses linear stagger; everything else uses ease-out.
- **Don't** stack shadows or use double-layered card surfaces. Cards-in-cards is banned.
- **Don't** use dashboard aesthetics — no metric tiles, no grayscale icon grids, no data-table density.
- **Don't** use the kicker/eyebrow Badge pattern above a heading. Badges are reserved for post category labels in `/resources`. (The `Badge` primitive stays in `components/ui/badge.tsx` for that single use.)
- **Don't** use pure white backgrounds or pure black text. Cream + warm-grey + warm-navy-text only.
- **Don't** add Pexels stock photography to new surfaces. The four images in the "What We Do" section are currently the Pexels CDN URLs that shipped in the initial commit — kept because they match the editorial register; the six testimonial portraits in `/public/images/` are real client-provided assets. New imagery must be client-provided or commissioned.
- **Don't** invent aceternity components. Only `TextGenerateEffect` (hero headline) and `MovingBorder` (final-CTA outline button) are in active use; `card-hover-effect` and `background-lines` were authored but removed and should not be re-introduced.
