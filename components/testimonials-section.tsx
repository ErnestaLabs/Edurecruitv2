"use client"

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { FadeInSection } from "@/components/fade-in-section"

const testimonials = [
  {
    quote:
      "I wasn’t sure if I was ready to apply for university, but Valentina explained everything step by step and made the whole process much less stressful. She helped me with my application, CV, and personal statement, and was always available whenever I had questions. I really appreciated her patience and honesty throughout the entire process.",
    name: "Andrea",
    designation: "Recent graduate",
    src: "/images/Andrea.jpg",
  },
  {
    quote:
      "Excellent service from start to finish. Communication was always quick, and I was kept updated throughout every stage of my application. I never felt rushed or pressured, and everything was explained clearly. I would definitely recommend VM Education Recruitment to anyone looking for support with university applications.",
    name: "Razvan Rosca",
    designation: "Recent graduate",
    src: "/images/Razvan Rosca.png",
  },
  {
    quote:
      "I received amazing service from Carlotta! She helped me every step of the way, from showing me different university options to assisting me with my applications. She supported me throughout the entire process, and whenever I had a question, she was always there to help. I would highly recommend her. She is fast, knowledgeable, and kind.",
    name: "Giulia Conti",
    designation: "Recent graduate",
    src: "/images/5289.jpg",
  },
  {
    quote:
      "I was nervous about applying at first, but my consultant put me at ease immediately. They were patient, knowledgeable, and always responded quickly to my questions.",
    name: "Sarah Mitchell",
    designation: "Mature student",
    src: "/images/Andrea.jpg",
  },
  {
    quote:
      "The support I received was exceptional. From helping me choose the right course to polishing my personal statement, every detail was handled with care and professionalism.",
    name: "James Wilson",
    designation: "Postgraduate applicant",
    src: "/images/Andrea.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-wide">
        <FadeInSection>
          <h2 className="font-heading text-4xl text-navy md:text-5xl">
            What Our Students Say
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            Real stories from real students who found their path with our help.
          </p>
        </FadeInSection>

        <div className="mt-16">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </div>
    </section>
  )
}
