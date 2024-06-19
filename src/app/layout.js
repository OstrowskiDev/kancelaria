import './globals.css'
import Link from 'next/link'
import { roboto } from './fonts.js'
import { inter } from './fonts.js'

export const metadata = {
  title: 'Kancelaria Adwokacka',
  description: 'Kancelaria Adwokacka Katarzyny Markiewicz i Judyty Ciesielskiej',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body
        className={inter.className + ' main-container max-w-[1500px] mx-auto bg-background-main'}
      >
        <nav
          className={
            roboto.className + ' navbar flex flex-row items-center h-[80px] px-6 bg-primary-700'
          }
        >
          <Link className="navbar-logo-anchor mr-auto" href="/">
            <div className="navbar-logo flex flex-row items-center">
              <div className="navbar-logo-img w-8 h-8 mr-2 border-secondary-200 border-2"></div>

              <p className="font-bold text-lg text-secondary-200">MARKIEWICZ</p>
              <span className="text-xs text-secondary-200">&</span>
              <p className="font-bold text-lg text-secondary-200">CIESIELSKA</p>
              <span className="text-xs text-secondary-200">tm</span>
            </div>
          </Link>
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
        </nav>
        {children}
      </body>
    </html>
  )
}
