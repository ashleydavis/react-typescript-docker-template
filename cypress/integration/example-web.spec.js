const baseUrl = "http://127.0.0.1:3000";

describe('Example web page test', () => {

    it('Can visit page 1', () => {
        
        cy.visit(baseUrl);

        cy.contains('Go to page 1').click();

        cy.url().should('include', '/page1');

    });

});