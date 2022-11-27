const locators = require("../fixtures/locators.json");

export function login(usernam, password) {
  cy.get(locators.mail).type(usernam);
  cy.get(locators.password).type(password);
  cy.get(locators.loginButton).click();
}

export function navigate() {
  cy.visit(locators.url);
}
