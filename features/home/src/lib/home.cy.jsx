import { Home } from './home';

describe('Home component', () => {
  it('should render', () => {
    cy.mount(<Home />);
  });
});
