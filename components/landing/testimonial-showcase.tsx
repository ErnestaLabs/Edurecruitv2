"use client"

/**
 * Style reminder: Consultation-first editorial proof. One verified story carries the
 * first proof moment; selection remains direct and quiet rather than carousel theatre.
 */
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const testimonials = [
  {
    quote: "I wasn’t sure if I was ready to apply for university, but Valentina explained everything step by step and made the whole process much less stressful.",
    fullQuote: "I wasn’t sure if I was ready to apply for university, but Valentina explained everything step by step and made the whole process much less stressful. She helped me with my application, CV, and personal statement, and was always available whenever I had questions. I really appreciated her patience and honesty throughout the entire process.",
    name: "Andrea",
    designation: "Recent graduate",
    src: "/images/Andrea.jpg",
  },
  {
    quote: "Communication was always quick, and I was kept updated throughout every stage of my application. I never felt rushed or pressured.",
    fullQuote: "Excellent service from start to finish. Communication was always quick, and I was kept updated throughout every stage of my application. I never felt rushed or pressured, and everything was explained clearly. I would definitely recommend VM Education Recruitment to anyone looking for support with university applications.",
    name: "Razvan Rosca",
    designation: "Recent graduate",
    src: "/images/Razvan Rosca.png",
  },
  {
    quote: "She helped me every step of the way, from different university options to the application itself.",
    fullQuote: "I received amazing service from Carlotta! She helped me every step of the way, from showing me different university options to assisting me with my applications. She supported me throughout the entire process, and whenever I had a question, she was always there to help. I would highly recommend her. She is fast, knowledgeable, and kind.",
    name: "Giulia Conti",
    designation: "Recent graduate",
    src: "/images/5289.jpg",
  },
] as const

export function TestimonialShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = testimonials[activeIndex]

  return (
    <section id="stories" aria-labelledby="stories-title" className="scroll-mt-24 bg-gold py-12 text-navy md:py-16">
      <div className="container-wide grid gap-0 px-5 md:px-8 lg:grid-cols-[0.82fr_1.18fr]">
        <figure className="relative min-h-[330px] overflow-hidden bg-navy md:min-h-[420px]">
          <Image src={active.src} alt={`${active.name}, ${active.designation}`} fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent px-6 pb-6 pt-20 text-cream md:px-8 md:pb-8">
            <p className="text-xs font-extrabold tracking-[0.16em] uppercase">Verified student story</p>
            <p className="mt-2 font-heading text-3xl">{active.name}</p>
          </div>
        </figure>

        <div className="flex flex-col justify-between bg-cream px-6 py-9 md:px-10 md:py-12">
          <div>
            <p className="eyebrow">What a first conversation can change</p>
            <h2 id="stories-title" className="mt-4 max-w-[19ch] font-heading text-[clamp(2.45rem,4vw,4.8rem)] leading-[0.98] tracking-[-0.035em] text-navy">“{active.quote}”</h2>
            <p className="mt-6 text-base font-extrabold text-navy">{active.name} <span className="font-normal text-text-muted">· {active.designation}</span></p>
            <details className="story-full-quote mt-5 max-w-2xl text-sm leading-6 text-text-muted">
              <summary>Read the full story</summary>
              <p className="mt-3">“{active.fullQuote}”</p>
            </details>
          </div>

          <div className="mt-9 border-t border-navy/15 pt-4">
            <div role="group" aria-label="Choose a student story" className="flex flex-wrap gap-x-5 gap-y-3">
              {testimonials.map((testimonial, index) => (
                <button key={testimonial.name} type="button" aria-pressed={index === activeIndex} onClick={() => setActiveIndex(index)} className={`story-proof-tab ${index === activeIndex ? "story-proof-tab-active" : ""}`}>
                  {testimonial.name} <ArrowRight aria-hidden="true" className="size-3.5" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
