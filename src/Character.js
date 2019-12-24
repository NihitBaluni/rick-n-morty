import React from "react";

function Character(props) {
  return(
    <div className="contact-card paddin10">
      <img src= {props.item.image} alt={props.item.name} />
      <div className="hilight">
        <h2>{props.item.name}</h2>
        <p>id : {props.item.id} - created {props.item.created}</p>
      </div>
      <div className="width-check">
        <div className="left-float">STATUS</div>
        <div className="right-float">{props.item.status}</div>
      </div>
      <div className="width-check">
        <div className="left-float">SPECIES</div>
        <div className="right-float">{props.item.species}</div>
      </div>
      <div className="width-check">
        <div className="left-float">GENDER</div>
        <div className="right-float">{props.item.gender}</div>
      </div>
      <div className="width-check">
        <div className="left-float">ORIGIN</div>
        <div className="right-float"> {props.item.origin.name}</div>
      </div>
      <div className="width-check">
        <div className="left-float">LAST LOCATION</div>
        <div className="right-float">{props.item.location.name}</div>
      </div>
    </div>
  );
}

export default Character;
