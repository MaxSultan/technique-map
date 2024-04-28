import { render } from '@testing-library/react';

import { SignInPage } from './sign-in';

describe('Auth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignInPage />);
    expect(baseElement).toBeTruthy();
  });
});
