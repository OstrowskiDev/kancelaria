import ReCAPTCHA from "react-google-recaptcha"
import RulesIco from "@/ui/icons/RulesIco"
import Link from "next/link"
import Checkmark from "@/ui/components/Checkmark"
import validator from "validator"
import React, { useEffect, useState } from "react"
import {
  validationObject,
  validateForm,
} from "@/lib/validators/contactFormValidation"

export default function ContactForm({ formData, setFormData }) {
  const [token, setToken] = useState("") // store reCAPTCHA response token
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [fieldValidity, setFieldValidity] = useState(validationObject)
  // need validation for reCAPTCHA v2

  useEffect(() => {
    setFormData({ ...formData, jsEnabled: "yes" })
  }, [])

  useEffect(() => {
    const results = validateForm(formData)
    setFieldValidity(results)
  }, [formData])

  function printError(fieldName) {
    return fieldValidity[fieldName].message.length > 0 && submitAttempted
  }
  const printFullNameError = printError("fullName")
  const printEmailError = printError("email")
  const printPhoneError = printError("phone")
  const printTopicError = printError("topic")
  const printContentError = printError("content")
  const printAcceptRodoError = printError("acceptRodo")

  function onReCAPTCHAChange(token) {
    setToken(token)
  }

  function onInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  function onSubmit(event) {
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
    <form
      onSubmit={onSubmit}
      className="contact-form-container flex flex-col min-w-[240px] w-full max-w-[320px] above-400:max-w-[760px] px-2 above-400:px-6 mt-8 mb-4 mx-auto"
    >
      <h2 className="contact-form-label p-1 mb-1 uppercase tracking-wide text-white font-semibold text-xl below-sm:text-center">
        {"formularz kontaktowy"}
      </h2>

      <div
        className="captcha-awesomeness-handler 
            form-inputs-container"
      >
        <div className="contact-form-user-data grid grid-cols-1 md:grid-template-grow-fixed gap-3 mb-3">
          {/* fullname */}
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
              {printFullNameError && fieldValidity.fullName.message.join(" ")}
            </label>
          </div>

          {/* email */}
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

          {/* topic */}
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

          {/* phone */}
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

          {/* "name" */}
          <input
            className="hidden"
            type="text"
            name="name"
            onChange={onInputChange}
          />
          <input type="hidden" id="jsEnabled" name="jsEnabled" value="no" />
        </div>

        {/* message content */}
        <div className="contact-content-container flex flex-col">
          <textarea
            className={`contact-input-content w-full h-48 mb-2 p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md ${printContentError && "invalid-field"}`}
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

        {/* checkboxes */}
        <div className="contact-checkboxes-container flex flex-col sm:flex-row justify-between mt-2">
          {/* rodo */}
          <div className="rodo-checkbox-container grow flex flex-col sm:mr-4">
            <div
              className={`contact-accept-rodo flex flex-row items-center h-[76px] p-2  bg-white border-2 rounded-[4px] ${printAcceptRodoError && "invalid-field"}`}
            >
              <Checkmark setFormData={setFormData} formData={formData} />
              <label
                className="accept-rodo-text sm:max-w-[260px] below-sm:mr-2 ml-3 text-sm text-primary-800 leading-tight"
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
              <div className="contact-rodo-icon w-[40px] h-[40px] ml-auto">
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

          {/* reCAPTCHA */}
          <div className="reCAPTCHA-container below-sm:mt-4">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={onReCAPTCHAChange}
              ref={recaptchaRef}
              theme="light"
            />
          </div>
        </div>
      </div>

      <button
        className="contact-button w-full sm:w-[180px] h-[38px] px-6 py-1  sm:ml-auto mt-4 text-secondary-200 uppercase font-semibold border border-secondary-200 rounded-lg bg-primary-600 hover:bg-primary-500 hover:border-2"
        type="submit"
      >
        Wyślij
      </button>
    </form>
  )
}
