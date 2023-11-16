import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('Button show correct children', async () => {
    const { findByRole } = render(<Button>Button</Button>);

    const element = await findByRole('button');

    expect(element.textContent).toBe('Button');
  });

  it('Button is disabled', async () => {
    render(
      <Button role="button" disabled>
        Disabled
      </Button>,
    );

    const element = await screen.findByRole('button');

    expect(element.hasAttribute('disabled')).toBe(true);
  });
});
