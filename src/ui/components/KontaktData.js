import AddressIco from '@/ui/icons/AddressIco'
import EmailIco from '@/ui/icons/EmailIco'
import PhoneIco from '@/ui/icons/PhoneIco'

export default function KontaktData() {
  return (
    <>
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
    </>
  )
}