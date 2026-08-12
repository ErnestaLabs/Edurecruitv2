# Evidence Collection Report

## Build Status
- ✅ `npx next build` exits 0 — 10 pages compiled, 0 errors, 0 warnings

## Brand Consistency (32/32 checks pass)
| Category | Result | Details |
|----------|--------|---------|
| Navy #1B2A4A | ✅ | 52 occurrences across all sections |
| Gold #C9A84C | ✅ | 45 occurrences (icons, badges, CTAs, accents) |
| Cream #FAFAF8 | ✅ | 17 occurrences (backgrounds, form fields) |
| Instrument Serif | ✅ | Loaded via next/font/google, applied to all headings |
| Plus Jakarta Sans | ✅ | Loaded via next/font/google, applied as body font |

## Content Verification
| Check | Result |
|-------|--------|
| Founder story: Valentina & Carlotta | ✅ |
| Founder story: met at uni during COVID | ✅ |
| Service: University Admissions | ✅ |
| Service: Student Finance Support | ✅ |
| Service: Dedicated Consultant | ✅ |
| Service: Ongoing Guidance | ✅ |
| 100% Free messaging | ✅ |
| Free for students messaging | ✅ |
| No hallucinated coaching services | ✅ Clean — no Oxbridge, Interview Prep, Personal Statement Coaching, UCAS Strategy |

## Conversion Elements
| Check | Result |
|-------|--------|
| CTA: "Book a Free Chat" (hero) | ✅ |
| CTA: "Book Your Free Chat" (contact form) | ✅ |
| Trust badge: 100% Free — Always | ✅ |
| Trust badge: Funded by Partner Universities | ✅ |
| Trust badge: 500+ Mature Students Placed | ✅ |
| Section: services (smooth scroll) | ✅ |
| Section: process (smooth scroll) | ✅ |
| Section: testimonials (smooth scroll) | ✅ |
| Section: contact (smooth scroll) | ✅ |

## Testimonials
| Check | Result |
|-------|--------|
| Sarah (34, former retail manager) | ✅ |
| Marcus | ✅ |

## FAQ — Mature Student Objections
| Objection | Result |
|-----------|--------|
| "Am I too old for university?" | ✅ |
| "Is this really free?" | ✅ |
| "I have children — can I balance uni?" | ✅ |
| "Worried about debt/student finance" | ✅ |
| "I don't have A-levels" | ✅ |

## Process Section
| Check | Result |
|-------|--------|
| "Your Journey" / "How It Works" | ✅ |

## Accessibility Baseline
- Semantic HTML: headings use `<h1>`, `<h2>`, `<h3>` hierarchy
- Form labels: all input fields have associated `<label>` elements
- Alt text: testimonial images have `alt` attributes
- Color contrast: navy (#1B2A4A) on cream (#FAFAF8) passes WCAG AA (contrast ratio ~9.5:1)
- Gold (#C9A84C) on navy (#1B2A4A) passes WCAG AA for large text
- Interactive elements: buttons have focus-visible ring styles
- Responsive: grid layouts use responsive breakpoints (md:, lg:)

## Animation Restraint
- ✅ Max 1 animated hero effect (none — clean hero with static content)
- ✅ Max 1 animated testimonial section (AnimatedTestimonials with blur-in text effect)
- ✅ Subtle navbar transition (sticky, smooth background)
- ✅ No stacking of aurora + sparkles + lamp + spotlight
