import logo from "../logo.svg";
import React from "react";

const Children = (props) => {
    return (
        <div>
            <hr/>
            <h2>{props.text}</h2>
            <hr/>
            <img src={logo}  alt="logo" style={{width: props.width}}/>
        </div>
    )
}

export default Children;