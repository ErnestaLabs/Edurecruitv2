"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { MovingBorder } from "@/components/aceternity/moving-border"
import { FadeInSection } from "@/components/fade-in-section"

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 md:py-32">
      <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-2xl px-4 text-center">
        <FadeInSection>
          <h2 className="font-heading text-4xl text-cream md:text-5xl">
            Your Future Starts With a Conversation
          </h2>
          <p className="mt-4 text-lg text-cream/80">
            Whether you’re moving up from college, coming back to education
            after years away, or taking your career to the next level.
            Wherever you are, we’ll help you get where you’re going.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/447710891277"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-full bg-gold px-8 py-6 text-base text-navy shadow-lg shadow-gold/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/90 hover:shadow-xl hover:shadow-gold/30">
                Chat on WhatsApp Now
                <MessageCircle className="ml-2 size-4" />
              </Button>
            </a>
            <a href="#contact">
              <MovingBorder duration={3000} className="rounded-full">
                <Button
                  variant="outline"
                  className="rounded-full border-gold/30 bg-transparent px-8 py-6 text-base text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-gold/10"
                >
                  Get in touch
                </Button>
              </MovingBorder>
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
