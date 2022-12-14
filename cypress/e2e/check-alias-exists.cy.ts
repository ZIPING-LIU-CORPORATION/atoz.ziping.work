/// <reference types="cypress" />

import { resolve } from "path";


const cookiesToEat = [
  "amzn-idp-client-id",
  "JSESSIONID",
  "amzn-idp-pref-country",
  "amzn-idp-passport-anonymous-session",
  "amzn-idp-login-picker",
  "s_c27",
  "s_cc",
  "s_vi",
  "s_dslv_s",
  "s_invisit",
];

describe("Check Employee Alias Exists In Amazon Employee Systems Again after It was Deleted egregiously on May 5th", () => {
  before(() => {
    cy.clearCookieList(cookiesToEat);

    cy.intercept("/loader.css", (req) => {
      const successCode = /(3|2)[0-9]{2}/;
      const reqCodeType = successCode.exec(req.headers.statusCode as string);

      expect(reqCodeType && reqCodeType[1] != undefined);
    }).as("visitAmazonEmployeeFacebookLogin");

    cy.visit("https://atoz.amazon.work");
    cy.reload();
    cy.wait("@visitAmazonEmployeeFacebookLogin");
  });
  beforeEach(() => {
    cy.clearCookieList(cookiesToEat);

    cy.visit("https://atoz.amazon.work");

    cy.location("pathname", { timeout: 3000 }).should("include", "Unsolicited");
  });

  it("loads the login page for Amazon Employee Portal Succesfully", () => {
    cy.get("form").should("exist");
    cy.get('form[id="loginForm"]').should("be.visible");
    cy.get('form[id="resetPasswordForm"]').should("be.hidden");
    cy.get("input").should("be.visible");
  });

  it("tries to reset @lziping work alias' password and expects an egregious error", () => {
    cy.get('a[id="resetPassword"]').click();

    cy.location("pathname", { timeout: 3000 }).should("include", "reset");

    const typeOptions: Partial<Cypress.TypeOptions> = {
      delay: 100,
    };

    cy.intercept('GET', '/sso/login').as('submitReset');
    cy.get('input[id="login"]').type("lziping{enter}", typeOptions);
    cy.wait('@submitReset');


    cy.getElementById("div", "loginError").then((res) => {
      cy.setErrorMsg("loginError", res[0] ? res[0]["textContent"] : "");

    });
  });
});
