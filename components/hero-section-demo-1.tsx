"use client"

import { Button } from "@/components/ui/button"
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
    <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col items-center justify-center px-4">
      <div className="grid w-full items-center gap-12 py-10 md:grid-cols-2 md:py-20">
        {/* Left column: text */}
        <div>
          {/* Headline */}
          <h1 className="font-heading text-4xl leading-tight text-navy md:text-6xl lg:text-7xl">
            <span className="block">{headline}</span>
            <span className="mt-2 block text-gold md:mt-3">{highlight}</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy/70">
            {description}
          </p>
          {supportingLine && (
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-text-muted">
              {supportingLine}
            </p>
          )}

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
