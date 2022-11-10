Feature: Add laptop product to cart item

    Background: Launch the application
        Given Visit the demoblaze application
        Then Verify the correct application is launched

    Scenario: Login to application
        When Enter the username and password
        Then Verify correct user is logged in

    Scenario: Open Laptops category and click next page
        When User click on Laptops category
        Then Verify Laptops category is navigated
        When User click next button at bottom page corner
        Then Verify there is no Next button in the navigated page

    Scenario: Add one product to cart from Laptops category
        When User click next button at bottom page corner
        Then Verify there is no Next button in the navigated page
        When User click on first product in Laptops category
        Then Verify the selected product item
        When User click Add to cart
        Then Verify correct product is added to cart
