"use client"

import { motion } from "motion/react"
import {
  GraduationCap,
  PiggyBank,
  UserCheck,
  Compass,
} from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"

const features = [
  {
    icon: GraduationCap,
    title: "University Applications",
    description:
      "Applying to uni is a big step, whether you’re straight out of college or haven’t studied in years. We break it down into clear, manageable steps so you know exactly what to do and when.",
  },
  {
    icon: PiggyBank,
    title: "Student Finance",
    description:
      "Tuition fees, maintenance loans, grants, bursaries. It’s a lot to take in. We help you understand what you’re entitled to and how to apply so you can focus on your studies, not the paperwork.",
  },
  {
    icon: UserCheck,
    title: "Personal Statements",
    description:
      "Your personal statement is where you tell your story. We help you craft something authentic and compelling that shows universities why you belong on their course.",
  },
  {
    icon: Compass,
    title: "Choosing the Right Course",
    description:
      "Not sure what to study? That’s completely normal. We help you match your interests and experience to the right subject and find courses that fit your goals.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-warm-grey">
      <div className="container-wide">
        <FadeInSection>
          <h2 className="font-heading text-4xl text-navy md:text-5xl">
            What We Help With
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            From your first enquiry to your first lecture — we’re here for every step.
          </p>
        </FadeInSection>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
                  <Icon className="size-6 text-gold" />
                </div>
                <h3 className="font-heading text-xl text-navy">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
