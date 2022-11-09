var pageLocators = require('../pageLocators/AddToCartLocators.js');
var timeout=require('./Timeouts.js');


export function selectItem() {
    cy.get(pageLocators.AppleMonitorLink).contains('Apple monitor 24').click();
}

export function verifyTheItem() {
    cy.get(pageLocators.TextAppleMonitor).should('contain','Apple monitor 24');
    cy.get(pageLocators.PriceValue).should('contain','$400');
}

export function clickAddToCart() {
    cy.get(pageLocators.CartButton).click();
    cy.wait(timeout.shortWait);
}

export function selectTheItem() {
    cy.get(pageLocators.AppleMonitorLink).contains('Apple monitor 24').click();
    cy.wait(timeout.shortWait);
}