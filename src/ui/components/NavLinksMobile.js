import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavLinksMobile({ setIsMenuVisible }) {
  const path = usePathname()

  function isActive(href) {
    return path === href
  }
  function changeActiveClass(href) {
    return `${
      isActive(href)
        ? "text-secondary-200 hover:border-white"
        : "text-white hover:border-white"
    }`
  }

  return (
    <>
      <p className="navbar-anchors-label uppercase font-bold pl-4 py-2 border-b border-primary-800 text-white">
        Nawigacja:
      </p>
      <div className="navbar-anchors-list flex flex-col h-full justify-between align-middle">
        <Link
          className={`navbar-anchor-mobile ${changeActiveClass("/")}`}
          href="/"
          onClick={() => setIsMenuVisible(false)}
        >
          O NAS
        </Link>
        <Link
          className={`navbar-anchor-mobile ${changeActiveClass("/zespol")}`}
          href="/zespol"
          onClick={() => setIsMenuVisible(false)}
        >
          ZESPÓŁ
        </Link>
        <div className="hidden text-white hover:border-white"></div>
        <Link
          className={`navbar-anchor-mobile ${changeActiveClass("/zakres-uslug")}`}
          href="/zakres-uslug"
          onClick={() => setIsMenuVisible(false)}
        >
          ZAKRES USŁUG
        </Link>
        <Link
          className={`navbar-anchor-mobile ${changeActiveClass("/publikacje")}`}
          href="/publikacje"
          onClick={() => setIsMenuVisible(false)}
        >
          PUBLIKACJE
        </Link>
        <Link
          className={`navbar-anchor-mobile ${changeActiveClass("/kontakt")}`}
          href="/kontakt"
          onClick={() => setIsMenuVisible(false)}
        >
          KONTAKT
        </Link>
      </div>
    </>
  )
}
