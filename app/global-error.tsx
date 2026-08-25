"use client"

/** Quiet Advocate fallback: plain, calm recovery without dependencies on the application shell. */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#fcfbf7", color: "#10263b", fontFamily: "Arial, sans-serif" }}>
        <main style={{ display: "grid", minHeight: "100vh", placeItems: "center", padding: "2rem" }}>
          <section style={{ maxWidth: "34rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>EduRecruitment</p>
            <h1 style={{ margin: "1rem 0", fontFamily: "Georgia, serif", fontSize: "3rem", lineHeight: 1 }}>We could not open this page just now.</h1>
            <p style={{ color: "#4f5a61", fontSize: "1.1rem", lineHeight: 1.6 }}>Please try again. If the problem continues, you can contact us directly by email or phone.</p>
            <button type="button" onClick={reset} style={{ marginTop: "1.5rem", border: 0, background: "#c9a84c", color: "#10263b", cursor: "pointer", padding: "0.85rem 1.1rem", fontWeight: 700 }}>Try again</button>
          </section>
        </main>
      </body>
    </html>
  )
}
