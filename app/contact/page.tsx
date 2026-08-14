"use client"

import { useState, useCallback } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/link-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"
import type { LeadFormState } from "@/app/actions/submit-lead"

const initialState: LeadFormState = {
  success: false,
  message: "",
}

export default function ContactPage() {
  const [state, setState] = useState<LeadFormState>({
    success: false,
    message: "",
  })
  const [pending, setPending] = useState(false)
  const formAction = useCallback(async (formData: FormData) => {
    setPending(true)
    setState({ success: false, message: "" })
    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      })
      const data = await res.json()
      setState(data)
    } catch {
      setState({
        success: false,
        message: "Something went wrong. Please try again.",
      })
    } finally {
      setPending(false)
    }
  }, [])

  if (state.success) {
    return (
      <>
        <Navbar />
        <main>
          <section className="section-padding bg-cream pt-40">
            <div className="container-wide px-4 md:px-8">
              <div className="mx-auto max-w-lg text-center">
                <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-success/10">
                  <CheckCircle2 className="size-10 text-success" />
                </div>
                <h1 className="font-heading text-4xl text-navy md:text-5xl">
                  Thank you for reaching out
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-text-muted">
                  We&apos;ve received your message and will get back to you
                  within 24 hours to schedule your free consultation.
                </p>
                <LinkButton
                  href="/"
                  variant="outline"
                  className="mt-8 rounded-full border-navy/30 px-8 text-navy"
                >
                  Return home
                </LinkButton>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-padding bg-cream pt-40">
          <div className="container-wide px-4 md:px-8">
            <div className="mx-auto max-w-3xl">
              <h1 className="font-heading text-5xl leading-tight text-navy md:text-6xl">
                Let&apos;s start a conversation
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-muted">
                Book a free 30-minute consultation to discuss your goals. No
                obligation, just honest advice about how we can help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="section-padding bg-warm-grey">
          <div className="container-wide px-4 md:px-8">
            <div className="grid gap-12 md:grid-cols-5">
              {/* Form */}
              <div className="md:col-span-3">
                <Card className="border-warm-grey-200 bg-white p-8 md:p-12">
                  <h2 className="font-heading text-2xl text-navy">
                    Book your free consultation
                  </h2>
                  <p className="mt-2 text-sm text-text-muted">
                    Fill in the form below and we&apos;ll be in touch within 24
                    hours.
                  </p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      formAction(new FormData(e.currentTarget))
                    }}
                    className="mt-8 space-y-6"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-navy"
                      >
                        Full name <span className="text-gold">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                        className="border-warm-grey-200 bg-cream focus-visible:ring-gold"
                      />
                      {state.errors?.name && (
                        <p className="mt-1 text-xs text-red-500">
                          {state.errors.name}
                        </p>
                      )}
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-navy"
                        >
                          Email address <span className="text-gold">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className="border-warm-grey-200 bg-cream focus-visible:ring-gold"
                        />
                        {state.errors?.email && (
                          <p className="mt-1 text-xs text-red-500">
                            {state.errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-medium text-navy"
                        >
                          Phone number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="07700 900000"
                          className="border-warm-grey-200 bg-cream focus-visible:ring-gold"
                        />
                        {state.errors?.phone && (
                          <p className="mt-1 text-xs text-red-500">
                            {state.errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-navy"
                      >
                        Your message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Which universities and courses are you interested in? What would you like help with?"
                        rows={5}
                        className="border-warm-grey-200 bg-cream focus-visible:ring-gold"
                      />
                    </div>
                    {state.message && !state.success && (
                      <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                        {state.message}
                      </div>
                    )}
                    <Button
                      type="submit"
                      disabled={pending}
                      size="lg"
                      className="w-full rounded-full bg-navy text-cream hover:bg-navy-light disabled:opacity-50"
                    >
                      {pending ? "Sending..." : "Send enquiry"}{" "}
                      <Send className="ml-2 size-4" />
                    </Button>
                    <p className="text-center text-xs text-text-muted">
                      By submitting this form, you agree to our{" "}
                      <a
                        href="/legal/privacy"
                        className="underline hover:text-navy"
                      >
                        Privacy Policy
                      </a>
                      . We&apos;ll never share your data with third parties.
                    </p>
                  </form>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="md:col-span-2">
                <div className="space-y-8">
                  <div>
                    <h3 className="font-heading text-xl text-navy">
                      Get in touch
                    </h3>
                    <p className="mt-2 text-sm text-text-muted">
                      Prefer to reach out directly? We&apos;d love to hear from
                      you.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                        <Mail className="size-4 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-navy">Email</p>
                        <a
                          href="mailto:hello@edurecruitment.co.uk"
                          className="text-sm text-text-muted transition-colors hover:text-gold"
                        >
                          hello@edurecruitment.co.uk
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                        <Phone className="size-4 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-navy">
                          WhatsApp
                        </p>
                        <a
                          href="https://wa.me/447367911861"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm text-text-muted transition-colors hover:text-gold"
                        >
                          +44 7367 911861
                        </a>
                        <a
                          href="https://wa.me/447710891277"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm text-text-muted transition-colors hover:text-gold"
                        >
                          +44 7710 891277
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                        <MapPin className="size-4 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-navy">
                          Location
                        </p>
                        <p className="text-sm text-text-muted">
                          London, United Kingdom
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-warm-grey-200 bg-cream p-6">
                    <h4 className="font-heading text-lg text-navy">
                      What to expect
                    </h4>
                    <ul className="mt-4 space-y-3 text-sm text-text-muted">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-gold">→</span>
                        We&apos;ll respond within 24 hours
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-gold">→</span>
                        Your first consultation is free and obligation-free
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-gold">→</span>
                        We&apos;ll ask about your goals and assess how we can
                        help
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-gold">→</span>
                        No hard sell — just honest, expert advice
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
