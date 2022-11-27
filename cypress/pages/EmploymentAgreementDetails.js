const locators = require("../fixtures/locators.json");
const userDetails = require("../fixtures/userDetails.json");
import "cypress-file-upload";
export function fillInEmployeeDetails() {
  //type in talent first name
  cy.get(locators.firstName, {
    timeout: 60000,
  }).type(userDetails.firstName);
  //type in talent last name
  cy.get(locators.lastName).type(userDetails.lastName);
  //type in eligeibl to work in country
  cy.get(locators.eligibiltyToWorkInThisCountry).click();
  //type in executive
  cy.get(locators.talentLevel).click();
  // job title
  cy.get(locators.talentTitle).type(userDetails.title);
  //job description
  cy.get(locators.talentDescription).type(userDetails.description);

  const p = "QA_Assessment.docx";
  //upload file with attachFile
  cy.get(locators.talentAttachedResume).attachFile(p, {
    subjectType: "drag-n-drop",
  });

  //contract type
  cy.get(locators.contractType).click();

  cy.get(locators.startDate).type(getStartDate()).type("{enter}");

  cy.get(locators.eligibiltyToWorkFromThisCountry).click();

  cy.get(locators.talentAddress).type(userDetails.address);

  cy.get(locators.costCenter).type(userDetails.costCenter);

  cy.get(locators.continue).click();
}

function getStartDate() {
  const date = new Date();
  let startingMonth = date.getMonth() + 1;
  let startingYear = date.getFullYear();
  let startingDay = date.getDate();
  //will assume that the month average is 30
  if (date.getDate() + 14 > 30) {
    if (startingMonth == 12) {
      startingMonth = 1;
      startingYear += 1;
    } else {
      startingMonth += 1;
    }
    startingDay = startingDay + 14 - 30;
  } else {
    startingDay = startingDay + 14;
  }
  return startingDay + "-" + startingMonth + "-" + startingYear;
}
