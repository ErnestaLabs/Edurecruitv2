"use client"

/**
 * Style reminder: Consultation-first, editorial, and mobile-safe. This dialog is a
 * deliberate product moment, not a floating promotion. It collects only enough context
 * to make the later full conversation feel personal and never sits over page content.
 */
import { ArrowRight, Check, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export type ConsultationPrefill = {
  topic: string
  name: string
  contact: string
}

type ConsultationSheetProps = {
  initialTopic?: string
  onClose: () => void
  onContinue: (prefill: ConsultationPrefill) => void
}

const topics = [
  "Course and university options",
  "Application or personal statement",
  "Returning to study",
] as const

export function ConsultationSheet({ initialTopic = "", onClose, onContinue }: ConsultationSheetProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)
  const [topic, setTopic] = useState(initialTopic)
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    previouslyFocused.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const frame = window.requestAnimationFrame(() => dialogRef.current?.focus())
    return () => {
      window.cancelAnimationFrame(frame)
      document.body.style.overflow = originalOverflow
      previouslyFocused.current?.focus()
    }
  }, [])

  const trapFocus = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault()
      onClose()
      return
    }

    if (event.key !== "Tab") return
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
    )
    if (!focusable?.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!topic || !name.trim() || !contact.trim()) {
      setError("Choose what you want to discuss and leave a name plus one way to reply.")
      return
    }

    onContinue({ topic, name: name.trim(), contact: contact.trim() })
  }

  return (
    <div className="consultation-sheet-root" role="presentation">
      <button type="button" className="consultation-sheet-scrim" aria-label="Close the 15-minute university plan" onClick={onClose} />
      <div
        ref={dialogRef}
        className="consultation-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-sheet-title"
        aria-describedby="consultation-sheet-intro"
        tabIndex={-1}
        onKeyDown={trapFocus}
      >
        <div className="flex items-start justify-between gap-5 border-b border-navy/15 px-5 py-5 md:px-8">
          <div>
            <p className="eyebrow text-gold">15-minute university plan</p>
            <h2 id="consultation-sheet-title" className="mt-2 font-heading text-3xl leading-none text-navy md:text-4xl">Start with the question you have.</h2>
          </div>
          <button type="button" className="consultation-sheet-close" aria-label="Close consultation plan" onClick={onClose}>
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>

        <form className="px-5 pb-7 pt-6 md:px-8 md:pb-8" onSubmit={handleSubmit}>
          <p id="consultation-sheet-intro" className="max-w-xl text-base leading-7 text-text-muted">
            Bring the course, question, or situation you are working through. We will help you identify what to compare or do next.
          </p>

          {initialTopic && !topics.includes(initialTopic as (typeof topics)[number]) && (
            <p className="mt-4 border-l-2 border-gold bg-gold/10 px-3 py-2 text-sm font-semibold leading-6 text-navy">We’ll begin with: {initialTopic}</p>
          )}

          <fieldset className="mt-6">
            <legend className="text-sm font-extrabold text-navy">What are you figuring out?</legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {topics.map((option) => {
                const selected = option === topic
                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={selected}
                    className={`consultation-topic ${selected ? "consultation-topic-active" : ""}`}
                    onClick={() => {
                      setTopic(option)
                      setError("")
                    }}
                  >
                    {selected && <Check aria-hidden="true" className="size-4 shrink-0" />}
                    <span>{option}</span>
                  </button>
                )
              })}
            </div>
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="consultation-name" className="form-label">Your name</label>
              <input id="consultation-name" className="form-field" value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" placeholder="Your first name is enough" />
            </div>
            <div>
              <label htmlFor="consultation-contact" className="form-label">Email or phone</label>
              <input id="consultation-contact" className="form-field" value={contact} onChange={(event) => setContact(event.target.value)} autoComplete="email" placeholder="One way for us to reply" />
            </div>
          </div>

          {error && <p role="alert" className="mt-4 text-sm font-medium text-red-700">{error}</p>}

          <div className="mt-6 flex flex-col gap-3 border-t border-navy/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-text-muted">We will reply within 24 hours to arrange the conversation.</p>
            <button type="submit" className="button-primary w-full justify-center sm:w-auto">
              Continue to your plan <ArrowRight aria-hidden="true" className="size-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
