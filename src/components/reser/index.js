import React from "react";
import "./style.css"

function Number(props) {
    return ( 
        <div className="num">
           <h3>{props.num}</h3>
        </div>
     );
}

export default Number;