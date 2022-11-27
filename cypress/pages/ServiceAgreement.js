const locators = require("../fixtures/locators.json");
const userDetails = require("../fixtures/userDetails.json");
export function finalizeOnBoarding() {
  //service agreement
  cy.get(locators.slider, { timeout: 4000 }).scrollTo("bottom");
  cy.get(locators.inputConfirmation).click({ force: true });

  //finish
  cy.get(locators.finishOnboarding).click();

  //go to dashboard
  cy.get(locators.returnToDashboard, { timeout: 60000 }).click();
}

export function validateTalentStatusIsOnBoarding() {
  cy.get(locators.menuIcon, { timeout: 15000 }).click();
  cy.get(locators.talentIcon, { timeout: 60000 }).click();
  cy.get(locators.closeMenuIcon).click();
  cy.get(locators.searchFilter).type(userDetails.firstName + "{enter}");
  cy.get(
    ":nth-child(1) > :nth-child(5) > [data-cy=talents-status-cell]"
  ).should("have.text", userDetails.talentStatus);
  cy.screenshot();
}
