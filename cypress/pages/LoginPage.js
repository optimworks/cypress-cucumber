var pageLocators = require('../pageLocators/LoginPageLocators.js');
var timeout=require('./Timeouts.js');

export function launchSite(url) {
    cy.visit(url);
    cy.wait(timeout.mediumWait);
    cy.get(pageLocators.CategoriesButton).should('be.visible');
}

export function verifyThatUserEmailFieldIsDisplayed() {
    cy.get(pageLocators.UserEmailInputField).should('be.visible')
}

export function loginToApplication(userEmail, password) {
    cy.get(pageLocators.LoginButton).click();
    cy.wait(timeout.shortWait);
    cy.get(pageLocators.UserEmailInputField).type(userEmail);
    cy.get(pageLocators.PasswordInputField).type(password);
    cy.contains(pageLocators.FormLoginButton, pageLocators.FormLoginButtonText).click();
    cy.wait(timeout.mediumWait);
}

export function enterUserEmailAndPassword(userEmail, password) {
    cy.get(pageLocators.UserEmailInputField).type(userEmail);
    cy.get(pageLocators.PasswordInputField).type(password);
}

export function verifyThatLoginButtonIsDisabled() {
    cy.contains(pageLocators.FormLoginButton, pageLocators.FormLoginButtonText).should('be.disabled')
}

