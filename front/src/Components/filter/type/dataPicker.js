import React, { useEffect, useState } from 'react'
import { format } from "date-fns";

import filter from "../filter";


export function DateFilter({queryKey}) {

    const [state, setState] = useState('')
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        let strTime = filter.setQueryValue(queryKey)
        if (strTime) {
            let value = new Date(strTime)
            setState(format(value, "yyyy-MM-dd") + "T" + format(value, "HH:mm"));
        }


    }, [])


    const onChangeHandler = (event) => {
        let newDate = new Date(event.target.value);

        setState(event.target.value)
        setDate(format(newDate, 'MM/dd/yyyy h:mm aa'))
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
                    <input className="filter__input" type="datetime-local" value={state} onChange={onChangeHandler} onKeyUp={isEnterPresed}/>

                </label>
                <input className="filter__input" type="submit" value="Submit" />
            </div>

        </form>

    )
}

