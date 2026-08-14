export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name || !email) {
      return Response.json(
        { success: false, message: "Name and email are required." },
        { status: 400 }
      )
    }

    // Write to Airtable Leads table (non-fatal; logs response body on failure)
    const airtableToken =
      process.env.AIRTABLE_API_KEY ?? process.env.AIRTABLE_TOKEN
    const airtableBaseId = process.env.AIRTABLE_BASE_ID ?? "appomqUrdaazYORV2"
    const airtableTableId =
      process.env.AIRTABLE_TABLE_ID ?? "tblJXp25L1tSW8jlg"

    if (airtableToken) {
      try {
        const referer = request.headers.get("referer") ?? ""
        const source = referer.includes("/contact")
          ? "Website"
          : referer.includes("/about")
            ? "Website"
            : "Website"

        const res = await fetch(
          `https://api.airtable.com/v0/${airtableBaseId}/${airtableTableId}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${airtableToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              records: [
                {
                  fields: {
                    name,
                    email,
                    phone: phone || "",
                    notes: message || "",
                    source,
                    status: "new",
                    "created via form": true,
                  },
                },
              ],
            }),
          },
        )
        if (!res.ok) {
          console.error("Airtable write failed:", res.status, await res.text())
        }
      } catch (err) {
        console.error("Airtable write threw (non-fatal):", err)
      }
    }

    return Response.json({
      success: true,
      message: "Thanks! We'll be in touch within 24 hours.",
    })
  } catch (error) {
    console.error("Lead submission error:", error)
    return Response.json(
      {
        success: false,
        message: "Something went wrong. Please try again or WhatsApp us directly.",
      },
      { status: 500 }
    )
  }
}
