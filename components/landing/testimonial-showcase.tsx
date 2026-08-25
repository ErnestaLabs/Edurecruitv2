"use client"

/** Quiet Advocate, sharper spine: verified student proof presented as a poster-scale editorial sequence. */
import { AnimatePresence, motion } from "motion/react"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const testimonials = [
  {
    quote:
      "I wasn’t sure if I was ready to apply for university, but Valentina explained everything step by step and made the whole process much less stressful. She helped me with my application, CV, and personal statement, and was always available whenever I had questions. I really appreciated her patience and honesty throughout the entire process.",
    name: "Andrea",
    designation: "Recent graduate",
    src: "/images/Andrea.jpg",
  },
  {
    quote:
      "Excellent service from start to finish. Communication was always quick, and I was kept updated throughout every stage of my application. I never felt rushed or pressured, and everything was explained clearly. I would definitely recommend VM Education Recruitment to anyone looking for support with university applications.",
    name: "Razvan Rosca",
    designation: "Recent graduate",
    src: "/images/Razvan Rosca.png",
  },
  {
    quote:
      "I received amazing service from Carlotta! She helped me every step of the way, from showing me different university options to assisting me with my applications. She supported me throughout the entire process, and whenever I had a question, she was always there to help. I would highly recommend her. She is fast, knowledgeable, and kind.",
    name: "Giulia Conti",
    designation: "Recent graduate",
    src: "/images/5289.jpg",
  },
] as const

export function TestimonialShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = testimonials[activeIndex]

  const selectPrevious = () => setActiveIndex((index) => (index - 1 + testimonials.length) % testimonials.length)
  const selectNext = () => setActiveIndex((index) => (index + 1) % testimonials.length)

  return (
    <section id="stories" aria-labelledby="stories-title" className="scroll-mt-24 overflow-hidden bg-gold text-navy">
      <div className="container-wide grid min-h-[760px] lg:grid-cols-[1.02fr_0.98fr]">
        <div className="relative min-h-[520px] overflow-hidden bg-navy lg:min-h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.src}
              initial={{ opacity: 0, scale: 1.04, x: -24 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: 24 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={active.src}
                alt={`${active.name}, ${active.designation}`}
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-navy/10" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-cream md:p-10">
            <div>
              <span className="block font-heading text-[7rem] leading-[0.65] text-gold md:text-[10rem]">0{activeIndex + 1}</span>
              <p className="mt-7 text-xs font-extrabold tracking-[0.18em] uppercase">Real student story</p>
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={selectPrevious} aria-label="Previous student story" className="story-control">
                <ArrowLeft aria-hidden="true" className="size-5" />
              </button>
              <button type="button" onClick={selectNext} aria-label="Next student story" className="story-control">
                <ArrowRight aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-between px-5 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <Quote aria-hidden="true" className="size-14 fill-navy text-navy" strokeWidth={1.5} />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active.name}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
              className="my-12"
            >
              <p id="stories-title" className="font-heading text-[clamp(2.5rem,4.6vw,5.2rem)] leading-[0.96] tracking-[-0.035em]">
                “{active.quote}”
              </p>
              <footer className="mt-8 border-t border-navy/30 pt-6">
                <p className="text-lg font-extrabold">{active.name}</p>
                <p className="mt-1 text-sm text-navy/65">{active.designation}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div role="tablist" aria-label="Choose a student story" className="grid grid-cols-3 gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                className={`story-tab ${index === activeIndex ? "story-tab-active" : ""}`}
              >
                <span className="font-heading text-2xl">0{index + 1}</span>
                <span className="truncate text-xs font-bold uppercase tracking-[0.12em]">{testimonial.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
