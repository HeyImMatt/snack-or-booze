import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';

describe('Menu Tests', () => {
  const testItems = [
    {
      id: 'gt-kombucha',
      name: 'GT Kombucha',
      description: 'Sweet, sour, tart, fizzy goodness',
      recipe: 'Black tea, green tea, assorted fruit juices, and scoby',
      serve: 'Do not shake. Twist cap. Drink straight from bottle.'
    }
  ];

  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
  });

    it('renders numbers for snacks and drinks', () => {
      const { getByText } = render(
        <MemoryRouter>
          <NavBar numSnacks={3} numDrinks={4} />
        </MemoryRouter>
      );

      expect(getByText('Snacks (3)')).toBeInTheDocument();
      expect(getByText('Drinks (4)')).toBeInTheDocument();
  });

});