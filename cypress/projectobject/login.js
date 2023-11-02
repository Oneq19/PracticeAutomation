class Login
{

	setUsername(username)
	{
		cy.get("input[placeholder="Username"]").type(username);
		

	}

	setPassword(password)
	{
		cy.get("input[placeholder="Password"]").type(password);
	}
	clicksubmit()

	{
		cy.get("button[type="submit"]").click();
	}
    verifylogin()
    {
         cy.get(".oxd-topbar-header-title").should('have.text','Dashboard')
         
    }

}

export default Login;