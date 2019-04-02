import React from "react";
import { Link } from "react-router-dom";

const CountryAdminPage = () => (
  <div>
    <ul>
      <li>
        <Link to="/admin/country/europe">Europa</Link>
      </li>
      <li>
        <Link to="/admin/country/america">America</Link>
      </li>
    </ul>
  </div>
);

export default CountryAdminPage;
