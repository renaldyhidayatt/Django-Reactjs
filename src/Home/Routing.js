import React, { Component } from "react";
import { Switch } from "react-router-dom";
import PropsRoute from "../route/PropsRoute";
import Home from "./Home";

class Routing extends Component{
  render(){
    return(
      <Switch>
        <PropsRoute path="/" component={Home} />
      </Switch>
    )
  }
}


export default Routing;
