import React from 'react'


function Button(props) {
    const {
        children = "Button",
        className = "default",
        onClick,
        image,
        style
    } = props;

    let text = children;

    return (
        <button onClick={onClick} className='button' style={style}>
            <div className={"button__" + className}>
                <p className={`button__text`}>{text}</p>
                {image && (<img className="button__image" src={image}/>)}
            </div>
        </button>
    )
}

Button.style = {
    success: "success ",
    warning: "warning ",
    danger: "danger ",
    default: "default "
}

export default Button