/**
 * Design context: This is a cinematic Remotion hero film, not an interactive UI.
 * The page owns pathway selection and lead capture. This composition uses the
 * consultation image as moving footage through pushes, crops, cuts, and an end-frame route.
 */
"use client"

import { Player } from "@remotion/player"
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion"
import { useEffect, useState } from "react"

type HeroMotionProps = { imageSrc: string }

const editorial = "Plus Jakarta Sans, system-ui, sans-serif"
const display = "Instrument Serif, Georgia, serif"

function FilmImage({ imageSrc, position, scale = 1.12, translateX = 0, translateY = 0 }: { imageSrc: string; position: string; scale?: number; translateX?: number; translateY?: number }) {
  return <Img src={imageSrc} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: position, filter: "saturate(0.82) contrast(1.04) brightness(0.72)", transform: `scale(${scale}) translate(${translateX}%, ${translateY}%)` }} />
}

function CinematicConsultationFilm({ imageSrc }: HeroMotionProps) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const introOpacity = interpolate(frame, [0, 18, 82, 110], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  const montageOpacity = interpolate(frame, [78, 104, 176, 202], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  const endingOpacity = interpolate(frame, [174, 208], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  const introScale = interpolate(frame, [0, 110], [1.28, 1.03], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  const editorialShift = interpolate(frame, [78, 202], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  const route = spring({ frame: frame - 195, fps, durationInFrames: 52, config: { damping: 200, stiffness: 100, overshootClamping: true } })
  const endLine = spring({ frame: frame - 222, fps, durationInFrames: 34, config: { damping: 200, stiffness: 125, overshootClamping: true } })

  return <AbsoluteFill style={{ overflow: "hidden", background: "#071d30", color: "#fcfbf7" }}>
    <AbsoluteFill style={{ opacity: introOpacity }}>
      <FilmImage imageSrc={imageSrc} position="44% 53%" scale={introScale} translateY={interpolate(frame, [0, 110], [2, -2], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} />
      <AbsoluteFill style={{ background: "linear-gradient(90deg, rgba(7,29,48,0.88), rgba(7,29,48,0.14) 72%), linear-gradient(0deg, rgba(7,29,48,0.58), transparent 46%)" }} />
      <div style={{ position: "absolute", left: "11%", right: "11%", bottom: "16%", transform: `translateY(${(1 - introOpacity) * 24}px)` }}>
        <span style={{ borderLeft: "2px solid #c9a84c", paddingLeft: "0.65rem", fontFamily: editorial, fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>A 15-minute conversation</span>
        <p style={{ maxWidth: "10ch", margin: "1rem 0 0", fontFamily: display, fontSize: "clamp(2.8rem, 5.6vw, 5.6rem)", lineHeight: 0.85, letterSpacing: "-0.055em" }}>Start with the question.</p>
      </div>
    </AbsoluteFill>

    <AbsoluteFill style={{ opacity: montageOpacity, background: "#0a2135" }}>
      <div style={{ position: "absolute", inset: 0, clipPath: "polygon(0 0, 63% 0, 49% 100%, 0 100%)", transform: `translateX(${(1 - editorialShift) * -20}%)` }}><FilmImage imageSrc={imageSrc} position="27% 65%" scale={1.48} translateX={-4} /></div>
      <div style={{ position: "absolute", inset: 0, clipPath: "polygon(56% 0, 100% 0, 100% 56%, 49% 100%)", transform: `translateY(${(1 - editorialShift) * -18}%)` }}><FilmImage imageSrc={imageSrc} position="50% 42%" scale={1.62} translateY={-2} /></div>
      <div style={{ position: "absolute", inset: 0, clipPath: "polygon(49% 100%, 100% 58%, 100% 100%)", transform: `translateX(${(1 - editorialShift) * 18}%)` }}><FilmImage imageSrc={imageSrc} position="48% 79%" scale={1.35} translateY={6} /></div>
      <AbsoluteFill style={{ background: "linear-gradient(135deg, rgba(7,29,48,0.08), rgba(7,29,48,0.6))" }} />
      <div style={{ position: "absolute", top: "11%", left: "10%", right: "10%", display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(252,251,247,0.55)", paddingTop: "0.7rem", fontFamily: editorial, fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.13em", textTransform: "uppercase" }}><span>See the detail</span><span>Sort what matters</span></div>
      <p style={{ position: "absolute", right: "10%", bottom: "11%", maxWidth: "8ch", margin: 0, textAlign: "right", fontFamily: display, fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: 0.85, letterSpacing: "-0.05em" }}>Find the signal.</p>
    </AbsoluteFill>

    <AbsoluteFill style={{ opacity: endingOpacity }}>
      <FilmImage imageSrc={imageSrc} position="48% 54%" scale={1.08} translateY={-1} />
      <AbsoluteFill style={{ background: "linear-gradient(115deg, rgba(7,29,48,0.96), rgba(7,29,48,0.54) 68%, rgba(7,29,48,0.22))" }} />
      <svg viewBox="0 0 720 920" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true">
        <path d="M 86 170 C 228 192, 202 455, 394 438 S 560 604, 646 738" fill="none" stroke="rgba(201,168,76,0.95)" strokeWidth="3" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - route} />
        <circle cx="86" cy="170" r="8" fill="#c9a84c" opacity={route} />
        <circle cx="646" cy="738" r="8" fill="#c9a84c" opacity={route} />
      </svg>
      <div style={{ position: "absolute", top: "14%", left: "11%", right: "11%", opacity: endLine, transform: `translateY(${(1 - endLine) * 26}px)` }}>
        <span style={{ borderLeft: "2px solid #c9a84c", paddingLeft: "0.65rem", fontFamily: editorial, fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>Your direction, clarified</span>
        <p style={{ maxWidth: "8ch", margin: "1rem 0 0", fontFamily: display, fontSize: "clamp(3.1rem, 6.2vw, 6.4rem)", lineHeight: 0.82, letterSpacing: "-0.06em" }}>A clearer next move.</p>
      </div>
      <div style={{ position: "absolute", left: "11%", right: "11%", bottom: "11%", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(252,251,247,0.35)", paddingTop: "0.75rem", color: "rgba(252,251,247,0.78)", fontFamily: editorial, fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.07em", opacity: endLine }}><span>QUESTION</span><span>CLARITY</span><span>NEXT STEP</span></div>
    </AbsoluteFill>
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

function StaticFilmFrame({ imageSrc }: HeroMotionProps) {
  return <div className="hero-motion-static" style={{ backgroundImage: `linear-gradient(115deg, rgba(7,29,48,0.96), rgba(7,29,48,0.52)), url(${imageSrc})`, backgroundSize: "cover", backgroundPosition: "center" }}>
    <span>15-minute university guidance</span>
    <div><p style={{ maxWidth: "8ch" }}>A clearer next move.</p><small style={{ color: "rgba(252,251,247,0.72)", fontFamily: editorial, fontSize: "0.78rem", lineHeight: 1.5 }}>Bring the question. Leave with a direction.</small></div>
  </div>
}

export function ConsultationHeroMotion({ imageSrc }: HeroMotionProps) {
  const reduced = useReducedMotion()
  if (reduced) return <StaticFilmFrame imageSrc={imageSrc} />

  return <div className="hero-motion-player" aria-hidden="true"><Player component={CinematicConsultationFilm} inputProps={{ imageSrc }} durationInFrames={360} compositionWidth={720} compositionHeight={920} fps={30} autoPlay loop controls={false} style={{ width: "100%", height: "100%", backgroundColor: "#071d30" }} /></div>
}
