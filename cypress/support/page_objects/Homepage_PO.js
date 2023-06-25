/// <reference types="cypress" />

class Homepage_PO {
  goToHomepage() {
    cy.visit('/'); //baseUrl
  }

  clickContactUsButton() {
    cy.clickOpenInSameTab('#contact-us');
  }
  clickLoginButton() {
    cy.clickOpenInSameTab('#login-portal');
  }
}
export default Homepage_PO;
