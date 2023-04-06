describe('User navigates to the Zen Business website', () => {
  it('Redirects to the landing page', () => {
    cy.visit('https://www.zenbusiness.com')
    cy.url().should('eq', 'https://www.zenbusiness.com/')
  })
})

describe('User navigates to an invalid website', () => {
  it('Displays an error message', () => {
    cy.visit('https://www.invalidwebsite.com', { failOnStatusCode: false })
    cy.contains('This site can’t be reached').should('be.visible')
  })
})
