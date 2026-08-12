import Link from "next/link"
import { LinkButton } from "@/components/link-button"

interface CtaSectionProps {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CtaSection({
  title = "Ready to start your journey?",
  description = "Book a free 30-minute consultation to discuss your goals and discover how we can help you secure your place at a top UK university.",
  primaryLabel = "Book a free consultation",
  primaryHref = "/contact",
  secondaryLabel = "Explore our services",
  secondaryHref = "/services",
}: CtaSectionProps) {
  return (
    <section className="section-padding bg-warm-grey">
      <div className="container-wide text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-4xl text-navy md:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            {description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LinkButton
              href={primaryHref}
              size="lg"
              className="rounded-full bg-navy px-8 text-cream hover:bg-navy-light"
            >
              {primaryLabel}
            </LinkButton>
            <LinkButton
              href={secondaryHref}
              variant="outline"
              size="lg"
              className="rounded-full border-navy/30 px-8 text-navy hover:bg-navy/5"
            >
              {secondaryLabel}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  )
}
