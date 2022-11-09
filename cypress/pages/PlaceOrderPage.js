var PlaceOrderLocators = require('../locators/PlaceOrderLocators.js');


export function clickPlaceOrder() {
    cy.get(PlaceOrderLocators.PlaceOrderButton).click();
}

export function enterTheDetails() {
    cy.get(PlaceOrderLocators.Name).type('wikoxo');
    cy.get(PlaceOrderLocators.Country).type('India');
    cy.get(PlaceOrderLocators.City).type('Hyderabad');
    cy.get(PlaceOrderLocators.CreditCard).type('64fv1dbgbgtr');
    cy.get(PlaceOrderLocators.Month).type('Nov');
    cy.get(PlaceOrderLocators.Year).type("2222");
}

export function clickPurchase() {
    cy.get(PlaceOrderLocators.PurchaseButton).should('contain','Purchase').click({force:true});
}
export function popUpClick() {
    cy.get(PlaceOrderLocators.OkPopUp).should('contain','OK').click({force:true});
}