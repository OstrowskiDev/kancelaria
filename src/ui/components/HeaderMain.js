import LogoJudytaCiesielska from "../icons/LogoJudytaCiesielska"
import LogoKatarzynaMarkiewicz from "../icons/LogoKatarzynaMarkiewicz"

export function HeaderMain() {
  return (
    <div
      className="header-background-image flex justify-center items-center bg-primary-600"
      style={{
        backgroundImage: `url("header02small.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
        width: "100%",
        height: "calc(100vh - 80px)",
      }}
    >
      <div className="header-vertical-container flex flex-col items-center">
        <div className="header-horizontal-container flex flex-row justify-center items-center w-full overflow-hidden">
          {/* logo JC */}
          <div className="header-judyta-ciesielska relative flex flex-row">
            <div className="header-icon flex flex-row items-center">
              <div className="header-logo-container w-[280px] m-8">
                <LogoJudytaCiesielska />
              </div>
              <div className="header-logo-fullname">
                <h2 className="font-semibold text-3xl text-secondary-200">
                  Adwokat <br></br> Judyta Ciesielska
                </h2>
              </div>
            </div>
          </div>

          {/* logo KM */}
          <div className="header-katarzyna-markiewicz relative flex flex-row">
            <div className="header-icon flex flex-row items-center">
              <div className="header-logo-container w-[280px] m-8">
                <LogoKatarzynaMarkiewicz />
              </div>
              <div className="header-logo-fullname">
                <h2 className="font-semibold text-3xl text-secondary-200">
                  Adwokat <br></br> Katarzyna Markiewicz
                </h2>
              </div>
            </div>
          </div>
        </div>
        <h1
          className="header-label-main uppercase font-bold text-secondary-200 tracking-wide"
          style={{
            fontSize: "2rem",
            lineHeight: "2.5rem",
            "letter-spacing": "2rem",
            "word-spacing": "6rem",
          }}
        >
          kancelarie adwokackie
        </h1>
      </div>
    </div>
  )
}
