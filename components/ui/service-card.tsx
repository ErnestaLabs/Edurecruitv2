"use client"

import { motion } from "motion/react"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl bg-white p-[1px] shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-gold/10">
        {/* Gradient border that appears on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 opacity-0 transition-all duration-500 group-hover:from-gold/30 group-hover:via-gold/10 group-hover:to-gold/30 group-hover:opacity-100" />

        <div className="relative flex h-full flex-col rounded-2xl bg-white p-8 transition-all duration-500 group-hover:-translate-y-1">
          {/* Icon */}
          <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-gold/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold/20 group-hover:shadow-lg group-hover:shadow-gold/10">
            <Icon className="size-6 text-gold" />
          </div>

          {/* Title */}
          <h3 className="font-heading text-xl text-navy transition-colors duration-300 group-hover:text-gold">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm leading-relaxed text-navy/70">
            {description}
          </p>

          {/* Bottom accent line */}
          <div className="mt-6 h-0.5 w-0 rounded-full bg-gradient-to-r from-gold to-gold/0 transition-all duration-500 group-hover:w-12" />
        </div>
      </div>
    </motion.div>
  )
}
