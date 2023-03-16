import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('home works as expected', () => {
  render(<App />);
  const title = screen.getByText(/Top Animes Represented by consuming a Gif's API/i);
  expect(title).toBeInTheDocument();
});
