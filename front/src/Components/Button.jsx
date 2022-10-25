import React from 'react'

export const buttonStyle = {
    success: "success ",
    warning: "warning ",
    danger: "danger "
};

function Button(props) {
    let text = props.children ? props.children : "Button";
    let rootClassButton = "button__" + (props.className ? props.className : "default");
    let handeleClick = props.onClick;
    let image = props.image;

    return (
        <button onClick={handeleClick} className='button' style={props.style}>
            <div className={rootClassButton}>
                <p className={`button__text`}>{text}</p>
                {image && (<img className="button__image" src={image}/>)}
            </div>
        </button>
    )
}

export default Button