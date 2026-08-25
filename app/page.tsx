"use client"

/**
 * Relume-led page system: Header143 shapes the hero, Timeline5 shapes the process,
 * Faq3 shapes questions, and Contact6 shapes conversion. Persona Walkthrough,
 * Content Creator, Behavioral Nudge, Visual Storyteller, and Frontend Developer
 * responsibilities are applied here through inclusive audience copy, narrative order,
 * one low-friction action, and accessible production implementation.
 */

import { submitLead, type LeadFormState } from "@/app/actions/submit-lead"
import { AudienceJourney } from "@/components/landing/audience-journey"
import { TestimonialShowcase } from "@/components/landing/testimonial-showcase"
import { UniversityCourseAtlas } from "@/components/landing/university-course-atlas"
import { BlurFade } from "@/components/ui/blur-fade"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useTransition } from "react"

const assets = {
  logo: "/manus-storage/edurecruit-logo-mark_4dd97337.png",
  consultation: "/manus-storage/edurecruit-consultation-detail_760b38e4.jpg",
  college: "/manus-storage/edurecruit-college-leaver-study_1446a2ea.jpg",
  returning: "/manus-storage/edurecruit-hero-adult-learner_a0fcbda5.jpg",
}

const navItems = [
  { label: "Your starting point", href: "#starting-points" },
  { label: "Student stories", href: "#stories" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Partners & courses", href: "#courses" },
  { label: "Questions", href: "#questions" },
]

const process = [
  {
    title: "Chat",
    eyebrow: "A 15-minute starting point",
    description:
      "Tell us where you are now, what you are considering, and what is making the decision feel difficult. There is no pressure to have it all figured out.",
  },
  {
    title: "Plan",
    eyebrow: "Options that fit real life",
    description:
      "We map the useful next moves, from course and pathway choices to the practical questions around applying and funding.",
  },
  {
    title: "Apply",
    eyebrow: "Support through the details",
    description:
      "When you are ready, your consultant can help with course choice, personal statements, application steps, and student-finance guidance.",
  },
]

const services = [
  "Choosing the course and route that fit your goals",
  "Personal-statement and application guidance",
  "UCAS and documentation support",
  "Student-finance guidance and practical signposting",
  "A dedicated person from first conversation to enrolment",
]

const faqs = [
  {
    question: "Is the support really free?",
    answer:
      "Yes. EduRecruitment’s student support is free. We will explain how the service works clearly when you speak with us.",
  },
  {
    question: "I am leaving college. Where do I start?",
    answer:
      "Start with the questions you already have. We can talk through courses, entry routes, what makes a strong application, and the next step that makes sense for you.",
  },
  {
    question: "What if I have been away from education for a while?",
    answer:
      "That is a common place to begin. Your work, life experience, training, and motivation can all matter when shaping the right route and application.",
  },
  {
    question: "Can you help if I do not know which course is right?",
    answer:
      "Yes. A useful first conversation can help connect your interests, strengths, experience, and future plans to realistic course options.",
  },
  {
    question: "Can university work around my job or family?",
    answer:
      "The answer depends on the course and your circumstances. We can help you explore options and the practical questions you need to ask before you apply.",
  },
  {
    question: "Can you guarantee that I will get an offer or funding?",
    answer:
      "No. Admissions and funding decisions are made by the relevant institutions. Our role is to give you honest guidance and help you make the strongest, most informed application possible.",
  },
]

const emptyLeadState: LeadFormState = { success: false, message: "" }

function PrimaryLink({ children, href = "#contact" }: { children: React.ReactNode; href?: string }) {
  return (
    <a className="button-primary" href={href}>
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" className="size-4" />
    </a>
  )
}

function TextLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a className="button-secondary" href={href}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="size-4" />
    </a>
  )
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [leadState, setLeadState] = useState<LeadFormState>(emptyLeadState)
  const [isPending, startTransition] = useTransition()
  const [showMobileChatShortcut, setShowMobileChatShortcut] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    const syncMobileChatShortcut = () => {
      const contact = document.getElementById("contact")
      const bounds = contact?.getBoundingClientRect()
      const contactVisible = Boolean(bounds && bounds.top < window.innerHeight && bounds.bottom > 0)
      const shouldShow = window.scrollY > 640 && !contactVisible
      setShowMobileChatShortcut((visible) => (visible === shouldShow ? visible : shouldShow))
    }

    syncMobileChatShortcut()
    window.addEventListener("scroll", syncMobileChatShortcut, { passive: true })
    window.addEventListener("resize", syncMobileChatShortcut)
    return () => {
      window.removeEventListener("scroll", syncMobileChatShortcut)
      window.removeEventListener("resize", syncMobileChatShortcut)
    }
  }, [])

  useEffect(() => {
    const revealContact = () => {
      if (window.location.hash === "#contact") setContactOpen(true)
    }

    revealContact()
    window.addEventListener("hashchange", revealContact)
    return () => window.removeEventListener("hashchange", revealContact)
  }, [])

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await submitLead(emptyLeadState, formData)
      setLeadState(result)
    })
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-cream text-text-primary">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/92 backdrop-blur-xl">
        <div className="container-wide flex h-20 items-center justify-between px-5 md:px-8">
          <Link href="/" aria-label="EduRecruitment home" className="group flex min-w-[175px] items-center gap-3">
            <Image aria-hidden="true" src={assets.logo} alt="" width={40} height={40} unoptimized className="size-10 object-contain" />
            <span className="font-heading text-[1.7rem] leading-none tracking-tight text-navy">
              Edu<span className="text-gold">Recruitment</span>
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <PrimaryLink>Start a free 15-minute chat</PrimaryLink>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            className="flex size-11 items-center justify-center rounded-full border border-navy/15 text-navy lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-navy/10 bg-cream px-5 py-5 lg:hidden">
            <div className="container-wide flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 font-medium text-navy hover:bg-gold/10"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)} className="button-primary mt-3 w-full justify-center">
                Start a free 15-minute chat
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="main-content">
        <section className="hero-section relative overflow-hidden border-b border-navy/10">
          <div className="container-wide px-5 py-12 md:px-8 md:py-16 lg:py-24">
            <div className="grid items-end gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
              <BlurFade delay={0.05} direction="up" inView>
                <p className="eyebrow">Free UK university application guidance</p>
                <h1 className="display-hero mt-7">University applications feel complicated. Your first step <span className="text-gold">doesn’t have to.</span></h1>
              </BlurFade>

              <BlurFade delay={0.14} direction="up" inView className="md:pb-2 lg:pl-6">
                <p className="max-w-xl text-lg leading-8 text-text-muted md:text-xl">
                  One-to-one support for college leavers, returning learners, and career changers. Compare routes, prepare your application, and understand the next step before you commit.
                </p>
                <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <PrimaryLink>Start a free 15-minute chat</PrimaryLink>
                  <TextLink href="https://wa.me/447710891277">Message us on WhatsApp</TextLink>
                </div>
                <p className="mt-9 flex max-w-lg items-start gap-3 border-l-2 border-gold pl-4 text-sm leading-6 text-navy/75">
                  <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold" />
                  Free for students. One dedicated consultant. Honest guidance, with no promise of an offer or funding decision.
                </p>
              </BlurFade>
            </div>

            <BlurFade delay={0.2} direction="up" inView className="hero-media relative mt-12 min-h-[430px] overflow-hidden bg-navy md:mt-16 md:min-h-[560px] lg:min-h-[680px]">
              <Image
                src={assets.consultation}
                alt="Two people having a focused university planning conversation over notes and coffee."
                fill
                priority
                unoptimized
                sizes="(min-width: 1440px) 1440px, 100vw"
                className="absolute inset-0 size-full object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              <div className="absolute right-5 bottom-5 left-5 max-w-2xl border border-cream/30 bg-navy/88 p-5 text-cream backdrop-blur md:right-auto md:bottom-9 md:left-9 md:p-8">
                <p className="text-xs font-bold tracking-[0.15em] text-gold uppercase">The first conversation</p>
                <p className="mt-3 font-heading text-2xl leading-tight md:text-4xl">
                  Bring the question that has been sitting with you. We will help you find the next useful answer.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>

        <AudienceJourney />

        <UniversityCourseAtlas />

        <TestimonialShowcase />

        <section id="how-it-works" className="scroll-mt-24 bg-cream py-14 md:py-24">
          <div className="container-wide px-5 md:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
              <BlurFade inView direction="up" className="lg:sticky lg:top-32 lg:self-start">
                <h2 className="display-section">From one honest conversation to a plan you can act on.</h2>
                <p className="mt-5 max-w-lg text-base leading-7 text-text-muted md:text-lg md:leading-8">
                  No pressure to know the perfect course before you speak. We start with your context, then make the next step visible.
                </p>
                <div className="mt-7 hidden lg:block">
                  <PrimaryLink>Start a free 15-minute chat</PrimaryLink>
                </div>
              </BlurFade>

              <div className="process-stack">
                {process.map((step, index) => (
                  <BlurFade key={step.title} delay={0.08 * index} inView direction="up" className="process-item">
                    <article className="grid gap-5 sm:grid-cols-[92px_1fr] sm:gap-8">
                      <div className="relative flex sm:justify-center">
                        <span className="relative z-10 flex size-14 items-center justify-center rounded-full border border-gold bg-cream font-heading text-2xl text-navy sm:size-16">
                          0{index + 1}
                        </span>
                      </div>
                      <div className="pb-7 sm:pb-10">
                        <p className="text-xs font-bold tracking-[0.14em] text-gold uppercase">{step.eyebrow}</p>
                        <h3 className="mt-3 font-heading text-4xl text-navy md:text-5xl">{step.title}</h3>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-text-muted md:text-lg md:leading-8">{step.description}</p>
                      </div>
                    </article>
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gold text-navy">
          <div className="container-wide grid gap-8 px-5 py-10 md:grid-cols-[1fr_auto] md:items-center md:px-8 md:py-12">
            <div>
              <p className="text-xs font-extrabold tracking-[0.14em] uppercase">Use a practical guide before we speak</p>
              <h2 className="mt-3 max-w-3xl font-heading text-3xl leading-tight md:text-5xl">Writing a personal statement? Start with the questions that make it specific.</h2>
            </div>
            <Link href="/resources/personal-statement-guide" className="inline-flex min-h-12 w-fit items-center gap-3 border-b border-navy pb-2 text-sm font-extrabold">
              Read the personal statement guide <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </section>

        <section className="bg-navy py-20 text-cream md:py-28">
          <div className="container-wide grid gap-12 px-5 md:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
            <BlurFade inView direction="up">
              <p className="eyebrow text-gold">What your support can include</p>
              <h2 className="display-section mt-5 text-cream">The details matter when the decision matters.</h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-cream/75">
                From your first shortlist to the forms that need completing, we keep the process personal, clear, and focused on what is useful for you.
              </p>
            </BlurFade>
            <BlurFade delay={0.12} inView direction="up" className="grid content-start border-t border-cream/20">
              {services.map((service, index) => (
                <div key={service} className="flex gap-5 border-b border-cream/20 py-5 md:py-6">
                  <span className="font-heading text-2xl text-gold">0{index + 1}</span>
                  <p className="pt-1 text-lg leading-7 text-cream/90">{service}</p>
                </div>
              ))}
            </BlurFade>
          </div>
        </section>

        <section id="our-approach" className="scroll-mt-24 bg-warm-grey py-20 md:py-32">
          <div className="container-wide px-5 md:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
              <BlurFade inView direction="up" className="border-l-2 border-gold pl-7 md:pl-10">
                <p className="eyebrow">Our approach</p>
                <blockquote className="mt-6 max-w-4xl font-heading text-4xl leading-[1.08] text-navy md:text-5xl lg:text-6xl">
                  “We are young enough to remember the pressure, experienced enough to know how to beat it.”
                </blockquote>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-text-muted">
                  Valentina and Carlotta met at university in 2018. Their experience in higher education and student recruitment showed them that applicants deserve more than a standard route and a generic answer. EduRecruitment was built to offer practical, personal support and honest guidance about fit.
                </p>
              </BlurFade>
              <BlurFade delay={0.12} inView direction="up" className="self-end bg-cream p-7 shadow-[0_20px_60px_rgba(27,42,74,0.08)] md:p-9">
                <p className="text-xs font-bold tracking-[0.14em] text-gold uppercase">What you can expect</p>
                <ul className="mt-6 space-y-5 text-navy">
                  {[
                    "One person who gets to know your starting point",
                    "Clear answers, without admissions jargon",
                    "An honest view of what could work for you",
                    "Support that stays practical from first question to enrolment",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-7">
                      <CheckCircle2 aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </BlurFade>
            </div>
          </div>
        </section>

        <section id="questions" className="scroll-mt-24 bg-cream py-14 md:py-20">
          <div className="container-wide grid gap-9 px-5 md:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <BlurFade inView direction="up">
              <h2 className="display-section">Questions, answered clearly.</h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-text-muted">
                If your question is not here, it is still a good question. Start a conversation and ask it directly.
              </p>
              <div className="mt-7">
                <PrimaryLink>Start a free 15-minute chat</PrimaryLink>
              </div>
            </BlurFade>
            <BlurFade delay={0.12} inView direction="up">
              <div className="border-t border-navy/20">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index
                  return (
                    <article key={faq.question} className="border-b border-navy/20">
                      <h3>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-6 py-6 text-left font-heading text-2xl text-navy md:py-7 md:text-3xl"
                          onClick={() => setOpenFaq(isOpen ? null : index)}
                        >
                          {faq.question}
                          <ChevronDown aria-hidden="true" className={`size-5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                      </h3>
                      {isOpen && <p className="max-w-2xl pb-7 pr-10 leading-7 text-text-muted">{faq.answer}</p>}
                    </article>
                  )
                })}
              </div>
            </BlurFade>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-navy/15 bg-warm-grey py-14 md:py-20">
          <div className="container-wide grid gap-8 px-5 md:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <BlurFade inView direction="up">
              <h2 className="display-section">Ready when you are.</h2>
              <p className="mt-5 max-w-lg text-lg leading-8 text-text-muted">
                Bring the question, course, or university option you want to understand better. We will reply within 24 hours to arrange your free 15-minute chat.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                <a className="button-secondary" href="https://wa.me/447710891277" target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" className="size-4 text-gold" />
                  WhatsApp
                </a>
                <a className="button-secondary" href="tel:+447710891277">
                  <Phone aria-hidden="true" className="size-4 text-gold" />
                  Call +44 7710 891277
                </a>
              </div>
            </BlurFade>

            <BlurFade delay={0.08} inView direction="up" className="border-y border-navy/15">
              <details className="contact-disclosure" open={contactOpen} onToggle={(event) => setContactOpen(event.currentTarget.open)}>
                <summary>
                  Arrange a free 15-minute chat
                  <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 text-gold" />
                </summary>
                <div className="pb-2 pt-6">
                  {leadState.success ? (
                    <div className="pb-8">
                      <CheckCircle2 aria-hidden="true" className="size-10 text-success" />
                      <h3 className="mt-4 font-heading text-4xl">Thank you for getting in touch.</h3>
                      <p className="mt-3 max-w-md leading-7 text-text-muted">
                        We will contact you within 24 hours to arrange your free 15-minute chat. If you need to speak sooner, you can also message us on WhatsApp.
                      </p>
                      <button type="button" className="button-secondary mt-6" onClick={() => setLeadState(emptyLeadState)}>
                        Send another enquiry
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </button>
                    </div>
                  ) : (
                    <form action={(formData) => handleSubmit(formData)} className="space-y-5 pb-8" aria-describedby="contact-help">
                      <div>
                        <label htmlFor="name" className="form-label">Your name</label>
                        <input id="name" name="name" required autoComplete="name" className="form-field" placeholder="Your full name" />
                        {leadState.errors?.name && <p className="form-error">{leadState.errors.name}</p>}
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="email" className="form-label">Email address</label>
                          <input id="email" name="email" type="email" autoComplete="email" className="form-field" placeholder="you@example.com" />
                          {leadState.errors?.email && <p className="form-error">{leadState.errors.email}</p>}
                        </div>
                        <div>
                          <label htmlFor="phone" className="form-label">Phone number</label>
                          <input id="phone" name="phone" type="tel" autoComplete="tel" className="form-field" placeholder="07700 900000" />
                          {leadState.errors?.phone && <p className="form-error">{leadState.errors.phone}</p>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="form-label">What would you like to talk through?</label>
                        <textarea id="message" name="message" rows={4} className="form-field resize-y" placeholder="For example, I am comparing course options, returning to study, or unsure where to begin..." />
                      </div>
                      <p id="contact-help" className="text-sm leading-6 text-text-muted">
                        Share an email address or phone number. We will reply within 24 hours to arrange your free 15-minute chat.
                      </p>
                      {leadState.message && <p role="alert" className="rounded-md bg-red-50 p-3 text-sm text-red-700">{leadState.message}</p>}
                      <button type="submit" disabled={isPending} className="button-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60">
                        {isPending ? "Sending your enquiry..." : "Arrange my free 15-minute chat"}
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </button>
                    </form>
                  )}
                </div>
              </details>
            </BlurFade>
          </div>
        </section>

      </main>

      {showMobileChatShortcut && (
        <a href="#contact" className="mobile-chat-shortcut lg:hidden">
          Start 15-minute chat
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      )}

      <footer className="bg-cream py-10">
        <div className="container-wide flex flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between md:px-8">
          <div>
            <Link href="/" aria-label="EduRecruitment home" className="flex items-center gap-3">
              <Image aria-hidden="true" src={assets.logo} alt="" width={36} height={36} unoptimized className="size-9 object-contain" />
              <span className="font-heading text-2xl text-navy">Edu<span className="text-gold">Recruitment</span></span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-text-muted">Personal university guidance for the next move that matters to you.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-navy">
            {navItems.map((item) => <a key={item.href} href={item.href} className="nav-link">{item.label}</a>)}
            <a href="mailto:hello@edurecruitment.co.uk" className="nav-link">Email us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
