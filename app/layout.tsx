/** Quiet Advocate design system: warm editorial typography and inclusive, plain-language university guidance. */
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { cn } from "@/lib/utils"
import { siteUrl } from "@/lib/site"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const siteTitle = "EduRecruitment | University application support for your next step"
const siteDescription = "Free, personal guidance for college leavers, returning learners, and career changers applying to UK universities. Get clear support with course choice, applications, and practical next steps."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: "%s | EduRecruitment" },
  description: siteDescription,
  keywords: [
    "university application support",
    "college leaver university application",
    "UCAS support",
    "personal statement help",
    "return to education",
    "career change university",
    "student finance guidance",
    "UK university admissions",
  ],
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_GB",
    siteName: "EduRecruitment",
    url: `${siteUrl}/`,
    images: [{ url: "/manus-storage/edurecruit-consultation-detail_760b38e4.jpg", width: 1200, height: 900, alt: "Personal university planning conversation" }],
  },
  twitter: { card: "summary_large_image", title: "EduRecruitment", description: siteDescription },
  icons: { icon: "/manus-storage/edurecruit-logo-mark_4dd97337.png" },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("antialiased", instrumentSerif.variable, plusJakartaSans.variable)}>
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: "(function(){try{var u=new URL(location.href);if(u.searchParams.get('screenshot')==='1'){document.body&&(document.body.setAttribute('data-screenshot','true'));document.documentElement.setAttribute('data-screenshot','true');}}catch(e){}})();",
          }}
        />
        {children}
      </body>
    </html>
  )
}
