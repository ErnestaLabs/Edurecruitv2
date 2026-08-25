"use client"

/**
 * Style reminder: Consultation-first, evidence-led, and brand-respectful. The partner rail
 * answers a real course question, then hands context into the same in-flow consultation path.
 */
import { universities } from "@/data/universities"
import { CalendarDays, Clock3, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type UniversityCourseAtlasProps = {
  onConsultation: (topic: string) => void
}

export function UniversityCourseAtlas({ onConsultation }: UniversityCourseAtlasProps) {
  const [activeSlug, setActiveSlug] = useState(universities[0].slug)
  const activeUniversity = universities.find((university) => university.slug === activeSlug) ?? universities[0]
  const coursePreview = activeUniversity.courses.slice(0, 3)
  const remainingCourses = activeUniversity.courses.length - coursePreview.length

  return (
    <section id="courses" aria-labelledby="course-atlas-title" className="course-atlas scroll-mt-24 bg-navy py-14 text-cream md:py-20">
      <div className="container-wide px-5 md:px-8">
        <div className="grid gap-5 border-b border-cream/20 pb-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
          <h2 id="course-atlas-title" className="max-w-[13ch] font-heading text-[clamp(2.8rem,4.8vw,4.8rem)] leading-[0.92] tracking-[-0.04em]">Start with one course question.</h2>
          <p className="max-w-2xl text-base leading-7 text-cream/75 md:text-lg md:leading-8">Choose a partner to see a few courses currently listed in our guide. Use the conversation to work out what is worth comparing next.</p>
        </div>

        <div role="group" aria-label="University partners" className="partner-tabs mt-6 grid auto-cols-[minmax(164px,78%)] grid-flow-col md:auto-cols-auto md:grid-flow-row md:grid-cols-3 lg:grid-cols-5">
          {universities.map((university) => {
            const selected = university.slug === activeUniversity.slug
            return (
              <button key={university.slug} type="button" aria-pressed={selected} onClick={() => setActiveSlug(university.slug)} className={`partner-tab ${selected ? "partner-tab-active" : ""}`}>
                <span className="partner-logo-stage relative flex h-16 w-full items-center justify-start md:h-[4.5rem]">
                  <Image src={university.logo} alt={`${university.name} logo`} width={260} height={112} unoptimized className="h-full w-auto max-w-full object-contain object-left" />
                </span>
                <span className="text-left text-[0.68rem] font-bold tracking-[0.1em] uppercase">{university.shortName}</span>
              </button>
            )
          })}
        </div>
        <p className="mt-3 text-xs font-bold tracking-[0.12em] text-cream/60 uppercase md:hidden">Swipe to compare partners</p>

        <div aria-live="polite" className="mt-6 grid gap-7 border border-cream/20 bg-cream/[0.035] p-5 md:grid-cols-[0.82fr_1.18fr] md:gap-10 md:p-7">
          <div>
            <p className="text-xs font-extrabold tracking-[0.16em] text-gold uppercase">Selected partner</p>
            <h3 className="mt-3 max-w-[16ch] font-heading text-3xl leading-[1] md:text-4xl">{activeUniversity.name}</h3>
            <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-3 md:grid-cols-1 xl:grid-cols-3">
              <div className="atlas-fact"><MapPin aria-hidden="true" className="size-4 text-gold" /><dt>Campus</dt><dd>{activeUniversity.campus}</dd></div>
              <div className="atlas-fact"><Clock3 aria-hidden="true" className="size-4 text-gold" /><dt>Attendance</dt><dd>{activeUniversity.attendance}</dd></div>
              <div className="atlas-fact"><CalendarDays aria-hidden="true" className="size-4 text-gold" /><dt>Listed intakes</dt><dd>{activeUniversity.intakes.join(", ")}</dd></div>
            </dl>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-4">
              <Link href={`/universities/${activeUniversity.slug}`} className="button-secondary text-gold">View full partner guide</Link>
              <button type="button" className="button-primary" onClick={() => onConsultation(`A course or university question about ${activeUniversity.name}`)}>
                Ask about {activeUniversity.shortName}
              </button>
            </div>
          </div>

          <div>
            <div className="border-b border-cream/20 pb-4">
              <h4 className="font-heading text-2xl md:text-3xl">A few courses in the guide</h4>
            </div>
            <ol className="grid md:grid-cols-3">
              {coursePreview.map((course) => <li key={course.name} className="course-row"><span className="leading-6 text-cream/88">{course.name}</span></li>)}
            </ol>
            <p className="mt-4 text-sm leading-6 text-cream/60">{remainingCourses > 0 ? `${remainingCourses} more course${remainingCourses === 1 ? " is" : "s are"} listed in the partner guide. ` : ""}Course and intake availability can change.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
