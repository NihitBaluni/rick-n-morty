import React from "react";

function Species(props) {
    return (
      <div>
        <h4>Species</h4>
        <input type="checkbox" name="human" value="human" onChange={(event) => {props.handleFilter(event, 'species')}}/> Human <br/>
        <input type="checkbox" name="mytholog" value="mytholog" onChange={(event) => {props.handleFilter(event, 'species')}} /> Mytholog <br/>
        <input type="checkbox" name="others" value="Others" onChange={(event) => {props.handleFilter(event, 'species')}} /> Other Species <br/>
      </div>
    );
}

export default Species;
