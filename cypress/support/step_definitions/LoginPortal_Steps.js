/// <reference types="cypress" />
import { Then, When } from '@badeball/cypress-cucumber-preprocessor';

let stub;

When('I type a username {string} and a password {string}', (username, password) => {
  //if the username and password are not blank, type each into their fields
  if (username) {
    cy.get('#text').type(username);
  }
  if (password) {
    cy.get('#password').type(password);
  }
});

When('I click the login button', () => {
  stub = cy.stub();
  cy.on('window:alert', stub);
  cy.get('#login-button').click();
});

Then('I receive an alert message {string}', (alertMessage) => {
  expect(stub).to.have.been.calledWith(alertMessage);
});
