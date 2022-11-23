import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import request from '../packages/API';
import Table from '../Components/Table'
import CenterPage from '../Components/templateStyle/CenterPage'

import { shifts } from '../Components/tableHeaders/shifts';
import Button from '../Components/Button';

export const initRowdata = [
    "_id"
];

function Shifts() {
    const [rowData, setRowData] = useState([]);
    const [shiftsHeaders] = useState(shifts())
    const [searchParams] = useSearchParams();

    useEffect(() => {

        const getData = async () => {
            const res = await request.shifts.get();
            console.log(res.data)
            res.data.forEach((elem, i) => {
                res.data[i].fullName = `${elem.second_name} ${elem.first_name} ${elem.fathers_name}`
            })
            setRowData(res.data);
        }
        getData();
    }, [searchParams])

    const clearQuery = () => {
        window.location.search = '';
    }

    return (
        <CenterPage>
            <div className='containerPage'>
                <div className='containerPage__title'>
                    <h3>Смены</h3>
                    <Button className={Button.style.success + 'button__fs24'} onClick={clearQuery}>Очистить фильтры</Button>
                </div>
                <Table header={shiftsHeaders} row={rowData} />
            </div>
        </CenterPage >
    )
}

export default Shifts