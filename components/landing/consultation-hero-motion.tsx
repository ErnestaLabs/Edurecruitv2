/**
 * Design context: A procedural Remotion hero film visible on landing, independent of page controls.
 * It turns a question mark into three moving routes and a large NEXT arrival state using only code.
 */
"use client"

import { Player } from "@remotion/player"
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion"
import { useEffect, useState } from "react"

const navy = "#071d30"
const cream = "#fcfbf7"
const gold = "#c9a84c"
const editorial = "Plus Jakarta Sans, system-ui, sans-serif"
const display = "Instrument Serif, Georgia, serif"
const dots = Array.from({ length: 44 }, (_, index) => ({ x: (index * 71) % 100, y: (index * 43 + 13) % 100, size: 1 + (index % 3) * 0.65, delay: index * 3 }))

function Field({ frame }: { frame: number }) {
  return <AbsoluteFill style={{ overflow: "hidden", background: navy }}>
    <div style={{ position: "absolute", inset: 0, opacity: 0.18, backgroundImage: "linear-gradient(rgba(252,251,247,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(252,251,247,0.16) 1px, transparent 1px)", backgroundSize: "11% 11%", transform: `translate(${Math.sin(frame / 80) * 1.6}%, ${Math.cos(frame / 90) * 1.2}%)` }} />
    {dots.map((dot) => <i key={`${dot.x}-${dot.y}`} style={{ position: "absolute", top: `${dot.y}%`, left: `${dot.x}%`, width: dot.size, height: dot.size, borderRadius: "50%", background: gold, opacity: 0.22 + Math.sin((frame - dot.delay) / 14) * 0.16 }} />)}
    <div style={{ position: "absolute", top: "-38%", right: "-18%", width: "75%", aspectRatio: "1", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.32)", boxShadow: "0 0 0 5rem rgba(201,168,76,0.025), 0 0 0 10rem rgba(201,168,76,0.018)" }} />
  </AbsoluteFill>
}

function CodeDrivenFilm({ compact }: { compact: boolean }) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const intro = interpolate(frame, [0, 20, 85, 105], [1, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  const routes = interpolate(frame, [95, 118, 228, 250], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  const arrival = interpolate(frame, [230, 260], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  const questionScale = interpolate(frame, [0, 105], [0.76, 1.06], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  const questionTilt = interpolate(frame, [0, 105], [-8, 4], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  const questionIn = spring({ frame, fps, durationInFrames: 24, config: { damping: 200, stiffness: 105, overshootClamping: true } })
  const routeDraw = spring({ frame: frame - 108, fps, durationInFrames: 90, config: { damping: 200, stiffness: 80, overshootClamping: true } })
  const nextIn = spring({ frame: frame - 248, fps, durationInFrames: 42, config: { damping: 200, stiffness: 115, overshootClamping: true } })
  const waypointPulse = 0.72 + Math.sin(frame / 10) * 0.28
  const wordSize = compact ? "clamp(5.2rem, 29vw, 8.5rem)" : "clamp(6rem, 14vw, 12.5rem)"

  return <AbsoluteFill style={{ color: cream, overflow: "hidden" }}>
    <Field frame={frame} />

    <div style={{ position: "absolute", top: "7%", left: "8%", right: "8%", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(252,251,247,0.35)", paddingTop: "0.7rem", fontFamily: editorial, fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", opacity: Math.max(intro, routes, arrival) }}><span>University wayfinding</span><span>15 minutes</span></div>

    <div style={{ position: "absolute", top: compact ? "17%" : "15%", left: "10%", right: "10%", opacity: intro, transform: `translateY(${(1 - questionIn) * 30}px)` }}>
      <span style={{ color: gold, fontFamily: editorial, fontSize: "0.66rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>The question in front of you</span>
      <div style={{ position: "relative", width: "fit-content", marginTop: compact ? "0.15rem" : "-0.6rem", transform: `scale(${questionScale}) rotate(${questionTilt}deg)`, transformOrigin: "left center" }}><strong style={{ fontFamily: display, fontSize: "clamp(12rem, 35vw, 26rem)", fontWeight: 400, lineHeight: 0.7, letterSpacing: "-0.1em" }}>?</strong><i style={{ position: "absolute", right: "-16%", bottom: "18%", width: "1.1rem", height: "1.1rem", borderRadius: "50%", background: gold, boxShadow: `0 0 ${18 + waypointPulse * 28}px rgba(201,168,76,${waypointPulse})` }} /></div>
      <p style={{ maxWidth: "15rem", margin: compact ? "1.4rem 0 0" : "2rem 0 0", color: "rgba(252,251,247,0.72)", fontFamily: editorial, fontSize: "0.8rem", lineHeight: 1.55 }}>Every application is easier to navigate when you have a clear route.</p>
    </div>

    <div style={{ position: "absolute", inset: compact ? "17% 8% 10%" : "16% 8% 9%", opacity: routes }}>
      <svg viewBox="0 0 720 1320" preserveAspectRatio="none" style={{ width: "100%", height: "100%", overflow: "visible" }} aria-hidden="true">
        <path d="M 118 150 C 380 140, 142 490, 532 484 S 356 902, 626 1110" fill="none" stroke={gold} strokeWidth="4" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - routeDraw} />
        <path d="M 122 158 C 400 220, 440 554, 186 758 S 396 1050, 616 1172" fill="none" stroke="rgba(252,251,247,0.55)" strokeWidth="2" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - routeDraw} />
        <path d="M 108 168 C 182 390, 598 350, 526 662 S 620 958, 370 1195" fill="none" stroke="rgba(201,168,76,0.58)" strokeWidth="2" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - routeDraw} />
        <circle cx="118" cy="150" r="9" fill={gold} opacity={routeDraw} />
        <circle cx="626" cy="1110" r="9" fill={gold} opacity={routeDraw} />
      </svg>
      <div style={{ position: "absolute", top: "26%", right: "3%", borderLeft: `2px solid ${gold}`, paddingLeft: "0.7rem", fontFamily: editorial, fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", transform: `translateX(${(1 - routeDraw) * 28}px)` }}>Courses</div>
      <div style={{ position: "absolute", top: "51%", left: "2%", borderLeft: `2px solid ${cream}`, paddingLeft: "0.7rem", color: "rgba(252,251,247,0.82)", fontFamily: editorial, fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", transform: `translateX(${(1 - routeDraw) * -28}px)` }}>Applications</div>
      <div style={{ position: "absolute", bottom: "15%", right: "5%", borderLeft: `2px solid ${gold}`, paddingLeft: "0.7rem", fontFamily: editorial, fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", transform: `translateX(${(1 - routeDraw) * 28}px)` }}>Practicalities</div>
    </div>

    <div style={{ position: "absolute", inset: 0, display: "grid", alignContent: "center", justifyItems: "center", padding: "0 8%", opacity: arrival, transform: `translateY(${(1 - nextIn) * 30}px)` }}>
      <span style={{ color: gold, fontFamily: editorial, fontSize: "0.67rem", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}>Your practical next step</span>
      <strong style={{ marginTop: compact ? "0.5rem" : "-0.25rem", fontFamily: display, fontSize: wordSize, fontWeight: 400, lineHeight: 0.68, letterSpacing: "-0.1em" }}>CLEAR</strong>
      <p style={{ maxWidth: "19rem", margin: compact ? "1.4rem 0 0" : "2.1rem 0 0", textAlign: "center", color: "rgba(252,251,247,0.77)", fontFamily: editorial, fontSize: "0.82rem", lineHeight: 1.55 }}>A defined path for the decision you are making.</p>
    </div>
  </AbsoluteFill>
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

function useCompactHeroFilm() {
  const [compact, setCompact] = useState(false)
  useEffect(() => {
    const query = window.matchMedia("(max-width: 899px)")
    const update = () => setCompact(query.matches)
    update()
    query.addEventListener("change", update)
    return () => query.removeEventListener("change", update)
  }, [])
  return compact
}

function StaticCodeFrame() {
  return <div className="hero-motion-static" style={{ background: navy }}><div style={{ position: "absolute", inset: 0, opacity: 0.18, backgroundImage: "linear-gradient(rgba(252,251,247,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(252,251,247,0.16) 1px, transparent 1px)", backgroundSize: "11% 11%" }} /><div style={{ position: "relative", zIndex: 1, display: "grid", height: "100%", alignContent: "space-between" }}><span>University wayfinding</span><div><span style={{ color: gold, fontFamily: editorial, fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>Your practical next step</span><p style={{ marginTop: "0.5rem", fontSize: "clamp(5rem, 18vw, 10rem)", lineHeight: 0.7 }}>CLEAR</p><small style={{ color: "rgba(252,251,247,0.72)", fontFamily: editorial, fontSize: "0.8rem" }}>A defined path for the decision you are making.</small></div></div></div>
}

export function ConsultationHeroMotion() {
  const reduced = useReducedMotion()
  const compact = useCompactHeroFilm()
  if (reduced) return <StaticCodeFrame />
  return <div className="hero-motion-player" aria-hidden="true" style={{ backgroundColor: navy, backgroundImage: "radial-gradient(rgba(201,168,76,0.38) 0.75px, transparent 0.75px), linear-gradient(rgba(252,251,247,0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(252,251,247,0.11) 1px, transparent 1px)", backgroundSize: "13px 13px, 11% 11%, 11% 11%" }}><Player key={compact ? "compact" : "tall"} component={CodeDrivenFilm} inputProps={{ compact }} durationInFrames={360} compositionWidth={720} compositionHeight={compact ? 620 : 1320} fps={30} autoPlay loop controls={false} style={{ width: "100%", height: "100%", backgroundColor: navy }} /></div>
}
