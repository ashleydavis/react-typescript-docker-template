//
// Example of REST API testing using Cypress from this blog post:
//
// https://www.abygeorgea.com/blog/2018/05/27/running-api-test-using-cypress/
//

const baseUrl = "http://127.0.0.1:3000";

describe('Example REST API test', () => {

    it('Can hit REST API', () => {

        cy.request(baseUrl + "/example-rest-api")
            .its('status')
            .should('equal',200);

        cy.request(baseUrl + "/example-rest-api")
            .its('headers')
            .its('content-type')
            .should('include', 'application/json');

        cy.request(baseUrl + "/example-rest-api")
            .its('body')
            .should("be", { hello: "computer" });
    });

});