/// <reference types="cypress" />
import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I type a first name {word}', (firstName) => {
  cy.get('input[name="first_name"]').type(firstName);
});

When('I type a last name {word}', (lastName) => {
  cy.get('input[name="last_name"]').type(lastName);
});

When('I type an email address {word}', (email) => {
  cy.get('input[name="email"]').type(email);
});

When('I type a comment {string}', (message) => {
  cy.get('textarea[name="message"]').type(message);
});

When('I click the submit button', () => {
  cy.get('[type="submit"]').click();
});

Then('I should see a successful submission message {string}', (message) => {
  cy.get('h1').should('have.text', message);
});
