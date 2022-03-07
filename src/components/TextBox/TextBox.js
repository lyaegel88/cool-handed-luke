import React from "react";

const TextBox = (props) => {
    return (
        <div className={props.containerStyle}>
                <span className={props.textStyle}>{props.text}</span>
        </div>
    )
}

export default TextBox;