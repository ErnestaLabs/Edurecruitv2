import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section-padding bg-cream pt-40">
          <div className="container-wide px-4 md:px-8">
            <div className="mx-auto max-w-3xl prose prose-lg [&_h1]:font-heading [&_h1]:text-navy [&_h2]:font-heading [&_h2]:text-navy [&_h2]:mt-10 [&_p]:text-text-muted [&_p]:leading-relaxed">
              <h1>Cookie Policy</h1>
              <p>Last updated: July 2026</p>
              <h2>What Are Cookies</h2>
              <p>Cookies are small text files stored on your device when you visit a website. They help us improve your browsing experience and understand how our site is used.</p>
              <h2>How We Use Cookies</h2>
              <p>We use essential cookies for website functionality and analytics cookies to understand how visitors interact with our site. We do not use tracking cookies for advertising purposes.</p>
              <h2>Managing Cookies</h2>
              <p>You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of our website.</p>
              <h2>Third-Party Cookies</h2>
              <p>We may use third-party services (such as analytics providers) that set their own cookies. These are governed by the respective third parties&apos; privacy policies.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
