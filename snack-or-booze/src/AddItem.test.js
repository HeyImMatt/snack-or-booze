import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddItem from './AddItem';


describe('AddItem Component Tests', () => {
  const formData = {
    name: '',
    description: '',
    recipe: '',
    serve: ''
  }
  const changeHandlerMock = jest.fn();
  const submitHandlerMock = jest.fn();

  it('renders without crashing', () => {
    const { getByText, getByLabelText } =  render(<AddItem 
      type='drinks' 
      formData={formData} 
      changeHandler={changeHandlerMock} 
      submitHandler={(e) => {
        e.preventDefault();
        submitHandlerMock();
      }} 
    />);
    
    expect(getByText('Add New drink')).toBeInTheDocument();
    expect(getByLabelText('Name:')).toBeInTheDocument();
  });
  
  it('Calls submitHandler on submit', () => {
    const { getByText } =  render(<AddItem 
      type='drinks' 
      formData={formData} 
      changeHandler={changeHandlerMock} 
      submitHandler={(e) => {
        e.preventDefault();
        submitHandlerMock();
      }} 
    />);
    const submitBtn = getByText('Add');
    fireEvent.click(submitBtn);
    expect(submitHandlerMock).toBeCalled();
  });


});