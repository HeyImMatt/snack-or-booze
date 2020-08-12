import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default function AddItem( {type, formData, changeHandler, submitHandler} ) {
  const { name, description, recipe, serve } = formData;
  return (
    <Form onSubmit={(e) => submitHandler(e, type)} >
      <FormGroup>
        <Label for="item-name">Name:</Label>
        <Input type="text" id="item-name" value={name} name="name" onChange={changeHandler} />
      </FormGroup>
      <FormGroup>
        <Label for="item-description">Description:</Label>
        <Input type="text" id="item-description" value={description} name="description" onChange={changeHandler} />
      </FormGroup>
      <FormGroup>
        <Label for="item-recipe">Recipe:</Label>
        <Input type="textarea" id="item-recipe" value={recipe} name="recipe" onChange={changeHandler} />
      </FormGroup>
      <FormGroup>
        <Label for="item-serve">Serve:</Label>
        <Input type="text" id="item-serve" value={serve} name="serve" onChange={changeHandler} />
      </FormGroup>
      <Button type="submit">Add</Button>
    </Form>
  )
}

// description: "Tart and delicious."
// id: "arugula-and-walnut-salad"
// name: "Arugula and Walnut Salad"
// recipe: "Mix arugula, toasted walnuts, and thinly-sliced Parmesan cheese. Dress with lemon and olive oil."
// serve: "Place on tiny, precious little plates."