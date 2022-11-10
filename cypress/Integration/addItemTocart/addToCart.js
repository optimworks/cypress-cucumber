/// <reference types="Cypress" />
import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";
import * as loginPage from "../../pages/LoginPage";
import * as homePage from "../../pages/HomePage";
import * as nextPage from "../../pages/NextPage";
import * as cartItem from "../../pages/AddItemPage";
import * as checkItem from "../../pages/CartItemPage"

var credentials;

before(() => {
    cy.fixture('testData.json').then(data => {
        credentials = data;
    })
})

Given("Visit the demoblaze application", () => {
    loginPage.launchSite(Cypress.env('URL'));
})

Then("Verify the correct application is launched", () => {
    cy.url().should('include', 'demoblaze');
})

When("Enter the username and password", () => {
    loginPage.loginToApplication(credentials.username, credentials.password);
})

Then('Verify correct user is logged in', () => {
    homePage.verifyThatExpectedUserIsDisplayed();
})

When("User click on Laptops category", () => {
    nextPage.clickOnLaptopsButton();
})

Then("Verify Laptops category is navigated", () => {
    homePage.verifyCategoryIsNavigated();
})

When("User click next button at bottom page corner", () => {
    nextPage.clickOnNextButton();
})

Then("Verify there is no Next button in the navigated page", () => {
    nextPage.verifyNextButtonIsNotVisible();
})

When("User click on first product in Laptops category", () => {
    cartItem.selectItem();
})

Then("Verify the selected product item", () => {
    cartItem.verifyTheItem();
})

When("User click Add to cart", () => {
    cartItem.clickAddToCart();
})

Then("Verify correct product is added to cart", () => {
    checkItem.CheckItemInCart();
})

