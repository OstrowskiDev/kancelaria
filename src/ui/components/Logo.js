import Link from 'next/link'

export function Logo() {
  return (
    <Link className="navbar-logo-anchor mr-auto" href="/">
      <div className="navbar-logo flex flex-row items-center">
        <div className="navbar-logo-img w-8 h-8 mr-2 border-secondary-200 border-2"></div>

        <p className="font-bold text-lg text-secondary-200">MARKIEWICZ</p>
        <span className="text-xs text-secondary-200">&</span>
        <p className="font-bold text-lg text-secondary-200">CIESIELSKA</p>
        <span className="text-xs text-secondary-200">tm</span>
      </div>
    </Link>
  )
}
