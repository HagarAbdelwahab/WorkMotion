/// <reference types = "cypress" />
import { LoginPage } from "../../pages/LoginPage";
import { HomePage } from "../../pages/HomePage";
import { EmploymentAgreementDetails } from "../../pages/EmploymentAgreementDetails";
import { CompensationCalculation } from "../../pages/CompensationCalculation";
import { ContractClauses, ContractClauss } from "../../pages/ContractClauses";
import { EmployeeInvitation } from "../../pages/EmployeeInvitation";
import { ServiceAgreement } from "../../pages/ServiceAgreement";

it("add a new talent", () => {
  const locators = require("../../fixtures/locators.json");
  const userDetails = require("../../fixtures/userDetails.json");

  const loginP = new LoginPage();
  loginP.navigate();
  loginP.login(userDetails.email, userDetails.password);

  const homePage = new HomePage();
  homePage.addTalentInHomePage();
  homePage.chooseCounty(userDetails.country);

  const employmentAgreementDetails = new EmploymentAgreementDetails();
  employmentAgreementDetails.fillInEmployeeDetails();

  const contractClauses = new ContractClauses();
  contractClauses.fillInContractClauses();

  const compensationCalculation = new CompensationCalculation();
  compensationCalculation.calculateCompensation();

  const emp = new EmployeeInvitation();
  emp.inviteEmployee();

  const service = new ServiceAgreement();
  service.finalizeOnBoarding();
  service.validateTalentStatusIsOnBoarding();
});
