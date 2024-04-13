describe('Process steps spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4212/springboot-angular-app/')
    cy.contains('Process steps').click()
    cy.url().should('include', '/processSteps')
  })

  it('navigate to process steps, create new step and show steps', () => {
    cy.contains('Toon proces stappen').click()
    cy.get('[data-test=submitIsVisible]', { timeout: 60000 }).should('be.visible');

    // Get textarea, type into it
    cy.get('textarea').type('This is the first step to be taken.')
    //  Verify that the content has been updated
    cy.get('textarea').should('have.value', 'This is the first step to be taken.')

    cy.get('select').select('bovenaan')

    cy.contains('Voeg proces stap toe').click();

    cy.wait(2000)
    cy.get('textarea').clear()
    cy.get('textarea').type('This is the seconds step to be taken.')
    cy.get('select').select('Na stap 1')
    cy.contains('Voeg proces stap toe').click();

    cy.wait(2000)
    cy.contains('Toon proces stappen').click()
  })
})