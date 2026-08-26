"use client"

/**
 * Style reminder: Public Relume Header 148, Testimonial 37, Contact 22, and Logo Sections
 * are actively recomposed here. Agency Agents shape the consultancy offer and applicant
 * journey; Impeccable enforces one clear path, restrained hierarchy, and mobile-safe flow.
 */
import { submitLead, type LeadFormState } from "@/app/actions/submit-lead"
import { ConsultationHeroMotion } from "@/components/landing/consultation-hero-motion"
import { TestimonialShowcase } from "@/components/landing/testimonial-showcase"
import { UniversityCourseAtlas } from "@/components/landing/university-course-atlas"
import { ArrowRight, ArrowUpRight, Check, CheckCircle2, ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState, useTransition } from "react"

const assets = {
  logo: "/manus-storage/edurecruit-logo-mark_4dd97337.png",
  consultation: "/manus-storage/edurecruit-consultation-detail_760b38e4.jpg",
}

const navItems = [
  { label: "How it helps", href: "#how-it-helps" },
  { label: "Student stories", href: "#stories" },
  { label: "Partner options", href: "#courses" },
  { label: "Contact", href: "#contact" },
]

const preparation = [
  { title: "Clarify your question.", copy: "Name the course, application, or practical concern that is making the decision feel stuck." },
  { title: "Compare realistic options.", copy: "Separate the information worth checking from the noise, and identify what fits your situation." },
  { title: "Agree your next move.", copy: "Leave with a clearer shortlist, a useful application priority, or the next question to answer." },
]

const topics = [
  { label: "Choosing a course or university", audience: "Starting university", outcome: "Build a sharper shortlist" },
  { label: "Application or personal statement", audience: "Working on an application", outcome: "Set your application priorities" },
  { label: "Returning to study", audience: "Returning or changing direction", outcome: "Plan the questions to check next" },
] as const

const faqs = [
  { question: "What happens in the 15-minute conversation?", answer: "You bring the question you are currently working through. We clarify the useful options, practical constraints, and next question or action to take." },
  { question: "Is the support really free?", answer: "Yes. EduRecruitment’s student support is free. We explain how the service works clearly when you speak with us." },
  { question: "Can I ask about a specific university or course?", answer: "Yes. Choose a partner option above or describe the course question in the form. We can help you identify what needs comparing or checking next." },
  { question: "I have been away from education for a while. Can I still speak with you?", answer: "Yes. Returning to education brings different practical questions. The first conversation is a place to make those questions clearer before you decide what to do." },
]

const emptyLeadState: LeadFormState = { success: false, message: "" }

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [topic, setTopic] = useState("")
  const [formTopic, setFormTopic] = useState("")
  const [openFaq, setOpenFaq] = useState(0)
  const [leadState, setLeadState] = useState<LeadFormState>(emptyLeadState)
  const [isPending, startTransition] = useTransition()
  const topicRef = useRef("")
  const contactTopic = formTopic || "I would like to talk through my university options."
  const whatsappHref = `https://wa.me/447710891277?text=${encodeURIComponent(`Hello, ${contactTopic}`)}`

  useEffect(() => {
    if (window.location.hash === "#contact") document.getElementById("contact")?.scrollIntoView()
  }, [])

  const moveToContact = (nextTopic: string) => {
    setFormTopic(nextTopic)
    window.setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
      document.getElementById("name")?.focus({ preventScroll: true })
    }, 80)
  }

  const startPlan = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    moveToContact(topicRef.current || topic || "I would like to talk through my university options.")
  }

  const selectTopic = (nextTopic: string) => {
    topicRef.current = nextTopic
    setTopic(nextTopic)
    setFormTopic(nextTopic)
  }

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => setLeadState(await submitLead(emptyLeadState, formData)))
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-cream text-text-primary">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <div className="shell flex h-20 items-center justify-between px-5 md:px-8">
          <Link href="/" aria-label="EduRecruitment home" className="flex min-w-[175px] items-center gap-3">
            <Image aria-hidden="true" src={assets.logo} alt="" width={40} height={40} unoptimized className="size-10 object-contain" />
            <span className="brand-wordmark">Edu<span>Recruitment</span></span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => <a key={item.href} href={item.href} className="nav-link">{item.label}</a>)}
          </nav>

          <a href="#contact" className="header-cta hidden lg:inline-flex">Send your question <ArrowUpRight aria-hidden="true" className="size-4" /></a>
          <button type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} className="menu-trigger lg:hidden" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button>
        </div>
        {menuOpen && <nav aria-label="Mobile navigation" className="mobile-nav lg:hidden">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}<a href="#contact" onClick={() => setMenuOpen(false)}>Send your question <ArrowRight aria-hidden="true" className="size-4" /></a></nav>}
      </header>

      <main id="main-content">
        <section className="relume-hero">
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="hero-eyebrow">Personal university guidance</p>
              <h1>Turn your university question into a shortlist and practical next step.</h1>
              <p>In 15 minutes, we help you filter the noise, compare the options that matter, and identify what to check next.</p>
            </div>

              <figure className="hero-evidence hero-evidence-slot">
                <ConsultationHeroMotion imageSrc={assets.consultation} />
                <figcaption>A finite 15-minute plan for the question that needs an answer next.</figcaption>
                <span className="sr-only">A short visual explanation: bring your university question, compare what matters, and leave with a next move.</span>
              </figure>

            <div className="hero-form-slot">
              <form className="hero-capture" onSubmit={startPlan}>
                <fieldset>
                  <legend>Where shall we start?</legend>
                  <p className="hero-plan-intro">A focused conversation to work through the question in front of you.</p>
                  <ul className="hero-plan-outcomes" aria-label="What the 15-minute plan covers">
                    <li><span>01</span>Options worth comparing</li>
                    <li><span>02</span>Application priorities</li>
                    <li><span>03</span>A practical next step</li>
                  </ul>
                  <div className="hero-topic-options">
                    {topics.map((option) => <button key={option.label} type="button" aria-pressed={topic === option.label} data-active={topic === option.label} onClick={() => selectTopic(option.label)}><span>{option.audience}</span><strong>{option.label}</strong><small>{option.outcome}</small></button>)}
                  </div>
                </fieldset>
                <div className="hero-capture-row">
                  <button type="submit">Start my 15-minute plan <ArrowRight aria-hidden="true" className="size-4" /></button>
                </div>
                <p>Free and no obligation. We reply within 24 hours.</p>
              </form>
            </div>
          </div>
        </section>

        <section id="how-it-helps" aria-labelledby="preparation-title" className="section-pad bg-navy text-cream">
          <div className="shell">
              <div className="preparation-heading">
                <h2 id="preparation-title" className="display max-w-[15ch]">What the first conversation makes clear.</h2>
              </div>
              <div className="preparation-list mt-12">
                {preparation.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></article>)}
              </div>
          </div>
        </section>

        <TestimonialShowcase />
        <UniversityCourseAtlas onQuestionSelected={moveToContact} />

        <section className="section-pad bg-cream">
          <div className="shell support-layout">
            <div>
              <h2 className="display max-w-[14ch]">Support for the practical questions behind the application.</h2>
            </div>
            <div className="support-lines">
              <p><Check aria-hidden="true" className="size-5 text-gold" />Course and university options that fit your situation.</p>
              <p><Check aria-hidden="true" className="size-5 text-gold" />Personal statement, CV, and application priorities.</p>
              <p><Check aria-hidden="true" className="size-5 text-gold" />Practical UCAS, document, or next-step questions.</p>
            </div>
          </div>
        </section>

        <section id="questions" aria-labelledby="questions-title" className="section-pad bg-warm-grey">
          <div className="shell faq-layout">
            <div>
              <h2 id="questions-title" className="display max-w-[13ch]">Questions people bring first.</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index
                return <article key={faq.question}><h3><button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}>{faq.question}<ChevronDown aria-hidden="true" className={`size-5 ${isOpen ? "rotate-180" : ""}`} /></button></h3>{isOpen && <p>{faq.answer}</p>}</article>
              })}
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="section-pad bg-navy text-cream">
          <div className="shell contact-layout">
            <div className="contact-copy">
              <h2 id="contact-title" className="display max-w-[12ch]">Send the question that is holding the decision up.</h2>
              <p>Tell us where you are stuck. The conversation is free, and we reply within 24 hours to arrange it and explain what happens next.</p>
              <ul>
                <li>Free to students</li>
                <li>No obligation</li>
                <li>One practical next step</li>
              </ul>
              <div className="contact-direct"><a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" className="size-4" /> WhatsApp</a><a href="tel:+447710891277"><Phone aria-hidden="true" className="size-4" /> +44 7710 891277</a></div>
            </div>

            <div className="contact-form-wrap">
              {leadState.success ? <div className="contact-success"><CheckCircle2 aria-hidden="true" className="size-11 text-gold" /><h3>Thank you for getting in touch.</h3><p>We will reply within 24 hours to arrange your free 15-minute planning conversation.</p></div> : (
                <form key={formTopic} action={(formData) => handleSubmit(formData)} className="contact-form">
                  <div><label htmlFor="name">Your name</label><input id="name" name="name" required autoComplete="name" placeholder="Your full name" />{leadState.errors?.name && <p className="form-error">{leadState.errors.name}</p>}</div>
                  <div className="contact-form-two"><div><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />{leadState.errors?.email && <p className="form-error">{leadState.errors.email}</p>}</div><div><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="07700 900000" />{leadState.errors?.phone && <p className="form-error">{leadState.errors.phone}</p>}</div></div>
                  <div><label htmlFor="message">What would you like to make clearer?</label><textarea id="message" name="message" rows={5} defaultValue={formTopic} placeholder="For example, I am comparing courses, returning to study, or unsure where to begin." /></div>
                  <p className="contact-form-note">Share an email address or phone number. We will reply within 24 hours.</p>
                  {leadState.message && <p role="alert" className="form-alert">{leadState.message}</p>}
                  <button type="submit" disabled={isPending}>{isPending ? "Sending your question..." : "Send my question"}<ArrowRight aria-hidden="true" className="size-4" /></button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell flex flex-col gap-7 px-5 md:flex-row md:items-end md:justify-between md:px-8">
          <div><Link href="/" className="flex items-center gap-3" aria-label="EduRecruitment home"><Image aria-hidden="true" src={assets.logo} alt="" width={36} height={36} unoptimized className="size-9 object-contain" /><span className="brand-wordmark text-2xl">Edu<span>Recruitment</span></span></Link><p>Personal university guidance for the question in front of you.</p></div>
          <div className="footer-links">{navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}<a href="mailto:hello@edurecruitment.co.uk">Email us</a></div>
        </div>
      </footer>
    </div>
  )
}
