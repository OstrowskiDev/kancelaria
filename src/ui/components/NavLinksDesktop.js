import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavLinksDesktop() {
  const path = usePathname()

  function isActive(href) {
    return path === href
  }
  function changeActiveClass(href) {
    return `${
      isActive(href)
        ? "text-secondary-200 border-b-2 border-secondary-200"
        : "text-white hover:border-b-2 hover:border-white"
    }`
  }

  return (
    <>
      <Link
        className={`navbar-anchor ${changeActiveClass("/zespol")}`}
        href="/zespol"
      >
        ZESPÓŁ
      </Link>
      <Link
        className={`navbar-anchor ${changeActiveClass("/zakres-uslug")}`}
        href="/zakres-uslug"
      >
        ZAKRES USŁUG
      </Link>
      <Link
        className={`navbar-anchor ${changeActiveClass("/publikacje")}`}
        href="/publikacje"
      >
        PUBLIKACJE
      </Link>
      <Link
        className={`navbar-anchor ${changeActiveClass("/kontakt")}`}
        href="/kontakt"
      >
        KONTAKT
      </Link>
    </>
  )
}
