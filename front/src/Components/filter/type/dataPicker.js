import React, { useEffect, useState } from 'react'
import { format } from "date-fns";

import filter from "../filter";


export function DateFilter({queryKey}) {

    const [state, setState] = useState('')
    const [date, setDate] = useState()

    useEffect(() => {
        let strTime = filter.setQueryValue(queryKey)
        if (strTime) {
            let value = new Date(strTime)
            setState(format(value, "yyyy-dd-MM") + "T" + format(value, "HH:mm"));
        }


    }, [])


    const onChangeHandler = (event) => {
        let newDate = new Date(event.target.value);
        console.log(format(newDate, 'dd/MM/yyyy hh:mm aa'))
        setState(event.target.value)
        setDate(format(newDate, 'dd/MM/yyyy hh:mm aa'))
    }
    
    const isEnterPresed = (e) => {
        
        if (e.key == "Enter") {
            console.log(date)
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
                    <input className="filter__input" name="date" type="datetime-local" value={state} onChange={onChangeHandler} onKeyUp={isEnterPresed}/>

                </label>
                <input className="filter__input" type="submit" value="Submit" />
            </div>

        </form>

    )
}

