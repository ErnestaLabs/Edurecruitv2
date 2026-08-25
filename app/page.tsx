"use client"

/**
 * Style reminder: Research-backed consultation-first landing page. The page makes the
 * 15-minute university plan the product, uses real evidence early, and never overlays
 * mobile conversion controls on reading content.
 */
import { submitLead, type LeadFormState } from "@/app/actions/submit-lead"
import { ConsultationSheet, type ConsultationPrefill } from "@/components/landing/consultation-sheet"
import { TestimonialShowcase } from "@/components/landing/testimonial-showcase"
import { UniversityCourseAtlas } from "@/components/landing/university-course-atlas"
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useTransition } from "react"

const assets = {
  logo: "/manus-storage/edurecruit-logo-mark_4dd97337.png",
  consultation: "/manus-storage/edurecruit-consultation-detail_760b38e4.jpg",
}

const navItems = [
  { label: "What we cover", href: "#consultation" },
  { label: "Student story", href: "#stories" },
  { label: "Partners & courses", href: "#courses" },
  { label: "Questions", href: "#questions" },
]

const agenda = [
  { number: "01", title: "Make the question clearer", copy: "Start with the course, university, application, or practical concern that is making the decision feel stuck." },
  { number: "02", title: "Compare the useful options", copy: "Identify what is worth comparing and the questions that will make the next choice more realistic." },
  { number: "03", title: "Leave with one next move", copy: "Agree the next useful step, whether that is a shortlist, an application priority, or a practical question to resolve." },
]

const support = [
  "Course and university options",
  "Personal statements and application priorities",
  "UCAS, documents, and practical next questions",
]

const faqs = [
  { question: "Is the support really free?", answer: "Yes. EduRecruitment’s student support is free. We will explain how the service works clearly when you speak with us." },
  { question: "I am leaving college. Where do I start?", answer: "Start with the questions you already have. We can talk through course options, entry routes, applications, and the next step that makes sense for you." },
  { question: "What if I have been away from education for a while?", answer: "That is a common place to begin. We can discuss your previous experience, practical limits, course options, and the questions you need answered before applying." },
  { question: "Can you help if I do not know which course is right?", answer: "Yes. We can use the first conversation to connect your interests, experience, and future plans to useful course questions and realistic options." },
]

const emptyLeadState: LeadFormState = { success: false, message: "" }

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [consultationOpen, setConsultationOpen] = useState(false)
  const [consultationTopic, setConsultationTopic] = useState("")
  const [consultationPrefill, setConsultationPrefill] = useState<ConsultationPrefill>({ topic: "", name: "", contact: "" })
  const [contactOpen, setContactOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [leadState, setLeadState] = useState<LeadFormState>(emptyLeadState)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    const revealContact = () => {
      if (window.location.hash === "#contact") setContactOpen(true)
    }
    revealContact()
    window.addEventListener("hashchange", revealContact)
    return () => window.removeEventListener("hashchange", revealContact)
  }, [])

  const openConsultation = (topic = "") => {
    setConsultationTopic(topic)
    setConsultationOpen(true)
  }

  const continueToContact = (prefill: ConsultationPrefill) => {
    setConsultationPrefill(prefill)
    setContactOpen(true)
    setConsultationOpen(false)
    window.setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
      document.getElementById("name")?.focus({ preventScroll: true })
    }, 120)
  }

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => setLeadState(await submitLead(emptyLeadState, formData)))
  }

  const prefilledEmail = consultationPrefill.contact.includes("@") ? consultationPrefill.contact : ""
  const prefilledPhone = consultationPrefill.contact && !consultationPrefill.contact.includes("@") ? consultationPrefill.contact : ""

  return (
    <div className="min-h-screen overflow-x-clip bg-cream text-text-primary">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="sticky top-0 z-40 border-b border-navy/10 bg-cream/95 backdrop-blur-xl">
        <div className="container-wide flex h-20 items-center justify-between px-5 md:px-8">
          <Link href="/" aria-label="EduRecruitment home" className="group flex min-w-[175px] items-center gap-3">
            <Image aria-hidden="true" src={assets.logo} alt="" width={40} height={40} unoptimized className="size-10 object-contain" />
            <span className="font-heading text-[1.7rem] leading-none tracking-tight text-navy">Edu<span className="text-gold">Recruitment</span></span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => <a key={item.href} href={item.href} className="nav-link">{item.label}</a>)}
          </nav>

          <button type="button" className="button-primary hidden lg:inline-flex" onClick={() => openConsultation()}>See what we’ll cover <ArrowUpRight aria-hidden="true" className="size-4" /></button>
          <button type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} className="flex size-11 items-center justify-center rounded-full border border-navy/15 text-navy lg:hidden" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-navy/10 bg-cream px-5 py-5 lg:hidden">
            <div className="container-wide flex flex-col gap-1">
              {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 font-medium text-navy hover:bg-gold/10">{item.label}</a>)}
              <button type="button" className="button-primary mt-3 w-full justify-center" onClick={() => { setMenuOpen(false); openConsultation() }}>See what we’ll cover <ArrowUpRight aria-hidden="true" className="size-4" /></button>
            </div>
          </nav>
        )}
      </header>

      <main id="main-content">
        <section className="consultation-hero bg-cream">
          <div className="container-wide grid min-h-[calc(100svh-5rem)] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex items-center px-5 py-14 md:px-8 md:py-20 lg:px-14 xl:px-20">
              <div className="max-w-2xl">
                <p className="eyebrow text-gold">15-minute university plan</p>
                <h1 className="mt-5 font-heading text-[clamp(3.4rem,6vw,7rem)] leading-[0.88] tracking-[-0.05em] text-navy">A clearer next move for your university decision.</h1>
                <p className="mt-7 max-w-xl text-lg leading-8 text-text-muted md:text-xl md:leading-9">Bring the course, question, or situation you are working through. Leave knowing what to ask, compare, or do next.</p>
                <button type="button" className="button-primary mt-9" onClick={() => openConsultation()}>See what we’ll cover <ArrowRight aria-hidden="true" className="size-4" /></button>
                <p className="mt-5 text-sm font-medium text-text-muted">Free to students. We reply within 24 hours.</p>
              </div>
            </div>
            <figure className="consultation-hero-image relative min-h-[340px] overflow-hidden bg-navy md:min-h-[520px]">
              <Image src={assets.consultation} alt="Two people having a focused university planning conversation over notes and coffee." fill priority unoptimized sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover object-center" />
              <figcaption className="consultation-image-label">A conversation first. One useful next move.</figcaption>
            </figure>
          </div>
        </section>

        <section id="consultation" aria-labelledby="agenda-title" className="scroll-mt-24 bg-navy py-14 text-cream md:py-20">
          <div className="container-wide px-5 md:px-8">
            <div className="grid gap-6 border-b border-cream/20 pb-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
              <h2 id="agenda-title" className="max-w-[14ch] font-heading text-[clamp(2.8rem,4.8vw,4.8rem)] leading-[0.92] tracking-[-0.04em]">What we can make clear in 15 minutes.</h2>
              <p className="max-w-2xl text-base leading-7 text-cream/75 md:text-lg md:leading-8">You do not need to have every answer before you speak. The first conversation gives the decision a useful shape.</p>
            </div>
            <div className="grid border-l border-t border-cream/20 md:grid-cols-3">
              {agenda.map((item) => (
                <article key={item.number} className="agenda-card border-b border-r border-cream/20 p-6 md:p-8">
                  <span className="font-heading text-4xl text-gold">{item.number}</span>
                  <h3 className="mt-8 font-heading text-3xl leading-[0.98] md:text-4xl">{item.title}</h3>
                  <p className="mt-4 leading-7 text-cream/72">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <TestimonialShowcase />
        <UniversityCourseAtlas onConsultation={openConsultation} />

        <section id="how-it-works" className="scroll-mt-24 bg-warm-grey py-14 md:py-20">
          <div className="container-wide grid gap-9 px-5 md:px-8 lg:grid-cols-[0.76fr_1.24fr] lg:gap-20">
            <div>
              <p className="eyebrow text-gold">Support that stays practical</p>
              <h2 className="mt-4 max-w-[14ch] font-heading text-[clamp(2.8rem,4.5vw,4.6rem)] leading-[0.94] tracking-[-0.04em] text-navy">From a first question to the next useful step.</h2>
            </div>
            <div className="border-t border-navy/15">
              {support.map((item, index) => <div key={item} className="flex gap-5 border-b border-navy/15 py-5 md:py-6"><span className="font-heading text-3xl text-gold">0{index + 1}</span><p className="pt-1 text-lg leading-7 text-navy">{item}</p></div>)}
              <button type="button" className="button-secondary mt-6" onClick={() => openConsultation("A question about my next university step")}>Talk through your question <ArrowRight aria-hidden="true" className="size-4" /></button>
            </div>
          </div>
        </section>

        <section id="questions" className="scroll-mt-24 bg-cream py-14 md:py-20">
          <div className="container-wide grid gap-9 px-5 md:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="eyebrow text-gold">Questions, answered clearly</p>
              <h2 className="mt-4 max-w-[13ch] font-heading text-[clamp(2.8rem,4.5vw,4.6rem)] leading-[0.94] tracking-[-0.04em] text-navy">The practical questions matter.</h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-text-muted">If your question is not here, it is still a good reason to begin a conversation.</p>
            </div>
            <div className="border-t border-navy/20">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <article key={faq.question} className="border-b border-navy/20">
                    <h3><button type="button" aria-expanded={isOpen} className="flex w-full items-center justify-between gap-6 py-6 text-left font-heading text-2xl text-navy md:py-7 md:text-3xl" onClick={() => setOpenFaq(isOpen ? -1 : index)}>{faq.question}<ChevronDown aria-hidden="true" className={`size-5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} /></button></h3>
                    {isOpen && <p className="max-w-2xl pb-7 pr-10 leading-7 text-text-muted">{faq.answer}</p>}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-navy/15 bg-warm-grey py-14 md:py-20">
          <div className="container-wide grid gap-8 px-5 md:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="eyebrow text-gold">When you are ready</p>
              <h2 className="mt-4 max-w-[13ch] font-heading text-[clamp(2.8rem,4.5vw,4.6rem)] leading-[0.94] tracking-[-0.04em] text-navy">Bring the question. We will help with the next move.</h2>
              <p className="mt-5 max-w-lg text-lg leading-8 text-text-muted">We reply within 24 hours to arrange your free 15-minute university plan.</p>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                <a className="button-secondary" href="https://wa.me/447710891277" target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" className="size-4 text-gold" />WhatsApp</a>
                <a className="button-secondary" href="tel:+447710891277"><Phone aria-hidden="true" className="size-4 text-gold" />Call +44 7710 891277</a>
              </div>
            </div>

            <div className="border-y border-navy/15">
              <details className="contact-disclosure" open={contactOpen} onToggle={(event) => setContactOpen(event.currentTarget.open)}>
                <summary>Arrange your free 15-minute plan <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 text-gold" /></summary>
                <div className="pb-2 pt-6">
                  {leadState.success ? (
                    <div className="pb-8"><CheckCircle2 aria-hidden="true" className="size-10 text-success" /><h3 className="mt-4 font-heading text-4xl">Thank you for getting in touch.</h3><p className="mt-3 max-w-md leading-7 text-text-muted">We will contact you within 24 hours to arrange your free 15-minute plan.</p></div>
                  ) : (
                    <form key={`${consultationPrefill.name}-${consultationPrefill.contact}-${consultationPrefill.topic}`} action={(formData) => handleSubmit(formData)} className="space-y-5 pb-8" aria-describedby="contact-help">
                      <div><label htmlFor="name" className="form-label">Your name</label><input id="name" name="name" required autoComplete="name" className="form-field" placeholder="Your full name" defaultValue={consultationPrefill.name} />{leadState.errors?.name && <p className="form-error">{leadState.errors.name}</p>}</div>
                      <div className="grid gap-5 sm:grid-cols-2"><div><label htmlFor="email" className="form-label">Email address</label><input id="email" name="email" type="email" autoComplete="email" className="form-field" placeholder="you@example.com" defaultValue={prefilledEmail} />{leadState.errors?.email && <p className="form-error">{leadState.errors.email}</p>}</div><div><label htmlFor="phone" className="form-label">Phone number</label><input id="phone" name="phone" type="tel" autoComplete="tel" className="form-field" placeholder="07700 900000" defaultValue={prefilledPhone} />{leadState.errors?.phone && <p className="form-error">{leadState.errors.phone}</p>}</div></div>
                      <div><label htmlFor="message" className="form-label">What would you like to talk through?</label><textarea id="message" name="message" rows={4} className="form-field resize-y" defaultValue={consultationPrefill.topic} placeholder="For example, I am comparing course options, returning to study, or unsure where to begin..." /></div>
                      <p id="contact-help" className="text-sm leading-6 text-text-muted">Share an email address or phone number. We will reply within 24 hours to arrange your free 15-minute plan.</p>
                      {leadState.message && <p role="alert" className="rounded-md bg-red-50 p-3 text-sm text-red-700">{leadState.message}</p>}
                      <button type="submit" disabled={isPending} className="button-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60">{isPending ? "Sending your enquiry..." : "Arrange my free 15-minute plan"}<ArrowUpRight aria-hidden="true" className="size-4" /></button>
                    </form>
                  )}
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      {consultationOpen && <ConsultationSheet initialTopic={consultationTopic} onClose={() => setConsultationOpen(false)} onContinue={continueToContact} />}

      <footer className="bg-cream py-10">
        <div className="container-wide flex flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between md:px-8">
          <div><Link href="/" aria-label="EduRecruitment home" className="flex items-center gap-3"><Image aria-hidden="true" src={assets.logo} alt="" width={36} height={36} unoptimized className="size-9 object-contain" /><span className="font-heading text-2xl text-navy">Edu<span className="text-gold">Recruitment</span></span></Link><p className="mt-4 max-w-sm text-sm leading-6 text-text-muted">Personal university guidance for the next move that matters to you.</p></div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-navy">{navItems.map((item) => <a key={item.href} href={item.href} className="nav-link">{item.label}</a>)}<a href="mailto:hello@edurecruitment.co.uk" className="nav-link">Email us</a></div>
        </div>
      </footer>
    </div>
  )
}
