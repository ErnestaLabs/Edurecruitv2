"use client"

import { AnimatePresence, motion } from "motion/react"
import { FormEvent, useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { submitLead } from "@/app/actions/submit-lead"

type ContactMethod = "whatsapp" | "email"

type Intake = {
  name: string
  contactMethod: ContactMethod
  contact: string
  question: string
}

const TOTAL_STEPS = 4

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [intake, setIntake] = useState<Intake>({
    name: "",
    contactMethod: "whatsapp",
    contact: "",
    question: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")

  function closeWidget() {
    setOpen(false)
    setStep(0)
    setError("")
  }

  function validateStep() {
    if (step === 0 && !intake.name.trim()) return "Please enter your name."
    if (step === 2 && !intake.contact.trim()) {
      return contactMethodLabel(intake.contactMethod) + " is required."
    }
    if (
      step === 2 &&
      intake.contactMethod === "email" &&
      !/^\S+@\S+\.\S+$/.test(intake.contact.trim())
    ) {
      return "Please enter a valid email address."
    }
    if (step === 3 && !intake.question.trim())
      return "Tell us briefly what you need help with."
    return ""
  }

  function contactMethodLabel(method: ContactMethod) {
    return method === "whatsapp" ? "A WhatsApp number" : "An email address"
  }

  function handleNext(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validationError = validateStep()
    if (validationError) {
      setError(validationError)
      return
    }
    setError("")
    setStep((current) => Math.min(current + 1, TOTAL_STEPS - 1))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validationError = validateStep()
    if (validationError) {
      setError(validationError)
      return
    }

    const name = intake.name.trim()
    const contact = intake.contact.trim()
    const question = intake.question.trim()
    const methodLabel =
      intake.contactMethod === "whatsapp" ? "WhatsApp" : "email"
    const whatsappMessage = [
      "Hi, I’d like some help with returning to university.",
      "",
      `Name: ${name}`,
      `Preferred contact: ${methodLabel}`,
      `Contact detail: ${contact}`,
      `Message: ${question}`,
    ].join("\n")

    setSubmitting(true)
    setError("")
    const leadFormData = new FormData()
    leadFormData.set("name", name)
    leadFormData.set("email", intake.contactMethod === "email" ? contact : "")
    leadFormData.set(
      "phone",
      intake.contactMethod === "whatsapp" ? contact : ""
    )
    leadFormData.set("message", question)

    try {
      const result = await submitLead(
        { success: false, message: "" },
        leadFormData
      )
      if (!result.success) {
        setError(result.message)
        setSubmitting(false)
        return
      }
    } catch {
      setError("We couldn't save your enquiry. Please try again.")
      setSubmitting(false)
      return
    }

    window.location.href = `https://wa.me/447367911861?text=${encodeURIComponent(whatsappMessage)}`
  }

  function update<K extends keyof Intake>(key: K, value: Intake[K]) {
    setIntake((current) => ({ ...current, [key]: value }))
    setError("")
  }

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setOpen((current) => !current)}
        className="fixed right-6 bottom-6 z-50 flex size-14 items-center justify-center rounded-full bg-navy text-gold shadow-lg shadow-navy/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/40"
        aria-label={
          open ? "Close WhatsApp enquiry form" : "Message us on WhatsApp"
        }
        aria-expanded={open}
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed right-6 bottom-24 z-50 w-[calc(100vw-3rem)] max-w-sm overflow-hidden rounded-2xl border border-warm-grey-200 bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between gap-3 border-b border-warm-grey-200 bg-cream p-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-gold/15">
                  <MessageCircle className="size-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">
                    Message us on WhatsApp
                  </p>
                  <p className="text-xs text-navy/60">
                    A few quick details first
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={closeWidget}
                className="rounded-full p-1.5 text-navy/50 transition-colors hover:bg-navy/5 hover:text-navy"
                aria-label="Close enquiry form"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="h-1 bg-warm-grey-200">
              <motion.div
                className="h-full bg-gold"
                animate={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
              />
            </div>

            <form
              onSubmit={step === TOTAL_STEPS - 1 ? handleSubmit : handleNext}
              className="bg-white p-5"
            >
              <p className="text-xs font-medium tracking-[0.16em] text-text-muted uppercase">
                Question {step + 1} of {TOTAL_STEPS}
              </p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.18 }}
                  className="mt-5 min-h-32"
                >
                  {step === 0 && (
                    <label className="block text-lg leading-snug font-medium text-navy">
                      What’s your name?
                      <input
                        autoFocus
                        name="name"
                        value={intake.name}
                        onChange={(event) => update("name", event.target.value)}
                        type="text"
                        autoComplete="name"
                        placeholder="Your name"
                        className="mt-5 w-full rounded-lg border border-navy/20 bg-cream px-3 py-3 text-sm font-normal text-navy outline-none placeholder:text-navy/40 focus:border-gold focus:ring-1 focus:ring-gold"
                      />
                    </label>
                  )}
                  {step === 1 && (
                    <fieldset>
                      <legend className="text-lg leading-snug font-medium text-navy">
                        Where should we contact you?
                      </legend>
                      <div className="mt-5 grid grid-cols-2 gap-3">
                        {(["whatsapp", "email"] as ContactMethod[]).map(
                          (method) => (
                            <label
                              key={method}
                              className={`cursor-pointer rounded-lg border p-3 text-center text-sm transition-colors ${intake.contactMethod === method ? "border-gold bg-gold/10 text-navy" : "border-navy/20 bg-cream text-navy/70 hover:border-gold/60"}`}
                            >
                              <input
                                type="radio"
                                name="contact-method"
                                value={method}
                                checked={intake.contactMethod === method}
                                onChange={() => update("contactMethod", method)}
                                className="sr-only"
                              />
                              {method === "whatsapp" ? "WhatsApp" : "Email"}
                            </label>
                          )
                        )}
                      </div>
                    </fieldset>
                  )}
                  {step === 2 && (
                    <label className="block text-lg leading-snug font-medium text-navy">
                      What’s your{" "}
                      {intake.contactMethod === "whatsapp"
                        ? "WhatsApp number"
                        : "email address"}
                      ?
                      <input
                        autoFocus
                        name="contact"
                        value={intake.contact}
                        onChange={(event) =>
                          update("contact", event.target.value)
                        }
                        type={
                          intake.contactMethod === "whatsapp" ? "tel" : "email"
                        }
                        autoComplete={
                          intake.contactMethod === "whatsapp" ? "tel" : "email"
                        }
                        placeholder={
                          intake.contactMethod === "whatsapp"
                            ? "Your phone number"
                            : "you@example.com"
                        }
                        className="mt-5 w-full rounded-lg border border-navy/20 bg-cream px-3 py-3 text-sm font-normal text-navy outline-none placeholder:text-navy/40 focus:border-gold focus:ring-1 focus:ring-gold"
                      />
                    </label>
                  )}
                  {step === 3 && (
                    <label className="block text-lg leading-snug font-medium text-navy">
                      What can we help with?
                      <textarea
                        autoFocus
                        name="question"
                        value={intake.question}
                        onChange={(event) =>
                          update("question", event.target.value)
                        }
                        rows={3}
                        placeholder="Tell us briefly what you need help with"
                        className="mt-5 w-full resize-none rounded-lg border border-navy/20 bg-cream px-3 py-3 text-sm font-normal text-navy outline-none placeholder:text-navy/40 focus:border-gold focus:ring-1 focus:ring-gold"
                      />
                    </label>
                  )}
                </motion.div>
              </AnimatePresence>

              {error && (
                <p
                  role="alert"
                  className="mt-3 rounded-lg bg-red-50 p-3 text-xs leading-relaxed text-red-700"
                >
                  {error}
                </p>
              )}
              <div className="mt-5 flex items-center justify-between gap-3">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={() => {
                      setError("")
                      setStep((current) => current - 1)
                    }}
                    className="rounded-full px-4 py-2.5 text-sm text-navy/70 transition-colors hover:bg-navy/5"
                  >
                    Back
                  </button>
                ) : (
                  <span />
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-navy-light disabled:opacity-60"
                >
                  {submitting
                    ? "Preparing WhatsApp…"
                    : step === TOTAL_STEPS - 1
                      ? "Continue to WhatsApp"
                      : "Continue"}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
