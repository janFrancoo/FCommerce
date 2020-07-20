import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../redux/actions/categoryActions";
import * as adminActions from "../redux/actions/adminActions";
import { Label, Input, Button } from "reactstrap";

class AdminAddCategory extends Component {
  state = {
    currentCategory: "",
    newCategory: "",
  };

  componentDidMount() {
    this.props.actions.getCategories();
  }

  render() {
    return (
      <div>
        <Label for="selectCategory">Category</Label>
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
        <Button
          className="mt-3 float-right"
          color="danger"
          onClick={() =>
            this.props.actions.removeCategory(this.state.currentCategory)
          }
        >
          Delete
        </Button>
        <Label for="newCategory" className="mt-5">
          Category name
        </Label>
        <Input
          name="newCategory"
          id="newCategory"
          placeholder="A valid category name"
          onChange={(event) =>
            this.setState({ newCategory: event.target.value })
          }
        />
        <Button
          color="primary"
          className="mt-3 float-right"
          onClick={() => this.props.actions.addCategory(this.state.newCategory)}
        >
          Add category
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categoryListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
      addCategory: bindActionCreators(adminActions.addCategory, dispatch),
      removeCategory: bindActionCreators(adminActions.removeCategory, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAddCategory);
