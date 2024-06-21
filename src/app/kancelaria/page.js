import { Header } from '@/ui/components/Header'
import { kancelaria } from '@/mock-data/kancelaria'

export default function Kancelaria() {
  return (
    <>
      <Header title="Kancelaria" />

      {/* kancelaria topic1 white */}
      <div className="kancelaria-container max-w-[900px] mt-8 mb-16 mx-auto">
        <h2 className="kancelaria-title relative top-3 uppercase text-primary-900 font-semibold text-2xl">
          {kancelaria.topic1.title}
        </h2>
        <div className="separator"></div>
        <div className="kancelaria-content flex flex-row">
          <p
            className="kancelaria-text text-primary-700 text-justify mr-8"
            dangerouslySetInnerHTML={{ __html: kancelaria.topic1.content }}
          ></p>
          <div className="kancelaria-image w-1/2 h-[600px] mt-1 border border-secondary-200 shrink-0"></div>
        </div>
      </div>

      {/* kancelaria topic2 darkblue */}
      <div className="kancelaria-wrapper pt-8 pb-16 bg-primary-700">
        <div className="kancelaria-container max-w-[900px] mx-auto ">
          <h2 className="kancelaria-title relative top-3 uppercase text-white font-semibold text-2xl">
            {kancelaria.topic2.title}
          </h2>
          <div className="separator"></div>
          <div className="kancelaria-content flex flex-row">
            <div className="kancelaria-image w-1/2 h-[600px] mt-1 border border-secondary-200 shrink-0"></div>
            <p
              className="kancelaria-text text-white text-justify ml-8"
              dangerouslySetInnerHTML={{ __html: kancelaria.topic2.content }}
            ></p>
          </div>
        </div>
      </div>

      {/* kancelaria topic3 white */}
      <div className="kancelaria-container max-w-[900px] mt-8 mb-16 mx-auto">
        <h2 className="kancelaria-title relative top-3 uppercase text-primary-900 font-semibold text-2xl">
          {kancelaria.topic3.title}
        </h2>
        <div className="separator"></div>
        <div className="kancelaria-content flex flex-row">
          <p
            className="kancelaria-text text-primary-700 text-justify mr-8"
            dangerouslySetInnerHTML={{ __html: kancelaria.topic3.content }}
          ></p>
          <div className="kancelaria-image w-1/2 h-[600px] mt-1 border border-secondary-200 shrink-0"></div>
        </div>
      </div>
    </>
  )
}
