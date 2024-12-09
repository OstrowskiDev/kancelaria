export function clientInquiryEmail(formData) {
  const { title, name, email, phone, message } = formData

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5;">
      <h2>Nowa wiadomość od ${name}</h2>
      <p><h3>Tytuł: ${title}</h3></p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Wiadomość:</strong></p>
      <p>${message}</p>
    </div>
  `

  return htmlContent
}
