import { render } from '@testing-library/react';

import { PracticePlans } from './practice-plans';
import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ReactElement } from 'react';

const renderWithRouter = (element: ReactElement<any, any>) =>
  render(<BrowserRouter basename="/technique-map/">{element}</BrowserRouter>);

describe('PracticePlans', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithRouter(<PracticePlans />);
    expect(baseElement).toBeTruthy();
  });
});
