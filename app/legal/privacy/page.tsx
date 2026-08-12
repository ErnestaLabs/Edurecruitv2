import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section-padding bg-cream pt-40">
          <div className="container-wide px-4 md:px-8">
            <div className="mx-auto max-w-3xl prose prose-lg [&_h1]:font-heading [&_h1]:text-navy [&_h2]:font-heading [&_h2]:text-navy [&_h2]:mt-10 [&_p]:text-text-muted [&_p]:leading-relaxed">
              <h1>Privacy Policy</h1>
              <p>Last updated: July 2026</p>
              <h2>Information We Collect</h2>
              <p>We collect information you provide directly to us, including your name, email address, phone number, and details about your educational background when you fill out our contact form or book a consultation.</p>
              <h2>How We Use Your Information</h2>
              <p>We use your information to respond to your enquiries, provide our consultancy services, and improve our offerings. We never sell your personal data to third parties.</p>
              <h2>Data Protection</h2>
              <p>Your data is stored securely and processed in accordance with UK data protection laws. We retain your information only as long as necessary to provide our services.</p>
              <h2>Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal data at any time. Contact us at hello@edurecruitment.co.uk to exercise these rights.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
