# Login and Contact Form Testing with Cypress and Cucumber
Automated testing of login and contact forms written in BDD format with Gherkin syntax using [Cypress](https://www.cypress.io/) and [Cucumber](https://cucumber.io/).  

- Application Url: [https://webdriveruniversity.com/](https://webdriveruniversity.com/)

## Test Details

<details>
  <summary>Feature: Contact Us Form</summary>
    <br>

```gherkin
Given I am on the webdriveruniversity homepage
When I click the Contact Us button
And I type a first name and a last name
And I type an email address and a comment
And I click the submit button
Then I should see appropriate response messaging

```
</details>


<details>
  <summary>Feature: Login Portal</summary>
    <br>

```gherkin
Given I am on the webdriveruniversity homepage
When I click the login portal button
And I type a username and a password
And I click the login button
Then I receive an alert message

```
</details>

    