/// <reference types="cypress" />

const cookiesToEat = [
    'amzn-idp-client-id',
    'JSESSIONID',
    'amzn-idp-pref-country',
    'amzn-idp-passport-anonymous-session',
    'amzn-idp-login-picker',
    's_c27',
    's_cc',
    's_vi',
    's_dslv_s',
    's_invisit'
]

describe('Check Employee Alias Exists In Amazon Employee Systems Again after It was Deleted egregiously on May 5th', ()=> {

    before(()=>{

        cy.intercept('/loader.css', (req)=> {
            const successCode = /(3|2)[0-9]{2}/
            const reqCodeType = successCode.exec(req.headers.statusCode as string);

            expect(reqCodeType && reqCodeType[1] != undefined)


            
        }).as('visitAmazonEmployeeFacebookLogin');
        cy.visit('https://atoz.amazon.work');
        cy.wait('@visitAmazonEmployeeFacebookLogin')


    })
    beforeEach(()=>{

       cy.clearCookieList(cookiesToEat);


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

     cy.get('div > label[id="loginError"]').should('be.visible');
     const errorMsg = cy.$$('div > label[id="loginError"]').text.toString();
     cy.log('Error Message From Resetting @lziping', errorMsg);
     expect(cy.$$('div > label[id="loginError"]').text.toString().includes('incorrect'));

    
    })

});
