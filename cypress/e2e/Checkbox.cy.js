/// <reference types="cypress" />
describe('category page tests',() => {

	  it('category page',() =>{ 

       
         cy.visit(http://ww25.itera-qa.azurewesbites.net/home/automation?subid1=20231016-0057-30cd-ac2a-ce281774eaf4)
         cy.get('.i_ div si33'). first().click()
         cy.get('.i_ a si21').click()

         cy.get('.checkbox').check().parent().should('have.class', 'checked') 

          cy.('.checkbox').uncheck().parent().should('not.have.class', 'checked')

   })
      it.only('category page',() =>{ 

          cy.visit(https://www.daraz.com.bd)
          cy.get('#q').type('laptop')
          cy.contains('search').click()
          cy.get('[ant-checkbox-input] > .filter-content > . filter-inner > input')
            .should('have.checked' , 'checked')
  

 })     