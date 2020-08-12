import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function AddItem( {formData, type, changeHandler, submitHandler} ) {
  return (
    <Form onSubmit={submitHandler} >
      <FormGroup>
        <Label for="item-name">Name:</Label>
        <Input type="text" id="item-name" value="{}" name="{}" onChange={changeHandler} />
      </FormGroup>
      <FormGroup>
        <Label for="item-description">Description:</Label>
        <Input type="text" id="item-description" value="{}" name="{}" onChange={changeHandler} />
      </FormGroup>
      <FormGroup>
        <Label for="item-recipe">Recipe:</Label>
        <Input type="textarea" id="item-recipe" value="{}" name="{}" onChange={changeHandler} />
      </FormGroup>
      <FormGroup>
        <Label for="item-serve">Serve:</Label>
        <Input type="text" id="item-serve" value="{}" name="{}" onChange={changeHandler} />
      </FormGroup>
      <Button type="submit">Add Item</Button>
    </Form>
  )
}

// description: "Tart and delicious."
// id: "arugula-and-walnut-salad"
// name: "Arugula and Walnut Salad"
// recipe: "Mix arugula, toasted walnuts, and thinly-sliced Parmesan cheese. Dress with lemon and olive oil."
// serve: "Place on tiny, precious little plates."