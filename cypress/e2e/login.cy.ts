describe('Login journey', () => {
  beforeEach(() => {
    // GIVEN I am on the home page
    cy.visit('/'); // We start by ensuring we are on the home page
  });

  it('should navigate to the login page when I click the Login link', () => {
    // WHEN I click on the Login link
    cy.get('[data-testid="header-login-link"]').click(); // Find the Login button and click it

    // THEN it should navigate to the Login page
    cy.location().should((location) => {
      expect(location.pathname).to.equal('/login');
    }); // Asserting that the url is correct
    cy.title().should('eq', 'Login'); // Asserting that the page title is correct
  });
});
