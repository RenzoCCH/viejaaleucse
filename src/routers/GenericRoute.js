import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Header from "../components/Header";

export const GenericRoute = ({
  // isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props => (
      <div className="page">
        <Header />
        <Component {...props} />
      </div>
    )}
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(GenericRoute);
