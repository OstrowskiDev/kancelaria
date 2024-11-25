describe("Home Page", () => {
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
})
