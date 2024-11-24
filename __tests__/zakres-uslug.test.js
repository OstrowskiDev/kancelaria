import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import ZakresUslug from "../src/app/zakres-uslug/page"
import { DataProvider } from "../src/lib/context"

const contentful = {
  services: [
    {
      title: "Tutuł usługi no1",
      description:
        "Tempor gubergren ipsum invidunt invidunt consetetur ipsum dolor sed aliquyam. Sed et sea est stet sadipscing et takimata elitr, sanctus justo takimata eirmod stet rebum sit sit diam vero. Sanctus erat lorem clita invidunt clita gubergren clita, takimata voluptua ipsum labore vero dolores rebum erat gubergren. Sit magna diam erat vero nonumy sea, eirmod aliquyam eirmod sit dolore sanctus voluptua no. Et ipsum sanctus gubergren ipsum ipsum. Lorem labore nonumy diam dolore. Lorem sea ea sanctus takimata vero, justo takimata.",
    },
    {
      title: "Tutuł usługi no2",
      description:
        "Amet lorem takimata kasd accusam voluptua est labore erat, sed sadipscing magna nonumy dolor lorem. Kasd sanctus at et eirmod justo, magna et sed et lorem sit eos ut sanctus est. Est clita est duo dolore rebum, takimata amet labore accusam aliquyam aliquyam erat eos, dolore accusam sadipscing clita eos sanctus diam, kasd dolor vero est dolor lorem sit ea.",
    },
  ],
}

describe("ZakresUslug Page", () => {
  it('should render the header with text "Zakres usług"', () => {
    render(
      <DataProvider value={{ contentful: contentful }}>
        <ZakresUslug />
      </DataProvider>,
    )
    const headerElement = screen.getByText(/Zakres usług/i)
    expect(headerElement).toBeInTheDocument()
  })

  it("should correctly iterate and display the first two services", () => {
    render(
      <DataProvider value={{ contentful: contentful }}>
        <ZakresUslug />
      </DataProvider>,
    )
    const firstService = screen.getByText(/Tutuł usługi no1/i)
    const secondService = screen.getByText(/Tutuł usługi no2/i)
    expect(firstService).toBeInTheDocument()
    expect(secondService).toBeInTheDocument()
  })
})
