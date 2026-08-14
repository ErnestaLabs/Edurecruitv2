import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
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

const siteTitle =
  "EduRecruitment — University Application Support for Mature Students"
const siteDescription =
  "Free, personal support for students applying to UK universities. Get help with UCAS, personal statements, student finance, and course selection. One person, your person, the whole way."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | EduRecruitment",
  },
  description: siteDescription,
  keywords: [
    "mature student university application",
    "UCAS support",
    "personal statement help",
    "return to education",
    "university application support",
    "student finance guidance",
    "UK university admissions",
  ],
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    title: siteTitle,
    description:
      "Free, personal support for students applying to UK universities. One person, your person, the whole way.",
    type: "website",
    locale: "en_GB",
    siteName: "EduRecruitment",
    url: `${siteUrl}/`,
  },
  twitter: {
    card: "summary_large_image",
    title: "EduRecruitment",
    description:
      "Free, personal support for students applying to UK universities.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", instrumentSerif.variable, plusJakartaSans.variable)}
    >
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var u=new URL(location.href);if(u.searchParams.get('screenshot')==='1'){document.body&&(document.body.setAttribute('data-screenshot','true'));document.documentElement.setAttribute('data-screenshot','true');}}catch(e){}})();",
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
