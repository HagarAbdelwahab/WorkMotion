const locators = require("../fixtures/locators.json");
const userDetails = require("../fixtures/userDetails.json");
export function calculateCompensation() {
  cy.log("Talent to provide ESOP");
  cy.get(locators.talentToProvideESOP).click();
  cy.log("Add gross salary for the talent");
  cy.get(locators.grossSalary).type(userDetails.salary);

  cy.log("Enable the bonus for the talent");
  cy.get(locators.bounsEligibilty).click();

  cy.log("Give the talent a bonus of " + userDetails.bonus);
  cy.get(locators.bonusAmount).type(userDetails.bonus);

  cy.log("Give the talent a buns on monthly basis");
  cy.get(locators.bounsFrequncy).type("monthly{enter}");

  cy.log('click "continue" button');
  cy.get(locators.continue).click();
}
