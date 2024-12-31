"use client"

import { HeaderMain } from "@/ui/components/HeaderMain"
import { useRouter } from "next/navigation"
import Link from "next/link"
import EnterIco from "@/ui/icons/EnterIco"
import Image from "next/image"
import { Introduction } from "@/ui/components/Introduction"
import { useDataContext } from "@/lib/context"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()
  const { contentful } = useDataContext()

  useEffect(() => {
    if (contentful?.home === undefined) {
      router.push("/strona-niedostepna")
    }
  }, [])

  if (contentful?.home === undefined) {
    return null
  }

  return (
    <div className="home-main-container">
      {/* header */}
      <HeaderMain
        title={`"Nazwa i logo kancelarii. Zdjęcie w tle do zmiany na lepsze. Wysokość zdjęcia/tła zawsze dopasowana tak by zajmować 100% wysokości ekranu urządzenia."`}
      />

      {/* introduction */}
      <Introduction introductionData={contentful.home.introduction} />

      {/* services */}
      <div className="services-wrapper px-6 pt-8 pb-16 w-full bg-primary-700">
        <div className="services-container max-w-[900px] mx-auto">
          <h2 className="services-title my-6 uppercase below-sm:text-center text-white font-semibold text-2xl">
            {contentful.home.services.title}
          </h2>
          <div className="services-list grid grid-cols-1 above-560:grid-cols-2 above-850:grid-cols-3 gap-8 sm:px-5">
            {contentful.home.services.servicesList.map((service, index) => {
              return (
                <div className="service-main-container mx-auto" key={index}>
                  <h3 className="service-title my-2 uppercase text-xl font-semibold text-white text-center">
                    {service.title}
                  </h3>
                  <div
                    className="service-container relative min-w-[240px] max-w-[3200px] w-full above-560:h-[240px] below-560:pb-8 border-y-2 border-secondary-200 bg-primary-600"
                    key={index}
                  >
                    <p className="service-description text-white m-4">
                      {service.description}
                    </p>
                    <Link
                      className="service-link absolute left-4 bottom-3 flex flex-row items-center "
                      href="/zakres-uslug"
                    >
                      <p className="link-text mr-2 font-custom-serif text-white  hover:text-secondary-300 border-b-2 border-primary-600 hover:border-secondary-200">
                        więcej informacji
                      </p>
                      <EnterIco />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* about team */}
      <div className="team-container max-w-[900px] px-6 mt-8 mb-16 mx-auto">
        <h2 className="team-title relative top-3 uppercase below-sm:text-center text-primary-900 font-semibold text-2xl">
          {contentful.home.team.title}
        </h2>
        <div className="separator"></div>
        <div className="team-content flex flex-col-reverse sm:flex-row">
          <p
            className="team-text below-sm:mt-4 text-primary-700 text-justify sm:mr-8"
            dangerouslySetInnerHTML={{ __html: contentful.home.team.content }}
          ></p>
          {/* image for desktop */}
          <div className="team-image-desktop relative below-sm:hidden w-1/2 h-[600px] mt-1 border border-secondary-200 shrink-0">
            <Image
              src="/team.jpg"
              alt="Adwokat Judyta Ciesielska i adwokat Katarzyna Markiewicz. W tle godło Polski"
              fill={true}
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
            />
          </div>
          {/* image for mobile */}
          <div className="team-image-mobile sm:hidden relative w-full h-[120vw] mt-1 border border-secondary-200 shrink-0">
            <Image
              src="team.jpg"
              alt="Adwokat Judyta Ciesielska i adwokat Katarzyna Markiewicz. W tle godło Polski"
              fill={true}
              style={{ objectFit: "cover", objectPosition: "center 50%" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
