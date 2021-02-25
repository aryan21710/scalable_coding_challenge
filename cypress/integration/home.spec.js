describe('Home Page', () => {
        const homeUrl = 'http://localhost:3001/';
        const headerText='FRONTEND CODING CHALLENGE';
        const footerText='@Scalable-Capital Copyrighted by Aryan Sharma 02/2021. All Rights Reserved';
	beforeEach(() => {
		cy.visit('/');
		cy.viewport('macbook-15');
	});

	it('Validation of Header Component', () => {
		cy.url().should('eq', homeUrl);
		cy.get('h4').contains(headerText);
	});

	it('Validation of Menu Links', () => {
                cy.url().should('eq', homeUrl);
                cy.get('a').should('have.length',3);
                cy.get('a').contains('Home');
                cy.get('a').contains('Table-View');
                cy.get('a').contains('Chart-View');
        });

        it('Validation of Footer Component', () => {
                cy.url().should('eq', homeUrl);
		cy.get('h4').contains(footerText);
	});

});
