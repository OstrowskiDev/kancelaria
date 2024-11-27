describe("Zakres Usług Content", () => {
  beforeEach(() => {
    cy.visit("/zakres-uslug")
  })

  it("should render the header with the correct title", () => {
    cy.get(".header h1")
      .invoke("text")
      .should("match", /zakres usług/i)
  })

  it("should render services list section", () => {
    cy.get(".services-list").should("exist")
  })

  it("should render title of services", () => {
    cy.get(".service-title").first().should("exist")
  })

  it("should render description of services", () => {
    cy.get(".service-description").first().should("exist")
  })

  it("should navigate to kontakt page after clicking 'zapraszamy do kontaktu'", () => {
    cy.get(".contact-us").first().click()
    cy.url().should("include", "/kontakt")
  })
})
