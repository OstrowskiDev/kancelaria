import './globals.css'
import { roboto } from './fonts.js'
import { inter } from './fonts.js'
import { Logo } from '@/ui/components/Logo'
import { Navigation } from '@/ui/components/Navigation'
import Link from 'next/link'

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
            roboto.className +
            ' navbar sticky top-0 left-0  flex flex-row items-center h-[80px] px-6 bg-primary-700'
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
          <Navigation />
        </nav>
        {children}
      </body>
    </html>
  )
}
