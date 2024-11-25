import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Zespol from "../src/app/zespol/page"
import { DataProvider } from "../src/lib/context"

const contentful = {
  team: [
    {
      name: "Katarzyna Markiewicz",
      title: "Adwokat",
      description:
        "Tempor gubergren ipsum invidunt invidunt consetetur ipsum dolor sed aliquyam. Sed et sea est stet sadipscing et takimata elitr, sanctus justo takimata eirmod stet rebum sit sit diam vero.",
    },
    {
      name: "Judyta Ciesielska",
      title: "Adwokat",
      description:
        "Amet lorem takimata kasd accusam voluptua est labore erat, sed sadipscing magna nonumy dolor lorem. Kasd sanctus at et eirmod justo, magna et sed et lorem sit eos ut sanctus est..",
    },
  ],
}

describe("Zespół Page", () => {
  it('should render the header with text "Zespół"', () => {
    render(
      <DataProvider value={{ contentful: contentful }}>
        <Zespol />
      </DataProvider>,
    )
    const headerElement = screen.getByText(/Zespół/i)
    expect(headerElement).toBeInTheDocument()
  })

  it("should correctly iterate and display team members", () => {
    render(
      <DataProvider value={{ contentful: contentful }}>
        <Zespol />
      </DataProvider>,
    )
    const memberKM = screen.getByText(/Katarzyna Markiewicz/i)
    const memberJC = screen.getByText(/Judyta Ciesielska/i)
    expect(memberKM).toBeInTheDocument()
    expect(memberJC).toBeInTheDocument()
  })
})
