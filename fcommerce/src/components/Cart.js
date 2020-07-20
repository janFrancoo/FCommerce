import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";
import * as cartActions from "../redux/actions/cartActions";
import * as productActions from "../redux/actions/productActions";

class Cart extends Component {
  state = {
    dropdownOpen: false,
    setDropdownOpen: false,
  };

  toggle() {
    this.setState({
      setDropdownOpen: !this.state.setDropdownOpen,
    });
  }

  componentDidMount() {
    this.props.actions.getCart();
  }

  render() {
    return (
      <Dropdown
        isOpen={this.state.setDropdownOpen}
        toggle={() => this.toggle()}
      >
        <DropdownToggle caret>
          Cart <Badge color="light">{this.props.cart.length}</Badge>
        </DropdownToggle>
        <DropdownMenu>
          {this.props.cart.map((item) => (
            <DropdownItem key={item._id}>
              {console.log(item)}
              {item.product.productName}{" "}
              <Badge color="success">{item.amount}</Badge>
              <Badge
                color="danger"
                className="ml-2"
                onClick={() =>
                  this.props.actions.removeProductFromCart(item.product._id)
                }
              >
                X
              </Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem><Link to="/cart" >Go to cart</Link></DropdownItem>
        </DropdownMenu>
      </Dropdown>
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
      removeProductFromCart: bindActionCreators(productActions.removeProductFromCart, dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
