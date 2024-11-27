describe("Kontakt Page Content", () => {
  beforeEach(() => {
    cy.visit("/kontakt")
  })

  it("should render the header with the correct title", () => {
    cy.get(".header h1")
      .invoke("text")
      .should("match", /kontakt/i)
  })

  it("should render contact data section", () => {
    cy.get(".contact-container").should("exist")
  })

  it("should render google maps", () => {
    cy.get(".google-maps-container").should("exist")
  })

  it("should render contact form", () => {
    cy.get(".contact-form-container").should("exist")
  })

  it("should render reCaptcha", () => {
    cy.get('iframe[title="reCAPTCHA"]').should("exist")
  })

  it("should show form validation errors for empty required fields", () => {
    cy.get(".contact-button").click()
    cy.get(".contact-label-fullName").should("contain.text", "Pole wymagane.")
    cy.get(".contact-label-email").should(
      "contain.text",
      "Pole wymagane. Proszę wprowadzić prawidłowy adres email.",
    )
    cy.get(".contact-label-topic").should(
      "contain.text",
      "Pole wymagane. Temat musi zawierać od 10 do 100 znaków.",
    )
    cy.get(".contact-label-phone").should(
      "contain.text",
      "Pole wymagane. Proszę wprowadzić prawidłowy numer telefonu.",
    )
    cy.get(".contact-label-content").should(
      "contain.text",
      "Pole wymagane. Wiadomość musi zawierać od 100 do 1000 znaków.",
    )
  })
})
