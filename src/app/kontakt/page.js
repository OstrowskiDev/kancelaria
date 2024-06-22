'use client'

import { Header } from '@/ui/components/Header'
import { useState } from 'react'

export default function Kontakt() {
  const [formData, setFormData] = useState({})

  function onInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  function onSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <>
      <Header title="Kontakt" />
      <div className="contact-wrapper bg-primary-700" style={{ minHeight: 'calc(100vh - 380px)' }}>
        <div className="contact-container flex flex-row max-w-[900px] mx-auto mt-8 mb-16 ">
          {/* contact data */}
          <div className="contact-data-container">
            <div className="contact-address-container mt-3">
              <div className="contact-address-icon relative top-6 right-9 w-6 h-6 border border-secondary-300 rounded-full"></div>
              <h2 className="contact-address-label uppercase font-semibold text-white">Adres:</h2>
              <p className="contact-text text-white text-sm">ul. Kancelarii 5/8</p>
              <p className="contact-text text-white text-sm">62-200, Gniezno</p>
            </div>
            <div className="contact-email-container mt-3">
              <div className="contact-email-icon relative top-6 right-9 w-6 h-6 border border-secondary-300 rounded-full"></div>
              <h2 className="contact-email-label uppercase font-semibold text-sm text-white">
                Email:
              </h2>
              <p className="contact-text text-white text-sm">kancelaria@example.com</p>
            </div>
            <div className="contact-phone-container mt-3">
              <div className="contact-phone-icon relative top-6 right-9 w-6 h-6 border border-secondary-300 rounded-full"></div>
              <h2 className="contact-phone-label uppercase font-semibold text-sm text-white">
                Tel./Fax:
              </h2>
              <p className="contact-text text-white text-sm">kancelaria@example.com</p>
            </div>
          </div>

          {/* contact form */}
          <form className="contact-from-container flex flex-col min-w-[240px] w-full max-w-[640px] px-4 mt-8 mb-4 mx-auto">
            <div className="contact-form-user-data grid grid-cols-2 gap-2 mb-2 ">
              <input
                className="contact-input-name p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md"
                type="text"
                name="name"
                placeholder="Imię i nazwisko *"
                onChange={onInputChange}
                required
              />
              <input
                className="contact-input-email p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md"
                type="text"
                name="email"
                placeholder="Email *"
                onChange={onInputChange}
                required
              />
              <input
                className="contact-input-phone p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md"
                type="text"
                name="phone"
                placeholder="Telefon *"
                onChange={onInputChange}
                required
              />
              <input
                className="contact-input-topic p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md"
                type="text"
                name="topic"
                placeholder="Temat *"
                onChange={onInputChange}
                required
              />
            </div>

            <textarea
              className="contact-input-message h-48 p-[6px] border-2 border-primary-800 focus:border-secondary-200 focus:outline-none rounded-md"
              type="text"
              name="message"
              placeholder="Wiadomość *"
              onChange={onInputChange}
              required
            />
            <button
              className="contact-button w-[160px] h-[38px] mt-2 ml-auto px-6 py-1 text-white border border-secondary-200 rounded-lg bg-primary-600 hover:bg-primary-500 hover:border-2"
              type="submit"
              onSubmit={onSubmit}
            >
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
