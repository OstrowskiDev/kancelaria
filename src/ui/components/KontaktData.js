import AddressIco from "@/ui/icons/AddressIco"
import LawyerData from "./LawyerData"

export default function KontaktData() {
  return (
    <>
      <div className="contact-data-header my-20">
        <h2 className="contact-data-label uppercase font-semibold text-xl below-sm:text-center">
          Dane kontaktowe
        </h2>
        <div className="separator relative bottom-2"></div>
        <div className="contact-data-container flex flex-col above-560:flex-row above-560:justify-around min-w-[240px] below-560:ml-[10vw]">
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
