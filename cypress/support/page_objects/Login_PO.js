/// <reference types="cypress" />

class Login_PO {
  navigateToLoginPage() {
    cy.visit('/Login-Portal/index.html');
  }

  enterUsername_ifNotBlank(username) {
    if (username) {
      cy.get('#text').type(username);
    }
  }

  enterPassword_ifNotBlank(password) {
    if (password) {
      cy.get('#password').type(password);
    }
  }

  clickLoginButton() {
    cy.get('#login-button').click();
  }
}
export default Login_PO;
