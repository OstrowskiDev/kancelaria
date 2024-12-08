import { validateForm } from "@/lib/validators/contactFormValidation"
import { NextResponse } from "next/server"
import sendgrid from "@sendgrid/mail"

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
  const title = "Testing SendGrid service"
  const message = "This is a test message"

  await sendgrid
    .send({
      to: process.env.SENDGRID_EMAIL_FROM,
      from: process.env.SENDGRID_EMAIL_FROM,
      subject: `${title}`,
      html: `<p><strong>Test Message:</strong> ${message}</p>`,
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

export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 })
}
