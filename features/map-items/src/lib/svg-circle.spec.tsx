import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { SVGCircle } from './svg-circle';

describe('SVGCircle', () => {
  const mockCallback = vi.fn();

  it('should fire onClick when clicked', async () => {
    const user = userEvent.setup();

    render(
      <svg
        height="500"
        width="500"
      >
        <SVGCircle
          x="50%"
          y={50}
          r={40}
          text="test circle"
          onClick={mockCallback}
        />
      </svg>
    );

    const text = screen.getByText('test circle');
    await user.click(text);

    expect(mockCallback.mock.calls).toHaveLength(1);
  });
});
