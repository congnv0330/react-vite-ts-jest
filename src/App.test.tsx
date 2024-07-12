import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App', () => {
  it('Has title', async () => {
    const { findByText } = render(<App />);

    const element = await findByText('Vite + React');

    expect(element).not.toBeNull();
  });

  it('Has Button', async () => {
    const { findByRole } = render(<App />);

    const element = await findByRole('button');

    expect(element).not.toBeNull();
  });
});
