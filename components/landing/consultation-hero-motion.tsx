/**
 * Design context: The Remotion panel is the hero’s dominant University Decision Map.
 * The consultation photograph is deliberately reduced to faint texture so the visible
 * planning route, selected pathway, and practical outputs carry the conversion story.
 */
"use client"

import { Player } from "@remotion/player"
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion"
import { useEffect, useState } from "react"

type HeroMotionProps = { imageSrc: string; pathway: string }

const planningOutputs = [
  { number: "01", title: "Compare options", detail: "Build a useful shortlist", tag: "SCOPE" },
  { number: "02", title: "Set priorities", detail: "Find what needs attention", tag: "FOCUS" },
  { number: "03", title: "Choose a next step", detail: "Leave with a direction", tag: "MOVE" },
]

function DecisionMapMotion({ pathway }: Pick<HeroMotionProps, "pathway">) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const headingIn = spring({ frame, fps, durationInFrames: 24, config: { damping: 200, stiffness: 130, overshootClamping: true } })
  const routeDraw = interpolate(frame, [8, 76], [0.18, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  const activePulse = 0.65 + Math.sin(frame / 12) * 0.35

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", background: "#0b2237", color: "#fcfbf7" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.11, backgroundImage: "radial-gradient(rgba(201,168,76,0.86) 0.75px, transparent 0.75px)", backgroundSize: "13px 13px", mixBlendMode: "screen" }} />
      <div style={{ position: "absolute", top: "-20%", right: "-16%", width: "72%", height: "72%", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.24)", boxShadow: "0 0 0 5rem rgba(201,168,76,0.025), 0 0 0 10rem rgba(201,168,76,0.02)" }} />
      <div style={{ position: "absolute", right: "8%", bottom: "8%", width: "28%", height: "20%", border: "1px solid rgba(252,251,247,0.17)", transform: "rotate(-12deg)" }} />

      <div style={{ position: "relative", zIndex: 1, height: "100%", padding: "clamp(1.25rem, 4vw, 2.7rem)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", borderBottom: "1px solid rgba(252,251,247,0.2)", paddingBottom: "0.85rem" }}>
          <span style={{ borderLeft: "2px solid #c9a84c", paddingLeft: "0.65rem", fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" }}>University decision map</span>
          <span style={{ color: "#c9a84c", fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.13em" }}>15 MINUTES</span>
        </div>

        <div style={{ position: "absolute", top: "18%", left: "clamp(1.25rem, 4vw, 2.7rem)", right: "clamp(1.25rem, 4vw, 2.7rem)", opacity: headingIn, transform: `translateY(${(1 - headingIn) * 26}px)` }}>
          <span style={{ color: "rgba(252,251,247,0.57)", fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>Your starting point</span>
          <strong style={{ display: "block", maxWidth: "13ch", marginTop: "0.5rem", color: "#fcfbf7", fontFamily: "Instrument Serif, Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 5.4rem)", fontWeight: 400, lineHeight: 0.82, letterSpacing: "-0.05em" }}>{pathway}</strong>
        </div>

        <div style={{ position: "absolute", top: "42%", bottom: "11%", left: "clamp(1.25rem, 4vw, 2.7rem)", right: "clamp(1.25rem, 4vw, 2.7rem)" }}>
          <div style={{ position: "absolute", top: "7%", bottom: "7%", left: "1.55rem", width: "2px", transformOrigin: "top", transform: `scaleY(${routeDraw})`, background: "linear-gradient(#c9a84c, rgba(201,168,76,0.32))" }} />
          <div style={{ position: "absolute", top: `${7 + routeDraw * 72}%`, left: "1.15rem", width: "0.86rem", height: "0.86rem", borderRadius: "50%", background: "#c9a84c", boxShadow: `0 0 ${14 + activePulse * 18}px rgba(201,168,76,${activePulse})` }} />
          <div style={{ display: "grid", height: "100%", alignContent: "space-between", gap: "0.85rem" }}>
            {planningOutputs.map((output, index) => {
              const step = spring({ frame: frame - 10 - index * 13, fps, durationInFrames: 22, config: { damping: 200, stiffness: 145, overshootClamping: true } })
              return <article key={output.number} style={{ position: "relative", display: "grid", gridTemplateColumns: "3.1rem minmax(0, 1fr) auto", alignItems: "center", gap: "0.75rem", minHeight: "29%", border: "1px solid rgba(252,251,247,0.32)", borderLeft: "3px solid #c9a84c", background: "rgba(6,25,42,0.88)", padding: "0.85rem 1rem", opacity: 0.42 + step * 0.58, transform: `translateX(${(1 - step) * 38}px)` }}>
                <span style={{ color: "#c9a84c", fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.8rem", fontWeight: 800, letterSpacing: "0.1em" }}>{output.number}</span>
                <div><strong style={{ display: "block", fontFamily: "Instrument Serif, Georgia, serif", fontSize: "clamp(1.55rem, 2.65vw, 2.9rem)", fontWeight: 400, lineHeight: 0.88, letterSpacing: "-0.03em" }}>{output.title}</strong><span style={{ display: "block", marginTop: "0.35rem", color: "rgba(252,251,247,0.67)", fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.68rem", lineHeight: 1.35 }}>{output.detail}</span></div>
                <span style={{ alignSelf: "start", color: "rgba(252,251,247,0.55)", fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.58rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>{output.tag}</span>
              </article>
            })}
          </div>
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

function StaticDecisionMap({ pathway, imageSrc }: HeroMotionProps) {
  return <div className="hero-motion-static" style={{ backgroundImage: `linear-gradient(rgba(11,34,55,0.94), rgba(11,34,55,0.94)), url(${imageSrc})`, backgroundBlendMode: "normal" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(252,251,247,0.2)", paddingBottom: "0.85rem" }}><span>University decision map</span><b style={{ color: "#c9a84c", fontSize: "0.64rem", letterSpacing: "0.12em" }}>15 MINUTES</b></div>
    <div style={{ display: "grid", height: "100%", alignContent: "space-around", gap: "1rem", paddingTop: "1.25rem" }}><div><span style={{ color: "rgba(252,251,247,0.57)", fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>Your starting point</span><strong style={{ display: "block", marginTop: "0.45rem", fontFamily: "Instrument Serif, Georgia, serif", fontSize: "clamp(2.25rem, 6vw, 4rem)", fontWeight: 400, lineHeight: 0.88 }}>{pathway}</strong></div><ol style={{ display: "grid", gap: "0.55rem" }}>{planningOutputs.map((output) => <li key={output.number} style={{ display: "grid", gridTemplateColumns: "2rem 1fr", gap: "0.6rem", borderLeft: "2px solid #c9a84c", background: "rgba(6,25,42,0.88)", padding: "0.7rem 0.85rem" }}><b style={{ color: "#c9a84c", fontSize: "0.7rem" }}>{output.number}</b><span><strong style={{ display: "block", fontSize: "1.05rem" }}>{output.title}</strong><small style={{ color: "rgba(252,251,247,0.65)" }}>{output.detail}</small></span></li>)}</ol></div>
  </div>
}

export function ConsultationHeroMotion({ imageSrc, pathway }: HeroMotionProps) {
  const reduced = useReducedMotion()
  const activePathway = pathway || "Your university question"

  if (reduced) return <StaticDecisionMap imageSrc={imageSrc} pathway={activePathway} />

  return <div className="hero-motion-player" aria-hidden="true" style={{ backgroundImage: `linear-gradient(rgba(11,34,55,0.9), rgba(11,34,55,0.9)), url(${imageSrc})`, backgroundBlendMode: "normal", backgroundSize: "cover", backgroundPosition: "center" }}><Player key={activePathway} component={DecisionMapMotion} inputProps={{ pathway: activePathway }} durationInFrames={360} compositionWidth={720} compositionHeight={920} fps={30} autoPlay loop controls={false} style={{ width: "100%", height: "100%", backgroundColor: "transparent" }} /></div>
}
