/// <reference types="cypress" />




describe('Check Employee Alias Exists In Amazon Employee Systems Again after It was Deleted egregiously on May 5th', ()=> {
    beforeEach(()=>{
        cy.visit('https://atoz.amazon.work')

        cy.location('pathname', {timeout: 3000}).should('include', 'Unsolicited')
    
  })
    
    it('loads the login page for Amazon Employee Portal Succesfully', ()=>{

        cy.get('form').should('exist');
        cy.get('form[id="loginForm"]').should('be.visible');
        cy.get('form[id="resetPasswordForm"]').should('be.hidden');

        cy.get('input').should('be.visible');
    });

    it('tries to reset @lziping work alias\' password and expects an egregious error', ()=> {
        cy.get('a[id="resetPassword"]').click();

        cy.location('pathname', {timeout: 3000}).should('include', 'reset');
        cy.intercept('GET', '/sso/login', (req)=> {
            const errorCodeEx = /(4|5|3)[0-9]{2}/
            
            const getCodeType = errorCodeEx.exec(req.headers.statusCode as string);

            expect(getCodeType && getCodeType[0] != undefined);
        }).as('submitAliasForReset')
        cy.get('input[id="login"]').should('be.visible').type('lziping{enter}');
        cy.wait('@submitAliasForReset');
    })

});
