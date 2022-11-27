const locators = require("../fixtures/locators.json");
export function addTalentInHomePage() {
  cy.get(locators.addTalent, { timeout: 30000 }).click();
}
export function chooseCounty(country) {
  //need to put time out between pages
  cy.get(locators.countryDropDown, { timeout: 60000 })
    .click()
    .type(country + " {enter}");
  //this is to scroll down
  cy.get(locators.slider).scrollTo("bottom");

  cy.get(locators.getStarted).click();
}
