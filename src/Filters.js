import React from "react";

import Species from "./Filters/Species";
import Gender from "./Filters/Gender";
import Origin from "./Filters/Origin";

function Filters (props) {
  return (
    <div className="filters">
      <h3>Filters</h3>
      <Species handleFilter={props.handleFilter} />
      <Gender handleFilter={props.handleFilter} />
      <Origin handleFilter={props.handleFilter} />
    </div>
  );
}

export default Filters;
