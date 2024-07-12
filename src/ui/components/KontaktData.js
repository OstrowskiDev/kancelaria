import AddressIco from "@/ui/icons/AddressIco"
import LawyerData from "./LawyerData"

export default function KontaktData() {
  return (
    <>
      <div className="contact-data-header my-20">
        <h2 className="contact-data-label uppercase font-semibold text-xl ">
          Dane kontaktowe
        </h2>
        <div className="separator relative bottom-2"></div>
        <div className="contact-data-container flex flex-row px-12 mt-8 justify-between min-w-[240px]">
          <LawyerData
            name="Katarzyna Markiewicz"
            email="contact@example.com"
            phone="721-149-188"
          />
          <LawyerData
            name="Judyta Ciesielska"
            email="contact@example.com"
            phone="721-058-958"
          />
        </div>
      </div>
    </>
  )
}
