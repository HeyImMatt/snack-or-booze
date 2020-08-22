import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App Tests', () => {

  it('renders without crashing', () => {
    render(<App/>);
  });

  // Not sure to what extent I'm testing the App. Do I test the state items?
  // Do I test useEffect? How would I do this?

});