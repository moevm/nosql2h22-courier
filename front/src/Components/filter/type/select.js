import React, { useState } from 'react'
import filter from "../filter";


export function SelectFilter(props) {
    const {
        value = { value1: "Значение 1", value2: "Значение 2", value3: "Значение 3" },
        queryKey
    } = props;

    const [values, setValues] = useState(<></>);
    const [defaultValue, setDefaultValue] = useState(value ? filter.setQueryValue(queryKey) : '')

    const onChangeHandler = (event) => {
        filter.SendFilter(queryKey, event.target.value);
    }


    return (
        <form key={queryKey}>
            <div className='filter' >
                <select className="filter__input" onChange={onChangeHandler} value={defaultValue}>
                    <option key={queryKey + " empty" } value=''></option>
                    {Object.keys(value).map((key, index) => {
                        return (
                            <option key={queryKey + " " + key} value={key}>
                                {value[key]}
                            </option>
                        )
                    })}
                </select>
            </div>
        </form >

    )
}

