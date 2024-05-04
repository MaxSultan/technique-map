import { render } from '@testing-library/react';

import { PracticePlans } from './practice-plans';
import { HashRouter } from 'react-router-dom';
import { ReactElement } from 'react';

const renderWithRouter = (element: ReactElement<any, any>) =>
  render(<HashRouter basename="/technique-map/">{element}</HashRouter>);

describe('PracticePlans', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithRouter(<PracticePlans />);
    expect(baseElement).toBeTruthy();
  });
});
