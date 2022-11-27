const locators = require("../fixtures/locators.json");
const userDetails = require("../fixtures/userDetails.json");
export function fillInContractClauses() {
  //paid time off
  cy.get(locators.timeOff, {
    timeout: 8000,
  })
    .clear()
    .type(userDetails.timeOff);

  //probation period eligibility
  cy.get(locators.probationPeriodCheck).click();

  //probation period
  cy.get(locators.probationPeriod).clear().type(3);

  //termaintion
  cy.get(locators.terminationPeriod).clear().type(3);

  //continue
  cy.get(locators.continue).click();
  cy.screenshot();
}
