export function buildEmailBody(formData) {
  const { subject, fullName, email, phone, content } = formData

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5;">
      <h2>Nowa wiadomość wysłana ze strony KancelarieJCKM:</h2>
      <p><strong>Temat:</strong> ${subject}</p>
      <p>Wysłana od: ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Wiadomość:</strong></p>
      <p>${content}</p>
    </div>
  `

  return htmlContent
}
