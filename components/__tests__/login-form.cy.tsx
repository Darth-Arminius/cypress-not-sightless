import React from 'react';
import LoginForm from '../login-form';

describe('<LoginForm />', () => {
  it('should render a username input', () => {
    cy.mount(<LoginForm />);

    const usernameInput = cy.get('[data-testid="login-username-input"]');

    usernameInput.type('username');

    usernameInput.should('have.value', 'username');
  });

  it('should render a password input', () => {
    cy.mount(<LoginForm />);

    const passwordInput = cy.get('[data-testid="login-password-input"]');

    passwordInput.type('password');

    passwordInput.should('have.value', 'password');
  });

  it('should trigger passed onClick', () => {
    const handleClickSpy = cy.spy().as('handleClickSpy');
    cy.mount(<LoginForm handleClick={handleClickSpy} />);

    cy.get('[data-testid="test-cta"]').click();

    cy.get('@handleClickSpy').should('have.been.called');
  });
});
