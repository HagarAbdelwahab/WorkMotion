/// <reference types = "cypress" />
import { navigate, login } from "../pages/LoginPage";
import { addTalentInHomePage, chooseCounty } from "../pages/HomePage";
import { fillInEmployeeDetails } from "../pages/EmploymentAgreementDetails";
import { fillInContractClauses } from "../pages/ContractClauses";
import { calculateCompensation } from "../pages/CompensationCalculation";
import { inviteEmployee } from "../pages/EmployeeInvitation";
import {
  finalizeOnBoarding,
  validateTalentStatusIsOnBoarding,
} from "../pages/ServiceAgreement";

it("Add a new talent and assert the the status of him is 'on boarding", () => {
  const locators = require("../fixtures/locators.json");
  const userDetails = require("../fixtures/userDetails.json");

  navigate();
  login(userDetails.email, userDetails.password);

  addTalentInHomePage();
  chooseCounty(userDetails.country);

  fillInEmployeeDetails();

  fillInContractClauses();

  calculateCompensation();

  inviteEmployee();

  finalizeOnBoarding();
  validateTalentStatusIsOnBoarding();
});
