import React from "react";

const ContinentEditAdminPage = props => {
  console.log(props);
  return <div>Edit continent for {props.match.params.continent}</div>;
};

export default ContinentEditAdminPage;
