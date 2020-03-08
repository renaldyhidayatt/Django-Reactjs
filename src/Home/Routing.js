import React, { Component } from "react";
import { Switch, withRouter } from "react-router-dom";
import PropsRoute from "../route/PropsRoute";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import About from "./About";

class Routing extends Component{
  render(){
    return(
      <Switch>
        <PropsRoute path="/" component={Home} />
        <PropsRoute path="/register" componet={Register} />
        <PropsRoute path="/login" componet={Login} />
        <PropsRoute path="/about" component={About} />
      </Switch>
    )
  }
}


export default withRouter(Routing);
