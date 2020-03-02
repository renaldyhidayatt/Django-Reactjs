// Used to prevent googlebot from rendering our page as blank, should be imported first
import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Pace from "./Common/Pace";
import PrivateRoute from "./route/PrivateRoute";



const Dashboard = lazy(() => import("./Dashboard/Main"));

const Home = lazy(() => import("./Home/Main"));


function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        {/* Roboto is used by Material-UI, Baloo+Bhaijaan is used for the brand
            name in the navigation */}
        <link
          href="https://fonts.googleapis.com/css?family=Baloo+Bhaijaan|Roboto:300,400,500&display=swap"
          rel="stylesheet"
        />
        <CssBaseline />
        <GlobalStyles />
        <Pace color={theme.palette.primary.light} />
        <Suspense fallback={<Fragment />}>
          <Switch>
            <PrivateRoute path="/c" component={Dashboard} />
            <Route>
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
