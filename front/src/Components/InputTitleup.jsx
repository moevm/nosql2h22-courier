import React from 'react'

export const inputStyleTemplate = {
    profile: "custom_input__profile",
    login: "custom_input__log_in",
    order: "custom_input__order",

}

function InputTitleup(props) {


    return (
        <div className='custom_input'>
            <div className={props.className} >
                <p>{props.placeholder}</p>
                <input ref={props.refTo} type={props.type} pattern={props.pattern} />
            </div>
        </div>

    )
}

export default InputTitleup