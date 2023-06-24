Feature: WebdriverUniversity - Contact Us Page

    Scenario Outline: Contact Us Form Submission
        Given I am on the webdriveruniversity homepage
        When I click the contact us button
        And I type a first name <firstName> and a last name <lastName>
        And I type an email address '<emailAddress>' and a comment '<comment>'
        And I click the submit button
        Then I should see messaging '<messaging>'

        Examples:
            | firstName | lastName | emailAddress          | comment                      | messaging                    |
            | Gingie    | Fischler | gingie@thegooddog.com | I love treats!               | Thank You for your Message!  |
            | Sparky    | Goodson  | sparky@               | Hi Im Sparky a very good dog | Error: Invalid email address |




# Scenario: Valid Contact Us Form Submission
#     Given I am on the webdriveruniversity homepage
#     When I click the contact us button
#     And I type a first name Gingie
#     And I type a last name Fischler
#     And I type an email address gingie@thegooddog.com
#     And I type a comment "I love treats!"
#     And I click the submit button
#     Then I should see successful submission messaging "Thank You for your Message!"

# Scenario: Invalid Contact Us Form Submission
#     Given I am on the webdriveruniversity homepage
#     When I click the contact us button
#     And I type a first name Gingie
#     And I type a last name Fischler
#     And I type a comment "I love treats!"
#     And I click the submit button
#     Then I should see unsuccessful submission messaging "all fields are required"