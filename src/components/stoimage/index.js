import React from "react";

function StoImage(props) {
    return ( 
        <div className="Stoimg">
        <img src={props.src} alt=""/>
        </div>
    );
}

export default StoImage;