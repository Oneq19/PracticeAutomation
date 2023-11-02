/// <reference types="cypress" />
describe('drop down feature', ()=> {
	it.skip('with select tag test', ()=>{


		cy.visit('https://www.orangehrm.com')
		cy.get('.web-menu-btn > .nav > :nth-child(2) > a > .btn').click()
		cy.get('#Form_getForm_Country').click()
		.select('Andorra')
		.should('have.value','Andorra')

		cy.get('#Form_getForm_NoOfEmployees')
		.select('Automotive')
		.should('have.value','Automotive')

	})
	 it('Google Search Test', ()=>{
	 	cy.visit('https://www.google.com/')
	 	cy.get("[name="q"]").type('Automation')
	 	cy.get('.erkvQe')
	 	.find('li spam')
	 	.contains('Automation testing')
	 	.click()




	 })



	 	   
})


