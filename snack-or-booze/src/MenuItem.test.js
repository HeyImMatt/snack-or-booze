import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
import MenuItem from './MenuItem';

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
      <MemoryRouter
      initialEntries={['/drinks/gt-kombucha']}>
        <MenuItem items={testItems} cantFind='/drinks' />
      </MemoryRouter>
    );
  });

    it('renders the test item', () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={['/drinks/gt-kombucha']}>
          <Route path='/drinks/:id'>
            <MenuItem items={testItems} cantFind='/drinks' />
          </Route>
        </MemoryRouter>
      );
      
      expect(getByText('GT Kombucha')).toBeInTheDocument();
  });

});
