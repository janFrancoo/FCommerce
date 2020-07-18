import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";

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
          {this.props.products.length !== 0 &&
            this.props.products.products.map((product) => (
              <tr key={product._id}>
                <td><Link to={"/product/" + product._id}>{product.productName}</Link></td>
                <td>{product.price} TL</td>
                <td><Button color="primary" size="sm">Add to Cart</Button></td>
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

export default connect(mapStateToProps)(ProductList);
