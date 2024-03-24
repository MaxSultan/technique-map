import { getGreeting, getAddButton } from '../support/app.po';

describe('e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should be able to create, read, update, and delete a practice plan', () => {
    getGreeting().contains(/Practice plans/);
    getAddButton().click();
    cy.url().should('include', '/technique-map/create');
    cy.get('input').type('1995-05-22');
    
    cy.get('button').contains('Save Practice Plan').click();
    cy.url().should('include', 'technique-map/practice_plans/');
    cy.get('a').contains('Practice Plans').click();
    cy.url().should('not.include', 'technique-map/practice_plans/');
    cy.url().should('include', 'technique-map/practice_plans');

    cy.get('a').contains('5/22/1995').click();
    cy.get('button').contains('Edit Practice Plan').click();
    cy.get('input').type('1995-05-23');
    cy.get('button').contains('Update Practice Plan').click();
    cy.url().should('include', 'technique-map/practice_plans/');
    cy.get('a').contains('Create').click();
    cy.get('a').contains('Practice Plans').click();
    cy.url().should('not.include', 'technique-map/practice_plans/');
    cy.url().should('include', 'technique-map/practice_plans');

    cy.get('a').contains('5/22/1995').should('not.exist');
    cy.get('a').contains('5/23/1995').siblings('button').contains('Delete Practice Plan').click();
    cy.get('dialog[open]').within(() => {
      cy.get('button').contains(/^Delete$/).click();
    })
    cy.get('a').contains('5/23/1995').should('not.exist')
  });
});
