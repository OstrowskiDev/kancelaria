import Link from "next/link"
import LogoJudytaCiesielska from "../icons/LogoJudytaCiesielska"
import LogoKatarzynaMarkiewicz from "../icons/LogoKatarzynaMarkiewicz"

export function Logo() {
  return (
    <Link className="navbar-logo-anchor mr-auto" href="/">
      <div className="navbar-logos flex flex-row items-center">
        <p className="hidden sm:block mr-2 uppercase text-sm text-secondary-200">
          kancelarie <br></br> adwokackie
        </p>
        <div className="navbar-logo-container w-10">
          <LogoJudytaCiesielska />
        </div>
        <div className="navbar-logo-container w-10 ml-2">
          <LogoKatarzynaMarkiewicz />
        </div>
      </div>
    </Link>
  )
}
