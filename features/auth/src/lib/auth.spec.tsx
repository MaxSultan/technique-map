import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import { SignInPage } from './sign-in';
import { ReactElement } from 'react';

const renderWithRouter = (element: ReactElement<any, any>) =>
  render(<HashRouter basename="/technique-map/">{element}</HashRouter>);

describe('Auth', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithRouter(<SignInPage />);
    expect(baseElement).toBeTruthy();
  });
});
