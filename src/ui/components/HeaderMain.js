import LogoJudytaCiesielska from "../icons/LogoJudytaCiesielska"
import LogoKatarzynaMarkiewicz from "../icons/LogoKatarzynaMarkiewicz"

export function HeaderMain() {
  return (
    <div
      className="header-background-image relative flex justify-center items-center bg-primary-600"
      style={{
        backgroundImage: `url("header02small.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
        width: "100%",
        height: "calc(100vh - 80px)",
      }}
    >
      <div className="header-vertical-container flex flex-col items-center below-sm:mb-12 ">
        <div className="header-horizontal-container flex flex-col sm:flex-row justify-center items-center w-full overflow-hidden">
          {/* logo JC */}
          <div className="header-judyta-ciesielska relative flex flex-row mr-8 lg:mr-0">
            <div className="header-icon flex flex-col lg:flex-row  items-center">
              <div className="header-logo-container w-48 sm:w-52 xl:w-72 my-4 mx-5">
                <LogoJudytaCiesielska />
              </div>
              <div className="header-fullname-container min-w-[250px] relative  lg:static top-2 left-2 lg:min-w-[200px]">
                <h2 className="header-fullname font-semibold text-2xl xl:text-3xl text-secondary-200">
                  Adwokat <br></br> Judyta Ciesielska
                </h2>
              </div>
            </div>
          </div>

          {/* logo KM */}
          <div className="header-katarzyna-markiewicz relative flex flex-row below-sm:mt-6">
            <div className="header-icon flex flex-col lg:flex-row items-center">
              <div className="header-logo-container w-48 sm:w-52 h-50 xl:w-72 my-4 mx-5">
                <LogoKatarzynaMarkiewicz />
              </div>
              <div className="header-fullname-container relative lg:static bottom-2 left-2  min-w-[250px]">
                <h2 className="font-semibold text-2xl xl:text-3xl text-secondary-200">
                  Adwokat <br></br> Katarzyna Markiewicz
                </h2>
              </div>
            </div>
          </div>
        </div>
        <h1
          className="header-label-main absolute w-full lg:static bottom-4 lg:mt-4 uppercase font-semibold lg:font-bold text-secondary-200 text-xl lg:text-2xl xl:text-2rem leading-loose xl:leading-2.5rem tracking-0.4rem sm:tracking-0.8rem lg:tracking-1.5rem xl:tracking-2rem below-sm:text-center"
          style={{
            wordSpacing: "1.5rem",
          }}
        >
          kancelarie adwokackie
        </h1>
      </div>
    </div>
  )
}
