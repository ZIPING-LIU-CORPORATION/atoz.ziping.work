/// <reference types="cypress" />


declare namespace Cypress {
    export interface Chainable {
        // @param selector 
        // @param value
        clearCookieList(list: string[]): Chainable<Element>
    }
}