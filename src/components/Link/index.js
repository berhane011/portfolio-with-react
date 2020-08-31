import React from "react";
import "./style.css";
export default function index(props) {
  return (
    <div>
      <div className="pads">
        <a
          class="animation"
          href={props.url}
        > 
          {props.image &&
          <img
            src= {props.image}
            width="70"
            height="80"
          ></img>
        }
          {props.fontawesome && props.fontawesome}
        
         <span className ="links">{props.name}</span> 
          
        </a>
      </div>
    </div>
  );
}
