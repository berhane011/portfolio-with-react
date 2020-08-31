import React from "react";

import "./style.css";
export default function EachSkill(props) {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {  props.image &&
          <img
            src={props.image}
            alt="mypic"
            style={{ width: "20%", height: "20%" }}
          />}
          {props.fontawesome && props.fontawesome}
          <p>{props.name}</p>
       
      </div>
    </div>
  );
}
