import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import * as categoryActions from "../redux/actions/categoryActions";
import * as productActions from "../redux/actions/productActions";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
    this.props.actions.getProducts(this.props.currentCategory._id);
  }

  changeCategory(category) {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category._id);
  }

  render() {
    return (
      <ListGroup>
        {
          this.props.categories.map((category) => (
            <ListGroupItem
              key={category._id}
              active={this.props.currentCategory._id === category._id}
              onClick={() => this.changeCategory(category)}
            >
              {category.name}
            </ListGroupItem>
          ))
        }
      </ListGroup>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categoryListReducer,
    currentCategory: state.changeCategoryReducer,
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
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
