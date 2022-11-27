const locators = require("../fixtures/locators.json");
const userDetails = require("../fixtures/userDetails.json");
export function inviteEmployee() {
  //invite employee
  cy.get(locators.employeeMail).type(
    userDetails.talentemail + Math.floor(Math.random() * 10000) + "@gmail.com"
  );
  //continue
  cy.get(locators.continue).click();
}
