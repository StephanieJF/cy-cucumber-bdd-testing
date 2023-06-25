/// <reference types="cypress" />
import { Given, When } from '@badeball/cypress-cucumber-preprocessor';
import Homepage_PO from '../page_objects/Homepage_PO';

const homePage = new Homepage_PO(); //get homepage page object

Given(`I am on the webdriveruniversity homepage`, () => {
  homePage.goToHomepage();
});

When('I click the contact us button', () => {
  homePage.clickContactUsButton();
});

When('I click the login portal button', () => {
  homePage.clickLoginButton();
});
