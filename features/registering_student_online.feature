Feature: Registering Student Online
  Register student on registration page

  Scenario: Already registered student ID
    Given I am in student registration page
    When I enter registered student ID
    And click Register Button
    Then I should see message "This student is already registered!"