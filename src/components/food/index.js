import React from "react";

function Food(props) {
    return (  
        <div className="food">
            <h2>{props.food}</h2>
        </div>
    );
}

export default Food;