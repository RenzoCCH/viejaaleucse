import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => (
  <div>
    <Link to="/map">Europa</Link>
    <Link to="/map/america">America</Link>
    <Link to="/map/southAmerica">Sud America</Link>
  </div>
);

export default DashboardPage;
