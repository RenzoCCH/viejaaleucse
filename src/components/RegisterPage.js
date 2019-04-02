import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => (
  <div className="box-layout">
    <section className="box-layout__box">
      <h1 className="box-layout__title">Boilerplate</h1>
      <p>Register Page.</p>
      <Link to="/login">login</Link>
    </section>
  </div>
);

export default RegisterPage;
