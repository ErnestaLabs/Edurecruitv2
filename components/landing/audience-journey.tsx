"use client"

/**
 * Relume Layout403 adapted through Persona Walkthrough, Inclusive Visuals,
 * UX Architect, UI Designer, Behavioral Nudge, and Finish-Gate responsibilities.
 * Each visitor can select a starting point and see tailored decisions and next steps.
 */
import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const journeys = [
  {
    id: "college",
    number: "01",
    tab: "Leaving college",
    heading: "Turn a big first decision into a shortlist you understand.",
    description:
      "You do not need to arrive with the perfect course already chosen. We help you compare realistic routes, understand what an application needs, and decide what to do next.",
    decisions: ["Course and university fit", "Entry routes and application timing", "Personal statement and document priorities"],
    firstStep: "Bring your subjects, interests, and the options you are already considering.",
    image: "/manus-storage/edurecruit-college-leaver-study_1446a2ea.jpg",
    alt: "A college learner comparing university options and writing notes at a desk.",
  },
  {
    id: "returning",
    number: "02",
    tab: "Returning to learning",
    heading: "Build a university plan around the life you have now.",
    description:
      "Time away from education does not make your questions unusual. We help you explore routes that account for work, family, previous experience, and the confidence to begin again.",
    decisions: ["How previous experience may support your route", "Attendance, campus, and intake questions", "Application and student-finance next steps"],
    firstStep: "Bring your work history, previous study, and the practical limits the plan must respect.",
    image: "/manus-storage/edurecruit-hero-adult-learner_a0fcbda5.jpg",
    alt: "An adult learner reviewing study notes at home while planning a return to university.",
  },
  {
    id: "career",
    number: "03",
    tab: "Changing direction",
    heading: "Connect the career you want to a route you can act on.",
    description:
      "A new direction is easier to evaluate when the options are concrete. We help you connect your goal to relevant courses, realistic entry routes, and the application work ahead.",
    decisions: ["Courses connected to the goal", "Transferable experience and strengths", "A practical application sequence"],
    firstStep: "Bring the direction you want, even if you are still unsure which course gets you there.",
    image: "/manus-storage/edurecruit-new-chapter-still-life_df6b1320.jpg",
    alt: "A planning notebook and pen used to map a change in study and career direction.",
  },
] as const

export function AudienceJourney() {
  const [activeId, setActiveId] = useState<(typeof journeys)[number]["id"]>("college")
  const active = journeys.find((journey) => journey.id === activeId) ?? journeys[0]

  return (
    <section id="starting-points" aria-labelledby="journey-heading" className="scroll-mt-24 bg-warm-grey py-14 md:py-20">
      <div className="container-wide px-5 md:px-8">
        <div className="grid gap-6 border-b border-navy/15 pb-8 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-16 md:pb-10">
          <div>
            <h2 id="journey-heading" className="display-section">Choose your starting point.</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-text-muted">
            See what the first useful conversation could cover for your situation. The advice is personal, but the first step should never feel vague.
          </p>
        </div>

        <div role="tablist" aria-label="Applicant starting points" className="journey-tabs grid md:grid-cols-3">
          {journeys.map((journey) => {
            const selected = journey.id === active.id
            return (
              <button
                key={journey.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveId(journey.id)}
                className={`journey-tab ${selected ? "journey-tab-active" : ""}`}
              >
                <span className="font-heading text-3xl">{journey.number}</span>
                <span className="text-sm font-extrabold tracking-[0.08em] uppercase">{journey.tab}</span>
              </button>
            )
          })}
        </div>

        <div role="tabpanel" className="journey-panel grid overflow-hidden bg-cream lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative min-h-[320px] bg-navy md:min-h-[400px] lg:min-h-[500px]">
            <Image key={active.image} src={active.image} alt={active.alt} fill unoptimized sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-transparent to-transparent" />
            <p className="absolute right-6 bottom-6 left-6 max-w-lg border-l-2 border-gold pl-4 text-sm leading-6 text-cream md:right-auto md:bottom-8 md:left-8">
              {active.firstStep}
            </p>
          </div>

          <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
            <p className="eyebrow">{active.tab}</p>
            <h3 className="mt-4 max-w-[15ch] font-heading text-4xl leading-[1.02] text-navy md:text-5xl">{active.heading}</h3>
            <p className="mt-5 max-w-xl text-base leading-7 text-text-muted md:text-lg md:leading-8">{active.description}</p>

            <div className="mt-7 border-t border-navy/15">
              <p className="py-3 text-xs font-extrabold tracking-[0.14em] text-gold uppercase">What we can help you decide</p>
              {active.decisions.map((decision) => (
                <div key={decision} className="flex gap-3 border-t border-navy/12 py-3 text-navy">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" />
                  <span className="leading-7">{decision}</span>
                </div>
              ))}
            </div>

            <a href="#courses" className="button-primary mt-7 w-fit">
              See course options <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
