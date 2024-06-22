'use client'

import { Header } from '@/ui/components/Header'
import AddressIco from '@/ui/icons/AddressIco'
import EmailIco from '@/ui/icons/EmailIco'
import PhoneIco from '@/ui/icons/PhoneIco'
import Link from 'next/link'
import { useState } from 'react'

export default function Kontakt() {
  const [formData, setFormData] = useState({})
  const [isRodoAccepted, setIsRodoAccepted] = useState(false)

  function onInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  function onCheckboxChange(event) {
    setIsRodoAccepted(event.target.checked)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (!isRodoAccepted) {
      console.log('Please accept the RODO to proceed.')
    } else {
      console.log(formData)
    }
  }

  return (
    <>
      <Header title="Kontakt" />
      <div className="contact-wrapper bg-primary-700" style={{ minHeight: 'calc(100vh - 380px)' }}>
        <div className="contact-container flex flex-row max-w-[900px] mx-auto mt-8 mb-16 ">
          {/* contact data */}
          <div className="contact-data-container pl-12 min-w-[240px]">
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
            <div className="contact-form-user-data grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 ">
              <input className="contact-input-name p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md" type="text" name="name" placeholder="Imię i nazwisko *" onChange={onInputChange} required />
              <input className="contact-input-email p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md" type="text" name="email" placeholder="Email *" onChange={onInputChange} required />
              <input className="contact-input-phone p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md" type="text" name="phone" placeholder="Telefon *" onChange={onInputChange} required />
              <input className="contact-input-topic p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md" type="text" name="topic" placeholder="Temat *" onChange={onInputChange} required />
            </div>

            <textarea className="contact-input-message h-48 p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md" type="text" name="message" placeholder="Wiadomość *" onChange={onInputChange} required />

            <div className="contact-accept-rodo flex flex-row mt-3">
              <input className="accept-rodo-checkbox w-[18px]" type="checkbox" name="agree" value="yes" checked={isRodoAccepted} onChange={onCheckboxChange} />
              <label className="accept-rodo-text ml-3 text-white font-thin" htmlFor="agree">
                Akceptuję
                <Link className="link font-normal hover:text-secondary-200" href={'polityka-prywantosci'} target="_blank" rel="noopener noreferrer">
                  {' Plitykę Prywantości'}
                </Link>{' '}
                i zasady przetwarzania danych osobowych RODO.
              </label>
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
