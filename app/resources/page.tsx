import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    title: "How to write a personal statement that stands out",
    excerpt: "Your personal statement is your chance to tell admissions tutors who you are. Here's how to make every word count.",
    date: "15 July 2026",
    readTime: "8 min read",
    category: "Personal Statement",
    slug: "personal-statement-guide",
  },
  {
    title: "Oxbridge interview tips from former applicants",
    excerpt: "What Oxbridge tutors are really looking for, and how to prepare for the interview that could change your life.",
    date: "8 July 2026",
    readTime: "10 min read",
    category: "Oxbridge",
    slug: "oxbridge-interview-tips",
  },
  {
    title: "UCAS timeline: Everything you need to know for 2026/27",
    excerpt: "A month-by-month breakdown of the UCAS application cycle, with key deadlines and actionable advice.",
    date: "1 July 2026",
    readTime: "6 min read",
    category: "UCAS",
    slug: "ucas-timeline-2026",
  },
  {
    title: "Choosing the right university course: A strategic guide",
    excerpt: "How to choose a degree that aligns with your strengths, interests, and career aspirations.",
    date: "24 June 2026",
    readTime: "7 min read",
    category: "Course Selection",
    slug: "choosing-university-course",
  },
  {
    title: "The gap year question: Should you take one?",
    excerpt: "A balanced look at the pros and cons of taking a gap year before university, with advice on making it count.",
    date: "17 June 2026",
    readTime: "5 min read",
    category: "Planning",
    slug: "gap-year-guide",
  },
  {
    title: "Admissions tests explained: UCAT, BMAT, LNAT, TMUA",
    excerpt: "Everything you need to know about the admissions tests required for competitive courses.",
    date: "10 June 2026",
    readTime: "9 min read",
    category: "Admissions Tests",
    slug: "admissions-tests-guide",
  },
]

const categories = [
  "All",
  "Personal Statement",
  "Oxbridge",
  "UCAS",
  "Course Selection",
  "Admissions Tests",
  "Planning",
]

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-padding bg-cream pt-40">
          <div className="container-wide px-4 md:px-8">
            <div className="mx-auto max-w-3xl">
              <h1 className="font-heading text-5xl leading-tight text-navy md:text-6xl">
                Advice and insights from our consultants
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-muted">
                Practical guides, expert tips, and honest advice to help you navigate every stage
                of the university admissions process.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b border-warm-grey-200 bg-cream pb-8">
          <div className="container-wide px-4 md:px-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    category === "All"
                      ? "bg-navy text-cream"
                      : "bg-warm-grey text-text-muted hover:bg-warm-grey-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section-padding bg-cream">
          <div className="container-wide px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.slug} href={`/resources/${post.slug}`} className="group">
                  <Card className="flex h-full flex-col border-warm-grey-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <Badge variant="secondary" className="mb-4 self-start bg-gold/10 text-gold-foreground">
                      {post.category}
                    </Badge>
                    <h3 className="font-heading text-xl text-navy transition-colors group-hover:text-gold">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-4 text-xs text-text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-gold transition-colors group-hover:text-navy">
                      Read more <ArrowRight className="ml-1 size-3" />
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-warm-grey">
          <div className="container-wide px-4 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-4xl text-navy md:text-5xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-lg text-text-muted">
                Quick answers to the questions we hear most often.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-3xl space-y-6">
              {[
                {
                  q: "How much does a consultation cost?",
                  a: "Your initial 30-minute consultation is completely free. We'll discuss your goals, assess your current position, and outline a recommended plan — no obligation.",
                },
                {
                  q: "When should I start preparing my application?",
                  a: "Ideally, 12-18 months before your application deadline. However, we work with students at every stage — even those who've just realised their deadline is weeks away.",
                },
                {
                  q: "Do you work with international students?",
                  a: "Absolutely. We support international students applying to UK universities, including guidance on English language requirements, visa considerations, and cultural adjustment.",
                },
                {
                  q: "Can you guarantee I'll get an offer?",
                  a: "No reputable consultancy can guarantee offers. What we can guarantee is that we'll give you the best possible strategy, preparation, and support to maximise your chances.",
                },
                {
                  q: "How is this different from my school's careers service?",
                  a: "School careers services are valuable but often stretched thin. We provide dedicated, one-on-one support from consultants who specialise exclusively in competitive university admissions.",
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="group cursor-pointer rounded-xl border border-warm-grey-200 bg-white p-6 transition-all hover:shadow-sm"
                >
                  <summary className="flex items-center justify-between font-heading text-lg text-navy [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="ml-4 text-gold transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-text-muted leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
