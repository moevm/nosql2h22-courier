import React, { useEffect, useRef } from 'react'
import filter from "../filter";



export function TextFilter(props) {
    const {
        placeholder,
        type,
        pattern,
        queryKey
    } = props;

    const refInput = useRef();
    useEffect(()=>{
        let value = filter.setQueryValue(queryKey);
        if(value)refInput.current.value = value;
        
    },[])

    const isEnterPresed = (e) => {
        if (e.key === 'Enter' && e.target.value) filter.SendFilter(queryKey,e.target.value);
    }

    return (
        <div className='filter'>
           <input className="filter__input" ref={refInput} placeholder={placeholder} type={type} pattern={pattern} onKeyUp={isEnterPresed} />
        </div>
    )
}

