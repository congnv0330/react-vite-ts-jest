import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  it('Button show correct children', async () => {
    const { findByRole } = render(<Button>Button</Button>);

    const element = await findByRole('button');

    expect(element.textContent).toBe('Button');
  });

  it('Button is disabled', async () => {
    const { findByRole } = render(
      <Button role="button" disabled>
        Disabled
      </Button>,
    );

    const element = await findByRole('button');

    expect(element.hasAttribute('disabled')).toBe(true);
  });
});
