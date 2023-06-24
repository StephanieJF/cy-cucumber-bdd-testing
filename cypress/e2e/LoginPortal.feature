Feature: WebdriverUniversity - Login Page

    Scenario Outline: Login form submission

        Given I am on the webdriveruniversity homepage
        When I click the login portal button
        And I type a username '<username>' and a password '<password>'
        And I click the login button
        Then I receive an alert message '<message>'

        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriva  | webdriver123 | validation failed    |
            | webdriver | webdriver126 | validation failed    |
            |           | webdriver126 | validation failed    |
            | webdriver |              | validation failed    |