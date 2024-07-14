import { Header } from "@/ui/components/Header"
import { team } from "@/mock-data/team"
import Image from "next/image"

export default function Zespol() {
  return (
    <>
      <Header title="Zespół" />
      <div className="team-container max-w-[900px] w-full mt-12 mb-10 mx-auto">
        {team.map((member, index) => (
          <div className="team-member-container my-4" key={index}>
            <div className="team-member-header">
              <h2 className="team-member-name text-2xl font-semibold text-primary-900">
                {member.name}
              </h2>
              <div className="separator relative bottom-3" />
              <h3 className="team-member-title relative bottom-6 uppercase font-semibold text-sm text-gray-700 ">
                {member.title}
              </h3>
            </div>
            <div className="team-member-content flex flex-row">
              <p className="team-member-description mr-10 text-justify ">
                {member.description}
              </p>
              <div className="team-member-photo relative w-[360px] h-[480px] border border-secondary-200 shrink-0">
                <Image
                  src={`${member.image}`}
                  alt={`${member.name}, ${member.title}`}
                  fill={true}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 25%",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
