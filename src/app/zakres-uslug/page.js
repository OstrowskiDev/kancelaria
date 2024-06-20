import Link from 'next/link'
import { services } from '@/mock-data/services'
import { Header } from '@/ui/components/Header'
import EnterIco from '@/ui/icons/EnterIco'

export default function ZakresUslug() {
  return (
    <>
      <Header title="Zakres usług" />
      <div className="services max-w-[640px] mx-auto mt-4">
        <div className="services-list my-10">
          {services.map((service, index) => {
            return (
              <div className="service-container mt-10" key={index}>
                <h2 className="service-title text-3xl font-semibold text-primary-900">
                  {service.title}
                </h2>
                <div className="separator"></div>
                <h3 className="service-subtitle my-2 font-semibold text-primary-800">
                  {service.subtitle}
                </h3>
                <p className="service-description text-primary-700 my-2">{service.description}</p>
                <Link className="contact-us flex flex-row items-center" href="/kontakt">
                  <p className="contact-us-text mr-2 uppercase font-semibold text-primary-400 hover:text-primary-600 border-b-2 border-background-main hover:border-secondary-200 ">
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
