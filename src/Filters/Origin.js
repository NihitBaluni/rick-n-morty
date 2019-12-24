import React from "react";

function Origins(props) {
  return (
    <div>
      <h4>Origin</h4>
      <input type="checkbox" name="unknown" value="Unknown" onChange={(event) => {props.handleFilter(event, 'origin')}}/> Unknown <br/>
      <input type="checkbox" name="post-apocalypse" value="Post-apocalyptic Earth" onChange={(event) => {props.handleFilter(event, 'origin')}} /> Post-apocalyptic Earth <br/>
      <input type="checkbox" name="nuptia4" value="Nuptia4" onChange={(event) => {props.handleFilter(event, 'origin')}} />Nuptia4 <br/>
      <input type="checkbox" name="others" value="Others" onChange={(event) => {props.handleFilter(event, 'origin')}} /> Other Origins....<br/>
    </div>
  );
}

export default Origins;
