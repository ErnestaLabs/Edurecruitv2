import Link from "next/link"
import { notFound } from "next/navigation"
import { universities, getUniversityBySlug } from "@/data/universities"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MessageCircle, ArrowLeft, MapPin, Calendar, Clock } from "lucide-react"

export function generateStaticParams() {
  return universities.map((uni) => ({
    slug: uni.slug,
  }))
}

export default async function UniversityPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const uni = getUniversityBySlug(slug)

  if (!uni) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* Back navigation */}
        <div className="mx-auto max-w-5xl px-4 pt-28 md:pt-32">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-navy/50 transition-colors hover:text-navy"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
        </div>

        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <div className="mx-auto mb-8 flex h-28 items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={uni.logo}
                alt={`${uni.name} logo`}
                className="max-h-full max-w-[200px] object-contain"
              />
            </div>
            <h1 className="font-heading text-4xl text-navy md:text-5xl">
              {uni.name}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-navy/70">
              {uni.description}
            </p>
          </div>
        </section>

        {/* Information section */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <MapPin className="size-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-navy">Campus</h3>
                  <p className="mt-1 text-navy/60">{uni.campus}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <Clock className="size-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-navy">Attendance</h3>
                  <p className="mt-1 text-navy/60">{uni.attendance}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <Calendar className="size-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-navy">Intakes</h3>
                  <p className="mt-1 text-navy/60">{uni.intakes.join(" · ")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course list */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="font-heading text-3xl text-navy md:text-4xl">
              Available Courses
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {uni.courses.map((course) => (
                <div
                  key={course.name}
                  className="flex items-center gap-3 rounded-xl border border-warm-grey-200 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md hover:shadow-navy/5"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-full bg-gold"
                  />
                  <p className="text-sm leading-snug font-medium text-navy">
                    {course.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-navy py-20 md:py-28">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <h2 className="font-heading text-3xl text-cream md:text-4xl">
              Apply with EduRecruitment
            </h2>
            <p className="mt-4 text-lg text-cream/80">
              Ready to start your journey? Our team will guide you through every
              step of the application process — from choosing the right course
              to securing your place.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://wa.me/447710891277"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full bg-gold px-8 py-6 text-base text-navy shadow-lg shadow-gold/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/90 hover:shadow-xl hover:shadow-gold/30">
                  Chat on WhatsApp Now
                  <MessageCircle className="ml-2 size-4" />
                </Button>
              </a>
              <Link href="/">
                <Button
                  variant="outline"
                  className="rounded-full border-gold/30 bg-transparent px-8 py-6 text-base text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-gold/10"
                >
                  Explore all partners
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
