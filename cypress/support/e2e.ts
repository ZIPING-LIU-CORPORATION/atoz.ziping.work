/// <reference types="cypress" />

// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

// Alternatively you can use CommonJS syntax:
// require('./commands')



Cypress.Commands.add('clearCookieList', (cookieList: string[]) => {
  const leftoverCookies = [];
  for (const cookie of cookieList) {
    if (cy.clearCookie(cookie).getCookie(cookie) != null) {
      leftoverCookies.push(cookie);
    }
  }

  for (const leftoverCookie of leftoverCookies) {
    cy.clearCookie(leftoverCookie);
  }
})


Cypress.Commands.add('setErrorMsg', (key, value) => {
  // Turn off logging of the cy.window() to command log
  cy.window({ log: false }).then((window) => {
    window.sessionStorage.setItem(key, value)
  })
  cy.task('cypressLogToNodeConsole', {
    key: key,
    value: value instanceof Object ? JSON.stringify(value, null, 2) : value
  });
  Cypress.log({
    name: 'setErrorMsg',
    // shorter name for the Command Log
    displayName: 'Error Msg Displayed After Attempting @lziping Work Accnt Reset',
    message: `${key}, ${value}`,
    consoleProps: () => {
      // return an object which will
      // print to dev tools console on click
      return {
        Key: key,
        Value: value,
        'Session Storage': window.sessionStorage,
      }
    },
  })


})

Cypress.Commands.add('getElementById', (parentTag: string, key: string) => {
  const elems: HTMLElement[] = [];
  cy.$$(parentTag).children().each((ind, el) => {
    if (el.id == key) {
      elems.push(el);
    }
  })
  return cy.wrap(elems);
})