import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "EduRecruitment — University Application Support for Mature Students",
    template: "%s | EduRecruitment",
  },
  description:
    "Free, personal support for students applying to UK universities. Get help with UCAS, personal statements, student finance, and course selection. One person, your person, the whole way.",
  keywords: [
    "mature student university application",
    "UCAS support",
    "personal statement help",
    "return to education",
    "university application support",
    "student finance guidance",
    "UK university admissions",
  ],
  openGraph: {
    title: "EduRecruitment — University Application Support for Mature Students",
    description:
      "Free, personal support for students applying to UK universities. One person, your person, the whole way.",
    type: "website",
    locale: "en_GB",
    siteName: "EduRecruitment",
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
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
