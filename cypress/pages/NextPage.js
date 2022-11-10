var pageLocators = require('../pageLocators/NextPageLocators.js');
var timeout = require('./Timeouts.js');


export function clickOnLaptopsButton() {
    cy.get(pageLocators.ClickOnLaptops).should('have.attr', 'href', '#').contains('Laptops').click();
    cy.wait(timeout.shortWait);
}

export function clickOnNextButton() {
    cy.get(pageLocators.FormNextButton).click();
    cy.wait(timeout.shortWait);
}

export function verifyNextButtonIsNotVisible() {
    cy.get(pageLocators.FormNextButton).should("not.be.visible");
}