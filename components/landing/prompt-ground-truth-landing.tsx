/**
 * Ground-truth build context: This isolated page follows the user's supplied editorial landing prompt.
 * Every tennis-specific claim has been replaced with verified EduRecruitment guidance, partner, and student-story data.
 */
"use client"

import { submitLead, type LeadFormState } from "@/app/actions/submit-lead"
import { ConsultationHeroMotion } from "@/components/landing/consultation-hero-motion"
import { universities } from "@/data/universities"
import Lenis from "lenis"
import { ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Menu, MessageCircle, Phone, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState, useTransition } from "react"

const logo = "/manus-storage/edurecruit-logo-mark_4dd97337.png"
const emptyLeadState: LeadFormState = { success: false, message: "" }

const tracks = [
  { eyebrow: "University entry", title: "Finding the right fit", copy: "Turn a broad search into course and university options worth comparing." },
  { eyebrow: "Active application", title: "Strengthening your application", copy: "Clarify the priorities for your statement, CV, and supporting documents." },
  { eyebrow: "New direction", title: "Navigating a next chapter", copy: "Make sense of returning to study or changing direction with practical questions." },
] as const

const stories = [
  { name: "Andrea", designation: "Recent graduate", src: "/images/Andrea.jpg", quote: "I wasn’t sure if I was ready to apply for university, but Valentina explained everything step by step and made the whole process much less stressful.", words: ["START", "WITH", "YOUR", "QUESTION"] },
  { name: "Razvan Rosca", designation: "Recent graduate", src: "/images/Razvan Rosca.png", quote: "Communication was always quick, and I was kept updated throughout every stage of my application. I never felt rushed or pressured.", words: ["CLEAR", "NEXT", "MOVE", "FORWARD"] },
  { name: "Giulia Conti", designation: "Recent graduate", src: "/images/5289.jpg", quote: "She helped me every step of the way, from different university options to the application itself.", words: ["OPTIONS", "THAT", "FIT", "YOU"] },
] as const

const pathways = [
  { index: "01", title: "Clarify your question", copy: "Name the course, application, or practical concern making the decision feel stuck." },
  { index: "02", title: "Compare realistic options", copy: "Separate the information worth checking from the noise around it." },
  { index: "03", title: "Strengthen your application", copy: "Bring focus to the personal statement, CV, and documents in front of you." },
  { index: "04", title: "Plan the next practical step", copy: "Leave knowing which question, action, or comparison to make next." },
] as const

const navigation = [
  { label: "Guidance pathways", href: "#pathways" },
  { label: "Student stories", href: "#stories" },
  { label: "Partner options", href: "#partners" },
] as const

function useGroundTruthMotion(ready: boolean, menuOpen: boolean, modalOpen: boolean) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, duration: 1.08, lerp: 0.09 })
    lenisRef.current = lenis
    let frame = 0
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf) }
    frame = requestAnimationFrame(raf)
    window.scrollTo(0, 0)
    return () => { cancelAnimationFrame(frame); lenis.destroy() }
  }, [])

  useEffect(() => {
    const locked = !ready || menuOpen || modalOpen
    document.documentElement.classList.toggle("gt-scroll-locked", locked)
    if (locked) lenisRef.current?.stop()
    else lenisRef.current?.start()
    return () => document.documentElement.classList.remove("gt-scroll-locked")
  }, [ready, menuOpen, modalOpen])
}

export function PromptGroundTruthLanding() {
  const [ready, setReady] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [trackIndex, setTrackIndex] = useState(0)
  const [storyIndex, setStoryIndex] = useState(0)
  const [formTopic, setFormTopic] = useState("")
  const [leadState, setLeadState] = useState<LeadFormState>(emptyLeadState)
  const [isPending, startTransition] = useTransition()
  useGroundTruthMotion(ready, menuOpen, modalOpen)

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 1120)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!ready || menuOpen || modalOpen) return
    const timer = window.setInterval(() => setTrackIndex((index) => (index + 1) % tracks.length), 3800)
    return () => window.clearInterval(timer)
  }, [ready, menuOpen, modalOpen])

  useEffect(() => {
    if (!ready || menuOpen || modalOpen) return
    const timer = window.setInterval(() => setStoryIndex((index) => (index + 1) % stories.length), 5200)
    return () => window.clearInterval(timer)
  }, [ready, menuOpen, modalOpen])

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("gt-is-visible")), { threshold: 0.13 })
    document.querySelectorAll(".gt-reveal").forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") { setMenuOpen(false); setModalOpen(false) } }
    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [])

  const openContact = (topic = "") => { setFormTopic(topic); setModalOpen(true) }
  const handleLeadSubmit = (formData: FormData) => startTransition(async () => setLeadState(await submitLead(emptyLeadState, formData)))
  const activeTrack = tracks[trackIndex]
  const activeStory = stories[storyIndex]

  return <div className="gt-site" data-ready={ready}>
    {!ready && <div className="gt-loader" role="status" aria-label="Loading EduRecruitment"><div className="gt-loader-brand"><Image src={logo} width={42} height={42} alt="" unoptimized /><span>Edu<span>Recruitment</span></span></div><div className="gt-loader-track"><i /></div><p>Independent university guidance</p></div>}

    <main className="gt-main" id="main-content">
      <section className="gt-hero" aria-labelledby="gt-hero-title">
        <div className="gt-hero-film" aria-hidden="true"><ConsultationHeroMotion /></div>
        <div className="gt-hero-overlay" aria-hidden="true" />
        <header className="gt-header">
          <nav className="gt-nav gt-nav-left" aria-label="Primary navigation">{navigation.slice(0, 2).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
          <Link href="/" className="gt-brand" aria-label="EduRecruitment home"><Image src={logo} width={30} height={30} alt="" unoptimized /><span>Edu<span>Recruitment</span></span></Link>
          <div className="gt-nav-right"><button type="button" className="gt-text-button" onClick={() => openContact("I would like to arrange a 15-minute planning conversation.")}>Start my plan</button><button type="button" className="gt-menu-button" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><Menu aria-hidden="true" /></button></div>
        </header>

        <div className="gt-hero-title-wrap">
          <p className="gt-hero-kicker">Independent university guidance</p>
          <h1 id="gt-hero-title" aria-label="Navigate your future"><span>NAVIGATE</span><span>YOUR FUTURE</span></h1>
        </div>

        <div className="gt-hero-bottom">
          <p className="gt-hero-tagline"><span>START WITH</span><span>YOUR QUESTION.</span></p>
          <div className="gt-hero-cards">
            <article className="gt-track-card" aria-live="polite"><p>{activeTrack.eyebrow}</p><h2>{activeTrack.title}</h2><span>{activeTrack.copy}</span><button type="button" onClick={() => openContact(activeTrack.title)}>Explore this route <ArrowRight aria-hidden="true" /></button><div className="gt-dots" aria-label="Guidance tracks">{tracks.map((track, index) => <button key={track.title} type="button" aria-label={`Show ${track.title}`} aria-pressed={trackIndex === index} data-active={trackIndex === index} onClick={() => setTrackIndex(index)} />)}</div></article>
            <article className="gt-free-card"><strong>FREE</strong><div className="gt-portrait-stack">{stories.map((story) => <Image key={story.name} src={story.src} width={32} height={32} alt="" className="gt-avatar" />)}</div><p>Student support,<br />no obligation.</p><button type="button" onClick={() => openContact("I would like to ask about free student support.")}>Start a plan <ArrowUpRight aria-hidden="true" /></button></article>
          </div>
        </div>
      </section>

      <section id="partners" className="gt-partner-rail gt-section" aria-labelledby="gt-partner-rail-title">
        <div className="gt-partner-rail-copy"><p className="gt-section-eyebrow">Listed university partners</p><h2 id="gt-partner-rail-title">Options worth comparing.</h2><p>Start with a real option, then bring the question that matters for your situation.</p></div>
        <div className="gt-partner-logo-grid" aria-label="Listed university partner logos">{universities.map((partner) => <div key={partner.slug}><Image src={partner.logo} width={280} height={132} alt={`${partner.name} logo`} unoptimized /></div>)}</div>
        <button type="button" className="gt-partner-question" onClick={() => openContact("I would like to ask about a listed partner or course option.")}>Ask about a listed partner or course option <ArrowRight aria-hidden="true" /></button>
      </section>

      <section id="stories" className="gt-trust gt-section" aria-labelledby="gt-trust-title">
        <div className="gt-trust-top gt-reveal"><div className="gt-service-badge"><strong>FREE</strong><span>Guidance built around the question in front of you.</span></div><div className="gt-section-note"><b>01</b><div><h2 id="gt-trust-title">Independent guidance for the next move.</h2><p>Students describe the practical support they received while working through their own university questions.</p></div></div></div>
        <div className="gt-ghost-words" aria-hidden="true"><span>{activeStory.words[0]}</span><span>{activeStory.words[1]}</span><span className="gt-ghost-emphasis">{activeStory.words[2]}</span><span>{activeStory.words[3]}</span></div>
        <figure className="gt-story-feature gt-reveal"><div className="gt-story-photo"><Image src={activeStory.src} fill sizes="(min-width: 768px) 28rem, 70vw" alt={`${activeStory.name}, ${activeStory.designation}`} className="object-cover" /></div><figcaption><blockquote>“{activeStory.quote}”</blockquote><p><strong>{activeStory.name}</strong><span>{activeStory.designation}</span></p></figcaption></figure>
        <div className="gt-carousel-controls"><button type="button" aria-label="Previous student story" onClick={() => setStoryIndex((storyIndex - 1 + stories.length) % stories.length)}><ChevronLeft aria-hidden="true" /></button><div className="gt-dots gt-dots-dark">{stories.map((story, index) => <button key={story.name} type="button" aria-label={`Show ${story.name}'s story`} aria-pressed={storyIndex === index} data-active={storyIndex === index} onClick={() => setStoryIndex(index)} />)}</div><button type="button" aria-label="Next student story" onClick={() => setStoryIndex((storyIndex + 1) % stories.length)}><ChevronRight aria-hidden="true" /></button></div>
      </section>

      <section id="pathways" className="gt-pathways gt-section" aria-labelledby="gt-pathways-title"><div className="gt-pathways-heading gt-reveal"><p className="gt-section-eyebrow">Guidance pathways</p><h2 id="gt-pathways-title">A route for the question you are carrying.</h2></div><div className="gt-pathway-list">{pathways.map((pathway, index) => <button key={pathway.index} type="button" className="gt-pathway-row gt-reveal" style={{ transitionDelay: `${index * 90}ms` }} onClick={() => openContact(pathway.title)}><span>{pathway.index}</span><div><h3>{pathway.title}</h3><p>{pathway.copy}</p></div><i><ArrowRight aria-hidden="true" /></i></button>)}</div></section>

      <section className="gt-process gt-section" aria-labelledby="gt-process-title"><p className="gt-process-label">What the first conversation gives you</p><div className="gt-process-grid"><div><strong>15 MIN</strong><span id="gt-process-title">A focused planning conversation</span></div><div><strong>FREE</strong><span>Student support with no obligation</span></div><div><strong>24H</strong><span>We reply within 24 hours</span></div><div><strong>ONE</strong><span>Practical next step to take forward</span></div></div></section>

      <section className="gt-contact-band gt-section" id="contact" aria-labelledby="gt-contact-title"><div><p className="gt-section-eyebrow">Start with the question</p><h2 id="gt-contact-title">Send the question holding the decision up.</h2></div><div><p>Tell us where you are stuck. The conversation is free, and we reply within 24 hours to arrange it and explain what happens next.</p><button type="button" className="gt-light-cta" onClick={() => openContact("I would like to arrange a 15-minute planning conversation.")}>Start my plan <ArrowRight aria-hidden="true" /></button></div></section>

      <footer className="gt-footer"><div className="gt-footer-brand"><Image src={logo} width={36} height={36} alt="" unoptimized /><span>Edu<span>Recruitment</span></span><p>Personal university guidance for the question in front of you.</p></div><nav aria-label="Footer navigation">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}<a href="mailto:hello@edurecruitment.co.uk">Email us</a></nav><div className="gt-footer-direct"><a href="https://wa.me/447710891277" target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" />WhatsApp</a><a href="tel:+447710891277"><Phone aria-hidden="true" />+44 7710 891277</a></div></footer>
    </main>

    {menuOpen && <div className="gt-overlay gt-menu-overlay" role="dialog" aria-modal="true" aria-label="Site menu"><button type="button" className="gt-overlay-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X aria-hidden="true" /></button><p>EDURECRUITMENT</p><nav>{navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight aria-hidden="true" /></a>)}<button type="button" onClick={() => { setMenuOpen(false); openContact("I would like to arrange a 15-minute planning conversation.") }}>Start my plan <ArrowUpRight aria-hidden="true" /></button></nav></div>}

    {modalOpen && <div className="gt-overlay gt-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="gt-modal-title"><div className="gt-modal"><button type="button" className="gt-overlay-close" aria-label="Close contact form" onClick={() => setModalOpen(false)}><X aria-hidden="true" /></button>{leadState.success ? <div className="gt-modal-success"><Check aria-hidden="true" /><h2>Thank you for getting in touch.</h2><p>We will reply within 24 hours to arrange your free 15-minute planning conversation.</p></div> : <><p className="gt-section-eyebrow">A practical next step</p><h2 id="gt-modal-title">Send the question you are working through.</h2><form action={handleLeadSubmit}><label htmlFor="gt-name">Your name<input id="gt-name" name="name" required autoComplete="name" placeholder="Your full name" /></label><div className="gt-modal-two"><label htmlFor="gt-email">Email address<input id="gt-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label><label htmlFor="gt-phone">Phone number<input id="gt-phone" name="phone" type="tel" autoComplete="tel" placeholder="07700 900000" /></label></div><label htmlFor="gt-message">What would you like to make clearer?<textarea id="gt-message" name="message" rows={5} defaultValue={formTopic} placeholder="For example, I am comparing courses, returning to study, or unsure where to begin." /></label><p>Share an email address or phone number. We reply within 24 hours.</p>{leadState.message && <p role="alert" className="gt-form-alert">{leadState.message}</p>}<button type="submit" disabled={isPending}>{isPending ? "Sending your question..." : "Send my question"}<ArrowRight aria-hidden="true" /></button></form></>}</div></div>}
  </div>
}
