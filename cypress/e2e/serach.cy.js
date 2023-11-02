/// <reference types="cypress" />
describe('Login functionality ', () => {

	it.only('Check the search functionality', ()=> {
		cy.visit('https://www.daraz.com.bd/')
        cy.get('input[type="search"]').type("mobile").type('{enter}')


})
	it.only(' search', ()=> {
		cy.visit('https://www.daraz.com.bd/')
		cy.get('#q').type('laptop')
        cy.contains('search').click()

  })      