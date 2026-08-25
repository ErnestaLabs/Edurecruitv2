"use client"

/** Quiet Advocate, sharper spine: high-contrast partner atlas with direct, accessible course disclosure. */
import { universities } from "@/data/universities"
import { AnimatePresence, motion } from "motion/react"
import { ArrowUpRight, CalendarDays, Clock3, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function UniversityCourseAtlas() {
  const [activeSlug, setActiveSlug] = useState(universities[0].slug)
  const activeUniversity = universities.find((university) => university.slug === activeSlug) ?? universities[0]

  return (
    <section id="courses" aria-labelledby="course-atlas-title" className="course-atlas scroll-mt-24 overflow-hidden bg-navy text-cream">
      <div className="container-wide px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 border-b border-cream/20 pb-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-24">
          <div>
            <p className="eyebrow text-gold">University partners and courses</p>
            <h2 id="course-atlas-title" className="mt-5 max-w-[10ch] font-heading text-[clamp(3.2rem,7vw,7.8rem)] leading-[0.84] tracking-[-0.05em]">
              Find the place. See the possibilities.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-cream/72 lg:pb-2">
            Select a university logo to explore the courses currently listed in our guide. Your consultant can help you check which route, intake, and campus fit your circumstances.
          </p>
        </div>

        <div role="tablist" aria-label="University partners" className="partner-tabs mt-10 grid grid-cols-2 border-l border-t border-cream/20 md:grid-cols-3 lg:grid-cols-5">
          {universities.map((university, index) => {
            const selected = university.slug === activeUniversity.slug
            return (
              <button
                key={university.slug}
                type="button"
                role="tab"
                id={`partner-tab-${university.slug}`}
                aria-selected={selected}
                onClick={() => setActiveSlug(university.slug)}
                className={`partner-tab ${selected ? "partner-tab-active" : ""}`}
              >
                <span className="partner-index">0{index + 1}</span>
                <span className="relative flex h-20 w-full items-center justify-center">
                  <Image src={university.logo} alt={`${university.name} logo`} width={168} height={80} unoptimized className="max-h-16 w-auto max-w-[88%] object-contain" />
                </span>
                <span className="text-left text-xs font-bold tracking-[0.1em] uppercase">{university.shortName}</span>
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeUniversity.slug}
            id={`partner-panel-${activeUniversity.slug}`}
            role="tabpanel"
            aria-labelledby={`partner-tab-${activeUniversity.slug}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -28 }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
            className="mt-8 grid gap-8 border border-cream/20 bg-cream/[0.035] p-6 md:p-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:p-12"
          >
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-xs font-extrabold tracking-[0.16em] text-gold uppercase">Selected partner</p>
                <h3 className="mt-5 max-w-[12ch] font-heading text-5xl leading-[0.94] md:text-6xl">{activeUniversity.name}</h3>
                <p className="mt-6 max-w-xl leading-7 text-cream/70">{activeUniversity.description}</p>
              </div>

              <dl className="mt-10 grid gap-4 text-sm sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <div className="atlas-fact"><MapPin aria-hidden="true" className="size-4 text-gold" /><dt>Campus</dt><dd>{activeUniversity.campus}</dd></div>
                <div className="atlas-fact"><Clock3 aria-hidden="true" className="size-4 text-gold" /><dt>Attendance</dt><dd>{activeUniversity.attendance}</dd></div>
                <div className="atlas-fact"><CalendarDays aria-hidden="true" className="size-4 text-gold" /><dt>Listed intakes</dt><dd>{activeUniversity.intakes.join(", ")}</dd></div>
              </dl>

              <Link href={`/universities/${activeUniversity.slug}`} className="mt-9 inline-flex w-fit items-center gap-3 border-b border-gold pb-2 text-sm font-extrabold text-gold">
                View partner details <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>

            <div>
              <div className="flex items-end justify-between gap-5 border-b border-cream/20 pb-5">
                <h4 className="font-heading text-3xl md:text-4xl">Courses in the guide</h4>
                <span className="font-heading text-5xl text-gold">{String(activeUniversity.courses.length).padStart(2, "0")}</span>
              </div>
              <ol className="grid md:grid-cols-2">
                {activeUniversity.courses.map((course, index) => (
                  <li key={course.name} className="course-row">
                    <span className="font-heading text-xl text-gold">{String(index + 1).padStart(2, "0")}</span>
                    <span className="leading-6 text-cream/88">{course.name}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm leading-6 text-cream/55">Course and intake availability can change. Speak with EduRecruitment to confirm the current options for your application.</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
