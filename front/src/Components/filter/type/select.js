import React, { useEffect, useState } from 'react'
import filter from "../filter";


export function SelectFilter(props) {
    const {
        value ={value1:"Значение 1",value2:"Значение 2",value3:"Значение 3"},
        queryKey
    } = props;

    const [values, setValues] = useState(<></>);

    const onChangeHandler = (event) => {
        filter.SendFilter(queryKey, event.target.value);
    }

    useEffect(() => {
        let val = filter.setQueryValue(queryKey);
        let jsxOption = [<option value=''></option>];
        for (let i of Object.keys(value)) {
            jsxOption.push(val == i?<option selected key={i} value={i}>{value[i]}</option>:<option key={i} value={i}>{value[i]}</option>);
        }
        setValues(jsxOption);

    }, [])

   
    

    return (
        <form>
            <div className='filter'>
                <select className="filter__input" onChange={onChangeHandler}>
                    {values}
                </select>
            </div>
        </form >
    )
}

