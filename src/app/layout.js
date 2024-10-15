import { Roboto, Playfair_Display } from "next/font/google"
import "./globals.css"
import Footer from "@/ui/components/Footer"
import { Navbar } from "@/ui/components/Navbar"
import { fetchContentfulData } from "@/lib/contentful/graphqlSdk"
import { MainContent } from "@/ui/components/MainContent"

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

export default async function RootLayout({ children }) {
  const fetchedData = await fetchContentfulData()
  const contentful = {
    home: {
      introduction: { ...fetchedData.homeIntroductionCollection.items[0] },
      services: {
        title: fetchedData.homeServicesListCollection.items[0].title,
        servicesList:
          fetchedData.homeServicesListCollection.items[0].servicesCollection
            .items,
      },
      team: { ...fetchedData.homeTeamCollection.items[0] },
    },
    team: fetchedData.membersListCollection.items[0].membersCollection.items,
    services: {},
    articles: {},
    rodo: {},
  }

  return (
    <>
      <html
        lang="pl"
        className={`${roboto.variable} ${playfairDisplay.variable}`}
      >
        <body className="main-container bg-background-main">
          <Navbar />
          <MainContent contentful={contentful} children={children} />
          <Footer />
        </body>
      </html>
    </>
  )
}
