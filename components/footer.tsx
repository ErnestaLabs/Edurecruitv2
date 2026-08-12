import Link from "next/link"

const serviceLinks = [
  { href: "#services", label: "University Admissions" },
  { href: "#services", label: "Student Finance Support" },
  { href: "#process", label: "How It Works" },
  { href: "#testimonials", label: "Student Stories" },
  { href: "#contact", label: "Free Chat" },
]

const resourceLinks = [
  { href: "/resources", label: "Blog" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms of Service" },
]

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="container-wide px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl text-cream">EduRecruitment</span>
              <span className="text-gold">.co.uk</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              Free university guidance for all students applying to university. We help mature students navigate UCAS, secure funding, and find the right university.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Contact</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>
                <a href="mailto:hello@edurecruitment.co.uk" className="transition-colors hover:text-cream">
                  hello@edurecruitment.co.uk
                </a>
              </li>
              <li>
                <a href="tel:+442071234567" className="transition-colors hover:text-cream">
                  +44 20 7123 4567
                </a>
              </li>
              <li className="text-cream/50">
                London, United Kingdom
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 md:flex-row">
          <p className="text-xs text-cream/50">
            &copy; {new Date().getFullYear()} EduRecruitment. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-cream/50">
            <Link href="/legal/privacy" className="transition-colors hover:text-cream">Privacy Policy</Link>
            <Link href="/legal/terms" className="transition-colors hover:text-cream">Terms of Service</Link>
            <Link href="/legal/cookies" className="transition-colors hover:text-cream">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
