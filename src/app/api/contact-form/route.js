import { validateForm } from "@/lib/validators/contactFormValidation"
import { NextResponse } from "next/server"
import sendgrid from "@sendgrid/mail"
import { buildEmailBody } from "@/lib/email_template/client_inquiry"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export async function POST(req) {
  const formData = await req.json()
  const validationResults = validateForm(formData)
  const errors = []
  for (const field in validationResults) {
    if (validationResults[field].message.length > 0) {
      errors.push(...validationResults[field].message)
    }
  }

  if (errors.length > 0) {
    return NextResponse.json(
      { errors: "Errors found during form validation." },
      { status: 400 },
    )
  }

  // send email via SendGrid
  const htmlContent = buildEmailBody(formData)
  console.log("htmlContent:", htmlContent)

  await sendgrid
    .send({
      to: process.env.SENDGRID_EMAIL_FROM,
      from: process.env.SENDGRID_EMAIL_FROM,
      subject: `Kancelarie JCKM: ${formData.subject}`,
      html: htmlContent,
    })
    .then(() => {
      console.log("Email sent successfully")
    })
    .catch((error) => {
      console.error(error)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      )
    })

  return NextResponse.json(
    { message: "Form submitted successfully" },
    { status: 200 },
  )
}
