/// <reference types="cypress" />
import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I type a first name {word} and a last name {word}', (firstName, lastName) => {
  cy.get('input[name="first_name"]').type(firstName);
  cy.get('input[name="last_name"]').type(lastName);
});

When('I type an email address {string} and a comment {string}', (emailAddress, comment) => {
  cy.get('input[name="email"]').type(emailAddress);
  cy.get('textarea[name="message"]').type(comment);
});

When('I click the submit button', () => {
  cy.get('[type="submit"]').click();
});

Then('I should see messaging {string}', (messaging) => {
  cy.xpath('//h1 | //body') //look in any h1 element OR any body element on the page
    .contains(messaging);
});

// When('I type a first name {word}', (firstName) => {
//   cy.get('input[name="first_name"]').type(firstName);
// });

// When('I type a last name {word}', (lastName) => {
//   cy.get('input[name="last_name"]').type(lastName);
// });

// When('I type an email address {word}', (email) => {
//   cy.get('input[name="email"]').type(email);
// });

// When('I type a comment {string}', (message) => {
//   cy.get('textarea[name="message"]').type(message);
// });

// Then('I should see successful submission messaging {string}', (message) => {
//   cy.get('h1').should('have.text', message);
// });

// Then('I should see unsuccessful submission messaging {string}', (message) => {
//   cy.get('body').contains(message);
// });
