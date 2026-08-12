"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import HeroSectionOne from "@/components/hero-section-demo-1";
import UniversityPartners from "@/components/university-partners";
import { Timeline } from "@/components/ui/timeline";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { Card } from "@/components/ui/card";
import { ServiceCard } from "@/components/ui/service-card";
import { WhatWeHelpWith } from "@/components/what-we-help-with";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  GraduationCap,
  PiggyBank,
  UserCheck,
  Compass,
  ArrowRight,
  CheckCircle2,
  Quote,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useState, useCallback } from "react"
import { motion } from "motion/react";
import type { LeadFormState } from "@/app/actions/submit-lead";
const navItems = [
  { name: "Home", link: "#hero" },
  { name: "What We Do", link: "#services" },
  { name: "How It Works", link: "#process" },
  { name: "Stories", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

const features = [
  {
    icon: GraduationCap,
    title: "University Applications",
    description: "Applying to uni is a big step, whether you’re straight out of college or haven’t studied in years.",
  },
  {
    icon: PiggyBank,
    title: "Student Finance",
    description: "Tuition fees, maintenance loans, grants, bursaries. It's a lot to take in.",
  },
  {
    icon: UserCheck,
    title: "Personal Statements",
    description: "Your personal statement is where you tell your story.",
  },
  {
    icon: Compass,
    title: "Choosing the Right Course",
    description: "Not sure what to study? That’s completely normal.",
  },
];

const timelineData = [
  {
    title: "Chat",
    content: (
      <div>
        <p className="mb-4 text-base font-normal text-navy/70">
          Book a free 15-minute call. Tell us about yourself. What you want to study, where you’re starting from, what’s worrying you.
        </p>
      </div>
    ),
  },
  {
    title: "Plan",
    content: (
      <div>
        <p className="mb-4 text-base font-normal text-navy/70">
          Your consultant maps out your path. Which universities, which course, how to fund it.
        </p>
      </div>
    ),
  },
  {
    title: "Apply",
    content: (
      <div>
        <p className="mb-4 text-base font-normal text-navy/70">
          We guide you through every part of your application. Personal statement, UCAS forms, student finance.
        </p>
      </div>
    ),
  },
];
const testimonials = [
  {
    quote: "I wasn’t sure if I was ready to apply for university, but Valentina explained everything step by step and made the whole process much less stressful. She helped me with my application, CV, and personal statement, and was always available whenever I had questions. I really appreciated her patience and honesty throughout the entire process.",
    name: "Andrea",
    designation: "Recent graduate",
    src: "/images/Andrea.jpg",
  },
  {
    quote: "Excellent service from start to finish. Communication was always quick, and I was kept updated throughout every stage of my application. I never felt rushed or pressured, and everything was explained clearly. I would definitely recommend VM Education Recruitment to anyone looking for support with university applications.",
    name: "Razvan Rosca",
    designation: "Recent graduate",
    src: "/images/Razvan Rosca.png",
  },
  {
    quote: "The support I received was incredible. My consultant guided me through every step of the application process and made sure I understood all my options. I couldn’t have done it without them.",
    name: "Giulia Conti",
    designation: "Recent graduate",
    src: "/images/5289.jpg",
  },
  {
    quote: "I was nervous about applying at first, but my consultant put me at ease immediately. They were patient, knowledgeable, and always responded quickly to my questions.",
    name: "Sofia Romano",
    designation: "Recent graduate",
    src: "/images/PHOTO-2026-08-02-13-08-18.jpg",
  },
  {
    quote: "Having a dedicated consultant made all the difference. Someone who knew my situation, remembered our conversations, and genuinely cared about getting me into the right course.",
    name: "Alessandro Ferrara",
    designation: "Recent graduate",
    src: "/images/5291.jpg",
  },
  {
    quote: "From my first enquiry to my acceptance letter, everything was handled professionally. I always knew what was happening next and never felt left in the dark.",
    name: "Marco Bellini",
    designation: "Recent graduate",
    src: "/images/5292.jpg",
  },
  {
    quote: "I received amazing service from Carlotta! She helped me every step of the way, from showing me different university options to assisting me with my applications. She supported me throughout the entire process, and whenever I had a question, she was always there to help. I would highly recommend her. She is fast, knowledgeable, and kind.",
    name: "Elena Vitale",
    designation: "Recent graduate",
    src: "/images/elenavitale.jpg",
  },
  {
    quote: "I would like to sincerely thank Carlotta Cantone for all her support throughout my journey to London Metropolitan University, where I am now studying Media and Marketing. She was incredibly helpful, kind, and efficient throughout the entire process. Carlotta went above and beyond to guide me step by step. She helped me retrieve my grades from my previous university and successfully transfer to a better university. She also supported me with my Student Finance application and enrolment, and even provided valuable career advice that gave me the confidence to move forward with my studies. Thanks to her dedication and professionalism, what could have been a stressful process became a smooth and positive experience. I truly appreciate all her hard work and would highly recommend her to any student looking for guidance and support.",
    name: "Matteo De Luca",
    designation: "London Metropolitan University",
    src: "/images/matteodeluca.jpg",
  },
  {
    quote: "Carlotta was incredibly helpful and supportive throughout my university registration process. She guided me step by step, answered all my questions, and made sure everything was completed smoothly. Her kindness and professionalism made a big difference, and I truly appreciate all her assistance.",
    name: "Chiara Marini",
    designation: "Recent graduate",
    src: "/images/chiaramarini.jpg",
  },
];
const faqItems = [
  { q: "Is it really free? How does that work?", a: "Yes, completely free for students. Universities pay us a referral fee when students enrol through our service. There is absolutely no cost to you at any point." },
  { q: "I haven’t studied in years. Can I still apply?", a: "Absolutely. Many students start with an Access to Higher Education diploma, a foundation year, or equivalent qualifications. We’ll help you find the right pathway for where you are now." },
  { q: "Can I afford it? I have a family and a mortgage.", a: "Student finance includes loans that cover tuition fees and help with living costs. You might also be eligible for grants, bursaries, or childcare support." },
  { q: "How long does the process take?", a: "It depends on where you’re starting from. If you already have your qualifications, we can help you apply for the next intake. If you need to complete an Access course first, that typically takes 9\u201312 months." },
  { q: "What kind of support do you provide?", a: "You get a dedicated consultant who stays with you from your first call through to enrolment. They help with course selection, personal statements, UCAS applications, student finance, and any questions along the way." },
  { q: "What if I don’t know what I want to study?", a: "That’s completely normal. We’ll help you explore your options, think about what you enjoy and what you’re good at, and find a course that genuinely fits." },
];
function FadeInSection({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-heading text-4xl text-navy md:text-5xl">{children}</h2>
}

function SectionSubheading({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-lg text-text-muted">{children}</p>
}
const initialState = { success: false, message: "" }

export default function HomePage() {
  const [leadState, setLeadState] = useState(initialState)
  const [leadPending, setLeadPending] = useState(false)
  const leadAction = useCallback(async (formData: FormData) => {
    setLeadPending(true)
    setLeadState(initialState)
    try {
      const { submitLead } = await import("@/app/actions/submit-lead")
      const result = await submitLead(leadState, formData)
      setLeadState(result)
    } catch {
      setLeadState({ success: false, message: "Something went wrong. Please try again." })
    } finally {
      setLeadPending(false)
    }
  }, [leadState])

  if (leadState.success) {
    return (
      <>
        <FloatingNav navItems={navItems} />
        <main>
          <section className="flex min-h-svh items-center justify-center bg-cream px-4">
            <div className="mx-auto max-w-lg text-center">
              <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-success/10">
                <CheckCircle2 className="size-10 text-success" />
              </div>
              <h1 className="font-heading text-4xl text-navy md:text-5xl">You’re all set!</h1>
              <p className="mt-4 text-lg text-text-muted">{leadState.message}</p>
              <Button
                onClick={() => setLeadState(initialState)}
                variant="outline"
                className="mt-8 rounded-full border-navy/30 text-navy"
              >
                Send another message
              </Button>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppWidget />
      </>
    )
  }
  return (
    <>
      <FloatingNav navItems={navItems} />
      <main>
        {/* HERO */}
        <section id="hero" className="relative min-h-svh bg-cream">
          <HeroSectionOne
            badge="100% Free for Students"
            headline="University Is Closer Than You Think"
            highlight="We Help You Get In Free"
            description="Free, expert guidance for all students applying to university."
            primaryCta={{ text: "Book a Free Chat", href: "#contact" }}
            secondaryCta={{ text: "How It Works", href: "#process" }}
          >
            <div className="relative z-10 mt-8 rounded-2xl border border-warm-grey-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
              <p className="text-sm font-medium text-navy">Quick enquiry</p>
              <form onSubmit={(e) => { e.preventDefault(); leadAction(new FormData(e.currentTarget)) }} className="mt-4 space-y-4">
                <div>
                  <label htmlFor="hero-name" className="mb-1.5 block text-sm font-medium text-navy">Your name</label>
                  <input id="hero-name" name="name" type="text" required placeholder="Your full name" className="w-full rounded-lg border border-navy/20 bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                </div>
                <div>
                  <label htmlFor="hero-email" className="mb-1.5 block text-sm font-medium text-navy">Email</label>
                  <input id="hero-email" name="email" type="email" required placeholder="you@example.com" className="w-full rounded-lg border border-navy/20 bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                </div>
                <div>
                  <label htmlFor="hero-phone" className="mb-1.5 block text-sm font-medium text-navy">Phone number</label>
                  <input id="hero-phone" name="phone" type="tel" placeholder="07700 900000" className="w-full rounded-lg border border-navy/20 bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                </div>
                {leadState.message && !leadState.success && (
                  <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">{leadState.message}</div>
                )}
                <button type="submit" disabled={leadPending} className="w-full rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy transition-all hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/30 disabled:opacity-50">
                  {leadPending ? "Sending..." : "Send message"}
                </button>
                <p className="text-center text-xs text-text-muted/60">No spam. Ever. We’ll respond within 24 hours.</p>
              </form>
            </div>
          </HeroSectionOne>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,gold-light_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,navy/5_0%,transparent_50%)]" />
        </section>
                {/* UNIVERSITY PARTNERS */}
        <UniversityPartners />

        {/* WHAT WE HELP WITH */}
        <WhatWeHelpWith />

        {/* STATS */}
        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { number: "5+", label: "University Partners" },
                { number: "50+", label: "Courses Available" },
                { number: "100%", label: "Free for Students" },
                { number: "24h", label: "Response Time" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-4xl text-gold md:text-5xl">{stat.number}</p>
                  <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* PROCESS */}
        <section id="process" className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4">
            <FadeInSection className="mx-auto max-w-2xl text-center">
              <SectionHeading>How It Works</SectionHeading>
              <SectionSubheading>Three simple steps to your future at university.</SectionSubheading>
            </FadeInSection>
            <div className="mt-16">
              <Timeline data={timelineData} />
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="relative bg-navy py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4">
            <FadeInSection className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-4xl text-cream md:text-5xl">Real Stories</h2>
              <p className="mt-4 text-lg text-cream/80">Hear from students who’ve been where you are now.</p>
            </FadeInSection>
            <div className="mt-16">
              <AnimatedTestimonials testimonials={testimonials} />
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section className="bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-4">
            <FadeInSection className="text-center">
              <SectionHeading>Frequently Asked Questions</SectionHeading>
              <SectionSubheading>Got questions? We’ve got answers.</SectionSubheading>
            </FadeInSection>
            <Accordion className="mt-12 w-full">
              {faqItems.map((item, i) => (
                <AccordionItem key={i}>
                  <AccordionTrigger className="text-left text-navy hover:text-gold hover:no-underline">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-navy/70">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        {/* CONTACT */}
        <section id="contact" className="bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-4">
            <FadeInSection className="mx-auto max-w-2xl text-center">
              <SectionHeading>Ready to Start?</SectionHeading>
              <SectionSubheading>Book a free 15-minute chat. No pressure, no commitment.</SectionSubheading>
            </FadeInSection>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-12 max-w-lg"
            >
              <Card className="border-0 bg-white p-8 shadow-sm">
                <form onSubmit={(e) => { e.preventDefault(); leadAction(new FormData(e.currentTarget)) }} className="space-y-4">
                  <div>
                    <label htmlFor="hp-name" className="mb-1.5 block text-sm font-medium text-navy">Full name <span className="text-gold">*</span></label>
                    <input id="hp-name" name="name" required placeholder="Your full name" className="w-full rounded-lg border border-warm-grey-200 bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-text-muted/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                  </div>
                  <div>
                    <label htmlFor="hp-email" className="mb-1.5 block text-sm font-medium text-navy">Email <span className="text-gold">*</span></label>
                    <input id="hp-email" name="email" type="email" required placeholder="you@example.com" className="w-full rounded-lg border border-warm-grey-200 bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-text-muted/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                  </div>
                  <div>
                    <label htmlFor="hp-phone" className="mb-1.5 block text-sm font-medium text-navy">Phone <span className="text-gold">*</span></label>
                    <input id="hp-phone" name="phone" type="tel" placeholder="07700 900000" className="w-full rounded-lg border border-warm-grey-200 bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-text-muted/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                  </div>
                  <div>
                    <label htmlFor="hp-message" className="mb-1.5 block text-sm font-medium text-navy">What are you interested in? <span className="font-normal text-text-muted/50">(optional)</span></label>
                    <textarea id="hp-message" name="message" rows={3} placeholder="e.g. I’d like to study nursing..." className="w-full rounded-lg border border-warm-grey-200 bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-text-muted/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold resize-none" />
                  </div>
                  {leadState.message && !leadState.success && (
                    <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">{leadState.message}</div>
                  )}
                  <button type="submit" disabled={leadPending} className="w-full rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy transition-all hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/30 disabled:opacity-50">
                    {leadPending ? "Sending..." : "Send message"}
                  </button>
                  <p className="text-center text-xs text-text-muted/60">No spam. Ever. We’ll respond within 24 hours.</p>
                </form>
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-warm-grey-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-3 text-text-muted/50">or reach out directly</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold/10">
                      <Phone className="size-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy">Call us</p>
                      <p className="text-xs text-navy/60">+44 20 7123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold/10">
                      <Mail className="size-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy">Email us</p>
                      <p className="text-xs text-navy/60">hello@edurecruitment.co.uk</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold/10">
                      <MessageCircle className="size-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy">WhatsApp</p>
                      <p className="text-xs text-navy/60">Chat with us instantly</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
        {/* FINAL CTA */}
        <section className="relative bg-navy py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

          <div className="relative mx-auto max-w-2xl px-4 text-center">
            <FadeInSection>
              <h2 className="font-heading text-4xl text-cream md:text-5xl">Your Future Starts With a Conversation</h2>
              <p className="mt-4 text-lg text-cream/80">
                Whether you’re moving up from college, coming back to education after years away, or taking your career to the next level. Wherever you are, we’ll help you get where you’re going.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a href="https://wa.me/442071234567" target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-full bg-gold px-8 py-6 text-base text-navy shadow-lg shadow-gold/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/90 hover:shadow-xl hover:shadow-gold/30">
                    Chat on WhatsApp Now
                    <MessageCircle className="ml-2 size-4" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" className="rounded-full border-gold/30 px-8 py-6 text-base text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/10 hover:border-gold/50">
                    Get in touch
                  </Button>
                </a>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppWidget />
    </>
  );
}
