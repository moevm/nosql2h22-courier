import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Table from '../Components/Table';

import CenterPage from '../Components/templateStyle/CenterPage';
import { ordersHeader } from '../Components/bd';
import Button from '../Components/Button';
import request from '../packages/API';

export const initRowdata = [
    "_id",
    "address",
    "expected_date",
    "cost",
    "size",
    "paid",
    "complete",
    "Open"

];



function Allorders() {

    const [rowData, setRowData] = useState();

    const [searchParams] = useSearchParams();

    useEffect(() => {
        let filter = Object.fromEntries([...searchParams]);

        const getData = async () => {
            if(filter.cost) filter.cost = Number(filter.cost);
            if(filter.paid) filter.paid = filter.paid  === 'true';
            if(filter.complete) filter.complete = filter.complete === 'true';

            console.log(filter)
            const res = await request.filter.post(filter);
            console.log(res.data.orders)
            setRowData(res.data.orders);
        }
        getData()
    }, []);

    const clearQuery = () => {
        window.location.search = '';
    }
    

    return (

        <CenterPage>
            <div className='containerPage'>
                <div className='containerPage__title'>
                    <h3>Все заказы</h3>
                    <Button className={Button.style.success + 'button__fs24'} onClick={clearQuery}>Очистить фильтры</Button>
                </div>

                <Table header={ordersHeader} row={rowData} init={initRowdata}/>
            </div>
        </CenterPage>

    )
}

export default Allorders