"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  showRadialGradient?: boolean
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-cream text-navy transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_80%)]"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "repeating-linear-gradient(90deg, rgba(201,168,76,0.08) 0px, rgba(232,213,183,0.12) 50px, rgba(27,42,74,0.04) 100px, rgba(201,168,76,0.08) 150px, rgba(232,213,183,0.06) 200px)",
              backgroundSize: "200% 100%",
              filter: "blur(60px)",
              animation: "aurora-slide 20s linear infinite",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "repeating-linear-gradient(60deg, rgba(232,213,183,0.1) 0px, rgba(201,168,76,0.06) 80px, rgba(250,250,248,0.5) 160px, rgba(27,42,74,0.03) 240px, rgba(232,213,183,0.08) 300px)",
              backgroundSize: "300% 100%",
              filter: "blur(80px)",
              animation: "aurora-slide-reverse 25s linear infinite",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "repeating-linear-gradient(120deg, rgba(27,42,74,0.03) 0px, rgba(201,168,76,0.1) 100px, rgba(232,213,183,0.08) 200px, rgba(250,250,248,0.4) 300px, rgba(27,42,74,0.02) 400px)",
              backgroundSize: "250% 100%",
              filter: "blur(70px)",
              animation: "aurora-slide 30s linear infinite",
            }}
          />
        </motion.div>
        {showRadialGradient && (
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_30%,rgba(250,250,248,0.6)_100%)]" />
        )}
      </div>
      {children}
    </div>
  )
}
