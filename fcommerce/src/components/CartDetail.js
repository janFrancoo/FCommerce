import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { Table, Badge, Alert, Button } from "reactstrap";
import * as cartActions from "../redux/actions/cartActions";
import * as productActions from "../redux/actions/productActions";

class Cart extends Component {
  getTotalPrice() {
    let totalPrice = 0;
    this.props.cart.map((item) => {
      totalPrice += item.amount * item.product.price;
    });
    return totalPrice;
  }

  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Amount</th>
              <th>Total Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item) => (
              <tr key={item._id}>
                <td><Link to={"/product/" + item.product._id}>{item.product.productName}</Link></td>
                <td>
                  <Badge
                    className="onclick_badge"
                    color="secondary"
                    onClick={() =>
                      this.props.actions.addProductToCart(item.product._id, -1)
                    }
                  >
                    -
                  </Badge>{" "}
                  {item.amount}{" "}
                  <Badge
                    className="onclick_badge"
                    color="secondary"
                    onClick={() =>
                      this.props.actions.addProductToCart(item.product._id, 1)
                    }
                  >
                    +
                  </Badge>
                </td>
                <td>{item.amount * item.product.price} </td>
                <td>
                  <Badge
                    className="onclick_badge"
                    color="danger"
                    onClick={() =>
                      this.props.actions.removeProductFromCart(item.product._id)
                    }
                  >
                    X
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Alert
          className="row justify-content-between align-items-center"
          color="info"
        >
          Cart summary: {this.getTotalPrice()}{" "}
          <Button className="">Checkout</Button>
        </Alert>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCart: bindActionCreators(cartActions.getCart, dispatch),
      addProductToCart: bindActionCreators(
        productActions.addProductToCart,
        dispatch
      ),
      removeProductFromCart: bindActionCreators(
        productActions.removeProductFromCart,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
