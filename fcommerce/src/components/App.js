import React from "react";
import Navi from "./Navi";
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import Login from "./Login";
import Register from "./Register";
import CartDetail from "./CartDetail";
import Admin from "./Admin";

function App() {
  return (
    <div>
      <Navi />
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/auth/verify-email" component={Login} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/cart" component={CartDetail} />
          <Route path="/admin" exact component={Admin} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
