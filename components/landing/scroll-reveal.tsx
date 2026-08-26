"use client"

/**
 * Style reminder: This dynamic variant preserves the approved baseline composition.
 * Motion is grouped by section, intersection-driven, interruptible, and disabled for
 * reduced-motion preferences. It never moves controls or changes the resting layout.
 */
import type { CSSProperties, ReactNode } from "react"
import { useEffect, useRef, useState } from "react"

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  variant?: "section" | "hero-copy" | "hero-image" | "statement" | "contact"
  delay?: number
}

export function ScrollReveal({ children, className = "", variant = "section", delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<"static" | "pending" | "visible">("static")

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !ref.current) return

    setState("pending")
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible")
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-reveal-state={state}
      className={`scroll-reveal reveal-${variant} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
