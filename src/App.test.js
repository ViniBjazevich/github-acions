import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  render(<App />);
  const helloWorld = screen.getByText(/Hello world/i);
  expect(helloWorld).toBeInTheDocument();
});
