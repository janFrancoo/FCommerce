import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as adminActions from "../redux/actions/adminActions";
import { Alert } from "reactstrap";

class AdminOrders extends Component {
  componentDidMount() {
    this.props.actions.checkPerm();
  }

  render() {
    return (
      <div>
        {!this.props.adminPerm ? (
          <Alert color="danger">Not authorized for this area!</Alert>
        ) : (
            <h1>Hello from admin orders</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrders);
