"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { universities } from "@/data/universities"

function FadeInSection({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
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

export default function UniversityPartners() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <FadeInSection className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xltext-navy md:text-5xl">
            Our University Partners
          </h2>
          <p className="mt-4 text-lgtext-navy/60">
            Click any university to explore available courses.
          </p>
        </FadeInSection>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-12">
          {universities.map((uni, index) => (
            <motion.div
              key={uni.slug}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={`/universities/${uni.slug}`}
                className="group flex flex-col items-center gap-4"
              >
                <div className="flex h-24 items-center justify-center">
                  <img
                    src={uni.logo}
                    alt={`${uni.name} logo`}
                    className="max-h-full max-w-160px object-contain grayscale transition-all duration-300 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                </div>
                <span className="text-center text-sm font-medium text-navy/50 transition-colors duration-300 group-hover:text-navy">
                  {uni.shortName}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
