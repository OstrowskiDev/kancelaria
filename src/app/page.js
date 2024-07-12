import { HeaderMain } from "@/ui/components/HeaderMain"
import { home } from "@/mock-data/home"
import Link from "next/link"
import EnterIco from "@/ui/icons/EnterIco"
import Image from "next/image"

export default function Home() {
  return (
    <div className="home-main-container">
      {/* header */}
      <HeaderMain
        title={`"Nazwa i logo kancelarii. Zdjęcie w tle do zmiany na lepsze. Wysokość zdjęcia/tła zawsze dopasowana tak by zajmować 100% wysokości ekranu urządzenia."`}
      />

      {/* introduction */}
      <div className="introduction-container max-w-[900px] mt-8 mb-16 mx-auto">
        <h2 className="introduction-title relative top-3 uppercase text-primary-900 font-semibold text-2xl">
          {home.introduction.title}
        </h2>
        <div className="separator"></div>
        <div className="introduction-content flex flex-col">
          <div className="introduction-image relative h-[480px] mt-1 border border-secondary-200 shrink-0">
            <Image
              src="zapraszamy.jpg"
              alt="Adwokat Judyta Ciesielska i adwokat Katarzyna Markiewicz uśmiechnięte i siedzące przy stole w kancelarii. Zapraszają do współpracy."
              layout="fill"
              objectFit="cover"
              objectPosition="center 80%"
            />
          </div>
          <p
            className="introduction-text text-primary-700 text-justify mt-4 two-columns"
            dangerouslySetInnerHTML={{ __html: home.introduction.content }}
          ></p>
        </div>
      </div>

      {/* services */}
      <div className="services-wrapper pt-8 pb-16 w-full bg-primary-700">
        <div className="services-container max-w-[900px] mx-auto">
          <h2 className="services-title my-6 uppercase text-white font-semibold text-2xl">
            {home.services.title}
          </h2>
          <div className="services-list grid grid-cols-3 gap-12">
            {home.services.services.map((service, index) => {
              return (
                <div className="service-main-container w-[240px]" key={index}>
                  <h3 className="service-title my-2 uppercase text-xl font-semibold text-white text-center">
                    {service.title}
                  </h3>
                  <div
                    className="service-container relative w-[240px] h-[240px] border-y-2 border-secondary-200 bg-primary-600"
                    key={index}
                  >
                    <p className="service-description text-white m-4">
                      Zwięzły opis usługi lub ikona. Erat aliquyam lorem et
                      nonumy sadipscing. Sanctus takimata sea dolore labore. Eos
                      kasd sadipscing clita vero diam.
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
      <div className="team-container max-w-[900px] mt-8 mb-16 mx-auto">
        <h2 className="team-title relative top-3 uppercase text-primary-900 font-semibold text-2xl">
          {home.team.title}
        </h2>
        <div className="separator"></div>
        <div className="team-content flex flex-row">
          <p
            className="team-text text-primary-700 text-justify mr-8"
            dangerouslySetInnerHTML={{ __html: home.team.content }}
          ></p>
          <div className="team-image relative w-1/2 h-[600px] mt-1 border border-secondary-200 shrink-0">
            <Image
              src="team.jpg"
              alt="Adwokat Judyta Ciesielska i adwokat Katarzyna Markiewicz. W tle godło Polski"
              layout="fill"
              objectFit="cover"
              objectPosition="center 20%"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
