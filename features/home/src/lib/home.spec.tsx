import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { ReactElement } from 'react';

import Home from './home';

const renderWithRouter = (element: ReactElement<any, any>) =>
  render(<HashRouter basename="/technique-map/">{element}</HashRouter>);

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithRouter(<Home />);
    expect(baseElement).toBeTruthy();
  });
});
