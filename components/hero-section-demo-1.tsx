"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect"
import { ArrowRight } from "lucide-react"

interface HeroSectionOneProps {
  badge?: string
  headline: string
  highlight: string
  description: string
  supportingLine?: string
  primaryCta: { text: string; href: string }
  secondaryCta: { text: string; href: string }
  children?: React.ReactNode
}

export default function HeroSectionOne({
  badge,
  headline = "It's Not Too Late.",
  highlight = "University Is Waiting.",
  description = "Free, expert guidance for adults returning to education.",
  supportingLine,
  primaryCta = { text: "Book a Free Chat", href: "#contact" },
  secondaryCta = { text: "How It Works", href: "#process" },
  children,
}: HeroSectionOneProps) {
  return (
    <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col items-center justify-center overflow-hidden px-4">
      {/* Subtle Aceternity-inspired gold wash: slow, low-contrast movement behind hero content. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-18%] -left-1/4 z-0 h-[72%] w-[78%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.16)_0%,rgba(201,168,76,0.06)_34%,transparent_72%)] blur-3xl"
        animate={{
          x: ["-4%", "12%", "-4%"],
          y: ["-2%", "8%", "-2%"],
          scale: [1, 1.06, 1],
        }}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Decorative lines */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-navy/10">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-navy/10">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-navy/10">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>

      <div className="grid w-full items-center gap-12 py-10 md:grid-cols-2 md:py-20">
        {/* Left column: text */}
        <div>
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-8"
            >
              <Badge className="border-gold/30 bg-gold/10 text-gold hover:bg-gold/20">
                {badge}
              </Badge>
            </motion.div>
          )}

          {/* Headline with word-by-word animation */}
          <h1 className="relative z-10 font-heading text-4xl leading-tight text-navy md:text-6xl lg:text-7xl">
            <span className="block">
              <TextGenerateEffect
                words={headline}
                className="font-heading text-4xl leading-tight text-navy md:text-6xl lg:text-7xl"
              />
            </span>
            <span className="mt-2 block text-gold md:mt-3">{highlight}</span>
          </h1>

          {/* Description */}
          <p className="relative z-10 mt-6 max-w-lg text-lg leading-relaxed text-navy/70">
            {description}
          </p>
          {supportingLine && (
            <p className="relative z-10 mt-3 max-w-lg text-sm leading-relaxed text-text-muted">
              {supportingLine}
            </p>
          )}

          {/* CTAs */}
          <div className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={primaryCta.href}>
              <Button className="rounded-full bg-gold px-8 py-6 text-base text-navy shadow-lg shadow-gold/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/90 hover:shadow-xl hover:shadow-gold/30">
                {primaryCta.text}
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </a>
            <a href={secondaryCta.href}>
              <Button
                variant="outline"
                className="rounded-full border-navy/30 bg-transparent px-8 py-6 text-base text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/50 hover:bg-navy/5"
              >
                {secondaryCta.text}
              </Button>
            </a>
          </div>
        </div>

        {/* Right column: form */}
        {children && <div>{children}</div>}
      </div>
    </div>
  )
}
