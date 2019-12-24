
import React from "react";

function Gender(props) {
  return(
    <div>
      <h4>Gender</h4>
      <input type="checkbox" name="male" value="Male" onChange={(event) => {props.handleFilter(event, 'gender')}}/> Male <br/>
      <input type="checkbox" name="female" value="Female" onChange={(event) => {props.handleFilter(event, 'gender')}} /> Female <br/>
    </div>
  );
}

export default Gender;
