/// <reference types="cypress" />
import Login from "cypress/peojectobject/login.js";

describe('pom', () => {
	it ('LoginTest',() => {
        
        cy.visit("https://opensource-demo.orangehrmlive.com/")
	    cy.get("input[placeholder='Username]").type("Admin")
	    cy.get("input[placeholder='Password']").type("admin123")
	    cy.get("button[type='submit']").click()
        cy.get(".oxd-topbar-header-title").should('have.text', 'Dashboard')


})
   it.only ('LoginTest',() => {
        
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        const ln=new Login();
        ln.setUsername("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit();
        ln.verifyLogin();
    })
   
   })     