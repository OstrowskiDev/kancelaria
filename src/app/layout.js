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
      <body className={inter.className}>
        <nav className={roboto.className + ' navbar flex flex-row items-center h-[80px]'}>
          <div className="navbar-logo flex flex-row items-center ml-4 mr-auto">
            <p className="font-bold text-lg text-red-600">MARKIEWICZ</p>
            <span className="text-xs text-red-600">&</span>
            <p className="font-bold text-lg text-red-600">CIESIELSKA</p>
            <span className="text-xs text-red-600">tm</span>
          </div>
          <div className="navbar-anchors mr-4">
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
