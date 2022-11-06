import React, { useEffect, useRef, useState } from 'react'
import filter from "../filter";


export function DateFilter(props) {
    const {
        queryKey,
    } = props;

    const refInput = useRef();
    useEffect(()=>{
        let value = filter.setQueryValue(queryKey);
        if(value)refInput.current.value = value;
        
    },[])

    const [state, setState] = useState('')
    const onChangeHandler = (event) => {
        const value = event.target.value;
        if (value) {
            setState(value)
        }
    }
    const isEnterPresed = (e) => {
      if (state && e.key == "Enter") {
        filter.SendFilter(queryKey,state);
      }
    }
    
    const submitData = (event) => {
      if (state) {
        filter.SendFilter(queryKey,state);
      }
      event.preventDefault();
    }

    return (
        <form onSubmit={submitData}>
            <div className='filter'>
                <label>
                    <input className="filter__input" type="datetime-local" value={state} onChange={onChangeHandler} onKeyUp={isEnterPresed} ref={refInput}/>
                </label>
                <input className="filter__input" type="submit" value="Submit" />
            </div>

        </form>

    )
}

