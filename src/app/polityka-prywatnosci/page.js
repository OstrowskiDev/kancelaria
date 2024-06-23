import { Header } from '@/ui/components/Header'
import { rodo } from '@/mock-data/rodo'

export default function PolitykaPrywantosci() {
  return (
    <>
      <Header title="Polityka Prywantości" />
      <div className="rodo-container max-w-[900px] mx-auto mt-8 mb-16">
        <h2 className="rodo-title relative top-3 uppercase text-primary-900 font-semibold text-2xl">Polityka Prywantości</h2>
        <div className="separator"></div>
        <div className="rodo-content flex flex-row">
          <p className="rodo-text text-primary-700 text-justify mr-8" dangerouslySetInnerHTML={{ __html: rodo }}></p>
        </div>
      </div>
    </>
  )
}
