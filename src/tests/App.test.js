// Sample test file (e.g., App.test.js)
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  render(<App />);
});

test('renders navigation links', () => {
  const { getByRole } = render(<App />);
  const homeLink = getByRole('menuitem', { name: /home/i });
  const aboutLink = getByRole('menuitem', { name: /about/i });

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  // Add assertions for other links
});

test('displays correct initial main text', () => {
  const { getByText } = render(<App />);
  const mainText = getByText(/Little Lemon/i);

  expect(mainText).toBeInTheDocument();
  // Add assertions for other main text elements
});

test('displays at least one food item card', () => {
  const { getByText } = render(<App />);
  const foodItemCard = getByText(/Greek salad/i);

  expect(foodItemCard).toBeInTheDocument();
  // Add assertions for other food items
});

// Add more tests based on your components and functionality

