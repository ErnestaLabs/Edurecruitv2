import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GraduationCap, Heart, Lightbulb, Shield, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Personal",
    description: "Every student is unique. We never use templates or one-size-fits-all approaches.",
  },
  {
    icon: Shield,
    title: "Trustworthy",
    description: "Honest assessments, transparent pricing, and no false promises — ever.",
  },
  {
    icon: Lightbulb,
    title: "Strategic",
    description: "Data-informed methodology combined with real experience of the admissions process.",
  },
  {
    icon: Users,
    title: "Empathetic",
    description: "Founded by young women who understand the pressure of competitive admissions firsthand.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-padding bg-cream pt-40">
          <div className="container-wide px-4 md:px-8">
            <div className="mx-auto max-w-3xl">
              <Badge variant="outline" className="mb-6 border-gold/30 text-gold-foreground bg-gold/10">
                About Us
              </Badge>
              <h1 className="font-heading text-5xl leading-tight text-navy md:text-6xl">
                We believe every student deserves a fair shot at their dream university.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-muted">
                EduRecruitment was founded by two young women who&apos;d just been through the UK
                university admissions process themselves. They saw talented peers miss out on top
                offers — not because they weren&apos;t good enough, but because they didn&apos;t have
                the right guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-warm-grey">
          <div className="container-wide px-4 md:px-8">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div>
                <h2 className="font-heading text-3xl text-navy md:text-4xl">
                  From experience to expertise
                </h2>
                <div className="mt-8 space-y-4 text-text-muted leading-relaxed">
                  <p>
                    We met during our first week at university — two people from very different
                    backgrounds who&apos;d both made it to a top UK institution through a combination
                    of hard work, good advice, and a bit of luck.
                  </p>
                  <p>
                    As we progressed through our degrees, friends and family started asking for
                    advice on their own applications. We helped write personal statements, prepared
                    people for interviews, and guided course selections. The results were remarkable
                    — and we realised this was something worth building.
                  </p>
                  <p>
                    After graduating, we founded EduRecruitment with a simple mission: make the kind
                    of strategic, personal admissions guidance that used to be reserved for the few
                    accessible to every ambitious student.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy/5">
                <div className="flex h-full items-center justify-center p-12 text-center">
                  <div>
                    <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-gold/20">
                      <GraduationCap className="size-8 text-gold" />
                    </div>
                    <p className="font-heading text-xl text-navy/60">
                      &ldquo;We&apos;re young enough to remember the pressure, experienced enough to know how to beat it.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-cream">
          <div className="container-wide px-4 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-4xl text-navy md:text-5xl">
                What we stand for
              </h2>
              <p className="mt-4 text-lg text-text-muted">
                Our values shape every interaction, every piece of advice, and every strategy we build.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-gold/10">
                    <value.icon className="size-6 text-gold" />
                  </div>
                  <h3 className="font-heading text-xl text-navy">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="section-padding bg-warm-grey">
          <div className="container-wide px-4 md:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-heading text-4xl text-navy md:text-5xl">
                Why choose EduRecruitment?
              </h2>
              <div className="mt-12 space-y-8">
                {[
                  {
                    title: "Recent experience",
                    description: "We've just been through the process ourselves. We know what admissions tutors are looking for right now, not five years ago.",
                  },
                  {
                    title: "Personal, not packaged",
                    description: "Every student gets a dedicated consultant who knows their story inside out. No call centres, no account managers, no templates.",
                  },
                  {
                    title: "Proven results",
                    description: "95% of our students receive an offer from their first-choice university. Our track record speaks for itself.",
                  },
                  {
                    title: "Transparent partnership",
                    description: "We're honest about what we can achieve together. If we don't think we can help, we'll tell you — and point you to someone who can.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-gold pl-6">
                    <h3 className="font-heading text-xl text-navy">{item.title}</h3>
                    <p className="mt-2 text-text-muted leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
