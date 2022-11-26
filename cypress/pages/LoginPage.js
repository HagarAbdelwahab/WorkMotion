const locators = require("../fixtures/locators.json");
export class LoginPage {
  login(usernam, password) {
    cy.get(locators.mail).type(usernam);
    cy.get(locators.password).type(password);
    cy.get(locators.loginButton).click();
  }

  navigate() {
    cy.visit(locators.url);
  }
}
