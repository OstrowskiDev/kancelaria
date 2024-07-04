import EmailIco from "@/ui/icons/EmailIco"
import PhoneIco from "@/ui/icons/PhoneIco"

export default function LawyerData({ name, email, phone }) {
  return (
    <div className="contact-adwokat-data flex flex-col">
      <h2 className="contact-name font-semibold text-secondary-200 text-2xl ">
        {name}
      </h2>
      {/* <p className="contact-title uppercase font-semibold text-secondary-200 text-sm">
            Adwokat
          </p> */}
      <div className="contact-email-container relative ml-10 mt-2">
        <div className="contact-email-icon absolute top-3 left-[-36px] w-6 h-6 ">
          <EmailIco />
        </div>
        <h3 className="contact-email-label uppercase font-semibold text-sm text-white">
          Email:
        </h3>
        <p className="contact-text text-white text-sm">{email}</p>
      </div>
      <div className="contact-phone-container relative ml-10 mt-2">
        <div className="contact-phone-icon absolute top-3 left-[-36px] w-6 h-6 ">
          <PhoneIco />
        </div>
        <h3 className="contact-phone-label uppercase font-semibold text-sm text-white">
          Telefon:
        </h3>
        <p className="contact-text text-white text-sm">{phone}</p>
      </div>
    </div>
  )
}
