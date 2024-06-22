import { Header } from '@/ui/components/Header'

export default function Kontakt() {
  return (
    <>
      <Header title="Kontakt" />
      <div className="contact-wrapper bg-primary-700">
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
        </div>
      </div>
    </>
  )
}
