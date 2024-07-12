import EmailIco from "@/ui/icons/EmailIco"
import PhoneIco from "@/ui/icons/PhoneIco"

export default function LawyerData({ name, email, phone }) {
  return (
    <div className="contact-adwokat-data flex flex-col">
      <h3 className="contact-name w-64 box-border font-semibold text-2xl">
        {name}
      </h3>
      {/* <div className="separator"></div> */}
      <h4 className="contact-title uppercase font-semibold text-sm">Adwokat</h4>

      <div className="contact-email-container relative ml-10 mt-2">
        <div className="contact-email-icon absolute top-3 left-[-36px] w-6 h-6 ">
          <EmailIco />
        </div>
        <h4 className="contact-email-label uppercase font-semibold text-sm">
          Email:
        </h4>
        <p className="contact-text text-sm">{email}</p>
      </div>
      <div className="contact-phone-container relative ml-10 mt-2">
        <div className="contact-phone-icon absolute top-3 left-[-36px] w-6 h-6 ">
          <PhoneIco />
        </div>
        <h4 className="contact-phone-label uppercase font-semibold text-sm">
          Telefon:
        </h4>
        <p className="contact-text text-sm">{phone}</p>
      </div>
    </div>
  )
}
