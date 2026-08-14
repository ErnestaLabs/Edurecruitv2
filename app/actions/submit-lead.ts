"use server"

import { Resend } from "resend"

function getResend() {
  if (!process.env.RESEND_API_KEY) return null
  return new Resend(process.env.RESEND_API_KEY)
}

export type LeadFormState = {
  success: boolean
  message: string
  errors?: {
    name?: string
    email?: string
    phone?: string
  }
}

export async function submitLead(
  prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const name = formData.get("name")?.toString().trim() ?? ""
  const email = formData.get("email")?.toString().trim() ?? ""
  const phone = formData.get("phone")?.toString().trim() ?? ""
  const message = formData.get("message")?.toString().trim() ?? ""

  // Validate
  const errors: LeadFormState["errors"] = {}
  if (!name) errors.name = "Name is required"
  if (!email && !phone) errors.email = "Email or phone number is required"
  else if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Enter a valid email address"

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Please fix the errors below.", errors }
  }

  try {
    // 1. Email notification to founders (if configured)
    const resendClient = getResend()
    if (resendClient) {
      await resendClient.emails.send({
        from: "EduRecruitment <leads@edurecruitment.co.uk>",
        to: process.env.FOUNDERS_EMAIL!,
        subject: "New lead: " + name,
        html: [
          "<h2>New Lead</h2>",
          "<table>",
          "<tr><td><strong>Name:</strong></td><td>" + name + "</td></tr>",
          "<tr><td><strong>Email:</strong></td><td>" + email + "</td></tr>",
          "<tr><td><strong>Phone:</strong></td><td>" + phone + "</td></tr>",
          "<tr><td><strong>Message:</strong></td><td>" + message + "</td></tr>",
          "<tr><td><strong>Time:</strong></td><td>" +
            new Date().toLocaleString("en-GB") +
            "</td></tr>",
          "</table>",
        ].join("\n"),
      })
    }

    // 2. Append to Google Sheet (optional)
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
          await sheet.setHeaderRow([
            "Timestamp",
            "Name",
            "Email",
            "Phone",
            "Message",
            "Status",
          ])
        }

        await sheet.addRow({
          Timestamp: new Date().toISOString(),
          Name: name,
          Email: email,
          Phone: phone,
          Message: message,
          Status: "New",
        })
      } catch (sheetError) {
        console.error("Google Sheets append failed (non-fatal):", sheetError)
      }
    }

    // 3. Write to Airtable Leads table. Support both the original env names
    // and the newer API_KEY/TABLE_ID aliases used by local deployments.
    const airtableToken =
      process.env.AIRTABLE_TOKEN ?? process.env.AIRTABLE_API_KEY
    const baseId = process.env.AIRTABLE_BASE_ID
    const leadsTableId =
      process.env.AIRTABLE_LEADS_TABLE_ID ?? process.env.AIRTABLE_TABLE_ID
    if (airtableToken && baseId && leadsTableId) {
      try {
        const airtableResponse = await fetch(
          "https://api.airtable.com/v0/" + baseId + "/" + leadsTableId,
          {
            method: "POST",
            headers: {
              Authorization: "Bearer " + airtableToken,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              records: [
                {
                  fields: {
                    fldr8bcFX6sJQNFt4: name,
                    fldUg9EZQwiDge1xw: email,
                    fld6TUpwo5KG3Ej2T: phone,
                    fldAjcRwFbugICx6f: message,
                    fldRGFuZ4iPMerzPc: "Website",
                    fldKJPH5um6UoeRwl: "New",
                    fldHxI1DXa5AVW0qS: true,
                  },
                },
              ],
            }),
          }
        )

        if (!airtableResponse.ok) {
          console.error(
            "Airtable write failed:",
            airtableResponse.status,
            await airtableResponse.text()
          )
          return {
            success: false,
            message: "We couldn't save your enquiry. Please try again.",
          }
        }
      } catch (airtableError) {
        console.error("Airtable write failed:", airtableError)
        return {
          success: false,
          message: "We couldn't save your enquiry. Please try again.",
        }
      }
    } else {
      console.error("Airtable is not configured for lead capture")
      return {
        success: false,
        message: "Lead capture is temporarily unavailable. Please try again.",
      }
    }

    return {
      success: true,
      message: "Thanks! We'll be in touch within 24 hours.",
    }
  } catch (error) {
    console.error("Lead submission error:", error)
    return {
      success: false,
      message:
        "Something went wrong. Please try again or WhatsApp us directly.",
    }
  }
}
