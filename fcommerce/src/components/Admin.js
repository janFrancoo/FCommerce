import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as adminActions from "../redux/actions/adminActions";
import { Alert, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import AdminOrders from "./AdminOrders";
import AdminCategory from "./AdminCategory";
import AdminProduct from "./AdminProduct";

class Admin extends Component {
  state = {
    component: <Alert color="info">Admin panel home</Alert>
  }

  componentDidMount() {
    this.props.actions.checkPerm();
  }

  render() {
    return (
      <div>
        {!this.props.adminPerm ? (
          <Alert color="danger">Not authorized for this area!</Alert>
        ) : (
          <Row>
            <Col xs="3">
            <ListGroup>
                <ListGroupItem onClick={() => this.setState({component: <Alert color="info">Admin panel home</Alert>})}>Home</ListGroupItem>
                <ListGroupItem onClick={() => this.setState({component: <AdminOrders />})}>Manage orders</ListGroupItem>
                <ListGroupItem onClick={() => this.setState({component: <AdminCategory />})}>Manage categories</ListGroupItem>
                <ListGroupItem onClick={() => this.setState({component: <AdminProduct />})}>Manage Products</ListGroupItem>
              </ListGroup> 
            </Col>
            <Col xs="6">
              {this.state.component}
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    adminPerm: state.adminCheckReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      checkPerm: bindActionCreators(adminActions.checkAdminAccess, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
