import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import { Link } from "react-router-dom";

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <section className="box-layout__box">
      <h1 className="box-layout__title">Boilerplate</h1>
      <p>Tag line for app.</p>
      <button className="button" onClick={startLogin}>
        Login with Google
      </button>
      <Link to="/register">Resiter</Link>
    </section>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
