import React, { Component } from "react";
import { Switch } from "react-router-dom";
// import Dashboard from "./dashboard/Dashboard";
import Dashboard from "./Dashboard";
import PropsRoute from "../route/PropsRoute";

class Routing extends Component{
  render(){
    return(
      <Switch>
        <PropsRoute
          path=""
          component={Dashboard}
        />
      </Switch>

    )
  }
}

export default Routing;
