import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as productActions from "../redux/actions/productActions";
import {
  Input,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";

class Search extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {};

  search(event) {
    const key = event.target.value;

    if (key !== "") {
      this.setState({ isOpen: true });
      this.props.actions.searchProduct(key);
    } else this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <Input
          className="search_box mr-2"
          type="text"
          name="search"
          id="search"
          placeholder="Search a product"
          onChange={(event) => this.search(event)}
        />
        <Dropdown toggle={() => this.toggle()} isOpen={this.state.isOpen}>
          <DropdownToggle className="invisible"></DropdownToggle>
          <DropdownMenu >
            {this.props.searchResults.map((product) => (
              <DropdownItem key={product._id}>
                <Link to={"/product/" + product._id}>
                  <img src={"http://localhost:5000/" + product.images[0]} alt="" width="25px" height="25px" className="mr-3" />
                  {product.productName}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchResults: state.searchReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      searchProduct: bindActionCreators(productActions.searchProduct, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
