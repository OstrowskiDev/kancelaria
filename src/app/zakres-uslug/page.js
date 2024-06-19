import Link from 'next/link'
import { services } from '@/mock-data/services'

export default function ZakresUslug() {
  return (
    <div className="services max-w-[640px] mx-auto mt-4">
      <div className="services-header my-12">
        <div className="separator"></div>
        <h1 className="services-header text-4xl font-bold text-primary-900 text-center">
          ZAKRES USŁUG
        </h1>
        <div className="separator"></div>
      </div>

      <div className="services-list my-20">
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
              <Link className="contact-us" href="/kontakt">
                zapraszamy do kontaktu
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

{
  /*  */
}
