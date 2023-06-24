Feature: WebdriverUniversity - Contact Us Page

    Scenario: Valid Contact Us Form Submission
        Given I am on the webdriveruniversity homepage
        When I click the contact us button
        And I type a first name Gingie
        And I type a last name Fischler
        And I type an email address gingie@thegooddog.com
        And I type a comment "I love treats!"
        And I click the submit button
        Then I should see a successful submission message "Thank You for your Message!"