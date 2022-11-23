import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import Button from '../../Components/Button';
import Table from '../../Components/Table';
import CenterPage from '../../Components/templateStyle/CenterPage';
import { userOrders } from '../../Components/bd';
import request from '../../packages/API';

export const initRowdata = [
    "_id",
    "address",
    "expected_date",
    "cost",
    "size",
    "paid",
    "Open"
];

function MyOrders() {

    const [rowData, setRowData] = useState();
    const [ordersHeader] = useState(userOrders())
    const [searchParams] = useSearchParams();

    const clearQuery = () => {
        window.location.search = '';
    }

    useEffect(() => {

        const getData = async () => {
            let filter = Object.fromEntries([...searchParams])
            if (filter.cost) filter.cost = Number(filter.cost);
            if (filter.paid) filter.paid = filter.paid === 'true';

            const res = await request.filter.post(filter);
            setRowData(res.data.orders);
        }
        //getData();
    }, [searchParams])

    return (
        <CenterPage>
            <div className='containerPage'>
                <div className='containerPage__title'>
                    <h3>Все заказы</h3>
                    <Button className={Button.style.success + 'button__fs24'} onClick={clearQuery}>Очистить фильтры</Button>
                </div>
                <Table header={ordersHeader} row={rowData} init={initRowdata} />
            </div>
        </CenterPage>

    )
}

export default MyOrders