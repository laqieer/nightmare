import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import './matchMedia.mock';
import App from './App';

test('renders home', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const homeElement = await screen.findByText(/home/i);
  expect(homeElement).toBeInTheDocument();
});

test('renders footer', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const textElement = await screen.findByText(/Nightmare 3 ©2022 Created by laqieer/);
  expect(textElement).toBeInTheDocument();
});
