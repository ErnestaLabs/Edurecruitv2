import { Resend } from "resend"

function getResend() {
  if (!process.env.RESEND_API_KEY) return null
  return new Resend(process.env.RESEND_API_KEY)
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name || !email) {
      return Response.json(
        { success: false, message: "Name and email are required." },
        { status: 400 }
      )
    }

    // Send email notification (if configured)
    const resendClient = getResend()
    if (resendClient) {
      await resendClient.emails.send({
        from: "EduRecruitment <leads@edurecruitment.co.uk>",
        to: process.env.FOUNDERS_EMAIL!,
        subject: `New lead: ${name}`,
        html: `
          <h2>New Lead</h2>
          <table>
            <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
            <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
            <tr><td><strong>Phone:</strong></td><td>${phone || "—"}</td></tr>
            <tr><td><strong>Message:</strong></td><td>${message || "—"}</td></tr>
            <tr><td><strong>Time:</strong></td><td>${new Date().toLocaleString("en-GB")}</td></tr>
          </table>
        `,
      })
    }

    // Google Sheets append (optional)
    if (
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY &&
      process.env.GOOGLE_SHEET_ID
    ) {
      try {
        const { JWT } = await import("google-auth-library")
        const { GoogleSpreadsheet } = await import("google-spreadsheet")
        const auth = new JWT({
          email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        })
        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, auth)
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[0]
        if (!sheet.headerValues || sheet.headerValues.length === 0) {
          await sheet.setHeaderRow(["Timestamp", "Name", "Email", "Phone", "Message", "Status"])
        }
        await sheet.addRow({
          Timestamp: new Date().toISOString(),
          Name: name,
          Email: email,
          Phone: phone || "",
          Message: message || "",
          Status: "New",
        })
      } catch (sheetError) {
        console.error("Google Sheets append failed (non-fatal):", sheetError)
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