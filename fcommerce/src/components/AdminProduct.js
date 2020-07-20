import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as categoryActions from "../redux/actions/categoryActions";
import * as productActions from "../redux/actions/productActions";
import * as adminActions from "../redux/actions/adminActions";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import classnames from "classnames";

class AdminProduct extends Component {
  handleAdd(event) {
    event.preventDefault();

    const categoryName = event.target.selectCategory.value;
    const productName = event.target.product.value;
    let inStock = event.target.stock.value;
    let price = event.target.price.value;
    const description = event.target.description.value;
    const photos = event.target.photos.files;

    if (price === "") price = 0;
    if (inStock === "") inStock = 0;

    this.props.actions.addProduct(
      productName,
      categoryName,
      inStock,
      price,
      photos,
      description
    );
  }

  handleUpdate(event) {
    event.preventDefault();

    if (this.state.submitted === "update") {
      const categoryName = event.target.selectCategory.value;
      const productName = event.target.product.value;
      let inStock = event.target.stock.value;
      let price = event.target.price.value;
      const description = event.target.description.value;
      const photos = event.target.photos.files;

      if (price === "") price = 0;
      if (inStock === "") inStock = 0;

      this.props.actions.updateProduct(
        this.state.productId,
        productName,
        categoryName,
        inStock,
        price,
        photos,
        description
      );
    } else if (this.state.submitted === "delete") {
      this.props.actions.removeProduct(this.state.productId);
    }
  }

  state = {
    activeTab: "1",
    currentCategory: "",
    productId: "",
    stock: 0,
    price: 0,
    description: "",
    submitted: "",
  };

  toggle = (tab) => {
    if (this.state.activeTab !== tab)
      this.setState({
        activeTab: tab,
      });
  };

  componentDidMount() {
    this.props.actions.getCategories();
  }

  changeCategory(event) {
    this.setState({ currentCategory: event.target.value });

    const categoryId = event.target.options[
      event.target.options.selectedIndex
    ].getAttribute("get_key");
    this.props.actions.getProducts(categoryId);
  }

  changeProduct(event) {
    const productIdx = event.target.options.selectedIndex;

    this.setState({
      productId: event.target.options[productIdx].getAttribute("get_key"),
      stock: event.target.options[productIdx].getAttribute("stock"),
      price: event.target.options[productIdx].getAttribute("price"),
      description: event.target.options[productIdx].getAttribute("desc"),
    });
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Add Product
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Update/Delete Product
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Form onSubmit={(event) => this.handleAdd(event)} className="mt-3">
              <FormGroup>
                <Label for="category">Category</Label>
                <Input
                  type="select"
                  name="selectCategory"
                  id="selectCategory"
                  onChange={(event) =>
                    this.setState({ currentCategory: event.target.value })
                  }
                  value={this.state.currentCategory}
                >
                  <option>Select category</option>
                  {this.props.categories.map((category) => (
                    <option key={category._id}>{category.name}</option>
                  ))}
                </Input>
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
                <Input type="number" name="stock" id="stock" />
              </FormGroup>
              <FormGroup>
                <Label for="price">Price</Label>
                <Input type="number" name="price" id="price" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input type="textarea" name="description" id="description" />
              </FormGroup>
              <FormGroup>
                <Label for="photos">File</Label>
                <Input
                  type="file"
                  name="photos"
                  id="photos"
                  multiple="multiple"
                  accept="image/*"
                />
              </FormGroup>
              <Button>Add Product</Button>
            </Form>
          </TabPane>
          <TabPane tabId="2">
            <Form
              onSubmit={(event) => this.handleUpdate(event)}
              className="mt-3"
            >
              <FormGroup>
                <Label for="category">Category</Label>
                <Input
                  type="select"
                  name="selectCategory"
                  id="selectCategory"
                  onChange={(event) => this.changeCategory(event)}
                  value={this.state.currentCategory}
                >
                  <option>Select category</option>
                  {this.props.categories.map((category) => (
                    <option key={category._id} get_key={category._id}>
                      {category.name}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="product">Product</Label>
                <Input
                  type="select"
                  name="product"
                  id="product"
                  onChange={(event) => this.changeProduct(event)}
                >
                  <option>Select product</option>
                  {this.props.products.map((product) => (
                    <option
                      key={product._id}
                      get_key={product._id}
                      stock={product.inStock}
                      price={product.price}
                      desc={product.description}
                    >
                      {product.productName}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="stock">Stock</Label>
                <Input
                  type="number"
                  name="stock"
                  id="stock"
                  onChange={(event) =>
                    this.setState({ stock: event.target.value })
                  }
                  value={this.state.stock}
                />
              </FormGroup>
              <FormGroup>
                <Label for="price">Price</Label>
                <Input
                  type="number"
                  name="price"
                  id="price"
                  onChange={(event) =>
                    this.setState({ price: event.target.value })
                  }
                  value={this.state.price}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input
                  type="textarea"
                  name="description"
                  id="description"
                  onChange={(event) =>
                    this.setState({ description: event.target.value })
                  }
                  value={this.state.description || ""}
                />
              </FormGroup>
              <FormGroup>
                <Label for="photos">File</Label>
                <Input
                  type="file"
                  name="photos"
                  id="photos"
                  multiple="multiple"
                  accept="image/*"
                />
              </FormGroup>
              <Button
                type="submit"
                color="primary"
                onClick={() => this.setState({ submitted: "update" })}
              >
                Update Product
              </Button>
              <Button
                type="submit"
                color="danger ml-2"
                onClick={() => this.setState({ submitted: "delete" })}
              >
                Delete Product
              </Button>
            </Form>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categoryListReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addProduct: bindActionCreators(adminActions.addProduct, dispatch),
      updateProduct: bindActionCreators(adminActions.updateProduct, dispatch),
      removeProduct: bindActionCreators(adminActions.removeProduct, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProduct);
