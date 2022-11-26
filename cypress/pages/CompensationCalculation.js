const locators = require("../fixtures/locators.json");
const userDetails = require("../fixtures/userDetails.json");
export class CompensationCalculation {
  calculateCompensation() {
    //compensation calc
    cy.get(locators.talentToProvideESOP).click();

    cy.get(locators.grossSalary).type(userDetails.salary);

    //bonus eligibilty
    cy.get(locators.bounsEligibilty).click();

    //bonus calc
    cy.get(locators.bonusAmount).type(userDetails.bonus);

    //bonus freq
    //cy.get(".css-1hwfws3").click();
    cy.get(locators.bounsFrequncy).type("monthly{enter}");

    //continue
    cy.get(locators.continue).click();
  }
}
