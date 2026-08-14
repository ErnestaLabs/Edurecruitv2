"use client"

import { motion } from "motion/react"
import { GraduationCap, PiggyBank, UserCheck, Compass } from "lucide-react"

const services = [
  {
    icon: GraduationCap,
    title: "University Applications",
    description:
      "Applying to uni is a big step, whether you’re straight out of college or haven’t studied in years. We’ll help you pick the right course, write a personal statement that stands out, and manage every deadline. One person, your person, the whole way.",
    image:
      "https://images.pexels.com/photos/8197549/pexels-photo-8197549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    icon: PiggyBank,
    title: "Student Finance",
    description:
      "Tuition fees, maintenance loans, grants, bursaries. It’s a lot to take in. We’ll explain exactly what you’re entitled to and how to apply. No jargon, no guesswork. Just the facts, tailored to your situation.",
    image:
      "https://images.pexels.com/photos/9159076/pexels-photo-9159076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    icon: UserCheck,
    title: "Personal Statements",
    description:
      "Your personal statement is where you tell your story. Whether you’re 18 with work experience or 38 with a career behind you, we’ll help you write something that shows admissions tutors who you really are and why you belong on their course.",
    image:
      "https://images.pexels.com/photos/6684046/pexels-photo-6684046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    icon: Compass,
    title: "Choosing the Right Course",
    description:
      "Not sure what to study? That’s completely normal, whether you’re deciding between degrees or wondering if uni is even right for you. We’ll help you find a course that fits your interests, your experience, and your goals.",
    image:
      "https://images.pexels.com/photos/5311406/pexels-photo-5311406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
]

export function WhatWeHelpWith() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-navy bg-[radial-gradient(ellipse_at_78%_12%,rgba(201,168,76,0.14)_0%,rgba(201,168,76,0.05)_34%,transparent_66%)] py-24 md:py-32"
    >
      {/* Broad, low-contrast navy-to-gold Aceternity-style wash. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[22%] -right-[12%] z-0 h-[108%] w-[112%] rounded-full bg-[radial-gradient(ellipse_at_68%_18%,rgba(201,168,76,0.18)_0%,rgba(201,168,76,0.09)_28%,rgba(201,168,76,0.035)_48%,transparent_72%)] blur-3xl"
        animate={{
          x: ["3%", "-3%", "3%"],
          y: ["0%", "4%", "0%"],
          scale: [1, 1.035, 1],
        }}
        transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[30%] -left-[18%] z-0 h-[70%] w-[62%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.07)_0%,transparent_68%)] blur-3xl"
        animate={{ x: ["-2%", "5%", "-2%"], scale: [1, 1.04, 1] }}
        transition={{ duration: 26, ease: "easeInOut", repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-4xl leading-tight text-cream md:text-5xl">
            What We Do
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream/70">
            Whether you’re leaving college or coming back to education after
            years away, we give you one dedicated consultant who stays with you
            from first call to first day.
          </p>
        </motion.div>

        <div className="mt-20 space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group"
            >
              <div
                className={`flex flex-col items-center gap-8 md:flex-row ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="relative w-full overflow-hidden rounded-2xl md:w-[42%]">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover object-[center_30%] transition-all duration-700 group-hover:scale-105"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-navy/30 via-transparent to-transparent" />
                </div>

                <div className="w-full md:w-[54%] md:px-4">
                  <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-gold/10">
                    <service.icon className="size-5 text-gold" />
                  </div>
                  <h3 className="font-heading text-2xl leading-snug text-cream md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-prose leading-relaxed text-cream/70">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 flex items-center gap-2 text-sm font-medium text-gold transition-all duration-300 hover:gap-3"
                  >
                    <span>Learn more</span>
                    <svg
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
