import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import * as authActions from "../redux/actions/authActions";
import alertifyjs from "alertifyjs";

class Register extends Component {

handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get('email');
    const username = data.get('username');
    const pass = data.get('password');
    const passAgain = data.get('passwordAgain');
    const userAgreement = data.get('userAgreement');

    if (!(email && username && pass && passAgain))
        alertifyjs.error("Missing fields");
    else if (pass !== passAgain)
        alertifyjs.error("Passwords do not match");
    else if (userAgreement !== "on")
        alertifyjs.error("You must accept the user agreement");
    else
        this.props.actions.register(email, username, pass);
}

  render() {
    return (
      <Form className="w-50 mx-auto" onSubmit={(event) => this.handleSubmit(event)}>
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
          <Label for="username">Username</Label>
          <Input
            name="username"
            id="username"
            placeholder="A valid username"
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
        <FormGroup>
          <Label for="passwordAgain">Password again</Label>
          <Input
            type="password"
            name="passwordAgain"
            id="passwordAgain"
            placeholder="Password again"
          />
        </FormGroup>
        
        <FormGroup check>
          <Label check>
            <Input type="checkbox" name="userAgreement" id="userAgreement" /> I read and accept the user agreement
          </Label>
        </FormGroup>
        <Button className="mt-3">Submit</Button>
      </Form>
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
        register: bindActionCreators(authActions.register, dispatch),
      },
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Register);
