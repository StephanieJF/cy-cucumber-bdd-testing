/// <reference types="cypress" />
import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I type a first name {string} and a last name {string}', (firstName, lastName) => {
  if (firstName) {
    cy.get('input[name="first_name"]').type(firstName);
  }
  if (lastName) {
    cy.get('input[name="last_name"]').type(lastName);
  }
});

When('I type an email address {string} and a comment {string}', (emailAddress, comment) => {
  if (emailAddress) {
    cy.get('input[name="email"]').type(emailAddress);
  }
  if (comment) {
    cy.get('textarea[name="message"]').type(comment);
  }
});

When('I click the submit button', () => {
  cy.get('[type="submit"]').click();
});

Then('I should see messaging {string}', (messaging) => {
  cy.xpath('//h1 | //body') //look in any h1 element OR any body element on the page
    .contains(messaging);
});
