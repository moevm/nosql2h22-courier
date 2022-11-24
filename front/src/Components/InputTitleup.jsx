import React from 'react'

function InputTitleup(props) {
    const {
        className,
        placeholder,
        refTo,
        type,
        pattern,
        onKeyUp,
        isNecessarily,
        isTitleUp 
    } = props;


    return (
        <div className='custom_input'>
            <div className={className} >
                {!isTitleUp && <div className='custom_input__display_flex'><p>{placeholder}</p> {isNecessarily && <div className='txt_danger mes'>*</div>}</div>}
                <input ref={refTo} type={type} pattern={pattern} onKeyUp={onKeyUp} placeholder={isTitleUp?placeholder:""}/>
            </div>
        </div>

    )
}

InputTitleup.style = {
    profile: "custom_input__profile",
    login: "custom_input__log_in",
    signUp: "custom_input__sign_up",
    order: "custom_input__order",
    
};

export default InputTitleup