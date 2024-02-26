import { render } from '@testing-library/react';

import { PracticePlans } from './practice-plans';

describe('PracticePlans', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PracticePlans />);
    expect(baseElement).toBeTruthy();
  });
});
