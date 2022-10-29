import React from "react";

function Celebrity(props){
    return(
        <>
            <p>{props.name}</p>
            <img src={props.src} style={props.style}/>
        </>
    )
}

export default Celebrity;