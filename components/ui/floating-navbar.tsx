"use client"
import React, { useState } from "react"
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: React.ReactNode
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        setVisible(false)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        role="navigation"
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0 top-20 z-50 mx-auto flex w-full justify-center px-4 sm:top-24 sm:w-auto sm:px-0",
          className
        )}
      >
        <div className="flex w-full max-w-sm items-center justify-between rounded-2xl border border-navy/10 bg-white/95 p-2 shadow-lg shadow-navy/10 backdrop-blur-md sm:w-auto sm:max-w-none sm:justify-center sm:gap-2 sm:rounded-full sm:px-2 sm:py-1.5">
          {/* Desktop nav */}
          <div className="hidden shrink-0 items-center gap-0 sm:flex sm:gap-1">
            {navItems.map((navItem, idx: number) => (
              <a
                key={`link-${idx}`}
                href={navItem.link}
                className="relative shrink-0 rounded-full px-4 py-2 text-sm font-medium text-navy/70 transition-colors hover:bg-gold/10 hover:text-navy"
              >
                <span className="block">{navItem.name}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:hidden">
            <span className="px-2 text-sm font-medium text-navy">Menu</span>
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="relative hidden shrink-0 rounded-full bg-navy px-4 py-2 text-sm font-medium text-cream transition-all hover:bg-navy-light hover:shadow-lg hover:shadow-navy/20 sm:block"
          >
            <span>Get in touch</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex size-10 items-center justify-center rounded-full bg-navy text-cream transition-colors hover:bg-navy-light sm:hidden"
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          className={cn(
            "absolute top-14 right-4 left-4 flex flex-col gap-1 rounded-2xl border border-navy/10 bg-white p-3 shadow-xl shadow-navy/10 backdrop-blur-md transition-all duration-200 sm:hidden",
            mobileOpen
              ? "visible translate-y-0 opacity-100"
              : "pointer-events-none invisible -translate-y-2 opacity-0"
          )}
        >
          {navItems.map((navItem, idx: number) => (
            <a
              key={`mobile-link-${idx}`}
              href={navItem.link}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold/10"
            >
              {navItem.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-1 rounded-xl bg-navy px-4 py-3 text-center text-sm font-medium text-cream transition-colors hover:bg-navy-light"
          >
            Get in touch
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
