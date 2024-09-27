import { render } from '@testing-library/react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ToastProvider } from '@technique-map/design-system';
import { ReactElement } from 'react';

import { TeamsIndex } from './teams';

const RenderWithContext = (element: ReactElement<any, any>) =>
  render(<ToastProvider>{element}</ToastProvider>);

describe('Teams', () => {
  it('should render successfully', () => {
    const { baseElement } = RenderWithContext(<TeamsIndex />);
    expect(baseElement).toBeTruthy();
  });
});
