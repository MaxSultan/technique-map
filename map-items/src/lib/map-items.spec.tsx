import { render } from '@testing-library/react';

import MapItems from './map-items';

describe('MapItems', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MapItems />);
    expect(baseElement).toBeTruthy();
  });
});
