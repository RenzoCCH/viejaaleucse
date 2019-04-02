import React from "react";
import { Link } from "react-router-dom";

const ContinentAdminPage = () => (
  <div>
    <ul>
      <li>
        <Link to="/admin/continent/europe">Europa</Link>
      </li>
      <li>
        <Link to="/admin/continent/america">America</Link>
      </li>
    </ul>
  </div>
);

export default ContinentAdminPage;
