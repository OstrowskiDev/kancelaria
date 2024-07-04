import AddressIco from "@/ui/icons/AddressIco"
import LawyerData from "./LawyerData"

export default function KontaktData() {
  return (
    <>
      <div className="contact-data-container flex flex-row justify-around pl-12 my-40 min-w-[240px]">
        {/* <div className="contact-address-container mt-3">
          <div className="contact-address-icon relative top-6 right-9 w-6 h-6">
            <AddressIco />
          </div>
          <h3 className="contact-address-label uppercase font-semibold text-white">
            Adres:
          </h3>
          <p className="contact-text text-white text-sm">
            ul. Franciszkańska 1/1
          </p>
          <p className="contact-text text-white text-sm">62-200 Gniezno</p>
        </div> */}
        <LawyerData
          name="Adwokat Katarzyna Markiewicz"
          email="contact@example.com"
          phone="721-149-188"
        />
        <LawyerData
          name="Adwokat Judyta Ciesielska"
          email="contact@example.com"
          phone="721-058-958"
        />
      </div>
    </>
  )
}
