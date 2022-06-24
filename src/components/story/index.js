import React from "react";

function Story(props) {
    return (
    <div className="story">
    <h2>{props.story}</h2>
    <p>{props.sto}</p>
    </div>
    );
}

export default Story;