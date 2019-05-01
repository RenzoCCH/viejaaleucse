import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import MapGamePage from "../components/gameComponents/MapGamePage";
import DashboardPage from "../components/DashboardPage.js";

import ContinentAdminPage from "../components/Admin/ContinentAdminPage";
import CountryAdminPage from "../components/Admin/CountryAdminPage";
import CounryEditAdminPage from "../components/Admin/CountryEditAdminPage";
import ContinentEditAdminPage from "../components/Admin/ContinentEditAdminPage";

import NotFoundPage from "../components/NotFoundPage.js";
import LoginPage from "../components/LoginPage.js";
import RegisterPage from "../components/RegisterPage.js";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import GenericRoute from "./GenericRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            timeout={300}
            classNames="fade"
          >
            <Switch location={location}>
              {/*<GenericRoute path="/" exact={true} component={DashboardPage} />*/}
              {/*<GenericRoute path="/map" component={MapGamePage} />*/}

              <Route path="/" exact={true} component={DashboardPage} />
              <Route path="/map" component={MapGamePage} />

              {/*<PublicRoute path="/login" component={LoginPage} />*/}
              {/*<PublicRoute path="/register" component={RegisterPage} />*/}

              {/*<PrivateRoute path="/dashboard" component={DashboardPage} />*/}
              {/*<PrivateRoute*/}
                {/*path="/admin/continent"*/}
                {/*exact={true}*/}
                {/*component={ContinentAdminPage}*/}
              {/*/>*/}
              {/*<PrivateRoute*/}
                {/*path="/admin/continent/:continent"*/}
                {/*exact={true}*/}
                {/*component={ContinentEditAdminPage}*/}
              {/*/>*/}
              {/*<PrivateRoute*/}
                {/*path="/admin/country"*/}
                {/*exact={true}*/}
                {/*component={CountryAdminPage}*/}
              {/*/>*/}
              {/*<PrivateRoute*/}
                {/*path="/admin/country/:country"*/}
                {/*exact={true}*/}
                {/*component={CounryEditAdminPage}*/}
              {/*/>*/}
              {/*<PrivateRoute*/}
                {/*path="/admin/continent/:continent"*/}
                {/*component={ContinentEditAdminPage}*/}
              {/*/>*/}
              {/*<PrivateRoute*/}
                {/*path="/admin/continent/:continent"*/}
                {/*component={ContinentEditAdminPage}*/}
              {/*/>*/}

              {/*<Route component={NotFoundPage} />*/}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  </Router>
);

export default AppRouter;
