/// <reference types="Cypress" />
import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";
import * as loginPage from "../../pages/LoginPage";
import * as homePage from "../../pages/HomePage";

var credentials;

before(() => {
    cy.fixture('testData.json').then(data => {
        credentials = data;
    })
})

Given("Visit the demoblaze application", () => {
    cy.visit(Cypress.env('URL'));
})

Then("Verify the correct application is launched", () => {
    cy.url().should('include', 'demoblaze');
})

Given("Enter the username and password from feature file", function(datatable) {
    const useremail = datatable.rawTable[1][0];
    const passphrase = datatable.rawTable[1][1];
    loginPage.loginToApplication(useremail, passphrase);
})

Then('verify correct user is logged in', () => {
    homePage.verifyThatExpectedUserIsDisplayed();
})

When("Enter the username and password from fixture file", function() {
    loginPage.loginToApplication(credentials.username, credentials.password);
})