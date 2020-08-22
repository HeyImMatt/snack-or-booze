import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';

describe('Menu Tests', () => {
  
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