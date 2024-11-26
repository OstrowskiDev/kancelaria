describe("Zespół Page Content", () => {
  beforeEach(() => {
    cy.visit("/zespol")
  })

  it("should render the header with the correct title", () => {
    cy.get(".header h1")
      .invoke("text")
      .should("match", /zespół/i)
  })

  it("should render member descriptions section", () => {
    cy.get(".team-container").should("exist")
  })

  it("should render description of adwokat Judyta Ciesielska", () => {
    cy.get(".team-member-name")
      .first()
      .should("contain.text", "Judyta Ciesielska")
  })

  it("should render description of adwokat Katarzyna Markiewicz", () => {
    cy.get(".team-member-name")
      .last()
      .should("contain.text", "Katarzyna Markiewicz")
  })
})
