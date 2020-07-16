import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import * as categoryActions from "../redux/actions/categoryActions";

class CategoryList extends Component {

    componentDidMount() {
        this.props.actions.getCategories();
    }

  render() {
    return (
      <ListGroup>
        {
          this.props.categories.length !== 0 && this.props.categories.categories.map(category => (
            <ListGroupItem key={category._id}>{category.name}</ListGroupItem>
          ))
        }
      </ListGroup>
    );
  }
}

function mapStateToProps(state) {
    return {
        categories: state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
