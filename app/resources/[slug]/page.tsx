export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import { Badge } from "@/components/ui/badge"
import { LinkButton } from "@/components/link-button"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import Link from "next/link"

// In production, this would fetch from a CMS or MDX
const posts: Record<string, { title: string; content: string; date: string; readTime: string; category: string }> = {
  "personal-statement-guide": {
    title: "How to write a personal statement that stands out",
    date: "15 July 2026",
    readTime: "8 min read",
    category: "Personal Statement",
    content: `
      <p>Your personal statement is your chance to tell admissions tutors who you are beyond your grades. It's the most personal part of your UCAS application — and often the most daunting.</p>
      
      <h2>Start with your story</h2>
      <p>The best personal statements don't try to impress with big words or list achievements. They tell a story. What drew you to this subject? What questions keep you up at night? What have you done to explore your interest?</p>
      
      <h2>Show, don't tell</h2>
      <p>Instead of saying "I'm passionate about biology," describe the moment you first looked through a microscope and saw something no one had ever seen before. Specificity is memorable.</p>
      
      <h2>Connect your experiences</h2>
      <p>Whether it's a book you read, a lecture you attended, or work experience you completed, every example should connect back to why you want to study this subject at university.</p>
      
      <h2>Be authentic</h2>
      <p>Admissions tutors read thousands of personal statements. They can tell when you're being genuine and when you're saying what you think they want to hear. Trust your voice.</p>
    `,
  },
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // In production, this would fetch from a CMS
  const slug = "" // Placeholder — will be resolved from params
  const post = posts["personal-statement-guide"]

  if (!post) {
    return (
      <>
        <Navbar />
        <main>
          <section className="section-padding bg-cream pt-40">
            <div className="container-wide px-4 md:px-8 text-center">
              <h1 className="font-heading text-4xl text-navy">Post not found</h1>
              <LinkButton href="/resources" variant="outline" className="mt-8 rounded-full">
                <ArrowLeft className="mr-2 size-4" /> Back to resources
              </LinkButton>
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
        <article className="section-padding bg-cream pt-40">
          <div className="container-wide px-4 md:px-8">
            <div className="mx-auto max-w-3xl">
              <Link
                href="/resources"
                className="mb-8 inline-flex items-center text-sm text-text-muted transition-colors hover:text-navy"
              >
                <ArrowLeft className="mr-2 size-4" />
                Back to resources
              </Link>
              <Badge variant="secondary" className="mb-4 bg-gold/10 text-gold-foreground">
                {post.category}
              </Badge>
              <h1 className="font-heading text-4xl text-navy md:text-5xl">{post.title}</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-text-muted">
                <span className="flex items-center gap-1"><Calendar className="size-3" />{post.date}</span>
                <span className="flex items-center gap-1"><Clock className="size-3" />{post.readTime}</span>
              </div>
              <div
                className="prose prose-lg mt-12 max-w-none text-text-muted [&_h2]:font-heading [&_h2]:text-navy [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
