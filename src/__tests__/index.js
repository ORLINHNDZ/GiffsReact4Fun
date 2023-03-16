import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

test('renders without crashing', () => {
  render(<App />);
  const title = screen.getByText(/Top Animes Represented by consuming a Gif's API/i);
  expect(title).toBeInTheDocument();
});


test('search form could be used', async () => {
    render(<App/>)
    const input = await screen.findByRole('textbox')
    const button = await screen.findByRole('button')

    fireEvent.change(input, {target: { value:'Matrix'}})
   
    fireEvent.click(button)

    const title = await screen.findByText('Matrix')
    expect(title).toBeVisible()
})
