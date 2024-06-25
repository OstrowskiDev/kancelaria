'use client'

import { Header } from '@/ui/components/Header'
import AddressIco from '@/ui/icons/AddressIco'
import EmailIco from '@/ui/icons/EmailIco'
import PhoneIco from '@/ui/icons/PhoneIco'
import Link from 'next/link'
import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function Kontakt() {
  const [formData, setFormData] = useState({})
  const [isRodoAccepted, setIsRodoAccepted] = useState(false)

  useEffect(() => {
    setFormData({ ...formData, jsEnabled: "yes"})
  }, [])

  function onInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  function onCheckboxChange(event) {
    setIsRodoAccepted(event.target.checked)
  }

  function validateForm() {
    const { fullName, email, phone, topic, content, acceptRodo, name, jsEnabled } = formData
    let message = ''
    if (!fullName || !email || !phone || !topic || !content) {
      message += 'Proszę wypełnić wszystkie pola oznaczone gwiazdką '
    }

    if (!validator.matches(fullName, /^[a-zA-Z\s]*$/)) {
      message += 'Imie i nazwisko nie może zawierać cyfr i znaków specjalnych. '
    }

    if (!validator.isLength(fullName, { max: 50 })) {
      message += 'Imię i nazwisko nie może być dłuższe niż 50 liter. '
    }

    if (!validator.isEmail(email)) {
      message +='Proszę wprowadzić prawidłowy adres email. '
    }

    if (!validator.isMobilePhone(phone, 'any', { strictMode: false })) {
      message += 'Prosze wprowadzić prawidłowy numer telefonu. '
    }

    if (!validator.isLength(topic, { max: 100 })) {
      message += 'Temat nie może być dłuższy niż 100 znaków. '
    }

    if (!validator.isLength(content, { min:100, max: 1000 })) {
      message += 'Wiadomość musi zawierać od 100 do 1000 znaków. '
    }

    if (acceptRodo !== "yes") {
      message += "Aby wysłać wiadomość wymagana jest akceptacja warunków Polityki Prywatności"
    }

    if (jsEnabled !== "yes") return "bot detected"

    if (name !== "") return "bot detected"
  }

  const onSubmit = (event) => {
    event.preventDefault()
    validationMessage = validateForm()
    if (validationMessage === 'bot detected') return
    if (validationMessage !== "") return
    console.log("form submission successful")

  }

  return (
    <>
      <Script src="https://www.google.com/recaptcha/api.js" async defer />

      <Header title="Kontakt" />
      <div className="contact-wrapper bg-primary-800" style={{ minHeight: 'calc(100vh - 380px)'}}>
        <div className="contact-container flex flex-row max-w-[900px] mx-auto mt-8 mb-16 ">
          {/* contact data */}
          <div className="contact-data-container pl-12 mt-12 min-w-[240px]">
            <div className="contact-address-container mt-3">
              <div className="contact-address-icon relative top-6 right-9 w-6 h-6">
                <AddressIco />
              </div>
              <h2 className="contact-address-label uppercase font-semibold text-white">Adres:</h2>
              <p className="contact-text text-white text-sm">ul. Kancelarii 5/8</p>
              <p className="contact-text text-white text-sm">62-200, Gniezno</p>
            </div>
            <div className="contact-email-container mt-3">
              <div className="contact-email-icon relative top-6 right-9 w-6 h-6 ">
                <EmailIco />
              </div>
              <h2 className="contact-email-label uppercase font-semibold text-sm text-white">Email:</h2>
              <p className="contact-text text-white text-sm">kancelaria@example.com</p>
            </div>
            <div className="contact-phone-container mt-3">
              <div className="contact-phone-icon relative top-6 right-9 w-6 h-6 ">
                <PhoneIco />
              </div>
              <h2 className="contact-phone-label uppercase font-semibold text-sm text-white">Tel./Fax:</h2>
              <p className="contact-text text-white text-sm">kancelaria@example.com</p>
            </div>
          </div>

          {/* contact form */}
          <form className="contact-from-container flex flex-col min-w-[240px] w-full max-w-[680px] px-4 mt-8 mb-4 mx-auto">
          <h2 className="contact-form-label p-1 mb-1 uppercase tracking-wide text-white font-semibold text-xl">{"formularz kontaktowy"}</h2>

            <div className='captcha-awesomeness-handler 
            form-inputs-container p-2 border border-gray-700 rounded-md' style={{backgroundColor: 'rgb(34, 34, 34)'}} >
            <div className="contact-form-user-data grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <input className="contact-input-fullName p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md" type="text" name="fullName" placeholder="Imię i nazwisko *" onChange={onInputChange} required />
              <input className="contact-input-email p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md" type="text" name="email" placeholder="Email *" onChange={onInputChange} required />
              <input className="contact-input-phone p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md" type="text" name="phone" placeholder="Telefon *" onChange={onInputChange} required />
              <input className="contact-input-topic p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md" type="text" name="topic" placeholder="Temat *" onChange={onInputChange} required />

              <input className="hidden" type="text" name="name" onChange={onInputChange} />
              <input type="hidden" id="jsEnabled" name='jsEnabled' value="no" />
            </div>

            <textarea className="contact-input-content w-full h-48 p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md" type="text" name="content" placeholder="Wiadomość *" onChange={onInputChange} required />

            <div className='contact-checkboxes-container flex flex-row justify-between'>
            <div className="contact-accept-rodo flex flex-row items-center h-[76px] p-2 mr-3 border rounded-sm" style={{ borderColor: 'rgb(82, 82, 82)'}} >
              <input className="accept-rodo-checkbox w-[18px] ml-2 scale-150" type="checkbox" name="acceptRodo" value="yes" checked={isRodoAccepted} onChange={onCheckboxChange} />
              <label className="accept-rodo-text ml-5 text-white font-thin leading-tight" htmlFor="acceptRodo">
                Akceptuję
                <Link className="link font-normal hover:text-secondary-200" href={'polityka-prywatnosci'} target="_blank" rel="noopener noreferrer">
                  {' Plitykę Prywantości'}
                </Link>{' '}
                i zasady przetwarzania danych osobowych RODO.
              </label>
            </div>
            
            <div className="g-recaptcha" data-sitekey={process.env.RECAPTCHA_SITE_KEY} data-theme="dark"></div>
            </div>
            </div>

            <button className="contact-button w-[160px] h-[38px] mt-3 ml-auto px-6 py-1 text-secondary-200 uppercase font-semibold border border-secondary-200 rounded-lg bg-primary-600 hover:bg-primary-500 hover:border-2" type="submit" onSubmit={onSubmit}>
              Wyślij
            </button>


          </form>
        </div>
      </div>
    </>
  )
}
