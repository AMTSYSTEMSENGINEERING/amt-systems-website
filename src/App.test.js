import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AMT headline', () => {
  render(<App />);
  const heading = screen.getByRole('heading', {
    name: /ingénierie des systèmes au service de votre entreprise/i,
  });
  expect(heading).toBeInTheDocument();
});
