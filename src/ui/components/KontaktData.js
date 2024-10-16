import LawyerData from "./LawyerData"
import { useDataContext } from "@/lib/context"

export default function KontaktData() {
  const { contentful } = useDataContext()

  return (
    <>
      <div className="contact-data-header my-20">
        <h2 className="contact-data-label uppercase font-semibold text-xl below-sm:text-center">
          Dane kontaktowe
        </h2>
        <div className="separator relative bottom-2"></div>
        <div className="contact-data-container flex flex-col above-560:flex-row above-560:justify-around min-w-[240px] below-560:ml-[10vw]">
          {contentful.team.map((lawyer, index) => {
            return (
              <LawyerData
                key={index}
                name={lawyer.name}
                email={lawyer.email}
                phone={lawyer.phone}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
