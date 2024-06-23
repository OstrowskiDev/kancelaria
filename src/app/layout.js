import { Inter, Montserrat, Roboto, Playfair_Display, Lora } from 'next/font/google'
import './globals.css'
import { Logo } from '@/ui/components/Logo'
import { Navigation } from '@/ui/components/Navigation'
import Footer from '@/ui/components/Footer'

export const metadata = {
  title: 'Kancelaria Adwokacka',
  description: 'Kancelaria Adwokacka Katarzyny Markiewicz i Judyty Ciesielskiej',
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-roboto', display: 'swap' })
const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'], variable: '--font-playfairDisplay', display: 'swap' })
const lora = Lora({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-lora', display: 'swap'})
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-montserrat', display: 'swap'})


export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={`${roboto.variable} ${lora.variable} ${playfairDisplay.variable} ${inter.variable} ${montserrat.variable}`}>
      <body className='main-container bg-background-main'>
        <nav
          className='navbar sticky top-0 left-0 z-10 flex flex-row items-center h-[80px] px-6 bg-primary-700'
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
