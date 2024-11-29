import validator from "validator"

export const validationObject = {
  fullName: { message: [] },
  email: { message: [] },
  phone: { message: [] },
  topic: { message: [] },
  content: { message: [] },
  acceptRodo: { message: [] },
  jsEnabled: { message: [] },
  name: { message: [] },
}

export function validateForm(formData) {
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

  //crating deep copy of validationObject
  const validationResults = JSON.parse(JSON.stringify(validationObject))

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

  const fieldRequired = ["fullName", "email", "phone", "topic", "content"]
  for (const field of fieldRequired) {
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

  validateField("name", () => name !== undefined, "bot detected")

  return validationResults
}
