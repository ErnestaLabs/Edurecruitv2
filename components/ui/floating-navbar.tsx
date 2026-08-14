"use client"
import React, { useState } from "react"
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react"
import { cn } from "@/lib/utils"

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
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0 top-24 z-5000 mx-auto flex max-w-fit items-center justify-center",
          className
        )}
      >
        <div className="flex items-center justify-center gap-2 rounded-full border border-navy/10 bg-white/90 px-2 py-1.5 shadow-lg shadow-navy/10 backdrop-blur-md">
          {/* Nav items container */}
          <div className="flex items-center gap-1">
            {navItems.map((navItem, idx: number) => (
              <a
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative rounded-full px-3 py-2 text-xs font-medium text-navy/70 transition-colors hover:bg-gold/10 hover:text-navy sm:px-4 sm:text-sm"
                )}
              >
                <span className="block">{navItem.name}</span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-navy/10" />

          {/* CTA Button */}
          <a
            href="#contact"
            className="relative rounded-full bg-navy px-4 py-2 text-sm font-medium text-cream transition-all hover:bg-navy-light hover:shadow-lg hover:shadow-navy/20"
          >
            <span>Get in touch</span>
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
