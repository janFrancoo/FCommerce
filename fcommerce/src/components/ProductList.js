import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import * as productActions from "../redux/actions/productActions";

class ProductList extends Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.products.map((product) => (
              <tr key={product._id}>
                <td><Link to={"/product/" + product._id}>{product.productName}</Link></td>
                <td>{product.price} TL</td>
                <td><Button color="primary" size="sm" onClick={() => this.props.actions.addProductToCart(product._id)}>Add to Cart</Button></td>
              </tr>
            ))}
        </tbody>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addProductToCart: bindActionCreators(productActions.addProductToCart, dispatch),
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
