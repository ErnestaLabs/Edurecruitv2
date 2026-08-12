import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section-padding bg-cream pt-40">
          <div className="container-wide px-4 md:px-8">
            <div className="mx-auto max-w-3xl prose prose-lg [&_h1]:font-heading [&_h1]:text-navy [&_h2]:font-heading [&_h2]:text-navy [&_h2]:mt-10 [&_p]:text-text-muted [&_p]:leading-relaxed">
              <h1>Terms of Service</h1>
              <p>Last updated: July 2026</p>
              <h2>Services</h2>
              <p>EduRecruitment provides education consultancy services including but not limited to university admissions guidance, personal statement coaching, interview preparation, and UCAS strategy.</p>
              <h2>Booking and Payment</h2>
              <p>Consultations are booked through our website or by direct contact. Payment terms are agreed upon before services commence. All fees are transparent and communicated in advance.</p>
              <h2>Cancellation Policy</h2>
              <p>Free consultations may be rescheduled with 24 hours notice. Paid services are subject to the cancellation terms agreed upon at booking.</p>
              <h2>Limitation of Liability</h2>
              <p>While we strive to provide the best possible guidance, we cannot guarantee specific outcomes or university offers. Our services are advisory in nature.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
