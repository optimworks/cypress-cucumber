Feature: Launch and Login to demoblaze application

    Log in to demoblaze application

    Scenario: Launch the application
        Given Visit the demoblaze application
        Then Verify the correct application is launched

    @feature
    Scenario: Login to application using feature file test data
        Given Enter the username and password from feature file
        | username     | password   |
        | vikas.voladri | Orbita@11 |
        Then verify correct user is logged in

    @fixture
    Scenario: Login to application from fixture file data
        Given Visit the demoblaze application
        When Enter the username and password from fixture file
        Then verify correct user is logged in