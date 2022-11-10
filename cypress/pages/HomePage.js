var pageLocators = require('../pageLocators/HomePageLocators.js');

export function verifyThatExpectedUserIsDisplayed(){
    cy.get(pageLocators.UserWelcomeMessage).should('contain', 'Welcome vikas.voladri');
}

export function verifyCategoryIsNavigated() {
    cy.url().should("contain", "#");
}