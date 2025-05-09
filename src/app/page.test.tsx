import { render, screen } from '@testing-library/react';
import Home from './page';

test('Page d’accueil affiche le titre', () => {
  render(<Home />);
  expect(
    screen.getByText(/Bienvenue sur App Router/i)
  ).toBeInTheDocument();
});
