/// <reference types="cypress" />
import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import Contact_PO from '../page_objects/Contact_PO';

const contactPage = new Contact_PO();

When('I type a first name {string} and a last name {string}', (firstName, lastName) => {
  contactPage.enterFirstName_ifNotBlank(firstName);
  contactPage.enterLasttName_ifNotBlank(lastName);
});

When('I type an email address {string} and a comment {string}', (emailAddress, comment) => {
  contactPage.enterEmail_ifNotBlank(emailAddress);
  contactPage.enterComment_ifNotBlank(comment);
});

When('I click the submit button', () => {
  contactPage.clickSubmit();
});

Then('I should see appropriate response messaging {string}', (messaging) => {
  contactPage.validate_SubmissionMessaging(messaging);
});
