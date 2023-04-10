describe('Sick Tricks', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    .intercept("GET", "http://localhost:3001/api/v1/tricks", {
      statusCode: 200,
      fixture: 'trick'
    })
  })

  it('Should contain a trick card', () => {
    cy.get('.trick-card').contains('regular treflip')
    .get('.trick-card').should('have.length', 1)
  })

  it('Should be able to update the form', () => {
    cy.get('select[name="stance"]').select('Regular').contains('Regular')
    .get('input[title="trick"]').type('kickflip').should('have.value', 'kickflip')
    .get('select[name="obstacle"]').select('Flatground').contains('Flatground')
    .get('input[title="link"]').type('example.com').should('have.value', 'example.com')
  })

  it('Should be able to submit a new trick', () => {
    cy.get('select[name="stance"]').select('Regular')
    .get('input[title="trick"]').type('kickflip')
    .get('select[name="obstacle"]').select('Flatground')
    .get('input[title="link"]').type('example.com')
    .get('button').click()
    .get('.trick-card').should('have.length', 2)
    .last().contains('regular kickflip')
  })
})