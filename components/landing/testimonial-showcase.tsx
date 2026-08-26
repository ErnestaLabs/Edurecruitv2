/**
 * Style reminder: Relume Testimonial 37 informs the proof-grid structure; Agency Agents
 * require real, attributable student evidence before service detail; Impeccable requires
 * one lead proof and tightly grouped supporting proof rather than carousel theatre.
 */
import Image from "next/image"

const stories = [
  {
    quote: "I wasn’t sure if I was ready to apply for university, but Valentina explained everything step by step and made the whole process much less stressful.",
    name: "Andrea",
    designation: "Recent graduate",
    src: "/images/Andrea.jpg",
  },
  {
    quote: "Communication was always quick, and I was kept updated throughout every stage of my application. I never felt rushed or pressured.",
    name: "Razvan Rosca",
    designation: "Recent graduate",
    src: "/images/Razvan Rosca.png",
  },
  {
    quote: "She helped me every step of the way, from different university options to the application itself.",
    name: "Giulia Conti",
    designation: "Recent graduate",
    src: "/images/5289.jpg",
  },
] as const

export function TestimonialShowcase() {
  const [lead, second, third] = stories

  return (
    <section id="stories" aria-labelledby="stories-title" className="section-pad bg-warm-grey">
      <div className="shell">
          <div className="proof-heading">
            <h2 id="stories-title" className="display max-w-[14ch]">Support should make the next step feel less lonely.</h2>
            <p className="section-intro">These are the experiences students shared after working through their university questions with EduRecruitment.</p>
          </div>

          <div className="proof-grid mt-10 md:mt-14">
            <figure className="proof-lead">
            <div className="proof-image-wrap">
              <Image src={lead.src} alt={`${lead.name}, ${lead.designation}`} fill sizes="(min-width: 1024px) 54vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="proof-lead-copy">
              <blockquote>“{lead.quote}”</blockquote>
              <p><strong>{lead.name}</strong> · {lead.designation}</p>
            </figcaption>
            </figure>

            <div className="proof-support">
              {[second, third].map((story) => (
                <article key={story.name} className="proof-quote">
                <div className="proof-person">
                  <Image src={story.src} alt={`${story.name}, ${story.designation}`} width={64} height={64} className="size-16 object-cover" />
                  <div><p>{story.name}</p><span>{story.designation}</span></div>
                </div>
                <blockquote>“{story.quote}”</blockquote>
                </article>
              ))}
            </div>
          </div>
      </div>
    </section>
  )
}
