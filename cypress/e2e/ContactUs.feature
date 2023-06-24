Feature: WebdriverUniversity - Contact Us Form

    Scenario Outline: Contact Us Form Submission
        Given I am on the webdriveruniversity homepage
        When I click the contact us button
        And I type a first name '<firstName>' and a last name '<lastName>'
        And I type an email address '<emailAddress>' and a comment '<comment>'
        And I click the submit button
        Then I should see appropriate response messaging '<messaging>'

        Examples:
            | firstName | lastName | emailAddress          | comment                      | messaging                    |
            | Gingie    | Fischler | gingie@thegooddog.com | I love treats!               | Thank You for your Message!  |
            | Sparky    | Goodson  | sparky@               | Hi Im Sparky a very good dog | Error: Invalid email address |
            | Nina      | Thedog   |                       | Hey I love chew toys         | all fields are required      |
            |           | Goodson  | sparky@thegooddog.com | Lets play                    | all fields are required      |
            | Cashew    |          | cashew@thegoodcat.com | Time for a nap               | all fields are required      |
            | Stan      | Thecat   | stan@thegoodcat.com   |                              | all fields are required      |


