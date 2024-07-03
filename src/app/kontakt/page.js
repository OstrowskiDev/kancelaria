"use client"

import Checkmark from "@/ui/components/Checkmark"
import { Header } from "@/ui/components/Header"
import KontaktData from "@/ui/components/KontaktData"
import RulesIco from "@/ui/icons/RulesIco"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import validator from "validator"
import ReCAPTCHA from "react-google-recaptcha"
import GoogleDynamicMaps from "@/ui/components/GoogleDynamicMaps"

export default function Kontakt() {
  const [token, setToken] = useState("") // store reCAPTCHA response token
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    topic: "",
    content: "",
    name: "",
  })
  const validationObject = {
    fullName: { message: [] },
    email: { message: [] },
    phone: { message: [] },
    topic: { message: [] },
    content: { message: [] },
    acceptRodo: { message: [] },
    jsEnabled: { message: [] },
    name: { message: [] },
  }
  const [fieldValidity, setFieldValidity] = useState(validationObject)
  // need validation for reCAPTCHA v2

  useEffect(() => {
    setFormData({ ...formData, jsEnabled: "yes" })
  }, [])

  useEffect(() => {
    validateForm()
  }, [formData])

  function onReCAPTCHAChange(token) {
    setToken(token)
  }

  function printError(fieldName) {
    return fieldValidity[fieldName].message.length > 0 && submitAttempted
  }

  const printFullNameError = printError("fullName")
  const printEmailError = printError("email")
  const printPhoneError = printError("phone")
  const printTopicError = printError("topic")
  const printContentError = printError("content")
  const printAcceptRodoError = printError("acceptRodo")

  function onInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

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

  const onSubmit = (event) => {
    event.preventDefault()
    setSubmitAttempted(true)
    const botDetected =
      fieldValidity.jsEnabled.message.length > 0 ||
      fieldValidity.name.message.length > 0
    const hasValidationErrors = Object.values(fieldValidity).some(
      (field) => field.message.length > 0,
    )
    if (botDetected) return
    if (hasValidationErrors) {
      console.log(
        "form submission failed, change required fields according to error messages",
      )
      return
    }
    //!!!! add submission logic here
    console.log("Form submitted with reCAPTCHA token: ", token)

    // reset the reCAPTCHA after form submission
    recaptchaRef.current.reset()
  }

  const recaptchaRef = React.createRef()

  return (
    <>
      <Header title="Kontakt" />
      <div
        className="contact-wrapper bg-primary-700"
        style={{ minHeight: "calc(100vh - 380px)" }}
      >
        {/* google maps */}
        <div className="google-maps-container w-[900px] h-[400px] mt-16 mx-auto">
          <h2 className="google-maps-label mb-2 uppercase font-semibold text-white text-xl">
            lokalizacja kancelarii
          </h2>
          <GoogleDynamicMaps />
        </div>

        <div className="contact-container flex flex-row max-w-[900px] mx-auto mt-8 mb-16 ">
          {/* contact data */}
          <KontaktData />

          {/* contact form */}
          <form
            onSubmit={onSubmit}
            className="contact-from-container flex flex-col min-w-[240px] w-full max-w-[680px] px-4 mt-8 mb-4 mx-auto"
          >
            <h2 className="contact-form-label p-1 mb-1 uppercase tracking-wide text-white font-semibold text-xl">
              {"formularz kontaktowy"}
            </h2>

            <div
              className="captcha-awesomeness-handler 
            form-inputs-container"
            >
              <div className="contact-form-user-data grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <div className="contact-fullName-container flex flex-col">
                  <input
                    className={`contact-input-fullName p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md ${printFullNameError && "invalid-field"}`}
                    type="text"
                    name="fullName"
                    placeholder="Imię i nazwisko *"
                    onChange={onInputChange}
                  />
                  <label
                    className="contact-label-fullName text-xs text-red-600"
                    htmlFor="fullName"
                  >
                    {printFullNameError &&
                      fieldValidity.fullName.message.join(" ")}
                  </label>
                </div>

                <div className="contact-email-container flex flex-col">
                  <input
                    className={`contact-input-email p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md ${printEmailError && "invalid-field"}`}
                    type="text"
                    name="email"
                    placeholder="Email *"
                    onChange={onInputChange}
                  />
                  <label
                    className="contact-label-email text-xs text-red-600"
                    htmlFor="email"
                  >
                    {printEmailError && fieldValidity.email.message.join(" ")}
                  </label>
                </div>

                <div className="contact-phone-container flex flex-col">
                  <input
                    className={`contact-input-phone p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md ${printPhoneError && "invalid-field"}`}
                    type="text"
                    name="phone"
                    placeholder="Telefon *"
                    onChange={onInputChange}
                  />
                  <label
                    className="contact-label-phone text-xs text-red-600"
                    htmlFor="phone"
                  >
                    {printPhoneError && fieldValidity.phone.message.join(" ")}
                  </label>
                </div>

                <div className="contact-topic-container flex flex-col">
                  <input
                    className={`contact-input-topic p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md ${printTopicError && "invalid-field"}`}
                    type="text"
                    name="topic"
                    placeholder="Temat *"
                    onChange={onInputChange}
                  />
                  <label
                    className="contact-label-topic text-xs text-red-600"
                    htmlFor="topic"
                  >
                    {printTopicError && fieldValidity.topic.message.join(" ")}
                  </label>
                </div>

                <input
                  className="hidden"
                  type="text"
                  name="name"
                  onChange={onInputChange}
                />
                <input
                  type="hidden"
                  id="jsEnabled"
                  name="jsEnabled"
                  value="no"
                />
              </div>

              <div className="contact-content-container flex flex-col">
                <textarea
                  className={`contact-input-content w-full h-48 p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md ${printContentError && "invalid-field"}`}
                  type="text"
                  name="content"
                  placeholder="Wiadomość *"
                  onChange={onInputChange}
                />
                <label
                  className="contact-label-content text-xs text-red-600"
                  htmlFor="content"
                >
                  {printContentError && fieldValidity.content.message.join(" ")}
                </label>
              </div>

              <div className="contact-checkboxes-container flex flex-row justify-between mt-2">
                <div className="rodo-checkbox-container flex flex-col mr-4">
                  <div
                    className={`contact-accept-rodo flex flex-row items-center h-[76px] p-2  bg-white border-2 rounded-[4px] ${printAcceptRodoError && "invalid-field"}`}
                    //  style={{ borderColor: 'rgb(82, 82, 82)'}}
                  >
                    <Checkmark setFormData={setFormData} formData={formData} />
                    <label
                      className="accept-rodo-text max-w-[192px] ml-3 text-sm text-primary-800 leading-tight"
                      htmlFor="acceptRodo"
                    >
                      {`Akceptuję `}
                      <Link
                        className="link font-medium hover:text-primary-900 hover:border-b-2 hover:border-gray-600 "
                        href={"polityka-prywatnosci"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {"Plitykę Prywantości"}
                      </Link>{" "}
                      i zasady przetwarzania danych osobowych RODO.
                    </label>
                    <div className="contact-rodo-icon w-[40px] h-[40px] ml-2">
                      <RulesIco />
                    </div>
                  </div>
                  <label
                    className="contact-label-rodo text-xs text-red-600"
                    htmlFor="acceptRodo"
                  >
                    {printAcceptRodoError &&
                      fieldValidity.acceptRodo.message.join(" ")}
                  </label>
                </div>

                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={onReCAPTCHAChange}
                  ref={recaptchaRef}
                />
              </div>
            </div>

            <button
              className="contact-button w-[160px] h-[38px] mt-3 ml-auto px-6 py-1 text-secondary-200 uppercase font-semibold border border-secondary-200 rounded-lg bg-primary-600 hover:bg-primary-500 hover:border-2"
              type="submit"
            >
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
