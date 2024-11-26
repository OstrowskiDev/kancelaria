import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Home from "../src/app/page"
import { DataProvider } from "../src/lib/context"

const contentful = {
  home: {
    introduction: {
      title: "Zapraszamy do współpracy",
      content:
        "Et diam amet consetetur kasd clita sea. Ipsum lorem rebum lorem ipsum eirmod sit. Et clita dolor magna elitr kasd ipsum sit no, accusam labore labore clita tempor, takimata takimata erat eos est eirmod ipsum diam, sit clita tempor erat sed et invidunt. ",
    },
    services: {
      title: "Zakres usług",
      servicesList: [
        {
          title: "Prawo cywilne",
          description:
            "Prawo cywilne to jedna z najbardziej rozległych dziedzin prawa. Obejmuje ono wszystkie relacje prawne między osobami fizycznymi i prawnymi: spadki, odszkodowania, rozwody, alimenty itp.",
        },
        {
          title: "Prawo karne",
          description:
            "Reguluje kwestie związane z przestępstwami. W ramach prawa karnego regulowane są m.in. kwestie związane z oskarżeniami, aresztowaniami, przesłuchaniami, proces.",
        },
        {
          title: "Prawo rodzinne",
          description:
            "Reguluje kwestie związane z relacjami rodzinnymi. W ramach prawa rodzinnego regulowane są m.in. kwestie związane z rozwodami, separacjami, alimentami, opieką nad dziećmi, itp.",
        },
      ],
    },
    team: {
      title: "Zespół",
      content:
        "Et diam amet consetetur kasd clita sea. Ipsum lorem rebum lorem ipsum eirmod sit. Et clita dolor magna elitr kasd ipsum sit no, accusam labore labore clita",
    },
  },
}

describe("ZakresUslug Page", () => {
  it('should render introduction title with text "Zapraszamy do współpracy"', () => {
    render(
      <DataProvider value={{ contentful: contentful }}>
        <Home />
      </DataProvider>,
    )
    const introductionTitle = screen.getByText(/Zapraszamy do współpracy/i)
    expect(introductionTitle).toBeInTheDocument()
  })

  it('should render services title with text "Zakres usług"', () => {
    render(
      <DataProvider value={{ contentful: contentful }}>
        <Home />
      </DataProvider>,
    )
    const introductionTitle = screen.getByText(/Zakres usług/i)
    expect(introductionTitle).toBeInTheDocument()
  })

  it("should correctly iterate and display first three services", () => {
    render(
      <DataProvider value={{ contentful: contentful }}>
        <Home />
      </DataProvider>,
    )
    const prawoCywilne = screen.getAllByText(/Prawo cywilne/i)
    const prawoKarne = screen.getAllByText(/Prawo karne/i)
    const prawoRodzinne = screen.getAllByText(/Prawo rodzinne/i)
    expect(prawoCywilne.length).toBeGreaterThan(0)
    expect(prawoKarne.length).toBeGreaterThan(0)
    expect(prawoRodzinne.length).toBeGreaterThan(0)
  })
})
