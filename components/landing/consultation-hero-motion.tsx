"use client"

import { Player } from "@remotion/player"
import { spring, useCurrentFrame, useVideoConfig } from "remotion"
import { useEffect, useState } from "react"

type HeroMotionProps = { imageSrc: string }

const moments = ["Your question", "Compare what matters", "Your next move"]

function ConsultationMotion({ imageSrc }: HeroMotionProps) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", background: "#10263b", color: "#fcfbf7" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(180deg, rgba(16,38,59,0.06), rgba(16,38,59,0.86)), url(${imageSrc})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div style={{ position: "relative", zIndex: 1, display: "flex", height: "100%", flexDirection: "column", justifyContent: "space-between", padding: "clamp(1.25rem, 4vw, 2.5rem)" }}>
        <span style={{ alignSelf: "flex-start", borderLeft: "2px solid #c9a84c", paddingLeft: "0.65rem", fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>15-minute university plan</span>
        <div>
          {moments.map((moment, index) => {
            const progress = spring({ frame: frame - index * 14, fps, durationInFrames: 18, config: { damping: 200, stiffness: 120, overshootClamping: true } })
            return <p key={moment} style={{ margin: "0 0 0.45rem", opacity: 0.4 + progress * 0.6, transform: `translateY(${(1 - progress) * 18}px)`, color: "#fcfbf7", textShadow: "0 2px 16px rgba(0,0,0,0.45)", fontFamily: "Instrument Serif, Georgia, serif", fontSize: "clamp(2rem, 4.3vw, 4rem)", lineHeight: 0.92, letterSpacing: "-0.04em" }}>{moment}</p>
          })}
        </div>
      </div>
    </div>
  )
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduced(query.matches)
    update()
    query.addEventListener("change", update)
    return () => query.removeEventListener("change", update)
  }, [])
  return reduced
}

export function ConsultationHeroMotion({ imageSrc }: HeroMotionProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className="hero-motion-static" style={{ backgroundImage: `linear-gradient(180deg, rgba(16,38,59,0.06), rgba(16,38,59,0.86)), url(${imageSrc})` }}>
      <span>15-minute university plan</span>
      <div><p>Your question</p><p>Compare what matters</p><p>Your next move</p></div>
    </div>
  }

  return <div className="hero-motion-player" aria-hidden="true"><Player component={ConsultationMotion} inputProps={{ imageSrc }} durationInFrames={70} compositionWidth={720} compositionHeight={920} fps={30} autoPlay loop={false} controls={false} style={{ width: "100%", height: "100%" }} /></div>
}
