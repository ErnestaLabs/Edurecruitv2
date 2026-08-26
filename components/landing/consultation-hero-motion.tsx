"use client"

import { Player } from "@remotion/player"
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion"
import { useEffect, useState } from "react"

type HeroMotionProps = { imageSrc: string; pathway: string }

const planningOutputs = [
  { number: "01", title: "Options to compare", detail: "A focused shortlist" },
  { number: "02", title: "Application priority", detail: "The useful thing to check" },
  { number: "03", title: "Your next step", detail: "One move to take forward" },
]

function ConsultationMapMotion({ pathway }: Pick<HeroMotionProps, "pathway">) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const questionEnter = spring({ frame, fps, durationInFrames: 24, config: { damping: 200, stiffness: 130, overshootClamping: true } })
  const questionExit = interpolate(frame, [18, 38], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  const mapEnter = spring({ frame: frame - 14, fps, durationInFrames: 22, config: { damping: 200, stiffness: 130, overshootClamping: true } })
  const finishEnter = spring({ frame: frame - 68, fps, durationInFrames: 20, config: { damping: 200, stiffness: 140, overshootClamping: true } })

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", background: "transparent", color: "#fcfbf7" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(130deg, rgba(16,38,59,0.9), rgba(16,38,59,0.28) 58%, rgba(16,38,59,0.74))" }} />
      <div style={{ position: "relative", zIndex: 1, height: "100%", padding: "clamp(1.25rem, 4vw, 2.5rem)" }}>
        <span style={{ position: "absolute", top: "10%", left: "clamp(1.25rem, 4vw, 2.5rem)", borderLeft: "2px solid #c9a84c", paddingLeft: "0.65rem", fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>15-minute consultation map</span>

        <div style={{ position: "absolute", top: "30%", left: "10%", right: "10%", border: "1px solid rgba(252,251,247,0.52)", background: "rgba(16,38,59,0.72)", padding: "clamp(1rem, 2vw, 1.5rem)", opacity: questionExit * questionEnter, transform: `translateY(${(1 - questionEnter) * 24 - (1 - questionExit) * 44}px) scale(${0.96 + questionEnter * 0.04})` }}>
          <span style={{ color: "#c9a84c", fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>Your starting point</span>
          <strong style={{ display: "block", marginTop: "0.55rem", fontFamily: "Instrument Serif, Georgia, serif", fontSize: "clamp(1.9rem, 3.7vw, 3.4rem)", fontWeight: 400, lineHeight: 0.92, letterSpacing: "-0.035em" }}>{pathway}</strong>
          <span style={{ display: "block", marginTop: "0.8rem", color: "rgba(252,251,247,0.72)", fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.76rem", lineHeight: 1.45 }}>Bring the question as it is. We make it useful.</span>
        </div>

        <div style={{ position: "absolute", top: "24%", left: "10%", right: "10%", opacity: mapEnter }}>
          {planningOutputs.map((output, index) => {
            const step = spring({ frame: frame - 18 - index * 12, fps, durationInFrames: 20, config: { damping: 200, stiffness: 145, overshootClamping: true } })
            return <div key={output.number} style={{ display: "grid", gridTemplateColumns: "2rem 1fr auto", alignItems: "center", gap: "0.7rem", marginTop: index === 0 ? 0 : "0.65rem", borderLeft: "2px solid #c9a84c", background: "rgba(16,38,59,0.92)", padding: "0.75rem 0.85rem", opacity: step, transform: `translateX(${(1 - step) * 54}px)` }}>
              <span style={{ color: "#c9a84c", fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.66rem", fontWeight: 800, letterSpacing: "0.1em" }}>{output.number}</span>
              <strong style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.78rem", lineHeight: 1.25 }}>{output.title}</strong>
              <span style={{ color: "rgba(252,251,247,0.62)", fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.64rem", lineHeight: 1.2, textAlign: "right" }}>{output.detail}</span>
            </div>
          })}
        </div>

        <div style={{ position: "absolute", right: "10%", bottom: "10%", maxWidth: "78%", borderTop: "1px solid rgba(201,168,76,0.8)", background: "rgba(16,38,59,0.9)", padding: "0.8rem 0 0", opacity: finishEnter, transform: `translateY(${(1 - finishEnter) * 18}px)` }}>
          <span style={{ color: "#c9a84c", fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>Map ready</span>
          <strong style={{ display: "block", marginTop: "0.35rem", fontFamily: "Instrument Serif, Georgia, serif", fontSize: "clamp(1.5rem, 2.8vw, 2.45rem)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.03em" }}>A question with a direction.</strong>
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

export function ConsultationHeroMotion({ imageSrc, pathway }: HeroMotionProps) {
  const reduced = useReducedMotion()
  const activePathway = imageSrc && pathway ? pathway : "Your university question"

  if (reduced) {
    return <div className="hero-motion-static" style={{ backgroundImage: `linear-gradient(180deg, rgba(16,38,59,0.2), rgba(16,38,59,0.9)), url(${imageSrc})` }}>
      <span>15-minute consultation map</span>
      <div style={{ width: "100%", background: "rgba(16,38,59,0.84)", padding: "1rem" }}><strong style={{ display: "block", color: "#c9a84c", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Your starting point</strong><b style={{ display: "block", marginTop: "0.55rem", fontFamily: "Instrument Serif, Georgia, serif", fontSize: "2rem", fontWeight: 400, lineHeight: 0.95 }}>{activePathway}</b><ul style={{ display: "grid", gap: "0.45rem", marginTop: "1rem", borderTop: "1px solid rgba(252,251,247,0.22)", paddingTop: "0.8rem", fontSize: "0.78rem", fontWeight: 700 }}><li>01&nbsp;&nbsp;Options to compare</li><li>02&nbsp;&nbsp;Application priority</li><li>03&nbsp;&nbsp;Your next step</li></ul></div>
    </div>
  }

  return <div className="hero-motion-player" aria-hidden="true" style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: "cover", backgroundPosition: "center" }}><Player key={activePathway} component={ConsultationMapMotion} inputProps={{ pathway: activePathway }} durationInFrames={120} compositionWidth={720} compositionHeight={920} fps={30} autoPlay loop={false} controls={false} style={{ width: "100%", height: "100%", backgroundColor: "transparent" }} /></div>
}
