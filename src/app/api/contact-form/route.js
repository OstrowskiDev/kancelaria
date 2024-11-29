import { validateForm } from "@/lib/validators/contactFormValidation"
import { NextResponse } from "next/server"

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

  console.log("Form submitted with data: ", formData)
  return NextResponse.json(
    { message: "Form submitted successfully" },
    { status: 200 },
  )
}

export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 })
}
