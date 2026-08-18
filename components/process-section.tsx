"use client"

import { Timeline } from "@/components/ui/timeline"
import { FadeInSection } from "@/components/fade-in-section"

const timelineData = [
  {
    title: "Chat",
    content: (
      <div>
        <p className="mb-4 text-base font-normal text-navy/70">
          Book a free 15-minute call. Tell us about yourself. What you want to
          study, where you’re starting from, what’s worrying you.
        </p>
      </div>
    ),
  },
  {
    title: "Plan",
    content: (
      <div>
        <p className="mb-4 text-base font-normal text-navy/70">
          Your consultant maps out your path. Which universities, which course,
          how to fund it.
        </p>
      </div>
    ),
  },
  {
    title: "Apply",
    content: (
      <div>
        <p className="mb-4 text-base font-normal text-navy/70">
          We guide you through every part of your application. Personal
          statement, UCAS forms, student finance.
        </p>
      </div>
    ),
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="section-padding">
      <div className="container-wide">
        <FadeInSection>
          <h2 className="font-heading text-4xl text-navy md:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            Three simple steps from “I’m not sure” to “I got in.”
          </p>
        </FadeInSection>

        <div className="mt-16">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  )
}
