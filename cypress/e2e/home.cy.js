describe("Home Page Content", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should render the header with the correct title", () => {
    cy.get(".home-main-container .header-label-main").should(
      "contain.text",
      "kancelarie adwokackie",
    )
  })

  it("should render the introduction section", () => {
    cy.get(".home-main-container .introduction-container").should("exist")
  })

  it("should render the services section", () => {
    cy.get(".home-main-container .services-container").should("exist")
  })

  it("should render the team section", () => {
    cy.get(".home-main-container .team-container").should("exist")
  })
})

describe("Home Page Navigation", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should navigate to the zespol page when the zespol link is clicked", () => {
    cy.get('a[href="/zespol"].navbar-anchor').click()
    cy.url().should("include", "/zespol")
  })

  it("should navigate to the zakres-uslug page when the zakres-uslug link is clicked", () => {
    cy.get('a[href="/zakres-uslug"].navbar-anchor').click()
    cy.url().should("include", "/zakres-uslug")
  })

  it("should navigate to the publikacje page when the publikacje link is clicked", () => {
    cy.get('a[href="/publikacje"].navbar-anchor').click()
    cy.url().should("include", "/publikacje")
  })

  it("should navigate to the kontakt page when the kontakt link is clicked", () => {
    cy.get('a[href="/kontakt"].navbar-anchor').click()
    cy.url().should("include", "/kontakt")
  })
})
