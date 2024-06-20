import Link from 'next/link'
import { services } from '@/mock-data/services'
import { Header } from '@/ui/components/Header'
import EnterIco from '@/ui/icons/EnterIco'

export default function ZakresUslug() {
  return (
    <>
      <Header title="Zakres usług" />
      <div className="services max-w-[900px] mx-auto my-14">
        <div className="services-list grid grid-cols-2 gap-12">
          {services.map((service, index) => {
            return (
              <div className="service-container" key={index}>
                <h2 className="service-title relative top-3 text-2xl font-semibold text-primary-900">
                  {service.title}
                </h2>
                <div className="separator"></div>
                <h3 className="service-subtitle my-3 font-semibold text-primary-800 text-justify">
                  {service.subtitle}
                </h3>
                <p className="service-description text-primary-700 my-2 text-justify">
                  {service.description}
                </p>
                <Link className="contact-us flex flex-row items-center" href="/kontakt">
                  <p className="contact-us-text mr-2 uppercase font-semibold text-gray-500 hover:text-primary-600 border-b-2 border-background-main hover:border-secondary-200 ">
                    zapraszamy do kontaktu
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

{
  /*  */
}
