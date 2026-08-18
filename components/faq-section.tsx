"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FadeInSection } from "@/components/fade-in-section"

const faqItems = [
  {
    value: "item-1",
    question: "Do I really need help applying to university?",
    answer: "Not everyone does, but many people find the process overwhelming — especially if you’re the first in your family to apply, or you’re returning to education after a break. We make sure nothing gets missed.",
  },
  {
    value: "item-2",
    question: "Is there really no catch?",
    answer: "No catch. We earn when you enrol at one of our partner universities. Your consultation, application support, and guidance are completely free.",
  },
  {
    value: "item-3",
    question: "How long does the whole process take?",
    answer: "Most students go from first chat to application submission in 4–8 weeks. But there’s no pressure — we work at your pace.",
  },
  {
    value: "item-4",
    question: "What if I don’t know what I want to study?",
    answer: "That’s exactly the kind of thing we help with. We’ll talk through your interests, experience, and goals to find courses that feel right for you.",
  },
  {
    value: "item-5",
    question: "Can I still apply if I don’t have traditional qualifications?",
    answer: "Yes. Many universities welcome mature students with professional experience or alternative qualifications. We’ll help you find courses that recognise what you bring.",
  },
  {
    value: "item-6",
    question: "Is the WhatsApp number really monitored?",
    answer: "Yes. One of our consultants responds personally to every message during working hours. No chatbots, no automated replies.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="section-padding bg-warm-grey">
      <div className="container-wide max-w-3xl">
        <FadeInSection>
          <h2 className="font-heading text-4xl text-navy md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Everything you need to know before you get started.
          </p>
        </FadeInSection>

        <div className="mt-12">
          <Accordion className="space-y-3">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="rounded-xl border border-warm-grey-200 bg-white px-6 transition-colors hover:border-gold/20"
              >
                <AccordionTrigger className="text-left font-medium text-navy hover:text-gold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-muted">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
