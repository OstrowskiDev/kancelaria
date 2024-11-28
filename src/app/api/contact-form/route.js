export default function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, email, phone, topic, content, acceptRodo, jsEnabled } =
      req.body

    const errors = {}

    function validateForm() {
      const {
        fullName,
        email,
        phone,
        topic,
        content,
        acceptRodo,
        name,
        jsEnabled,
      } = formData
      const validationResults = { ...validationObject }

      function addMessage(field, messageText) {
        validationResults[field].message.push(messageText)
      }

      function removeMessage(field, messageText) {
        const filteredMessages = validationResults[field].message.filter(
          (msg) => msg !== messageText,
        )
        validationResults[field].message = filteredMessages
      }

      function validateField(field, validationFn, messageText) {
        if (validationFn()) {
          addMessage(field, messageText)
        } else {
          removeMessage(field, messageText)
        }
      }

      const fieldNames = ["fullName", "email", "phone", "topic", "content"]
      for (const field of fieldNames) {
        validateField(field, () => !formData[field], `Pole wymagane.`)
      }

      validateField(
        "fullName",
        () => !validator.matches(fullName, /^[a-zA-Z\s]*$/),
        "Imie i nazwisko nie może zawierać cyfr i znaków specjalnych.",
      )

      validateField(
        "fullName",
        () => !validator.isLength(fullName, { max: 50 }),
        "Imię i nazwisko nie może być dłuższe niż 50 liter.",
      )

      validateField(
        "email",
        () => !validator.isEmail(email),
        "Proszę wprowadzić prawidłowy adres email.",
      )

      validateField(
        "phone",
        () => !validator.isMobilePhone(phone, "any", { strictMode: false }),
        "Proszę wprowadzić prawidłowy numer telefonu.",
      )

      validateField(
        "topic",
        () => !validator.isLength(topic, { min: 10, max: 100 }),
        "Temat musi zawierać od 10 do 100 znaków.",
      )

      validateField(
        "content",
        () => !validator.isLength(content, { min: 100, max: 1000 }),
        "Wiadomość musi zawierać od 100 do 1000 znaków.",
      )

      validateField(
        "acceptRodo",
        () => acceptRodo !== "yes",
        "Aby wysłać wiadomość wymagana jest akceptacja warunków Polityki Prywantości.",
      )

      validateField("jsEnabled", () => jsEnabled !== "yes", "bot detected")

      validateField("name", () => name !== "", "bot detected")

      setFieldValidity(validationResults)
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors })
    }

    // If no errors, proceed with form submission logic
    return res.status(200).json({ message: "Form submitted successfully" })
  } else {
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
