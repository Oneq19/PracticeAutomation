describe('Login functionality ', () => {
  beforeEach(() => {
      // Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

      cy.viewport(1280,720)
      cy.visit('https://www.daraz.com.bd/')
      
  })
  xit('Check the search functionality', ()=> {
      
      cy.get('input[type="search"]').type("mobile").type('{enter}')

  })
  it('Sign in with invalid email input and valid password input', ()=> {
      
      cy.get('#anonLogin > .grey').click()
      cy.get('input[type="text"]').type('demo@gmail.com')
      cy.get('input[type="password"]').type('knightfury')
      cy.get('button[type="submit"]').click()
  
      cy.contains('Incorrect username or password').should('exist')

  })
  it('Sign in with invalid email but invalid password input', ()=> {
      
    cy.get('#anonLogin > .grey').click()
    cy.get('input[type="text"]').type('fatema@gmail.com')
    cy.get('input[type="password"]').type('knightfury12213')
    cy.get('button[type="submit"]').click()

    cy.contains('Incorrect username or password').should('exist')

  })
})