import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import * as authActions from "../redux/actions/authActions";
import alertifyjs from "alertifyjs";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        redirect: false
    }
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const token = query.get('verificationToken');
    if (token)
      this.props.actions.verifyMail(token);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get('email');
    const pass = data.get('password');

    if (!(email && pass))
        alertifyjs.error("Missing fields");
    else
        this.props.actions.login(email, pass);
  }

  componentDidUpdate() {
    if (Object.keys(this.props.user).length !== 0)
      this.setState({redirect: true});
  }

  render() {
    return (
      <Form className="w-50 mx-auto" onSubmit={(event) => this.handleSubmit(event)}>
        {this.state.redirect && alertifyjs.success("Welcome, " + this.props.user.data.username + "!") && <Redirect to="/" />}
        <FormGroup>
          <Label for="email">E-mail</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="A valid password"
          />
        </FormGroup>
        <Button className="mt-3">Login</Button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.authReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      login: bindActionCreators(authActions.login, dispatch),
      verifyMail: bindActionCreators(authActions.verifyMail, dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
