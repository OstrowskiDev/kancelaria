import './globals.css'
import { roboto } from './fonts.js'
import { inter } from './fonts.js'
import { Logo } from '@/ui/components/Logo'
import { Navigation } from '@/ui/components/Navigation'
import Footer from '@/ui/components/Footer'

export const metadata = {
  title: 'Kancelaria Adwokacka',
  description: 'Kancelaria Adwokacka Katarzyny Markiewicz i Judyty Ciesielskiej',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className + ' main-container bg-background-main'}>
        <nav
          className={
            roboto.className +
            ' navbar sticky top-0 left-0 z-10 flex flex-row items-center h-[80px] px-6 bg-primary-700'
          }
        >
          <div className="navbar-content flex flex-row items-center w-full max-w-[1500px] mx-auto">
            <Logo />
            <Navigation />
          </div>
        </nav>
        <main className="main-content flex flex-col">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
