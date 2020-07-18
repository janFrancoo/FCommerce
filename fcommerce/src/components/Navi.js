import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
} from "reactstrap";
import * as authActions from "../redux/actions/authActions";
import Cookies from "universal-cookie";

class Navi extends Component {
  state = {
    isOpen: false,
  };

  toggle() {
    this.state.isOpen = !this.state.isOpen;
  }

  logout() {
    const cookies = new Cookies();
    cookies.remove("accessToken", { path: "/" });
    cookies.remove("email", { path: "/" });
    cookies.remove("username", { path: "/" });
  }

  componentDidMount() {
    this.props.actions.checkIfLogin();
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="mb-3">
          <Container>
            <NavbarBrand href="/">FCommerce</NavbarBrand>
            <NavbarToggler onClick={() => this.toggle()} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
              </Nav>
              {Object.keys(this.props.user).length !== 0 ? (
                <div>
                  Welcome, {this.props.user.username}
                  <Cart /> <Button color="primary" onClick={() => this.logout()}>Logout</Button>
                </div>
              ) : (
                <div>
                  <Link to="/login"><Button color="primary" className="mr-2">Login</Button></Link> 
                  <Link to="/register"><Button color="primary">Register</Button></Link>
                </div>
              )}
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.authReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      checkIfLogin: bindActionCreators(authActions.checkIfLogin, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navi);
