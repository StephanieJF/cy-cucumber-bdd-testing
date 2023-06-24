/// <reference types="cypress" />
import { Given, When } from '@badeball/cypress-cucumber-preprocessor';

Given(`I am on the webdriveruniversity homepage`, () => {
  cy.visit('');
});

When('I click the contact us button', () => {
  cy.get('#contact-us')
    .invoke('removeAttr', 'target') //remove target attribute so page opens in same window
    .click();
});
