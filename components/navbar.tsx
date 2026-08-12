"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { LinkButton } from "@/components/link-button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isMobileOpen])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container-wide flex items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading text-xl tracking-tight text-navy md:text-2xl">
            EduRecruitment
          </span>
          <span className="hidden text-xs text-gold md:inline-block">.co.uk</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <LinkButton href="/contact" className="rounded-full bg-navy text-cream hover:bg-navy-light">
            Book a call
          </LinkButton>
        </div>

        {/* Mobile toggle */}
        <button
          className="relative z-50 p-2 md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          {isMobileOpen ? <X className="size-6 text-navy" /> : <Menu className="size-6 text-navy" />}
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-cream transition-all duration-500 md:hidden",
            isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="font-heading text-3xl text-navy transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <LinkButton href="/contact" onClick={() => setIsMobileOpen(false)} className="mt-4 rounded-full bg-navy text-cream hover:bg-navy-light" size="lg">
            Book a call
          </LinkButton>
        </div>
      </nav>
    </header>
  )
}
