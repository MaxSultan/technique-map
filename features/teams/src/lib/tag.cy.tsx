import { Tag } from './tag';

describe('Tag', () => {
  it('should have the correct color', () => {
    const color = 'blue';
    cy.mount(<Tag $color={color}>{color}</Tag>);
    cy.get('div').should('contain.text', color);
  });
});
