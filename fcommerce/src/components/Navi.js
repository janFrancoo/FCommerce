import React, { Component } from "react";
import { connect } from "react-redux";
import Cookies from "universal-cookie";
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
  Row,
} from "reactstrap";

class Navi extends Component {
  state = {
    isOpen: false,
  };

  toggle() {
    this.setState({isOpen: !this.state.isOpen});
  }

  logout() {
    const cookies = new Cookies();
    cookies.remove("accessToken", { path: "/" });
    cookies.remove("email", { path: "/" });
    cookies.remove("username", { path: "/" });

    window.location.reload();
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
              {(Object.keys(this.props.user).length !== 0 || new Cookies().get("accessToken")) ? (
                <Row>
                  <Cart /> <Button color="primary" className="ml-2" onClick={() => this.logout()}>Logout</Button>
                </Row>
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

export default connect(mapStateToProps)(Navi);
