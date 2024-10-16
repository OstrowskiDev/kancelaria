"use client"

import Link from "next/link"
import { Header } from "@/ui/components/Header"
import EnterIco from "@/ui/icons/EnterIco"
import { useEffect, useState } from "react"
import { useDataContext } from "@/lib/context"

export default function ZakresUslug() {
  const [isVisible, setIsVisible] = useState(false)
  const { contentful } = useDataContext()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <Header title="Zakres usług" />
      <div
        className={`services fade-in-1000 ${isVisible && "make-visible"}  max-w-[900px] px-3 mx-auto my-14`}
      >
        <div className="services-list grid grid-cols-1 above-560:grid-cols-2 gap-10">
          {contentful.services.map((service, index) => {
            return (
              <div className="service-container pr-2" key={index}>
                <h2 className="service-title relative top-3 text-2xl font-semibold text-primary-900">
                  {service.title}
                </h2>
                <div className="separator"></div>
                <p className="service-description text-primary-700 my-2 text-justify">
                  {service.description}
                </p>
                <Link
                  className="contact-us flex flex-row items-center"
                  href="/kontakt"
                >
                  <p className="contact-us-text mr-2 font-custom-serif font-semibold tracking-wide text-gray-500 hover:text-primary-600 border-b-2 border-background-main hover:border-secondary-200 ">
                    Zapraszamy do kontaktu
                  </p>
                  <EnterIco />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
