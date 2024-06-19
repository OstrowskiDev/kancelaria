import Link from 'next/link'

export function Navigation() {
  return (
    <div className="navbar-anchors">
      <Link className="navbar-anchor" href="/kancelaria">
        KANCELARIA
      </Link>
      <Link className="navbar-anchor" href="/zespol">
        ZESPÓŁ
      </Link>
      <Link className="navbar-anchor" href="/zakres-uslug">
        ZAKRES USŁUG
      </Link>
      <Link className="navbar-anchor" href="/publikacje">
        PUBLIKACJE
      </Link>
      <Link className="navbar-anchor" href="/kontakt">
        KONTAKT
      </Link>
    </div>
  )
}
