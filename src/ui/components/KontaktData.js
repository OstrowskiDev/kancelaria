import AddressIco from "@/ui/icons/AddressIco"
import LawyerData from "./LawyerData"

export default function KontaktData() {
  return (
    <>
      <div className="contact-data-container flex flex-row justify-around pl-12 my-40 min-w-[240px]">
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
    </>
  )
}
