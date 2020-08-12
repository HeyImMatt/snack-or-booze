import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import AddItem from './AddItem';

describe('AddItem Component Tests', () => {
  const formData = {
    name: '',
    description: '',
    recipe: '',
    serve: ''
  }

  const changeHandler = jest.fn();
  const submitHandler = jest.fn();

  it('renders without crashing', () => {
    render(<AddItem 
      type='drinks' 
      formData={formData} 
      changeHandler={changeHandler} 
      submitHandler={submitHandler} 
    />);
  });
})