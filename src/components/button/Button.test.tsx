import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('Button show correct children', () => {
    render(<Button>Button</Button>);

    expect(screen.getByText(/Button/)).toBeInTheDocument();
  });

  it('Button is disabled', async () => {
    render(
      <Button role="button" disabled>
        Disabled
      </Button>,
    );

    const element = await screen.findByRole('button');

    expect(element).toBeDisabled();
  });
});
