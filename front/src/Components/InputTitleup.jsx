import React from 'react'

function InputTitleup(props) {
    const {
        className,
        placeholder,
        refTo,
        type,
        pattern
    } = props;


    return (
        <div className='custom_input'>
            <div className={className} >
                <p>{placeholder}</p>
                <input ref={refTo} type={type} pattern={pattern} />
            </div>
        </div>

    )
}

InputTitleup.style = {
    profile: "custom_input__profile",
    login: "custom_input__log_in",
    order: "custom_input__order",
};

export default InputTitleup