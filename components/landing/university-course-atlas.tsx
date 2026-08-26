"use client"

/**
 * Style reminder: Relume Logo Sections inform the natural, unboxed identity rail. Agency
 * Agents use real course data only as conversation context; Impeccable protects mobile
 * reading flow by keeping selection, facts, and action in normal document order.
 */
import { universities } from "@/data/universities"
import { ScrollReveal } from "@/components/landing/scroll-reveal"
import { ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type UniversityCourseAtlasProps = {
  onQuestionSelected: (question: string) => void
}

export function UniversityCourseAtlas({ onQuestionSelected }: UniversityCourseAtlasProps) {
  const [activeSlug, setActiveSlug] = useState(universities[0].slug)
  const activeUniversity = universities.find((university) => university.slug === activeSlug) ?? universities[0]
  const preview = activeUniversity.courses.slice(0, 3)

  return (
    <section id="courses" aria-labelledby="partners-title" className="section-pad bg-navy text-cream">
      <div className="shell">
        <ScrollReveal variant="section">
          <div className="partner-heading">
            <div>
              <h2 id="partners-title" className="display max-w-[15ch]">Choose an option to ask a better question.</h2>
            </div>
            <p>These listed partners and course examples are a place to start. We can help you work out what is worth comparing for your situation.</p>
          </div>

          <div role="group" aria-label="Select a university partner" className="partner-brand-row mt-10">
          {universities.map((university) => {
            const selected = university.slug === activeUniversity.slug
            return (
              <button key={university.slug} type="button" aria-pressed={selected} className={`partner-brand ${selected ? "partner-brand-active" : ""}`} onClick={() => setActiveSlug(university.slug)}>
                <Image src={university.logo} alt={`${university.name} logo`} width={320} height={132} unoptimized className="h-14 w-auto max-w-full object-contain md:h-16" />
              </button>
            )
          })}
          </div>

          <article aria-live="polite" className="partner-detail mt-10">
          <div className="partner-detail-main">
            <h3 className="font-heading text-4xl leading-[0.98] md:text-5xl">{activeUniversity.name}</h3>
            <dl className="partner-facts mt-7">
              <div><MapPin aria-hidden="true" className="size-4 text-gold" /><dt>Campus</dt><dd>{activeUniversity.campus}</dd></div>
              <div><Clock3 aria-hidden="true" className="size-4 text-gold" /><dt>Attendance</dt><dd>{activeUniversity.attendance}</dd></div>
              <div><CalendarDays aria-hidden="true" className="size-4 text-gold" /><dt>Listed intakes</dt><dd>{activeUniversity.intakes.join(", ")}</dd></div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <button type="button" className="gold-link" onClick={() => onQuestionSelected(`I want to ask about ${activeUniversity.name} and the course options listed.`)}>Ask about this option <ArrowRight aria-hidden="true" className="size-4" /></button>
              <Link href={`/universities/${activeUniversity.slug}`} className="cream-link">View partner guide</Link>
            </div>
          </div>

          <div className="partner-course-list">
            <p className="font-heading text-2xl text-cream">A few listed courses</p>
            <ul className="mt-5">
              {preview.map((course) => <li key={course.name}>{course.name}</li>)}
            </ul>
            <p className="mt-5 text-sm leading-6 text-cream/65">Course and intake availability can change. We will help you identify the questions to check before you decide.</p>
          </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  )
}
