Feature: WebdriverUniversity - Contact Us Page

    Scenario Outline: Contact Us Form Submission
        Given I am on the webdriveruniversity homepage
        When I click the contact us button
        And I type a first name '<firstName>' and a last name '<lastName>'
        And I type an email address '<emailAddress>' and a comment '<comment>'
        And I click the submit button
        Then I should see messaging '<messaging>'

        Examples:
            | firstName | lastName | emailAddress          | comment                      | messaging                    |
            | Gingie    | Fischler | gingie@thegooddog.com | I love treats!               | Thank You for your Message!  |
            | Sparky    | Goodson  | sparky@               | Hi Im Sparky a very good dog | Error: Invalid email address |
            | Nina      | Thedog   |                       | Hey I love chew toys         | all fields are required      |
            |           | Goodson  | sparky@               | Hi Im Sparky a very good dog | all fields are required      |
            | Nina      |          | nina@thegooddog.com   | Time for a walk              | all fields are required      |
            | Gingie    | Pups     | gingie@thegooddog.com |                              | all fields are required      |


