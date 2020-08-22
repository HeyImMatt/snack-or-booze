import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
import Menu from './Menu';

describe('Menu Tests', () => {
  const testItem = [
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
        <Menu items={testItem} title='Drinks' />
      </MemoryRouter>
    );
  });

  it("renders the test item", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Menu items={testItem} title='Drinks' />
      </MemoryRouter>
    );;

    expect(getByText('GT Kombucha')).toBeInTheDocument();
  });

  it("renders the add button", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Menu items={testItem} title='Drinks' />
      </MemoryRouter>
    );;
  
    expect(getByText('+ Add Drink')).toBeInTheDocument();
  });

});
