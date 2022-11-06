import React, { useEffect, useRef, useState } from 'react'
import filter from "../filter";


export function DateFilter(props) {
    const {
        queryKey,
    } = props;
    const [state, setState] = useState('')
    const refInput = useRef();

    useEffect(()=>{
        let value = filter.setQueryValue(queryKey);
        if(value)refInput.current.value = value;
        
    },[])

    
    const onChangeHandler = (event) => {
        setState(event.target.value)
    }
    const isEnterPresed = (e) => {
      if (e.key == "Enter") {
        filter.SendFilter(queryKey,state);
      }
    }
    
    const submitData = (event) => {
      filter.SendFilter(queryKey,state);
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

