import React, { useEffect, useRef, useState } from 'react'
import { format } from "date-fns";

import filter from "../filter";


export function DateFilter(props) {
    const {
        queryKey,
    } = props;
    const [state, setState] = useState('')
    const refInput = useRef();
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        let value = filter.setQueryValue(queryKey);
        if (value) refInput.current.value = value;

    }, [])


    const onChangeHandler = (event) => {
        let newDate =  new Date(event.target.value);
        console.log(typeof format(newDate,'MM/dd/yyyy h:mm aa'))
        setState(event.target.value)
        setDate(format(newDate,'MM/dd/yyyy h:mm aa'))
    }
    const isEnterPresed = (e) => {
        console.log(state)
        if (e.key == "Enter") {

            filter.SendFilter(queryKey, date);
        }
    }

    const submitData = (event) => {
        filter.SendFilter(queryKey, date);
        event.preventDefault();
    }

    return (
        <form onSubmit={submitData}>
            <div className='filter'>
                <label>
                    <input className="filter__input" type="datetime-local" value={state} onChange={onChangeHandler} onKeyUp={isEnterPresed} ref={refInput} />
                    
                </label>
                <input className="filter__input" type="submit" value="Submit" />
            </div>

        </form>
     
    )
}

