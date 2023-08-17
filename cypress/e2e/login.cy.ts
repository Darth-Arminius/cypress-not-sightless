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

  it('should log me into the app successfully when completing the login journey', () => {
    // WHEN I click on the Login link
    cy.get('[data-testid="header-login-link"]').click();
    cy.wait(1000); // These waits are purely for visual purposes

    // AND I input "username" in the username input box
    cy.get('[data-testid="login-username-input"]').type('username');
    cy.wait(1000);

    // AND I input "password" in the password input box
    cy.get('[data-testid="login-password-input"]').type('password');
    cy.wait(1000);

    // AND I click the Login button
    cy.get('[data-testid="login-cta"]').click();
    cy.wait(1000);

    // THEN it should navigate to the Home page
    cy.location().should((location) => {
      expect(location.pathname).to.equal('/');
    });
    cy.title().should('eq', 'Home');
  });
});
