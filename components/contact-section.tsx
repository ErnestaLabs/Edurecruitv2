"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { Phone, Mail, MessageCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { FadeInSection } from "@/components/fade-in-section"
import type { LeadFormState } from "@/app/actions/submit-lead"

interface ContactSectionProps {
  leadAction: (formData: FormData) => Promise<void>
  leadState: LeadFormState
  leadPending: boolean
}

export function ContactSection({ leadAction, leadState, leadPending }: ContactSectionProps) {
  return (
    <section id="contact" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <FadeInSection className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl text-navy md:text-5xl">Ready to Start?</h2>
          <p className="mt-4 text-lg text-text-muted">
            Book a free 15-minute chat. No pressure, no commitment.
          </p>
        </FadeInSection>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-12 max-w-lg"
        >
          <Card className="border-0 bg-white p-8 shadow-sm">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                leadAction(new FormData(e.currentTarget))
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="hp-name" className="mb-1.5 block text-sm font-medium text-navy">
                  Full name <span className="text-gold">*</span>
                </label>
                <input
                  id="hp-name"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-warm-grey-200 bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-text-muted/50 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="hp-email" className="mb-1.5 block text-sm font-medium text-navy">
                  Email <span className="text-gold">*</span>
                </label>
                <input
                  id="hp-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-warm-grey-200 bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-text-muted/50 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="hp-phone" className="mb-1.5 block text-sm font-medium text-navy">
                  Phone <span className="text-gold">*</span>
                </label>
                <input
                  id="hp-phone"
                  name="phone"
                  type="tel"
                  placeholder="07700 900000"
                  className="w-full rounded-lg border border-warm-grey-200 bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-text-muted/50 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="hp-message" className="mb-1.5 block text-sm font-medium text-navy">
                  What are you interested in?{" "}
                  <span className="font-normal text-text-muted/50">(optional)</span>
                </label>
                <textarea
                  id="hp-message"
                  name="message"
                  rows={3}
                  placeholder="e.g. I'd like to study nursing..."
                  className="w-full resize-none rounded-lg border border-warm-grey-200 bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-text-muted/50 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                />
              </div>
              {leadState.message && !leadState.success && (
                <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                  {leadState.message}
                </div>
              )}
              <button
                type="submit"
                disabled={leadPending}
                className="w-full rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy transition-all hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/30 disabled:opacity-50"
              >
                {leadPending ? "Sending..." : "Send message"}
              </button>
              <p className="text-center text-xs text-text-muted/60">
                No spam. Ever. We'll respond within 24 hours.
              </p>
            </form>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-warm-grey-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-3 text-text-muted/50">or reach out directly</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <Phone className="size-4 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy">Call us</p>
                  <p className="text-xs text-navy/60">+44 7710 891277</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <Mail className="size-4 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy">Email us</p>
                  <p className="text-xs text-navy/60">hello@edurecruitment.co.uk</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <MessageCircle className="size-4 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy">WhatsApp</p>
                  <p className="text-xs text-navy/60">Chat with us instantly</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
