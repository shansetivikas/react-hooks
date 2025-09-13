import { render } from '@testing-library/react';
import App from './App';
import { expect, test } from 'vitest';

test('renders hello text', () => {
  render(<App />);
  expect(1+2).toBe(3)
});
