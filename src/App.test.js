import { render, screen } from '@testing-library/react';
import App from './App';

test('renders source code link', () => {
  render(<App />);
  const linkElement = screen.getByText(/source code/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders app name text', () => {
  render(<App />);
  const textElement = screen.getByText(/nightmare 3/i);
  expect(textElement).toBeInTheDocument();
});
