import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class AdminProduct extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="category">Category</Label>
          <Input
            name="category"
            id="category"
            placeholder="A valid category name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="product">Product</Label>
          <Input
            name="product"
            id="product"
            placeholder="A valid product name"
          />
        </FormGroup>
        <FormGroup>
        <Label for="stock">Stock</Label>
        <Input
          type="number"
          name="stock"
          id="stock"
        />
      </FormGroup>
      <FormGroup>
        <Label for="price">Price</Label>
        <Input
          type="number"
          name="price"
          id="price"
        />
      </FormGroup>
        <FormGroup>
          <Label for="exampleText">Description</Label>
          <Input type="textarea" name="description" id="description" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
        </FormGroup>
        <Button>Add Product</Button>
      </Form>
    );
  }
}
