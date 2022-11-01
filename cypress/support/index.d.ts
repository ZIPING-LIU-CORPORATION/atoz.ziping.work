/// <reference types="cypress" />


declare namespace Cypress {
    export interface Chainable {
        // @param selector 
        // @param value
        clearCookieList(list: string[]): Chainable<Element>
        setErrorMsg(key:string, value:any): Chainable<Element>

        getElementById(parentTag: string, id:string): Chainable<HTMLelement[]>
    }
}

