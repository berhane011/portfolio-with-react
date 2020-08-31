import React from 'react'

import "./style.css";
export default function Card(props) {
    return (
        <div>
            <div className="col-lg-4 size container" style={{textAlign:"center",padding:"2rem"}}>
                  
                  <a href={props.link}>
                  <img src={props.image} alt="mypic" style = {{width:"300%",height:"300%"}}/>
                  <p >{props.name}</p>
                  </a>
                 
              </div> 
        </div>
    )
}
