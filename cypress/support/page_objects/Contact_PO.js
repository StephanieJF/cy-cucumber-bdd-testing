/// <reference types="cypress" />

class Contact_PO {
  elements = {
    firstname_field: () => cy.get('input[name="first_name"]'),
    lastname_field: () => cy.get('input[name="last_name"]'),
    email_field: () => cy.get('input[name="email"]'),
    comments_field: () => cy.get('textarea[name="message"]'),
    submit_button: () => cy.get('[type="submit"]'),
    submission_messaging: () => cy.xpath('//h1 | //body'), //look in any h1 element OR any body element on the page
  };

  navigateToContactPage() {
    cy.visit('/Contact-Us/contactus.html');
  }

  enterFirstName_ifNotBlank(firstName) {
    if (firstName) {
      this.elements.firstname_field().type(firstName);
    }
  }

  enterLasttName_ifNotBlank(lastName) {
    if (lastName) {
      this.elements.lastname_field().type(lastName);
    }
  }

  enterEmail_ifNotBlank(emailAddress) {
    if (emailAddress) {
      this.elements.email_field().type(emailAddress);
    }
  }

  enterComment_ifNotBlank(comment) {
    if (comment) {
      this.elements.comments_field().type(comment);
    }
  }

  clickSubmit() {
    this.elements.submit_button().click();
  }

  validate_SubmissionMessaging(expectedMessage) {
    this.elements.submission_messaging().contains(expectedMessage);
  }
}
export default Contact_PO;
