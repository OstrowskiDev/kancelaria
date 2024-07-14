import { Roboto, Playfair_Display } from "next/font/google"
import "./globals.css"
import Footer from "@/ui/components/Footer"
import { Navbar } from "@/ui/components/Navbar"

export const metadata = {
  title: "Kancelaria Adwokacka",
  description:
    "Kancelaria Adwokacka Katarzyny Markiewicz i Judyty Ciesielskiej",
}

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfairDisplay",
  display: "swap",
})

export default function RootLayout({ children }) {
  return (
    <>
      <html
        lang="pl"
        className={`${roboto.variable} ${playfairDisplay.variable}`}
      >
        <body className="main-container bg-background-main">
          <Navbar />
          <main className="main-content flex flex-col">
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </>
  )
}
