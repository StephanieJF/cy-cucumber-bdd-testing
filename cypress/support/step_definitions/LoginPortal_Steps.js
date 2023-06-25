/// <reference types="cypress" />
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import Login_PO from '../page_objects/Login_PO';

const loginPage = new Login_PO();
let stub;

Given('I am on the webdriveruniversity login page', () => {
  loginPage.navigateToLoginPage();
});

When('I type a username {string} and a password {string}', (username, password) => {
  //if the username and password are not blank, type each into their fields
  loginPage.enterUsername_ifNotBlank(username);
  loginPage.enterPassword_ifNotBlank(password);
});

When('I click the login button', () => {
  stub = cy.stub();
  cy.on('window:alert', stub);
  loginPage.clickLoginButton();
});

Then('I receive an alert message {string}', (alertMessage) => {
  expect(stub).to.have.been.calledWith(alertMessage);
});
