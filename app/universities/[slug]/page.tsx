import Link from "next/link"
import { notFound } from "next/navigation"
import { universities, getUniversityBySlug } from "@/data/universities"
import { Button } from "@/components/ui/button"
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
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Back navigation */}
      <div className="mx-auto max-w-5xl px-4 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#1B2A4A]/50 transition-colors hover:text-[#1B2A4A]"
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
          <h1 className="font-heading text-4xl text-[#1B2A4A] md:text-5xl">
            {uni.name}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#1B2A4A]/70">
            {uni.description}
          </p>
        </div>
      </section>

      {/* Information section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/10">
                <MapPin className="size-5 text-[#C9A84C]" />
              </div>
              <div>
                <h3 className="font-medium text-[#1B2A4A]">Campus</h3>
                <p className="mt-1 text-[#1B2A4A]/60">{uni.campus}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/10">
                <Clock className="size-5 text-[#C9A84C]" />
              </div>
              <div>
                <h3 className="font-medium text-[#1B2A4A]">Attendance</h3>
                <p className="mt-1 text-[#1B2A4A]/60">{uni.attendance}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/10">
                <Calendar className="size-5 text-[#C9A84C]" />
              </div>
              <div>
                <h3 className="font-medium text-[#1B2A4A]">Intakes</h3>
                <p className="mt-1 text-[#1B2A4A]/60">
                  {uni.intakes.join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course list */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="font-heading text-3xl text-[#1B2A4A] md:text-4xl">
            Available Courses
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {uni.courses.map((course) => (
              <div
                key={course.name}
                className="rounded-lg border border-[#E6E2DA] bg-white px-5 py-4 transition-colors hover:border-[#C9A84C]/30"
              >
                <p className="font-medium text-[#1B2A4A]">{course.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#1B2A4A] py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-heading text-3xl text-[#FAFAF8] md:text-4xl">
            Apply with EduRecruitment
          </h2>
          <p className="mt-4 text-lg text-[#FAFAF8]/80">
            Ready to start your journey? Our team will guide you through every
            step of the application process — from choosing the right course to
            securing your place.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/447700900000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-full bg-[#C9A84C] px-8 py-6 text-base text-[#1B2A4A] shadow-lg shadow-[#C9A84C]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A84C]/90 hover:shadow-xl hover:shadow-[#C9A84C]/30">
                Chat on WhatsApp Now
                <MessageCircle className="ml-2 size-4" />
              </Button>
            </a>
            <Link href="/">
              <Button
                variant="outline"
                className="rounded-full border-[#C9A84C]/30 px-8 py-6 text-base text-[#FAFAF8] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]/50"
              >
                Explore all partners
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
