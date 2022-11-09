import { Then } from "cypress-cucumber-preprocessor/steps";
import * as homePage from "../../pages/HomePage"

Then('verify correct user is logged in', () => {
    homePage.verifyThatExpectedUserIsDisplayed();
})