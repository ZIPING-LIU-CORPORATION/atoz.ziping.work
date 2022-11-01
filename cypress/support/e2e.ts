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

import {waterfall} from 'async';


Cypress.Commands.add('clearCookieList', (cookieList: string[])=>{
     const leftoverCookies = [];
    for(const cookie of cookieList) {
        if(cy.clearCookie(cookie).getCookie(cookie) != null){
            leftoverCookies.push(cookie);
        }
    }

    for(const leftoverCookie of leftoverCookies) {
        cy.clearCookie(leftoverCookie);
    }
})