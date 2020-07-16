import React from 'react';
import Navi from "./Navi";
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div>
      <Navi />
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
